import React, { useState } from 'react';
import { siteConfig } from '../config/siteConfig';
import { HelpCircle, ChevronDown, ChevronUp, ArrowRight, ShieldCheck } from 'lucide-react';

interface FaqViewProps {
  onOpenQuote: () => void;
}

export const FaqView: React.FC<FaqViewProps> = ({ onOpenQuote }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'What is included in Quillora introductory pricing packages?',
      a: 'Our introductory pricing packages provide complete, ready-to-publish deliverables: Starter Article ($20) includes up to 500 words with brief research and 1 revision round; SEO Blog ($40) includes up to 800 words with search intent headings, metadata, and 1 revision round; Content Growth ($100) includes 3 articles (up to 700 words each / 2,100w total) with agreed topic schedules and 1 consolidated revision round; Premium Content Pack ($200) includes 4 pillar articles (up to 1,000 words each / 4,000w total) with full metadata suites and 1 consolidated revision round.',
    },
    {
      q: 'How does the consolidated revision round work?',
      a: 'To keep projects moving smoothly and avoid scattered iterations, each package includes one comprehensive consolidated revision round. Upon receiving your draft, you have up to 7 calendar days to compile any adjustments into a single email or annotated document. We then implement all approved tweaks promptly.',
    },
    {
      q: 'What are your policies on academic editing and university papers?',
      a: 'We strictly follow university honor codes, CIEP guidelines, and COPE standards. We provide linguistic proofreading, grammatical correction, structural flow guidance, and citation formatting (APA, MLA, Chicago, Harvard). Under NO circumstances do we ghostwrite student assignments, complete coursework, or fabricate citations.',
    },
    {
      q: 'How do I submit project briefs and communicate with Talha Ali?',
      a: 'All project briefs and communications are conducted via our verified business email: talhahashim816@gmail.com. We do not use phone or WhatsApp support, ensuring that all instructions, word counts, and revision guidelines are preserved in a clear, written record.',
    },
    {
      q: 'In what formats do you deliver completed drafts?',
      a: 'We deliver in whatever format fits your workflow: clean Google Docs links (with comment permissions), Microsoft Word (.docx) files with Track Changes, or raw Markdown (.md) formatted for direct CMS publication.',
    },
    {
      q: 'Can you match our existing corporate or publication style guide?',
      a: 'Yes. Simply share your editorial style guide, brand voice documentation, or sample articles that represent your desired tone, and we will calibrate our writing to align seamlessly with your existing standards.',
    },
  ];

  return (
    <div className="space-y-16 pb-20">
      {/* Banner */}
      <section className="bg-[#17136B] text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-white/10">
        <div className="max-w-7xl mx-auto space-y-4">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FFD400] text-[#17136B]">
            Help & Clarifications
          </span>
          <h1 className="font-serif-heading text-3xl sm:text-5xl font-bold text-white">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-300 text-sm sm:text-base max-w-3xl leading-relaxed">
            Detailed answers regarding our editorial standards, introductory package scopes, revision policies, and ethical boundaries.
          </p>
        </div>
      </section>

      {/* Accordion FAQ Grid */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm transition-all"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="w-full text-left p-6 flex items-center justify-between gap-4 cursor-pointer hover:bg-gray-50"
              >
                <div className="flex items-center gap-3">
                  <HelpCircle className="w-5 h-5 text-[#17136B] flex-shrink-0" />
                  <span className="font-serif-heading text-base sm:text-lg font-bold text-[#17136B]">
                    {faq.q}
                  </span>
                </div>
                {isOpen ? (
                  <ChevronUp className="w-5 h-5 text-[#17136B] flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                )}
              </button>

              {isOpen && (
                <div className="px-6 pb-6 pt-2 text-xs sm:text-sm text-[#25254B] leading-relaxed border-t border-gray-100 bg-[#F4F5F8]/50">
                  <p>{faq.a}</p>
                </div>
              )}
            </div>
          );
        })}
      </section>

      {/* Direct Help Callout */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#17136B] text-white rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-serif-heading text-xl font-bold">
              Have a question not listed here?
            </h3>
            <p className="text-xs text-gray-300 mt-1">
              Write directly to Talha Ali at {siteConfig.contactEmail}.
            </p>
          </div>

          <button
            onClick={onOpenQuote}
            className="px-6 py-3 rounded-xl bg-[#FFD400] text-[#17136B] font-bold text-xs hover:bg-[#e6bf00] transition-colors flex items-center gap-2 flex-shrink-0"
          >
            <span>Request Project Quote</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
