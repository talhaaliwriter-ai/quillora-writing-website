/**
 * Reviews & Feedback Placeholders
 * As instructed, we do NOT invent fake testimonials, fake client names, or fabricated ratings.
 * These slots are explicitly designated placeholders for Talha Ali / Quillora to insert
 * genuine, verified client feedback as projects are completed.
 */

export interface ReviewSlot {
  id: string;
  isPlaceholder: true;
  projectCategory: string;
  placeholderNotice: string;
  submissionInstructions: string;
  recommendedFields: {
    clientInitialsOrOrganization: string;
    industry: string;
    serviceDelivered: string;
    testimonialQuote: string;
  };
}

export const reviewSlotsData: ReviewSlot[] = [
  {
    id: "review-slot-1",
    isPlaceholder: true,
    projectCategory: "SEO Content Writing",
    placeholderNotice: "[Client Feedback Placeholder #1 — Reserved for Verified Client Testimonial]",
    submissionInstructions: "This card will display verified feedback from your first SEO content or blog writing client. Update in `src/data/reviews.ts` upon client signoff.",
    recommendedFields: {
      clientInitialsOrOrganization: "Verified Client (e.g. Fintech Founder / Tech Publisher)",
      industry: "Digital Technology & SaaS",
      serviceDelivered: "SEO Blog Package (800w articles)",
      testimonialQuote: "Add authentic quote received via email or freelance platform regarding turnaround speed, tone alignment, and organic search impact.",
    },
  },
  {
    id: "review-slot-2",
    isPlaceholder: true,
    projectCategory: "Academic Editing & Proofreading",
    placeholderNotice: "[Client Feedback Placeholder #2 — Reserved for Verified Academic Client Feedback]",
    submissionInstructions: "Reserved for feedback from graduate researchers or faculty utilizing proofreading and APA/MLA formatting services.",
    recommendedFields: {
      clientInitialsOrOrganization: "Postgraduate Researcher / Journal Author",
      industry: "Higher Education & Scholarly Research",
      serviceDelivered: "Dissertation Proofreading & Citation Verification",
      testimonialQuote: "Add authentic quote regarding linguistic precision, ethical compliance, and meticulous referencing consistency.",
    },
  },
  {
    id: "review-slot-3",
    isPlaceholder: true,
    projectCategory: "Content Growth Package",
    placeholderNotice: "[Client Feedback Placeholder #3 — Reserved for Multi-Article Growth Package Review]",
    submissionInstructions: "Reserved for verified client review from a monthly content cadence client.",
    recommendedFields: {
      clientInitialsOrOrganization: "Marketing Director / Digital Agency Owner",
      industry: "E-Commerce & Digital Commerce",
      serviceDelivered: "Content Growth (3 Articles / 2,100 words)",
      testimonialQuote: "Add authentic quote regarding editorial reliability, publication-ready formatting, and seamless communication.",
    },
  },
];
