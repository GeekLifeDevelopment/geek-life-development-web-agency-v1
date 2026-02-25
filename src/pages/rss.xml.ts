import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';
import { siteConfig } from '../config/site';

export async function GET(context: APIContext) {
  const posts = (await getCollection('resources', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime()
  );

  return rss({
    title: 'Geek Life Development Resources',
    description: 'Practical guides for small businesses — websites, pricing, and what to do next.',
    site: context.site ?? siteConfig.siteUrl,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/resources/${post.slug}/`
    }))
  });
}
