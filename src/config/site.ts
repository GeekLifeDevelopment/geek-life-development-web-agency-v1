// Google Calendar appointment schedule supplied by the business owner.
// Override with PUBLIC_BOOKING_URL in Netlify if the booking provider changes.
const defaultBookingUrl = 'https://calendar.app.google/pQqiyazKYdjspRa8A';
const configuredBookingUrl = String(import.meta.env.PUBLIC_BOOKING_URL || defaultBookingUrl).trim();
const bookingUrl = (() => {
  if (!configuredBookingUrl) return null;
  try {
    const parsed = new URL(configuredBookingUrl);
    return parsed.protocol === 'https:' ? parsed.toString() : null;
  } catch {
    return null;
  }
})();

export const siteConfig = {
  siteName: 'Geek Life Development',
  siteUrl: 'https://geeklifedevelopment.com',
  defaultTitle: 'Geek Life Development',
  defaultDescription:
    'Modern websites, practical business applications, and ongoing support for small businesses. Serving Ozaukee County, the Milwaukee area, and remote clients.',
  email: 'jason@geeklifedevelopment.com',
  phoneDisplay: '262-208-4816',
  phoneHref: 'tel:+12622084816',
  locale: 'en_US',
  ogImage: '/og.png',
  googleAnalyticsId: 'G-5QF4FNPWX2',
  bookingUrl,
  bookingCtaLabel: bookingUrl ? 'Book a free 15-minute call' : 'Request a free 15-minute call',
  bookingNavLabel: bookingUrl ? 'Book a call' : 'Request a call'
};
