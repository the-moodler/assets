# Moodler Assets, version 1

Released 2026-11-21. Browse it at <https://the-moodler.github.io/assets/v/1/>.

**Version 1 is frozen.** Nothing in it is renamed, changed or removed once it's published. A change goes in a new version (`v/2/`), so a link to `v/1/` always shows the same picture.

This version is the icons that were already in the repo (`icons/`, `symbols/`, `logo/`), sorted into categories. The old addresses still work too.

## Categories

| Folder                                                                              | What's in it                                                                                                     | Icons |
|-------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------|------:|
| [`file-icons/`](https://github.com/the-moodler/assets/tree/master/v/1/file-icons)   | File types (`pdf`, `docx`, `py` and so on), plus `folder`, `file` (no type of its own), `part` (part of a split archive) and `pdf-d` (the PDF download button). Split into A–Z folders. | 80 |
| [`favicons/`](https://github.com/the-moodler/assets/tree/master/v/1/favicons)       | The sites a link goes to: `moodle`, `sharepoint`, `teams`, `zoom`.                                               | 4 |
| [`link-icons/`](https://github.com/the-moodler/assets/tree/master/v/1/link-icons)   | Links that aren't a file or a known site: `url`.                                                                 | 1 |
| [`symbols/`](https://github.com/the-moodler/assets/tree/master/v/1/symbols)         | Small signs for tables and text: `yes` (white tick on green), `no` (white cross on red).                        | 2 |
| [`branding/`](https://github.com/the-moodler/assets/tree/master/v/1/branding)       | Logos, one folder per app: [`moodler/`](https://github.com/the-moodler/assets/tree/master/v/1/branding/moodler). | 1 |

## The A–Z folders

File icons are split by the first character of their name, into ten folders:

| Folder | Names starting with                  |
|--------|--------------------------------------|
| `0-9`  | a digit, or anything that isn't a–z (`7z`) |
| `a-c`  | a, b, c                              |
| `d-f`  | d, e, f                              |
| `g-i`  | g, h, i                              |
| `j-l`  | j, k, l                              |
| `m-o`  | m, n, o                              |
| `p-r`  | p, q, r                              |
| `s-u`  | s, t, u                              |
| `v-x`  | v, w, x                              |
| `y-z`  | y, z                                 |

Names are lowercase, so `PDF` and `pdf` are the same icon, in `p-r`.

## File names and sizes

Each icon keeps the name it had before. An icon called `pdf` has up to five files:

| File         | What it is                                                         |
|--------------|--------------------------------------------------------------------|
| `pdf-16.png` | 16 pixels tall. What readmes link: it sits in a line of GitHub text without making it taller. |
| `pdf-16.svg` | The same drawing as an SVG.                                        |
| `pdf-24.png` | The large drawing at 24 pixels.                                    |
| `pdf.png`    | The large drawing at 256 pixels (favicons and `url` vary).         |
| `pdf.svg`    | The large drawing as an SVG.                                       |

The logo is `branding/moodler/moodler.svg`, plus `moodler-16.png` to `moodler-512.png`.

## Linking an icon

```text
https://the-moodler.github.io/assets/v/1/file-icons/p-r/pdf-16.png
https://the-moodler.github.io/assets/v/1/favicons/moodle-16.png
https://the-moodler.github.io/assets/v/1/symbols/yes-16.png
https://the-moodler.github.io/assets/v/1/branding/moodler/moodler-32.png
```

```markdown
![pdf](https://the-moodler.github.io/assets/v/1/file-icons/p-r/pdf-16.png)
```

[`catalogue.json`](https://github.com/the-moodler/assets/blob/master/v/1/catalogue.json) lists every icon, its category, its files and its credit, and the [catalogue page](https://the-moodler.github.io/assets/v/1/) is built from it.

## Credit and rights

- **File icons, `part`, `folder`, `pdf-d`, the symbols:** drawn for The Moodler. A licence for them hasn't been chosen yet.
- **Favicons:** Moodle is a registered trademark of Moodle Pty Ltd. SharePoint and Teams are trademarks of Microsoft. Zoom is a trademark of Zoom Communications. `teams` and `zoom` are simple shapes drawn for The Moodler; `moodle` and `sharepoint` come from the Moodler's original icon set. No rights to these marks are claimed.
- **`url`:** from the Moodler's original icon set; where it first came from isn't recorded.
- **The Moodler logo:** Moodle's own mark, unchanged, with The Moodler's download badge. Moodle is a registered trademark of Moodle Pty Ltd.

## Compatibility

The addresses from before versions (`icons/pdf-16.png`, `symbols/yes-16.png`, `logo/moodler-32.png`) keep working, and nothing in them is removed. Readmes the Moodler has already written link those.
