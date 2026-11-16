const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
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

// Scroll reveal
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, {threshold: 0.12});
document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));

// A gentle surprise message
document.getElementById("revealFeeling").addEventListener("click", () => {
  const message = document.getElementById("secretMessage");
  message.hidden = !message.hidden;
  document.getElementById("revealFeeling").textContent = message.hidden ? "Open a little secret ♡" : "Close my secret ♡";
});

// Love letter modal
const modal = document.getElementById("letterModal");
document.querySelectorAll(".letter-card").forEach(card => card.addEventListener("click", () => {
  document.getElementById("modalText").textContent = card.dataset.letter;
  modal.hidden = false;
}));
function closeLetter(){ modal.hidden = true; }
document.getElementById("closeModal").addEventListener("click", closeLetter);
modal.addEventListener("click", e => { if (e.target === modal) closeLetter(); });
document.addEventListener("keydown", e => { if (e.key === "Escape") closeLetter(); });

// Local photo/video library (IndexedDB supports many files without filling localStorage)
(() => {
  const DB_NAME = 'SanaulMobassheraMemories';
  const DB_VERSION = 1;
  const PAGE_SIZE = 4;
  let db;
  let allMedia = [];
  let visibleCount = PAGE_SIZE;
  let currentView = 'grid';
  let currentPreviewIndex = 0;
  let previewItems = [];
  const objectUrls = new Map();
  const $ = id => document.getElementById(id);
  const status = text => { $('uploadStatus').textContent = text; };

  function openDatabase() {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(DB_NAME, DB_VERSION);
      request.onupgradeneeded = () => {
        const database = request.result;
        if (!database.objectStoreNames.contains('media')) database.createObjectStore('media', {keyPath: 'id'});
        if (!database.objectStoreNames.contains('settings')) database.createObjectStore('settings', {keyPath: 'key'});
      };
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  }
  function store(name, mode='readonly') { return db.transaction(name, mode).objectStore(name); }
  function requestResult(request) { return new Promise((resolve,reject) => { request.onsuccess=()=>resolve(request.result); request.onerror=()=>reject(request.error); }); }
  async function saveSetting(key, blob, type) {
    await requestResult(store('settings','readwrite').put({key, blob, type}));
  }
  async function getSetting(key) { return requestResult(store('settings').get(key)); }
  function urlFor(item) {
    if (!objectUrls.has(item.id)) objectUrls.set(item.id, URL.createObjectURL(item.blob));
    return objectUrls.get(item.id);
  }
  async function loadPersonalImages() {
    try {
      const profile = await getSetting('profile');
      if (profile) {
        $('fianceProfilePhoto').src = URL.createObjectURL(profile.blob);
        $('fianceProfilePhoto').hidden = false;
        $('profilePhotoPlaceholder').hidden = true;
      }
      const bg = await getSetting('background');
      if (bg) applyBackground(URL.createObjectURL(bg.blob));
    } catch (error) { console.warn('Could not load saved personal images', error); }
  }
  function applyBackground(url) {
    document.documentElement.style.setProperty('--user-bg', `url("${url}")`);
    document.body.classList.add('has-user-background');
  }
  $('profileUpload').addEventListener('change', async e => {
    const file = e.target.files[0]; if (!file) return;
    try {
      await saveSetting('profile', file, file.type);
      $('fianceProfilePhoto').src = URL.createObjectURL(file);
      $('fianceProfilePhoto').hidden = false; $('profilePhotoPlaceholder').hidden = true;
      status('Mobasshera’s top photo has been updated ♡');
    } catch { status('Could not save this photo. Check available browser storage.'); }
    e.target.value = '';
  });
  $('backgroundUpload').addEventListener('change', async e => {
    const file = e.target.files[0]; if (!file) return;
    try { await saveSetting('background', file, file.type); applyBackground(URL.createObjectURL(file)); status('Your fixed website background is updated ♡'); }
    catch { status('Could not save the background. Check available browser storage.'); }
    e.target.value = '';
  });
  $('clearBackground').addEventListener('click', async () => {
    await requestResult(store('settings','readwrite').delete('background'));
    document.documentElement.style.removeProperty('--user-bg'); status('Default romantic background restored ♡');
  });

  async function refreshMedia() {
    allMedia = await requestResult(store('media').getAll());
    allMedia.sort((a,b) => b.createdAt - a.createdAt);
    $('mediaCount').textContent = allMedia.length.toLocaleString();
    renderGallery();
  }
  $('mediaUpload').addEventListener('change', async e => {
    const files = Array.from(e.target.files || []);
    if (!files.length) return;
    let saved = 0, failed = 0;
    status(`Saving ${files.length} selected file(s)… Please keep this tab open.`);
    for (let i=0; i<files.length; i++) {
      const file = files[i];
      if (!file.type.startsWith('image/') && !file.type.startsWith('video/')) { failed++; continue; }
      const item = {id: (crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${i}-${Math.random()}`), name:file.name, type:file.type, kind:file.type.startsWith('video/')?'video':'image', size:file.size, createdAt:Date.now()+i, blob:file};
      try { await requestResult(store('media','readwrite').put(item)); saved++; }
      catch (error) { failed++; console.error(error); }
      if ((i+1)%20===0 || i===files.length-1) status(`Saving memories… ${i+1}/${files.length}`);
    }
    await refreshMedia();
    status(`${saved} file(s) added to your memory gallery${failed ? ` · ${failed} could not be saved` : ' ♡'}`);
    e.target.value = '';
  });
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
      grid.innerHTML = `<div class="gallery-empty"><span>♡</span><h3>${allMedia.length ? 'No matching memories found' : 'Your memory gallery is waiting'}</h3><p>${allMedia.length ? 'Try another file name.' : 'Upload your first photos or videos to see them here.'}</p></div>`;
    } else {
      grid.innerHTML = shown.map(item => {
        const src = urlFor(item);
        const thumb = item.kind === 'video' ? `<video class="media-thumb" src="${src}" muted preload="metadata"></video>` : `<img class="media-thumb" src="${src}" alt="${escapeHtml(item.name)}" loading="lazy">`;
        return `<div class="media-card" data-media-id="${item.id}">
          <button class="media-open" type="button" aria-label="Open ${escapeHtml(item.name)}">${thumb}<span class="media-kind">${item.kind === 'video' ? '▶ VIDEO' : '♡ PHOTO'}</span><span class="media-name">${escapeHtml(item.name)}</span></button>
          <button class="media-delete" type="button" data-delete-id="${item.id}" aria-label="Delete ${escapeHtml(item.name)}" title="Delete this memory">🗑</button>
        </div>`;
      }).join('');
      grid.querySelectorAll('.media-open').forEach(button => button.addEventListener('click', () => {
        const card = button.closest('.media-card');
        previewItems = items; currentPreviewIndex = items.findIndex(item => item.id === card.dataset.mediaId); showPreview();
      }));
      grid.querySelectorAll('.media-delete').forEach(button => button.addEventListener('click', async e => {
        e.stopPropagation();
        const id = button.dataset.deleteId;
        const item = allMedia.find(media => media.id === id);
        if (!item || !window.confirm(`Delete "${item.name}" from your memory gallery? This cannot be undone.`)) return;
        try {
          await requestResult(store('media', 'readwrite').delete(id));
          if (objectUrls.has(id)) { URL.revokeObjectURL(objectUrls.get(id)); objectUrls.delete(id); }
          previewItems = previewItems.filter(media => media.id !== id);
          await refreshMedia();
          status('Memory deleted from this browser ♡');
        } catch (error) {
          console.error(error);
          status('Could not delete this memory. Please try again.');
        }
      }));
    }
    const moreButton = $('loadMoreMedia');
    moreButton.hidden = items.length <= PAGE_SIZE;
    moreButton.textContent = visibleCount >= items.length ? 'Show less ↑' : 'Show more memories ♡';
  }
  function escapeHtml(value) { return String(value).replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch])); }
  $('gallerySearch').addEventListener('input', () => { visibleCount = PAGE_SIZE; renderGallery(); });
  document.querySelectorAll('.view-button').forEach(button => button.addEventListener('click', () => {
    currentView = button.dataset.view;
    document.querySelectorAll('.view-button').forEach(b => b.classList.toggle('active', b===button));
    renderGallery();
  }));
  $('loadMoreMedia').addEventListener('click', () => {
    const items = filteredMedia();
    if (visibleCount >= items.length) {
      visibleCount = PAGE_SIZE;
      renderGallery();
      document.getElementById('galleryGrid').scrollIntoView({behavior: 'smooth', block: 'start'});
    } else {
      visibleCount = Math.min(visibleCount + PAGE_SIZE, items.length);
      renderGallery();
    }
  });

  function showPreview() {
    if (!previewItems.length) return;
    const item = previewItems[currentPreviewIndex];
    const src = urlFor(item);
    $('mediaModalContent').innerHTML = item.kind === 'video'
      ? `<video src="${src}" controls autoplay playsinline></video>`
      : `<img src="${src}" alt="${escapeHtml(item.name)}">`;
    $('mediaModalCaption').textContent = `${item.name} · ${currentPreviewIndex+1} of ${previewItems.length}`;
    $('mediaModal').hidden = false;
    $('mediaPrev').hidden = previewItems.length < 2;
    $('mediaNext').hidden = previewItems.length < 2;
  }
  function closePreview() { $('mediaModalContent').innerHTML=''; $('mediaModal').hidden=true; }
  $('closeMediaModal').addEventListener('click', closePreview);
  $('mediaModal').addEventListener('click', e => { if (e.target === $('mediaModal')) closePreview(); });
  $('mediaPrev').addEventListener('click', () => { currentPreviewIndex=(currentPreviewIndex-1+previewItems.length)%previewItems.length; showPreview(); });
  $('mediaNext').addEventListener('click', () => { currentPreviewIndex=(currentPreviewIndex+1)%previewItems.length; showPreview(); });
  document.addEventListener('keydown', e => {
    if ($('mediaModal').hidden) return;
    if (e.key==='Escape') closePreview();
    if (e.key==='ArrowLeft' && previewItems.length>1) { currentPreviewIndex=(currentPreviewIndex-1+previewItems.length)%previewItems.length; showPreview(); }
    if (e.key==='ArrowRight' && previewItems.length>1) { currentPreviewIndex=(currentPreviewIndex+1)%previewItems.length; showPreview(); }
  });

  (async () => {
    try { db = await openDatabase(); await loadPersonalImages(); await refreshMedia(); }
    catch (error) { console.error(error); status('Your browser could not open local media storage. Try a recent Chrome or Edge browser.'); }
  })();
})();
