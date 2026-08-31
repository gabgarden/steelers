import { siteUrl } from '@/lib/site'

export default function sitemap() {
  return ['', '/banda', '/sons', '/shows', '/contato'].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
  }))
}
