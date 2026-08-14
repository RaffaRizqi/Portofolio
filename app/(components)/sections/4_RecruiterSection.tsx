import Image from 'next/image';
import { ArrowUpRight, BookOpenCheck, BriefcaseBusiness, CheckCircle2, Download, Github, MessageCircle, Rocket, Smartphone, Workflow } from 'lucide-react';
import styles from './sections.module.css';
import { Reveal } from '../ui/Reveal';
import { TextReveal } from '../ui/TextReveal';

const WHATSAPP_URL = 'https://wa.me/62895622494773?text=Halo%20Raffa,%20saya%20tertarik%20dengan%20profil%20dan%20CV%20kamu';
const GITHUB_URL = 'https://github.com/RaffaRizqi';
const SMM_URL = 'https://www.rebamedia.my.id';

const WHY_HIRE = [
  {
    icon: <Workflow />,
    title: 'Bisa Kerja End-to-End',
    desc: 'Dari slicing UI, responsive HP, integrasi API & Auth, sampai deploy ke Vercel.'
  },
  {
    icon: <Smartphone />,
    title: 'Fokus Responsive HP',
    desc: 'Tampilan di HP dan laptop dipikirkan matang agar tetap nyaman dan cepat saat dipakai user.'
  },
  {
    icon: <Rocket />,
    title: 'Eksekusi Cepat & Kode Rapi',
    desc: 'Terbiasa pakai React, Next.js, TypeScript, dan Tailwind CSS dengan struktur file teratur.'
  },
  {
    icon: <BriefcaseBusiness />,
    title: 'Paham Kebutuhan Produk',
    desc: 'Bukan cuma bikin tampilan, tapi paham alur transaksi, payment callback, dan kenyamanan user.'
  }
];

const CASE_STUDY = [
  {
    label: 'Kebutuhan Proyek',
    text: 'Membuat web app SMM panel yang cepat, ringan di HP, dan bisa menangani transaksi pesanan otomatis.'
  },
  {
    label: 'Fitur Utama',
    text: 'Next.js 14, Supabase Auth & Database, QRIS Payment Gateway Callback, dan API reseller.'
  },
  {
    label: 'Pengerjaan Saya',
    text: 'Slicing UI responsive, integrasi API & Auth, rapikan copywriting, dan deployment ke Vercel.'
  },
  {
    label: 'Hasil Live',
    text: 'Aplikasi aktif di produksi, responsif, dan siap dikembangkan lebih jauh.'
  }
];

const ROLE_TAGS = ['React', 'Next.js 14', 'TypeScript', 'Tailwind CSS', 'Supabase', 'REST API', 'Vercel'];
const CURRENTLY_LEARNING = ['TypeScript Lanjutan', 'Arsitektur Backend', 'System Design Simple', 'Testing Code'];

export function RecruiterSection() {
  return (
    <section id="hire" className={`${styles.section} ${styles.recruiterSection}`}>
      <div className={styles.container}>
        <Reveal variant="slide-up">
          <div className={styles.recruiterHeader}>
            <span className={styles.eyebrow}>FOR RECRUITERS &amp; RECRUITMENT</span>
            <TextReveal text="Kenapa Memilih Saya?" className={styles.sectionTitle} charDelay={50} />
            <p className={styles.desc}>
              Saya fokus membangun website dan web app yang rapi, responsif, dan langsung siap dipakai untuk kebutuhan tim atau bisnis Anda.
            </p>
          </div>
        </Reveal>

        <div className={styles.hireGrid}>
          {WHY_HIRE.map((item, index) => (
            <Reveal key={item.title} delay={index * 80} variant="slide-up">
              <div className={styles.hireCard}>
                <div className={styles.hireIcon}>{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={100} variant="slide-up">
          <div className={styles.caseStudyPanel}>
            <div className={styles.caseStudyMedia}>
              <Image
                src="/raffzsmm-preview.png"
                alt="RebaMedia web application"
                fill
                sizes="(min-width: 1024px) 42vw, 100vw"
                className={styles.caseStudyImage}
              />
            </div>

            <div className={styles.caseStudyContent}>
              <span className={styles.eyebrow}>CONTOH PROYEK UTAMA</span>
              <h3>RebaMedia: Web App SMM Panel</h3>
              <p>
                Bukti pengerjaan proyek web live: autentikasi akun, modul deposit QRIS otomatis, API provider reseller, dan dashboard transaksi yang simpel.
              </p>

              <div className={styles.caseStudySteps}>
                {CASE_STUDY.map((item) => (
                  <div key={item.label} className={styles.caseStudyStep}>
                    <CheckCircle2 size={18} />
                    <div>
                      <strong>{item.label}</strong>
                      <span>{item.text}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className={styles.roleTags}>
                {ROLE_TAGS.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <div className={styles.learningBox}>
                <div className={styles.learningTitle}>
                  <BookOpenCheck size={18} />
                  <strong>Sedang Dipelajari</strong>
                </div>
                <div className={styles.learningTags}>
                  {CURRENTLY_LEARNING.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>

              <div className={styles.recruiterActions}>
                <a href="/cv.html" className={styles.recruiterPrimary} style={{ background: 'linear-gradient(135deg, #2563eb, #0284c7)' }}>
                  Lihat / Download CV <Download size={16} />
                </a>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={styles.recruiterSecondary}>
                  Diskusi via WA <MessageCircle size={16} />
                </a>
                <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className={styles.recruiterSecondary}>
                  GitHub RaffaStore <Github size={16} />
                </a>
                <a href={SMM_URL} target="_blank" rel="noopener noreferrer" className={styles.recruiterSecondary}>
                  Buka RebaMedia <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
