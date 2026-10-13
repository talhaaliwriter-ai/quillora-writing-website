export interface PortfolioSample {
  id: string;
  title: string;
  category: string;
  niche: string;
  sampleBadge: "Demonstration Sample Piece" | "Sample Excerpt";
  wordCount: number;
  objective: string;
  excerptSnippet: string;
  fullExcerpt: string[];
  keyTechniques: string[];
}

export const portfolioSamplesData: PortfolioSample[] = [
  {
    id: "sample-b2b-cloud-migration",
    title: "Navigating Enterprise Cloud Migration: A Practical Decision Framework",
    category: "B2B & Business Writing",
    niche: "Enterprise Technology / SaaS",
    sampleBadge: "Demonstration Sample Piece",
    wordCount: 1250,
    objective: "Demonstrate clear structural exposition of a complex technical transition for executive decision makers without falling into abstract jargon.",
    excerptSnippet: "Migrating core infrastructure to multi-cloud architectures is rarely a simple technical swap; it is an organizational realignment of operational risk, latency expectations, and cost governance...",
    fullExcerpt: [
      "Migrating core infrastructure to multi-cloud architectures is rarely a simple technical swap; it is an organizational realignment of operational risk, latency expectations, and cost governance. For growing enterprises, the primary question is no longer whether to adopt modern cloud services, but how to sequence workload transitions without interrupting mission-critical customer operations.",
      "A disciplined migration framework begins by segmenting legacy workloads into three distinct tiers: stateless services that can be containerized immediately, stateful relational databases that require phased replication, and proprietary monolithic components that demand targeted refactoring.",
      "By establishing measurable performance baselines before executing cutovers, infrastructure leaders avoid unexpected billing spikes and maintain stringent compliance with data privacy regulations across jurisdictional boundaries.",
    ],
    keyTechniques: [
      "Executive summary formatting tailored to C-level attention spans",
      "Nuanced technical terminology explained in practical operational terms",
      "Logical categorization into tiered action phases",
    ],
  },
  {
    id: "sample-sustainable-tech-review",
    title: "The Circular Hardware Imperative: Evaluating Modular Electronics in 2026",
    category: "Article & Editorial Writing",
    niche: "Sustainability & Consumer Electronics",
    sampleBadge: "Demonstration Sample Piece",
    wordCount: 920,
    objective: "Showcase in-depth editorial magazine prose with balanced analytical judgment on industrial design and environmental standards.",
    excerptSnippet: "For decades, consumer electronics adhered to a predictable cycle of programmed obsolescence. Glued battery packs, proprietary fasteners, and discontinued software patches compelled buyers to replace functioning hardware every two years...",
    fullExcerpt: [
      "For decades, consumer electronics adhered to a predictable cycle of programmed obsolescence. Glued battery packs, proprietary fasteners, and discontinued software patches compelled buyers to replace functioning hardware every two years. Today, regulatory shifts and consumer fatigue have catalyzed a quiet counter-revolution: the rise of repairable, modular architecture.",
      "Evaluating modular consumer devices requires examining more than marketing claims of recycled plastics. True circularity demands assessing standardized component availability, third-party repair manual accessibility, and backward-compatible module upgrades.",
      "When manufacturers decouple structural longevity from processor lifecycles, both consumers and environmental ecosystems win: total ownership cost drops, electronic waste streams contract, and brand loyalty deepens.",
    ],
    keyTechniques: [
      "Compelling introductory hook illustrating industry shift",
      "Objective criteria-based evaluation model",
      "Vivid journalistic cadence and accessible vocabulary",
    ],
  },
  {
    id: "sample-academic-literature-review",
    title: "Algorithmic Bias in Healthcare Diagnostics: An Editorial & Citation Audit Sample",
    category: "Academic Editing & Citation Sample",
    niche: "Bioethics & Medical Informatics",
    sampleBadge: "Sample Excerpt",
    wordCount: 1400,
    objective: "Demonstrate rigorous academic editorial refinement, syntactic clarity, and APA 7th referencing alignment on complex research prose.",
    excerptSnippet: "While machine learning models offer diagnostic velocity across radiological imaging, unexamined dataset biases can inadvertently perpetuate disparities in patient prognosis...",
    fullExcerpt: [
      "While machine learning models offer diagnostic velocity across radiological imaging, unexamined dataset biases can inadvertently perpetuate disparities in patient prognosis. Early training cohorts frequently underrepresent demographic diversity, leading to decreased algorithmic sensitivity across minority cohorts (Chen & Vance, 2024, p. 112).",
      "Editorial Commentary: This manuscript sample demonstrates precise academic vocabulary, eliminated run-on sentences, standardized active voice where appropriate, and verified DOI links for every referenced peer-reviewed study according to APA 7th guidelines.",
      "The revision process focused on sharpening paragraph topic sentences, confirming uniform citation delimiters, and ensuring methodological assertions remained rigorously grounded in cited clinical literature.",
    ],
    keyTechniques: [
      "APA 7th referencing compliance and DOI integrity",
      "Removal of redundant qualifiers and academic wordiness",
      "Strict preservation of author's original empirical conclusions",
    ],
  },
  {
    id: "sample-saas-landing-copy",
    title: "TaskFlow Studio: Next-Generation Editorial Workflow (Landing Page Copy Sample)",
    category: "Copywriting & Web Content",
    niche: "B2B SaaS / Product Marketing",
    sampleBadge: "Demonstration Sample Piece",
    wordCount: 650,
    objective: "Illustrate high-converting, benefit-led landing page copy with clear headline frameworks and friction-reducing microcopy.",
    excerptSnippet: "Headline: Stop Wasting Hours in Email Threads. Bring Your Editorial Team into Unified Focus. Subhead: The lightweight collaborative workspace built specifically for editorial publications...",
    fullExcerpt: [
      "Hero Section: Stop Wasting Hours in Scattered Email Threads. Bring Your Content Team into Unified Editorial Focus.",
      "Subhead: The lightweight workspace engineered for publications, agencies, and content teams who need predictable editorial turnarounds without cumbersome setup.",
      "Primary Value Proposition: TaskFlow unifies pitch approval, article drafting, reviewer feedback, and CMS scheduling in a single distraction-free timeline. Spend less time hunting for version numbers and more time publishing work that matters.",
      "CTA Microcopy: Start Your 14-Day Free Editorial Trial. No credit card required. Setup takes under two minutes.",
    ],
    keyTechniques: [
      "Benefit-first headline hierarchy addressing immediate pain points",
      "Clear objection-handling microcopy",
      "Modular wireframe-ready section blocks",
    ],
  },
];
