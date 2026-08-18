import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'ALP YAPIM',
    short_name: 'ALP YAPIM',
    description: 'Profesyonel görüntüleme, drone çekimi ve mimari fotoğrafçılık hizmetleri.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0a0a0a',
    theme_color: '#0a0a0a',
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  }
}
