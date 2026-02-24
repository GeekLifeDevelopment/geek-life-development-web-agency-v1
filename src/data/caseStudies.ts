export type CaseStudy = {
  slug: string;
  client: string;
  title: string;
  summary: string;
  industry: string;
  services: string[];
  results: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: 'oakridge-dental-redesign',
    client: 'Oakridge Dental',
    title: 'Website redesign that increased booked consultations',
    summary:
      'Refreshed messaging, rebuilt key pages, and improved mobile conversion flow for a local dental practice.',
    industry: 'Healthcare',
    services: ['Website Redesign', 'Copywriting', 'Technical SEO'],
    results: ['+42% consultation requests', '-38% bounce rate', 'LCP improved from 3.6s to 1.9s']
  },
  {
    slug: 'northstar-landscaping-lead-funnel',
    client: 'Northstar Landscaping',
    title: 'Lead funnel launch with targeted service pages',
    summary:
      'Built campaign landing pages and automated lead routing to help a landscaping team close more qualified work.',
    industry: 'Home Services',
    services: ['Landing Pages', 'CRO', 'Analytics'],
    results: ['+63% qualified leads', '+28% close rate', '12 new recurring contracts in 90 days']
  },
  {
    slug: 'summit-legal-content-rebuild',
    client: 'Summit Legal Group',
    title: 'Authority content system for legal practice growth',
    summary:
      'Produced a structured content hub and service architecture designed for discoverability and trust-building.',
    industry: 'Legal',
    services: ['Content Strategy', 'Information Architecture', 'On-page SEO'],
    results: ['+88% organic traffic', 'Top 3 rankings for 14 target terms', '+31% contact form submissions']
  }
];