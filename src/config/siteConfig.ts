/**
 * Central Configuration for Quillora — Writing & Content Solutions
 * All prices, package scopes, contact info, and social links are centralized here.
 */

export interface PricingPackage {
  id: string;
  name: string;
  priceUSD: number;
  wordCountLimit: number;
  tagline: string;
  badge?: string;
  scope: string;
  deliverables: string[];
  revisionRounds: number;
  deliveryTimeEstimate: string;
  idealFor: string;
}

export const siteConfig = {
  brandName: "Quillora",
  tagline: "Writing & Content Solutions",
  founderName: "Talha Ali",
  founderTitle: "Founder & Lead Content Strategist",
  contactEmail: "talhahashim816@gmail.com",
  currency: "USD",
  currencySymbol: "$",
  productionBaseUrl: "https://quillora.netlify.app",

  // Approved Social Links Only (No unverified networks)
  socialLinks: [
    {
      platform: "LinkedIn (Personal)",
      url: "https://www.linkedin.com/in/talha-ali-33418b384/",
      handle: "talha-ali-33418b384",
      icon: "linkedin",
    },
    {
      platform: "LinkedIn (Freelance)",
      url: "https://www.linkedin.com/in/talha-freelancer-369240396/",
      handle: "talha-freelancer-369240396",
      icon: "linkedin",
    },
    {
      platform: "Pinterest",
      url: "https://uk.pinterest.com/talhafreelancr109/",
      handle: "talhafreelancr109",
      icon: "pinterest",
    },
    {
      platform: "X (Twitter)",
      url: "https://x.com/Talha70234",
      handle: "@Talha70234",
      icon: "twitter",
    },
    {
      platform: "Medium",
      url: "https://medium.com/@talhafreelancr109",
      handle: "@talhafreelancr109",
      icon: "medium",
    },
  ],

  // Color scheme constants for reference
  themeColors: {
    navy: "#17136B",
    yellow: "#FFD400",
    paleYellow: "#FFF8CC",
    lightGray: "#F4F5F8",
    mainText: "#25254B",
    secondaryText: "#66677A",
    white: "#FFFFFF",
  },

  // Centralized Introductory Pricing Packages
  // Subject to mutual scope agreement and negotiation
  pricingPackages: [
    {
      id: "starter-article",
      name: "Starter Article",
      priceUSD: 20,
      wordCountLimit: 500,
      tagline: "High-impact single short piece",
      scope: "One article up to 500 words; basic brief-based research; one revision round.",
      deliverables: [
        "1 article up to 500 words",
        "Targeted brief-based research",
        "Engaging title & scannable subheadings",
        "1 revision round included",
        "Clean Google Doc / Markdown / Word delivery",
      ],
      revisionRounds: 1,
      deliveryTimeEstimate: "2–3 business days",
      idealFor: "Introductory briefs, concise explainers, quick founder updates, and introductory test projects.",
    },
    {
      id: "seo-blog",
      name: "SEO Blog",
      priceUSD: 40,
      wordCountLimit: 800,
      badge: "Most Popular",
      tagline: "Organic search visibility with natural reader flow",
      scope: "One article up to 800 words; basic SEO-friendly headings and metadata; one revision round.",
      deliverables: [
        "1 in-depth article up to 800 words",
        "Primary & secondary keyword integration",
        "SEO-friendly H2/H3 heading hierarchy",
        "Meta title & meta description draft included",
        "1 revision round included",
        "Natural tone avoiding keyword stuffing",
      ],
      revisionRounds: 1,
      deliveryTimeEstimate: "3–4 business days",
      idealFor: "Businesses looking to capture organic search queries while maintaining genuine editorial credibility.",
    },
    {
      id: "content-growth",
      name: "Content Growth",
      priceUSD: 100,
      wordCountLimit: 2100, // 3 * 700 words
      badge: "Best Value",
      tagline: "Consistent multi-article publishing momentum",
      scope: "Three articles up to 700 words each; agreed topics and basic keyword alignment; one consolidated revision round.",
      deliverables: [
        "3 articles (up to 700 words each / 2,100 words total)",
        "Agreed content topic schedule",
        "Targeted keyword & reader search intent alignment",
        "Meta descriptions & internal link suggestions",
        "1 consolidated revision round for all 3 drafts",
        "Formatted for immediate CMS publication",
      ],
      revisionRounds: 1,
      deliveryTimeEstimate: "5–7 business days",
      idealFor: "Growing websites, SaaS blogs, and brands establishing a consistent monthly publishing schedule.",
    },
    {
      id: "premium-content-pack",
      name: "Premium Content Pack",
      priceUSD: 200,
      wordCountLimit: 4000, // 4 * 1000 words
      tagline: "Comprehensive editorial suite for authoritative domains",
      scope: "Four articles up to 1,000 words each; agreed content plan and metadata; one consolidated revision round.",
      deliverables: [
        "4 comprehensive articles (up to 1,000 words each / 4,000 words total)",
        "Structured content outline & editorial planning",
        "Deep contextual research & supporting citation references",
        "Full metadata package (meta titles, descriptions, image alt tags)",
        "1 consolidated revision round for the full suite",
        "Priority scheduling and dedicated communication",
      ],
      revisionRounds: 1,
      deliveryTimeEstimate: "7–10 business days",
      idealFor: "Authority building, pillar content clusters, e-books/guides, and comprehensive content marketing programs.",
    },
  ] as PricingPackage[],
};
