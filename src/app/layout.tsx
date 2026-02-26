import type { Metadata, Viewport } from 'next'
import { Courier_Prime } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'

const font = Courier_Prime({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-mono',
  display: 'swap',
})

const siteUrl = 'https://dishafaujdar.me'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#EDEADE',
}

export const metadata: Metadata = {
  title: {
    default: 'Disha Faujdar — Software & AI Engineer',
    template: '%s | Disha Faujdar',
  },
  description:
    'Software and AI engineer from, India. ' +
    'Fullstack & backend development, AI/ML engineering. Building intelligent systems, ' +
    'contributing to open source, and making LLMs a little less hallucinate-y.',
  keywords: [
    'Disha Faujdar',
    'software engineer',
    'AI engineer',
    'ML engineer',
    'fullstack developer',
    'backend developer',
    'open source',
    'Next.js',
    'TypeScript',
    'Python',
    'PyTorch',
    'RAG',
    'machine learning',
    'India',
  ],
  authors: [{ name: 'Disha Faujdar', url: siteUrl }],
  creator: 'Disha Faujdar',
  publisher: 'Disha Faujdar',
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Disha Faujdar',
    title: 'Disha Faujdar — Software & AI Engineer',
    description:
      'Software and AI engineer from, India. ' +
      'Fullstack, backend & AI/ML. Building intelligent systems and contributing to open source.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Disha Faujdar — Software & AI Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@maidishahoon',
    creator: '@maidishahoon',
    title: 'Disha Faujdar — Software & AI Engineer',
    description:
      'Software and AI engineer. Fullstack, backend & AI/ML. Building intelligent systems.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  category: 'technology',
  referrer: 'origin-when-cross-origin',
}

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Disha Faujdar',
  url: siteUrl,
  jobTitle: 'Software Engineer',
  description:
    'Software and AI engineer from, India. Fullstack, backend & AI/ML engineering.',
  email: 'dishafaujdar.work@gmail.com',
  sameAs: [
    'https://github.com/dishafaujdar',
    'https://linkedin.com/in/dishafaujdar',
    'https://x.com/DisHasCode',
  ],
  knowsAbout: [
    'Software Engineering',
    'Artificial Intelligence',
    'Machine Learning',
    'Fullstack Development',
    'Backend Development',
    'RAG',
    'TypeScript',
    'Python',
    'React',
    'Node.js',
  ],
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'Modern Institute of Technology and Research Center',
    address: { addressRegion: 'Rajasthan', addressCountry: 'IN' },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={font.variable}>
      <body className="bg-parchment font-mono text-ink antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
