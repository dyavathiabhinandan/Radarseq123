import type { MetadataRoute } from 'next';
import { projects } from '@/lib/data';

const siteUrl = 'https://dyavathiabhinandan.github.io/Radarseq123';

export default function sitemap(): MetadataRoute.Sitemap {
  const sections = [
    '',
    '/team/abhinandan-dyavathi/',
    ...projects.map((project) => `/projects/${project.slug}/`),
  ];

  return sections.map((path) => ({
    url: `${siteUrl}${path}`,
  }));
}
