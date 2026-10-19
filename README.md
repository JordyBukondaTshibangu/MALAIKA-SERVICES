# Malaïka Services — website

Multilingual (FR / EN) website for **Malaïka Services SARL**, Kinshasa: recruitment, staff placement and HR outsourcing, plus coworking, private offices, domiciliation and business support. Content follows the client's *Plaquette institutionnelle et commerciale*.

## Stack

- Next.js 15 (App Router) + TypeScript
- Tailwind CSS v4 (brand tokens in `src/app/[locale]/globals.css`)
- next-intl (`messages/fr.json` is the source text, `messages/en.json` the translation)
- Motion (`motion/react`) for animation, with reduced-motion respected globally
- Lexend + Figtree, self-hosted via `@fontsource-variable`
- React Hook Form + Zod, Resend for the contact form
- React Leaflet for the map

## Where to edit things

| What | File |
| --- | --- |
| All page text | `messages/fr.json`, `messages/en.json` |
| Phone, WhatsApp, e-mail, address, map pin, social links | `src/config/site.ts` (empty values are hidden) |
| Leadership team (hidden until filled) | `src/data/team.ts` |
| Service lists, icons, contact-form topics | `src/data/services.ts` |

Service buttons link to `/contact?besoin=<topic>` so the form opens with the right topic selected.

## Pages

- `/` home: hero, HR services, intro, 5-step journey, spaces, audiences, call to action
- `/services`: full HR services, workspaces and support, journey
- `/about`: who we are, mission and vision, values, team, why choose us, audiences
- `/contact`: request form, contact details, map

## Development

```bash
npm install
cp .env.example .env.local   # add your Resend keys
npm run dev
```

Production: `npm run build && npm start` (Vercel recommended).

Author: Jordy Tshibangu, Kinshasa, DRC
