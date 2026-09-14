// Demo data seeder for company 2 (PT. Tangkian Samudera Logistik) and
// company 3 (Arobi). Runs inside the page, mirroring the exact object shapes
// the app's own save functions produce. Screenshot use only.
window.__seedC2 = function () {
  const J = [];
  let jid = 9000;
  const jn = (no, tgl, ket, rows, auto) => J.push({
    id: ++jid, no, tgl, ket, status: 'Posted',
    source: auto ? 'system' : 'manual',
    auditTrail: auto ? [{ waktu: '01/04/2026 08.00.00', oleh: 'admin', aksi: 'Auto-jurnal' }] : [],
    rows
  });

  customers = [
    { id: 1, kode: 'CUST-001', nama: 'PT. Mitra Bahari Nusantara', telp: '0461-31220', npwp: '02.441.882.1-701.000', alamat: 'Jl. Pelabuhan Raya No. 7, Toli-Toli', limitKredit: 800000000, top: 30 },
    { id: 2, kode: 'CUST-002', nama: 'PT. Samudra Jaya Line', telp: '0461-31455', npwp: '02.552.771.9-701.000', alamat: 'Jl. Dermaga Timur No. 3', limitKredit: 1200000000, top: 45 },
    { id: 3, kode: 'CUST-003', nama: 'CV. Karya Pelabuhan', telp: '0812-4455-9911', npwp: '', alamat: 'Jl. Yos Sudarso No. 18', limitKredit: 400000000, top: 30 },
    { id: 4, kode: 'CUST-004', nama: 'PT. Anugerah Niaga Sulawesi', telp: '0451-482233', npwp: '02.663.114.5-702.000', alamat: 'Jl. Trans Sulawesi KM 8, Palu', limitKredit: 600000000, top: 30 }
  ];

  c2Vendors = [
    { id: 501, kode: 'VND-001', nama: 'CV. Buruh Mandiri Pelabuhan', jenis: 'Subkon Buruh', kontak: 'Hamzah', telepon: '0813-5566-2210', alamat: 'Jl. Dermaga Barat No. 5', termin: 30, status: 'Aktif' },
    { id: 502, kode: 'VND-002', nama: 'PT. Trans Trucking Nusantara', jenis: 'Subkon Trucking', kontak: 'Rudi Hartono', telepon: '0852-4411-0098', alamat: 'Jl. Trans Sulawesi KM 4', termin: 30, status: 'Aktif' },
    { id: 503, kode: 'VND-003', nama: 'UD. Alat Berat Jaya', jenis: 'Sewa Alat', kontak: 'Surya', telepon: '0821-9922-1100', alamat: 'Jl. Industri Pelabuhan No. 2', termin: 14, status: 'Aktif' }
  ];

  pbmJobs = [
    { id: 601, no: 'JOB-2026-001', tgl: '2026-04-03', custId: 1, jenis: 'Dooring', bl: 'MBN-4471', kapal: 'MV Tangkian Express', voyage: 'V.12/E', container: 'TGHU 4471280 (12 x 20ft)', ket: 'Dooring semen ke gudang Toli-Toli', status: 'Invoiced', createdAt: '2026-04-03T02:00:00.000Z', updatedAt: '2026-04-05T02:00:00.000Z' },
    { id: 602, no: 'JOB-2026-002', tgl: '2026-04-07', custId: 2, jenis: 'PBM', bl: 'SJL-8820', kapal: 'MV Samudra Jaya 5', voyage: 'V.33/W', container: 'Curah 3.500 ton', ket: 'Bongkar muat pupuk curah', status: 'Invoiced', createdAt: '2026-04-07T02:00:00.000Z', updatedAt: '2026-04-09T02:00:00.000Z' },
    { id: 603, no: 'JOB-2026-003', tgl: '2026-04-12', custId: 3, jenis: 'Dooring', bl: 'KPL-1190', kapal: 'MV Tangkian Express', voyage: 'V.13/E', container: 'TGHU 5512094 (9 x 20ft)', ket: 'Dooring material konstruksi', status: 'Invoiced', createdAt: '2026-04-12T02:00:00.000Z', updatedAt: '2026-04-14T02:00:00.000Z' },
    { id: 604, no: 'JOB-2026-004', tgl: '2026-04-18', custId: 2, jenis: 'PBM', bl: 'SJL-8877', kapal: 'MV Samudra Jaya 7', voyage: 'V.34/W', container: 'Curah 4.200 ton', ket: 'Muat kopra ke kapal', status: 'Invoiced', createdAt: '2026-04-18T02:00:00.000Z', updatedAt: '2026-04-20T02:00:00.000Z' },
    { id: 605, no: 'JOB-2026-005', tgl: '2026-04-24', custId: 4, jenis: 'Dooring', bl: 'ANS-2204', kapal: 'MV Tangkian Express', voyage: 'V.14/E', container: 'TGHU 6620117 (10 x 20ft)', ket: 'Dooring + sewa alat berat', status: 'Invoiced', createdAt: '2026-04-24T02:00:00.000Z', updatedAt: '2026-04-26T02:00:00.000Z' },
    { id: 606, no: 'JOB-2026-006', tgl: '2026-04-29', custId: 1, jenis: 'Dooring', bl: 'MBN-4510', kapal: 'MV Tangkian Express', voyage: 'V.15/E', container: 'TGHU 7710455 (8 x 20ft)', ket: 'Menunggu dokumen BL', status: 'Open', createdAt: '2026-04-29T02:00:00.000Z', updatedAt: '2026-04-29T02:00:00.000Z' }
  ];

  const mkInv = (id, no, tgl, jt, custId, jobId, j, items, payments) => ({
    id, no, tgl, jt, custId, termin: 30, jobId, tglJob: j.tgl,
    kapal: j.kapal, voyage: j.voyage, bl: j.bl, container: j.container,
    ket: j.ket, ppnEnabled: true, ppnRate: 11, items, payments: payments || [],
    status: 'Open', createdAt: tgl + 'T03:00:00.000Z', updatedAt: tgl + 'T03:00:00.000Z'
  });

  pbmInvoices = [
    mkInv(701, 'INV-PBM-2026-001', '2026-04-05', '2026-05-05', 1, 601, pbmJobs[0],
      [{ deskripsi: 'Jasa dooring container 20ft — Toli-Toli', containerNo: 'TGHU 4471280', colType: 'container', qty: 12, harga: 8500000, jenis: 'Dooring' }],
      [{ id: 1, tgl: '2026-04-20', nominal: 113220000, akun: '01-002', ket: 'Transfer BNI' }]),
    mkInv(702, 'INV-PBM-2026-002', '2026-04-09', '2026-05-24', 2, 602, pbmJobs[1],
      [{ deskripsi: 'Jasa PBM bongkar pupuk curah', containerNo: 'SJL-8820', colType: 'document', qty: 3500, harga: 27500, jenis: 'PBM' }],
      [{ id: 2, tgl: '2026-04-27', nominal: 106837500, akun: '01-002', ket: 'Transfer BNI' }]),
    mkInv(703, 'INV-PBM-2026-003', '2026-04-14', '2026-05-14', 3, 603, pbmJobs[2],
      [{ deskripsi: 'Jasa dooring material konstruksi', containerNo: 'TGHU 5512094', colType: 'container', qty: 9, harga: 8750000, jenis: 'Dooring' }],
      [{ id: 3, tgl: '2026-04-30', nominal: 50000000, akun: '01-001', ket: 'Pembayaran sebagian' }]),
    mkInv(704, 'INV-PBM-2026-004', '2026-04-20', '2026-06-04', 2, 604, pbmJobs[3],
      [{ deskripsi: 'Jasa PBM muat kopra', containerNo: 'SJL-8877', colType: 'document', qty: 4200, harga: 26000, jenis: 'PBM' }], []),
    mkInv(705, 'INV-PBM-2026-005', '2026-04-26', '2026-05-26', 4, 605, pbmJobs[4],
      [{ deskripsi: 'Jasa dooring container 20ft — Palu', containerNo: 'TGHU 6620117', colType: 'container', qty: 10, harga: 8900000, jenis: 'Dooring' },
       { deskripsi: 'Sewa alat berat (excavator) 3 hari', containerNo: '-', colType: 'container', qty: 1, harga: 15000000, jenis: 'Lainnya' }], [])
  ];
  pbmInvoices.forEach(inv => {
    const paid = (inv.payments || []).reduce((s, p) => s + p.nominal, 0);
    const total = inv.items.reduce((s, i) => s + i.qty * i.harga, 0) * 1.11;
    inv.status = paid <= 0 ? 'Open' : (paid >= Math.round(total) ? 'Lunas' : 'Partial');
  });

  // Opening equity
  jn('JRN-SA-2026-04', '2026-04-01', 'Saldo awal kas & bank per 1 April 2026', [
    { akun: '01-002', nama: 'Bank', debit: 400000000, kredit: 0 },
    { akun: '03-005', nama: 'Laba Berjalan', debit: 0, kredit: 400000000 }
  ]);

  // Automatic invoice journals
  const invJ = [
    ['INV-PBM-2026-001', '2026-04-05', 113220000, [['04-010', 'Pendapatan Dooring', 102000000]], 11220000],
    ['INV-PBM-2026-002', '2026-04-09', 106837500, [['04-011', 'Pendapatan PBM', 96250000]], 10587500],
    ['INV-PBM-2026-003', '2026-04-14', 87412500, [['04-010', 'Pendapatan Dooring', 78750000]], 8662500],
    ['INV-PBM-2026-004', '2026-04-20', 121212000, [['04-011', 'Pendapatan PBM', 109200000]], 12012000],
    ['INV-PBM-2026-005', '2026-04-26', 115440000, [['04-010', 'Pendapatan Dooring', 89000000], ['04-012', 'Pendapatan Lainnya', 15000000]], 11440000]
  ];
  invJ.forEach(([no, tgl, total, revs, ppn]) => {
    const rows = [{ akun: '01-007', nama: 'Piutang Usaha', debit: total, kredit: 0 }];
    revs.forEach(([k, n, v]) => rows.push({ akun: k, nama: n, debit: 0, kredit: v }));
    rows.push({ akun: '02-003', nama: 'PPN Keluaran', debit: 0, kredit: ppn });
    jn('JRN-' + no, tgl, 'Invoice PBM & Ekspedisi ' + no, rows, true);
  });

  // Collections
  [['2026-04-20', 113220000, '01-002', 'Bank', 'INV-PBM-2026-001'],
   ['2026-04-27', 106837500, '01-002', 'Bank', 'INV-PBM-2026-002'],
   ['2026-04-30', 50000000, '01-001', 'Kas', 'INV-PBM-2026-003']].forEach(([tgl, v, ak, nm, ref], i) => {
    jn('JRN-BYR-00' + (i + 1), tgl, 'Penerimaan pembayaran ' + ref, [
      { akun: ak, nama: nm, debit: v, kredit: 0 },
      { akun: '01-007', nama: 'Piutang Usaha', debit: 0, kredit: v }
    ], true);
  });

  // Operating costs paid in cash / bank
  [['JRN-BY-001', '2026-04-11', 'Biaya buruh dooring April (CV. Buruh Mandiri Pelabuhan)', '05-010', 'Biaya Buruh Dooring', 92000000, '01-002', 'Bank'],
   ['JRN-BY-002', '2026-04-15', 'Biaya sewa lapangan penumpukan', '05-014', 'Biaya Sewa', 18000000, '01-002', 'Bank'],
   ['JRN-BY-003', '2026-04-18', 'Biaya operasional dooring (BBM, retribusi)', '05-020', 'Biaya Operasional Dooring', 14750000, '01-001', 'Kas'],
   ['JRN-BY-004', '2026-04-22', 'Biaya operasional PBM (konsumsi, alat bantu)', '05-021', 'Biaya Operasional PBM', 11300000, '01-001', 'Kas'],
   ['JRN-BY-005', '2026-04-28', 'Insentif kru lapangan April', '05-023', 'Biaya Insentif', 8500000, '01-001', 'Kas'],
   ['JRN-BY-006', '2026-04-30', 'Biaya administrasi bank April', '05-040', 'Biaya Administrasi Bank', 1250000, '01-002', 'Bank']
  ].forEach(([no, tgl, ket, ak, nm, v, kas, kasNm]) => {
    jn(no, tgl, ket, [
      { akun: ak, nama: nm, debit: v, kredit: 0 },
      { akun: kas, nama: kasNm, debit: 0, kredit: v }
    ]);
  });

  // Subcontractor costs accrued to accounts payable
  [['JRN-SUB-001', '2026-04-10', 'Tagihan subkon buruh PBM — CV. Buruh Mandiri Pelabuhan', '05-011', 'Biaya Buruh PBM', 78500000],
   ['JRN-SUB-002', '2026-04-16', 'Tagihan trucking dooring — PT. Trans Trucking Nusantara', '05-012', 'Biaya Trucking Dooring', 118000000],
   ['JRN-SUB-003', '2026-04-23', 'Tagihan trucking PBM — PT. Trans Trucking Nusantara', '05-013', 'Biaya Trucking PBM', 52400000],
   ['JRN-SUB-004', '2026-04-30', 'PPh 23 atas jasa subkon April', '05-030', 'Biaya PPh 23', 7350000]
  ].forEach(([no, tgl, ket, ak, nm, v]) => {
    jn(no, tgl, ket, [
      { akun: ak, nama: nm, debit: v, kredit: 0 },
      { akun: '02-001', nama: 'Hutang Usaha', debit: 0, kredit: v }
    ], true);
  });

  jn('JRN-BYH-001', '2026-04-29', 'Pembayaran sebagian hutang subkon', [
    { akun: '02-001', nama: 'Hutang Usaha', debit: 130000000, kredit: 0 },
    { akun: '01-002', nama: 'Bank', debit: 0, kredit: 130000000 }
  ], true);

  jurnalEntries = J;
  asetTetap = [];
  suppliers = []; gudangs = []; stokBarang = []; invoices = []; suratJalans = [];
  purchaseOrders = []; kartuStok = []; stockAdjustments = []; penerimaanBarangList = [];
  kasBankTx = [];
  bankAccounts = [
    { id: 1, kode: 'KB-001', nama: 'Kas Operasional', jenis: 'Kas', coa: '01-001', status: 'Aktif' },
    { id: 2, kode: 'KB-002', nama: 'Bank BNI 0847-2210', jenis: 'Bank', coa: '01-002', status: 'Aktif' }
  ];
};

