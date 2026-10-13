export interface LegalPolicy {
  id: string;
  slug: string;
  title: string;
  effectiveDate: string;
  summary: string;
  sections: {
    heading: string;
    content: string[];
  }[];
}

export const legalPoliciesData: Record<string, LegalPolicy> = {
  "privacy-policy": {
    id: "privacy-policy",
    slug: "privacy-policy",
    title: "Privacy Policy",
    effectiveDate: "October 2026",
    summary: "How Quillora collects, uses, and safeguards information provided by clients and website visitors.",
    sections: [
      {
        heading: "1. Information We Collect",
        content: [
          "Quillora collects personal information that you voluntarily provide when inquiring about writing services, requesting quotes, or corresponding with us via email (talhahashim816@gmail.com). This may include your name, business name, email address, website URL, and project brief details.",
          "We do not collect sensitive personal financial data directly on this website. Payments and transactions are conducted through agreed, secure commercial invoicing mechanisms.",
        ],
      },
      {
        heading: "2. How We Use Your Information",
        content: [
          "We use collected information solely to assess project briefs, formulate accurate quotes, deliver written content, execute agreed revision rounds, and communicate regarding editorial deadlines.",
          "We never sell, rent, monetize, or distribute your personal details or draft materials to third-party advertisers or data brokers.",
        ],
      },
      {
        heading: "3. Confidentiality of Client Manuscripts & Drafts",
        content: [
          "All proprietary project briefs, unpublished manuscripts, research notes, and business documents provided to Quillora are treated with strict confidentiality. Non-disclosure agreements (NDAs) are available upon mutual agreement prior to project commencement.",
        ],
      },
      {
        heading: "4. Contact Information",
        content: [
          "For privacy questions or data deletion requests, contact Talha Ali at talhahashim816@gmail.com.",
        ],
      },
    ],
  },

  "terms-and-conditions": {
    id: "terms-and-conditions",
    slug: "terms-and-conditions",
    title: "Terms & Conditions",
    effectiveDate: "October 2026",
    summary: "Terms governing use of the Quillora website and ordering editorial and content services.",
    sections: [
      {
        heading: "1. Acceptance of Terms",
        content: [
          "By accessing the Quillora website or commissioning writing and editorial services, you acknowledge and agree to these Terms & Conditions and our associated Client Service Agreement.",
        ],
      },
      {
        heading: "2. Scope of Services & Introductory Pricing",
        content: [
          "All prices listed on this website (Starter Article $20, SEO Blog $40, Content Growth $100, Premium Content Pack $200) represent introductory guide prices and remain subject to mutual scope agreement and formal quotation based on research complexity and technical depth.",
          "Each standard package includes one consolidated revision round. Additional revisions or structural scope expansions requested after initial brief signoff are billed at agreed additional rates.",
        ],
      },
      {
        heading: "3. Intellectual Property Rights",
        content: [
          "Upon receipt of full payment, all copyright and intellectual property rights in custom commercial written deliverables transfer exclusively to the client, unless otherwise agreed in writing.",
          "Sample portfolio pieces displayed on the website remain demonstration property of Quillora.",
        ],
      },
      {
        heading: "4. Contact Information",
        content: [
          "Inquiries regarding these terms should be directed to talhahashim816@gmail.com.",
        ],
      },
    ],
  },

  "refund-cancellation-policy": {
    id: "refund-cancellation-policy",
    slug: "refund-cancellation-policy",
    title: "Refund & Cancellation Policy",
    effectiveDate: "October 2026",
    summary: "Clear, transparent terms regarding project cancellations, deposits, and editorial adjustments.",
    sections: [
      {
        heading: "1. Custom Nature of Writing Services",
        content: [
          "Because written content and editorial services involve dedicated human labor and customized creative output, completed and delivered assignments are non-refundable once the final revision round has concluded.",
        ],
      },
      {
        heading: "2. Cancellation Prior to Drafting",
        content: [
          "If a client cancels a project after contract acceptance but before research or drafting has commenced, any advance retainer paid is refunded minus a 15% administrative and scheduling fee.",
          "If a project is cancelled while drafting is actively in progress, billing is prorated based on the percentage of written content produced up to the date of formal written cancellation notification.",
        ],
      },
      {
        heading: "3. Revision Commitment",
        content: [
          "We strive for complete satisfaction. If an initial draft does not align with the approved brief, our standard packages include one consolidated revision round to rectify tone, emphasis, and styling at no additional charge.",
        ],
      },
    ],
  },

  "disclaimer": {
    id: "disclaimer",
    slug: "disclaimer",
    title: "Disclaimer",
    effectiveDate: "October 2026",
    summary: "Professional boundaries, search engine indexing realities, and academic integrity policies.",
    sections: [
      {
        heading: "1. No Guarantee of Search Engine Rankings or Financial Results",
        content: [
          "While Quillora applies proven on-page SEO best practices, semantic heading architecture, and search intent alignment, we make no representation or guarantee that any article will achieve a specific search engine position (such as page one on Google) or generate specific commercial revenue.",
          "Search rankings depend on numerous variables beyond our editorial control, including site technical infrastructure, domain authority, backlink competition, and algorithmic updates.",
        ],
      },
      {
        heading: "2. Academic Integrity Disclaimer",
        content: [
          "Quillora strictly provides proofreading, language clarity improvement, citation formatting, and structural editorial feedback for academic clients. We DO NOT write essays, complete student coursework, sit exams, fabricate research citations, or produce plagiarized materials.",
          "Clients are solely responsible for ensuring that editorial assistance complies with their university or institution's academic honor codes and research ethics guidelines.",
        ],
      },
      {
        heading: "3. Professional Advice Disclaimer",
        content: [
          "Articles and website copy published by Quillora do not constitute legal, financial, or medical advice. Clients are responsible for verifying regulatory compliance in specialized jurisdictions before publication.",
        ],
      },
    ],
  },

  "client-service-agreement": {
    id: "client-service-agreement",
    slug: "client-service-agreement",
    title: "Client Service Agreement",
    effectiveDate: "October 2026",
    summary: "The formal framework governing freelance content commissions, timelines, briefs, and client obligations.",
    sections: [
      {
        heading: "1. Engagement and Project Briefing",
        content: [
          "Each project begins with a mutual written agreement via email (talhahashim816@gmail.com) outlining the topic, word count target, deliverables, reference sources, deadline, and price in USD.",
        ],
      },
      {
        heading: "2. Turnaround and Timelines",
        content: [
          "Estimated delivery times (e.g. 2–3 days for Starter Articles, 3–4 days for SEO Blogs, 5–7 days for Content Growth packs) commence upon receipt of full brief details and confirmation.",
          "Any delay in client feedback or provision of essential source materials may proportionally adjust the final delivery schedule.",
        ],
      },
      {
        heading: "3. Consolidated Revisions Process",
        content: [
          "To maintain project momentum and clarity, feedback on delivered drafts must be compiled into one consolidated document or email within 7 calendar days of delivery. Quillora will promptly implement the requested adjustments.",
        ],
      },
      {
        heading: "4. Contact and Administration",
        content: [
          "Lead Editor: Talha Ali | Email: talhahashim816@gmail.com | Operating Brand: Quillora — Writing & Content Solutions.",
        ],
      },
    ],
  },
};
