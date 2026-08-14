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
      name: 'Raffa Rizqi Portfolio',
      description: 'Portfolio web developer Raffa Rizqi Ramdani.',
      inLanguage: 'id-ID',
    },
    {
      '@type': 'Person',
      '@id': `${siteUrl}/#person`,
      name: 'Raffa Rizqi Ramdani',
      alternateName: ['Raffa', 'Raffa Store', 'RaffaStore'],
      url: siteUrl,
      image: `${siteUrl}/favicon.png`,
      jobTitle: 'Full Stack Developer',
      email: 'mailto:raffaxzee@gmail.com',
      telephone: '+62895622494773',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Tasikmalaya',
        addressCountry: 'ID',
      },
      knowsAbout: [
        'Full Stack Development',
        'Next.js',
        'React',
        'Vue.js',
        'Laravel',
        'MySQL',
        'Supabase',
        'Vercel',
        'API Integration',
      ],
      sameAs: [
        'https://github.com/RaffaStr',
        'https://www.instagram.com/raffa.r07',
        'https://www.tiktok.com/@Raffarizqi02',
        'https://x.com/RaffaRizqi02',
      ],
    },
    {
      '@type': 'WebPage',
      '@id': `${siteUrl}/#webpage`,
      url: siteUrl,
      name: 'Raffa Rizqi - Full Stack Developer Portfolio',
      isPartOf: { '@id': `${siteUrl}/#website` },
      about: { '@id': `${siteUrl}/#person` },
      inLanguage: 'id-ID',
    },
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Raffa Rizqi - Full Stack Developer Portfolio',
    template: '%s | Raffa Rizqi',
  },
  description: 'Portfolio Raffa Rizqi Ramdani, Full Stack Developer dari Tasikmalaya yang membangun website responsive, dashboard, React, Vue, Laravel, MySQL, dan REST API.',
  keywords: [
    'Raffa Rizqi',
    'Raffa Store',
    'RaffaStore',
    'portfolio developer',
    'full stack developer Indonesia',
    'web developer Tasikmalaya',
    'Laravel developer',
    'React developer',
    'Vue developer',
    'Next.js developer',
    'RebaMedia',
    'RebaSIM',
  ],
  authors: [{ name: 'Raffa Rizqi Ramdani', url: siteUrl }],
  creator: 'Raffa Rizqi Ramdani',
  publisher: 'Raffa Rizqi Ramdani',
  category: 'portfolio',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    title: 'Raffa Rizqi - Full Stack Developer Portfolio',
    description: 'Portfolio Raffa Rizqi Ramdani: project RebaMedia, RebaSIM, SMKN 2 Tasikmalaya, Full Stack React, Vue, Laravel, MySQL, dan Vercel.',
    url: siteUrl,
    siteName: 'Raffa Rizqi Portfolio',
    images: [
      {
        url: '/rebasim-preview.png',
        width: 1897,
        height: 907,
        alt: 'Raffa Rizqi Portfolio Preview',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Raffa Rizqi - Full Stack Developer Portfolio',
    description: 'Portfolio Raffa Rizqi Ramdani: Full Stack Web Developer, Next.js, React, Vue, Laravel, MySQL, dan API integration.',
    images: ['/rebasim-preview.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className={inter.variable}>
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
