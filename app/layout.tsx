import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
})

const siteUrl = 'https://porto.raffzdigital.biz.id'

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: 'Raffa Rizqi Ramdani | Full Stack Developer Portfolio',
      description: 'Official portfolio of Raffa Rizqi Ramdani — Full Stack Web Developer specializing in React, Next.js 14, Vue, Laravel, TypeScript, MySQL, Supabase, and REST API.',
      inLanguage: ['id-ID', 'en-US', 'zh-Hans'],
      publisher: {
        '@id': `${siteUrl}/#person`,
      },
    },
    {
      '@type': 'Person',
      '@id': `${siteUrl}/#person`,
      name: 'Raffa Rizqi Ramdani',
      alternateName: ['Raffa', 'Raffa Rizqi', 'RaffaStore', 'RaffaStr'],
      url: siteUrl,
      image: `${siteUrl}/profile.jpg`,
      jobTitle: 'Full Stack Developer',
      description: 'Full Stack Web Developer from Tasikmalaya with expertise in React, Next.js, Vue, Laravel, TypeScript, MySQL, Supabase, and fluent in Mandarin Chinese (HSK 5).',
      email: 'mailto:raffaxzee@gmail.com',
      telephone: '+62895622494773',
      gender: 'Male',
      nationality: {
        '@type': 'Country',
        name: 'Indonesia',
      },
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Tasikmalaya',
        addressRegion: 'Jawa Barat',
        addressCountry: 'ID',
      },
      knowsLanguage: [
        {
          '@type': 'Language',
          name: 'Indonesian',
          alternateName: 'id',
        },
        {
          '@type': 'Language',
          name: 'Chinese (Mandarin)',
          alternateName: 'zh-Hans (HSK 5 / Fluent Professional)',
        },
        {
          '@type': 'Language',
          name: 'English',
          alternateName: 'en (Technical & Documentation)',
        },
      ],
      alumniOf: {
        '@type': 'EducationalOrganization',
        name: 'SMKN 2 Tasikmalaya',
      },
      knowsAbout: [
        'Full Stack Web Development',
        'Next.js 14',
        'React.js',
        'Vue.js',
        'Laravel',
        'TypeScript',
        'JavaScript',
        'Node.js',
        'MySQL Database',
        'Supabase & PostgreSQL',
        'REST API & Webhooks',
        'Tailwind CSS',
        'Payment Gateway Integration (QRIS, Pakasir)',
        'Vercel Deployment & DevOps Basics',
        'Mandarin Chinese Language (HSK 5)',
      ],
      sameAs: [
        'https://github.com/RaffaRizqi',
        'https://www.instagram.com/raffa.r07',
        'https://www.tiktok.com/@Raffarizqi02',
        'https://x.com/RaffaRizqi02',
      ],
    },
    {
      '@type': 'ProfilePage',
      '@id': `${siteUrl}/#webpage`,
      url: siteUrl,
      name: 'Raffa Rizqi - Full Stack Developer Portfolio | Next.js, Laravel, Supabase',
      isPartOf: { '@id': `${siteUrl}/#website` },
      about: { '@id': `${siteUrl}/#person` },
      mainEntity: { '@id': `${siteUrl}/#person` },
      inLanguage: 'id-ID',
    },
    {
      '@type': 'ItemList',
      '@id': `${siteUrl}/#projects`,
      name: 'Portfolio Projects by Raffa Rizqi Ramdani',
      itemListElement: [
        {
          '@type': 'SoftwareApplication',
          position: 1,
          name: 'DicodingAja — Full-Stack Agency & Custom CMS',
          applicationCategory: 'BusinessApplication',
          operatingSystem: 'Web',
          description: 'Decoupled Full-Stack Web App for digital agency with React.js Vite frontend and Laravel 11 REST API backend with Sanctum Auth and custom CMS dashboard.',
        },
        {
          '@type': 'SoftwareApplication',
          position: 2,
          name: 'RebaSIM OTP Wallet',
          applicationCategory: 'BusinessApplication',
          operatingSystem: 'Web',
          url: 'https://www.rebasim.my.id',
          description: 'Realtime virtual OTP SMS ordering platform with automated prepaid wallet and provider price calculations.',
        },
        {
          '@type': 'SoftwareApplication',
          position: 3,
          name: 'RebaMedia SMM Panel',
          applicationCategory: 'BusinessApplication',
          operatingSystem: 'Web',
          url: 'https://www.rebamedia.my.id',
          description: 'SMM panel platform built with Next.js 14, Supabase, QRIS payment gateway, and reseller API integration.',
        },
        {
          '@type': 'SoftwareApplication',
          position: 4,
          name: 'Website SMKN 2 Tasikmalaya',
          applicationCategory: 'EducationalApplication',
          operatingSystem: 'Web',
          description: 'Full stack school management & information system built with React, Vue.js, Laravel REST API, and MySQL.',
        },
      ],
    },
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Raffa Rizqi - Full Stack Developer | Next.js, React, Laravel & Supabase',
    template: '%s | Raffa Rizqi - Full Stack Developer',
  },
  description: 'Portofolio resmi Raffa Rizqi Ramdani — Full Stack Web Developer dari Tasikmalaya yang ahli membangun web app responsif, dashboard interaktif, sistem database, integrasi API, React, Next.js, Vue, Laravel, MySQL, Supabase, dan memiliki kemahiran Bahasa Mandarin HSK 5.',
  keywords: [
    'Raffa Rizqi',
    'Raffa Rizqi Ramdani',
    'Full Stack Developer',
    'Full Stack Developer Indonesia',
    'Full Stack Web Developer Tasikmalaya',
    'Web Developer Tasikmalaya',
    'DicodingAja',
    'Next.js 14 Developer',
    'React Developer Indonesia',
    'Laravel Developer Indonesia',
    'Vue.js Developer',
    'Supabase Developer',
    'TypeScript Developer',
    'Mandarin Speaker Developer',
    'Developer Bahasa Mandarin HSK 5',
    'RebaMedia',
    'RebaSIM',
    'RaffaStore',
    'Jasa Pembuatan Website Tasikmalaya',
    'Portofolio Full Stack Developer',
  ],
  authors: [{ name: 'Raffa Rizqi Ramdani', url: siteUrl }],
  creator: 'Raffa Rizqi Ramdani',
  publisher: 'Raffa Rizqi Ramdani',
  category: 'technology',
  alternates: {
    canonical: '/',
    languages: {
      'id-ID': '/',
      'en-US': '/',
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    title: 'Raffa Rizqi - Full Stack Developer | Next.js, React, Laravel & Supabase',
    description: 'Portofolio resmi Raffa Rizqi Ramdani — Full Stack Web Developer. Siap membangun web app modern, responsive HP, integrasi payment & database, dan menguasai Bahasa Mandarin HSK 5.',
    url: siteUrl,
    siteName: 'Raffa Rizqi - Full Stack Developer Portfolio',
    images: [
      {
        url: '/rebasim-preview.png',
        width: 1200,
        height: 630,
        alt: 'Raffa Rizqi Ramdani - Full Stack Developer Portfolio Preview',
        type: 'image/png',
      },
    ],
    locale: 'id_ID',
    alternateLocale: ['en_US'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Raffa Rizqi - Full Stack Developer Portfolio',
    description: 'Full Stack Web Developer: Next.js 14, React, Vue, Laravel, TypeScript, MySQL, Supabase, dan Mandarin HSK 5.',
    creator: '@RaffaRizqi02',
    site: '@RaffaRizqi02',
    images: ['/rebasim-preview.png'],
  },
  other: {
    'geo.region': 'ID-JB',
    'geo.placename': 'Tasikmalaya, Jawa Barat, Indonesia',
    'geo.position': '-7.3274;108.2207',
    'ICBM': '-7.3274, 108.2207',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className={inter.variable}>
      <head>
        <link rel="canonical" href={siteUrl} />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  )
}
