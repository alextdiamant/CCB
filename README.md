# CCB Change Request Workflow (Static Site)

This is a **static** web version of the interactive Change Request workflow flowchart.

## Folder contents

- `index.html` — main page
- `css/styles.css` — stylesheet extracted from the original HTML
- `js/app.js` — script extracted from the original HTML (plus CSP-friendly event wiring)
- `assets/` — favicon
- `site.webmanifest` — PWA metadata (optional)
- `robots.txt` and `sitemap.xml` — basic SEO files
- `404.html` — friendly not-found page

## Local preview

### Option A — Python (quick)

```bash
cd ccb-workflow-site
python -m http.server 8000
```
Open http://localhost:8000

### Option B — Node (optional)

```bash
npx serve ccb-workflow-site
```

## Deploy

### GitHub Pages

1. Create a repo and commit the `ccb-workflow-site/` contents.
2. In GitHub → **Settings** → **Pages**:
   - Source: `Deploy from a branch`
   - Branch: `main` and folder `/ (root)`
3. Your site will publish to: `https://<org>.github.io/<repo>/`

> **Tip:** If you use a project subpath, set a `<base href>` tag or keep links relative (this site uses relative links).

### Azure Static Web Apps

1. Create a Static Web App.
2. Set **app location** to `/` (or point to the folder if you move contents to repo root).
3. No build is required.

### Any static hosting

Upload the folder contents as-is.

## Notes

- Inline `onclick` handlers were replaced with `data-*` attributes and event listeners to support a strict Content Security Policy.
- If you want to remove the CSP, delete the `<meta http-equiv="Content-Security-Policy" ...>` tag in `index.html`.
