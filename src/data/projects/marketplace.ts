import type { Project } from "./types";

const wix = "/projects/marketplace/wix";

export const marketplace: Project = {
  id: "marketplace",
  title: "Marketplace",
  company: "PasarMIKRO",
  projectType: "Full-time",
  category: "Product Design · Mobile App",
  year: "2021 – 2024",
  cover: "/projects/marketplace-cover.png",
  thumbnail: "/projects/marketplace-card.jpg",
  gradient: "from-blue-100 via-background to-card",
  tags: ["B2B", "Agri-tech", "Mobile App"],
  summary:
    "A B2B agricultural trading marketplace designed for PasarMIKRO, an agritech platform serving around 1,000 registered traders and smallholder farmers (roughly 600 active) across Indonesia.",
  problem:
    "Users (both buyers and sellers) needed a simple way to discover partners and trade commodities with confidence. Buyers wanted to expand their supplier network; sellers needed steady demand. In a market where high-value trades were traditionally conducted only after years of personal acquaintance, digital trust was the primary hurdle. Furthermore, users aged 40+ with low smartphone confidence struggled with multi-step purchasing and redirects.",
  solution:
    "Redesigned the marketplace with dedicated store pages shareable via direct web links (allowing new partners to trade without first installing the app). Introduced a 'Sukses' completed-transaction counter as an early trust indicator instead of misleading star ratings, added a silver badge verification for repeat traders, unified quantity selection and live price calculation onto a single page to prevent confusing redirects, and created commodity search and category filters.",
  outcome:
    "Eliminated checkout drop-off caused by multi-page redirects, introduced verifiable trust indicators for unvetted traders, and enabled link-based trading through WhatsApp. Delivered across two sprints (one month) by a cross-functional team.",
  features: [
    {
      title: "Pasar Baru: Temukan Mitra Baru",
      description:
        "Halaman marketplace terpusat dengan search bar dan kategori komoditas, memudahkan pembeli menemukan penjual baru tanpa harus install aplikasi terlebih dahulu.",
      image: "/projects/marketplace/screen-pasar-baru.png",
    },
    {
      title: "Toko & Indikator \"Sukses\"",
      description:
        "Setiap penjual punya halaman toko dengan badge Sukses yang menampilkan jumlah transaksi berhasil, menggantikan sistem rating bintang yang kurang relevan untuk perdagangan komoditas.",
      image: "/projects/marketplace/screen-toko.png",
    },
    {
      title: "Buat Penawaran: Quantity di Satu Halaman",
      description:
        "Proses penawaran dirancang ulang agar ringkas: pilih komoditas, tentukan jumlah, dan lihat total harga langsung dalam satu layar tanpa redirect yang membingungkan.",
      image: "/projects/marketplace/screen-penawaran.png",
    },
    {
      title: "Atur Toko & Banner",
      description:
        "Penjual dapat mengelola katalog, memperbarui harga komoditas harian, dan menampilkan banner toko dengan mudah.",
      image: "/projects/marketplace/screen-toko-buka.png",
    },
  ],
  flowImage: "/projects/marketplace/userflow.png",
  flowProcessImages: [
    "/projects/marketplace/flow-1.jpg",
    "/projects/marketplace/flow-2.jpg",
    "/projects/marketplace/flow-3.jpg",
  ],
  resultImage: "/projects/marketplace/mockup-jadi.jpg",
  caseStudySections: [
    {
      title: "Let's imagine this scenario...",
      body:
        "You are an egg trader or farmer with a good harvest, but your local buyers are already fully stocked. You need to find new buyers quickly before the goods spoil, but your existing connections are limited. You want a simple, trustworthy way to connect with reliable buyers outside your immediate circle without risking your capital.",
      images: [{ label: "mockup-utama.jpg", src: `${wix}/mockup-utama-187ec7.jpg` }],
    },
    {
      title: "Problem background",
      body:
        "PasarMIKRO partners with farmers, traders, and smallholders across rural Indonesia (~1,000 registered, ~600 active). Finding new trade partners traditionally relied on word-of-mouth or casual WhatsApp groups, which carry high fraud risk, zero transaction guarantees, and uncertain payment schedules. Our users needed a straightforward, secure marketplace tailored to how agricultural trade actually operates.",
    },
    {
      title: "Goals",
      body:
        "1. Enable buyers and sellers to discover verified partners and trade commodities with price clarity.\n2. Build trust between unfamiliar parties through transparent transaction histories and secure escrow payments (Talangin).\n3. Keep the interaction model lightweight so rural users with low-end smartphones can navigate comfortably.",
    },
    {
      title: "Project duration and team",
      body:
        "Completed over 3 sprints (6 weeks) from discovery to production rollout. I worked alongside another UI/UX designer, 2 front-end developers, 2 back-end developers, a tech lead, a QA engineer, and a product manager.",
    },
    {
      title: "Lightweight research round",
      body:
        "With limited time and resources, I ran a focused round of user research: I approached real buyers and traders who needed eggs and other staples. I asked three core questions: where they buy, how much volume they handle, and at what prices, because these answers reflect the heartbeat of daily trade. I also collaborated closely with our field team and stakeholders to keep our assumptions honest.",
    },
    {
      title: "Core user pain points",
      body:
        "Our conversations highlighted four fundamental challenges:\n1. Reaching beyond local circles: Sellers struggled to find reliable buyers when local demand dipped.\n2. High-value transactions require verified trust: Traders hesitated to do business with unfamiliar partners without references.\n3. Dynamic pricing: Agricultural commodities shift in price daily, requiring effortless quotation adjustments.\n4. Working capital constraints: Buyers often needed short-term credit or flexible payment terms to keep their supply moving.",
    },
    {
      title: "Early interface",
      images: [{ label: "9.jpg", src: `${wix}/9-cbd61a.jpg` }],
    },
    {
      title: "The legacy flow",
      body:
        "When I joined, the app required buyers to select a store, choose a commodity, and then navigated away to a separate page just to enter quantities and payment methods. Completing the purchase required further redirects, causing confusion and abandoned orders among users aged 40+.",
      images: [{ label: "pasar-beli.jpg", src: `${wix}/pasar-beli-8a36ed.jpg` }],
    },
    {
      title: "High-fidelity redesign",
      body:
        "I designed the new flow in high fidelity. The core change kept quantity selection on the product page with a persistent floating price summary. Users input their volume, view the live total, and proceed straight to payment confirmation. If adjustments are needed, they remain in context rather than losing their place in navigation.",
      images: [{ label: "pasar-pembelian.jpg", src: `${wix}/pasar-pembelian-b66dff.jpg` }],
    },
    {
      title: "Sprint prioritization",
      body:
        "Due to 1-week sprint constraints and competing business priorities, the full rollout was phased, allowing the core checkout improvements to stabilize first before adding more advanced seller features.",
    },
    {
      title: "Start of the revamp",
      images: [{ label: "foto-1.jpg", src: `${wix}/foto-1-92e6bb.jpg` }],
    },
    {
      title: "Field research & interviews",
      body:
        "With an expanded product team, we conducted structured field research. We held 'How Might We' discovery workshops internally, followed by on-site field interviews with traders and farmers in their own working environments.",
      images: [
        { label: "HMW_edited.jpg", src: `${wix}/hmw-edited-734906.jpg` },
        { label: "question for buyer.png", src: `${wix}/question-for-buyer-ab91be.png` },
        {
          label: "question for seller.png",
          src: `${wix}/0e435c-3267eae3b2004c4ca14e3d09621a2fac-mv2-3267ea.png`,
        },
      ],
    },
    {
      title: "Key field research insights",
      body:
        "Our user interviews revealed critical patterns in how agricultural trade works in Indonesia:\n• Established relationships: They had known their sellers and buyers for 10 to 15 years, and had first met them through word of mouth (via drivers, brokers, or direct introductions).\n• Trust verification: Track records are critical. Traders ask peers who have previously traded with a seller to confirm reliability.\n• 2–3 transaction threshold: After 2 to 3 successful transactions with no payment friction, trust is established.\n• Farmers as key stakeholders: To engage new farmers, traders must offer tangible value (e.g. cultivation advice, seeds, or reliable cash advances).\n• Payment terms: Trust depends on full payment commitments. Cash or bank transfer is acceptable as long as it is honored on time, though digital transfers are increasingly preferred.\n• Device accessibility: Some farmers did not own smartphones and relied on SMS or voice calls.\n• Price volatility: Commodity prices change daily, and smallholders often lacked benchmark market pricing.",
    },
    {
      title: "Developing our core personas",
      body:
        "From our field findings, we established two distinct personas:\n1. The Trader: High-volume buyers and middlemen purchasing raw materials to resell to distributors or food processors.\n2. The Farmer: Producers selling harvested crops who need fair, timely payments and transparent transactions.",
      images: [
        { label: "trader-1.jpg", src: `${wix}/trader-1-329043.jpg` },
        { label: "trader-2.jpg", src: `${wix}/trader-2-426399.jpg` },
        { label: "farmer-1.jpg", src: `${wix}/farmer-1-92f06a.jpg` },
        { label: "farmer-2.jpg", src: `${wix}/farmer-2-7a80dc.jpg` },
      ],
    },
    {
      title: "Journey mapping for trader and farmer",
      body:
        "We mapped the end-to-end journey for both traders and farmers to identify emotional highs and operational friction points across the trading cycle.",
      images: [
        {
          label: "trader journey map",
          src: `${wix}/screenshot-2024-05-02-at-01-59-43-47487f.png`,
        },
        {
          label: "farmer journey map",
          src: `${wix}/screenshot-2024-05-02-at-01-58-49-cc5039.png`,
        },
      ],
    },
    {
      title: "Field research documentation",
      body:
        "On-site visits to agricultural hubs, wet markets, and farming operations, observing real transaction patterns and digital device usage.",
      images: [
        { label: "ayam.jpg", src: `${wix}/ayam-631e08.jpg` },
        { label: "5.jpg", src: `${wix}/5-1770b6.jpg` },
        {
          label: "3.jpg",
          src: `${wix}/0e435c-c82f8ff9071e4b338a5320e82911bdfa-mv2-c82f8f.jpg`,
        },
        { label: "ikan.jpg", src: `${wix}/ikan-5b00ae.jpg` },
        { label: "4.jpg", src: `${wix}/4-0443ec.jpg` },
        { label: "7.jpg", src: `${wix}/7-0c67fa.jpg` },
        {
          label: "6.jpg",
          src: `${wix}/0e435c-692c1d844723432b9bd22e095019b536-mv2-692c1d.jpg`,
        },
      ],
    },
    {
      title: "Ideate new marketplace",
      images: [{ label: "8.jpg", src: `${wix}/8-c3f6ad.jpg` }],
    },
    {
      title: "Strategic objectives",
      body:
        "From our field research, we defined three core product pillars:\n1. DISCOVERY (Matchmaking): Connect buyers and sellers based on commodity needs.\n2. TRUST: Provide transparent transaction proof and verification.\n3. VALUE/STICKINESS: Deliver reliable pricing and convenient ordering so traders return daily.",
      images: [
        {
          label: "ideation board 1",
          src: `${wix}/0e435c-e83a51da93ee45ba94307b20f0c72866-mv2-e83a51.jpeg`,
        },
        {
          label: "ideation board 2",
          src: `${wix}/0e435c-c84eead4612d410e97bbc45f4f88c269-mv2-c84eea.jpeg`,
        },
        {
          label: "ideation board 3",
          src: `${wix}/0e435c-c5484ea973f2414cac9f6fb3b1e50f34-mv2-c5484e.jpeg`,
        },
        {
          label: "ideation board 4",
          src: `${wix}/0e435c-bd2d574f99914ee195cf1f645667e402-mv2-bd2d57.jpeg`,
        },
        {
          label: "ideation board 5",
          src: `${wix}/0e435c-cf2e77740c7444beaf83ecb85036c73c-mv2-cf2e77.jpeg`,
        },
      ],
    },
    {
      title: "Key feature decisions",
      body:
        "Because our team was small and we needed to focus our development sprint, I proposed prioritized solutions:\n1. Streamlined transaction flow: Redesigned the checkout to remove multi-step redirects.\n2. Priority commodities: Allowed sellers to specify up to 10 core commodities they accept, avoiding spam offers.\n3. Verification badges: Introduced a silver badge for users who completed at least three verified transactions.\n4. In-page quantity selection: Kept quantity inputs and live price calculations on the store page.\n5. Search and category filters: Enabled users to filter by commodity type or search for specific stores, especially crucial for users aged 40+ who struggled to browse long unstructured lists.\n6. 'Sukses' transaction counter: In early-stage agricultural trade, traditional star ratings are not credible. Instead, I proposed showing how many transactions a shop had already completed and their recency, giving buyers a concrete, verifiable trust signal.\n7. Store banners: Enabled sellers to customize their digital storefront with commodity photos.\n8. Consolidated market view: Combined disparate request and offer feeds into a unified marketplace.",
    },
    {
      title: "Think about the flow",
      body:
        "These are the flows I drew for the new process, detailing both buy and sell paths through verification and checkout.",
      images: [
        {
          label: "marketplace flow 1",
          src: `${wix}/0e435c-e0efe3528a0144b99c971ef0353d8ffb-mv2-e0efe3.png`,
        },
        {
          label: "marketplace flow 2",
          src: `${wix}/0e435c-e6b71e4cf95b40b48b7450df97d33e8b-mv2-e6b71e.png`,
        },
        {
          label: "marketplace flow 3",
          src: `${wix}/0e435c-2b16f8a5e6554057af0c7d666a3af18d-mv2-2b16f8.png`,
        },
        {
          label: "marketplace flow 4",
          src: `${wix}/0e435c-2c41e46b7c57465d95774129843c3ff0-mv2-2c41e4.png`,
        },
        { label: "buyer.jpg", src: `${wix}/buyer-823e16.jpg` },
        { label: "seller.jpg", src: `${wix}/seller-797fda.jpg` },
      ],
    },
    {
      title: "Now it's time to design!",
      images: [
        {
          label: "Design in Figma",
          src: `${wix}/screenshot-2024-05-02-at-01-51-18-44b253.png`,
        },
      ],
    },
    {
      title: "Detailed feature design",
      body:
        "Since the design system was already in place, I moved straight into designing high-fidelity components and interaction flows.",
    },
    {
      title: "Priority commodity",
      body:
        "This feature is called \"Priority commodity\". Sellers specify up to 10 commodities they actively trade, preventing irrelevant buyer inquiries while keeping flexibility to trade across categories.",
      images: [
        { label: "Section-1.jpg", src: `${wix}/section-1-26495d.jpg` },
        { label: "Section-2.jpg", src: `${wix}/section-2-805111.jpg` },
      ],
    },
    {
      title: "Commodity category & search",
      body:
        "The difference between the search bar and commodity category is exploratory vs. targeted discovery: categories help undecided buyers explore available inventory, while search helps buyers find specific commodities or shops they already intend to trade with.",
      images: [
        { label: "Section-6.jpg", src: `${wix}/section-6-da23d6.jpg` },
        { label: "Section-5.jpg", src: `${wix}/section-5-7b21f6.jpg` },
      ],
    },
    {
      title: "Sukses indicator & verification badge",
      body:
        "To find a shop they can trust, users normally rely on badges or ratings. Because we did not have many active users yet, I proposed showing how many transactions a shop had already completed. This provides concrete evidence of reliability without relying on skewed star ratings. Silver badges mark shops with three or more verified completed orders.",
      images: [
        { label: "Section-7.jpg", src: `${wix}/section-7-f01261.jpg` },
        { label: "Section-8.jpg", src: `${wix}/section-8-db2c1a.jpg` },
        { label: "Section-9.jpg", src: `${wix}/section-9-6df325.jpg` },
      ],
    },
    {
      title: "In-page quantity selection",
      body:
        "Rather than routing users to a separate screen to select volume, users choose quantities on the store page with a live floating price calculation, eliminating abandoned carts.",
      images: [
        { label: "Section-3.jpg", src: `${wix}/section-3-6e9649.jpg` },
        { label: "Section-4.jpg", src: `${wix}/section-4-3f529c.jpg` },
      ],
    },
    {
      title: "Finally the result for all features",
      body:
        "These are the flows built by our developers. The revamp took a long time, but it transformed PasarMIKRO's core trading experience into a trusted, accessible B2B platform.",
      images: [
        { label: "komoditas.jpg", src: `${wix}/komoditas-718673.jpg` },
        { label: "komoditas-2.jpg", src: `${wix}/komoditas-2-eefa38.jpg` },
        { label: "toko-1.jpg", src: `${wix}/toko-1-590a79.jpg` },
        { label: "toko-2.jpg", src: `${wix}/toko-2-03c86b.jpg` },
        { label: "give offer.jpg", src: `${wix}/give-offer-2cb8e0.jpg` },
        { label: "fill.jpg", src: `${wix}/fill-22194c.jpg` },
        { label: "summary.jpg", src: `${wix}/summary-b61589.jpg` },
        { label: "done.jpg", src: `${wix}/done-fffdab.jpg` },
        { label: "toko-sendiri-1.jpg", src: `${wix}/toko-sendiri-1-7a189c.jpg` },
        { label: "atur-toko-1.jpg", src: `${wix}/atur-toko-1-0a1a98.jpg` },
        { label: "atur-toko-2.jpg", src: `${wix}/atur-toko-2-047bd4.jpg` },
        { label: "pilih-stok.jpg", src: `${wix}/pilih-stok-b3f58c.jpg` },
        { label: "belum-diproses.jpg", src: `${wix}/belum-diproses-d3ce8e.jpg` },
        { label: "detail-1.jpg", src: `${wix}/detail-1-3574bb.jpg` },
        { label: "diproses.jpg", src: `${wix}/diproses-a661b5.jpg` },
        { label: "detail-2.jpg", src: `${wix}/detail-2-8b69a3.jpg` },
        { label: "selesai.jpg", src: `${wix}/selesai-4ecc2e.jpg` },
        { label: "detail-3.jpg", src: `${wix}/detail-3-f40bc2.jpg` },
        { label: "dikomplain.jpg", src: `${wix}/dikomplain-a2393a.jpg` },
        { label: "detail-4.jpg", src: `${wix}/detail-4-9aa6d2.jpg` },
        { label: "tidak-berhasil.jpg", src: `${wix}/tidak-berhasil-e9b0a7.jpg` },
        { label: "detail-5.jpg", src: `${wix}/detail-5-368186.jpg` },
        { label: "beli-1.jpg", src: `${wix}/beli-1-d55a8f.jpg` },
        { label: "beli-2.jpg", src: `${wix}/beli-2-829654.jpg` },
        { label: "lihat-dulu.jpg", src: `${wix}/lihat-dulu-d5b770.jpg` },
        { label: "direct.jpg", src: `${wix}/direct-dadc57.jpg` },
        { label: "pakai-talangin-1.jpg", src: `${wix}/pakai-talangin-1-f8b6fe.jpg` },
        { label: "pakai-talangin-2.jpg", src: `${wix}/pakai-talangin-2-439b6f.jpg` },
        { label: "talangin.jpg", src: `${wix}/talangin-344fdc.jpg` },
        { label: "konfirmasi.jpg", src: `${wix}/konfirmasi-7682b0.jpg` },
        { label: "ambil-foto-1.jpg", src: `${wix}/ambil-foto-1-f38977.jpg` },
        { label: "verifikasi-foto.jpg", src: `${wix}/verifikasi-foto-8b8403.jpg` },
        { label: "PIN.jpg", src: `${wix}/pin-7199f9.jpg` },
        { label: "transaksi-berhasil.jpg", src: `${wix}/transaksi-berhasil-75970f.jpg` },
      ],
    },
  ],
};
