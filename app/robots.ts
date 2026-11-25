import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://dyavathiabhinandan.github.io/Radarseq123/sitemap.xml',
  };
}
