import type { ImageMetadata } from 'astro';
import artSiteImage from '../assets/art-site.png';
import gamerSiteImage from '../assets/gamer-site.png';

export type HomepageSelectedWork = {
  slug: string;
  projectType: string;
  title: string;
  summary: string;
  details: string;
  highlights: string[];
  screenshot: ImageMetadata;
};

export const selectedWorkProjects: HomepageSelectedWork[] = [
  {
    slug: 'burnt-dirt-art',
    projectType: 'Website redesign',
    title: 'Burnt Dirt Art',
    summary: "A redesign focused on creating a cleaner, more professional presentation while making the artist's work easier to browse.",
    details: 'Rebuilt the site to keep artwork front and center and make browsing collections feel clearer on every device.',
    highlights: [
      'Cleaner visual hierarchy',
      'Improved mobile experience',
      'Easier navigation and content discovery'
    ],
    screenshot: artSiteImage
  },
  {
    slug: 'overwhelmed-gamer',
    projectType: 'Creator website',
    title: 'The Overwhelmed Gamer',
    summary: 'A creator-focused website designed to organize content, strengthen brand presentation, and improve navigation clarity.',
    details: 'Structured the site around content discovery and a more consistent publishing experience.',
    highlights: [
      'Clearer content organization',
      'More consistent visual presentation',
      'Improved responsive/mobile experience'
    ],
    screenshot: gamerSiteImage
  }
];