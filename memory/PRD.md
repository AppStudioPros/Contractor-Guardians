# Contractor Guardians Website - Product Requirements Document

## Original Problem Statement
Rebuild a WordPress website using a modern tech stack: Next.js (with App Router), Sanity.io as a headless CMS, and Vercel for deployment.

## Tech Stack
- **Framework:** Next.js 14 (App Router), TypeScript
- **Styling:** TailwindCSS, Framer Motion
- **CMS:** Sanity.io v3 (Project ID: `9nystb6p`)
- **Email:** Resend (placeholder)
- **Deployment:** Vercel
- **Repository:** https://github.com/AppStudioPros/Contractor-Gaurdians

## Brand Identity
- **Guardian Gold:** `#F8AB20`
- **Guardian Black:** `#0B0B0D`
- **Shield Blue:** `#1D4ED8`
- **Typography:** Barlow Condensed (headlines), Inter (body)
- **Design Direction:** Dark, premium, contractor-themed with shields and blueprint patterns

## Pages
- `/` - Home (hero, features, how it works, video, pricing, testimonials, CTA)
- `/about` - About Us
- `/investor` - Investment Opportunity
- `/contractors` - Contractor Pre-Launch Signup
- `/affiliates` - Affiliate Partnership
- `/tradeschool` - CGTP Tradeschool Program
- `/contact` - Contact Us
- `/privacy` - Privacy Policy
- `/terms` - Terms of Service

---

## What's Been Implemented

### January 2026
- [x] Full Next.js 14 project scaffolded and deployed to Vercel
- [x] All page routes created with content
- [x] Layout components (Header, Footer)
- [x] Sanity Studio schemas (documents, objects, sections)
- [x] Contact form API route with Resend integration
- [x] SEO files (sitemap.ts, robots.ts)
- [x] **Design System Updates:**
  - Updated typography: Barlow Condensed for headlines
  - Refreshed Hero Section with floating stats cards, gold glow effects
  - Bento Grid layout for Features Section
  - Enhanced CTA Section with gradient backgrounds
  - Improved Video Section with stats display
  - Explainer video embedded (https://youtu.be/lO6joot_qtg)
  - Removed patriotic theme elements
  - Added shield and blueprint decorative elements

---

## Prioritized Backlog

### P1 - High Priority
- [ ] Deploy Sanity Studio to sanity.studio
- [ ] Configure Resend with verified domain for form emails
- [ ] Set up Sanity webhook for auto-revalidation

### P2 - Medium Priority
- [ ] Update remaining pages with new design system (About, Contact, etc.)
- [ ] Add more contractor-themed imagery
- [ ] Enhance testimonials section
- [ ] Review mobile responsiveness

### P3 - Future
- [ ] Custom domain setup (contractorguardians.com)
- [ ] Analytics and conversion tracking
- [ ] Blog functionality

---

## Environment Variables (Vercel)
```
NEXT_PUBLIC_SANITY_PROJECT_ID=9nystb6p
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2025-01-01
SANITY_API_READ_TOKEN=<configured>
NEXT_PUBLIC_SITE_URL=https://contractorguardians.com
SANITY_WEBHOOK_SECRET=NM3BN6gvCN0akuaCu7K7zoBfz6ejFnKw
RESEND_API_KEY=placeholder
CONTACT_EMAIL=info@contractorguardians.com
DRAFT_MODE_SECRET=SxwGdtyibuJlx67Y4YDYWT94HUBncqZn
```
