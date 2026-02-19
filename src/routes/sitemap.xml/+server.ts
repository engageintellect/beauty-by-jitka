import { services, serviceCategories } from '$lib/data';
import { slugify } from '$lib/utils';

const SITE_URL = 'https://beautybyjitka.com';

export async function GET() {
	const staticPages = [
		{ path: '/', priority: '1.0', changefreq: 'weekly' },
		{ path: '/about', priority: '0.8', changefreq: 'monthly' },
		{ path: '/services', priority: '0.9', changefreq: 'weekly' },
		{ path: '/results', priority: '0.7', changefreq: 'weekly' },
		{ path: '/financing', priority: '0.6', changefreq: 'monthly' },
		{ path: '/contact', priority: '0.8', changefreq: 'monthly' },
		{ path: '/training', priority: '0.7', changefreq: 'monthly' },
		{ path: '/privacy', priority: '0.3', changefreq: 'yearly' },
		{ path: '/terms', priority: '0.3', changefreq: 'yearly' }
	];

	const categoryPages = serviceCategories.map((cat) => ({
		path: `/services/${slugify(cat.name)}`,
		priority: '0.7',
		changefreq: 'monthly' as const
	}));

	const servicePages = services.map((s) => ({
		path: `/service/${slugify(s.name)}`,
		priority: '0.6',
		changefreq: 'monthly' as const
	}));

	const allPages = [...staticPages, ...categoryPages, ...servicePages];
	const today = new Date().toISOString().split('T')[0];

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
			.map(
				(page) => `  <url>
    <loc>${SITE_URL}${page.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
			)
			.join('\n')}
</urlset>`;

	return new Response(sitemap, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=3600'
		}
	});
}
