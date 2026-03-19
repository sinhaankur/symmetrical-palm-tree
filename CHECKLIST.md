# Project Checklist: symmetrical-palm-tree

## Core Services (Public)
- [x] Homepage
- [x] Product overview (SaaS & On-Premise)
- [x] Pricing information
- [x] Documentation page
- [x] Upcoming Aware IoT section

## Authentication
- [x] User sign in
- [x] User sign up
- [x] Auth context/provider

## Post-Login (Dashboard)
- [x] Dashboard page (basic)
- [ ] User profile management
- [ ] Role-based access (admin, staff, etc.)
- [ ] Facility management features
- [ ] Notifications center
- [ ] Historical trend analysis (UI)

## IoT & Monitoring (Planned)
- [ ] Water leak detection integration
- [ ] HVAC monitoring integration
- [ ] Electrical system alerts integration
- [ ] Temperature/humidity tracking integration
- [ ] Automated staff notifications (IoT)

## Security & Privacy
- [x] Isolated environments per customer
- [ ] Advanced audit logging
- [ ] Customizable security settings

## Deployment
- [x] Dockerfile for on-premise
- [ ] Static export for GitHub Pages (if possible)
- [ ] Cloudflare deployment (pending decision)

---

Update this checklist as features are built or planned. For more details, see DOCUMENTATION.md.

pnpm add prisma @prisma/client
pnpm add sqlite3 --save-dev
