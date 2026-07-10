# CCS WhiteHat Club Service Medal Verification

A static React + Vite website for verifying CCS WhiteHat Club Service Medals through unique officer URLs and QR codes. No backend or database is required.

## Run locally

1. Install Node.js 18 or newer.
2. Run `npm install`.
3. Run `npm run dev`.
4. Open the local URL shown by Vite.

## Add official assets

Place officer portraits in `public/officers/` using the filenames defined in `src/data/officers.js`. Place the shared medal front at `public/medals/front.png` and each personalized medal back in `public/medals/`. Placeholder artwork appears automatically until those exact assets are added.

## Deploy free on Vercel

1. Create a GitHub repository.
2. Upload all project files to the repository.
3. Go to [Vercel](https://vercel.com/).
4. Select **Add New → Project** and import the GitHub repository.
5. Set **Framework Preset** to **Vite**.
6. Set **Build Command** to `npm run build`.
7. Set **Output Directory** to `dist`.
8. Click **Deploy**.
9. Use the generated Vercel URL when creating medal QR codes.

The included `vercel.json` routes direct visits such as `/officer/rickymhar-a-ajijul` back to the React app.

## Create QR codes

Each QR code should contain the complete, permanent certificate URL. Example:

`https://your-project.vercel.app/officer/abdel-aziz-a-sahibuddin`

Replace `your-project.vercel.app` with the generated Vercel domain. Generate a separate QR code for every officer URL, print it on the corresponding medal, and test it with a phone before production. Free QR code tools or browser QR features can encode these URLs; use a static QR code so it never expires.

## Add or edit officers

Edit `src/data/officers.js`. Every `slug` must be unique and becomes the officer’s URL:

`https://your-project.vercel.app/officer/the-officer-slug`
