import { SERVICES } from '../../data';
import styles from './sections.module.css';
import { Reveal } from '../ui/Reveal';
import { TextReveal } from '../ui/TextReveal';

const PROCESS = [
  { step: '01', title: 'Diskusi & Brief', desc: 'Memahami kebutuhan website, fitur yang diinginkan, serta referensi tampilan.' },
  { step: '02', title: 'Desain & Slicing UI', desc: 'Menata tata letak UI di Figma dan melakukan slicing komponen yang rapi untuk HP dan desktop.' },
  { step: '03', title: 'Coding & Integrasi', desc: 'Membangun website dengan React/Next.js, TypeScript, serta menghubungkan API & Database.' },
  { step: '04', title: 'Testing & Launch', desc: 'Memastikan tidak ada error, testing tampilan di smartphone, dan deploy ke Vercel.' }
];

export function ServicesSection() {
  return (
    <section id="services" className={styles.section}>
      <div className={styles.container}>
        <Reveal variant="slide-up">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className={styles.eyebrow}>LAYANAN &amp; KEAHLIAN</span>
            <TextReveal text="Apa Yang Bisa Saya Pengerjakan?" className={styles.sectionTitle} charDelay={45} />
          </div>
        </Reveal>
        
        <div className={`${styles.grid3} ${styles.servicesGrid}`}>
          {SERVICES.map((service, i) => (
            <Reveal key={i} delay={i * 100} variant="slide-up">
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>
                  {service.icon}
                </div>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardDesc}>{service.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
        
        <Reveal delay={200} variant="slide-up">
          <div className={styles.processPanel}>
            <div className={styles.processHeader}>
              <span className={styles.eyebrow}>ALUR PENGERJAAN</span>
              <h3>Alur Kerja dari Ide Sampai Website Aktif di Production</h3>
            </div>
            <div className={styles.processGrid}>
              {PROCESS.map((item, i) => (
                <Reveal key={item.step} delay={250 + i * 80} variant="slide-up">
                  <div className={styles.processItem}>
                    <span>{item.step}</span>
                    <strong>{item.title}</strong>
                    <p>{item.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
