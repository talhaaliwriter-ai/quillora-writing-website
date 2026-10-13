# Quillora — Writing & Content Solutions

Quillora is a professional web application for editorial, SEO content, academic proofreading, and research writing services founded and led by **Talha Ali**.

---

## 1. Brand & Identity Overview

- **Brand Name:** Quillora
- **Tagline:** Writing & Content Solutions
- **Founder:** Talha Ali (Lead Content Strategist & Founder)
- **Public Business Email:** talhahashim816@gmail.com
- **Communication Policy:** Asynchronous written correspondence via verified business email. No phone or WhatsApp support.
- **Brand Colors:**
  - Deep Royal Navy: `#17136B`
  - Bright Yellow: `#FFD400`
  - White: `#FFFFFF`
  - Light Gray: `#F4F5F8`
  - Main Text: `#25254B`
  - Secondary Text: `#66677A`
  - Pale Yellow: `#FFF8CC`

---

## 2. Centralized Introductory Pricing ($ USD)

Configured centrally in `src/config/siteConfig.ts`:

1. **Starter Article — $20 USD**
   - Up to 500 words
   - Basic brief-based research
   - 1 consolidated revision round included
2. **SEO Blog — $40 USD**
   - Up to 800 words
   - Basic SEO-friendly headings and metadata snippet
   - 1 consolidated revision round included
3. **Content Growth — $100 USD**
   - 3 articles up to 700 words each (2,100 total words)
   - Agreed topics and basic keyword alignment
   - 1 consolidated revision round included
4. **Premium Content Pack — $200 USD**
   - 4 articles up to 1,000 words each (4,000 total words)
   - Agreed content plan, full metadata suite, and deep citation references
   - 1 consolidated revision round included

*Note: All prices are editable starting points subject to mutual scope agreement.*

---

## 3. Approved Social Profiles

- **LinkedIn (Personal):** https://www.linkedin.com/in/talha-ali-33418b384/
- **LinkedIn (Freelance):** https://www.linkedin.com/in/talha-freelancer-369240396/
- **Pinterest:** https://uk.pinterest.com/talhafreelancr109/
- **X (Twitter):** https://x.com/Talha70234
- **Medium:** https://medium.com/@talhafreelancr109

---

## 4. 12 Dedicated Service Pages

1. `/services/content-writing` — Content Writing
2. `/services/seo-content-writing` — SEO Content Writing
3. `/services/article-writing` — Article Writing
4. `/services/blog-writing` — Blog Writing
5. `/services/copywriting` — Copywriting
6. `/services/website-content-writing` — Website Content Writing
7. `/services/academic-editing-proofreading` — Academic Editing & Proofreading (Ethical integrity focus: zero ghostwriting, purely editorial polishing & style manual compliance)
8. `/services/research-citation-assistance` — Research & Citation Assistance
9. `/services/product-descriptions` — Product Descriptions
10. `/services/web-research` — Web Research
11. `/services/content-optimization` — Content Optimization
12. `/services/business-professional-writing` — Business & Professional Writing

---

## 5. Deployment Guide (Netlify)

This project is configured out-of-the-box for Netlify hosting.

### Quick Deploy:
1. Extract `quillora-writing-website.zip`.
2. Run `npm install` and `npm run build`.
3. Drag and drop the `dist/` directory into your Netlify dashboard, or connect the Git repository.
4. Netlify routing and security headers are pre-configured via `netlify.toml` and `public/_redirects`.
5. Configure form notification emails in Netlify under **Site Configuration > Forms > Form notifications** to route submissions to `talhahashim816@gmail.com`.

---

## 6. Build Commands

```bash
# Install dependencies
npm install

# Run local development server (port 3000)
npm run dev

# Run production build
npm run build

# Run lint & TypeScript verification
npm run lint
```
