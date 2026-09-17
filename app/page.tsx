import { HeroSection } from './(components)/sections/1_HeroSection';
import { AboutSection } from './(components)/sections/2_AboutSection';
import { PortfolioSection } from './(components)/sections/3_PortfolioSection';
import { RecruiterSection } from './(components)/sections/4_RecruiterSection';
import { ServicesSection } from './(components)/sections/4_ServicesSection';
import { ContactSection } from './(components)/sections/5_ContactSection';
import { FooterSection } from './(components)/sections/6_FooterSection';
import { CustomCursor } from './(components)/ui/CustomCursor';
import { Navbar } from './(components)/ui/Navbar';
import { Preloader } from './(components)/ui/Preloader';
import { ScrollProgress } from './(components)/ui/ScrollProgress';
import { BackToTop } from './(components)/ui/BackToTop';
import { SmoothScroll } from './(components)/ui/SmoothScroll';
import { BackgroundEffect } from './(components)/ui/BackgroundEffect';

import type { Viewport } from 'next';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function Home() {
  return (
    <main>
      <BackgroundEffect />
      <SmoothScroll />
      <ScrollProgress />
      <Preloader />
      <CustomCursor />
      <BackToTop />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <RecruiterSection />
      <ServicesSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
}
