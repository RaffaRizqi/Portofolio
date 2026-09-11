'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Download,
  ArrowLeft,
  Smartphone,
  ShieldCheck,
  Film,
  Tv,
  Sparkles,
  Zap,
  FolderDown,
  CheckCircle2,
  Copy,
  Check,
  Layers,
  Clock,
  EyeOff
} from 'lucide-react';
import styles from './rebaflix.module.css';

export default function RebaFlixPage() {
  const [copied, setCopied] = useState(false);

  const directDownloadUrl = 'https://porto.raffzdigital.biz.id/rebaflix.apk';

  const handleCopyLink = () => {
    navigator.clipboard.writeText(directDownloadUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const appSpecs = [
    { label: 'Nama File', value: 'rebaflix.apk' },
    { label: 'Ukuran APK', value: '30.6 MB' },
    { label: 'Kompatibilitas', value: 'Android 7.0+' },
    { label: 'Iklan', value: '0 (Tanpa Iklan)' }
  ];

  const features = [
    {
      icon: <EyeOff size={22} color="#121316" />,
      bg: '#fde047',
      title: '100% Tanpa Iklan',
      desc: 'Tidak ada iklan video pop-up atau banner yang mengganggu kenyamanan streaming dari awal hingga film selesai.'
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
      title: 'Server Cepat & HD Jernih',
      desc: 'Streaming lancar resolusi tinggi 720p & 1080p dengan server responsif, buffering minim walau di jaringan seluler.'
    },
    {
      icon: <Tv size={22} color="#121316" />,
      bg: '#fca5a5',
      title: 'Subtitle Indonesia Lengkap',
      desc: 'Dilengkapi takarir bahasa Indonesia yang akurat, sinkron, dan mudah dibaca langsung dari pemutar bawaan.'
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
      title: 'Ringan & Aman di HP',
      desc: 'File APK berukuran ramping 30 MB, hemat RAM dan tidak menguras daya baterai smartphone Android Anda.'
    }
  ];

  const installSteps = [
    {
      title: 'Download File APK',
      desc: 'Klik tombol Download di halaman ini untuk mengunduh file resmi rebaflix.apk ke smartphone Android Anda.'
    },
    {
      title: 'Buka File yang Diunduh',
      desc: 'Tarik bar notifikasi atas atau buka aplikasi File Manager pada folder Download, lalu ketuk file rebaflix.apk.'
    },
    {
      title: 'Izinkan Instalasi Sumber Tidak Dikenal',
      desc: 'Bila muncul jendela keamanan Android, pilih Pengaturan lalu aktifkan opsi "Izinkan dari sumber ini" (Install Unknown Apps).'
    },
    {
      title: 'Tekan Pasang & Buka Aplikasi',
      desc: 'Tekan tombol Instal, tunggu hitungan detik hingga selesai, dan nikmati streaming film gratis sepuasnya tanpa iklan!'
    }
  ];

  const faqs = [
    {
      q: 'Apakah RebaFlix memerlukan akun atau biaya langganan?',
      a: 'Tidak. RebaFlix dapat langsung digunakan 100% gratis tanpa perlu registrasi akun atau biaya langganan bulanan.'
    },
    {
      q: 'Kenapa aplikasi ini berbentuk APK dan tidak di Play Store?',
      a: 'RebaFlix didistribusikan secara mandiri oleh pengembang (Raffa Rizqi) langsung dalam format paket instalasi Android (.apk) agar pengguna dapat langsung mengunduh versi rilis publik tanpa batasan pihak ketiga.'
    },
    {
      q: 'Apakah aman dipasang di HP Android?',
      a: 'Ya, file rebaflix.apk bersih dari script berbahaya, virus, maupun iklan jebakan pihak ketiga.'
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
          <a href="/rebaflix.apk" download="rebaflix.apk" className={styles.headerDownloadBtn}>
            <Download size={15} />
            <span>Download APK</span>
          </a>
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
                  <Sparkles size={14} /> 100% Gratis Tanpa Iklan
                </span>
              </div>

              <h1 className={styles.heroTitle}>
                Nonton Film &amp; Series <span className={styles.titleHighlight}>Gratis Tanpa Iklan</span> di Android.
              </h1>

              <p className={styles.heroDesc}>
                <strong>RebaFlix</strong> adalah aplikasi mobile streaming Android untuk nonton ribuan film box office, serial TV, drama, dan anime berkualitas HD jernih dengan takarir bahasa Indonesia lengkap, tanpa interupsi iklan yang mengganggu.
              </p>

              {/* Direct Download Link Box */}
              <div className={styles.linkCard}>
                <div>
                  <div className={styles.linkLabel}>Link Download Langsung (Direct URL)</div>
                  <div className={styles.linkUrlText}>{directDownloadUrl}</div>
                </div>
                <button
                  type="button"
                  onClick={handleCopyLink}
                  className={styles.copyBtn}
                  aria-label="Salin link download"
                >
                  {copied ? (
                    <>
                      <Check size={14} color="#16a34a" /> Tersalin!
                    </>
                  ) : (
                    <>
                      <Copy size={14} /> Salin Link
                    </>
                  )}
                </button>
              </div>

              {/* Download CTA Group */}
              <div className={styles.ctaGroup}>
                <a href="/rebaflix.apk" download="rebaflix.apk" className={styles.btnDownloadMain}>
                  <Download size={20} />
                  <span>Download rebaflix.apk (30.6 MB)</span>
                </a>
                <a href="#panduan" className={styles.btnGuide}>
                  <FolderDown size={17} />
                  <span>Panduan Pasang</span>
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
                  <CheckCircle2 size={16} color="#121316" />
                  <span>v1.0.0 Publik Rilis</span>
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

      {/* Key Features Section */}
      <section className={styles.featuresSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Keunggulan Utama RebaFlix</h2>
          <p className={styles.sectionSubtitle}>
            Dibangun dengan fokus pada pengalaman menonton yang nyaman, bersih dari iklan, dan lancar di berbagai perangkat Android.
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

      {/* Installation Guide Section */}
      <section id="panduan" className={styles.guideSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Cara Pasang APK di HP Android</h2>
          <p className={styles.sectionSubtitle}>
            Ikuti 4 langkah mudah berikut untuk menginstal file rebaflix.apk secara mandiri.
          </p>

          <div className={styles.stepsList}>
            {installSteps.map((step, idx) => (
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
            Informasi lengkap seputar ketersediaan dan keamanan aplikasi RebaFlix.
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
          <h3>Mulai Nonton Film Favoritmu Sekarang</h3>
          <p>
            Unduh RebaFlix sekarang juga dan rasakan sensasi streaming tanpa gangguan iklan, gratis selamanya di Android kamu.
          </p>
          <div className={styles.bottomBtnGroup}>
            <a href="/rebaflix.apk" download="rebaflix.apk" className={styles.bottomBtnDownload}>
              <Download size={18} />
              <span>Download rebaflix.apk</span>
            </a>
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
          <p style={{ marginTop: '0.35rem', fontSize: '0.82rem' }}>
            Link Download Resmi: <code>porto.raffzdigital.biz.id/rebaflix.apk</code>
          </p>
        </div>
      </footer>
    </div>
  );
}
