import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async () => {
    try {
        const response = await fetch('https://engage-dev.com/beautybyjitka/api/scrape-tiktok');

        if (!response.ok) {
            throw new Error(`Failed to fetch data: ${response.statusText}`);
        }

        const data = await response.json();

        return new Response(JSON.stringify(data), {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    } catch (error) {
        console.error('Failed to fetch data:', error);

        return new Response(JSON.stringify({ error: 'Failed to fetch data' }), {
            headers: {
                'Content-Type': 'application/json'
            },
            status: 500
        });
    }
};
