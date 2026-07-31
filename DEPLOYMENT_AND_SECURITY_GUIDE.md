# Tiger Gardens — Free Vercel Deploy + Security Checklist (Newb-Friendly)

This guide helps you move your existing site to your own hosting and keep it secure.

## 1) What this gives you

1) A production deployment on Vercel (free tier).
2) Your existing domain (example: `tigergardens.com`) connected.
3) HTTPS automatically enabled.
4) Baseline security headers added in your code (`web/next.config.ts`).

---

## 2) Make sure the site files are in GitHub

1. Open a terminal in `C:\Projects\TigerOS\TigerOS`.
2. Run:

```bash
git status
```

If this is not a git repo yet:

```bash
git init
git add .
git commit -m "Prepare Tiger Gardens site"
```

Create a GitHub repo and push:

```bash
git remote add origin https://github.com/YOUR_GITHUB_USER/tiger-gardens-site.git
git branch -M main
git push -u origin main
```

If GitHub already exists:

```bash
git add .
git commit -m "Update deployment/security checklist"
git push
```

## 3) Optional: add .gitignore checks

Keep these out of Git:

```text
node_modules/
.next/
.wrangler/
.env
.env.local
.env.*
```

If any of these are tracked already, remove them:

```bash
git rm -r --cached node_modules .next .wrangler .env .env.local || true
git commit -m "Remove local-only files"
git push
```

## 4) Create Vercel free project

1. Open [vercel.com](https://vercel.com) and sign in with GitHub.
2. Click **Add New Project**.
3. Pick repo `tiger-gardens-site`.
4. In settings:
   - Framework preset: `Next.js` (auto-detected)
   - Build command: `npm run build`
   - Install command: `npm install`
5. Click **Deploy**.

## 5) Connect your existing domain

### Add domains in Vercel

1. In project → **Settings → Domains**.
2. Add:
   - `tigergardens.com`
   - `www.tigergardens.com`
3. Vercel will show DNS targets (copy exactly).

### DNS setup at your provider

At your domain host, add these records exactly from Vercel:

1. For `@` (root):
   - set to A / ALIAS / ANAME as instructed by Vercel.
2. For `www`:
   - CNAME to Vercel target.
3. If old A/CNAME records exist for these names, remove conflicting ones first.
4. Wait 5–30 minutes (sometimes up to a few hours).

## 6) Verify public/private behavior

- To test while deploying: use the temporary `*.vercel.app` URL first.
- Then open `https://tigergardens.com`.
- If you get certificate errors, wait longer for DNS + SSL.
- If domain redirects to the wrong host, keep domain settings to one canonical host:
  - Either root only
  - or `www` only + redirect rule later in Vercel.

## 7) Security status and what’s already added

We added baseline headers in `web/next.config.ts`:

1. `Strict-Transport-Security`
2. `X-Frame-Options: DENY`
3. `X-Content-Type-Options: nosniff`
4. `Referrer-Policy`
5. `Permissions-Policy`
6. `Content-Security-Policy`

This improves clickjacking, MIME sniffing, and mixed-content behavior.

## 8) Security checks you should still do (important)

1. HTTPS active on every page (`https://...`).
2. No secret keys in code.
3. Do not expose `.env` values in public files.
4. Keep dependencies updated occasionally.
5. Enable 2FA on GitHub and domain registrar account.
6. For admin/contact forms, add server-side validation (not just front-end checks).

## 9) If you want a temporary private stage (before launch)

You can use Vercel Deployment Protection:
1. In Vercel project → **Settings → Security → Deployment Protection**.
2. Turn on password protection for non-production or all deployments as needed.
3. Turn it off when ready for public launch.

## 10) Quick test plan after launch

1) Open `https://tigergardens.com`
2) Run a security header check (search "security headers checker").
3) Click all top nav links.
4) Open image and video pages from another device/network.
5) Verify there are no console errors in Chrome DevTools for CSP blocking.

---

## 11) Your current live site state (informational)

From your existing Codex Sites project, the project id is:

`appgprj_6a6a47d0ce808191a111b9319b3a2cc1`

If you still want to continue using Codex Sites, the same project currently had `custom` (owner-only) access previously; new self-hosting via Vercel is separate from that and fully under your account.
