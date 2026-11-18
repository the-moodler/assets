
# Moodler Assets

The Moodler's public files: the icons its course readmes show (2026-11-18). This folder is meant to be its own public GitHub repo, `moodler-assets`, with GitHub Pages switched on.

## Why it exists

A readme in a private repo can't show an image from that repo to anyone but its owner. GitHub serves the image from `raw.githubusercontent.com` with a short-lived token in the address, so the icons break when that token expires or someone else views the page. Icons served from a public GitHub Pages site always work.

- `readme.md` (for reading on GitHub) links its icons here, at the address in `common/deployment.json`'s `iconsUrl`.
- `home.md` (for reading on your own computer) still links the repo's own `.icons` folder, so it works offline.
- Markdown copies of files (in a course's `md/` folders) still link `.icons` too.

## What's here

| Path         | What it is                                                                                                                         |
|--------------|------------------------------------------------------------------------------------------------------------------------------------|
| `icons/`     | The whole ARJ icon pack from `icon-packs/arj/`: `{type}-16.png` is what readmes link, and the other sizes are for anything bigger. |
| `index.html` | The page you see at the site's own address.                                                                                        |
| `.nojekyll`  | Tells GitHub Pages to serve the files as they are, without running Jekyll over them.                                               |
| `.gitignore` | Operating system, Office and editor files.                                                                                         |

An icon's address is `{iconsUrl}/{type}-16.png`, for example `https://the-moodler.github.io/assets/icons/pdf-16.png`.

## Updating the icons

`make icons` (in the Moodler repo) draws the pack into `icon-packs/arj/` and copies it here as well. Then commit and push this repo. GitHub Pages can take a minute or two to publish.

Never rename or delete an icon that's already published: readmes already pushed keep linking it.

## Setting it up on GitHub

1. Make a public repo called `assets` and push this folder's contents to it.

2. In the repo's Settings > Pages, publish from the `master` branch, root folder.

3. Check that `common/deployment.json`'s `iconsUrl` matches the site's address, then build the extension and server again.

---
