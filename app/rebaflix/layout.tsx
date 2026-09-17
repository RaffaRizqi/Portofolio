import type { Metadata } from 'next';

const siteUrl = 'https://www.itsraffa.biz.id';
const pageUrl = `${siteUrl}/rebaflix`;

export const metadata: Metadata = {
  title: 'Download RebaFlix APK v1.3.0 untuk Android',
  description: 'Download RebaFlix v1.3.0 untuk Android melalui halaman resmi. Build release teroptimasi 11.1 MB untuk nonton film dan series subtitle Indonesia.',
  keywords: [
    'RebaFlix',
    'RebaFlix APK',
    'Status RebaFlix',
    'nonton film gratis',
    'nonton film gratis tanpa iklan',
    'aplikasi nonton film Android',
    'aplikasi streaming film Android',
    'nonton series subtitle Indonesia',
    'streaming film subtitle Indonesia',
    'Raffa Rizqi Ramdani'
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: 'Download RebaFlix APK v1.3.0 untuk Android',
    description: 'RebaFlix v1.3.0 untuk Android kini tersedia dalam build release teroptimasi berukuran 11.1 MB.',
    url: pageUrl,
    siteName: 'Portofolio Raffa Rizqi Ramdani',
    images: [
      {
        url: `${siteUrl}/rebaflix-preview.png`,
        width: 1200,
        height: 630,
        alt: 'RebaFlix Android App Preview',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Download RebaFlix APK v1.3.0',
    description: 'RebaFlix v1.3.0 untuk Android tersedia dalam build release teroptimasi 11.1 MB.',
    images: [`${siteUrl}/rebaflix-preview.png`],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      '@id': `${pageUrl}/#app`,
      name: 'RebaFlix',
      url: pageUrl,
      applicationCategory: 'EntertainmentApplication',
      operatingSystem: 'Android 8.0 or newer',
      softwareVersion: '1.3.0',
      description: 'Build release teroptimasi aplikasi Android untuk menonton film dan series dengan subtitle Indonesia.',
      downloadUrl: `${siteUrl}/rebaflix.apk`,
      image: `${siteUrl}/rebaflix-preview.png`,
      author: {
        '@type': 'Person',
        name: 'Raffa Rizqi Ramdani',
        url: siteUrl,
      },
    },
    {
      '@type': 'WebPage',
      '@id': `${pageUrl}/#webpage`,
      url: pageUrl,
      name: 'Download RebaFlix APK untuk Android',
      description: 'Halaman resmi download RebaFlix v1.3.0 untuk Android.',
      inLanguage: 'id-ID',
      mainEntity: { '@id': `${pageUrl}/#app` },
      isPartOf: { '@id': `${siteUrl}/#website` },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Portofolio Raffa Rizqi',
          item: siteUrl,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'RebaFlix',
          item: pageUrl,
        },
      ],
    },
  ],
};

export default function RebaFlixLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
