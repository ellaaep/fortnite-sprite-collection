# Fortnite Sprite Collection

Static personal Fortnite Sprite tracker with all sprite images stored locally.

## Local PNG images

All 83 tracked sprite entries use files from:

```text
assets/sprites/local/
```

The 18 base PNGs were converted from the uploaded `sprites.zip`. Variant PNGs are generated locally from those base sprites so the deployed site does not depend on Fandom, fortnite.gg, or any external image host.

## Deploy

Upload the whole folder contents to GitHub, including `assets/`, then deploy with Vercel as a static site.

Do not upload only `index.html`; the `assets/sprites/local/` folder is required.
