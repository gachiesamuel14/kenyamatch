# KenyaMatch

Location-based online dating website for people in Kenya.

Users can create profiles, discover nearby people (by GPS/county), swipe to like, match, and chat.

## Features (MVP Demo)

- Attractive landing page
- Discover/swipe interface with mock Kenyan profiles
- Location permission (falls back to Nairobi)
- Distance calculation
- Profile setup (saved in localStorage)
- Matches placeholder

## Tech Stack

- Next.js (App Router) + TypeScript + Tailwind CSS
- Deployed on Netlify
- Code on GitHub

## Next Steps for Production

1. Add real authentication (Supabase Auth or NextAuth)
2. Database (Supabase Postgres with PostGIS for locations)
3. Photo storage (Supabase Storage or Cloudinary)
4. Real-time chat (Supabase Realtime or Stream)
5. M-Pesa integration for premium
6. Safety: reporting, blocking
7. Filters: age, distance, tribe, religion, etc.

## Local Development

```bash
npm install
npm run dev
```

## Deploy

Connect this repo to Netlify. It auto-detects Next.js.
