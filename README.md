
# Moodler Assets

The Moodler's public files: the icons its course readmes show (2026-11-18). This is the public repo [the-moodler/assets](https://github.com/the-moodler/assets), published by GitHub Pages at <https://the-moodler.github.io/assets/>.

## Why it exists

A readme in a private repo can't show an image from that repo to anyone but its owner. GitHub serves the image from `raw.githubusercontent.com` with a short-lived token in the address, so the icons break when that token expires or someone else views the page. Icons served from a public GitHub Pages site always work.

- `readme.md` (for reading on GitHub) links its icons here, at the address in [`common/deployment.json`](https://github.com/mcsorg/the-moodler-ts/blob/master/common/deployment.json)'s `iconsUrl`.
- `home.md` (for reading on your own computer) still links the repo's own `.icons` folder, so it works offline.
- Markdown copies of files (in a course's `md/` folders) still link `.icons` too.

## Versions

Icons are published in numbered versions under `v/`. A version never changes once it's published: a change goes in the next version, so a link to `v/1/` always shows the same picture.

| Version                                              | Released   | Browse                                                    | What changed                                                                                       |
|------------------------------------------------------|------------|-----------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| [`v/1/`](https://github.com/the-moodler/assets/tree/master/v/1) | 2026-11-21 | [Catalogue](https://the-moodler.github.io/assets/v/1/) | The icons below, sorted into `file-icons/` (in A–Z folders), `favicons/`, `link-icons/`, `symbols/` and `branding/`. See its [README](https://github.com/the-moodler/assets/blob/master/v/1/README.md). |

Use the newest version for anything new, for example <https://the-moodler.github.io/assets/v/1/file-icons/p-r/pdf-16.png>.

## The addresses from before versions

These folders stay exactly where they are, so every readme already pushed keeps its icons. Nothing in them is renamed or removed.


| Path                                                                         | What it is                                                                                                                                                                                                                                                                             |
|------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`icons/`](https://github.com/the-moodler/assets/tree/master/icons)          | The whole ARJ icon pack from [`icon-packs/arj/`](https://github.com/mcsorg/the-moodler-ts/tree/master/icon-packs/arj): `{type}-16.png` is what readmes link, and the other sizes are for anything bigger.                                                                              |
| [`symbols/`](https://github.com/the-moodler/assets/tree/master/symbols)      | Symbols that aren't file types (2026-11-18): `yes-16.png`, a white tick on green, and `no-16.png`, a white cross on red, for tick/cross tables.                                                                                                                                        |
| [`logo/`](https://github.com/the-moodler/assets/tree/master/logo)            | The Moodler's logo (2026-11-18): Moodle's own mark, unchanged, with our blue download badge. [`moodler.svg`](https://github.com/the-moodler/assets/blob/master/logo/moodler.svg), and PNGs at 16, 32, 48, 128, 256 and 512 pixels. Moodle is a registered trademark of Moodle Pty Ltd. |
| [`index.html`](https://github.com/the-moodler/assets/blob/master/index.html) | The page you see at the site's own address, <https://the-moodler.github.io/assets/>.                                                                                                                                                                                                   |
| [`.nojekyll`](https://github.com/the-moodler/assets/blob/master/.nojekyll)   | Tells GitHub Pages to serve the files as they are, without running Jekyll over them.                                                                                                                                                                                                   |
| [`.gitignore`](https://github.com/the-moodler/assets/blob/master/.gitignore) | Operating system, Office and editor files.                                                                                                                                                                                                                                             |

An icon's address is `{iconsUrl}/{type}-16.png`, for example <https://the-moodler.github.io/assets/icons/pdf-16.png>.

## Updating the icons

`make icons` (in [the Moodler repo](https://github.com/mcsorg/the-moodler-ts)) draws the pack into [`icon-packs/arj/`](https://github.com/mcsorg/the-moodler-ts/tree/master/icon-packs/arj) and copies it here as well, when this repo is cloned beside it (`the-moodler/assets` next to `the-moodler/the-moodler-ts`). Then commit and push this repo. GitHub Pages can take a minute or two to publish.

Never rename or delete an icon that's already published: readmes already pushed keep linking it.

## Setting it up on GitHub

1. Make a public repo called `assets` and push this folder's contents to it.

2. In the repo's [Settings > Pages](https://github.com/the-moodler/assets/settings/pages), publish from the `master` branch, root folder.

3. Check that [`common/deployment.json`](https://github.com/mcsorg/the-moodler-ts/blob/master/common/deployment.json)'s `iconsUrl` matches the site's address, then build the extension and server again.

---
