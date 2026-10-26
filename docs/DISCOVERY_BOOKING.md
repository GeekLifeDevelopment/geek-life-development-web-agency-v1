# Discovery-call booking setup

The website supports an optional external booking link, without making booking dependent on a particular scheduling vendor.

## Current experience

- Visitors follow /book from the homepage, header, pricing, services, or contact page.
- Until a valid HTTPS URL is configured, /book shows a short **Request a call** form.
- Netlify Forms handles that fallback form (name: discovery-call); a successful submission goes to /contact/thanks.
- Form submission requests a response. It is **not** a confirmed appointment.
- When PUBLIC_BOOKING_URL is configured, /book offers a direct **View available times** link to the scheduler. The email request form remains as a backup.

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

1. Open the Geek Life Development site settings in Netlify.
2. Add an environment variable named **PUBLIC_BOOKING_URL** containing the full HTTPS booking page URL. It is intentionally public (not a secret).
3. Trigger a new deploy so Astro builds the updated site with the link.
4. Test /book, the main navigation CTA, and homepage CTA. Check that the link opens the correct business-branded booking page.
5. Make a test appointment to confirm the right calendar, appointment length, reminder settings, and any other calendar conflict settings. Remove the test booking afterward.

Do not put a fabricated URL in the source code. If the environment variable is blank or invalid, the page uses the Netlify form fallback.

## Confirm the fallback form works

- Netlify site settings must have form detection enabled.
- After the deployment containing /book, verify the Netlify Forms dashboard shows a form named **discovery-call**.
- Submit a test inquiry using non-sensitive test data and confirm it appears in Netlify's form submissions.
- Configure Netlify form email notifications to your desired business inbox; form capture and inbox notification are separate settings.
- Verify the thank-you page loads; it has noindex set.
- Do not assume automatic customer replies or CRM records are configured until those integrations are separately implemented.

## Outstanding decisions

- Confirm the desired booking-provider account and share URL.
- Approve the appointment availability and meeting method.
- Confirm and publish an accurate privacy policy before expanding lead capture.
- Configure and test source attribution and booked-meeting analytics, without including submitted contact details in analytics events.
- Verify mobile layout and run npm ci, npm run build, and npm run lint before merging.
