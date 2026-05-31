# Track — promo site

Static promo site for **Track**, a menu-bar time tracker that syncs worklogs to Jira & Tempo.
No backend, no build step — just HTML, CSS, and a tiny vanilla-JS ticking clock. Served from
this repo via **GitHub Pages**, which also hosts the app's release installers.

## Files

```
index.html        # the page (served at the site root)
styles.css        # brand tokens + all section styles
track.js          # the live menu-bar tray timer
404.html          # branded not-found page
assets/shots/     # real app screenshots (light + dark variants)
.nojekyll         # tell GitHub Pages to serve files as-is (no Jekyll)
```

## Local preview

```bash
python3 -m http.server 8000
# then open http://localhost:8000/
```

## Deploy — GitHub Pages

No build step. In the repo settings: **Settings → Pages → Build and deployment →
Source: "Deploy from a branch" → Branch: `main` / `/ (root)`**. Every push to `main`
publishes. The default URL is `https://ivanfeanor.github.io/track-the-time-app-site/`.

`.nojekyll` is present so Pages serves the files verbatim (no Jekyll processing).

### Custom domain (optional)

Add the domain under **Settings → Pages → Custom domain**, commit the generated
`CNAME` file, and point the domain's DNS at GitHub Pages (four apex `A` records, or a
`CNAME` to `ivanfeanor.github.io` for a `www` subdomain).

## Release installers

The app is built in a separate (private) repo whose release workflow publishes the
installers as **Releases on this repo**. The download buttons use the evergreen
"latest" asset URLs:

```
https://github.com/ivanfeanor/track-the-time-app-site/releases/latest/download/Track-macOS.dmg
https://github.com/ivanfeanor/track-the-time-app-site/releases/latest/download/Track-Windows-Setup.exe
https://github.com/ivanfeanor/track-the-time-app-site/releases/latest/download/Track-Linux.AppImage
```

They 404 until the first release is published.
