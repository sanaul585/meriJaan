const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const open = mainNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.textContent = open ? "×" : "☰";
  });
  mainNav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  }));
}

// Scroll reveal
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));

// Surprise message
const revealBtn = document.getElementById("revealFeeling");
if (revealBtn) {
  revealBtn.addEventListener("click", () => {
    const message = document.getElementById("secretMessage");
    message.hidden = !message.hidden;
    revealBtn.textContent = message.hidden ? "Open a little secret ♡" : "Close my secret ♡";
  });
}

// Love letter modal
const modal = document.getElementById("letterModal");
if (modal) {
  document.querySelectorAll(".letter-card").forEach(card => card.addEventListener("click", () => {
    document.getElementById("modalText").textContent = card.dataset.letter;
    modal.hidden = false;
  }));
  function closeLetter() { modal.hidden = true; }
  document.getElementById("closeModal").addEventListener("click", closeLetter);
  modal.addEventListener("click", e => { if (e.target === modal) closeLetter(); });
  document.addEventListener("keydown", e => { if (e.key === "Escape") closeLetter(); });
}

// Google and YouTube song discovery
document.getElementById("googleSearchForm")?.addEventListener("submit", e => {
  e.preventDefault();
  const q = document.getElementById("songSearch").value.trim();
  if (!q) return;
  window.open("https://google.com" + encodeURIComponent(q + " song"), "_blank", "noopener,noreferrer");
});
document.getElementById("youtubeSearchForm")?.addEventListener("submit", e => {
  e.preventDefault();
  const q = document.getElementById("youtubeSearch").value.trim();
  if (!q) return;
  window.open("https://youtube.com" + encodeURIComponent(q), "_blank", "noopener,noreferrer");
});

// YouTube Player
let ytPlayer = null;
let apiReady = false;
let pendingVideoId = null;
window.onYouTubeIframeAPIReady = function () {
  apiReady = true;
  if (pendingVideoId) loadYouTubeVideo(pendingVideoId);
};
function extractVideoId(url) {
  try {
    const parsed = new URL(url);
    if (parsed.hostname.includes("youtu.be")) return parsed.pathname.slice(1).split("/")[0];
    if (parsed.hostname.includes("youtube.com")) {
      if (parsed.searchParams.get("v")) return parsed.searchParams.get("v");
      const parts = parsed.pathname.split("/");
      const index = parts.findIndex(p => ["embed", "shorts", "live"].includes(p));
      if (index >= 0) return parts[index + 1];
    }
  } catch (_) {}
  return null;
}
function loadYouTubeVideo(videoId) {
  const status = document.getElementById("playerStatus");
  if (!apiReady || !window.YT || !YT.Player) { pendingVideoId = videoId; status.textContent = "Loading YouTube player…"; return; }
  if (ytPlayer && typeof ytPlayer.loadVideoById === "function") {
    ytPlayer.loadVideoById(videoId);
  } else {
    document.getElementById("youtubePlayer").innerHTML = '<div id="ytMount"></div>';
    ytPlayer = new YT.Player("ytMount", {
      videoId,
      playerVars: { playsinline: 1, rel: 0 },
      events: {
        onReady: event => { event.target.setVolume(Number(document.getElementById("volume").value)); status.textContent = "Song ready ♡"; },
        onError: () => { status.textContent = "This video cannot be embedded. Open it on YouTube instead."; }
      }
    });
  }
  document.getElementById("trackTitle").textContent = "Your selected song";
  status.textContent = "Loading your song…";
  pendingVideoId = null;
}
document.getElementById("videoForm")?.addEventListener("submit", e => {
  e.preventDefault();
  const url = document.getElementById("videoUrl").value.trim();
  const id = extractVideoId(url);
  if (!id) { document.getElementById("playerStatus").textContent = "Please paste a valid YouTube video link."; return; }
  loadYouTubeVideo(id);
});
document.getElementById("playPause")?.addEventListener("click", () => {
  if (!ytPlayer || typeof ytPlayer.getPlayerState !== "function") {
    document.getElementById("playerStatus").textContent = "Search a song and load its YouTube link first ♡";
    return;
  }
  const state = ytPlayer.getPlayerState();
  if (state === 1) { ytPlayer.pauseVideo(); document.getElementById("playPause").textContent = "▶"; }
  else { ytPlayer.playVideo(); document.getElementById("playPause").textContent = "Ⅱ"; }
});
document.getElementById("volume")?.addEventListener("input", e => {
  if (ytPlayer && typeof ytPlayer.setVolume === "function") ytPlayer.setVolume(Number(e.target.value));
});
document.getElementById("musicJump")?.addEventListener("click", () => document.getElementById("music").scrollIntoView({ behavior: "smooth" }));

