# PRD — Portfolio case study page: **Tangkian ERP**

**Owner:** Tri Anugerah Yusra
**Target repo:** `tri-anugerah-yusra-portofolio` (Next.js App Router + Tailwind, deployed on Vercel)
**New route:** `/projects/tangkian-erp`
**Reference implementation:** the existing `/projects/repo` page — match its structure, rhythm and tone
**Status:** ready to build
**Version:** 1.0

---

## 0. How to use this document

This PRD is written to be handed to a coding agent (Claude in an IDE/terminal) as the single source of truth for building one new page. Read it top to bottom before writing any code.

Rules for the implementing agent:

1. **Do not invent content.** Every sentence that appears on the page is written out in §6. Use it verbatim. If something is missing, ask — do not write filler.
2. **Do not invent numbers.** All figures are listed in §6 and Appendix A and come from real screenshots of the product. Changing a number breaks the match between the copy and the images.
3. **Match the existing site first.** Before creating new components, open `/projects/repo` in the repo and reuse its layout primitives, spacing scale, typography classes and prev/next navigation. This page must look like it belongs, not like a new design.
4. **Build in the order given in §14.** Ship a working page with real copy first, then images, then polish.
5. **Every screenshot is sample data.** The disclaimer in §6.11 is mandatory and must not be dropped.

---

## 1. Project summary

**One line:** A web-based accounting ERP that runs three companies owned by one person inside a single program, generates every journal entry automatically from source documents, and produces a consolidated group report on demand.

| Field | Value |
|---|---|
| Project name (page title) | Tangkian ERP |
| Subtitle | Accounting ERP · Multi-entity consolidation |
| Client | Group of three companies under one owner |
| Year | 2026 |
| Engagement type | Freelance |
| Duration | 1 month 15 days |
| My role | Lead, Product Designer, and client consultant |
| Team | Tri Anugerah Yusra (lead / design / consulting), Muhammad Jihad Robbani (developer) |
| Primary tags | ERP, Accounting, Web App |
| Secondary tags | Multi-entity, Financial reporting, Consulting |
| Platform | Desktop web (1280px and up is the primary working width) |

**The three entities:**

| Entity | Business | Why it needed its own module set |
|---|---|---|
| PT. Tangkian Lintas Anugerah | Cement distribution | Stock, warehouses, delivery orders (Surat Jalan) |
| PT. Tangkian Samudera Logistik | Stevedoring & haulage (PBM / Dooring) | Job orders keyed to BL, vessel and voyage; subcontractor vendors |
| Arobi | Coffee shop | Menu products, raw-material purchasing, mostly cash sales |

---

## 2. Goal

**Goal of the page (not the product):** a hiring manager or prospective client who lands on `/projects/tangkian-erp` should, within 90 seconds, understand:

1. what problem the client actually had (manual journals, manual consolidation, no ratios);
2. that the solution was designed around one specific insight — *the document is the input, the journal is a by-product*;
3. that the candidate led the work end to end (client discovery → IA → flows → UI → shipped product in 45 days);
4. that a real, working, non-trivial product exists behind the screenshots.

**Success criteria for the page**

- Reads as a case study, not a feature list. Problem → insight → structure → screens → outcome.
- Every screenshot is captioned with what it proves, not what it is.
- Lighthouse ≥ 90 on Performance and 100 on Accessibility for the new route.
- No layout shift on image load (every image has explicit width/height or a fixed aspect ratio).
- Works at 390px width with no horizontal scroll.

---

## 3. Scope and non-goals

**In scope**

- One new route `/projects/tangkian-erp` with the full case study.
- One new entry in the projects list/grid on the homepage, in the same shape as the existing entries.
- Prev/next project navigation wired into the existing sequence.
- 13 product screenshots + 1 hero image + 4 diagrams, optimised and served from `/public`.
- OG/Twitter metadata for the new route.

**Out of scope**

