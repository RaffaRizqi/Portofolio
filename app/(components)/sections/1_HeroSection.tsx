'use client';
import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Download, MessageCircle, Globe2 } from 'lucide-react';
import styles from './sections.module.css';
import { Magnetic } from '../ui/Magnetic';
import { ParallaxSection } from '../ui/ParallaxSection';

const ROLES = [
  'Full Stack Developer',
  'Next.js 14 & React Builder',
  'Laravel & REST API Engineer',
  'Full Stack Web App Developer',
  'TypeScript & Database Specialist'
];

export function HeroSection() {
  const [typedRole, setTypedRole] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const boxRef = useRef<HTMLDivElement>(null);

  const whatsappUrl = 'https://wa.me/62895622494773?text=Halo%20Raffa,%20saya%20tertarik%20dengan%20portfolio%20kamu';
  const heroStats = [
    { value: '15+', label: 'Web diselesaikan' },
    { value: '100%', label: 'Responsive HP' },
    { value: 'HSK 5', label: 'Mandarin Fluent' }
  ];
  const heroPills = ['Next.js 14', 'React', 'Laravel', 'Vue.js', 'TypeScript', 'MySQL', 'Supabase', 'Mandarin HSK 5'];
  const showcaseProjects = [
    { name: 'RebaSIM', image: '/rebasim-preview.png', label: 'OTP Wallet' },
    { name: 'RebaMedia', image: '/raffzsmm-preview.png', label: 'SMM Panel' }
  ];

  // Infinite looping typewriter effect for the role title
  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting) {
      if (typedRole.length < currentRole.length) {
        timeout = setTimeout(() => {
          setTypedRole(currentRole.slice(0, typedRole.length + 1));
        }, 75);
      } else {
        // Finished typing word, pause before deleting
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 1800);
      }
    } else {
      if (typedRole.length > 0) {
        timeout = setTimeout(() => {
          setTypedRole(currentRole.slice(0, typedRole.length - 1));
        }, 40);
      } else {
        // Finished deleting, move to next role
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % ROLES.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [typedRole, isDeleting, roleIndex]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!boxRef.current) return;
    const rect = boxRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;
    boxRef.current.style.transition = 'none';
    boxRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01, 1.01, 1.01)`;
  };

  const handleMouseLeave = () => {
    if (!boxRef.current) return;
    boxRef.current.style.transition = 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)';
    boxRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  };

  return (
    <section className={styles.hero}>
      <div className={`${styles.container} ${styles.grid2}`}>
        <div>
          <div className={styles.badge}>
            <span className={styles.dot}></span>
            <span>Open for Full Stack Developer Jobs &amp; Freelance</span>
          </div>
          
          <h1 className={styles.title}>
            Halo, saya Raffa,
            <br />
            <span className={styles.gradientText}>
              {typedRole}
              <span className={styles.cursor}>|</span>
            </span>
          </h1>

          <p className={styles.desc}>
            Saya adalah <strong>Full Stack Developer</strong> dari Tasikmalaya yang fokus membangun website dan web app modern secara end-to-end berbasis <strong>React, Next.js 14, Vue, Laravel, TypeScript, MySQL, dan Supabase</strong>. Siap menangani UI responsive, integrasi REST API, database, pembayaran otomatis, dan memiliki kemahiran <strong>Bahasa Mandarin (HSK 5)</strong>.
          </p>

          <div className={styles.heroPills}>
            {heroPills.map((pill) => (
              <span key={pill}>
                {pill}
              </span>
            ))}
          </div>

          <div className={styles.btnGroup}>
            <Magnetic>
              <a href="/cv.html" className={styles.btnPrimary}>
                <Download size={16} /> Lihat / Download CV
              </a>
            </Magnetic>
            <Magnetic>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={styles.btnSecondary}>
                Chat WhatsApp <MessageCircle size={16} />
              </a>
            </Magnetic>
            <Magnetic>
              <a href="#portfolio" className={styles.btnSecondary}>
                Proyek Saya <ArrowRight size={16} />
              </a>
            </Magnetic>
          </div>

          <div className={styles.heroStats}>
            {heroStats.map((stat) => (
              <div key={stat.label} className={styles.heroStatItem}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <ParallaxSection speed={-0.08}>
          <div className={styles.visualWrapper}>
            <div ref={boxRef} className={styles.visualBox} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
              <div className={styles.deviceHeader}>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className={styles.deviceScreen}>
                <Image
                  src={showcaseProjects[0].image}
                  alt={`${showcaseProjects[0].name} - RebaSIM Full Stack OTP Web App`}
                  fill
                  sizes="(min-width: 1024px) 44vw, 100vw"
                  className={styles.deviceImage}
                  priority
                />
              </div>
              <div className={styles.phonePreview}>
                <div className={styles.phoneTop}></div>
                <Image
                  src={showcaseProjects[1].image}
                  alt={`${showcaseProjects[1].name} - RebaMedia Full Stack SMM Web App`}
                  fill
                  sizes="180px"
                  className={styles.phoneImage}
                />
              </div>
              <div className={styles.visualPanel}>
                <span>FULL STACK LIVE</span>
                <strong>Aktif di Production</strong>
                <p>{showcaseProjects.map((project) => `${project.name} ${project.label}`).join(' / ')}</p>
              </div>
            </div>
          </div>
        </ParallaxSection>
      </div>

      <div className={styles.scrollIndicator}>
        <span className={styles.scrollText}>Scroll</span>
        <div className={styles.scrollMouse}>
          <div className={styles.scrollWheel}></div>
        </div>
      </div>
    </section>
  );
}
