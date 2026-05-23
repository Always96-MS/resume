# Marco Stefanelli — Resume

Interactive online CV built as a self-contained static website, accessible via QR code or direct link. Designed to complement the printed CV with expandable details, bilingual support, and a downloadable PDF.

## Live

[https://marcostefanelli.github.io/resume/](https://marcostefanelli.github.io/resume/)

*(Replace with the actual GitHub Pages URL after enabling it in repository settings.)*

## Stack

- HTML5 — semantic markup
- CSS3 — custom properties, flexbox, grid, scroll animations
- JavaScript (vanilla) — no frameworks, no build step
- [qrcode.js](https://github.com/davidshimjs/qrcodejs) via CDN — QR code generation

## Features

- Italian / English toggle with automatic browser language detection
- Persistent language preference via `localStorage`
- Two colour palettes activated by a CSS class on `<html>`
- Accordion timeline for work experience and education
- Sticky navigation with active-section highlight
- Fade-in animations on scroll (IntersectionObserver)
- Dynamic QR code pointing to the live page
- Fully responsive, mobile-first
- Downloadable PDF (language-aware)

## Customisation

Edit `PAGE_URL` at the top of `script.js` to match your GitHub Pages URL.
All text content lives in the `CONTENT` object in `script.js`.

## License

See [LICENSE](LICENSE).
