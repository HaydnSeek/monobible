import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'MonoBible',
    short_name: 'MonoBible',
    description: 'Read the Bible without distraction.',
    start_url: '/',
    display: 'standalone',
    background_color: '#18181B',
    theme_color: '#18181B',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
