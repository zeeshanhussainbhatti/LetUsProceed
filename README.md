# Let Us Proceed website

Next.js (App Router) rebuild of letusproceed.com with the content from the page placement docs.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy

Import the repository into Vercel (framework: Next.js, no settings needed), then point the
`letusproceed.com` domain at the project.

## Where things live

- `src/lib/site.ts`: addresses, phones, email, menu, social links (one source for header, footer, contact box and schema)
- `src/app/**/page.tsx`: page content, titles and meta descriptions
- `src/components/ServicePage.tsx`: shared layout for the six service pages
- `public/images`: logo, illustrations, client logos, portfolio tiles

## Still to do

- Contact form opens the visitor's email app. Connect a form/email service to receive submissions directly.
- Privacy Policy, Terms and SMS Terms pages need their legal text (they are `noindex` until then).
- Service-page illustrations use brand shapes until the original image files are supplied.
