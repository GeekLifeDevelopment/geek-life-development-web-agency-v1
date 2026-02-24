import { siteConfig as coreSiteConfig } from '../config/site';

export const siteConfig = {
  name: coreSiteConfig.siteName,
  url: coreSiteConfig.siteUrl,
  description: coreSiteConfig.defaultDescription,
  tagline: 'Modern websites and simple apps for small businesses',
  email: coreSiteConfig.email,
  locale: coreSiteConfig.locale,
  ogImage: coreSiteConfig.ogImage
};

export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/work', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' }
];