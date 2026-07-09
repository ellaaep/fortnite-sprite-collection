# Fortnite Sprite Collection

A private/local Fortnite Sprite collection tracker.

This version uses local PNG sprite images in `assets/sprites/local/`, so the collection no longer depends on Fandom/Fortnite.gg hotlinks for the visible sprite art.

## Upload to Vercel

1. Unzip this folder.
2. In your GitHub repo, upload the contents of this folder, not the ZIP itself.
3. Commit the changes.
4. Vercel will redeploy automatically.
5. Open the Vercel site and hard refresh with `Cmd + Shift + R`.

Your collection progress is stored in the browser using localStorage. Use Export/Import if you move to a different URL or browser.

Unofficial fan-made Fortnite tracker. Not affiliated with or endorsed by Epic Games.


## Image visibility fix

This version uses local PNG files from `assets/sprites/local/` and displays them immediately. Uncollected sprites are grayscale, but no longer heavily darkened.


## Image loading note
This build embeds all 83 sprite PNGs directly in `app.js` as data URLs. That means the collection does not depend on Fandom, fortnite.gg, or even the `assets/sprites/local` paths for the main sprite images. The assets folder is still included as a backup/source folder, but the page should display images even if external hosts block hotlinking.
