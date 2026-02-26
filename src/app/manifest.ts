import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Disha Faujdar',
    short_name: 'Disha Faujdar',
    description:
      'Software and AI engineer from Rajasthan, India. Fullstack, backend & AI/ML.',
    start_url: '/',
    display: 'standalone',
    background_color: '#EDEADE',
    theme_color: '#EDEADE',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
        purpose: 'any',
      },
      {
        src: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
        purpose: 'any',
      },
    ],
  }
}
