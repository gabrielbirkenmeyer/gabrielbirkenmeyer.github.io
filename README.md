# Gabriel Birkenmeyer — portfolio site

Plain HTML + CSS, no frameworks. Hosted free on GitHub Pages.

## How it works
The home page shows a picture for each project. Clicking a picture opens that project's page.

## Files
- `index.html` — home page (intro, project pictures, about)
- `popz.html` — POPz project page
- `project-1.html` — Fowl Play (CS 355 final project, multiplayer level design; images are `graybox_*.png` and `after_*.png`)
- `project-2.html` — page for another class project (fill in the TODOs)
- `project-template.html` — copy this to make a page for a new project
- `style.css` — all the styling (colors are at the top under `:root`)
- `images/` — placeholder pictures; replace them using the **same file names**
  - `popz-cover.png` — the big POPz picture on the home page (16:9, e.g. 1600 x 900)
  - `popz-1.png` … `popz-5.png` — your 5 App Store screenshots
  - `project-1.png`, `project-2.png` — class project pictures (16:9)

## Things to fill in (search the files for `TODO`)
1. Your LinkedIn and email in the header (same header on every page)
2. Add your resume as `resume.pdf` in this folder
3. Class project names, pictures and details
4. When POPz is live, add the App Store link to `popz.html`

## Add a new project
1. Copy `project-template.html` and rename it (e.g. `project-3.html`), then fill it in
2. In `index.html`, copy one `<a class="card">` block and change the link, picture and text

## Publish on GitHub Pages
1. On GitHub, create a **public** repo named exactly `gabrielbirkenmeyer.github.io`
2. Upload everything in this folder (keep the `images` folder)
3. Repo **Settings → Pages**: Source = "Deploy from a branch", branch = `main`, folder = `/ (root)`
4. After a minute or two the site is live at https://gabrielbirkenmeyer.github.io

Your privacy policy page (`/popz-privacy/`) keeps working at its current address.
