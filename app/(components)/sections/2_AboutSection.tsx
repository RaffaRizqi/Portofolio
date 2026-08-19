import Image from 'next/image';
import { Download, FileText, Globe2 } from 'lucide-react';
import { SKILLS } from '../../data';
import styles from './sections.module.css';
import { Reveal } from '../ui/Reveal';
import { ScrollVelocityText } from '../ui/ScrollVelocityText';
import { TextReveal } from '../ui/TextReveal';
import { ParallaxSection } from '../ui/ParallaxSection';

export function AboutSection() {
  const duplicatedSkills = [...SKILLS, ...SKILLS, ...SKILLS, ...SKILLS];

  return (
    <section id="about" className={styles.section}>
      {/* Velocity-based skill marquee */}
      <div style={{ marginBottom: '3rem', overflow: 'hidden' }}>
        <ScrollVelocityText
          text="Next.js 14 — React — Laravel — Vue.js — TypeScript — Node.js — MySQL — Supabase — REST API — Mandarin HSK 5 — Git — Tailwind CSS"
          baseSpeed={0.8}
          className={styles.velocityMarquee}
        />
      </div>

      <div className={`${styles.container} ${styles.gridAbout}`}>
        <Reveal variant="slide-up" duration={1200}>
          <div className={styles.aboutTextMobile}>
            <span className={styles.eyebrow}>TENTANG SAYA</span>
            <TextReveal text="Building Reliable Full Stack Web Apps." className={styles.sectionTitle} charDelay={40} />
            <p className={styles.desc}>
              Saya adalah <strong>Full Stack Developer</strong> dari Tasikmalaya yang berpengalaman membangun solusi web lengkap dari nol: mulai dari perancangan antarmuka responsif di Figma, slicing komponen React/Next.js/Vue, hingga arsitektur backend REST API dan database <strong>Laravel, Node.js, MySQL, dan Supabase</strong>.
            </p>
            <p className={styles.desc} style={{ marginTop: '-1rem' }}>
              Didukung kemampuan komunikasi multibahasa dengan <strong>Bahasa Mandarin (HSK 5 / Fluent Professional)</strong> serta Bahasa Inggris teknis untuk kolaborasi tim dan klien skala internasional.
            </p>
            
            <div className={styles.statsGrid}>
              <Reveal delay={100} variant="scale">
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>15+</span>
                  <span className={styles.statLabel}>Proyek Web<br/>Diselesaikan</span>
                </div>
              </Reveal>
              <Reveal delay={200} variant="scale">
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>Full Stack</span>
                  <span className={styles.statLabel}>Frontend, API &amp;<br/>Database MySQL</span>
                </div>
              </Reveal>
              <Reveal delay={300} variant="scale">
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>HSK 5</span>
                  <span className={styles.statLabel}>Kemahiran<br/>Bahasa Mandarin</span>
                </div>
              </Reveal>
            </div>

            <Reveal delay={400}>
              <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href="/cv.html" className={styles.cvBtn} style={{ background: '#fde047', color: '#121316', border: '2.5px solid #121316' }}>
                  <FileText size={18} /> Lihat CV Format ATS
                </a>
                <a href="/cv.html" className={styles.cvBtn}>
                  <Download size={18} /> Download CV
                </a>
              </div>
            </Reveal>
          </div>
          <div className={styles.marqueeContainer}>
            <div className={styles.marqueeContent}>
              {duplicatedSkills.map((skill, index) => ( 
                <div key={index} className={styles.marqueeTag}>
                  <Image src={skill.icon} alt={skill.name} width={32} height={32} unoptimized className={styles.skillIcon} />
                  {skill.name}
                </div>
              ))}
            </div>
          </div>
          <div className={styles.mobileSkillGrid}>
            {SKILLS.map((skill) => (
              <div key={skill.name} className={styles.mobileSkillTag}>
                <Image src={skill.icon} alt={skill.name} width={28} height={28} unoptimized className={styles.skillIcon} />
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <ParallaxSection speed={-0.12}>
          <Reveal variant="scale" delay={200}>
            <div className={styles.profileBox}>
              <Image src="/profile.jpg" alt="Raffa Rizqi Ramdani - Full Stack Developer" fill priority unoptimized className={styles.profileImg} />
            </div>
          </Reveal>
        </ParallaxSection>
      </div>
    </section>
  );
}
