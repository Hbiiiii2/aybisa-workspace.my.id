import { useState, useEffect } from "react"
import heroCharacter from "./assets/aybisa/hero-character.png"
import coderTablet from "./assets/aybisa/coder-tablet.png"
import webPanel from "./assets/aybisa/web-panel.png"
import ideasCharacter from "./assets/aybisa/ideas-character.png"
import logo from "./assets/aybisa/logo.png"
import previewSmp from "./assets/aybisa/preview-smp.png"
import previewTk from "./assets/aybisa/preview-tk.png"
import previewPutranagamas from "./assets/aybisa/preview-putranagamas.png"
import previewDesaSukasari from "./assets/aybisa/preview-desa-sukasari.png"

const WA_PHONE_DISPLAY = "+62 851-2250-2293"
const WA_PHONE_NUMBER = "6285122502293"

function getWhatsAppUrl(message = "Halo Aybisa Studio, saya ingin konsultasi mengenai pembuatan website atau sistem.") {
  return `https://wa.me/${WA_PHONE_NUMBER}?text=${encodeURIComponent(message)}`
}

type IconName =
  | "arrow"
  | "brand"
  | "briefcase"
  | "brush"
  | "check"
  | "chevron"
  | "code"
  | "education"
  | "external"
  | "headset"
  | "mail"
  | "menu"
  | "organization"
  | "phone"
  | "pin"
  | "responsive"
  | "shop"
  | "support"
  | "system"
  | "whatsapp"
  | "copy"
  | "directions"

