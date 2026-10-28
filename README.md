# Tech Kidz Preschool – Website

Next.js 15 + Tailwind CSS 4 + Neon (Postgres).

## Pages

| Page | URL |
|---|---|
| Home (same as the design) | `/` |
| About | `/about` |
| Programs + 4 program pages | `/programs`, `/programs/seedlings` … |
| Daycare | `/daycare` |
| Franchise | `/franchise` |
| Centres (with map) | `/centres` |
| Admissions | `/admissions` |
| Contact (with map) | `/contact` |
| Blog + 3 posts | `/blog` |
| Enquiries list (private) | `/admin?key=YOUR_ADMIN_KEY` |

Every form saves into the Neon table `enquiries`.

## How to run

1. Install packages
   ```
   npm install
   ```
2. Make a free database at https://neon.tech → New Project → copy the connection string.
3. Copy `.env.example` to `.env.local` and paste the string into `DATABASE_URL`. Set any secret word for `ADMIN_KEY`.
4. Create the table
   ```
   npm run db:setup
   ```
5. Start the site
   ```
   npm run dev
   ```
   Open http://localhost:3000

## Photos

12 photos are already in `public/images/` and used across the site:

| File | Used on |
|---|---|
| `school-group.jpg` | Home top banner, About, Franchise |
| `child-portrait.jpg` | Seedlings card, parent quote |
| `alphabet.jpg` | Sprouts card, learning section |
| `numbers-shapes.jpg` | Blossoms card, learning section, blog |
| `classroom-play.jpg` | Rising Stars card, About top |
| `creative-art.jpg` | Programs top, learning section |
| `storytime.jpg` | Learning section, campus tour, blog |
| `nature-garden.jpg` | Learning section, Centres top, campus tour |
| `music.jpg` | Learning section, Daycare |
| `playground.jpg` | Daycare, Centres, campus tour |
| `parent-family.jpg` | "For parents" section, Contact top, blog |
| `parent-teacher.jpg` | Admission steps, Admissions top |

To change a photo, replace the file with a new one using the same name.
Bigger photos (1600px wide or more) will look sharper on large screens.

## Change text and details

All school details are in **`lib/site.ts`**: name, address, phone, email, timings,
stats numbers, program details and blog posts. Change them there once and every page updates.

Things still to fill in (marked with `[ ]` on the site):
- Phone number and email
- Stats (centres, cities, children, rating)
- Parent quote on the home page
- Team names and photos on the About page

The logo is in `components/Logo.tsx` (and `app/icon.svg` for the browser tab).

## Put it online (Vercel)

1. Push this folder to GitHub.
2. Import it at https://vercel.com.
3. Add `DATABASE_URL` and `ADMIN_KEY` in Project → Settings → Environment Variables.
4. Deploy.
