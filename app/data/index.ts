import React from 'react';
import { Bot, Code, Database, Layout, Server, Smartphone } from 'lucide-react';

export const SKILLS = [
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { name: 'Vue.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
  { name: 'Laravel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'Supabase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg' },
  { name: 'Git / GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' }
];

export const PROJECTS = [
  {
    title: 'DicodingAja — Full-Stack Agency & Custom CMS',
    description: 'Decoupled Full-Stack Web App untuk digital agency. Frontend modern React.js + Vite + Tailwind CSS dengan sistem multi-bahasa (i18n), backend Laravel 11 REST API, MySQL database, sistem autentikasi Laravel Sanctum, dan Admin Dashboard CMS lengkap.',
    techStack: ['React.js', 'Vite', 'Tailwind CSS', 'Laravel 11', 'MySQL', 'Sanctum Auth', 'REST API'],
    category: ['Web', 'Backend', 'UI/UX'],
    image: '/dicodingaja-preview.png',
    link: '#',
    isComingSoon: true
  },
  {
    title: 'RebaFlix — Aplikasi Nonton Film & Series',
    description: 'Aplikasi Android untuk streaming film dan series dengan kategori genre, Watchlist, pencarian, dan dark UI sinematik. Build release teroptimasi v1.3.0 tersedia melalui halaman resmi.',
    techStack: ['Android', 'Dark UI/UX', 'RESTful API', 'Katalog Film', 'Watchlist', 'R8 Optimized'],
    category: ['Mobile', 'UI/UX'],
    image: '/rebaflix-preview.png',
    link: '/rebaflix',
    isReleasePaused: false
  },
  {
    title: 'Website SMKN 2 Tasikmalaya (Full Stack)',
    description: 'Sistem informasi & portal website resmi sekolah SMKN 2 Tasikmalaya. Dikembangkan full stack dengan React, Vue.js, Laravel REST API, dan database MySQL.',
    techStack: ['React', 'Vue.js', 'Laravel', 'MySQL', 'Full Stack'],
    category: ['Web', 'UI/UX', 'Backend'],
    image: '/smkn2-preview.png',
    link: '#',
    isComingSoon: true
  },
  {
    title: 'RebaMedia (Web App SMM)',
    description: 'Web app SMM panel dengan antarmuka Next.js 14, login Supabase, deposit QRIS otomatis, dan integrasi REST API reseller 24/7.',
    techStack: ['Next.js 14', 'TypeScript', 'Supabase', 'QRIS Payment', 'REST API'],
    category: ['Web', 'UI/UX', 'Backend'],
    image: '/raffzsmm-preview.png',
    link: 'https://www.rebamedia.my.id'
  },
  {
    title: 'RebaSIM OTP Wallet',
    description: 'Platform order nomor virtual OTP realtime dengan saldo prepaid, deposit otomatis, kalkulasi provider realtime, dan dashboard responsif.',
    techStack: ['Next.js 14', 'TypeScript', 'Supabase Auth', 'Pakasir Webhook'],
    category: ['Web', 'UI/UX', 'Backend'],
    image: '/rebasim-preview.png',
    link: 'https://www.rebasim.my.id'
  },
  {
    title: 'Raffz Top Up (PPOB & Game Voucher v2)',
    description: 'Website top up game dan voucher digital PPOB dengan alur pembayaran otomatis dan tampilan katalog yang rapi di HP.',
    techStack: ['Web App', 'Payment Integration', 'Responsive UI'],
    category: ['Web', 'UI/UX'],
    image: '/raffztopup-preview.png',
    link: 'https://raffztopup.gamesquad.id'
  },
  {
    title: 'Website Portofolio Interaktif',
    description: 'Portofolio interaktif berbasis Next.js 14 dengan gaya Neo-Brutalism, smooth scroll, animasi reveal, SEO Schema, dan responsive layout.',
    techStack: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    category: ['Web', 'UI/UX'],
    image: '/porto-preview.png',
    link: 'https://www.itsraffa.biz.id'
  },
  {
    title: 'Website Top Up Game (v1 Legacy)',
    description: 'Versi pertama platform top up game dengan tampilan simpel untuk kemudahan transaksi cepat.',
    techStack: ['HTML5', 'CSS3', 'JavaScript'],
    category: ['Web'],
    image: '/raffastore-v1-preview.png',
    link: 'https://buylink.id/RaffaStore'
  },
  {
    title: 'Sistem Absensi QR Code (Web App)',
    description: 'Aplikasi presensi digital berbasis scan QR Code untuk pencatatan kehadiran yang cepat.',
    techStack: ['Next.js', 'Tailwind CSS', 'Node.js'],
    category: ['Web'],
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=600&h=400&auto=format&fit=crop',
    link: '#'
  },
  {
    title: 'Aplikasi Manajemen Inventaris',
    description: 'Sistem informasi untuk memantau stok barang, pemasukan, dan pengeluaran secara real-time.',
    techStack: ['React', 'Express', 'MySQL'],
    category: ['Web', 'Backend'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&h=400&auto=format&fit=crop',
    link: '#'
  },
  {
    title: 'E-Learning UI/UX Design',
    description: 'Rancangan tampilan aplikasi belajar online dengan fokus pada kenyamanan membaca materi.',
    techStack: ['Figma', 'Prototyping'],
    category: ['UI/UX'],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&h=400&auto=format&fit=crop',
    link: '#'
  },
  {
    title: 'WhatsApp Automation Bot',
    description: 'Bot otomatis untuk mengirimkan notifikasi transaksi, auto-reply, dan pengolahan pesan backend.',
    techStack: ['Node.js', 'REST API', 'MySQL'],
    category: ['Backend'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&h=400&auto=format&fit=crop',
    link: '#'
  },
];

export const SERVICES = [
  { icon: React.createElement(Layout, { className: "w-6 h-6" }), title: 'Full Stack Web Development', desc: 'Membangun aplikasi website lengkap dari frontend responsif hingga backend REST API menggunakan Next.js 14, React, Vue, Laravel, dan TypeScript.' },
  { icon: React.createElement(Server, { className: "w-6 h-6" }), title: 'Backend & Database Architecture', desc: 'Perancangan skema database MySQL & Supabase, endpoint REST API, autentikasi user aman, dan integrasi webhook payment gateway (QRIS & Pakasir).' },
  { icon: React.createElement(Smartphone, { className: "w-6 h-6" }), title: 'Responsive UI/UX & Web App', desc: 'Slicing antarmuka modern yang ringan, cepat, dan presisi untuk pengguna smartphone maupun desktop dengan Tailwind CSS.' },
  { icon: React.createElement(Bot, { className: "w-6 h-6" }), title: 'Otomatisasi Bot & Integrasi API', desc: 'Membuat bot notifikasi otomatis WhatsApp, sistem webhook transaksi, dan integrasi API pihak ketiga (reseller / provider).' }
];