function Icon({ name }: { name: IconName }) {
  const paths: Record<IconName, React.ReactNode> = {
    arrow: (
      <>
        <path d="M5 12h14M14 7l5 5-5 5" />
      </>
    ),
    brand: (
      <>
        <path d="M6 18V7l6-3 6 3v11" />
        <path d="M9 13h6M9 9h.01M15 9h.01" />
      </>
    ),
    briefcase: (
      <>
        <rect x="3" y="7" width="18" height="12" rx="2" />
        <path d="M8 7V5h8v2M3 12h18M10 12v2h4v-2" />
      </>
    ),
    brush: (
      <>
        <path d="M14 4l6 6-8 8-6-6 8-8Z" />
        <path d="M9 15c-1 4-3 5-6 5 2-2 1-4 3-6" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    chevron: <path d="m7 9 5 5 5-5" />,
    code: (
      <>
        <path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 5l-4 14" />
      </>
    ),
    copy: (
      <>
        <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
      </>
    ),
    directions: (
      <polygon points="3 11 22 2 13 21 11 13 3 11" />
    ),
    education: (
      <>
        <path d="m3 9 9-5 9 5-9 5-9-5Z" />
        <path d="M7 12v4c3 2 7 2 10 0v-4M21 9v6" />
      </>
    ),
    external: (
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3" />
    ),
    headset: (
      <>
        <path d="M4 13v-2a8 8 0 0 1 16 0v2" />
        <path d="M4 13h3v6H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 1-2ZM20 13h-3v6h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-1-2ZM17 19c-1 2-3 2-5 2" />
      </>
    ),
    mail: (
      <>
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </>
    ),
    menu: (
      <>
        <path d="M4 7h16M4 12h16M4 17h16" />
      </>
    ),
    organization: (
      <>
        <circle cx="12" cy="6" r="3" />
        <circle cx="5" cy="17" r="2.5" />
        <circle cx="19" cy="17" r="2.5" />
        <path d="M12 9v3M5 14v-2h14v2" />
      </>
    ),
    phone: (
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    ),
    pin: (
      <>
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </>
    ),
    responsive: (
      <>
        <rect x="3" y="4" width="15" height="11" rx="2" />
        <path d="M8 20h5M10 15v5" />
        <rect x="16" y="10" width="5" height="10" rx="1" />
      </>
    ),
    shop: (
      <>
        <path d="M4 10v10h16V10M3 10l2-6h14l2 6" />
        <path d="M3 10c1 3 4 3 5 0 1 3 4 3 5 0 1 3 4 3 5 0 1 3 4 3 5 0M9 20v-5h6v5" />
      </>
    ),
    support: (
      <>
        <path d="M12 3a9 9 0 1 0 9 9" />
        <path d="M12 7a5 5 0 1 0 5 5M17 3v5h5" />
      </>
    ),
    system: (
      <>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 9h18M8 9v11M11 13h6M11 16h4" />
      </>
    ),
    whatsapp: (
      <path
        d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.26-.46-2.39-1.48-.88-.78-1.48-1.76-1.65-2.06-.18-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.91-2.2-.24-.59-.49-.51-.67-.52H7.9c-.2 0-.52.07-.8.37-.27.3-1.03 1.02-1.03 2.48s1.06 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.42-.07-.12-.27-.2-.57-.34ZM12.05 21.78h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.89 9.89-9.89 2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 0 1 2.89 6.99c0 5.45-4.44 9.89-9.89 9.89Zm8.41-18.3A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L0 24l6.34-1.66A11.85 11.85 0 0 0 12.05 24c6.55 0 11.89-5.34 11.89-11.89 0-3.18-1.24-6.17-3.48-8.41Z"
        fill="currentColor"
        stroke="none"
      />
    ),
  }
  return (
    <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
      {paths[name]}
    </svg>
  )
}

function Brand({ inverse = false }: { inverse?: boolean }) {
  return (
    <span className={`brand-lockup${inverse ? " brand-inverse" : ""}`}>
      <img className="brand-logo" src={logo} alt="Aybisa" />
      <span className="brand-label">Studio</span>
    </span>
  )
}

function StarRating() {
  return (
    <div className="star-rating" aria-label="Rating 5 dari 5 bintang">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className="star-icon"
          viewBox="0 0 24 24"
          fill="currentColor"
          stroke="none"
          aria-hidden="true"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  )
}

function ButtonLink({
  children,
  href,
  variant = "primary",
  external = false,
  icon = "arrow",
  iconPosition = "end",
}: {
  children: React.ReactNode
  href: string
  variant?: "primary" | "secondary" | "light" | "text" | "whatsapp" | "maps"
  external?: boolean
  icon?: IconName | null
  iconPosition?: "start" | "end"
}) {
  return (
    <a
      className={`button button-${variant}`}
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
    >
      {icon && iconPosition === "start" && <Icon name={icon} />}
      {children}
      {icon && iconPosition === "end" && <Icon name={icon} />}
    </a>
  )
}

const services = [
  {
    icon: "code" as IconName,
    color: "blue",
    title: "Website Development",
    text: "Website profesional, responsif, dan SEO-friendly untuk bisnis, sekolah, maupun organisasi.",
    cta: "Bahas website Anda",
  },
  {
    icon: "brush" as IconName,
    color: "yellow",
    title: "UI/UX & Branding",
    text: "Desain antarmuka, pengalaman pengguna, identitas visual, dan presentasi brand yang konsisten.",
    cta: "Eksplorasi desain",
  },
  {
    icon: "system" as IconName,
    color: "green",
    title: "Sistem & Aplikasi Custom",
    text: "Sistem informasi, dashboard, aplikasi bisnis, dan otomasi alur kerja sesuai operasional.",
    cta: "Rancang sistem",
  },
  {
    icon: "headset" as IconName,
    color: "pink",
    title: "Digital Support",
    text: "Pemeliharaan website, pembaruan teknis, troubleshooting, dan dukungan berkelanjutan.",
    cta: "Tanyakan dukungan",
  },
]

const faqs = [
  [
    "Berapa lama waktu pengerjaan website?",
    "Durasi bergantung pada ruang lingkup, jumlah halaman, kesiapan materi, dan kompleksitas fitur. Estimasi waktu disepakati setelah kebutuhan dianalisis.",
  ],
  [
    "Apakah domain dan maintenance sudah termasuk?",
    "Ya! Setiap paket sudah include domain sesuai peruntukannya (.sch.id untuk Instansi Pendidikan, .my.id / .biz.id untuk UMKM, dan .com / .id untuk Perusahaan) serta support maintenance selama masih berlangganan.",
  ],
  [
    "Apakah desain bisa disesuaikan dengan kebutuhan?",
    "Ya. Arah visual, struktur informasi, dan pengalaman pengguna dirancang berdasarkan karakter brand serta tujuan bisnis Anda.",
  ],
  [
    "Apakah website bisa dikembangkan kembali?",
    "Bisa. Kami menyusun solusi dengan mempertimbangkan kebutuhan saat ini dan potensi pengembangan fitur di tahap berikutnya.",
  ],
  [
    "Bagaimana sistem pembayaran proyek?",
    "Skema pembayaran ditentukan dalam proposal proyek dan disepakati bersama sebelum pekerjaan dimulai. Besarannya mengikuti ruang lingkup yang telah disetujui.",
  ],
  [
    "Bagaimana dukungan maintenance website?",
    "Support maintenance selalu aktif mendampingi Anda selama masih berlangganan agar website selalu prima, aman, dan dapat diandalkan.",
  ],
]

const portfolioProjects = [
  {
    category: "Website Sekolah",
    title: "SMP Islam Al-Madinah BSD",
    domain: "smpaickkmb.sch.id",
    url: "https://smpaickkmb.sch.id",
    image: previewSmp,
    tag: "Sekolah",
    theme: "school",
    desc: "Portal resmi profil sekolah terpadu, informasi kurikulum adab & ilmu, agenda kegiatan, serta sistem PPDB online.",
  },
  {
    category: "Website Sekolah",
    title: "TK Al-Madinah Islamic Centre",
    domain: "tk.almadinah-islamiccenterkkmb.sch.id",
    url: "https://tk.almadinah-islamiccenterkkmb.sch.id",
    image: previewTk,
    tag: "Pendidikan",
    theme: "kindergarten",
    desc: "Website profil PAUD & TK berbasis nilai Islami, pembiasaan akhlak, sentra bermain ceria, dan pendaftaran murid baru.",
  },
  {
    category: "Landing Page Company",
    title: "PT Putra Naga Mas Grup",
    domain: "putranagamas.co.id",
    url: "https://putranagamas.co.id",
    image: previewPutranagamas,
    tag: "Company",
    theme: "company",
    desc: "Website company profile profesional untuk Naga Park — Integrated Parking Management, solusi sistem parkir terpadu dan kontak bisnis.",
  },
  {
    category: "Landing Page Desa",
    title: "Portal Resmi Desa Sukasari",
    domain: "desa-sukasari.my.id",
    url: "https://desa-sukasari.my.id",
    image: previewDesaSukasari,
    tag: "Website Desa",
    theme: "village",
    desc: "Portal transparansi publik pemerintah desa, pusat informasi publik warga, pelayanan surat mandiri, dan potensi desa.",
  },
]

const pricingPlans = [
  {
    name: "Instansi Pendidikan",
    price: "500.000",
    priceRaw: "500RB",
    desc: "Cocok untuk sekolah, madrasah, pesantren, dan yayasan pendidikan formal.",
    features: [
      "Include Domain .sch.id",
      "Support Maintenance Selama Masih Berlangganan",
      "4 Halaman",
      "Tampilan Responsif",
    ],
    featured: false,
    ctaText: "Pilih Paket Pendidikan",
    waMessage: "Halo Aybisa Studio, saya tertarik dengan paket website Instansi Pendidikan (mulai dari 500rb). Boleh info detailnya?",
  },
  {
    name: "UMKM",
    price: "750.000",
    priceRaw: "750RB",
    desc: "Pilihan favorit untuk toko online, rintisan bisnis, gerai, dan jasa mandiri.",
    features: [
      "Include Domain .my.id / .biz.id",
      "Support Maintenance Selama Masih Berlangganan",
      "4 Halaman",
      "Tampilan Responsif",
      "CTA (Call To Action)",
    ],
    featured: true,
    badge: "Paling Populer",
    ctaText: "Pilih Paket UMKM",
    waMessage: "Halo Aybisa Studio, saya ingin memesan paket website UMKM (mulai dari 750rb). Boleh info detailnya?",
  },
  {
    name: "Perusahaan",
    price: "1.200.000",
    priceRaw: "1,2JT",
    desc: "Solusi company profile profesional & kredibel untuk skala korporat dan B2B.",
    features: [
      "Include Domain .com / .id (1 Thn)",
      "Support Maintenance Selama Masih Berlangganan",
      "CMS (Content Management System)",
      "Tampilan Responsif",
      "CTA (Call To Action)",
    ],
    featured: false,
    ctaText: "Pilih Paket Perusahaan",
    waMessage: "Halo Aybisa Studio, saya tertarik dengan paket website Perusahaan (mulai dari 1,2jt). Boleh info detailnya?",
  },
]

const testimonials = [
  {
    name: "Pak Rapi Manurung",
    role: "Principal SMP Al-Madinah Islamic Centre KKMB",
    domain: "smpaickkmb.sch.id",
    initials: "RM",
    theme: "school",
    quote:
      "Aybisa Studio sangat solutif dan memahami kebutuhan sekolah kami. Website smpaickkmb.sch.id selesai tepat waktu dengan tampilan modern dan informatif. Sistem PPDB online mempermudah proses pendaftaran murid baru, dan timnya selalu sigap dalam memberikan pendampingan teknis.",
  },
  {
    name: "Ibu Nurul Ummi Hafiza, S.Pd",
    role: "Principal TK Al-Madinah Islamic Centre KKMB",
    domain: "tk.almadinah-islamiccenterkkmb.sch.id",
    initials: "NH",
    theme: "kindergarten",
    quote:
      "Desain website TK Al-Madinah dirancang ceria, ramah anak, dan tetap menonjolkan nilai-nilai Islami. Para wali murid sangat mengapresiasi kemudahan mengakses kegiatan sekolah serta info pendaftaran online. Pelayanan tim Aybisa Studio sangat ramah, sabar, dan profesional!",
  },
  {
    name: "H. Edih Juhadi",
    role: "Kepala Desa Sukasari",
    domain: "desa-sukasari.my.id",
    initials: "EJ",
    theme: "village",
    quote:
      "Kehadiran website desa-sukasari.my.id menjadi terobosan nyata bagi transparansi dan kemudahan layanan administrasi warga. Tim Aybisa Studio mendampingi dengan teliti dari perizinan domain hingga sistem siap beroperasi. Kualitas kerja sangat memuaskan dan bertanggung jawab.",
  },
  {
    name: "Edi Alpinsi",
    role: "Direktur PT. Putra Naga Mas Grup",
    domain: "putranagamas.co.id",
    initials: "EA",
    theme: "company",
    quote:
      "Landing page corporate untuk Naga Park tampil sangat elegan, berkelas, dan kredibel di mata mitra bisnis. Kecepatan loading situs sangat optimal dan pesan layanan parkir terintegrasi tersampaikan dengan tepat. Kerjasama yang sangat bernilai bersama Aybisa Studio.",
  },
]

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeFaq, setActiveFaq] = useState<number | null>(0)
  const [scrolled, setScrolled] = useState(false)
  const [copiedAddress, setCopiedAddress] = useState(false)
  const [sitemapModalOpen, setSitemapModalOpen] = useState(false)

  const handleCopyAddress = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText("Aybisa Studio, Tangerang Selatan, Banten, Indonesia")
      setCopiedAddress(true)
      setTimeout(() => setCopiedAddress(false), 2500)
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible")
          }
        })
      },
      { threshold: 0.08, rootMargin: "0px 0px -30px 0px" }
    )

    const targets = document.querySelectorAll(".reveal-up, .reveal-scale, .reveal-stagger")
    targets.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const nav = [
    ["Beranda", "beranda"],
    ["Layanan", "layanan"],
    ["Portofolio", "portofolio"],
    ["Harga", "harga"],
    ["Testimoni", "testimoni"],
    ["Proses", "proses"],
    ["Lokasi", "lokasi"],
    ["FAQ", "faq"],
  ]

  return (
    <>
      <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
        <nav className="nav container" aria-label="Navigasi utama">
          <a
            href="#beranda"
            className="brand-link"
            aria-label="Aybisa Studio, kembali ke beranda"
          >
            <Brand />
          </a>
          <div className={`nav-links${menuOpen ? " is-open" : ""}`}>
            {nav.map(([label, id]) => (
              <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>
                {label}
              </a>
            ))}
            <ButtonLink
              href={getWhatsAppUrl("Halo Aybisa Studio, saya ingin konsultasi gratis mengenai pembuatan website atau sistem.")}
              external
              icon="whatsapp"
              iconPosition="start"
            >
              Konsultasi Gratis
            </ButtonLink>
          </div>
          <button
            className="menu-button"
            aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name="menu" />
          </button>
        </nav>
      </header>

      <main>
        <section className="hero section" id="beranda">
          <div className="hero-grid container">
            <div className="hero-copy">
              <h1>
                Website yang Membuat Bisnismu <span>Lebih Besar</span>
              </h1>
              <p className="hero-lead">
                Kami membantu UMKM, sekolah, dan bisnis lokal membangun website,
                sistem, dan solusi digital yang profesional, modern, dan mudah
                digunakan.
              </p>
              <div className="button-row">
                <ButtonLink
                  href={getWhatsAppUrl("Halo Aybisa Studio, saya ingin konsultasi gratis pembuatan website untuk bisnis saya.")}
                  external
                  icon="whatsapp"
                  iconPosition="start"
                >
                  Konsultasi Gratis
                </ButtonLink>
                <ButtonLink href="#layanan" variant="secondary">
                  Lihat Layanan
                </ButtonLink>
              </div>
              <div className="hero-benefits" aria-label="Keunggulan layanan">
                {[
                  "Pengerjaan Terstruktur",
                  "Harga Transparan",
                  "Dukungan Berkelanjutan",
                ].map((item) => (
                  <span key={item}>
                    <Icon name="check" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="hero-art">
              <span className="shape shape-yellow" />
              <span className="shape shape-pink" />
              <div className="hero-panel">
                <div className="browser-top">
                  <i />
                  <i />
                  <i />
                  <span />
                </div>
                <img
                  src={heroCharacter}
                  alt="Ilustrasi profesional Aybisa bekerja dengan laptop"
                />
              </div>
              <div className="mini-card mini-code">
                <Icon name="code" />
                <span>
                  Solusi yang
                  <br />
                  <strong>tepat guna</strong>
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="trust-strip" aria-labelledby="trust-title">
          <div className="container">
            <p id="trust-title">Solusi digital untuk berbagai kebutuhan</p>
            <div className="trust-items reveal-stagger">
              {[
                ["shop", "UMKM & Bisnis Lokal"],
                ["education", "Sekolah & Pendidikan"],
                ["organization", "Komunitas & Organisasi"],
                ["briefcase", "Perusahaan & Institusi"],
              ].map(([icon, text]) => (
                <div key={text}>
                  <Icon name={icon as IconName} />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section about" id="tentang">
          <div className="container split">
            <div className="section-copy reveal-up">
              <p className="eyebrow">Tentang Aybisa</p>
              <h2>Lebih dari Sekadar Pembuatan Website</h2>
              <p>
                Aybisa Studio membantu bisnis membangun kehadiran digital
                yang kuat sekaligus menyederhanakan cara kerja. Kami memadukan
                strategi, desain, dan teknologi agar solusi yang dibuat bukan
                hanya terlihat menarik, tetapi juga relevan untuk pengguna.
              </p>
              <p>
                Dari jasa pembuatan website Tangerang Selatan hingga sistem
                informasi custom untuk klien di seluruh Indonesia, setiap proyek
                dimulai dari pemahaman kebutuhan yang jelas.
              </p>
              <ButtonLink href="#proses" variant="text">
                Pelajari cara kami bekerja
              </ButtonLink>
            </div>
            <div className="about-art reveal-scale">
              <div className="site-mockup">
                <div className="mock-nav">
                  <span />
                  <span />
                </div>
                <div className="mock-body">
                  <b />
                  <i />
                  <i />
                  <i />
                </div>
              </div>
              <div className="about-image">
                <img
                  src={ideasCharacter}
                  alt="Ilustrasi tim Aybisa menyusun ide solusi digital"
                />
              </div>
              <div className="puzzle-piece puzzle-blue" />
              <div className="puzzle-piece puzzle-green" />
            </div>
          </div>
        </section>

        <section className="section services" id="layanan">
          <div className="container">
            <div className="section-heading centered reveal-up">
              <p className="eyebrow">Layanan Aybisa</p>
              <h2>Solusi Digital Lengkap untuk Kebutuhan Anda</h2>
              <p>
                Dari landing page bisnis hingga aplikasi custom, pilih solusi
                yang mendukung tujuan dan cara kerja organisasi Anda.
              </p>
            </div>
            <div className="service-grid reveal-stagger">
              {services.map((service) => (
                <article
                  className={`service-card card-${service.color}`}
                  key={service.title}
                >
                  <div className="icon-box">
                    <Icon name={service.icon} />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <a
                    href={getWhatsAppUrl(`Halo Aybisa Studio, saya ingin konsultasi mengenai layanan ${service.title}.`)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {service.cta}
                    <Icon name="arrow" />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section portfolio" id="portofolio">
          <div className="container">
            <div className="section-heading heading-row reveal-up">
              <div>
                <p className="eyebrow">Portofolio Kami</p>
                <h2>Beberapa Hasil Karya Kami</h2>
              </div>
              <p>
                Koleksi website dan landing page yang telah kami kembangkan dan aktif beroperasi untuk sekolah, perusahaan, dan pemerintahan desa.
              </p>
            </div>
            <div className="portfolio-grid reveal-stagger">
              {portfolioProjects.map((project, index) => (
                <article
                  className={`project project-${project.theme}`}
                  key={project.domain}
                >
                  <div className="project-preview">
                    <div className="preview-chrome">
                      <div className="chrome-dots">
                        <i className="dot-red" />
                        <i className="dot-yellow" />
                        <i className="dot-green" />
                      </div>
                      <div className="chrome-address">
                        <svg
                          className="lock-icon"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                        >
                          <rect
                            x="3"
                            y="11"
                            width="18"
                            height="11"
                            rx="2"
                            ry="2"
                            strokeWidth="2"
                          />
                          <path d="M7 11V7a5 5 0 0 1 10 0v4" strokeWidth="2" />
                        </svg>
                        <span>{project.domain}</span>
                      </div>
                    </div>

                    <div className="preview-screen">
                      <img
                        src={project.image}
                        alt={`Tampilan depan website ${project.title}`}
                        loading="lazy"
                      />
                    </div>

                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="preview-hover-action"
                      aria-label={`Buka website resmi ${project.title}`}
                    >
                      <span>Kunjungi Website</span>
                      <Icon name="external" />
                    </a>
                  </div>

                  <div className="project-meta">
                    <div className="meta-info">
                      <p className="meta-category">{project.category}</p>
                      <h3 className="meta-title">
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {project.title}
                        </a>
                      </h3>
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="meta-domain"
                        aria-label={`Domain ${project.domain}`}
                      >
                        <span>{project.domain}</span>
                        <Icon name="external" />
                      </a>
                      <p className="meta-desc">{project.desc}</p>
                    </div>
                    <div className="meta-tag-box">
                      <span className="meta-tag">{project.tag}</span>
                      <span className="meta-index" aria-hidden="true">
                        0{index + 1}
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section pricing" id="harga">
          <div className="container">
            <div className="section-heading centered reveal-up">
              <p className="eyebrow">Investasi Proyek</p>
              <h2>Pilihan Paket Sesuai Kebutuhan Anda</h2>
              <p>
                Solusi pembuatan website siap pakai dengan domain, tampilan responsif, dan dukungan pemeliharaan berkelanjutan.
              </p>
            </div>
            <div className="pricing-grid reveal-stagger">
              {pricingPlans.map((plan) => (
                <article
                  className={`price-card${plan.featured ? " featured" : ""}`}
                  key={plan.name}
                >
                  {plan.featured && (
                    <p className="recommendation">{plan.badge}</p>
                  )}
                  <h3>{plan.name}</h3>
                  <p className="price-desc">{plan.desc}</p>
                  <p className="price-label">Mulai dari</p>
                  <p className="price">
                    <small>Rp</small>
                    {plan.price}
                    <span className="price-raw-pill">{plan.priceRaw}</span>
                  </p>
                  <ul>
                    {plan.features.map((feature) => (
                      <li key={feature}>
                        <Icon name="check" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <ButtonLink
                    href={getWhatsAppUrl(plan.waMessage)}
                    variant={plan.featured ? "primary" : "secondary"}
                    external
                    icon="whatsapp"
                    iconPosition="start"
                  >
                    {plan.ctaText}
                  </ButtonLink>
                </article>
              ))}
            </div>
            <p className="pricing-note">
              Semua paket sudah include domain dan maintenance selama periode aktif berlangganan. Kebutuhan penambahan halaman atau fitur kustom dapat disesuaikan.
            </p>
          </div>
        </section>

        <section className="section why">
          <div className="container why-grid">
            <div className="why-intro reveal-up">
              <p className="eyebrow">Mengapa Aybisa</p>
              <h2>Lebih dari Sekadar Membuat Website</h2>
              <p>
                Kami memandang setiap proyek sebagai alat kerja dan titik temu
                antara brand, pengguna, dan tujuan bisnis.
              </p>
              <div className="why-image">
                <img
                  src={coderTablet}
                  alt="Ilustrasi kreator digital Aybisa menggunakan tablet"
                />
              </div>
            </div>
            <div className="why-list reveal-stagger">
              {[
                [
                  "responsive",
                  "Desain Modern dan Responsif",
                  "Tampilan dirancang nyaman digunakan di desktop maupun perangkat mobile.",
                ],
                [
                  "brand",
                  "Harga Transparan",
                  "Ruang lingkup dan biaya dibicarakan sejak awal sebelum pengembangan dimulai.",
                ],
                [
                  "briefcase",
                  "Tim Profesional dan Berpengalaman",
                  "Proses kerja mengutamakan komunikasi, kualitas, dan keputusan yang dapat dipertanggungjawabkan.",
                ],
                [
                  "support",
                  "Dukungan Jangka Panjang",
                  "Kebutuhan pengembangan dan dukungan teknis lanjutan dapat direncanakan bersama.",
                ],
              ].map(([icon, title, text], i) => (
                <article key={title}>
                  <span>0{i + 1}</span>
                  <div className="icon-box">
                    <Icon name={icon as IconName} />
                  </div>
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section testimonials" id="testimoni">
          <div className="container">
            <div className="section-heading heading-row reveal-up">
              <div>
                <p className="eyebrow">Cerita Klien</p>
                <h2>Apa Kata Klien Kami?</h2>
              </div>
              <p>
                Testimoni dari kepala sekolah, kepala desa, dan pimpinan perusahaan yang telah mempercayakan kehadiran digital mereka kepada Aybisa Studio.
              </p>
            </div>
            <div className="testimonials-grid reveal-stagger">
              {testimonials.map((item) => (
                <article className="testimonial-card" key={item.name}>
                  <div className="testimonial-card-top">
                    <StarRating />
                    <span className="verified-badge">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        className="badge-check-icon"
                        aria-hidden="true"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Klien Terverifikasi
                    </span>
                  </div>
                  <p className="testimonial-quote">
                    "{item.quote}"
                  </p>
                  <footer className="testimonial-footer">
                    <div className={`avatar-badge avatar-${item.theme}`}>
                      {item.initials}
                    </div>
                    <div className="testimonial-author">
                      <strong>{item.name}</strong>
                      <small>{item.role}</small>
                      <a
                        href={`https://${item.domain}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="testimonial-domain-tag"
                      >
                        <span>{item.domain}</span>
                        <Icon name="external" />
                      </a>
                    </div>
                  </footer>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section process" id="proses">
          <div className="container">
            <div className="section-heading centered reveal-up">
              <p className="eyebrow">Alur kolaborasi</p>
              <h2>Proses Mudah, Terstruktur, dan Jelas</h2>
              <p>
                Setiap tahap memiliki tujuan yang jelas agar keputusan proyek
                mudah dipahami.
              </p>
            </div>
            <ol className="process-list reveal-stagger">
              {[
                [
                  "Konsultasi & Analisis",
                  "Memahami tujuan, pengguna, serta kebutuhan bisnis.",
                ],
                [
                  "Perencanaan",
                  "Menyusun ruang lingkup, prioritas, dan arah solusi.",
                ],
                [
                  "Desain & Pengembangan",
                  "Mewujudkan struktur, visual, serta fungsi utama.",
                ],
                [
                  "Review & Revisi",
                  "Menguji hasil dan menyempurnakan berdasarkan masukan.",
                ],
                [
                  "Launch & Support",
                  "Mempersiapkan peluncuran dan kebutuhan dukungan lanjutan.",
                ],
              ].map(([title, text], i) => (
                <li key={title}>
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section location-section" id="lokasi">
          <div className="container">
            <div className="section-heading centered reveal-up">
              <p className="eyebrow">Lokasi &amp; Kontak Resmi</p>
              <h2>Kunjungi Workshop &amp; Hubungi Kami</h2>
              <p>
                Aybisa Studio berpusat di Tangerang Selatan. Kami siap berkolaborasi
                tatap muka langsung untuk area Jabodetabek maupun koordinasi online
                secara fleksibel untuk seluruh Indonesia.
              </p>
            </div>

            <div className="location-grid reveal-scale">
              <div className="location-info-card">
                <div>
                  <div className="location-header-row">
                    <div className="location-status-badge">
                      <span className="live-dot" aria-hidden="true" />
                      <span>Buka &bull; 08:00 - 22:00 WIB</span>
                    </div>
                    <span className="location-verified-pill">
                      <Icon name="check" />
                      <span>Terdaftar di Google</span>
                    </span>
                  </div>

                  <h3>Aybisa Studio</h3>
                  <p className="location-subtitle">
                    Partner Jasa Pembuatan Website, Desain, &amp; Solusi Digital
                  </p>

                  <div className="location-details-list">
                    <div className="location-detail-item">
                      <div className="location-icon-wrapper">
                        <Icon name="pin" />
                      </div>
                      <div>
                        <strong>Alamat Tempat Bisnis</strong>
                        <p>Tangerang Selatan, Banten, Indonesia</p>
                        <small>
                          Melayani area BSD City, Bintaro, Pamulang, Ciputat, Serpong,
                          dan pertemuan online se-Indonesia.
                        </small>
                      </div>
                    </div>

                    <div className="location-detail-item">
                      <div className="location-icon-wrapper">
                        <Icon name="phone" />
                      </div>
                      <div>
                        <strong>WhatsApp Resmi</strong>
                        <p>{WA_PHONE_DISPLAY}</p>
                        <small>Konsultasi gratis &amp; respon cepat tanpa komitmen awal.</small>
                      </div>
                    </div>

                    <div className="location-detail-item">
                      <div className="location-icon-wrapper">
                        <Icon name="mail" />
                      </div>
                      <div>
                        <strong>Email Resmi</strong>
                        <p>halo@aybisa-workspace.my.id</p>
                        <small>Kirim kebutuhan proyek atau proposal kerjasama formal.</small>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="location-action-area">
                  <div className="location-action-buttons">
                    <ButtonLink
                      href="https://share.google/Uo3IS3zhWqORObOhs"
                      variant="maps"
                      external
                      icon="pin"
                      iconPosition="start"
                    >
                      Buka Pin di Google Maps
                    </ButtonLink>
                    <button
                      type="button"
                      className="button-copy-address"
                      onClick={handleCopyAddress}
                    >
                      <Icon name="copy" />
                      <span>{copiedAddress ? "Alamat Tersalin! ✓" : "Salin Alamat"}</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="location-map-card">
                <div className="map-iframe-container">
                  <iframe
                    title="Peta Lokasi Bisnis Aybisa Studio di Tangerang Selatan"
                    src="https://maps.google.com/maps?q=Tangerang+Selatan&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                  <div className="map-floating-overlay">
                    <a
                      href="https://share.google/Uo3IS3zhWqORObOhs"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="map-pin-pill"
                    >
                      <span className="map-pin-icon" aria-hidden="true">📍</span>
                      <span>Pin Lokasi Aybisa Studio</span>
                      <Icon name="external" />
                    </a>
                  </div>
                </div>
                <div className="map-card-footer">
                  <span>🗺️ Klik pin untuk rute akurat di Google Maps</span>
                  <a
                    href="https://share.google/Uo3IS3zhWqORObOhs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="map-directions-link"
                  >
                    Petunjuk Rute &rarr;
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section faq" id="faq">
          <div className="container faq-grid">
            <div className="faq-intro reveal-up">
              <p className="eyebrow">FAQ</p>
              <h2>Pertanyaan yang Sering Diajukan</h2>
              <p>
                Belum menemukan jawaban yang dicari? Ceritakan kebutuhan proyek
                Anda melalui sesi konsultasi.
              </p>
              <ButtonLink
                href={getWhatsAppUrl("Halo Aybisa Studio, saya ingin bertanya lebih lanjut seputar pembuatan website atau sistem.")}
                variant="text"
                external
                icon="whatsapp"
                iconPosition="start"
              >
                Mulai konsultasi WhatsApp
              </ButtonLink>
            </div>
            <div className="accordion reveal-up">
              {faqs.map(([question, answer], index) => {
                const open = activeFaq === index
                return (
                  <div
                    className={`faq-item${open ? " open" : ""}`}
                    key={question}
                  >
                    <h3>
                      <button
                        aria-expanded={open}
                        aria-controls={`faq-panel-${index}`}
                        onClick={() => setActiveFaq(open ? null : index)}
                      >
                        <span>{question}</span>
                        <Icon name="chevron" />
                      </button>
                    </h3>
                    <div
                      id={`faq-panel-${index}`}
                      className="faq-answer"
                      hidden={!open}
                    >
                      <p>{answer}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section className="final-cta" id="konsultasi">
          <div className="container cta-panel reveal-scale">
            <div className="cta-copy">
              <p className="eyebrow">Mulai dari percakapan</p>
              <h2>Saatnya Bisnis Anda Punya Website!</h2>
              <p>
                Dapatkan solusi digital yang sesuai dengan kebutuhan bisnis
                Anda. Konsultasikan ide dan kebutuhan Anda bersama Aybisa
                Studio.
              </p>
              <ButtonLink
                href={getWhatsAppUrl("Halo Aybisa Studio, saya ingin konsultasi gratis sekarang via WhatsApp.")}
                variant="whatsapp"
                external
                icon="whatsapp"
                iconPosition="start"
              >
                Konsultasi Gratis Sekarang
              </ButtonLink>
              <small>
                Chat WhatsApp resmi: <strong>{WA_PHONE_DISPLAY}</strong> (Respon Cepat & Konsultasi Bebas Komitmen)
              </small>
            </div>
            <div className="cta-image">
              <img
                src={webPanel}
                alt="Ilustrasi konsultan Aybisa menunjukkan rancangan website"
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="footer" id="kontak">
        <div className="container footer-grid">
          <div className="footer-brand">
            <Brand inverse />
            <p>
              Partner solusi digital untuk website, desain, sistem informasi,
              dan dukungan teknis bagi bisnis Indonesia.
            </p>
          </div>
          <div>
            <h2>Menu</h2>
            <a href="#beranda">Beranda</a>
            <a href="#tentang">Tentang</a>
            <a href="#portofolio">Portofolio</a>
            <a href="#harga">Harga</a>
            <a href="#lokasi">Lokasi Kami</a>
            <a href="#faq">FAQ</a>
            <button
              type="button"
              onClick={() => setSitemapModalOpen(true)}
              className="footer-link-btn"
            >
              Peta Situs
            </button>
          </div>
          <div>
            <h2>Layanan</h2>
            <a href="#layanan">Website Development</a>
            <a href="#layanan">UI/UX & Branding</a>
            <a href="#layanan">Sistem Custom</a>
            <a href="#layanan">Digital Support</a>
          </div>
          <div>
            <h2>Kontak &amp; Lokasi</h2>
            <div className="footer-contact-list">
              <a
                href={getWhatsAppUrl("Halo Aybisa Studio, saya ingin konsultasi proyek.")}
                target="_blank"
                rel="noreferrer"
                className="footer-contact-item"
              >
                <Icon name="whatsapp" />
                <span>{WA_PHONE_DISPLAY}</span>
              </a>
              <a
                href="mailto:halo@aybisa-workspace.my.id"
                className="footer-contact-item"
              >
                <Icon name="mail" />
                <span>halo@aybisa-workspace.my.id</span>
              </a>
              <a
                href="https://share.google/Uo3IS3zhWqORObOhs"
                target="_blank"
                rel="noreferrer"
                className="footer-contact-item footer-maps-link"
                title="Buka pin lokasi Aybisa Studio di Google Maps"
              >
                <Icon name="pin" />
                <span>Tangerang Selatan (Pin Google Maps)</span>
                <Icon name="external" />
              </a>
            </div>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© 2025 Aybisa Studio. Hak cipta dilindungi.</span>
          <span>
            <button
              type="button"
              onClick={() => setSitemapModalOpen(true)}
              className="footer-sitemap-btn"
            >
              Peta Situs
            </button>
            {" • "}
            <a
              href="/sitemap.xml"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-sitemap-link"
              title="File XML Peta Situs Resmi untuk Mesin Pencari"
            >
              sitemap.xml
            </a>
            {" • "}
            <span>Tangerang Selatan &amp; Remote seluruh Indonesia</span>
          </span>
          <span>aybisa-workspace.my.id</span>
        </div>
      </footer>

      <a
        href={getWhatsAppUrl("Halo Aybisa Studio, saya ingin konsultasi langsung via WhatsApp.")}
        target="_blank"
        rel="noreferrer"
        className="floating-whatsapp"
        aria-label={`Hubungi via WhatsApp ${WA_PHONE_DISPLAY}`}
      >
        <Icon name="whatsapp" />
        <span>Konsultasi WhatsApp</span>
      </a>

      {sitemapModalOpen && (
        <div
          className="sitemap-modal-backdrop"
          onClick={() => setSitemapModalOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="sitemap-modal-title"
        >
          <div
            className="sitemap-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sitemap-modal-header">
              <div>
                <h3 id="sitemap-modal-title">Peta Situs (Sitemap)</h3>
                <p style={{ margin: "4px 0 0", fontSize: "13px", color: "var(--muted)" }}>
                  Navigasi struktur lengkap halaman dan layanan Aybisa Studio
                </p>
              </div>
              <button
                type="button"
                className="sitemap-close-btn"
                aria-label="Tutup peta situs"
                onClick={() => setSitemapModalOpen(false)}
              >
                &times;
              </button>
            </div>

            <div className="sitemap-links-grid">
              <div className="sitemap-category">
                <h4>Halaman Utama</h4>
                <ul>
                  <li><a href="#beranda" onClick={() => setSitemapModalOpen(false)}>Beranda Utama</a></li>
                  <li><a href="#tentang" onClick={() => setSitemapModalOpen(false)}>Tentang Aybisa</a></li>
                  <li><a href="#layanan" onClick={() => setSitemapModalOpen(false)}>Daftar Layanan</a></li>
                  <li><a href="#portofolio" onClick={() => setSitemapModalOpen(false)}>Portofolio Proyek</a></li>
                  <li><a href="#harga" onClick={() => setSitemapModalOpen(false)}>Paket &amp; Harga</a></li>
                  <li><a href="#testimoni" onClick={() => setSitemapModalOpen(false)}>Testimoni Klien</a></li>
                  <li><a href="#proses" onClick={() => setSitemapModalOpen(false)}>Alur Kerjasama</a></li>
                  <li><a href="#lokasi" onClick={() => setSitemapModalOpen(false)}>Lokasi Google Maps</a></li>
                  <li><a href="#faq" onClick={() => setSitemapModalOpen(false)}>FAQ</a></li>
                  <li><a href="#konsultasi" onClick={() => setSitemapModalOpen(false)}>Konsultasi Gratis</a></li>
                </ul>
              </div>

              <div className="sitemap-category">
                <h4>Layanan Digital</h4>
                <ul>
                  <li><a href="#layanan" onClick={() => setSitemapModalOpen(false)}>Website Development</a></li>
                  <li><a href="#layanan" onClick={() => setSitemapModalOpen(false)}>UI/UX Design &amp; Branding</a></li>
                  <li><a href="#layanan" onClick={() => setSitemapModalOpen(false)}>Sistem Informasi Custom</a></li>
                  <li><a href="#layanan" onClick={() => setSitemapModalOpen(false)}>Dukungan &amp; Maintenance</a></li>
                </ul>
                <h4 style={{ marginTop: "18px" }}>Paket Website</h4>
                <ul>
                  <li><a href="#harga" onClick={() => setSitemapModalOpen(false)}>Website Sekolah (.sch.id)</a></li>
                  <li><a href="#harga" onClick={() => setSitemapModalOpen(false)}>Website UMKM (.my.id/.biz.id)</a></li>
                  <li><a href="#harga" onClick={() => setSitemapModalOpen(false)}>Website Perusahaan (.com/.id)</a></li>
                </ul>
              </div>

              <div className="sitemap-category">
                <h4>Kontak &amp; Lokasi</h4>
                <ul>
                  <li>
                    <a
                      href="https://share.google/Uo3IS3zhWqORObOhs"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Pin Google Maps Resmi ↗
                    </a>
                  </li>
                  <li>
                    <a
                      href={getWhatsAppUrl("Halo Aybisa Studio, saya ingin konsultasi dari halaman Peta Situs.")}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      WhatsApp ({WA_PHONE_DISPLAY}) ↗
                    </a>
                  </li>
                  <li>
                    <a href="mailto:halo@aybisa-workspace.my.id">
                      halo@aybisa-workspace.my.id
                    </a>
                  </li>
                </ul>
                <h4 style={{ marginTop: "18px" }}>Format Mesin Pencari</h4>
                <ul>
                  <li>
                    <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer">
                      XML Sitemap (sitemap.xml) ↗
                    </a>
                  </li>
                  <li>
                    <a href="/robots.txt" target="_blank" rel="noopener noreferrer">
                      Robots.txt ↗
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div style={{ marginTop: "24px", paddingTop: "16px", borderTop: "1px solid var(--border)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
              <span style={{ fontSize: "12px", color: "var(--muted)" }}>
                Peta situs resmi terdaftar: <code>https://aybisa-workspace.my.id/sitemap.xml</code>
              </span>
              <a
                href="/sitemap.xml"
                target="_blank"
                rel="noopener noreferrer"
                className="button button-secondary"
                style={{ minHeight: "38px", padding: "8px 16px", fontSize: "12px" }}
              >
                <span>Buka sitemap.xml</span>
                <Icon name="external" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
