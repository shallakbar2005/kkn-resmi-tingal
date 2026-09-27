import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  Home,
  Users,
  ClipboardList,
  Images,
  QrCode,
  X,
  Copy,
  Check,
  MapPin,
  Instagram,
  Sprout,
} from "lucide-react";
import {
  villageProfile as V,
  members,
  prokers,
  dokumentasi,
  kelompokLogos,
  footer,
  potensiDesa,
  SITE_URL,
  type KelompokId,
} from "@/lib/kkn-data";

const TITLE = "KKN Desa Resmi Tingal — Kelompok 1-3 | Expo 2026";
const DESC =
  "Kenali Desa Resmi Tingal, 18 mahasiswa KKN, 9 program kerja, dan dokumentasi kegiatan dalam 60 detik.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: V.heroImage },
      { name: "twitter:image", content: V.heroImage },
    ],
  }),
  component: Page,
});

const NAV = [
  { id: "desa", label: "Desa", icon: Home },
  { id: "potensi", label: "Potensi", icon: Sprout },
  { id: "kelompok", label: "Kelompok", icon: Users },
  { id: "proker", label: "Proker", icon: ClipboardList },
  { id: "dokumentasi", label: "Dokum", icon: Images },
];

const pill = (active: boolean) =>
  `min-h-11 rounded-full px-4 text-sm font-bold transition-colors ${active ? "bg-primary text-primary-foreground" : "border border-primary/30 text-primary hover:bg-surface"}`;

function useActiveSection() {
  const [active, setActive] = useState("desa");
  useEffect(() => {
    const obs = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-40% 0px -55% 0px" },
    );
    NAV.forEach((n) => {
      const el = document.getElementById(n.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);
  return active;
}

function Page() {
  const [qr, setQr] = useState(false);
  const active = useActiveSection();
  return (
    <div className="min-h-screen pb-20 md:pb-0">
      <header className="sticky top-0 z-30 border-b bg-background/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
          <a href="#top" className="flex items-center gap-2">
            <span className="font-display text-lg font-bold text-foreground">Resmi Tingal</span>
          </a>
          <nav className="hidden items-center gap-6 md:flex" aria-label="Utama">
            {NAV.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                className={`text-sm font-medium ${active === n.id ? "text-foreground underline underline-offset-8 decoration-2" : "text-muted-foreground hover:text-foreground"}`}
              >
                {n.id === "dokumentasi" ? "Dokumentasi" : n.label}
              </a>
            ))}
            <button
              onClick={() => setQr(true)}
              className="inline-flex h-10 items-center gap-2 rounded-md bg-secondary px-4 text-sm font-bold text-primary-foreground"
            >
              <QrCode className="size-4" /> QR
            </button>
          </nav>
        </div>
      </header>

      <main id="top">
        <Hero />
        <Desa />
        <PotensiDesa />
        <Kelompok />
        <ProkerSection />
        <Dokumentasi />
        <LogoKelompok />
      </main>
      <Footer onQr={() => setQr(true)} />

      <nav
        aria-label="Navigasi bawah"
        className="fixed inset-x-0 bottom-0 z-30 grid h-16 grid-cols-4 border-t bg-background md:hidden"
      >
        {NAV.map((n) => (
          <a
            key={n.id}
            href={`#${n.id}`}
            aria-current={active === n.id ? "true" : undefined}
            className={`flex flex-col items-center justify-center gap-0.5 text-xs font-medium ${active === n.id ? "text-secondary" : "text-muted-foreground"}`}
          >
            <n.icon className="size-5" /> {n.label}
          </a>
        ))}
      </nav>

      {qr && <QrModal onClose={() => setQr(false)} />}
    </div>
  );
}

function Section({
  id,
  title,
  sub,
  children,
}: {
  id: string;
  title: string;
  sub?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-4 py-12 md:py-20">
      <h2>{title}</h2>
      {sub && <p className="mt-2 max-w-2xl text-muted-foreground">{sub}</p>}
      <div className="mt-8">{children}</div>
    </section>
  );
}

function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl gap-8 px-4 pt-6 pb-8 md:grid-cols-5 md:items-center md:pt-16">
      <div className="md:order-2 md:col-span-2">
        <img
          src={V.heroImage}
          alt="Pemandangan sawah di Desa Resmi Tingal"
          className="aspect-[4/3] w-full rounded-xl object-cover shadow-medium"
        />
      </div>
      <div className="md:order-1 md:col-span-3">
        <p className="text-xs font-medium uppercase tracking-[0.1em] text-muted-foreground">
          KKN Kelompok 1-3 | Expo 2026
        </p>
        <h1 className="mt-3">Mengabdi di Desa Resmi Tingal.</h1>
        <p className="mt-4 max-w-xl text-muted-foreground">
          33 mahasiswa, 3 kelompok, 9 program kerja nyata bersama warga. Scroll untuk kenalan dengan
          desa dan cerita kami.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a
            href="#proker"
            className="inline-flex h-11 items-center justify-center rounded-md bg-secondary px-5 font-bold text-primary-foreground"
          >
            Lihat {prokers.length} Program Kerja
          </a>
          <a
            href="#dokumentasi"
            className="inline-flex h-11 items-center justify-center rounded-md bg-surface px-5 font-bold text-foreground"
          >
            Lihat Dokumentasi
          </a>
        </div>
      </div>
    </section>
  );
}

