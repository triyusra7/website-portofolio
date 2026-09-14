# Tangkian ERP — portfolio case study kit

- `PRD.md` — the full PRD. Feed this to Claude in your IDE/terminal. It contains
  every word of final copy, the asset manifest, the component specs and the
  build order. Start at section 0.
- `assets/` — hero image, OG image, 4 diagrams (SVG) + editable Mermaid sources.
- `screenshots/` — 34 product screenshots, 3360x2000 @2x. The PRD uses 13 of
  them on the page; the rest are spares.
- `source/ERP-renamed-for-screenshots.html` — a copy of your program with the
  company names changed to Tangkian / Arobi and the consolidation contrast bug
  fixed. Your original file was not modified.
- `source/demo-data-seed.js` — the demo data used to fill company 2 and 3 for
  the screenshots. Load the HTML, open the console, paste this file, then run
  `__seedC2()` / `__seedC3()` after switching to that company.

Login for the HTML copy: `admin` / `admin123`.

Known issues found in the program are listed in Appendix B of the PRD.
