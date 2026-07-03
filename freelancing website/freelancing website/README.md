# NexEra

Production-ready full-stack digital agency website for **NexEra**.

## Stack

- Next.js 15, React 19, TypeScript, Tailwind CSS, Framer Motion, GSAP-ready structure, Three.js hero animation, Radix/Shadcn-style UI primitives, Lucide Icons
- Node.js, Express, MongoDB, Mongoose
- JWT authentication
- Nodemailer lead notifications
- Vercel frontend and Render backend ready

## Project Structure

```text
apps/
  web/   Next.js frontend
  api/   Express + MongoDB backend
```

## Local Setup

```bash
npm install
cp apps/api/.env.example apps/api/.env
npm run seed
npm run dev
```

Frontend: `http://localhost:3000`  
Backend: `http://localhost:5000`

## Environment

Set these for production:

- `MONGODB_URI`
- `JWT_SECRET`
- `CLIENT_URL`
- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_USER`
- `SMTP_PASS`
- `LEAD_NOTIFY_TO=kk25technicalteam@gmail.com`
- `NEXT_PUBLIC_API_URL`
- `NEXT_PUBLIC_SITE_URL`

## Deployment

### Vercel

1. Import the repository.
2. Set root directory to `apps/web`.
3. Add `NEXT_PUBLIC_API_URL` pointing to the Render API URL.
4. Add `NEXT_PUBLIC_SITE_URL` for canonical, sitemap and schema URLs.
5. Deploy.

### Render

1. Create a Web Service.
2. Set root directory to `apps/api`.
3. Build command: `npm install && npm run build`.
4. Start command: `npm run start`.
5. Add MongoDB and SMTP environment variables.

## API Overview

- `POST /api/leads` saves leads and attempts email notification.
- `GET /api/leads` lists leads for admins.
- `GET /api/leads/export.csv` exports leads.
- `DELETE /api/leads/:id` deletes a lead.
- `POST /api/auth/login` returns a JWT.
- `GET/POST/PUT/DELETE /api/portfolio` manages portfolio projects.
- `GET/POST/PUT/DELETE /api/content` manages services, FAQs, pricing, testimonials and clients.

If lead email fails, the lead is still saved with `emailStatus: "failed"`.
