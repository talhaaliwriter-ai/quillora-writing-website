export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  iconName: string;
  wordCountEstimate: string;
  startingPrice: string;
  keyDeliverables: string[];
  targetAudience: string[];
  processSteps: ProcessStep[];
  qualityStandards: string[];
  contentSections: {
    heading: string;
    body: string[];
  }[];
  faqs: ServiceFAQ[];
  relatedServiceSlugs: string[];
}

export const servicesData: ServiceItem[] = [
  {
    id: "content-writing",
    slug: "content-writing",
    title: "Content Writing",
    subtitle: "Articulate, purpose-driven narratives that educate and engage your readers.",
    shortDescription: "End-to-end written content designed to communicate your organization's core ideas with precision, clarity, and authoritative depth.",
    iconName: "PenTool",
    wordCountEstimate: "500 – 2,500 words per piece",
    startingPrice: "$20 (Starter 500w)",
    keyDeliverables: [
      "Thoroughly researched, original draft tailored to your brand voice",
      "Engaging introduction with clear structural signposting",
      "Logical paragraph progression and concise thematic breakdowns",
      "Clean formatting with headings, bullet points, and key takeaways",
      "One full revision round based on client feedback",
    ],
    targetAudience: [
      "B2B and B2C brands seeking reliable content pipelines",
      "Founders and executives communicating product visions",
      "Agencies needing dependable white-label editorial capacity",
      "Publications and newsletter operators needing recurring features",
    ],
    processSteps: [
      { step: 1, title: "Brief Review & Topic Exploration", description: "Analyzing target audience, tone guidelines, core objectives, and required source materials." },
      { step: 2, title: "Structural Outlining", description: "Mapping out headings, narrative flow, thesis points, and supporting evidence." },
      { step: 3, title: "Drafting & Fact Verification", description: "Writing with disciplined syntax, verifying cited claims, and polishing transitions." },
      { step: 4, title: "Client Review & Fine-Tuning", description: "Implementing a consolidated revision round to ensure voice and nuance match expectations." },
    ],
    qualityStandards: [
      "100% human-crafted editorial discipline with zero fluff or repetitive filler",
      "Rigorous syntax checking and tone alignment",
      "Zero plagiarism with original phrasing and careful attribution",
      "Delivery in clean Markdown, Google Docs, or Word formats",
    ],
    contentSections: [
      {
        heading: "The Foundation of Meaningful Written Content",
        body: [
          "Effective content writing is more than stringing words together; it is the deliberate practice of translating complex ideas into clear, engaging, and memorable communication. In an era saturated with automated noise, readers crave authenticity, substance, and structure. At Quillora, content writing is approached as an editorial craft where every paragraph earns its place.",
          "Whether your goal is to explain an emerging industry trend, educate prospective clients on an unfamiliar technology, or provide thoughtful commentary on business practices, our content is designed to inform rather than overwhelm. We prioritize active voice, clear syntax, and scannable visual layout so that busy readers immediately grasp your key insights.",
        ],
      },
      {
        heading: "Balancing Commercial Goals with Reader Value",
        body: [
          "A common mistake in commercial writing is prioritizing self-promotion over utility. When content focuses solely on selling, audience trust drops rapidly. Our editorial framework places the reader's questions and challenges first.",
          "By answering real questions, providing actionable advice, and grounding assertions in credible examples, your brand naturally emerges as a dependable authority. Subtly integrated calls-to-action feel like logical next steps rather than intrusive disruptions.",
        ],
      },
      {
        heading: "Structured Delivery & Transparent Workflow",
        body: [
          "Every content assignment begins with a shared understanding of your audience demographics, tone preferences, and core messages. Once the brief is clarified, writing progresses through a rigorous structural review, drafting, and quality check before delivery.",
          "Each project includes a consolidated revision round, allowing you to suggest subtle adjustments to voice or emphasis. The end result is polished, ready-to-publish copy that aligns seamlessly with your brand's standards.",
        ],
      },
    ],
    faqs: [
      { question: "What information do you need in the project brief?", answer: "A brief typically includes the target audience, primary message or objective, suggested word count, preferred tone, and any reference materials or links you want cited." },
      { question: "How are revisions handled?", answer: "Each project includes one comprehensive revision round where you can compile all adjustments into a single consolidated request, ensuring prompt and accurate turnaround." },
      { question: "Can you match our existing brand style guide?", answer: "Yes. Simply share your editorial guidelines, tone of voice documentation, or sample articles that represent your desired style." },
    ],
    relatedServiceSlugs: ["article-writing", "blog-writing", "seo-content-writing", "business-professional-writing"],
  },
  {
    id: "seo-content-writing",
    slug: "seo-content-writing",
    title: "SEO Content Writing",
    subtitle: "Organic search visibility engineered through natural language and search intent.",
    shortDescription: "Content strategically organized to rank on search engine results pages while reading smoothly and naturally for human audiences.",
    iconName: "Search",
    wordCountEstimate: "800 – 3,000 words per article",
    startingPrice: "$40 (SEO Blog 800w)",
    keyDeliverables: [
      "Search-intent focused article with natural primary & secondary keyword placement",
      "Semantic H2/H3 heading hierarchy and snippet-ready answer blocks",
      "Meta title and meta description drafts (155 characters max)",
      "Internal and external linking context recommendations",
      "Image alt text suggestions for visual assets",
    ],
    targetAudience: [
      "Companies seeking sustainable inbound search engine traffic",
      "E-commerce stores creating category education hubs",
      "Affiliate and niche publishers building topical authority",
      "Marketing directors aiming to rank without sounding robotic",
    ],
    processSteps: [
      { step: 1, title: "Intent & SERP Breakdown", description: "Analyzing ranking search queries, user questions, and competitor content gaps." },
      { step: 2, title: "Semantic Blueprinting", description: "Organizing logical header hierarchies that satisfy informational search queries." },
      { step: 3, title: "Drafting for People First", description: "Writing conversational yet authoritative copy that answers queries directly." },
      { step: 4, title: "On-Page Metadata Finalization", description: "Delivering meta titles, descriptions, and URL slug recommendations." },
    ],
    qualityStandards: [
      "Zero keyword stuffing: smooth semantic integration following Google Search Essentials",
      "Direct answers for featured snippet eligibility and answer engines",
      "Skimmable layout with tables, summary boxes, and lists",
      "Strict avoidance of artificial link schemes or manipulative tactics",
    ],
    contentSections: [
      {
        heading: "SEO That Honors the Reader Experience",
        body: [
          "Modern search engines have evolved far beyond basic keyword frequency algorithms. Today's search rankings prioritize topical depth, original perspective, and helpfulness. Content designed solely to trick an algorithm quickly falls behind when human readers bounce within seconds.",
          "Quillora's SEO writing philosophy centers on user search intent. We analyze what a person actually wants when typing a search query: Are they troubleshooting an immediate issue? Comparing two different software tools? Or researching an emerging industry method? By answering that question directly and comprehensively, your content earns both algorithm visibility and genuine audience loyalty.",
        ],
      },
      {
        heading: "Semantic Architecture and Featured Snippet Optimization",
        body: [
          "To assist search engine crawlers and busy mobile readers, our articles feature precise semantic headings (H2, H3) and dedicated summary answer blocks. These concise paragraphs directly address user queries, making them prime candidates for featured snippets and AI overviews.",
          "We also structure content to incorporate semantic variations and related conceptual terms naturally, avoiding clumsy repetitions of exact-match keywords that alienate readers.",
        ],
      },
      {
        heading: "Complete On-Page Metadata Included",
        body: [
          "Every SEO content project comes with ready-to-implement on-page metadata. You receive an optimized meta title crafted to maximize click-through rates, a compelling meta description under 160 characters, and recommendations for descriptive image alt text.",
        ],
      },
    ],
    faqs: [
      { question: "Do you supply the keywords or should I provide them?", answer: "You are welcome to provide your own target keywords and search volume targets. Alternatively, we can analyze the topic and suggest relevant primary and semantic secondary keywords based on search intent." },
      { question: "Do you guarantee first-page rankings?", answer: "No ethical SEO professional guarantees page-one rankings, as search algorithms depend on domain authority, technical site health, backlink profiles, and competitive fluctuations. What we do guarantee is meticulous search intent alignment, clean structural markup, and high editorial quality." },
    ],
    relatedServiceSlugs: ["blog-writing", "content-optimization", "web-research", "article-writing"],
  },
  {
    id: "article-writing",
    slug: "article-writing",
    title: "Article Writing",
    subtitle: "In-depth, thoughtful journalistic pieces, thought-leadership essays, and magazine features.",
    shortDescription: "Comprehensive editorial pieces that explore complex subjects, industry developments, and specialized themes with analytical clarity.",
    iconName: "FileText",
    wordCountEstimate: "700 – 2,000 words per article",
    startingPrice: "$20 (Starter 500w) / $40 (800w)",
    keyDeliverables: [
      "Well-researched article with a clear central thesis and narrative hook",
      "Contextual citations and references to reputable public data",
      "Polished prose suitable for industry publications or corporate magazines",
      "Authoritative conclusion summarizing key implications or next steps",
      "One consolidated revision round",
    ],
    targetAudience: [
      "Industry leaders publishing thought leadership essays",
      "Digital journals, trade periodicals, and specialized magazines",
      "Founders aiming to build authority on Medium, Substack, or LinkedIn",
      "Corporate teams sharing in-depth white-paper summaries",
    ],
    processSteps: [
      { step: 1, title: "Thesis & Angle Definition", description: "Clarifying the primary argument, viewpoint, or insight being communicated." },
      { step: 2, title: "Secondary Source Collation", description: "Gathering supporting industry statistics, case examples, and expert perspectives." },
      { step: 3, title: "Long-Form Composition", description: "Crafting a compelling narrative arc that maintains reader engagement from intro to conclusion." },
      { step: 4, title: "Editorial Polish", description: "Verifying flow, cadence, tonal subtlety, and citation accuracy." },
    ],
    qualityStandards: [
      "Rigorous adherence to editorial objectivity or specified author viewpoint",
      "Nuanced vocabulary without unnecessarily convoluted jargon",
      "Transparent attribution of all external facts and statistics",
      "Clean paragraph pacing that prevents visual fatigue",
    ],
    contentSections: [
      {
        heading: "Elevating Ideas Through In-Depth Articles",
        body: [
          "While brief updates serve social feeds, substantive articles build lasting professional credibility. When prospective clients or peers read a carefully argued article, they evaluate your grasp of the domain, the depth of your thinking, and the clarity of your judgment.",
          "Our article writing service is designed for organizations and thinkers who want to contribute meaningfully to their fields. We avoid shallow generalities, instead digging into the real mechanisms, trade-offs, and practical lessons behind industry developments.",
        ],
      },
      {
        heading: "Balancing Analytical Rigor with Compelling Storytelling",
        body: [
          "An article should not read like a dry technical manual or a hurried listicle. By integrating narrative pacing, illustrative examples, and crisp analytical transitions, we make dense subjects engaging for time-pressed executives, researchers, and professionals.",
        ],
      },
    ],
    faqs: [
      { question: "Can you ghostwrite articles for my byline?", answer: "Yes. Many of our corporate and leadership articles are ghostwritten under client bylines for publication on LinkedIn, corporate blogs, Medium, or trade outlets." },
      { question: "How do you source statistics and citations?", answer: "We rely on reputable public sources, including peer-reviewed studies, government databases, established industry research reports, and recognized journalistic publications." },
    ],
    relatedServiceSlugs: ["content-writing", "blog-writing", "business-professional-writing", "web-research"],
  },
  {
    id: "blog-writing",
    slug: "blog-writing",
    title: "Blog Writing",
    subtitle: "Fresh, engaging, and recurring blog entries that keep your audience returning.",
    shortDescription: "Consistent, conversational blog content crafted to answer customer queries, showcase company expertise, and maintain an active digital footprint.",
    iconName: "BookOpen",
    wordCountEstimate: "600 – 1,500 words per post",
    startingPrice: "$40 (SEO Blog 800w)",
    keyDeliverables: [
      "Engaging headlines that spark curiosity without resorting to clickbait",
      "Actionable insights and takeaway tips for daily implementation",
      "Clean formatting with subheads, bulleted summaries, and callouts",
      "Suggested call-to-action aligned with your business funnel",
      "Topic and title ideation for monthly publishing calendars",
    ],
    targetAudience: [
      "Small and medium businesses sustaining an active company blog",
      "Direct-to-consumer brands engaging community members",
      "Consultants demonstrating practical problem-solving methods",
      "Startups wanting to document their building journey and product updates",
    ],
    processSteps: [
      { step: 1, title: "Audience Persona Identification", description: "Understanding the reader's current pain points, reading habits, and terminology." },
      { step: 2, title: "Headline & Hook Selection", description: "Developing compelling titles and strong introductory hooks." },
      { step: 3, title: "Drafting Scannable Sections", description: "Structuring content for effortless reading on desktop and mobile screens." },
      { step: 4, title: "Call-to-Action Integration", description: "Concluding with a natural, unforced prompt to subscribe, contact, or explore." },
    ],
    qualityStandards: [
      "Conversational and accessible English free of pretentious jargon",
      "High visual scannability: short paragraphs, bullet points, and pull quotes",
      "Consistent voice across multi-post packages",
      "Fast turnaround to support scheduled publishing schedules",
    ],
    contentSections: [
      {
        heading: "The Power of a Consistent Company Blog",
        body: [
          "A dormant company blog signals neglect, while an active, useful blog demonstrates vitality, ongoing expertise, and customer care. When readers discover helpful answers on your blog, they naturally associate your brand with competence and transparency.",
          "Quillora's blog writing service provides a dependable editorial engine. Whether you need a single deep-dive or a multi-post monthly growth cadence, we deliver well-crafted posts that speak directly to your target readers.",
        ],
      },
      {
        heading: "Writing for the Modern Mobile Reader",
        body: [
          "Over 65% of blog readership happens on mobile devices. Long, impenetrable walls of text cause readers to bounce instantly. We structure every blog post with crisp paragraph breaks, descriptive subheadings, and key bullet points so visitors can absorb value even when skimming between tasks.",
        ],
      },
    ],
    faqs: [
      { question: "Can you manage a recurring monthly blog schedule?", answer: "Yes! Our Content Growth ($100 for 3 posts) and Premium Content Pack ($200 for 4 posts) packages are specifically designed for steady monthly cadences." },
      { question: "Can you propose topics if I don't have an editorial calendar?", answer: "Absolutely. We routinely evaluate audience questions, competitor topics, and seasonal industry themes to recommend content plans." },
    ],
    relatedServiceSlugs: ["seo-content-writing", "content-writing", "content-optimization", "copywriting"],
  },
  {
    id: "copywriting",
    slug: "copywriting",
    title: "Copywriting",
    subtitle: "Persuasive, action-focused copy that transforms passive visitors into committed clients.",
    shortDescription: "High-impact conversion copy for landing pages, sales pages, email sequences, and promotional assets that clearly articulates your value proposition.",
    iconName: "Flame",
    wordCountEstimate: "300 – 1,200 words per asset",
    startingPrice: "$40 – $100 depending on asset scope",
    keyDeliverables: [
      "Compelling value proposition and headline frameworks",
      "Benefit-led section breakdowns addressing customer objections",
      "Friction-reducing microcopy for buttons, forms, and trust badges",
      "Clear, single-focus calls to action (CTAs)",
      "Optional A/B headline variations for split testing",
    ],
    targetAudience: [
      "Product founders launching new software or service offerings",
      "Service professionals needing high-converting landing pages",
      "E-commerce stores optimizing checkout and offer pages",
      "Agencies running targeted lead generation campaigns",
    ],
    processSteps: [
      { step: 1, title: "Offer & Value Analysis", description: "Pinpointing the unique differentiation, core benefits, and common buyer hesitations." },
      { step: 2, title: "Framework Selection", description: "Applying proven conversion architectures (PAS, AIDA, Before-After-Bridge)." },
      { step: 3, title: "Copy Crafting", description: "Writing punchy, benefit-focused lines with zero fluff." },
      { step: 4, title: "Refining & Polishing", description: "Testing rhythm, clarity, and readability of headlines and CTA sequences." },
    ],
    qualityStandards: [
      "Ruthless focus on customer benefits rather than internal company features",
      "Zero hype, false urgency, or deceptive marketing tactics",
      "Clear layout directions for your designer or web developer",
      "High emotional resonance grounded in genuine product utility",
    ],
    contentSections: [
      {
        heading: "Persuasion Rooted in Clarity and Honesty",
        body: [
          "Effective copywriting does not rely on aggressive manipulation or breathless exaggeration. True persuasion comes from absolute clarity: helping prospective buyers immediately understand how your offering solves their specific problem better than the alternatives.",
          "At Quillora, we write copy that respects your audience's intelligence. By articulating clear benefits, anticipating common objections, and removing unnecessary friction, we create sales messages that inspire confidence and prompt decisive action.",
        ],
      },
      {
        heading: "Aligning Design and Copy for Maximum Conversion",
        body: [
          "Words on a landing page do not exist in isolation; they work in tandem with user interface layout, typography, and visual hierarchy. We provide layout notes alongside our copy drafts, indicating where hero headlines, bulleted feature matrices, and social proof elements should be positioned for maximum impact.",
        ],
      },
    ],
    faqs: [
      { question: "What is the difference between content writing and copywriting?", answer: "Content writing primarily educates, informs, and builds long-term audience trust (e.g., articles, blog posts, research guides). Copywriting focuses on inspiring specific immediate actions (e.g., landing pages, sales sequences, checkout copy)." },
      { question: "Do you include headline alternatives for testing?", answer: "Yes, our landing page and sales copy deliveries typically include 2–3 alternative headline variations so you can conduct A/B split testing." },
    ],
    relatedServiceSlugs: ["website-content-writing", "product-descriptions", "content-writing"],
  },
  {
    id: "website-content-writing",
    slug: "website-content-writing",
    title: "Website Content Writing",
    subtitle: "Cohesive, polished copy for core pages: Home, About, Services, and Contact.",
    shortDescription: "Complete website copy architecture that unifies your brand narrative, highlights your capabilities, and guides visitors smoothly across your digital presence.",
    iconName: "Globe",
    wordCountEstimate: "400 – 1,000 words per page",
    startingPrice: "$40 per page / Custom packages available",
    keyDeliverables: [
      "Custom page copy for Homepage, About Us, How It Works, and Services",
      "Scannable feature grids, benefit summaries, and process timelines",
      "Compelling founder narratives and company mission statements",
      "On-page navigation labels and intuitive microcopy",
      "Strategic CTA placement across each page journey",
    ],
    targetAudience: [
      "New businesses launching an authoritative online presence",
      "Established firms redesigning outdated websites",
      "Freelancers and agencies professionalizing their digital portfolio",
      "SaaS and tech companies needing lucid product explainers",
    ],
    processSteps: [
      { step: 1, title: "Sitemap & User Journey Review", description: "Mapping page relationships and determining the primary goal of each page." },
      { step: 2, title: "Tone of Voice Alignment", description: "Defining brand personality, warmth, vocabulary, and formality levels." },
      { step: 3, title: "Page-by-Page Drafting", description: "Writing structured copy complete with header tags, button labels, and body sections." },
      { step: 4, title: "Cohesion Check & Revision", description: "Ensuring terminology, voice, and narrative remain unified across all pages." },
    ],
    qualityStandards: [
      "Unified brand voice across every single site route",
      "Modular layout structure ready for direct developer integration",
      "Accessible reading grade level suited to diverse international audiences",
      "Complete inclusion of title tags, meta snippets, and navigation text",
    ],
    contentSections: [
      {
        heading: "Your Digital Storefront Deserves Cohesive Copy",
        body: [
          "When visitors arrive on your website, they form an impression within seconds. If your messaging is fragmented, confusing, or contradictory, prospective clients exit before learning about your true capabilities. Website content must guide the visitor intuitively: explaining who you are, what problems you solve, why you are qualified, and how to get started.",
          "Quillora crafts complete website narratives that treat every page as an intentional part of a single journey. From an engaging homepage hook to an authentic, human About Us story, we help visitors feel confident in your business at every step.",
        ],
      },
    ],
    faqs: [
      { question: "Can you write copy for just one page, or do I have to order a full website?", answer: "You can commission single pages (e.g. an updated Services page or About page) or complete multi-page packages depending on your current needs." },
      { question: "Can you work directly alongside my web designer?", answer: "Yes, we frequently collaborate with web designers and developers, providing copy organized by layout section and wireframe component." },
    ],
    relatedServiceSlugs: ["copywriting", "content-writing", "business-professional-writing"],
  },
  {
    id: "academic-editing-proofreading",
    slug: "academic-editing-proofreading",
    title: "Academic Editing & Proofreading",
    subtitle: "Ethical editorial refinement, clarity enhancement, and meticulous style guide compliance.",
    shortDescription: "Professional proofreading and editorial support for dissertations, theses, journal submissions, and academic essays, maintaining absolute academic integrity.",
    iconName: "GraduationCap",
    wordCountEstimate: "1,000 – 10,000+ words per manuscript",
    startingPrice: "$20 – $40 per 1,000 words (Scope dependent)",
    keyDeliverables: [
      "Correction of grammar, spelling, punctuation, and typographical errors",
      "Improvement of sentence structure, academic vocabulary, and transitional flow",
      "Verification of referencing format against specified style guides (APA, MLA, Harvard, Chicago)",
      "Detailed editorial comments highlighting ambiguities or logical inconsistencies",
      "Track-changes document alongside a clean, finalized version",
    ],
    targetAudience: [
      "Postgraduate researchers and PhD candidates preparing theses and dissertations",
      "Academics submitting papers to peer-reviewed scholarly journals",
      "International scholars writing in English as an additional language",
      "Faculty preparing conference papers, monographs, and research grant proposals",
    ],
    processSteps: [
      { step: 1, title: "Manuscript Assessment", description: "Reviewing document length, academic discipline, and required citation manual." },
      { step: 2, title: "Line Editing & Grammar Correction", description: "Enhancing syntax, eliminating wordiness, and ensuring academic formality." },
      { step: 3, title: "Reference & Citation Audit", description: "Cross-checking in-text citations against reference lists for structural consistency." },
      { step: 4, title: "Dual Delivery", description: "Providing a tracked-changes copy showing all edits, plus a clean finalized document." },
    ],
    qualityStandards: [
      "STRICT ETHICAL STANDARDS: 100% compliant with university honor codes and CIEP guidelines",
      "NO ghostwriting, assignment fabrication, or plagiarism under any circumstances",
      "Preservation of the author's original voice, argument, and intellectual ownership",
      "Full familiarity with APA 7th, MLA 9th, Chicago/Turabian 17th, and Harvard styles",
    ],
    contentSections: [
      {
        heading: "Ethical Academic Support: Protecting Your Scholarly Integrity",
        body: [
          "Academic integrity is paramount. Quillora strictly adheres to international academic ethics and university guidelines. We DO NOT write assignments, complete exams, fabricate research data, or engage in academic dishonesty of any kind.",
          "Our academic service is purely editorial and pedagogical. We work with manuscripts written by students and researchers to polish their English prose, correct grammatical errors, ensure logical cohesion between arguments, and guarantee precise citation formatting. You retain complete authorship and intellectual responsibility for your work.",
        ],
      },
      {
        heading: "Supporting English as an Additional Language (EAL) Scholars",
        body: [
          "Brilliant research should not be rejected simply because English is the author's second or third language. Journal peer reviewers frequently recommend rejection based on grammatical ambiguity or awkward phrasing. We help international scholars present their findings with the idiomatic clarity and precision expected by top academic publications.",
        ],
      },
      {
        heading: "Comprehensive Citation and Style Consistency",
        body: [
          "Style guides contain hundreds of nuanced rules regarding italicization, capitalization, author lists, and DOI formatting. We meticulously inspect your citations to ensure exact conformity with APA 7th, MLA 9th, Chicago Notes-Bibliography, or Harvard guidelines.",
        ],
      },
    ],
    faqs: [
      { question: "Will you write or rewrite my academic essay for me?", answer: "No. Under our ethical code of conduct, we never write, generate, or ghostwrite student essays or academic papers. We provide proofreading, language correction, citation assistance, and structural editorial feedback on original work created by the author." },
      { question: "What citation style manuals do you support?", answer: "We support APA (7th Edition), MLA (9th Edition), Chicago / Turabian (17th Edition), Harvard, IEEE, and custom journal house styles." },
      { question: "How do you deliver edited academic papers?", answer: "You receive two files: one with Microsoft Word 'Track Changes' enabled so you can inspect every suggestion, and one clean version with all approved corrections applied." },
    ],
    relatedServiceSlugs: ["research-citation-assistance", "business-professional-writing", "article-writing"],
  },
  {
    id: "research-citation-assistance",
    slug: "research-citation-assistance",
    title: "Research & Citation Assistance",
    subtitle: "Methodical literature review organization, reference formatting, and citation audits.",
    shortDescription: "Assistance organizing scholarly literature, building bibliographies, and cross-verifying citations to eliminate formatting inconsistencies.",
    iconName: "Bookmark",
    wordCountEstimate: "Custom scope based on source volume",
    startingPrice: "$20 – $60 depending on reference count",
    keyDeliverables: [
      "Comprehensive bibliography formatting in APA, MLA, Chicago, or Harvard style",
      "In-text citation cross-check against bibliography to eliminate orphaned sources",
      "Retrieval and inclusion of persistent DOIs and permalinks",
      "Annotated bibliography notes and thematic source categorization",
      "Report highlighting missing volume numbers, page ranges, or author data",
    ],
    targetAudience: [
      "Graduate researchers finalizing multi-chapter dissertations",
      "Authors preparing book manuscripts with extensive endnotes",
      "Scholars compiling grant proposals and comprehensive literature reviews",
      "Independent researchers and policy analysts synthesizing secondary data",
    ],
    processSteps: [
      { step: 1, title: "Source List Audit", description: "Reviewing existing references, notes, and target publication style requirements." },
      { step: 2, title: "Citation Cross-Verification", description: "Verifying every in-text citation has a matching reference entry and vice versa." },
      { step: 3, title: "Metadata Completion", description: "Locating verified DOIs, publication years, issue numbers, and publisher cities." },
      { step: 4, title: "Final Bibliography Generation", description: "Delivering an alphabetized, beautifully formatted reference section." },
    ],
    qualityStandards: [
      "Zero invented or hallucinated citations: all references verified against public academic databases",
      "Exact punctuation and indentation standards matching the official manual",
      "Ethical assistance adhering to academic guidance codes",
      "Clear flagging of inaccessible or unverified sources",
    ],
    contentSections: [
      {
        heading: "Eliminating Citation Errors and Inconsistencies",
        body: [
          "A single mismatched citation or missing reference can delay journal peer review or result in thesis submission delays. Manually formatting dozens or hundreds of citations across journal articles, book chapters, conference proceedings, and digital archives is tedious and prone to error.",
          "Quillora provides methodical reference verification. We cross-reference every in-text citation against your reference list, verify missing metadata (such as journal volume numbers, page ranges, and official DOIs), and format the complete bibliography to exact style specifications.",
        ],
      },
    ],
    faqs: [
      { question: "Do you fabricate references or sources?", answer: "Never. We only verify, format, and organize sources that you have gathered or that are verified in public scholarly repositories. We never invent citations." },
      { question: "Can you help format EndNote, Zotero, or Mendeley libraries?", answer: "Yes, we can work with exported BibTeX, RIS, or formatted Word documents to ensure your reference manager records are clean and standardized." },
    ],
    relatedServiceSlugs: ["academic-editing-proofreading", "web-research", "article-writing"],
  },
  {
    id: "product-descriptions",
    slug: "product-descriptions",
    title: "Product Descriptions",
    subtitle: "Vivid, benefit-centered descriptions that spotlight product value and boost e-commerce sales.",
    shortDescription: "Compelling product listings that weave features into practical lifestyle benefits, helping shoppers visualize ownership and make purchasing decisions.",
    iconName: "ShoppingBag",
    wordCountEstimate: "100 – 300 words per SKU / Batch orders",
    startingPrice: "$20 (Batch starter) / Volume rates available",
    keyDeliverables: [
      "Catchy product titles incorporating core specifications",
      "Emotionally engaging opening sentences that highlight problem resolution",
      "Scannable bullet points detailing dimensions, materials, and features",
      "SEO-friendly product keywords for search visibility",
      "Formatted for Shopify, WooCommerce, Amazon, or custom e-commerce stores",
    ],
    targetAudience: [
      "E-commerce boutique owners upgrading catalog copy",
      "D2C brands seeking distinctive brand voice across product lines",
      "Amazon and marketplace sellers optimizing listing performance",
      "Wholesale distributors making B2B spec sheets consumer-friendly",
    ],
    processSteps: [
      { step: 1, title: "Product Spec Review", description: "Reviewing materials, technical specs, user demographics, and unique selling points." },
      { step: 2, title: "Tone & Voice Calibration", description: "Balancing sensory descriptions, technical precision, and brand personality." },
      { step: 3, title: "Batch Drafting", description: "Writing structured listings with clear titles, benefit bullets, and care notes." },
      { step: 4, title: "Quality & Consistency Check", description: "Ensuring terminology and formatting remain consistent across related SKUs." },
    ],
    qualityStandards: [
      "Zero generic manufacturer regurgitation: freshly written, distinctive copy",
      "Balanced blend of emotional appeal and technical specifications",
      "SEO-friendly structure for both product search algorithms and human shoppers",
      "Consistent terminology across related catalog collections",
    ],
    contentSections: [
      {
        heading: "Transforming Feature Lists into Compelling Stories",
        body: [
          "Most online product descriptions fail because they simply copy-paste dry manufacturer spreadsheets. Shoppers do not buy raw materials or technical specs in a vacuum; they buy the experience, convenience, and status those items unlock.",
          "Our product descriptions connect practical features directly to tangible customer benefits. Whether writing for artisanal goods, modern lifestyle apparel, or technical hardware, we help prospective buyers envision using the product in their daily lives.",
        ],
      },
    ],
    faqs: [
      { question: "Can you handle bulk catalog batches?", answer: "Yes. We offer volume packages for stores launching new seasonal collections or overhauling hundreds of existing product listings." },
      { question: "Do you write for Amazon listings with bullet constraints?", answer: "Yes, we tailor listings to Amazon's character counts and bullet structure guidelines, including search term optimization." },
    ],
    relatedServiceSlugs: ["copywriting", "seo-content-writing", "content-optimization"],
  },
  {
    id: "web-research",
    slug: "web-research",
    title: "Web Research",
    subtitle: "Methodical, transparent information gathering and structured executive summaries.",
    shortDescription: "In-depth secondary research that investigates industry competitors, market conditions, data points, and public reports into structured, actionable briefs.",
    iconName: "Compass",
    wordCountEstimate: "Custom briefs based on inquiry scope",
    startingPrice: "$20 – $100 depending on complexity",
    keyDeliverables: [
      "Structured research dossiers synthesizing multi-source findings",
      "Complete source tables with working URLs, publication dates, and key metrics",
      "Executive summaries highlighting primary trends, risks, and opportunities",
      "Competitor offering and public pricing comparisons",
      "Fact-checking and claim verification for corporate communications",
    ],
    targetAudience: [
      "Founders evaluating new market opportunities or competitive landscapes",
      "Content teams needing verified secondary statistics and case studies",
      "Consultants gathering data for client presentations",
      "Writers and journalists seeking structured background dossiers",
    ],
    processSteps: [
      { step: 1, title: "Research Scope Definition", description: "Clarifying precise questions, acceptable sources, and delivery format." },
      { step: 2, title: "Systematic Source Exploration", description: "Investigating public reports, trade journals, regulatory filings, and market data." },
      { step: 3, title: "Data Synthesis & Cross-Checking", description: "Verifying statistics across multiple independent sources to ensure reliability." },
      { step: 4, title: "Dossier Assembly", description: "Delivering an executive summary with transparent source tables and linked citations." },
    ],
    qualityStandards: [
      "100% verified public sources with transparent documentation",
      "Zero fabricated numbers or speculative assumptions",
      "Clear notation of conflicting data or methodological limitations",
      "Organized delivery in Markdown, spreadsheets, or executive slide format",
    ],
    contentSections: [
      {
        heading: "Grounded Decisions Require Credible Information",
        body: [
          "Navigating the open internet to find reliable information is increasingly challenging due to search engine clutter and synthetic content. Making business or editorial decisions based on unverified statistics exposes your organization to embarrassment and strategic missteps.",
          "Quillora's web research service delivers thorough, transparent secondary research. We evaluate sources critically, verify factual claims across multiple independent references, and summarize findings in clean, structured reports that empower confident decision-making.",
        ],
      },
    ],
    faqs: [
      { question: "Do you conduct primary research or phone interviews?", answer: "Our focus is on secondary digital research: analyzing published reports, regulatory filings, competitive sites, academic repositories, and public datasets." },
      { question: "How do you present your research findings?", answer: "Findings are delivered in structured executive memos complete with key takeaway summaries, comparative tables, and full reference citation matrices." },
    ],
    relatedServiceSlugs: ["research-citation-assistance", "article-writing", "content-optimization"],
  },
  {
    id: "content-optimization",
    slug: "content-optimization",
    title: "Content Optimization",
    subtitle: "Auditing, refreshing, and upgrading existing content to restore traffic and relevance.",
    shortDescription: "Strategic revamping of older or underperforming articles to improve readability, eliminate outdated information, and satisfy updated search standards.",
    iconName: "TrendingUp",
    wordCountEstimate: "500 – 3,000 words per article overhaul",
    startingPrice: "$20 – $40 per existing post",
    keyDeliverables: [
      "Comprehensive editorial and readability audit of existing content",
      "Fact updates and removal of outdated industry references or broken examples",
      "Refreshed headings, bullet points, and modern scannable layout",
      "Integration of secondary semantic search queries and intent alignment",
      "Updated meta descriptions and improved internal link recommendations",
    ],
    targetAudience: [
      "Websites experiencing gradual traffic decay on legacy articles",
      "Brands wanting to maximize return on previously published content",
      "Publishers updating annual guides and best-practice roundups",
      "Founders wanting to elevate early rough drafts into professional assets",
    ],
    processSteps: [
      { step: 1, title: "Content Decay Audit", description: "Evaluating current performance, structural weaknesses, and missing information." },
      { step: 2, title: "Information Refresh", description: "Updating outdated statistics, removing defunct links, and inserting modern examples." },
      { step: 3, title: "Prose & Flow Overhaul", description: "Rewriting clunky sentences, sharpening hooks, and improving formatting." },
      { step: 4, title: "Metadata Refresh", description: "Updating title tags and meta descriptions to improve click-through rates." },
    ],
    qualityStandards: [
      "Preservation of existing high-ranking URL slugs and valuable backlinks",
      "Substantial informational upgrades rather than cosmetic word swaps",
      "Improved readability metrics and mobile visual scannability",
      "Clear revision tracking showing before and after modifications",
    ],
    contentSections: [
      {
        heading: "Unlock Hidden Value in Your Existing Content Library",
        body: [
          "Publishing brand new content is not always the highest-ROI strategy. Often, your website already has dozens of articles that have earned modest search visibility but have gradually decayed as statistics became outdated and competitors published fresher guides.",
          "Content optimization breathes new life into your existing assets. By auditing decaying pieces, updating obsolete references, restructuring headings, and injecting modern examples, we help you regain search engine prominence at a fraction of the cost of starting from scratch.",
        ],
      },
    ],
    faqs: [
      { question: "Will updating existing articles hurt current search rankings?", answer: "When performed correctly, content refreshes typically improve rankings. We preserve the original URL structure, retain valuable existing keywords, and enhance depth and timeliness, which search engines favor." },
      { question: "How do I know which articles should be optimized first?", answer: "Focus first on 'striking distance' articles: pieces that rank on page 2 (positions 11–20) or older cornerstone articles that have seen steady traffic declines over the past 6–12 months." },
    ],
    relatedServiceSlugs: ["seo-content-writing", "blog-writing", "article-writing"],
  },
  {
    id: "business-professional-writing",
    slug: "business-professional-writing",
    title: "Business & Professional Writing",
    subtitle: "Crisp, authoritative executive communications, white papers, case studies, and corporate briefs.",
    shortDescription: "Clear, persuasive business writing for executives, organizations, and founders who need to communicate strategies, reports, and proposals with gravitas.",
    iconName: "Briefcase",
    wordCountEstimate: "500 – 3,500 words depending on document",
    startingPrice: "$40 – $200 per project scope",
    keyDeliverables: [
      "Executive summaries distilling strategic initiatives into clear points",
      "Customer case studies detailing client challenges, solutions, and measured outcomes",
      "Corporate capability statements and agency pitch profiles",
      "White papers and industry briefs positioned for high-level decision makers",
      "Internal policy guides and employee handbooks written in plain English",
    ],
    targetAudience: [
      "C-suite executives communicating organizational vision and reports",
      "B2B service providers needing compelling client case studies",
      "Consulting firms preparing comprehensive advisory briefs",
      "Startups pitching investors, enterprise partners, or accelerators",
    ],
    processSteps: [
      { step: 1, title: "Stakeholder & Goal Identification", description: "Clarifying key commercial objectives, audience expectations, and governance constraints." },
      { step: 2, title: "Information Gathering", description: "Reviewing internal decks, project notes, stakeholder interviews, or case transcripts." },
      { step: 3, title: "Drafting with Professional Gravitas", description: "Writing with concise, disciplined phrasing and authoritative business acumen." },
      { step: 4, title: "Review & Alignment", description: "Ensuring terminology aligns strictly with corporate guidelines and confidentiality protocols." },
    ],
    qualityStandards: [
      "Direct, unambiguous business prose free of empty buzzwords and corporate jargon",
      "Strict confidentiality and NDA compliance for all internal materials",
      "Executive-level visual formatting with clear callout boxes and takeaways",
      "Polished delivery in professional document formats",
    ],
    contentSections: [
      {
        heading: "Writing with Professional Gravitas and Precision",
        body: [
          "In the professional world, time is the scarcest resource. Busy board members, enterprise partners, and clients will not wade through dense, convoluted corporate jargon. They demand communications that get straight to the point: what is the problem, what is the proposed solution, what are the trade-offs, and what is required to execute?",
          "Quillora brings editorial clarity to business communications. We strip away hollow buzzwords, replace vague generalities with concrete facts, and structure documents so decision-makers can absorb critical insights immediately.",
        ],
      },
      {
        heading: "Case Studies That Prove Your Value",
        body: [
          "Customer case studies are among the highest-converting assets in B2B marketing. We write narrative case studies that follow a clear arc: the client's initial dilemma, why previous approaches fell short, the specific methodology deployed, and the verifiable results achieved. This structure allows prospective clients to see a blueprint of their own future success.",
        ],
      },
    ],
    faqs: [
      { question: "Do you sign Non-Disclosure Agreements (NDAs)?", answer: "Yes, absolutely. We regularly sign client NDAs before reviewing proprietary data, pitch decks, or sensitive business communications." },
      { question: "What formats do you deliver business documents in?", answer: "We deliver in Microsoft Word, Google Docs, clean Markdown, or formatted PDF drafts ready for internal distribution or graphic design team layout." },
    ],
    relatedServiceSlugs: ["content-writing", "article-writing", "website-content-writing"],
  },
];