window.__seedC3 = function () {
  const J = [];
  let jid = 9500;
  const jn = (no, tgl, ket, rows, auto) => J.push({
    id: ++jid, no, tgl, ket, status: 'Posted',
    source: auto ? 'system' : 'manual',
    auditTrail: auto ? [{ waktu: '01/04/2026 08.00.00', oleh: 'admin', aksi: 'Auto-jurnal' }] : [],
    rows
  });

  c3Produk = [
    { id: 801, kode: 'PRD-001', nama: 'Espresso', kategori: 'Kopi', aktif: true },
    { id: 802, kode: 'PRD-002', nama: 'Americano', kategori: 'Kopi', aktif: true },
    { id: 803, kode: 'PRD-003', nama: 'Cappuccino', kategori: 'Kopi Susu', aktif: true },
    { id: 804, kode: 'PRD-004', nama: 'Caffe Latte', kategori: 'Kopi Susu', aktif: true },
    { id: 805, kode: 'PRD-005', nama: 'Kopi Susu Arobi', kategori: 'Signature', aktif: true },
    { id: 806, kode: 'PRD-006', nama: 'Matcha Latte', kategori: 'Non-Kopi', aktif: true },
    { id: 807, kode: 'PRD-007', nama: 'Butter Croissant', kategori: 'Pastry', aktif: true },
    { id: 808, kode: 'PRD-008', nama: 'Roti Bakar Cokelat', kategori: 'Pastry', aktif: true }
  ];

  suppliers = [
    { id: 901, kode: 'SUPP-001', nama: 'CV. Biji Nusantara', telp: '0812-3344-7788', alamat: 'Jl. Kopi Raya No. 12, Toraja', npwp: '03.221.554.7-801.000', top: 14 },
    { id: 902, kode: 'SUPP-002', nama: 'UD. Susu Segar Malang', telp: '0341-556677', alamat: 'Jl. Peternakan No. 8, Malang', npwp: '', top: 7 },
    { id: 903, kode: 'SUPP-003', nama: 'PT. Kemasan Prima', telp: '021-8899-2211', alamat: 'Kawasan Industri Pulogadung Blok C', npwp: '03.771.220.9-093.000', top: 30 }
  ];

  c3PO = [
    { id: 921, no: 'PO-ARB-2026-001', tgl: '2026-04-02', suppId: 901, items: [{ namaBahan: 'Green bean Arabika Toraja', qty: 60, harga: 145000 }], caraBayar: 'Tunai', akunBayar: '01-001', bayar: 8700000, status: 'Diterima' },
    { id: 922, no: 'PO-ARB-2026-002', tgl: '2026-04-08', suppId: 902, items: [{ namaBahan: 'Susu UHT full cream 1L', qty: 240, harga: 21000 }], caraBayar: 'Tunai', akunBayar: '01-001', bayar: 5040000, status: 'Diterima' },
    { id: 923, no: 'PO-ARB-2026-003', tgl: '2026-04-15', suppId: 903, items: [{ namaBahan: 'Paper cup 16oz + lid + paper bag', qty: 5000, harga: 1450 }], caraBayar: 'Kredit', akunBayar: '01-001', bayar: 0, status: 'Diterima' },
    { id: 924, no: 'PO-ARB-2026-004', tgl: '2026-04-22', suppId: 901, items: [{ namaBahan: 'Green bean Robusta Lampung', qty: 50, harga: 148000 }], caraBayar: 'Tunai', akunBayar: '01-001', bayar: 7400000, status: 'Diterima' }
  ];

  const sales = [
    ['INV-ARB-2026-001', '2026-04-05', 11250000], ['INV-ARB-2026-002', '2026-04-08', 12400000],
    ['INV-ARB-2026-003', '2026-04-12', 13100000], ['INV-ARB-2026-004', '2026-04-15', 11800000],
    ['INV-ARB-2026-005', '2026-04-19', 12950000], ['INV-ARB-2026-006', '2026-04-22', 13400000],
    ['INV-ARB-2026-007', '2026-04-26', 10900000], ['INV-ARB-2026-008', '2026-04-29', 10650000]
  ];
  c3Invoices = sales.map(([no, tgl, v], i) => ({
    id: 940 + i, no, tgl, custName: null, caraBayar: 'Tunai',
    items: [{ produkId: String(805), qty: Math.round(v / 25000), hargaJual: 25000 }],
    payments: [], status: 'Lunas', total: v
  }));
  c3Invoices.push({
    id: 960, no: 'INV-ARB-2026-009', tgl: '2026-04-24', custName: 'PT. Bangun Persada (catering rapat)',
    caraBayar: 'Kredit', items: [{ produkId: String(805), qty: 300, hargaJual: 25000 }],
    payments: [], status: 'Open', total: 7500000
  });

  jn('JRN-SA-ARB', '2026-04-01', 'Saldo awal modal pemilik & peralatan kedai', [
    { akun: '01-001', nama: 'Kas', debit: 15000000, kredit: 0 },
    { akun: '01-002', nama: 'Bank', debit: 60000000, kredit: 0 },
    { akun: '01-009', nama: 'Peralatan Kedai', debit: 96000000, kredit: 0 },
    { akun: '03-001', nama: 'Modal Pemilik', debit: 0, kredit: 171000000 }
  ]);

  c3PO.forEach(po => {
    const total = po.items.reduce((s, it) => s + it.qty * it.harga, 0);
    const rows = [{ akun: '01-006', nama: 'Pembelian Dalam Perjalanan', debit: total, kredit: 0 }];
    if (po.caraBayar === 'Tunai') rows.push({ akun: '01-001', nama: 'Kas', debit: 0, kredit: total });
    else rows.push({ akun: '02-001', nama: 'Hutang Usaha', debit: 0, kredit: total });
    jn('JRN-' + po.no, po.tgl, 'Purchase Order ' + po.no + ' - ' + (suppliers.find(s => s.id === po.suppId) || {}).nama, rows, true);
    jn('JRN-TRM-' + po.no.slice(-3), po.tgl, 'Penerimaan bahan baku ' + po.no, [
      { akun: '01-005', nama: 'Persediaan Bahan Baku', debit: total, kredit: 0 },
      { akun: '01-006', nama: 'Pembelian Dalam Perjalanan', debit: 0, kredit: total }
    ], true);
  });

  sales.forEach(([no, tgl, v]) => {
    jn('JRN-' + no, tgl, 'Invoice Penjualan ' + no, [
      { akun: '01-001', nama: 'Kas', debit: v, kredit: 0 },
      { akun: '04-001', nama: 'Pendapatan Penjualan', debit: 0, kredit: v }
    ], true);
  });
  jn('JRN-INV-ARB-2026-009', '2026-04-24', 'Invoice Penjualan INV-ARB-2026-009', [
    { akun: '01-007', nama: 'Piutang Usaha', debit: 7500000, kredit: 0 },
    { akun: '04-001', nama: 'Pendapatan Penjualan', debit: 0, kredit: 7500000 }
  ], true);

  jn('JRN-HPP-ARB-04', '2026-04-30', 'HPP bahan baku terpakai April 2026', [
    { akun: '05-001', nama: 'Harga Pokok Penjualan', debit: 24850000, kredit: 0 },
    { akun: '01-005', nama: 'Persediaan Bahan Baku', debit: 0, kredit: 24850000 }
  ], true);

  [['JRN-BY-ARB-001', '2026-04-28', 'Gaji barista & helper April', '05-003', 'Beban Gaji Karyawan', 28000000],
   ['JRN-BY-ARB-002', '2026-04-03', 'Sewa tempat April', '05-004', 'Beban Sewa Tempat', 15000000],
   ['JRN-BY-ARB-003', '2026-04-25', 'Listrik & air April', '05-005', 'Beban Listrik & Air', 4850000],
   ['JRN-BY-ARB-004', '2026-04-20', 'Perlengkapan packaging tambahan', '05-006', 'Beban Perlengkapan (Packaging)', 3200000],
   ['JRN-BY-ARB-005', '2026-04-30', 'Operasional lainnya (maintenance, internet)', '05-007', 'Beban Operasional Lainnya', 3650000]
  ].forEach(([no, tgl, ket, ak, nm, v]) => {
    jn(no, tgl, ket, [
      { akun: ak, nama: nm, debit: v, kredit: 0 },
      { akun: '01-002', nama: 'Bank', debit: 0, kredit: v }
    ]);
  });

  jn('JRN-SUS-ARB', '2026-04-30', 'Susut & kerusakan bahan baku April', [
    { akun: '05-008', nama: 'Beban Penyusutan/Kerusakan Bahan Baku', debit: 980000, kredit: 0 },
    { akun: '01-005', nama: 'Persediaan Bahan Baku', debit: 0, kredit: 980000 }
  ]);
  jn('JRN-PNY-ARB', '2026-04-30', 'Penyusutan peralatan kedai April', [
    { akun: '05-007', nama: 'Beban Operasional Lainnya', debit: 2850000, kredit: 0 },
    { akun: '01-010', nama: 'Akumulasi Penyusutan Peralatan', debit: 0, kredit: 2850000 }
  ]);

  jurnalEntries = J;
  asetTetap = [
    { id: 1, kode: 'AT-001', nama: 'Mesin Espresso 2 Group', tglPerolehan: '2025-11-01', nilaiPerolehan: 68000000, nilaiSisa: 0, akumPenyusutan: 2266667, metode: 'Garis Lurus', masaManfaat: 5, penyusutanPerThn: 13600000, penyusutanPeriods: ['2026-04'] },
    { id: 2, kode: 'AT-002', nama: 'Coffee Grinder & Perlengkapan Bar', tglPerolehan: '2025-11-01', nilaiPerolehan: 28000000, nilaiSisa: 0, akumPenyusutan: 583333, metode: 'Garis Lurus', masaManfaat: 5, penyusutanPerThn: 5600000, penyusutanPeriods: ['2026-04'] }
  ];
  customers = []; invoices = []; suratJalans = []; purchaseOrders = []; kartuStok = [];
  stockAdjustments = []; penerimaanBarangList = []; gudangs = []; stokBarang = [];
  pbmInvoices = []; pbmJobs = []; c2Vendors = []; c3PenerimaanBarang = [];
  kasBankTx = [];
  bankAccounts = [
    { id: 1, kode: 'KB-001', nama: 'Kas Kedai', jenis: 'Kas', coa: '01-001', status: 'Aktif' },
    { id: 2, kode: 'KB-002', nama: 'Bank BCA 8820-1177', jenis: 'Bank', coa: '01-002', status: 'Aktif' }
  ];
};
