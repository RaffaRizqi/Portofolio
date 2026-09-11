import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Download RebaFlix APK — Nonton Film & Series Gratis Tanpa Iklan | Raffa Rizqi',
  description: 'Download aplikasi RebaFlix APK untuk smartphone Android. Streaming film box office, drama, dan series lengkap tanpa iklan dengan subtitle Indonesia dan kualitas HD.',
  keywords: [
    'RebaFlix',
    'RebaFlix APK',
    'Download RebaFlix',
    'rebaflix.apk',
    'nonton film gratis tanpa iklan',
    'aplikasi streaming android gratis',
    'streaming subtitle indonesia',
    'Raffa Rizqi Ramdani'
  ],
  alternates: {
    canonical: 'https://porto.raffzdigital.biz.id/rebaflix',
  },
  openGraph: {
    title: 'Download RebaFlix APK — Nonton Film & Series Gratis Tanpa Iklan',
    description: 'Aplikasi Android streaming film & series gratis tanpa iklan oleh Raffa Rizqi Ramdani. Download langsung file rebaflix.apk!',
    url: 'https://porto.raffzdigital.biz.id/rebaflix',
    siteName: 'Portofolio Raffa Rizqi Ramdani',
    images: [
      {
        url: 'https://porto.raffzdigital.biz.id/rebaflix-preview.png',
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
    title: 'Download RebaFlix APK — Nonton Film Gratis Tanpa Iklan',
    description: 'Streaming film & series HD gratis tanpa iklan di Android. Download rebaflix.apk!',
    images: ['https://porto.raffzdigital.biz.id/rebaflix-preview.png'],
  },
};

export default function RebaFlixLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
