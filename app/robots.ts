import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin/', '/teacher/', '/student/'],
    },
    sitemap: 'https://primelearning.edu.in/sitemap.xml',
  };
}
