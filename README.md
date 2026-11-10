# No scroll ✧

把時間，放回手裡。A little library for a more hands-on life.

A responsive, illustrated Traditional Chinese bookshelf with English chapter titles. The library has 100 books in 10 color-coded categories, with 183 chapters in total. Each chapter includes materials, estimated practice time, illustrated steps and a concrete completion check. The children’s category includes 13 books and age guidance.

## Open or publish

Open `index.html` in a browser, or serve the folder with any static web server. There is no build step, account, API key or database. All content and illustrations are local. Google Fonts can load when online, with system fallbacks.

To publish on GitHub Pages, create a repository called `no-scroll`, upload the **contents** of this folder to the root, then select **Settings → Pages → Deploy from a branch → main → / (root)**. Keep `index.html`, `style.css`, `park.css`, `realm.css`, `tools.css`, `library.css`, `library.js`, `data.js`, `topics.js`, `magic.js`, `park.js`, `tool-catalog.js`, `tool-kit.js`, `app.js`, `.nojekyll` and the `assets/` folder together. GitHub displays the Pages address when publishing completes.

## The experience

- **Practice route.** The floating welcome leads to one, two or three hours of 30-minute lessons.
- **Tool kit.** Select a tool name to open its purchase, download, borrowing or preparation details. The checkboxes track readiness independently.

- **One book per subject.** Select a spine to open its chapter or a table of contents for longer books. Search covers book titles, chapter titles and materials. The children’s entrance filters the same bookshelf to age-guided activities with adult help.
- **Guided creation.** Write an eight-page book or make an approximately one-minute film in five stages. Each stage has a tangible outcome, checklist and editable notes. The children’s story book includes a three-stage project. Completing a stage enables its next-stage button, while the contents page keeps every stage accessible. Export all project notes as a `.txt` draft or completed record. Actual book layout, illustrations and film production happen on paper or in the visitor’s tools.
- **Time and completion are separate.** A pauseable time progress bar shows time invested, and a separate checklist tracks the steps actually completed. The time bar remembers the last position on this browser; reopening a chapter resumes in a paused state. The timer only runs in an opened chapter after Start. About every 90 seconds of active time, the site offers a random encouragement; it can be turned off, and a manual encouragement button is available.
- **Gentle magic.** Floating stars, an illustrated owl, book openings and small completion effects. The header offers an optional bell soundtrack synthesized in the browser. Turn off decorative motion from the header. System reduced-motion preferences take precedence. The website has no endless feed or audio autoplay.

## Local data and editing

Bookmarks, step and tool checklists, saved elapsed time, preferences and notes stay in `localStorage` under `no-scroll-v1`. They are tied to this browser and address. No user text or video is uploaded. The About panel can clear saved work; export drafts first to retain a copy. The original chapter IDs are preserved. Topic links use `#shelf-<id>`, and chapters use `#book-1` through `#book-183`.

Topic order and chapter relationships are in `topics.js`; chapter text, checklists and writing prompts are in `data.js`. Original illustrations are in `assets/`, including 20 hairstyle step drawings and the children's owl. Relevant car and cleaning chapters link to official reference material. Use the equipment maker's instructions for model-specific work.

## Park illustration

Asset: `assets/skill-park.jpg` · Built-in ImageGen

> Use case: stylized-concept. Website hero art, landscape 3:2. An exquisite 3D isometric miniature diorama of a storybook skills theme park, like a handcrafted matte clay and carved wood model shot with a tilt-shift lens. Four distinct zones on one oval floating grass island linked by cream winding paths: mint and cobalt observatory-like coding workshop with a tiny laptop on the LEFT, emerald evergreen forest and orange canvas tent at upper middle, rose and terracotta outdoor music stage with a microphone at lower middle, lilac castle theater with golden treble clef ornament at RIGHT. Include a small Ferris wheel in the rear, a golden arched entry gate in front, flowers and a soft aqua stream. The entire island fits with comfortable margin in frame; overhead three-quarter perspective; dreamy warm directional light, realistic contact shadows, exquisite whimsical detail, delicate golden sparkles, muted mauve cream seamless background. Polished and inviting for adults and families. No people, no written text, no words, no letters, no watermark, no UI. Keep foreground and all edges fully visible.


## Attraction artwork

The library castle and children's enchanted garden use built-in ImageGen. The original 100 chapters use dimensional SVG artwork from `assets/`. The 83 new chapters use illustrations assembled in `library.js`.

- `assets/library-realm.jpg` — Use case stylized-concept. Wide landscape 3:2 3D storybook theme-park attraction banner, an elegant miniature fairy-tale library plaza named only through its visual objects. Handcrafted matte clay and painted wood, warm golden architectural lights, rounded deep purple turret roofs, antique peach and cream stone, an oversized open book sculpture at right with little golden star-shaped lamps, little stairways and trimmed gardens, dusk lavender atmosphere. Straight-on view from above slightly, attractive tactile dimensional detail with soft shadows. Architecture and main object clustered at right two thirds, left one third mostly quiet dark plum atmosphere fading to darker at bottom left for UI text overlay. No letters, text, logos, people, signs or frames.
- `assets/kids-realm.jpg` — Use case stylized-concept. Wide landscape 3:2 3D storybook theme-park children's enchanted garden attraction banner. At right a charming stylized rounded purple-and-cream owl with tiny gold star on a pointed wizard hat, sitting at the door of a miniature mushroom cottage, small lanterns, peach toadstools, soft sage foliage, gold stepping stones and carved wooden toy details. Warm golden light in lavender twilight. Tactile clay and painted wood, richly dimensional handcrafted miniature, soft shadows. Keep left third muted dark plum for text overlay. No written text, logos, people or UI.
