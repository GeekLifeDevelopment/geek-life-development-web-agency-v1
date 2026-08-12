import type { ImageMetadata } from 'astro';
import artSiteDesktop from '../assets/art-site.png';
import burntDirtArtMobile from '../assets/burnt-dirt-art-mobile.png';
import factoryCatDesktop from '../assets/factory-cat-image.png';
import factoryCatMobile from '../assets/factory-cat-mobile.png';
import gamerSiteDesktop from '../assets/gamer-site.png';
import overwhelmedGamerMobile from '../assets/overwhelmed-gamer-mobile.png';

export type WorkImageSet = {
  desktop: ImageMetadata;
  mobile: ImageMetadata;
  alt: string;
};

export const workImagesBySlug: Record<string, WorkImageSet> = {
  'burnt-dirt-art': {
    desktop: artSiteDesktop,
    mobile: burntDirtArtMobile,
    alt: 'Burnt Dirt Art website preview'
  },
  factorycat: {
    desktop: factoryCatDesktop,
    mobile: factoryCatMobile,
    alt: 'FactoryCat website preview'
  },
  'overwhelmed-gamer': {
    desktop: gamerSiteDesktop,
    mobile: overwhelmedGamerMobile,
    alt: 'The Overwhelmed Gamer website preview'
  }
};

export function getWorkImages(slug: string): WorkImageSet | undefined {
  return workImagesBySlug[slug];
}
