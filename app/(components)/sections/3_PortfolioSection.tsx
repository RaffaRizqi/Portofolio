'use client';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { ArrowUpRight, CheckCircle2, FileText, Send, X } from 'lucide-react';
import { PROJECTS } from '../../data';
import styles from './sections.module.css';
import { Reveal } from '../ui/Reveal';
import { TextReveal } from '../ui/TextReveal';
import { ScrollVelocityText } from '../ui/ScrollVelocityText';

type Project = (typeof PROJECTS)[number];

export function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const displayProjects = PROJECTS.filter((project) => (project.link && project.link !== '#') || ('isComingSoon' in project && project.isComingSoon) || ('isDownloadable' in project && project.isDownloadable));
  const featuredProject = PROJECTS.find((project) => project.title === 'RebaSIM OTP Wallet') ?? PROJECTS[0];
  const featuredHighlights = ['Kalkulasi Harga OTP Realtime', 'Supabase Auth & Database', 'Deposit Pakasir Otomatis', 'Responsive HP & Desktop'];

  const filteredProjects = activeFilter === 'All'
    ? displayProjects
    : displayProjects.filter((project) => project.category.includes(activeFilter));

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;
    card.style.transition = 'none';
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    card.style.transition = 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)';
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  };

  return (
    <section id="portfolio" className={`${styles.section} ${styles.bgDark}`}>
      {/* Velocity text divider */}
      <div style={{ marginBottom: '3rem' }}>
        <ScrollVelocityText
          text="FEATURED WORK — SELECTED PROJECTS — LIVE PRODUCTION"
          baseSpeed={0.6}
          className={styles.velocityMarquee}
        />
      </div>

      <div className={styles.container}>
        <Reveal variant="slide-up">
          <div className={styles.portHeader}>
            <div>
              <TextReveal text="Proyek Terpilih" className={styles.sectionTitle} style={{ marginBottom: '0.5rem' }} charDelay={45} />
              <p className={styles.desc} style={{ marginBottom: 0 }}>Beberapa proyek web yang sudah saya bangun dan aktif di-deploy ke production.</p>
            </div>
            <div className={styles.filters}>
              {['All', 'Web', 'Mobile', 'UI/UX', 'Backend'].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`${styles.filterBtn} ${activeFilter === filter ? styles.filterBtnActive : ''}`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={120} variant="scale">
          <div className={styles.featuredProject}>
            <div className={styles.featuredMedia}>
              <Image
                src={featuredProject.image}
                alt={featuredProject.title}
                fill
                sizes="(min-width: 1024px) 48vw, 100vw"
                className={styles.featuredImage}
                priority
              />
              <span className={styles.featuredBadge}>Live Project</span>
            </div>
            <div className={styles.featuredInfo}>
              <span className={styles.eyebrow}>PROYEK UTAMA</span>
              <h3 className={styles.featuredTitle}>{featuredProject.title}</h3>
              <p className={styles.featuredDesc}>
                Web app order nomor OTP dengan saldo prepaid, kalkulasi harga otomatis dari provider, deposit Pakasir instan, Supabase Auth, dan tampilan dashboard responsif.
              </p>
              <div className={styles.featuredList}>
                {featuredHighlights.map((item) => (
                  <span key={item}>
                    <CheckCircle2 size={16} />
                    {item}
                  </span>
                ))}
              </div>
              <div className={styles.featuredActions}>
                <a href={featuredProject.link} target="_blank" rel="noopener noreferrer" className={styles.featuredPrimary}>
                  Lihat Live Web <ArrowUpRight size={16} />
                </a>
                <a href="/cv.html" className={styles.featuredSecondary}>
                  Cek Format CV <FileText size={16} />
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        <div className={styles.grid3}>
          {filteredProjects.length === 0 ? (
            <div className={styles.desc} style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '2rem 0' }}>
              Belum ada proyek di kategori ini.
            </div>
          ) : null}

          {filteredProjects.map((project, index) => (
            <Reveal key={project.title} delay={index * 120} variant={index % 2 === 0 ? 'slide-left' : 'slide-right'}>
              <div
                className={styles.card}
                onClick={() => setSelectedProject(project)}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                <div className={styles.cardImgBox}>
                  <div className={styles.cardOverlay}></div>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className={styles.cardImg}
                  />
                  <div className={styles.cardBtnBox}>
                    <button className={styles.viewBtn}>Lihat Detail Proyek</button>
                  </div>
                  <span
                    className={styles.cardLiveBadge}
                    style={
                      'isComingSoon' in project && project.isComingSoon
                        ? { background: 'linear-gradient(135deg, #f59e0b, #ef4444)', color: '#ffffff' }
                        : undefined
                    }
                  >
                    {'isComingSoon' in project && project.isComingSoon ? 'Coming Soon' : 'Live'}
                  </span>
                </div>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{project.title}</h3>
                  <p className={styles.cardDesc}>{project.description}</p>
                  <div className={styles.cardTech}>
                    {project.techStack.join(' • ')}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className={styles.modalOverlay} onClick={() => setSelectedProject(null)}>
          <button className={styles.closeModalBtn} onClick={() => setSelectedProject(null)} aria-label="Close project preview">
            <X size={24} />
          </button>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalImgBox}>
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                sizes="(min-width: 768px) 55vw, 100vw"
                className={styles.modalImg}
              />
            </div>
            <div className={styles.modalInfo}>
              <h3 className={styles.modalTitle}>{selectedProject.title}</h3>
              <p className={styles.modalDesc}>{selectedProject.description}</p>
              <div className={styles.modalMeta}>
                {selectedProject.techStack.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
              {'isDownloadable' in selectedProject && selectedProject.isDownloadable ? (
                <a
                  href={selectedProject.link}
                  download
                  className={styles.modalAction}
                  style={{
                    display: 'block',
                    textDecoration: 'none',
                    background: '#86efac',
                    fontWeight: 900,
                    textAlign: 'center'
                  }}
                >
                  Download APK Gratis (Android)
                </a>
              ) : 'isComingSoon' in selectedProject && selectedProject.isComingSoon ? (
                <button
                  className={styles.modalAction}
                  disabled
                  style={{
                    opacity: 1,
                    cursor: 'not-allowed',
                    background: '#fde047',
                    color: '#121316',
                    display: 'block',
                    width: '100%',
                    fontWeight: 900
                  }}
                >
                  Status: Coming Soon (Dalam Tahap Pengembangan)
                </button>
              ) : selectedProject.link && selectedProject.link !== '#' ? (
                <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className={styles.modalAction} style={{ display: 'block', textDecoration: 'none' }}>
                  Buka Website Live
                </a>
              ) : (
                <button className={styles.modalAction} disabled style={{ opacity: 0.5, cursor: 'not-allowed' }}>Private / Local Project</button>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
