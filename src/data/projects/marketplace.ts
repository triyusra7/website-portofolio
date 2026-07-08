import type { Project } from "./types";

const wix = "/projects/marketplace/wix";

export const marketplace: Project = {
  id: "marketplace",
  title: "Marketplace",
  company: "PasarMIKRO",
  projectType: "Full-time",
  category: "Product Design · Mobile App",
  year: "2021 – 2022",
  cover: "/projects/marketplace-cover.png",
  gradient: "from-blue-100 via-background to-card",
  tags: ["B2B", "Agri-tech", "Mobile App"],
  summary:
    "This is the project that I was working on in my company PasarMIKRO. This project is for our trading platform where user can do transactions, either want to buy or sell their commodity.",
  problem:
    "Users (both buyers and sellers) needed a simple way to find each other and conduct transactions. Buyers wanted to expand their supplier network; sellers were unsure who to sell to. Trust was critical — most users discovered new traders through word of mouth, and large transactions required confidence in the other party. Users aged 40+ also struggled with complex interfaces.",
  solution:
    "Designed a consolidated marketplace with personal store pages shareable via link (no app install needed for new partners). Added a \"Sukses\" (Success) indicator showing completed transaction count as a trust signal, a silver badge system after 3 successful transactions, a banner feature for sellers to promote commodities, and moved quantity selection to the same page with a real-time price summary — eliminating frustrating page redirects.",
  outcome:
    "More flexible, secure transactions with improved trust between traders. Users could now discover and vet new partners digitally, and the streamlined checkout reduced friction for both buyers and sellers.",
  features: [
    {
      title: "Pasar Baru — Temukan Mitra Baru",
      description:
        "Halaman marketplace terpusat dengan search bar dan kategori komoditas, memudahkan pembeli menemukan penjual baru tanpa harus install aplikasi terlebih dahulu.",
      image: "/projects/marketplace/screen-pasar-baru.png",
    },
    {
      title: "Toko & Indikator \"Sukses\"",
      description:
        "Setiap penjual punya halaman toko dengan badge Sukses yang menampilkan jumlah transaksi berhasil — menggantikan sistem rating yang tidak cocok untuk pasar early-stage.",
      image: "/projects/marketplace/screen-toko.png",
    },
    {
      title: "Buat Penawaran — Quantity di Satu Halaman",
      description:
        "Proses penawaran dirancang ulang: pilih komoditas, tentukan jumlah, dan lihat total harga semuanya dalam satu halaman — tidak ada lagi redirect yang membingungkan.",
      image: "/projects/marketplace/screen-penawaran.png",
    },
    {
      title: "Atur Toko & Banner",
      description:
        "Penjual bisa mengatur tampilan toko, menambahkan komoditas, dan mengaktifkan status \"Toko Buka\" untuk menunjukkan ketersediaan kepada pembeli.",
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
      title: "Let's imagine this...",
      body:
        "You as a Buyer or trader and as a farmer or seller. Let's go with you as a buyer first. You want to buy commodities from a seller, and then you want to search for people who sell commodities that you want to buy. And then let's say you as a seller, and you have a lot of commodities that you want to sell, but you are confused about what to sell to whom?",
      images: [{ label: "mockup-utama.jpg", src: `${wix}/mockup-utama-187ec7.jpg` }],
    },
    {
      title: "First our problem backgrounds",
      body:
        "In the early stage, we discover that our customers just want to buy or sell their commodities to every person that can be potential to them. We discover they just want to do transactions and can be recorded by a system that they can see.",
    },
    {
      title: "First Goals",
      body:
        "So that's why we want to create a marketplace for them with many commodities that they can sell or buy in our platform and system.",
    },
    {
      title: "Time Duration and team",
      body:
        "The total duration for this project to be finished is one month (two sprints of development). And for the teams, two UI/UX Designers, two Front-end, two Back-end, one Lead Technology, one CPO, and one QA.",
    },
    {
      title: "Understanding our users",
      images: [
        {
          label: "Understanding our users",
          src: `${wix}/0e435c-ca78e74c928240f6b5172a0875828226-mv2-ca78e7.jpg`,
        },
      ],
    },
    {
      title: "First identification our users",
      body:
        "We don't have a persona for the beginning because we create our platform and app based on users' opinions. We gathered all the information and then we created a feature based on that. Mostly they just need to do transaction with new people or with people they already knew.",
    },
    {
      title: "First user-flow",
      body:
        "This user flow I create to map all movement and flow for our \"Pasar\" based on in our app.",
      images: [{ label: "userflow pasar.png", src: `${wix}/userflow-pasar-6b0619.png` }],
    },
    {
      title: "Doing little research",
      body:
        "Because we have few resources and don't have enough time to do research, so I doing a little research by asking people who can be potential users like those who need eggs or other commodities. I just ask where they buy the commodity, how much they buy it, and what price they buy it because it's all connected. But I also collaborated with stakeholders like my CEO to discuss about implementation in the field.",
    },
    {
      title: "Discover main pain points",
      body:
        "Based on a little research, I found a few pain points that our users (and potential users) face.\n1. They want to find a new buyer or seller to expand their network.\n2. They want to do transactions with people that they knew before and trust because they do big transactions and if they do with new people, they will need some time to trust them.\n3. They want to buy or sell variants of commodities.\n4. Sometimes they don't have enough money to buy commodities, but they need to buy to keep their business still running.",
    },
    {
      title: "Early interface",
      images: [{ label: "9.jpg", src: `${wix}/9-cbd61a.jpg` }],
    },
    {
      title: "First implemented design in app",
      body:
        "When I joined this company and team, the app has an interface for the marketplace, which is the look for the app. When users want to buy, they need to choose one Toko's for transactions. After that they can choose the commodity they want to buy or give an offer if they want to sell their commodity to this Toko's owner. Let's take a case they want to buy \"direct\" which commodity they want to buy in that Toko's. When they press the button \"Beli\" or Buy, they will directed to another page to fill in the information such as quantity and choose the payment method. And after that to finishing transaction, user have to directed into different page. And then finishing the whole transaction.",
      images: [{ label: "pasar-beli.jpg", src: `${wix}/pasar-beli-8a36ed.jpg` }],
    },
    {
      title: "Design a new concept into Figma",
      body:
        "As for the result of the design, I already make it in High-Fidelity. The difference between the old app and my design is the flow of purchasing the commodity. When users press the button \"Beli\" or buy, they will not directed to another page, but still on that page. So they can input the quantity that they want to buy, and below it will appear like a floating button for the summary of their purchase. After the user already filled in the quantity, the user can press the button on the summary and will directed to a different page. This page is the main checkout. So basically when the user wants to change anything, will be directed to this page again, and after everything is good, the user can proceed to PIN section and finish the transaction. And this is the results.",
      images: [{ label: "pasar-pembelian.jpg", src: `${wix}/pasar-pembelian-b66dff.jpg` }],
    },
    {
      title: "Unfortunate...",
      body:
        "Because this project is too big, and we have other priorities that need to be solved quickly. So we have to postpone this project, and our sprint before that is 1 week per sprint. So it's really difficult to finish this project.",
    },
    {
      title: "Start to revamp the feature",
      images: [{ label: "foto-1.jpg", src: `${wix}/foto-1-92e6bb.jpg` }],
    },
    {
      title: "Doing more research",
      body:
        "After several months and we have a bigger team of developers and products, we want to continue this project and want to do some proper research. So we start with an internal discussion about the problem in our app, and we use the method \"How Might We\" to discover the problem. And after that, we visit some of our users to do an interview session with them to know what exactly they feel and need.",
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
      title: "Result from the research",
      body:
        "When we finish doing our interviews with our users. We discover some interesting insights from the field. And this is some summary from our users. Know the seller and buyer less than 10-15 years ago, and first time know from word of mouth (from the driver, from the broker, or approach by himself). A track record is important to know whether the seller can be trusted or not. And he will ask his friend or other people who are already doing the transaction with the seller, whether he is good or not. After 2-3 transactions there is no issue with the payment and transaction, He can trust the seller, as long the seller can provide the demand. Farmers (petani) he's the \"main people\". So if he want to find new farmer, he must offer something valuable to the farmer. So they want to do transactions with him. Exp like fish seed, cultivation knowledge, etc. He can trust someone to do transactions when they pay full cash and have a commitment in the beginning. Like when they do a transaction and agree with the terms and conditions, He can pay as agreed in advance. Cash or transfers is not a problem, as long fully paid in advance. but transfers are more convenient. Some of the farmers do not have an Android phone and just use a phone for calls and send a text (SMS). For the price will be different each day. Farmers don't know the best price for sell their commodity.",
    },
    {
      title: "Our first persona!!!",
      body:
        "Because we are already doing some research and go to the field to collect and gain some more information. We decide to create our first persona. So we can know who we designing for and who our customer segment. So, for our persona will be divided by two personas. First is a persona for \"Trader\", who just buys commodities. And the other persona for \"Farmer\", who just sells their commodities through our platform. Most of our traders are middlemen or companies that need commodities to re-stock their warehouses for raw materials to produce their products. And for our farmers, most of them are farmers that they just sell their commodities to traders.",
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
        "We create journey mapping to know what exactly our users face it and how they feel. And these are the journey that we already create.",
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
      title: "Some photos about our trip",
      body:
        "These are some photos of our trip to the filed for doing research and have some little conversation with them to know them better.",
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
      title: "Set our goal for marketplace",
      body:
        "From our research and visit to the field and meeting our users, we think our goal for our new marketplace concept. We want to focus on three things: 1. DISCOVERY (Matchmaking). 2. TRUST. 3. VALUE/STICKINESS (There's always a reason to come back).",
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
      title: "Some ideas for our new marketplace",
      body:
        "Because we knew what we wanted to focus on, my leader allowed me to find solutions for the best way and best ideas to implement in our marketplace. And I already prepared some ideas for this and already discussed with my leader too. And I already have many ideas and already approved them, but because our team does not many and we need to focus on some aspects too, so just few ideas that good to go to be develop. And these are for ideas: 1. Revamp our marketplace. Interface and adjust the flow for transactions, because we notice there is an unhappy path that our users face it like our checkout process. 2. Allow users to take just only commodities they want. To avoid spamming when other users want to give offer to the other user. Because our users have specific commodities they want to buy and they always buy the same commodity. 3. Allow users to have a \"badge\" to identify them as a new users or existing user. This badge to build trust between our users to doing transaction. 4. Allow user to set quantity that they want to buy without being directed to other page. In our previous flow, when user want to buy something from other user \"toko\", they will directed to another page to set quantity, and this is to overwhelming for our users. So we give them new experience that they can set quantity in that same page. 5. Put features \"Search\" and \"commodity category\", so users can find specific commodities or toko they want to searching. In our previous marketplace, our users must searching one by one toko or commodity that they want to buy or sell (give offer) to a specific user. This is really a bad experience for our user, and considering they have aged between 40 can impact their experience and happiness to use our platform. So we put search field and commodity category to let them find specific commodity they want to find. 6. Put feature \"Sukses\" page in toko. Like other platform marketplaces, to trust find trusted toko usually user can search by badge or rating. But because we don't have much user active, we need to find alternative idea. So I come up with an idea that we can put how many transactions they already did. The purpose of this feature is to provide users with a sense of comfort and security when visiting other users' \"stores\" to engage in transactions with the users of those \"stores\". Additionally, users can see for how long they have been transacting within a certain timeframe. If they have recently completed a transaction, the time of the transaction will be displayed, but even if they haven't transacted recently, it will still be visible. Not all information is displayed, as only the quantity of purchases/sales and the quantity sold are shown. 7. Put feature \"banner\" in toko. This feature to let user when they want to show their commodity into their toko like social media but agricultural version. 8. Merge \"Pasar permintaan\" and \"Pasar baru\" into one Pasar. This feature we already have, but merging these two features can simplify our pasar and to avoid misunderstanding. But right now \"pasar permintaan\" already we hide first.",
    },
    {
      title: "Think about the flow",
      body:
        "These are some flows that I make about our new process marketplace, but just for buy or sell flows. I also provide the redesign flow to make more clear about the flow.",
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
      title: "Let's take a close look",
      body:
        "I will show for each feature that functions and what the purpose behind it. Because we already have the design systems, so I started to design the features.",
    },
    {
      title: "Priority commodity",
      body:
        "This feature is called \"Priority commodity\". This means users can set what commodity they want to take when someone give the offer to them through toko. They can set up to 10 commodities that they want to take, but if they want to take all commodities they can too.",
      images: [
        { label: "Section-1.jpg", src: `${wix}/section-1-26495d.jpg` },
        { label: "Section-2.jpg", src: `${wix}/section-2-805111.jpg` },
      ],
    },
    {
      title: "Commodity category",
      body:
        "This feature is called \"commodity category\". But there is a search bar and favorite feature if users have specific toko they want to doing transactions with. For commodity category, will allow users to find specific commodities they want to find. For search bar can allow users to find specific toko they want find and specific commodity too. the different between search bar and commodity category is commodity category to tell user what commodity they can find in our platform if they still confused what they want to buy just search if there is a commodity they want to buy or not, for search bar usually user already know what they want to find before.",
      images: [
        { label: "Section-6.jpg", src: `${wix}/section-6-da23d6.jpg` },
        { label: "Section-5.jpg", src: `${wix}/section-5-7b21f6.jpg` },
      ],
    },
    {
      title: "Sukses, badge, and banner",
      body:
        "This feature is called \"Sukses\". And for other feature will be a \"badge\" and \"Banner\". For \"sukses\" feature the function to gain more trust. Usually user want to see ratings, but in our platform to implement ratings is not valid yet, so I come up with this idea to replacement for ratings. this allow user to see if this toko can be trust or not, the indicator for this is how many they doing transactions and what time they already doing it. For badge, right now we just have a silver badge, which means if user get that badge, they are already in our platform and already doing transaction at least three times. And for banner feature, user can change it in their \"atur toko\", that's the page to setting their toko.",
      images: [
        { label: "Section-7.jpg", src: `${wix}/section-7-f01261.jpg` },
        { label: "Section-8.jpg", src: `${wix}/section-8-db2c1a.jpg` },
        { label: "Section-9.jpg", src: `${wix}/section-9-6df325.jpg` },
      ],
    },
    {
      title: "Pick quantity revamp",
      body:
        "This feature is revamp for user to pick quantity. If previous app when they want to buy a commodity, they will directed to another page to they can choose quantity they want to. But right now they can pick quantity in the same page when they want to choose and buy commodities in other user toko. And there is a summary below it that will tell users how much they need to pay when they choose commodities from that toko to buy.",
      images: [
        { label: "Section-3.jpg", src: `${wix}/section-3-6e9649.jpg` },
        { label: "Section-4.jpg", src: `${wix}/section-4-3f529c.jpg` },
      ],
    },
    {
      title: "Finally the result for all features",
      body:
        "These are the whole results for features that I already designed and already developed it by our great developers. Even it took a long time to revamp and there is still ideas for me to implement in our platform. But I really enjoy to working on these features. Please enjoy the whole results.",
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
