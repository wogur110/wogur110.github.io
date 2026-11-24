# Jaehyeok Bae's academic website

A static website served by GitHub Pages. No build step or package installation is required.

## Local preview

From this directory, run:

```sh
python3 -m http.server 8000
```

Open <http://localhost:8000>. Clipboard copying requires HTTPS or localhost;
if copying is unavailable, visitors can select and copy the citation manually.

## Editing the site

- `index.html`: biography, education, contact links, experience, and awards.
- `stylesheet.css`: typography, layout, publication cards, and responsive styles.
- `assets/data/papers.js`: publication and project content, in display order.
- `assets/js/publications.js`: shared publication/project rendering and BibTeX controls.
- `assets/js/analytics.js`: Google Analytics configuration.
- `assets/images/` and `assets/data/`: images, profile photos, and CV.

To add a publication, copy an entry in `PAPERS` and update its fields. Projects
use the same format in `PROJECTS`; their section is hidden when the array is empty.
The Project section appears between Work Experience and Honors and Awards.
`titleUrl`, `imageFullUrl`, and `bibtex` are optional. Links and descriptions can
be omitted or left as empty arrays. Author flags `self` and `equalContrib` control
bold names and equal-contribution markers.

The `venue`, `description`, and `links[].text` fields support trusted, manually
authored HTML such as `<strong>` and `<em>`. Other text fields are escaped.
Keep URLs and HTML under the site author's control; the renderer is not intended
for user-submitted content. The deferred data script must load before the renderer.

After editing, check the desktop and mobile layouts, publication links, and
BibTeX expand/collapse and Copy buttons. JavaScript syntax can be checked with:

```sh
node --check assets/data/papers.js
node --check assets/js/publications.js
node --check assets/js/analytics.js
```

## Credits

Story Bricks content is based on the team's [Devpost submission](https://devpost.com/software/story-bricks)
and [GitHub repository](https://github.com/hyuntori2000/story-bricks/), with event dates
and the award category checked against [Immerse the Bay 2026](https://immerse-the-bay-2026.devpost.com/).
The thumbnail in `assets/images/story-bricks/story-bricks-demo.jpg` is the team's
[Devpost demo screenshot](https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/005/920/232/datas/gallery.jpg),
showing a generated fox above the physical FOX bricks. Clicking it opens the full image.

Originally based on [Jon Barron's academic website](https://jonbarron.info/),
with the [orderedlist minimal theme](https://github.com/orderedlist/minimal).
