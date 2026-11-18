# ![moodler-32] Moodler Assets

The public files of ![moodler] [The Moodler](https://github.com/the-moodler): the icons its course readmes show.

- GitHub repo: ![github] [the-moodler/assets](https://github.com/the-moodler/assets)
- GitHub Pages: ![moodler] <https://the-moodler.github.io/assets/>

## Why it exists

A readme in a private repo can't show an image from that repo to anyone but its owner. GitHub serves the image from `raw.githubusercontent.com` with a short-lived token in the address, so the icons break when that token expires or someone else views the page. Icons served from a public GitHub Pages site always work.

## Versions

Icons are organised in numbered versions under ![folder] [`v/`](https://github.com/the-moodler/assets/tree/master/v), listed in ![md] [`v/readme.md`](https://github.com/the-moodler/assets/blob/master/v/readme.md).

| Version                                                                                  | Status   |                                                                                         |
|------------------------------------------------------------------------------------------|----------|-----------------------------------------------------------------------------------------|
| ![folder] [1](https://github.com/the-moodler/assets/blob/master/v/1/readme.md)           | Released | [![search]](https://the-moodler.github.io/assets/v/1/ "Browse version 1")               |
| ![folder] [latest](https://github.com/the-moodler/assets/blob/master/v/latest/readme.md) | Released | [![search]](https://the-moodler.github.io/assets/v/latest/ "Browse the latest version") |

**Versions** generally hold

- ![folder] [`branding/`](https://github.com/the-moodler/assets/tree/master/v/latest/branding) (logos)
- ![folder] [`file-icons/`](https://github.com/the-moodler/assets/tree/master/v/latest/file-icons)
  - ![folder] [`a/`](https://github.com/the-moodler/assets/tree/master/v/latest/file-icons/a) to ![folder] [`z/`](https://github.com/the-moodler/assets/tree/master/v/latest/file-icons/z): a folder for each first letter
  - ![folder] [`numbers/`](https://github.com/the-moodler/assets/tree/master/v/latest/file-icons/numbers)
  - ![folder] [`symbols/`](https://github.com/the-moodler/assets/tree/master/v/latest/file-icons)
- ![folder] [`link-icons/`](https://github.com/the-moodler/assets/tree/master/v/latest/link-icons) (other links)
- ![folder] [`site-icons/`](https://github.com/the-moodler/assets/tree/master/v/latest/site-icons) (the sites a link goes to)
- ![folder] [`symbols/`](https://github.com/the-moodler/assets/tree/master/v/latest/symbols) (yes and no)
- ![folder] [`ui-icons/`](https://github.com/the-moodler/assets/tree/master/v/latest/ui-icons) (settings, pages, repo, search)

**Latest:** ![folder] [`v/latest/`](https://github.com/the-moodler/assets/blob/master/v/latest/readme.md) is a copy of the newest released version, so a link into it can break when a new version deletes or renames an icon. For a link that never breaks, use a version's number, such as `v/1/`.

**When a new version starts:** only when a published file is deleted or changed. A rename counts as a delete. Adding a new icon, file or folder never needs a new version, because no address that already exists changes. A link into a released version always shows the same picture.

## Other files

| Path                                                                                 | What it is                                                                                                                  |
|--------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| ![html] [`index.html`](https://github.com/the-moodler/assets/blob/master/index.html) | The page you see at the site's own address, ![moodler] <https://the-moodler.github.io/assets/>.                             |
| ![file] [`LICENSE`](https://github.com/the-moodler/assets/blob/master/LICENSE)       | All rights reserved. The files serve The Moodler's applications, credit is required, and trademarks belong to their owners. |
| ![file] [`.nojekyll`](https://github.com/the-moodler/assets/blob/master/.nojekyll)   | Tells GitHub Pages to serve the files as they are, without running Jekyll over them.                                        |
| ![file] [`.gitignore`](https://github.com/the-moodler/assets/blob/master/.gitignore) | Operating system, Office and editor files that are never committed.                                                         |

## Setting it up on GitHub

GitHub Pages publishes the root folder of the [`master`](https://github.com/the-moodler/assets/tree/master) branch, set in ![settings] [Settings](https://github.com/the-moodler/assets/settings) > ![pages] [Pages](https://github.com/the-moodler/assets/settings/pages).

---

<!-- Reusable icon references -->

[file]: v/latest/file-icons/f/file-16.png
[folder]: v/latest/file-icons/f/folder-16.png
[github]: v/latest/site-icons/github-16.png
[html]: v/latest/file-icons/h/html-16.png
[md]: v/latest/file-icons/m/md-16.png
[moodler]: v/latest/branding/moodler/moodler-16.png
[moodler-32]: v/latest/branding/moodler/moodler-32.png
[pages]: v/latest/ui-icons/pages-16.png
[search]: v/latest/ui-icons/search-16.png
[settings]: v/latest/ui-icons/settings-16.png
