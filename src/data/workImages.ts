import type { ImageMetadata } from 'astro';
import burntDirtArtDesktop from '../assets/burnt-dirt-art-image.png';
import burntDirtArtMobile from '../assets/burnt-dirt-art-mobile.png';
import factoryCatDesktop from '../assets/factory-cat-image.png';
import factoryCatMobile from '../assets/factory-cat-mobile.png';
import overwhelmedGamerDesktop from '../assets/overwhelmed-gamer-image.png';
import overwhelmedGamerMobile from '../assets/overwhelmed-gamer-mobile.png';

export type WorkImageSet = {
  desktop: ImageMetadata;
  mobile: ImageMetadata;
  alt: string;
};

export const workImagesBySlug: Record<string, WorkImageSet> = {
  'burnt-dirt-art': {
    desktop: burntDirtArtDesktop,
    mobile: burntDirtArtMobile,
    alt: 'Burnt Dirt Art website preview'
  },
  factorycat: {
    desktop: factoryCatDesktop,
    mobile: factoryCatMobile,
    alt: 'FactoryCat website preview'
  },
  'overwhelmed-gamer': {
    desktop: overwhelmedGamerDesktop,
    mobile: overwhelmedGamerMobile,
    alt: 'The Overwhelmed Gamer website preview'
  }
};

export function getWorkImages(slug: string): WorkImageSet | undefined {
  return workImagesBySlug[slug];
}
