# Portfolio update prompt

Paste this into **Claude Code** (terminal, desktop app, or claude.ai/code) whenever you want to
change the portfolio front end. It works from any device because the code lives on GitHub.

---

## THE PROMPT (copy everything below)

You are updating my Next.js portfolio site.

**Repo:** https://github.com/toidze/ana.toidze (branch `main`)
**Stack:** Next.js 16.3.3 (App Router, breaking changes vs older Next — read `node_modules/next/dist/docs/` before writing framework code), React 19, TypeScript, Tailwind CSS v4, `motion` for animation, `lucide-react` icons, Sanity CMS via `next-sanity`.
**Layout:** pages in `app/`, UI in `components/`, data/CMS helpers in `lib/`, Sanity schemas in `sanity/`.
**Design rules:** mobile-first, custom brand colors (no default Tailwind blue/indigo), animate only `transform`/`opacity` (never `transition-all`), every interactive element needs hover + focus-visible + active states.

Steps every time:
1. If you don't already have the code locally, clone it:
   `git clone https://github.com/toidze/ana.toidze.git && cd ana.toidze && npm install`
   (If you're on my Mac, it's already at `portfolio/` — just `cd` there and `git pull` first.)
2. Make sure you're on the latest: `git checkout main && git pull`.
3. Make the change I describe below. Match the existing code style, spacing, and component patterns.
4. Verify it builds: `npm run build` (and `npm run dev` + screenshot if it's a visual change).
5. Show me a short summary of what changed, then commit with a clear message and push to `main`.
   Do NOT push anything else or force-push.

Do NOT touch `.env.local`, Sanity content, or anything unrelated to my request. Ask before deleting files.

**What I want changed this time:**
<describe the change here — e.g. "make the hero heading bigger on mobile", "add a Contact section", "swap the accent color to #E4572E">

---

## Notes
- **Content** (project text, images, case studies) is managed in **Sanity CMS**, not in code — edit those in the Sanity Studio, not by prompting.
- **Code/design changes** (layout, styling, components, animations, new sections) go through the prompt above.
- After a push, your host (Vercel/Netlify) redeploys automatically if auto-deploy is on.
- If you're in a plain Claude chat with no Claude Code, I can only give you code snippets to paste
  manually — for real file changes I need to be running as Claude Code against the repo.
