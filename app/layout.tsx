import type { Metadata, Viewport } from 'next';
import { Inter, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';
import SmoothScroll from '@/components/layout/SmoothScroll';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-body',
  display: 'swap',
});

const mono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'RadarSeq — Temporal Risk Intelligence',
    template: '%s | RadarSeq',
  },
  description:
    'RadarSeq research connects behavioural histories over time to help teams understand changing risk, inspect evidence and shape decisions.',
  metadataBase: new URL('https://radarseq.ai/'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'RadarSeq — Temporal Risk Intelligence',
    description:
      'Research into temporal modelling, changing risk and evidence-led decision workflows.',
    type: 'website',
    url: '/',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'RadarSeq — Temporal Risk Intelligence',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RadarSeq — Temporal Risk Intelligence',
    description:
      'Research into temporal modelling, changing risk and evidence-led decision workflows.',
    images: ['/opengraph-image.png'],
  },
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
  },
};

export const viewport: Viewport = {
  themeColor: '#0B0A14',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${mono.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try {
  var t = localStorage.getItem('theme');
  document.documentElement.classList.toggle('light', t === 'light');
  document.documentElement.classList.remove('dark');
} catch (e) {}`,
          }}
        />
      </head>
      <body className="min-h-screen bg-bg text-ink font-body">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
