# Our Love Story Website

A responsive romantic website for Sanaul Islam and Mobasshera Khatoon.

## Files
- `style.css` — responsive styling, 2D/3D effects, linear and conic gradients
- `script.js` — navigation, reveal animations, letters, Google/YouTube search and YouTube embed controls

## Run locally
1. Extract the ZIP.
2. Open the folder in VS Code.
3. Open `index.html` in a browser, or use the VS Code Live Server extension.

- Search a track with **Google search** or **YouTube search**.
- Open a YouTube result, copy its video URL, paste it into “Paste YouTube video link to play…”, then choose **Load song**.
- Use the play/pause and volume controls.
- Playback is user-initiated; there is no autoplay.
- Some YouTube videos disallow embedding. If one does, choose another video or open it on YouTube.

Google search opens Google's search page in a new tab. The website does not scrape or stream copyrighted audio directly from Google.

## Customize
Edit the romantic messages directly in `index.html`. Replace the example text with personal messages and add your own photos when ready.


## Personal photo and video gallery
- Open the Gallery section and choose multiple image/video files in one upload.
- Supports browser-recognized image/* and video/* files; playback/display depends on browser codec support.
- Grid, Medium and List views are available. Click an item to open a larger preview; use arrows or keyboard arrow keys to browse.
- Upload a profile photo to show it at the top of the homepage. Upload a background image to set a fixed full-site background.
- Media and chosen photos are saved in this browser using IndexedDB. This is a local-only version: it does not sync to other devices or visitors. Storage quota depends on the browser/device; 1000+ files are supported, but large videos may use substantial storage. Keep a separate backup of original files.


## Latest updates
- The gallery initially displays 4 photos/videos. Select **Show more memories** to reveal the next 4.
- Added Hinglish sections dedicated to Mobasshera, including affectionate notes, qualities, little memories and a dua.

- Gallery now has **Show less** to collapse back to the first 4 items.
- Each gallery item has a trash button. Confirm deletion to permanently remove that item from this browser's local gallery.


- Added the included romantic-background.png floral rose artwork as the default full-page background.
- You can still upload a different fixed background from the Gallery settings.
- The playlist is saved in this browser. Songs can also be removed from the list.
- Added an "Our Little Dreams" section with shared future ideas.

## Romantic update
- Menu wordmark now reads Sanaul & Mobasshera in a decorative serif style.
- The requested spelling Mobasshera is used consistently throughout the website.
- Removed the music section, music navigation item, floating music shortcut, and YouTube player code.
- Added five new romantic chapters: shared moments, everyday care, meaningful meetings, standing together, and a heartfelt future promise.
