'use client';
import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Download, MessageCircle } from 'lucide-react';
import styles from './sections.module.css';
import { Magnetic } from '../ui/Magnetic';
import { ParallaxSection } from '../ui/ParallaxSection';

export function HeroSection() {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [isTypingLine1, setIsTypingLine1] = useState(true);
  const boxRef = useRef<HTMLDivElement>(null);

  const fullText1 = "Halo, saya Raffa,";
  const fullText2 = 'Full Stack Developer';
  const whatsappUrl = 'https://wa.me/62895622494773?text=Halo%20Raffa,%20saya%20tertarik%20dengan%20portfolio%20kamu';
  const heroStats = [
    { value: '15+', label: 'Web diselesaikan' },
    { value: '100%', label: 'Responsive HP' },
    { value: 'Fast', label: 'Loading cepat' }
  ];
  const heroPills = ['Next.js 14', 'React', 'TypeScript', 'Tailwind CSS', 'Supabase'];
  const showcaseProjects = [
    { name: 'BosNokos', image: '/bosnokos-preview.png', label: 'OTP Wallet' },
    { name: 'RebaMedia', image: '/raffzsmm-preview.png', label: 'SMM Panel' }
  ];

  useEffect(() => {
    let i = 0;
    let j = 0;
    let interval: NodeJS.Timeout;
    let timeout: NodeJS.Timeout;

    const typeLine2 = () => {
      setIsTypingLine1(false);
      interval = setInterval(() => {
        j++;
        setText2(fullText2.slice(0, j));
        if (j >= fullText2.length) clearInterval(interval);
      }, 70);
    };

    const typeLine1 = () => {
      interval = setInterval(() => {
        i++;
        setText1(fullText1.slice(0, i));
        if (i >= fullText1.length) {
          clearInterval(interval);
          timeout = setTimeout(typeLine2, 180);
        }
      }, 70);
    };

    timeout = setTimeout(typeLine1, 400);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

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
      <div className={styles.glowBlue}></div>

      <div className={`${styles.container} ${styles.grid2}`}>
        <div>
          <div className={styles.badge}>
            <span className={styles.dot}></span>
            <span>Open for Web Developer Jobs &amp; Freelance</span>
          </div>
          
          <h1 className={styles.title}>
            {text1}
            {isTypingLine1 && <span className={styles.cursor}>|</span>}
            <br />
            <span className={styles.gradientText}>{text2}</span>
            {!isTypingLine1 && <span className={styles.cursor}>|</span>}
          </h1>

          <p className={styles.desc}>
            Saya adalah Full Stack Developer dari Tasikmalaya yang fokus membangun website dan web app modern berbasis <strong>React, Next.js, Vue, Laravel, dan MySQL/Supabase</strong>. Terbiasa menangani alur frontend responsif, integrasi API &amp; database, sampai deploy ke Vercel.
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
                  alt={`${showcaseProjects[0].name} preview`}
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
                  alt={`${showcaseProjects[1].name} preview`}
                  fill
                  sizes="180px"
                  className={styles.phoneImage}
                />
              </div>
              <div className={styles.visualPanel}>
                <span>PROJECT LIVE</span>
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
