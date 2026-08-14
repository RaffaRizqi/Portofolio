import React from 'react';
import { Bot, Code, Layout, Server } from 'lucide-react';

export const SKILLS = [
  { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' }
];

export const PROJECTS = [
  {
    title: 'Website SMKN 2 Tasikmalaya (Full Stack)',
    description: 'Sistem informasi & portal website resmi sekolah SMKN 2 Tasikmalaya. Dikembangkan full stack sendiri dengan React, Vue.js, Laravel REST API, dan database MySQL.',
    techStack: ['React', 'Vue.js', 'Laravel', 'MySQL', 'Full Stack'],
    category: ['Web', 'UI/UX', 'Backend'],
    image: '/smkn2-preview.png',
    link: '#',
    isComingSoon: true
  },
  {
    title: 'RebaMedia (Web App SMM)',
    description: 'Web app SMM panel dengan antarmuka Next.js 14, login Supabase, deposit QRIS otomatis, dan API reseller.',
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
    description: 'Portofolio interaktif berbasis Next.js 14 dengan smooth scroll, custom cursor, animasi reveal, dan responsive layout.',
    techStack: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    category: ['Web', 'UI/UX'],
    image: '/porto-preview.png',
    link: 'https://porto.raffzdigital.biz.id'
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
  { icon: React.createElement(Layout, { className: "w-6 h-6" }), title: 'Frontend & Web Development', desc: 'Membangun website responsif, rapi, dan cepat menggunakan React, Next.js 14, TypeScript, dan Tailwind CSS.' },
  { icon: React.createElement(Code, { className: "w-6 h-6" }), title: 'Web App & Dashboard', desc: 'Pengembangan antarmuka admin, dashboard transaksi, form interaktif, dan alur modul web app.' },
  { icon: React.createElement(Server, { className: "w-6 h-6" }), title: 'Integrasi API & Backend', desc: 'Menghubungkan frontend ke REST API, database Supabase/MySQL, autentikasi user, dan payment gateway.' },
  { icon: React.createElement(Bot, { className: "w-6 h-6" }), title: 'Otomatisasi & Bot WhatsApp', desc: 'Membuat bot notifikasi pesanan, auto reply WhatsApp, dan integrasi webhook operasional web.' }
];
