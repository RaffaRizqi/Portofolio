import Image from 'next/image';
import { Download, FileText } from 'lucide-react';
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
          text="HTML5 — CSS3 — JavaScript — TypeScript — React — Next.js 14 — Tailwind CSS — Node.js — Supabase — Git — Figma"
          baseSpeed={0.8}
          className={styles.velocityMarquee}
        />
      </div>

      <div className={`${styles.container} ${styles.gridAbout}`}>
        <Reveal variant="slide-up" duration={1200}>
          <div className={styles.aboutTextMobile}>
            <span className={styles.eyebrow}>TENTANG SAYA</span>
            <TextReveal text="Building Simple &amp; Effective Web Apps." className={styles.sectionTitle} charDelay={40} />
            <p className={styles.desc}>
              Saya adalah Full Stack Developer dari Tasikmalaya. Saya berpengalaman mengutak-atik tampilan web hingga membangun backend REST API dan database menggunakan React, Next.js, Vue, Laravel, TypeScript, dan MySQL/Supabase. Selalu antusias belajar hal baru dan menyelesaikan proyek sampai benar-benar aktif di production.
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
                  <span className={styles.statNumber}>100%</span>
                  <span className={styles.statLabel}>Responsive HP &amp;<br/>Tampilan Rapi</span>
                </div>
              </Reveal>
              <Reveal delay={300} variant="scale">
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>3+ Thn</span>
                  <span className={styles.statLabel}>Pengalaman<br/>Belajar Coding</span>
                </div>
              </Reveal>
            </div>

            <Reveal delay={400}>
              <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href="/cv.html" className={styles.cvBtn} style={{ background: 'linear-gradient(135deg, #2563eb, #0284c7)', color: '#ffffff' }}>
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
              <Image src="/profile.jpg" alt="Profile Raffa Rizqi" fill priority unoptimized className={styles.profileImg} />
            </div>
          </Reveal>
        </ParallaxSection>
      </div>
    </section>
  );
}
