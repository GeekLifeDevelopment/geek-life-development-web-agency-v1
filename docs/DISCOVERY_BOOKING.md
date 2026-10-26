# Discovery-call booking setup

The website supports an optional external booking link, without making booking dependent on a particular scheduling vendor.

## Current experience

- Visitors follow /book from the homepage, header, pricing, services, or contact page.
- The site's default booking link is **https://calendar.app.google/pQqiyazKYdjspRa8A** (provided by the business owner). /book displays the **View available times** option and a short inquiry form.
- Netlify Forms handles that fallback form (name: discovery-call); a successful submission goes to /contact/thanks.
- Form submission requests a response. It is **not** a confirmed appointment.
- To change scheduling providers later, set PUBLIC_BOOKING_URL to a different valid HTTPS URL; it overrides the default booking link. The email request form remains as a backup.

## Create the appointment schedule

1. Sign in to Google Calendar with the **Geek Life Development business identity** intended to appear on public bookings, rather than an unrelated personal or creator account.
2. On a computer, choose **Create > Appointment schedule**.
3. Suggested title: **Geek Life Development — 15-Minute Discovery Call**.
4. Set duration to **15 minutes**. Choose your preferred meeting method (Google Meet or phone), real working hours, and appropriate notice, buffers, and maximum bookings. Availability must fit existing client work.
5. In the description, say this is an introductory call for websites, custom business software, or workflow improvements, not a full project audit or a price commitment.
6. Keep first name, last name, and email required. Add a short question about the business and what the visitor hopes to accomplish, if the account allows it. Consider email verification and reminders where available.
7. Review the account name/photo presented publicly on the booking page, and check calendar conflicts and timezone.
8. Save the appointment schedule. Under **Booking pages** in Google Calendar, copy the shareable link.

Official Google instructions:
- https://support.google.com/calendar/answer/10729749
- https://support.google.com/calendar/answer/10733297

Some features depend on the Google account's plan.

## Wire the booking URL into Netlify

1. The owner-supplied Google appointment URL is already configured as the site's default. No Netlify environment variable is required for initial deployment.
2. If the booking page changes, update `defaultBookingUrl` in `src/config/site.ts` **or** set `PUBLIC_BOOKING_URL` in the Geek Life Development Netlify site settings to a replacement HTTPS link; this variable is intentionally public, not a secret.
3. Trigger a new deploy so Astro builds with the booking URL.
4. Test /book, the main navigation CTA, and homepage CTA. Check that the link opens a business-branded booking page.
5. Make a test appointment to confirm the correct account, appointment length, time zone, reminder settings, and other calendar-conflict settings. Cancel the test booking afterward.

If an empty override is configured, the default Google appointment URL is used. If an **invalid nonempty** override is configured, the booking page falls back to the Netlify inquiry form (there is no fabricated booking URL).

## Confirm the fallback form works

- Netlify site settings must have form detection enabled.
- After the deployment containing /book, verify the Netlify Forms dashboard shows a form named **discovery-call**.
- Submit a test inquiry using non-sensitive test data and confirm it appears in Netlify's form submissions.
- Configure Netlify form email notifications to your desired business inbox; form capture and inbox notification are separate settings.
- Verify the thank-you page loads; it has noindex set.
- Do not assume automatic customer replies or CRM records are configured until those integrations are separately implemented.

## Outstanding decisions

- Confirm the owner-supplied Google Calendar page displays the intended business identity, appointment duration, and availability; external page contents have not yet been independently verified.
- Approve the appointment availability and meeting method.
- Confirm and publish an accurate privacy policy before expanding lead capture.
- Configure and test source attribution and booked-meeting analytics, without including submitted contact details in analytics events.
- Verify mobile layout and run npm ci, npm run build, and npm run lint before merging.
