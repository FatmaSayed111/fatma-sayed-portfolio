# Fatma Sayed — Portfolio (React + Vite + Tailwind)

English-only portfolio with a clean gradient aesthetic, smooth animations, and sections:
Hero, About, Skills, Projects, Experience, Contact.

## Requirements
- Node.js 18+ (npm comes with Node)

## Run locally (Windows PowerShell)
1) Extract the ZIP on your **Desktop**.
2) Open the folder in **VS Code**.
3) In the terminal, run:
```powershell
npm install
npm run dev
```
Open the local URL (e.g., http://localhost:5173).

## Production build
```powershell
npm run build
npm run preview
```

## Customize your data
- Update links:
  - `src/components/Navbar.jsx` (GitHub / LinkedIn / Email)
  - `src/components/Contact.jsx` (email/phone/github)
- Projects: edit `src/data/projects.js` (images, descriptions, demo/repo links).
- CV: put your `cv.pdf` into the `public` folder.
- Name & bio: `src/components/Hero.jsx` and `src/components/About.jsx`.

*Note*: Design is original and does not copy third‑party assets.
