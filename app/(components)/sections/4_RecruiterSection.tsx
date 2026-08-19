import Image from 'next/image';
import { ArrowUpRight, BookOpenCheck, BriefcaseBusiness, CheckCircle2, Download, Github, Languages, MessageCircle, Rocket, Smartphone, Workflow } from 'lucide-react';
import styles from './sections.module.css';
import { Reveal } from '../ui/Reveal';
import { TextReveal } from '../ui/TextReveal';

const WHATSAPP_URL = 'https://wa.me/62895622494773?text=Halo%20Raffa,%20saya%20tertarik%20dengan%20profil%20Full%20Stack%20Developer%20dan%20CV%20kamu';
const GITHUB_URL = 'https://github.com/RaffaRizqi';
const SMM_URL = 'https://www.rebamedia.my.id';

const WHY_HIRE = [
  {
    icon: <Workflow />,
    title: 'Eksekusi Full Stack End-to-End',
    desc: 'Mampu mengerjakan dari UI/UX mockup, slicing responsive, backend REST API & database, sampai deploy ke Vercel.'
  },
  {
    icon: <Smartphone />,
    title: 'Fokus Responsive & Performa',
    desc: 'Tampilan di smartphone dan desktop dipikirkan matang agar tetap cepat, ringan, dan nyaman dipakai user.'
  },
  {
    icon: <Rocket />,
    title: 'Stack Modern & Kode Rapi',
    desc: 'Terbiasa menggunakan Next.js 14, React, Vue, Laravel, TypeScript, MySQL, dan Supabase dengan struktur teratur.'
  },
  {
    icon: <Languages />,
    title: 'Mandarin HSK 5 & Komunikasi Luas',
    desc: 'Fasih Bahasa Mandarin (HSK 5) dan Bahasa Inggris teknis untuk kolaborasi tim lokal maupun internasional.'
  }
];

const CASE_STUDY = [
  {
    label: 'Kebutuhan Proyek',
    text: 'Membangun web app SMM panel yang cepat, ringan di HP, dan bisa menangani transaksi pesanan otomatis 24/7.'
  },
  {
    label: 'Fitur Utama',
    text: 'Next.js 14, Supabase Auth & Database, QRIS Payment Gateway Callback, dan integrasi API reseller.'
  },
  {
    label: 'Pengerjaan Full Stack',
    text: 'Slicing UI responsive, integrasi REST API & webhook payment, manajemen database, dan deployment ke Vercel.'
  },
  {
    label: 'Hasil Live',
    text: 'Aplikasi aktif di produksi, responsif, aman, dan siap dikembangkan lebih jauh.'
  }
];

const ROLE_TAGS = ['Full Stack', 'Next.js 14', 'React', 'Vue.js', 'Laravel', 'TypeScript', 'MySQL', 'Supabase', 'REST API', 'Mandarin HSK 5'];
const CURRENTLY_LEARNING = ['TypeScript Lanjutan', 'Arsitektur Backend', 'System Design Simple', 'Testing & CI/CD'];

export function RecruiterSection() {
  return (
    <section id="hire" className={`${styles.section} ${styles.recruiterSection}`}>
      <div className={styles.container}>
        <Reveal variant="slide-up">
          <div className={styles.recruiterHeader}>
            <span className={styles.eyebrow}>FOR RECRUITERS &amp; CLIENTS</span>
            <TextReveal text="Kenapa Memilih Saya Sebagai Full Stack Developer?" className={styles.sectionTitle} charDelay={35} />
            <p className={styles.desc} style={{ margin: '0 auto' }}>
              Saya fokus membangun website dan web app yang rapi, responsif, dan siap langsung dipakai untuk kebutuhan produk atau bisnis Anda.
            </p>
          </div>
        </Reveal>

        <div className={styles.hireGrid}>
          {WHY_HIRE.map((item, i) => (
            <Reveal key={item.title} delay={i * 100} variant="slide-up">
              <div className={styles.hireCard}>
                <div className={styles.hireIcon}>{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200} variant="slide-up">
          <div className={styles.caseStudyPanel}>
            <div className={styles.caseStudyMedia}>
              <Image
                src="/raffzsmm-preview.png"
                alt="RebaMedia Full Stack Case Study Preview"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className={styles.caseStudyImage}
              />
            </div>
            <div className={styles.caseStudyContent}>
              <span className={styles.eyebrow}>CASE STUDY REAL</span>
              <h3>RebaMedia (Web App SMM Panel)</h3>
              <p>
                Contoh web app produksi yang saya bangun secara end-to-end, mulai dari antarmuka responsive sampai integrasi payment gateway dan backend.
              </p>

              <div className={styles.caseStudySteps}>
                {CASE_STUDY.map((step) => (
                  <div key={step.label} className={styles.caseStudyStep}>
                    <CheckCircle2 size={18} />
                    <div>
                      <strong>{step.label}</strong>
                      <span>{step.text}</span>
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
                  <BookOpenCheck size={16} /> Sedang Saya Dalami Saat Ini:
                </div>
                <div className={styles.learningTags}>
                  {CURRENTLY_LEARNING.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>

              <div className={styles.recruiterActions}>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={styles.recruiterPrimary}>
                  <MessageCircle size={16} /> Rekrut / Hubungi Saya
                </a>
                <a href="/cv.html" className={styles.recruiterSecondary}>
                  <Download size={16} /> Buka CV Format ATS
                </a>
                <a href={SMM_URL} target="_blank" rel="noopener noreferrer" className={styles.recruiterSecondary}>
                  Cek Web Live <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
