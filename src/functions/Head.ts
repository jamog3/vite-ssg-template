import { DESCRIPTION, DOMAIN, TITLE } from '@/helper/Constants'

export default function (payload: { title?: string; description?: string; path: string }) {
  const title = 'title' in payload && payload.title !== '' ? `${payload.title} | ${TITLE}` : TITLE
  const description =
    'description' in payload && payload.description !== '' ? `${payload.description}${DESCRIPTION}` : DESCRIPTION
  return {
    title,
    meta: [
      {
        name: 'description',
        content: description
      },
      // Note: OG
      {
        property: 'og:title',
        content: title
      },
      {
        property: 'og:description',
        content: description
      },
      {
        property: 'og:image',
        content: `${DOMAIN}/ogimage.jpg`
      },
      {
        property: 'og:locale',
        content: 'ja_JP'
      },
      {
        property: 'og:type',
        content: payload.path === '/' ? 'website' : 'article'
      },
      {
        property: 'og:url',
        content: `${DOMAIN}${payload.path}`
      },
      // Note: Twitter
      {
        name: 'twitter:card',
        content: 'summary_large_image'
      }
    ],
    link: [
      {
        rel: 'canonical',
        href: `${DOMAIN}${payload.path}`
      }
    ]
  }
}
