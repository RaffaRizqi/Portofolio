'use client';
import React, { useState } from 'react';
import { ArrowRight, FileText, Github, Instagram, Linkedin, Mail, MessageCircle, Twitter } from 'lucide-react';
import styles from './sections.module.css';
import { Reveal } from '../ui/Reveal';
import { TextReveal } from '../ui/TextReveal';
import { ScrollVelocityText } from '../ui/ScrollVelocityText';

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const whatsappUrl = 'https://wa.me/62895622494773?text=Halo%20Raffa,%20saya%20tertarik%20dengan%20profil%20dan%20CV%20Anda';

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "e1a07982-1bae-4a1a-9073-27309f3451d7");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setIsSuccess(true);
        e.currentTarget.reset();
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        console.error("Error:", data);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.glowRed} style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', opacity: 0.5 }}></div>
      
      {/* Big velocity text */}
      <div style={{ marginBottom: '2rem' }}>
        <ScrollVelocityText
          text="OPEN FOR HIRING &amp; FREELANCE — LET'S CONNECT"
          baseSpeed={0.5}
          className={styles.velocityMarqueeLarge}
        />
      </div>

      <div className={styles.contactInner}>
        <Reveal variant="slide-up">
          <TextReveal text="Let's Connect &amp; Collaborate." className={styles.sectionTitle} charDelay={35} />
          <p className={styles.desc} style={{ margin: '0 auto 3rem auto' }}>Mencari Software Engineer / Full Stack Developer berbakat? Kirim pesan rekrutmen atau pertanyaan proyek di bawah ini.</p>
        </Reveal>
        
        <Reveal delay={200} variant="scale">
          <div className={styles.contactCta}>
            <span className={styles.contactCtaLabel}>OPEN FOR RECRUITMENT &amp; PROJECTS</span>
            <h3>Tertarik merekrut atau berdiskusi proyek web?</h3>
            <p>
              Saya terbuka untuk posisi Full Stack / Software Engineer (Full-Time, Contract, Remote/Onsite) 
              maupun pengerjaan proyek web profesional berbasis Next.js, React, Vue, &amp; Laravel.
            </p>
            <div className={styles.contactCtaActions}>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={`${styles.contactCtaPrimary} ${styles.contactCtaWhatsApp}`}>
                WhatsApp Chat <MessageCircle size={16} />
              </a>
              <a href="/cv.html" className={styles.contactCtaSecondary} style={{ borderColor: 'rgba(37, 99, 235, 0.4)', color: '#60a5fa' }}>
                Review ATS CV <FileText size={16} />
              </a>
              <a href="mailto:raffaxzee@gmail.com?subject=Recruitment%20/%20Web%20Inquiry" className={styles.contactCtaSecondary}>
                Email Direct <Mail size={16} />
              </a>
            </div>
          </div>
          <Reveal delay={300} variant="slide-up">
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.formRow}>
                <input type="text" name="name" placeholder="Nama / Nama Perusahaan" required className={styles.input} />
                <input type="email" name="email" placeholder="Email Kerja / Perusahaan" required className={styles.input} />
              </div>
              <textarea name="message" placeholder="Pesan Rekrutmen / Deskripsi Proyek..." rows={5} required className={`${styles.input} ${styles.textarea}`}></textarea>
              <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
                {isSubmitting ? 'Sending Message...' : 'Send Inquiry Message'}
              </button>
              {isSuccess && (
                <div className={styles.successMsg}>
                  Pesan Anda berhasil terkirim! Saya akan segera menghubungi balik.
                </div>
              )}
            </form>
          </Reveal>
          <Reveal delay={400} variant="slide-up">
            <div className={styles.socials}>
              {[
                {
                  name: 'WhatsApp',
                  url: whatsappUrl,
                  icon: <MessageCircle size={24} />
                },
                {
                  name: 'GitHub RaffaStore',
                  url: 'https://github.com/RaffaRizqi',
                  icon: <Github size={24} />
                },
                {
                  name: 'LinkedIn',
                  url: 'https://www.linkedin.com/in/raffa-rizki-95ab66373?utm_source=share_via&utm_content=profile&utm_medium=member_android',
                  icon: <Linkedin size={24} />
                },
                {
                  name: 'X',
                  url: 'https://x.com/RaffaRizqi02',
                  icon: <Twitter size={24} />
                },
                {
                  name: 'Instagram',
                  url: 'https://www.instagram.com/raffa.r07',
                  icon: <Instagram size={24} />
                },
                {
                  name: 'TikTok',
                  url: 'https://www.tiktok.com/@Raffarizqi02',
                  icon: (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                    </svg>
                  )
                }
              ].map((social) => (
                <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label={social.name}>
                  {social.icon}
                </a>
              ))}
            </div>
          </Reveal>
        </Reveal>
      </div>
    </section>
  );
}