// Firebase Cloud Gallery (Shared across devices in real-time)
(() => {
  const PAGE_SIZE = 4;
  let allMedia = [];
  let visibleCount = PAGE_SIZE;
  let currentView = 'grid';
  let currentPreviewIndex = 0;
  let previewItems = [];
  const $ = id => document.getElementById(id);
  const status = text => { if ($('uploadStatus')) $('uploadStatus').textContent = text; };

  // Image compressor so photos fit easily inside Firestore (free tier)
  function compressImage(file, maxWidth = 900, quality = 0.72) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = e => {
        const img = new Image();
        img.onload = () => {
          let w = img.width, h = img.height;
          if (w > maxWidth) {
            h = Math.round((h * maxWidth) / w);
            w = maxWidth;
          }
          const canvas = document.createElement('canvas');
          canvas.width = w;
          canvas.height = h;
          canvas.getContext('2d').drawImage(img, 0, 0, w, h);
          resolve(canvas.toDataURL('image/jpeg', quality));
        };
        img.onerror = reject;
        img.src = e.target.result;
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }

  function applyBackground(url) {
    if (url) {
      document.documentElement.style.setProperty('--user-bg', `url("${url}")`);
      document.body.classList.add('has-user-background');
    } else {
      document.documentElement.style.removeProperty('--user-bg');
      document.body.classList.remove('has-user-background');
    }
  }

  function initFirebaseGallery() {
    const db = window.firebaseDB;
    const { collection, addDoc, onSnapshot, query, orderBy, deleteDoc, doc, setDoc } = window.firestoreTools;
    if (!db) {
      status('Connecting to cloud gallery...');
      return;
    }

    // Listen to Profile & Background settings in real-time
    onSnapshot(doc(db, 'settings', 'siteConfig'), snap => {
      if (snap.exists()) {
        const data = snap.data();
        if (data.profileUrl) {
          $('fianceProfilePhoto').src = data.profileUrl;
          $('fianceProfilePhoto').hidden = false;
          $('profilePhotoPlaceholder').hidden = true;
        }
        applyBackground(data.backgroundUrl || '');
      }
    });

    // Listen to Gallery Photos in real-time
    const q = query(collection(db, 'gallery'), orderBy('createdAt', 'desc'));
    onSnapshot(q, snapshot => {
      allMedia = snapshot.docs.map(d => ({ id: d.id, ...d.data() }));
      $('mediaCount').textContent = allMedia.length.toLocaleString();
      renderGallery();
    }, err => {
      console.error(err);
      status('Check Firebase Firestore Rules (allow read, write: if true).');
    });

    // Upload Profile Photo
    $('profileUpload').addEventListener('change', async e => {
      const file = e.target.files[0]; if (!file) return;
      try {
        status('Uploading Mobashshera’s top photo…');
        const dataUrl = await compressImage(file, 600, 0.8);
        await setDoc(doc(db, 'settings', 'siteConfig'), { profileUrl: dataUrl }, { merge: true });
        status('Mobashshera’s top photo updated for both of you ♡');
      } catch (err) {
        console.error(err);
        status('Could not upload photo. Try a smaller image.');
      }
      e.target.value = '';
    });

    // Upload Fixed Background
    $('backgroundUpload').addEventListener('change', async e => {
      const file = e.target.files[0]; if (!file) return;
      try {
        status('Uploading background photo…');
        const dataUrl = await compressImage(file, 1100, 0.7);
        await setDoc(doc(db, 'settings', 'siteConfig'), { backgroundUrl: dataUrl }, { merge: true });
        status('Fixed background updated for both of you ♡');
      } catch (err) {
        console.error(err);
        status('Could not upload background. Try a smaller image.');
      }
      e.target.value = '';
    });

    // Clear Background
    $('clearBackground').addEventListener('click', async () => {
      await setDoc(doc(db, 'settings', 'siteConfig'), { backgroundUrl: '' }, { merge: true });
      status('Default romantic background restored ♡');
    });

    // Upload Gallery Photos
    $('mediaUpload').addEventListener('change', async e => {
      const files = Array.from(e.target.files || []);
      if (!files.length) return;
      let saved = 0, failed = 0;
      status(`Uploading ${files.length} photo(s) to shared cloud…`);
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        if (!file.type.startsWith('image/')) {

          failed++;
          continue;
        }
        try {
          const dataUrl = await compressImage(file, 900, 0.72);
          await addDoc(collection(db, 'gallery'), {
            name: file.name,
            kind: 'image',
            url: dataUrl,
            createdAt: Date.now() + i
          });
          saved++;
          status(`Uploaded ${saved}/${files.length} photo(s)…`);
        } catch (err) {
          failed++;
          console.error(err);
        }
      }
      status(`${saved} photo(s) added to shared gallery${failed ? ` · ${failed} skipped (only images supported in free cloud)` : ' ♡'}`);
      e.target.value = '';
    });

    window.deleteCloudMedia = async (id, name) => {
      if (!window.confirm(`Delete "${name}" for everyone? This cannot be undone.`)) return;
      try {
        await deleteDoc(doc(db, 'gallery', id));
        status('Memory deleted from shared gallery ♡');
      } catch (err) {
        console.error(err);
        status('Could not delete memory.');
      }
    };
  }

  function filteredMedia() {
    const q = $('gallerySearch').value.trim().toLowerCase();
    return allMedia.filter(item => !q || item.name.toLowerCase().includes(q));
  }

  function renderGallery() {
    const grid = $('galleryGrid');
    const items = filteredMedia();
    grid.className = `gallery-grid ${currentView}-view`;
    const shown = items.slice(0, visibleCount);
    if (!shown.length) {
      grid.innerHTML = `<div class="gallery-empty"><span>♡</span><h3>${allMedia.length ? 'No matching memories found' : 'Your shared memory gallery is waiting'}</h3><p>${allMedia.length ? 'Try another file name.' : 'Upload your first photos to share them together.'}</p></div>`;
    } else {
      grid.innerHTML = shown.map(item => `
        <div class="media-card" data-media-id="${item.id}">
          <button class="media-open" type="button" aria-label="Open ${escapeHtml(item.name)}">
            <img class="media-thumb" src="${item.url}" alt="${escapeHtml(item.name)}" loading="lazy">
            <span class="media-kind">♡ PHOTO</span>
            <span class="media-name">${escapeHtml(item.name)}</span>
          </button>
          <button class="media-delete" type="button" data-delete-id="${item.id}" aria-label="Delete ${escapeHtml(item.name)}" title="Delete this memory">🗑</button>
        </div>`).join('');

      grid.querySelectorAll('.media-open').forEach(button => button.addEventListener('click', () => {
        const card = button.closest('.media-card');
        previewItems = items;
        currentPreviewIndex = items.findIndex(item => item.id === card.dataset.mediaId);
        showPreview();
      }));
      grid.querySelectorAll('.media-delete').forEach(button => button.addEventListener('click', e => {
        e.stopPropagation();
        const id = button.dataset.deleteId;
        const item = allMedia.find(m => m.id === id);
        if (item && window.deleteCloudMedia) window.deleteCloudMedia(id, item.name);
      }));
    }
    const moreButton = $('loadMoreMedia');
    moreButton.hidden = items.length <= PAGE_SIZE;
    moreButton.textContent = visibleCount >= items.length ? 'Show less ↑' : 'Show more memories ♡';
  }

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));
  }

  $('gallerySearch').addEventListener('input', () => { visibleCount = PAGE_SIZE; renderGallery(); });
  document.querySelectorAll('.view-button').forEach(button => button.addEventListener('click', () => {
    currentView = button.dataset.view;
    document.querySelectorAll('.view-button').forEach(b => b.classList.toggle('active', b === button));
    renderGallery();
  }));
  $('loadMoreMedia').addEventListener('click', () => {
    const items = filteredMedia();
    if (visibleCount >= items.length) {
      visibleCount = PAGE_SIZE;
      renderGallery();
      document.getElementById('galleryGrid').scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      visibleCount = Math.min(visibleCount + PAGE_SIZE, items.length);
      renderGallery();
    }
  });

  function showPreview() {
    if (!previewItems.length) return;
    const item = previewItems[currentPreviewIndex];
    $('mediaModalContent').innerHTML = `<img src="${item.url}" alt="${escapeHtml(item.name)}">`;
    $('mediaModalCaption').textContent = `${item.name} · ${currentPreviewIndex + 1} of ${previewItems.length}`;
    $('mediaModal').hidden = false;
    $('mediaPrev').hidden = previewItems.length < 2;
    $('mediaNext').hidden = previewItems.length < 2;
  }
  function closePreview() { $('mediaModalContent').innerHTML = ''; $('mediaModal').hidden = true; }
  $('closeMediaModal').addEventListener('click', closePreview);
  $('mediaModal').addEventListener('click', e => { if (e.target === $('mediaModal')) closePreview(); });
  $('mediaPrev').addEventListener('click', () => { currentPreviewIndex = (currentPreviewIndex - 1 + previewItems.length) % previewItems.length; showPreview(); });
  $('mediaNext').addEventListener('click', () => { currentPreviewIndex = (currentPreviewIndex + 1) % previewItems.length; showPreview(); });
  document.addEventListener('keydown', e => {
    if ($('mediaModal').hidden) return;
    if (e.key === 'Escape') closePreview();
    if (e.key === 'ArrowLeft' && previewItems.length > 1) { currentPreviewIndex = (currentPreviewIndex - 1 + previewItems.length) % previewItems.length; showPreview(); }
    if (e.key === 'ArrowRight' && previewItems.length > 1) { currentPreviewIndex = (currentPreviewIndex + 1) % previewItems.length; showPreview(); }
  });

  if (window.firebaseDB) initFirebaseGallery();
  else window.addEventListener('firebase-ready', initFirebaseGallery);
})();
