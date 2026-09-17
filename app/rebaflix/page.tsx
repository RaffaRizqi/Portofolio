import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowLeft,
  Smartphone,
  ShieldCheck,
  Film,
  Tv,
  Zap,
  Layers,
  CircleCheck,
  EyeOff,
  Download
} from 'lucide-react';
import styles from './rebaflix.module.css';
import { PublicDownloadStats } from './PublicDownloadStats';
import { TrackedDownloadLink } from './TrackedDownloadLink';

export default function RebaFlixPage() {
  const appSpecs = [
    { label: 'Status Distribusi', value: 'v1.3.0 Tersedia' },
    { label: 'Versi Terbaru', value: '1.3.0 (Code 5)' },
    { label: 'Kompatibilitas', value: 'Android 8.0+' },
    { label: 'Build', value: 'R8 · Non-debuggable' }
  ];

  const features = [
    {
      icon: <EyeOff size={22} color="#121316" />,
      bg: '#fde047',
      title: 'Pengalaman Menonton Bersih',
      desc: 'Antarmuka dirancang agar fokus tetap berada pada film dan serial, tanpa elemen promosi yang menutupi pemutar.'
    },
    {
      icon: <Film size={22} color="#121316" />,
      bg: '#86efac',
      title: 'Katalog Bioskop & Series',
      desc: 'Update film bioskop lokal & internasional, Drama Korea (Drakor), Anime, Thriller, Komedi, dan serial populer dunia.'
    },
    {
      icon: <Zap size={22} color="#121316" />,
      bg: '#93c5fd',
      title: 'Pemutar Video Adaptif',
      desc: 'Pemutar mendukung beberapa pilihan kualitas video dan kontrol playback untuk menyesuaikan kondisi jaringan.'
    },
    {
      icon: <Tv size={22} color="#121316" />,
      bg: '#fca5a5',
      title: 'Dukungan Subtitle Indonesia',
      desc: 'Tampilan pemutar dirancang untuk menampilkan takarir bahasa Indonesia yang mudah dibaca.'
    },
    {
      icon: <Layers size={22} color="#121316" />,
      bg: '#fbcfe8',
      title: 'Kategori Genre & Watchlist',
      desc: 'Pilah film berdasarkan genre favorit dan simpan judul ke daftar tontonan (Watchlist) untuk maraton nanti.'
    },
    {
      icon: <ShieldCheck size={22} color="#121316" />,
      bg: '#c4b5fd',
      title: 'Build Android Transparan',
      desc: 'Versi 1.3.0 berukuran 11.1 MB, sudah dioptimasi dengan R8, dan non-debuggable. Detail signature serta izin aplikasi ditampilkan terbuka.'
    }
  ];

  const releaseChecks = [
    {
      title: 'Production signing',
      desc: 'APK harus ditandatangani dengan release key yang terlindungi, bukan sertifikat Android Debug.'
    },
    {
      title: 'Non-debuggable build — terpenuhi',
      desc: 'Konfigurasi debug sudah dinonaktifkan pada artifact v1.3.0 yang tersedia saat ini.'
    },
    {
      title: 'Permission review',
      desc: 'Izin sensitif yang tidak dibutuhkan, termasuk kemampuan memasang paket lain, harus dihapus dari manifest.'
    },
    {
      title: 'Artifact yang tersedia',
      desc: 'Versi 1.3.0 (code 5), Android 8.0+, ukuran 11.1 MB, dan SHA-256 D6CFC5CF…699AB338.'
    }
  ];

  const faqs = [
    {
      q: 'Build apa yang tersedia untuk diunduh?',
      a: 'RebaFlix v1.3.0 (versionCode 5), build release teroptimasi berukuran 11.1 MB dan non-debuggable.'
    },
    {
      q: 'Apakah ini sudah menjadi rilis production?',
      a: 'Belum sepenuhnya. APK masih ditandatangani dengan sertifikat Android Debug, sehingga belum dapat disebut production-signed.'
    },
    {
      q: 'Apa yang perlu diperhatikan sebelum instalasi?',
      a: 'Unduh hanya dari halaman resmi ini. Android dapat menampilkan peringatan karena APK dipasang dari luar Play Store. Artifact juga masih meminta izin REQUEST_INSTALL_PACKAGES.'
    }
  ];

  return (
    <div className={styles.pageWrapper}>
      {/* Header Bar */}
      <header className={styles.header}>
        <div className={`${styles.container} ${styles.headerInner}`}>
          <Link href="/" className={styles.backLink}>
            <ArrowLeft size={16} />
            <span>Portofolio Raffa</span>
          </Link>
          <div className={styles.brandBadge}>
            <span>REBAFLIX</span>
            <span style={{ color: '#e11d48' }}>.</span>
          </div>
          <TrackedDownloadLink source="header" className={styles.headerDownloadBtn}>
            <Download size={15} />
            <span>Download APK</span>
          </TrackedDownloadLink>
        </div>
      </header>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroGrid}>
            <div>
              <div className={styles.heroBadges}>
                <span className={styles.badgeAndroid}>
                  <Smartphone size={14} /> Android App
                </span>
                <span className={styles.badgeFree}>
                  <ShieldCheck size={14} /> Release Build v1.3.0
                </span>
              </div>

              <h1 className={styles.heroTitle}>
                RebaFlix untuk Android. <span className={styles.titleHighlight}>Versi 1.3.0 Sudah Tersedia.</span>
              </h1>

              <p className={styles.heroDesc}>
                <strong>RebaFlix</strong> adalah aplikasi Android untuk menonton film dan series dengan subtitle Indonesia. Versi terbaru kini lebih ringan, non-debuggable, dan dioptimasi dengan R8.
              </p>

              <div className={styles.releaseNotice} role="status">
                <CircleCheck size={19} aria-hidden="true" />
                <div>
                  <strong>Update v1.3.0 siap diunduh</strong>
                  <span>11.1 MB · Android 8.0+ · versionCode 5</span>
                </div>
              </div>

              {/* Download CTA Group */}
              <div className={styles.ctaGroup}>
                <TrackedDownloadLink source="hero" className={styles.btnDownloadMain}>
                  <Download size={20} />
                  <span>Download APK v1.3.0 (11.1 MB)</span>
                </TrackedDownloadLink>
                <a href="#status-rilis" className={styles.btnGuide}>
                  <ShieldCheck size={17} />
                  <span>Baca Catatan Instalasi</span>
                </a>
              </div>
            </div>

            {/* Visual Mockup */}
            <div className={styles.mockupWrapper}>
              <div className={styles.mockupCard}>
                <div className={styles.mockupImageContainer}>
                  <Image
                    src="/rebaflix-preview.png"
                    alt="Antarmuka Aplikasi Android RebaFlix"
                    fill
                    sizes="(min-width: 900px) 380px, 90vw"
                    className={styles.mockupImage}
                    priority
                  />
                </div>
                <div className={styles.mockupBadgeFloating}>
                  <CircleCheck size={16} color="#121316" />
                  <span>v1.3.0 · 11.1 MB</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Specs Section */}
      <section className={styles.specsSection}>
        <div className={styles.container}>
          <div className={styles.specsGrid}>
            {appSpecs.map((spec) => (
              <div key={spec.label} className={styles.specCard}>
                <div className={styles.specLabel}>{spec.label}</div>
                <div className={styles.specValue}>{spec.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PublicDownloadStats />

      {/* Key Features Section */}
      <section className={styles.featuresSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Rancangan Produk RebaFlix</h2>
          <p className={styles.sectionSubtitle}>
            Fitur utama dalam build RebaFlix v1.3.0 untuk pengalaman menonton di perangkat Android.
          </p>

          <div className={styles.featuresGrid}>
            {features.map((feat) => (
              <div key={feat.title} className={styles.featureCard}>
                <div className={styles.featureIconBox} style={{ backgroundColor: feat.bg }}>
                  {feat.icon}
                </div>
                <h3 className={styles.featureTitle}>{feat.title}</h3>
                <p className={styles.featureText}>{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Release Review Section */}
      <section id="status-rilis" className={styles.guideSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Catatan Sebelum Menginstal</h2>
          <p className={styles.sectionSubtitle}>
            Build release teroptimasi sudah dapat diunduh. Detail berikut menjelaskan apa yang sudah terpenuhi dan apa yang masih perlu ditingkatkan.
          </p>

          <div className={styles.stepsList}>
            {releaseChecks.map((step, idx) => (
              <div key={step.title} className={styles.stepItem}>
                <div className={styles.stepNum}>{idx + 1}</div>
                <div className={styles.stepContent}>
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={styles.faqSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Pertanyaan yang Sering Diajukan</h2>
          <p className={styles.sectionSubtitle}>
            Informasi transparan tentang status distribusi aplikasi RebaFlix.
          </p>

          <div className={styles.faqGrid}>
            {faqs.map((faq) => (
              <div key={faq.q} className={styles.faqCard}>
                <h3 className={styles.faqQuestion}>{faq.q}</h3>
                <p className={styles.faqAnswer}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <div className={styles.container}>
        <div className={styles.bottomBanner}>
          <h3>RebaFlix v1.3.0 Sudah Tersedia</h3>
          <p>
            Download build terbaru yang lebih ringan melalui halaman resmi ini. Periksa catatan instalasi sebelum memasang APK.
          </p>
          <div className={styles.bottomBtnGroup}>
            <TrackedDownloadLink source="bottom" className={styles.bottomBtnDownload}>
              <Download size={18} />
              <span>Download APK v1.3.0</span>
            </TrackedDownloadLink>
            <Link href="/" className={styles.bottomBtnBack}>
              <ArrowLeft size={16} />
              <span>Kembali ke Portofolio</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.container}>
          <p>
            RebaFlix &bull; Dikembangkan oleh <strong>Raffa Rizqi Ramdani</strong> (Full Stack &amp; Mobile Developer)
          </p>
        </div>
      </footer>
    </div>
  );
}