- Redesigning the portfolio shell, homepage, or any existing case study.
- Any CMS, MDX pipeline, or dynamic data source — the content is static and lives in the page/data file.
- Localisation. The page is English; screenshots stay in Indonesian (that is the product's language and it is fine — the captions carry the meaning).
- Animation beyond what the existing site already does.

---

## 4. Reference implementation

Open `/projects/repo` and copy its section order and rhythm. Observed structure of that page:

1. Sticky/top bar: back link to Projects · project counter (`n / 12`) · company name
2. Big project title + category line
3. Meta row: Year · Type · Categories
4. `Let's imagine this...` — narrative scenario paragraph
5. `Problem backgrounds`
6. `Goals`
7. `Project duration and teams`
8. `Information requirements` (with supporting visuals)
9. `Information about the feature` (detailed workflow specifications)
10. `Userflow` (diagram)
11. `Start The Design`
12. `Create design in figma`
13. `Final Design`
14. `Finally... Mockup app design` (screenshot gallery)
15. Result statement
16. Prev / next project links

This page follows the same skeleton, with two additions (an Information Architecture section and a Results/metrics section) and one substitution (`Create design in figma` → `Design decisions`, because this project was designed and built directly, not handed off from Figma).

**Tone to match:** plain, concrete, first person, short sentences. Introduce the accounting concept through the operator's day before naming it. No marketing adjectives ("seamless", "robust", "cutting-edge") anywhere.

---

## 5. Route, data, and file plan

### 5.1 Files to create

```
app/projects/tangkian-erp/page.tsx          # the case study page
app/projects/tangkian-erp/opengraph-image.tsx # optional; or static OG file, see §12
public/projects/tangkian-erp/
  hero-erp-3-entities.jpg                   # 2400×1200
  og-erp-3-entities.jpg                     # 1600×900
  ia-information-architecture.svg
  userflow-invoice-to-journal.svg
  userflow-po-to-payable.svg
  userflow-owner-consolidation.svg
  01-login.png
  02-c1-dashboard.png
  03-consolidation.png
  03b-consolidation-balance.png
  03c-consolidation-entities.png
  04-key-stats.png
  05-c1-journal-list.png
  07-c1-invoice-form.png
  10-c1-income-statement.png
  11-c1-balance-sheet.png
  20-c2-dashboard.png
  21-c2-jobs.png
  30-c3-dashboard.png
```

### 5.2 Files to modify

- The projects data source (wherever the homepage grid reads from — likely `data/projects.ts`, `lib/projects.ts`, or an array inside the homepage component). Add one entry. **Find the existing shape first and match it exactly.** Expected fields based on the live site: `slug`, `name`, `company`, `year`, `type`, `tags[]`, `secondaryTags[]`, `thumbnail`, `order`.

New entry:

```ts
{
  slug: 'tangkian-erp',
  name: 'Tangkian ERP',
  company: 'Freelance — group of three companies',
  year: '2026',
  type: 'Freelance',
  tags: ['Product Design', 'ERP'],
  secondaryTags: ['Accounting', 'Web App', 'Multi-entity'],
  thumbnail: '/projects/tangkian-erp/og-erp-3-entities.jpg',
}
```

- Prev/next navigation: insert this project into the ordered sequence and update the neighbours' prev/next accordingly. The counter in the top bar must recompute — if `/projects/repo` currently shows `2 / 12`, the list becomes 13 entries and every counter shifts. **Derive the counter from the array index; never hardcode it.**

### 5.3 Rendering approach

- Static page, server component by default. No client JS except the lightbox in §7.5 (which is optional — ship without it first).
- Content lives as typed constants at the top of `page.tsx` (or a co-located `content.ts`) so the JSX stays readable:

```ts
const META = { year: '2026', type: 'Freelance', categories: ['ERP', 'Accounting', 'Web App'] };
const PROBLEMS: { title: string; body: string }[] = [ /* §6.5 */ ];
const GOALS: { title: string; body: string }[] = [ /* §6.6 */ ];
const SHOTS: { src: string; alt: string; caption: string }[] = [ /* §9 */ ];
```

---

## 6. Page content — section by section

> Everything inside a fenced block or marked **verbatim** is final copy. Type it exactly.

### 6.1 Top bar

- Left: `← Projects` link to the projects list.
- Centre: `{index} / {total}` counter, derived from the projects array.
- Right: `Freelance` (the reference page shows the company name here; this project has no single company name, so use the engagement type).

### 6.2 Title block

**verbatim**

```
Tangkian ERP
Accounting ERP · Multi-entity consolidation

A web-based accounting system that runs three companies — cement distribution,
port logistics, and a coffee shop — inside one program, writes every journal
entry automatically from the source document, and produces a consolidated group
report on demand.
```

### 6.3 Meta row

Three label/value pairs on one row (stack on mobile):

| Label | Value |
|---|---|
| Year | 2026 |
| Type | Freelance |
| Categories | ERP, Accounting, Multi-entity |

### 6.4 `Let's imagine this...`

**verbatim**

```
Let's imagine this...

It is the first week of May. One owner holds three businesses: a cement
distributor, a port stevedoring and haulage company, and a coffee shop. He wants
one answer — which of them made money last month, and which one is quietly
eating cash?

To get it, someone has to open the old system for each company, read the numbers
off the screen, and rebuild a consolidated report in a spreadsheet by hand. Every
transaction behind those numbers was already typed more than once: once into the
profit and loss, once into the balance sheet, once more wherever else it
belonged. Ratios like ROE or ROA are not in the system at all — they get
calculated on a calculator, if anyone bothers.

The answer arrives a week later. Nobody is completely sure it is right.
```

### 6.5 `Problem backgrounds`

Intro line, **verbatim**:

```
I spent the first week sitting with the people who actually use the system — the
finance staff who input every day, and the owner who only ever looks at the
result. Five problems came up in every conversation.
```

Then five items. Render as a numbered list or as cards — whatever matches the reference page. **verbatim:**

1. **Journals are typed by hand, more than once.**
   Recording one transaction meant entering it into the profit and loss, then the balance sheet, then the supporting ledgers. The same number, keyed three times, by a human, at the end of a long day.

2. **The old interface works against the person using it.**
   Dense screens, unlabelled fields, no indication of what a form will do once it is saved. Staff learned it by memorising sequences rather than by reading it.

3. **Nothing stops a wrong entry.**
   Because the journal was the input, a typo in an account code or a reversed debit and credit went straight into the reports. Errors were found weeks later, when the balance sheet refused to balance.

4. **The owner's view is assembled by hand.**
   There was no report that answered "how is the group doing". Someone had to export three companies' figures and merge them into a spreadsheet at every month end.

5. **No ratios, anywhere.**
   ROE, ROA, ROIC, margins, receivable days, inventory days — none of it existed in the system. The owner was making decisions on revenue and bank balance alone.

### 6.6 `Goals`

Intro, **verbatim**:

```
The brief from the client was "make it modern". What they actually needed was
narrower than that, so I wrote the goals down and got them agreed before any
screen was designed.
```

Four goals, **verbatim:**

1. **Make the document the input, and the journal the by-product.**
   Staff record an invoice or a purchase order. The system writes the double entry. Nobody types a journal to record a sale.

2. **Give every company the modules its business actually has, without splitting the program.**
   One login, one program, three workspaces — a cement distributor needs warehouses and delivery orders; a stevedoring company needs job orders and subcontractors; a coffee shop needs a menu.

3. **Make the consolidated report a page, not a project.**
   Pick a month, read the group's profit and loss, balance sheet, and per-entity contribution. No exporting, no merging.

4. **Put the ratios the owner needs on a screen he can open himself.**
   ROE, ROA, ROIC, margins, free cash flow, receivable and inventory days — calculated from the same journals, not from a separate spreadsheet.

### 6.7 `Project duration and teams`

**verbatim**

```
Project duration and teams

The project ran for 1 month and 15 days, from client discovery to a working
system in the client's hands. We were two people.

I led the project: I ran the discovery sessions with the client, translated
accounting requirements into a product structure, designed the information
architecture, user flows and every screen, and stayed on as the client's
consultant through delivery — including the part where you have to tell a client
that the thing they asked for is not the thing they need.

Muhammad Jihad Robbani built it.

Working in a pair this small meant design decisions had to survive contact with
implementation immediately. A flow that could not be built in the time we had was
not a good flow, and I redrew several of them for that reason.
```

Render the duration as a small timeline or three-phase strip if it fits the reference page's style:

| Phase | Length | What happened |
|---|---|---|
| Discovery & requirements | ~1 week | Sessions with finance staff and the owner; audit of the old system; chart of accounts per entity |
| IA, flows & UI design | ~2.5 weeks | Architecture, journal rules, screen design, review loops with the client |
| Build, correction & handover | ~2.5 weeks | Implementation, data checks against the client's own figures, training |

### 6.8 `Information requirements`

**verbatim**

```
Information requirements

Before drawing anything I had to settle what the system needed to know, because
accounting is unforgiving about this. Three decisions shaped everything after.

Each entity keeps its own books. Separate chart of accounts, separate master
data, separate documents, separate journals. The consolidation reads all three —
it never merges them into one set of books. That is what makes the group report
correct rather than just a sum.

Every posted document must name its accounts. An invoice knows it debits
receivables and credits revenue and output VAT. A purchase order knows it debits
goods-in-transit and credits payables. Those rules had to be written down, per
document type, per entity, before anything was built — see the journal rules
table below.

Reports are derived, never stored. Profit and loss, balance sheet, cash flow, key
stats and the consolidated report are all computed from the journals at the
moment you open them. There is no second place where a number can be wrong.
```

Then the **journal rules table** — render as a real table:

| Document | Entity | Debit | Credit |
|---|---|---|---|
| Sales invoice | All three | Piutang Usaha (01-007) | Penjualan (04-001) + PPN Keluaran (02-003) |
| Cash sale | Arobi | Kas / Bank (01-001 / 01-002) | Pendapatan Penjualan (04-001) |
| Delivery order (Surat Jalan) | Cement | HPP (05-001) | Persediaan (01-005) |
| Purchase order | All three | Pembelian Dalam Perjalanan (01-006) | Hutang Usaha (02-001) or Kas / Bank |
| Goods receipt | Cement, Arobi | Persediaan (01-005) | Pembelian Dalam Perjalanan (01-006) |
| PBM / Dooring invoice | Logistics | Piutang Usaha (01-007) | Pendapatan Dooring (04-010) / Pendapatan PBM (04-011) + PPN Keluaran |
| Customer payment | All three | Kas / Bank | Piutang Usaha (01-007) |
| Vendor payment | All three | Hutang Usaha (02-001) | Kas / Bank |

Caption under the table, **verbatim**: `Every rule in this table is a line of code the user never has to think about.`

### 6.9 `Information architecture`

**verbatim**

```
Information architecture

The hardest structural question was how three different businesses share one
program without turning into three disconnected apps.

The answer was to split the navigation into three layers. Access and the entity
switcher sit above everything. The middle layer is the part that differs — each
entity gets only the operational modules its business has. Underneath, every
entity runs an identical accounting core: journal, general ledger, trial balance,
profit and loss, balance sheet, cash flow, key stats. Group reporting sits on top
of all three and reads them.

That split is why the coffee shop's sidebar is short and the cement company's is
long, and why the owner still gets one number at the end.
```

Image: `ia-information-architecture.svg`, full-bleed within the content column.
Caption, **verbatim**: `Information architecture — one login, three entity workspaces, one shared accounting core, one consolidation layer on top.`

### 6.10 `Userflow`

**verbatim**

```
Userflow

Three flows carried the whole product. I drew them before any screen, and they
are the reason the interface ended up as small as it did.

The first is the one that removed the double entry: a staff member fills in a
sales invoice and posts it, and the journal writes itself. The journal screen
still exists — an accountant needs it for adjustments — but nobody has to open it
to record a sale.

The second does the same thing for purchasing, across three documents: purchase
order, goods receipt, vendor bill, payment. Each one posts its own entry, so the
payable balance and the stock value can never drift apart from the ledger.

The third is the owner's flow, and it is short on purpose. Log in, open the
consolidated report, pick a month, read three tabs. What used to take a week now
takes four clicks.
```

Three images, each with a caption:

1. `userflow-invoice-to-journal.svg` — caption: `Sales invoice → automatic journal. The operator never opens the journal screen.`
2. `userflow-po-to-payable.svg` — caption: `Purchasing, across three documents and four automatic entries.`
3. `userflow-owner-consolidation.svg` — caption: `The owner's flow. Four clicks to a group-level answer.`

### 6.11 `Design decisions`

Intro, **verbatim**:

```
Design decisions

Four decisions did most of the work.
```

Four items, **verbatim:**

1. **Show the accounting consequence before the user commits.**
   The invoice form shows the customer's credit limit, outstanding receivable and remaining limit the moment a customer is selected, and DPP, VAT and grand total update live as items are typed. The person posting the document can see what it will do before they do it.

2. **Mark what the system wrote.**
   Every automatic entry carries an "Otomatis" badge in the journal list. Staff can tell at a glance which lines came from a document and which were typed by a human — which matters enormously when something needs correcting.

3. **Change the sidebar, not the app, when you change company.**
   Switching entity swaps the module list, the chart of accounts, the master data and the branding, but keeps the layout, the table patterns and the report screens identical. Staff who work across two companies do not relearn anything.

4. **Give the owner a screen he does not need help to read.**
   Key Stats is one page, grouped into four blocks — achievement, profitability, return and efficiency, growth — with the formula printed under every figure. "ROE — Laba Bersih / Ekuitas" sitting under the number is the difference between a report he trusts and one he asks someone else about.

**Mandatory disclaimer**, rendered in small muted text immediately before the first product screenshot and again in the page footer:

```
All figures in these screenshots are sample data prepared for this case study.
The client's actual financial data is not shown.
```

### 6.12 `Final design`

Intro, **verbatim**:

```
Final design

Every screen below is the shipped product.
```

Screens, in this order, each with its caption from §9:

1. `03c-consolidation-entities.png`
2. `03-consolidation.png`
3. `03b-consolidation-balance.png`
4. `04-key-stats.png`
5. `07-c1-invoice-form.png`
6. `05-c1-journal-list.png`
7. `02-c1-dashboard.png`
8. `20-c2-dashboard.png`
9. `21-c2-jobs.png`
10. `30-c3-dashboard.png`
11. `10-c1-income-statement.png`
12. `11-c1-balance-sheet.png`
13. `01-login.png`

### 6.13 `Result`

**verbatim**

```
Result

The three companies now run on one program. Invoices and purchase orders write
their own journals, so the finance staff record a document once instead of
keying the same figure into three places. The consolidated report — profit and
loss, balance sheet, and each entity's contribution to group revenue and profit —
is a page the owner opens himself, for any month, instead of a spreadsheet
someone assembles at month end. Key Stats puts ROE, ROA, ROIC, margins, free
cash flow and turnover days on the same screen, calculated from the same
journals as everything else.

Delivered in 1 month and 15 days, by two people.
```

Optional stat strip above or below this paragraph (use only these, they are from the sample data and are labelled as such):

| Figure | Label |
|---|---|
| 3 | entities in one program |
| 0 | journals typed by hand for a normal sale or purchase |
| 4 clicks | from login to a consolidated group report |
| 45 days | discovery to delivery |

### 6.14 Prev / next

Use the existing component. Link to the neighbouring projects in the array.

---

## 7. Component specs

Reuse existing components where they exist. These are the shapes needed.

### 7.1 `CaseStudyHeader`
Top bar + title block + meta row + hero image. Hero is `hero-erp-3-entities.jpg` at `aspect-[2/1]`, `object-cover`, rounded to match the site's radius, full content width. `priority` on the `next/image`.

### 7.2 `Section`
`<section>` with an `id`, an `h2`, and a body slot. Consistent top margin. The `h2` text is the section name exactly as written in §6 (`Problem backgrounds`, `Goals`, …). Give each an `id` so the URL can deep-link: `#problem`, `#goals`, `#duration`, `#requirements`, `#ia`, `#userflow`, `#decisions`, `#final-design`, `#result`.

### 7.3 `NumberedList`
Used for Problem backgrounds and Goals. Each item: a large muted ordinal, a bold one-line title, a body paragraph. Do not use plain `<ul>` bullets for these — the titles are the scannable layer.

### 7.4 `Figure`
Wraps every image. Props: `src`, `alt`, `caption`, `width`, `height`, `frame?: boolean`.
- `frame` true → 1px border + subtle shadow + rounded corners (use for product screenshots so the app's light UI separates from the page background).
- `frame` false → no border (use for the diagrams, which already carry their own background).
- Caption: small, muted, left-aligned under the image.
- Images render at full content width; screenshots are 3360×2000 source, so declare `width={3360} height={2000}` and let `next/image` size them.

### 7.5 `Lightbox` *(optional, build last)*
Click a screenshot → full-screen overlay at native resolution. Must be keyboard dismissible (`Esc`), focus-trapped, and `aria-modal`. If it cannot be made accessible quickly, ship without it — the screenshots are legible at content width.

### 7.6 `JournalRulesTable`
The table in §6.8. Horizontally scrollable inside its own `overflow-x-auto` container on small screens; the page body must never scroll horizontally.

---

## 8. Design tokens and layout

Take these from the existing site first. Only use the values below if the repo has no token for them.

| Token | Value |
|---|---|
| Content column | `max-w-[880px]` for text, `max-w-[1120px]` for figures, centred |
| Side gutter | `px-5` mobile, `px-8` from `md` |
| Section spacing | `mt-20` mobile, `mt-28` from `md` |
| H1 | `text-4xl md:text-6xl font-semibold tracking-tight` |
| H2 | `text-2xl md:text-3xl font-semibold tracking-tight` |
| Body | `text-base md:text-lg leading-relaxed` |
| Caption | `text-sm text-neutral-500` |
| Figure radius | `rounded-xl` |
| Figure border | `ring-1 ring-black/5` |

**Product accent colours** (use sparingly — for the stat strip, table header, or the entity colour dots; do not restyle the whole page):

| Name | Hex | Used for |
|---|---|---|
| Navy | `#264C70` | Primary / cement entity |
| Deep navy | `#1E3F5C` | Dark surfaces |
| Amber | `#E8A020` | Accent / coffee shop entity |
| Green | `#38A169` | Logistics entity |

If the portfolio supports dark mode, define every colour as a token with a light and dark value; never let a figure caption or table border be defined only inside a media query.

---

## 9. Asset manifest

All paths relative to `/public/projects/tangkian-erp/`.

### 9.1 Hero and social

| File | Size | Use | Alt text |
|---|---|---|---|
| `hero-erp-3-entities.jpg` | 2400×1200 | Page hero | `Tangkian ERP consolidated report shown between the logistics dashboard and the key-stats screen` |
| `og-erp-3-entities.jpg` | 1600×900 | OG / Twitter card, project thumbnail | same |

### 9.2 Diagrams

| File | Use | Alt text |
|---|---|---|
| `ia-information-architecture.svg` | §6.9 | `Information architecture diagram: login and entity switcher above three entity workspaces, a shared accounting core below, and the consolidation layer at the bottom` |
| `userflow-invoice-to-journal.svg` | §6.10 | `User flow: selecting a customer, entering items, checking totals, posting the invoice, and the automatic journal that results` |
| `userflow-po-to-payable.svg` | §6.10 | `User flow: purchase order, goods receipt, vendor bill and payment, each posting its own journal entry` |
| `userflow-owner-consolidation.svg` | §6.10 | `User flow: the owner logs in, opens the consolidated report, reads three tabs, opens key stats, and exports` |

Editable Mermaid sources for all four live in `diagrams.mmd` (keep it out of `/public`; it is a working file).

### 9.3 Product screenshots

All 3360×2000 PNG, captured at 2× device pixel ratio. **Captions are final copy — use verbatim.**

| File | Caption |
|---|---|
| `03c-consolidation-entities.png` | Group summary: each entity's revenue, net profit, assets and equity side by side, with its share of group revenue and profit. |
| `03-consolidation.png` | Consolidated profit and loss for April 2026. The elimination column is reserved for inter-company transactions. |
| `03b-consolidation-balance.png` | Consolidated balance sheet across the three entities. |
| `04-key-stats.png` | Key Stats. Every ratio the owner asked for, on one page, with its formula printed underneath. |
| `07-c1-invoice-form.png` | The sales invoice. Credit limit and remaining limit appear as soon as a customer is chosen; VAT and DPP are calculated backwards from a VAT-inclusive price. |
| `05-c1-journal-list.png` | The journal list. The "Otomatis" badge marks every entry the system wrote from a document. |
| `02-c1-dashboard.png` | PT. Tangkian Lintas Anugerah — cement distribution. Sales, receivables ageing, stock per warehouse, and recent postings. |
| `20-c2-dashboard.png` | PT. Tangkian Samudera Logistik — port logistics. The same layout, a different set of modules in the sidebar. |
| `21-c2-jobs.png` | Job orders keyed to bill of lading, vessel and voyage — the operational record a logistics invoice is built from. |
| `30-c3-dashboard.png` | Arobi — coffee shop. The smallest of the three, and the sidebar shows it. |
| `10-c1-income-statement.png` | Profit and loss, computed from the journals rather than typed. |
| `11-c1-balance-sheet.png` | Balance sheet for the same period and the same source data. |
| `01-login.png` | One login for all three companies; the menus a user sees are set per role and per entity. |

### 9.4 Image handling

- Convert screenshots to WebP at quality 82 and keep the PNG as a fallback only if the repo already does this. Otherwise ship PNG through `next/image`, which will serve modern formats automatically.
- `sizes="(max-width: 768px) 100vw, 1120px"` on every figure.
- `loading="lazy"` on everything except the hero.
- Never upscale. The screenshots are large by design so they stay readable when opened.

---

## 10. Responsive rules

| Breakpoint | Behaviour |
|---|---|
| ≥1280px | Text column 880px; figures 1120px, centred and allowed to extend past the text column |
| 768–1279px | Text and figures both at container width minus gutters |
| <768px | Single column. Meta row stacks. Numbered list ordinals move above the title. Tables get `overflow-x-auto` |
| 390px | No horizontal page scroll. Minimum 16px side gutter. Diagram SVGs scale down; they are legible enough as a thumbnail with the caption carrying the meaning, and tapping opens them full size if the lightbox is built |

---

## 11. Accessibility

- One `h1` (the project name). Sections use `h2`; sub-items inside numbered lists use `h3` or `strong`, not a heading jump.
- Every image has meaningful `alt` (given in §9). Decorative framing elements get `alt=""`.
- Captions are in `<figcaption>` inside `<figure>` — not floating `<p>` tags.
- Colour contrast ≥ 4.5:1 for body text and ≥ 3:1 for large text, in both themes.
- Focus visible on every link, including the prev/next navigation and any lightbox trigger.
- The SVG diagrams already carry `<title>` and `role="img"`; when embedding with `next/image` the `alt` is what matters, so keep both.
- Do not convey entity identity by colour alone — the entity names are always written out.

---

## 12. SEO and metadata

```ts
export const metadata = {
  title: 'Tangkian ERP — multi-entity accounting ERP | Tri Anugerah Yusra',
  description:
    'Case study: an accounting ERP running three companies in one program, with automatic journal entries from source documents and a consolidated group report. Lead designer and consultant, 45 days, team of two.',
  openGraph: {
    images: ['/projects/tangkian-erp/og-erp-3-entities.jpg'],
    type: 'article',
  },
  twitter: { card: 'summary_large_image' },
};
```

Match whatever metadata pattern the other project pages already use — if they export a shared helper, use it instead of the object above.

---

## 13. Acceptance criteria

The page is done when all of the following are true.

**Content**

- [ ] Every section in §6 exists, in order, with the copy verbatim.
- [ ] The sample-data disclaimer appears before the first screenshot and in the footer.
- [ ] Every one of the 13 screenshots and 4 diagrams is present with its caption from §9.
- [ ] No number on the page contradicts the figure visible in the screenshot next to it.
- [ ] The journal rules table renders with all eight rows.

**Integration**

- [ ] `/projects/tangkian-erp` is reachable from the homepage grid.
- [ ] The `n / total` counter is computed, and every other project's counter is still correct.
- [ ] Prev/next links work in both directions and the neighbouring projects' links were updated.
- [ ] The thumbnail appears in the projects grid in the same style as the others.

**Quality**

- [ ] No horizontal scroll at 390px, 768px, 1280px, 1920px.
- [ ] Lighthouse: Performance ≥ 90, Accessibility 100, Best Practices ≥ 95, SEO ≥ 95.
- [ ] Cumulative layout shift ≈ 0 — all images have intrinsic dimensions.
- [ ] Dark mode (if the site has it) renders every caption, table border and diagram legibly.
- [ ] `next build` passes with no type errors and no `next/image` warnings.

---

## 14. Build order

Do these in sequence. Each step should end with a page that renders.

1. **Read the reference.** Open `/projects/repo/page.tsx` and the projects data source. Write down the component names, the container widths, the section spacing, and the prev/next mechanism. Do not write new code yet.
2. **Scaffold the route.** Create `app/projects/tangkian-erp/page.tsx` with the header, all section headings from §6, and placeholder bodies. Verify it renders and is reachable.
3. **Land the copy.** Paste in every verbatim block from §6. No images yet. Read the page end to end — it should already work as a case study in plain text.
4. **Wire the data entry.** Add the project to the projects array, confirm the grid card and the counter, confirm prev/next.
5. **Add the diagrams.** `Figure` component, `frame={false}`, captions from §9.
6. **Add the screenshots.** `Figure` with `frame`, captions from §9, correct `sizes`, lazy except hero.
7. **Add the hero and metadata.** §7.1 and §12.
8. **Responsive pass.** Check the four widths in §10. Fix the table and any diagram overflow.
9. **Accessibility pass.** Heading order, alt text, focus rings, contrast. Run axe or Lighthouse.
10. **Optional: lightbox.** Only if §7.5's accessibility requirements are met.
11. **Verify against §13** line by line before calling it done.

---

## Appendix A — Product facts (source of truth for anything you write)

### A.1 Modules per entity

**PT. Tangkian Lintas Anugerah (cement)**
Dashboard · Laporan Konsolidasi · Jurnal · Invoice Penjualan · Surat Jalan · Piutang Dagang · Purchase Order · Penerimaan Barang · Hutang Dagang · Laporan Penjualan · Laporan PO · Laporan Pembayaran · Laporan Surat Jalan · Kartu Piutang · Kartu Stok · Stock Adjustment · Buku Besar · Neraca Saldo · Laba Rugi · Neraca · Arus Kas · Key Stats · Kas Harian · Kas & Bank · Aset Tetap · Chart of Accounts · Master Kas & Bank · Master Customer · Master Supplier · Master Gudang · Saldo Awal · Periode Akuntansi · Profil Perusahaan · Pengguna · Hak Akses

**PT. Tangkian Samudera Logistik (PBM & ekspedisi)**
Dashboard · Laporan Konsolidasi · Jurnal · Invoice · Purchase Order · Piutang Usaha · Laporan Pendapatan · Laporan PO · Kartu Piutang · Kartu Hutang · Laporan Pembayaran · Buku Besar · Neraca Saldo · Laba Rugi · Neraca · Arus Kas · Key Stats · Chart of Accounts · Master Kas & Bank · Master Customer · Vendor / Subkon · Saldo Awal · Periode Akuntansi · Profil Perusahaan
Plus job orders carrying BL number, vessel, voyage and container/tonnage.

**Arobi (coffee shop)**
Dashboard · Laporan Konsolidasi · Jurnal · Invoice Penjualan · Piutang Usaha · Purchase Order · Penerimaan Barang · Hutang Usaha · Buku Besar · Neraca Saldo · Laba Rugi · Neraca · Arus Kas · Kas Harian · Kas & Bank · Master Produk/Menu · Master Supplier · Chart of Accounts · Master Kas & Bank · Saldo Awal · Periode Akuntansi · Profil Perusahaan

### A.2 Consolidated figures visible in the screenshots (April 2026, sample data)

| | Revenue | Net profit | Total assets | Equity | Share of revenue |
|---|---|---|---|---|---|
| PT. Tangkian Lintas Anugerah | Rp293.807.252 | Rp21.857.252 | Rp1.135.426.050 | Rp1.056.857.252 | 33.1% |
| PT. Tangkian Samudera Logistik | Rp490.200.000 | Rp88.150.000 | Rp668.322.000 | Rp488.150.000 | 55.2% |
| Arobi | Rp103.950.000 | Rp20.570.000 | Rp198.820.000 | Rp191.570.000 | 11.7% |
| **Consolidated** | **Rp887.957.252** | **Rp130.577.252** | — | — | 100% |

Consolidated net margin 14.7%; ROE 5.9%; ROA 5.3%.

### A.3 Key Stats blocks (what the screen contains)

1. **Ringkasan Capaian Keuangan** — Kas & Bank, Total Aset, Total Liabilitas, Total Ekuitas, Revenue, Gross Profit, EBITDA, Laba Bersih
2. **Profitabilitas** — Gross Margin, EBITDA Margin, Operating Margin, Net Margin
3. **Return & Efisiensi** — ROE, ROA, ROIC, Free Cash Flow, Receivables Days, Inventory Days, Asset Turnover, Liabilities to Equity
4. **Growth** — compared against the prior year, with an em dash where there is no comparative

Every figure prints its formula underneath (e.g. `ROE — Laba Bersih / Ekuitas`).

### A.4 Language note

The product UI is in Indonesian. The case study is in English. When an Indonesian term appears in the English copy, it is either a proper module name (Surat Jalan, Kartu Stok, Piutang Usaha) or is glossed on first use. Do not translate module names in captions — the reader needs to find them in the screenshot.

---

## Appendix B — Issues found while preparing the assets

Not for the page. For your own backlog.

1. **Contrast bug in the consolidated report.** The `LABA BERSIH` row in `renderKonsolidasi` renders dark text on the `#1A3550` background because the table's `td` colour rule wins over the row's inline `color`. The row is close to unreadable. Fix: set the colour on each `<td>` in `combinedRow`, not on the `<tr>`. *(Patched in the screenshot copy only — the original file is untouched.)*
2. **Companies 2 and 3 ship with no data.** In the file as delivered, only the cement company has demo data; the logistics company and Arobi are empty, which makes the consolidated report show a single entity. Demo data for both was seeded for these screenshots. If you demo the product live, seed it first.
3. **Duplicate opening balance.** `connectedStateJournals` converts any `kasBankTx` row whose description starts with "saldo awal" into a synthetic opening journal *unless* a journal tagged `SALDO_AWAL` already exists. A manually-created opening journal that is not tagged therefore gets counted twice. Tag opening journals with `tipe: 'SALDO_AWAL'`.
4. **Entity-2 chart of accounts has no fixed-asset account**, so fixed assets held by the logistics company cannot be journalised — they only exist in the `asetTetap` array, which the balance sheet does not read. Add the accounts if that entity is ever going to own equipment.
5. **Dashboard revenue chart defaults to the current month**, which is empty for a dataset that ends in April — the summary under the chart shows Rp0 and reads like a bug. Default the selector to the latest month that has data.

---

## Appendix C — File inventory delivered with this PRD

```
PRD.md                       this document
assets/
  hero-erp-3-entities.jpg    2400×1200 hero
  og-erp-3-entities.jpg      1600×900 social / thumbnail
  ia-information-architecture.svg
  userflow-invoice-to-journal.svg
  userflow-po-to-payable.svg
  userflow-owner-consolidation.svg
  diagrams.mmd               editable Mermaid sources for all four diagrams
shots/                       34 product screenshots, 3360×2000 PNG @2×
                             (13 are used on the page; the rest are spares)
```