function Desa() {
  const stats = [
    ["Penduduk", V.jumlahPenduduk.toLocaleString("id-ID")],
    ["Dusun", String(V.jumlahDusun)],
    ["Luas", V.luasWilayah],
    ["Potensi", String(V.potensi.length)],
  ];
  return (
    <Section id="desa" title={V.namaDesa} sub={`${V.kecamatan}, ${V.kabupaten}`}>
      <div className="grid gap-8 md:grid-cols-2">
        <img
          src={V.fotoDesa}
          alt={`Foto ${V.namaDesa}`}
          loading="lazy"
          className="aspect-[4/3] w-full rounded-lg object-cover"
        />
        <div>
          <div className="grid grid-cols-2 gap-3">
            {stats.map(([l, v]) => (
              <div key={l} className="rounded-lg bg-surface p-4">
                <div className="font-display text-2xl font-bold text-foreground">{v}</div>
                <div className="text-sm text-muted-foreground">{l}</div>
              </div>
            ))}
          </div>
          <p className="mt-6">{V.deskripsi}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {V.potensi.map((p) => (
              <span
                key={p}
                className="rounded-sm bg-surface px-3 py-1 text-sm font-medium text-foreground"
              >
                {p}
              </span>
            ))}
          </div>
          <a
            href={V.googleMapsUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex h-11 items-center gap-2 rounded-md border border-primary px-5 font-bold text-foreground"
          >
            <MapPin className="size-4" /> Buka di Google Maps
          </a>
        </div>
      </div>
    </Section>
  );
}

function PotensiDesa() {
  return (
    <Section
      id="potensi"
      title="Potensi Desa"
      sub="Desa Resmi Tingal dikenal lewat kebun sayurnya. Bawang daun, kol, wortel, dan kentang adalah empat yang paling dicari."
    >
      <div className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
        {potensiDesa.map((p, i) => (
          <article
            key={p.id}
            className="flex overflow-hidden rounded-lg bg-surface shadow-soft sm:block"
          >
            <div className="relative w-[38%] shrink-0 sm:aspect-[4/3] sm:w-full">
              <img
                src={p.gambar}
                alt={`Kebun ${p.nama} di ${V.namaDesa}`}
                loading="lazy"
                width={944}
                height={704}
                className="absolute inset-0 size-full object-cover"
              />
              <span className="absolute left-2 top-2 rounded-sm bg-background/90 px-1.5 py-0.5 font-display text-[11px] font-bold text-foreground sm:left-3 sm:top-3 sm:px-2 sm:py-0.5 sm:text-xs">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <div className="min-w-0 flex-1 p-3 sm:p-4">
              <h3 className="text-foreground">{p.nama}</h3>
              <p className="mt-1 text-sm text-muted-foreground sm:mt-2">{p.deskripsi}</p>
              <p className="mt-2 inline-flex items-center gap-1.5 rounded-full border border-secondary/30 px-2.5 py-1 text-xs font-semibold text-secondary sm:mt-3">
                <Sprout className="size-3" /> {p.musim}
              </p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

function Kelompok() {
  const [k, setK] = useState<KelompokId>(1);
  useEffect(() => {
    const m = window.location.hash.match(/^#kelompok-([123])$/);
    if (m) {
      setK(Number(m[1]) as KelompokId);
      document.getElementById("kelompok")?.scrollIntoView();
    }
  }, []);
  const pick = (n: KelompokId) => {
    setK(n);
    history.replaceState(null, "", `#kelompok-${n}`);
  };
  const onKey = (e: React.KeyboardEvent) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    const n = (((k - 1 + (e.key === "ArrowRight" ? 1 : 2)) % 3) + 1) as KelompokId;
    pick(n);
    document.getElementById(`tab-${n}`)?.focus();
  };
  return (
    <Section
      id="kelompok"
      title="Kenalan dengan Kami"
      sub="Tiga kelompok, masing-masing 11 mahasiswa lintas prodi."
    >
      <div
        role="tablist"
        aria-label="Pilih kelompok"
        className="flex flex-wrap gap-2"
        onKeyDown={onKey}
      >
        {([1, 2, 3] as KelompokId[]).map((n) => (
          <button
            key={n}
            id={`tab-${n}`}
            role="tab"
            aria-selected={k === n}
            aria-controls="panel-kelompok"
            tabIndex={k === n ? 0 : -1}
            onClick={() => pick(n)}
            className={pill(k === n)}
          >
            Kelompok {n}
          </button>
        ))}
      </div>
      <div
        id="panel-kelompok"
        role="tabpanel"
        aria-labelledby={`tab-${k}`}
        className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3"
      >
        {members
          .filter((m) => m.kelompokId === k)
          .map((m) => (
            <div
              key={m.id}
              className="flex flex-col items-center rounded-md bg-surface p-4 text-center md:p-6"
            >
              <img
                src={m.foto}
                alt={m.nama}
                loading="lazy"
                className="size-20 rounded-full border-2 border-accent object-cover md:size-24"
              />
              <h3 className="mt-3">{m.nama}</h3>
              <p className="text-xs text-muted-foreground">
                NIM {m.nim} · {m.prodi}
              </p>
              <span className="mt-2 rounded-sm bg-accent px-2 py-0.5 text-xs font-bold text-accent-foreground">
                {m.role}
              </span>
            </div>
          ))}
      </div>
    </Section>
  );
}

function ProkerSection() {
  const [f, setF] = useState<0 | KelompokId>(0);
  const list = prokers.filter((p) => f === 0 || p.kelompokId === f);
  return (
    <Section
      id="proker"
      title="Program Kerja"
      sub="Sembilan program yang kami jalankan bersama warga."
    >
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter kelompok">
        {([0, 1, 2, 3] as const).map((n) => (
          <button key={n} aria-pressed={f === n} onClick={() => setF(n)} className={pill(f === n)}>
            {n === 0 ? "Semua" : `Kel ${n}`}
          </button>
        ))}
      </div>
      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {list.map((p) => (
          <article
            key={p.id}
            className="overflow-hidden rounded-md bg-background shadow-soft transition duration-200 hover:-translate-y-1 hover:shadow-medium border"
          >
            <div className="relative">
              <img
                src={p.thumbnail}
                alt={p.judul}
                loading="lazy"
                className="aspect-video w-full object-cover"
              />
              <span className="absolute top-3 left-3 rounded-sm bg-primary px-2 py-1 text-xs font-bold text-primary-foreground">
                Kelompok {p.kelompokId}
              </span>
            </div>
            <div className="p-5">
              <h3>{p.judul}</h3>
              <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{p.deskripsi}</p>
              <div className="mt-4 flex items-center justify-between text-sm">
                <span className="text-muted-foreground">{p.kategori}</span>
                <span
                  className={`rounded-sm px-2 py-0.5 text-xs font-bold ${p.status === "Terlaksana" ? "bg-secondary text-primary-foreground" : "bg-accent text-accent-foreground"}`}
                >
                  {p.status}
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

function useDialog(onClose: () => void) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const prev = document.activeElement as HTMLElement | null;
    const el = ref.current;
    el?.querySelector<HTMLElement>("button")?.focus();
    document.body.style.overflow = "hidden";
    const key = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "Tab" && el) {
        const f = el.querySelectorAll<HTMLElement>("button, a[href]");
        const first = f[0],
          last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    };
    document.addEventListener("keydown", key);
    return () => {
      document.removeEventListener("keydown", key);
      document.body.style.overflow = "";
      prev?.focus();
    };
  }, [onClose]);
  return ref;
}

function Dokumentasi() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <Section
      id="dokumentasi"
      title="Dokumentasi"
      sub="Momen-momen selama KKN. Ketuk foto untuk memperbesar."
    >
      <div className="columns-2 gap-3 md:columns-3">
        {dokumentasi.map((d, i) => (
          <button
            key={d.id}
            onClick={() => setOpen(i)}
            className="group relative mb-3 block w-full overflow-hidden rounded-md"
          >
            <img
              src={d.imageUrl}
              alt={d.caption}
              loading="lazy"
              className={`w-full object-cover ${i % 3 === 0 ? "aspect-[3/4]" : i % 3 === 1 ? "aspect-square" : "aspect-[4/3]"}`}
            />
            <span className="absolute inset-x-0 bottom-0 bg-primary/80 p-2 text-left text-sm text-primary-foreground opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
              {d.caption}
            </span>
          </button>
        ))}
      </div>
      {open !== null && <Lightbox i={open} onClose={() => setOpen(null)} />}
    </Section>
  );
}

function Lightbox({ i, onClose }: { i: number; onClose: () => void }) {
  const ref = useDialog(onClose);

  // FIX 1: Guard biar gak error 'possibly undefined' TS 18048
  const d = dokumentasi[i];
  if (!d) return null;

  // FIX 2: Support foto lokal & unsplash sekaligus
  // Kalau ada w=600 baru di-replace, kalau foto lokal langsung pakai
  const fullUrl = d.imageUrl.includes("w=600") ? d.imageUrl.replace("w=600", "w=1400") : d.imageUrl;

  return (
    <div
      className="fixed inset-0 z-50 grid place-items-center bg-ink/85 p-4"
      style={{ background: "oklch(0.22 0 0 / 0.85)" }}
      onClick={onClose}
    >
      <div
        ref={ref}
        role="dialog"
        aria-modal="true"
        aria-label={d.caption}
        className="relative max-w-3xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Tutup"
          className="absolute -top-12 right-0 grid size-11 place-items-center rounded-full bg-background text-foreground"
        >
          <X className="size-5" />
        </button>
        <img src={fullUrl} alt={d.caption} className="max-h- rounded-md object-contain" />
        <p className="mt-3 text-center text-primary-foreground">{d.caption}</p>
      </div>
    </div>
  );
}

function FakeQr() {
  // Pola QR dekoratif (placeholder), deterministik dari URL.
  const n = 21;
  let seed = [...SITE_URL].reduce((a, c) => a + c.charCodeAt(0), 0);
  const rnd = () => (seed = (seed * 9301 + 49297) % 233280) / 233280;
  const finder = (r: number, c: number) => {
    for (const [fr, fc] of [
      [0, 0],
      [0, n - 7],
      [n - 7, 0],
    ] as const) {
      const y = r - fr,
        x = c - fc;
      if (y >= 0 && y < 7 && x >= 0 && x < 7)
        return y === 0 || y === 6 || x === 0 || x === 6 || (y >= 2 && y <= 4 && x >= 2 && x <= 4)
          ? 1
          : 0;
    }
    return -1;
  };
  const cells = Array.from({ length: n * n }, (_, k) => {
    const f = finder(Math.floor(k / n), k % n);
    return f === -1 ? rnd() > 0.5 : f === 1;
  });
  return (
    <div
      className="grid aspect-square w-60 bg-background p-3"
      style={{ gridTemplateColumns: `repeat(${n}, 1fr)` }}
      aria-label={`Kode QR untuk ${SITE_URL}`}
      role="img"
    >
      {cells.map((on, k) => (
        <span key={k} className={on ? "bg-primary" : ""} />
      ))}
    </div>
  );
}

function QrModal({ onClose }: { onClose: () => void }) {
  const ref = useDialog(onClose);
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    await navigator.clipboard.writeText(SITE_URL);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };
  return (
    <div
      className="fixed inset-0 z-50 grid place-items-center p-4"
      style={{ background: "oklch(0.22 0 0 / 0.6)" }}
      onClick={onClose}
    >
      <div
        ref={ref}
        role="dialog"
        aria-modal="true"
        aria-labelledby="qr-title"
        className="relative w-full max-w-sm rounded-xl bg-background p-6 text-center shadow-medium"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Tutup"
          className="absolute top-3 right-3 grid size-11 place-items-center rounded-full hover:bg-surface"
        >
          <X className="size-5" />
        </button>
        <h2 id="qr-title">Scan & Bagikan</h2>
        <div className="mt-4 flex justify-center rounded-md bg-surface p-4">
          <FakeQr />
        </div>
        <p className="mt-4 break-all text-sm font-medium text-foreground">{SITE_URL}</p>
        <button
          onClick={copy}
          className="mt-4 inline-flex h-11 w-full items-center justify-center gap-2 rounded-md bg-secondary font-bold text-primary-foreground"
        >
          {copied ? (
            <>
              <Check className="size-4" /> Tersalin
            </>
          ) : (
            <>
              <Copy className="size-4" /> Salin Link
            </>
          )}
        </button>
      </div>
    </div>
  );
}

function LogoKelompok() {
  return (
    <Section
      id="logo"
      title="Logo Kelompok"
      sub="Lambang tiga kelompok yang mengabdi di Desa Resmi Tingal."
    >
      <div className="grid gap-4 sm:grid-cols-3">
        {kelompokLogos.map((l) => (
          <div
            key={l.kelompokId}
            className="flex flex-col items-center rounded-lg bg-surface p-6 text-center"
          >
            <img
              src={l.logo}
              alt={`Logo ${l.nama}`}
              loading="lazy"
              width={1024}
              height={1024}
              className="size-32 object-contain md:size-40"
            />
            <h3 className="mt-4">{l.nama}</h3>
            <p className="mt-1 text-sm text-muted-foreground"></p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Footer({ onQr }: { onQr: () => void }) {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-3">
        <div>
          <p className="font-display text-xl font-bold">KKN Resmi Tingal</p>
          <p className="mt-2 text-sm opacity-80">Kelompok 1-3 · Expo 2026</p>
          <button
            onClick={onQr}
            className="mt-4 inline-flex h-11 items-center gap-2 rounded-md bg-accent px-4 text-sm font-bold text-accent-foreground md:hidden"
          >
            <QrCode className="size-4" /> Tampilkan QR
          </button>
        </div>
        <div className="space-y-2 text-sm">
          <p className="font-bold">Social Media</p>
          <a
            href={`https://www.instagram.com/kkn.resmitingal_01?stkn=ZWRxdTRzM3ZocXM0/${footer.instagramkkn1}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 underline-offset-4 hover:underline"
          >
            <Instagram className="size-4" /> @{footer.instagramkkn1}
          </a>
          <a
            href={`https://www.instagram.com/kkn_resmitingal02?stkn=MTYyMGRvbXQ1bHNodg==/${footer.instagramkkn2}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 underline-offset-4 hover:underline"
          >
            <Instagram className="size-4" /> @{footer.instagramkkn2}
          </a>
          <a
            href={`https://www.instagram.com/kkn_resmitingal03?stkn=MXhsdGFhc2V1ZGMwag==/${footer.instagramkkn3}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 underline-offset-4 hover:underline"
          >
            <Instagram className="size-4" /> @{footer.instagramkkn3}
          </a>
        </div>
        <div className="space-y-2 text-sm">
          <p className="font-bold">Lokasi</p>
          <p className="flex gap-2">
            <MapPin className="size-4 shrink-0" /> {footer.lokasi}
          </p>
        </div>
      </div>
    </footer>
  );
}
