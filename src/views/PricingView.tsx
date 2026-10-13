import React, { useState } from 'react';
import { siteConfig } from '../config/siteConfig';
import { PricingCalculator } from '../components/PricingCalculator';
import {
  ShieldCheck,
  CheckCircle2,
  HelpCircle,
  ArrowRight,
  Mail,
  Calculator,
  Sliders,
} from 'lucide-react';

interface PricingViewProps {
  onOpenQuote: () => void;
}

export const PricingView: React.FC<PricingViewProps> = ({ onOpenQuote }) => {
  // Custom interactive slider for multi-article projects
  const [articleCount, setArticleCount] = useState(3);
  const [wordTier, setWordTier] = useState<500 | 800 | 1000>(800);

  // Calculate estimated introductory guide cost based on standard tiers
  const estimatedCost = Math.round(
    articleCount * (wordTier === 500 ? 20 : wordTier === 800 ? 33.33 : 50)
  );

  return (
    <div className="space-y-16 pb-20">
      {/* Banner */}
      <section className="bg-[#17136B] text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-white/10">
        <div className="max-w-7xl mx-auto space-y-4">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FFD400] text-[#17136B]">
            Transparent Introductory Rates
          </span>
          <h1 className="font-serif-heading text-3xl sm:text-5xl font-bold text-white">
            Simple, Accessible USD Pricing
          </h1>
          <p className="text-gray-300 text-sm sm:text-base max-w-3xl leading-relaxed">
            Honest rates for founders, publications, and independent creators. All pricing is in USD ($) and represents editable introductory guide rates subject to mutual scope confirmation.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-amber-200">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#FFD400]" /> No monthly subscriptions or lock-in contracts
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#FFD400]" /> 1 consolidated revision round included per project
            </span>
          </div>
        </div>
      </section>

      {/* Main Pricing Calculator Component with 4 Tiers & Comparison Table */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PricingCalculator
          onSelectPackage={() => onOpenQuote()}
          onOpenQuote={onOpenQuote}
        />
      </section>

      {/* Custom Volume Estimator Tool */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-200 shadow-sm space-y-8">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-[#FFF8CC] text-[#17136B]">
              <Calculator className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#17136B]">
                Custom Volume Estimator
              </span>
              <h3 className="font-serif-heading text-xl sm:text-2xl font-bold text-[#17136B]">
                Plan a Custom Multi-Article Campaign
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            {/* Number of Articles Slider */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-xs font-bold text-[#17136B]">
                <span>Number of Articles:</span>
                <span className="text-sm bg-gray-100 px-3 py-1 rounded-lg">
                  {articleCount} {articleCount === 1 ? 'Article' : 'Articles'}
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="10"
                value={articleCount}
                onChange={(e) => setArticleCount(Number(e.target.value))}
                className="w-full accent-[#17136B] cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-[#66677A]">
                <span>1 Article</span>
                <span>5 Articles</span>
                <span>10 Articles</span>
              </div>
            </div>

            {/* Target Words Per Article */}
            <div className="space-y-3">
              <span className="text-xs font-bold text-[#17136B] block">
                Target Words Per Article:
              </span>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { words: 500, label: '500w (Starter)' },
                  { words: 800, label: '800w (SEO Blog)' },
                  { words: 1000, label: '1,000w (Pillar)' },
                ].map((tier) => (
                  <button
                    key={tier.words}
                    onClick={() => setWordTier(tier.words as any)}
                    className={`py-2 px-1 text-center rounded-xl text-xs font-bold transition-all ${
                      wordTier === tier.words
                        ? 'bg-[#17136B] text-white shadow-sm'
                        : 'bg-[#F4F5F8] text-[#25254B] hover:bg-gray-200'
                    }`}
                  >
                    {tier.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Result Calculation Banner */}
          <div className="bg-[#17136B] text-white rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-semibold text-amber-200">
                Estimated Scope: {articleCount} articles &times; {wordTier} words ={' '}
                {(articleCount * wordTier).toLocaleString()} total words
              </span>
              <div className="mt-1 flex items-baseline gap-2">
                <span className="font-serif-heading text-3xl font-black text-[#FFD400]">
                  ${estimatedCost} USD
                </span>
                <span className="text-xs text-gray-300">(introductory estimate)</span>
              </div>
            </div>

            <button
              onClick={onOpenQuote}
              className="px-5 py-3 rounded-xl bg-[#FFD400] text-[#17136B] font-bold text-xs hover:bg-[#e6bf00] transition-all flex items-center gap-1.5 cursor-pointer self-stretch sm:self-auto justify-center"
            >
              <span>Request Quote for This Volume</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Pricing FAQs */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <h3 className="font-serif-heading text-2xl font-bold text-[#17136B] text-center">
          Pricing Terms & Policies
        </h3>

        <div className="space-y-4">
          {[
            {
              q: 'Why are these labeled as introductory rates?',
              a: 'As Quillora establishes its presence, introductory rates ($20, $40, $100, $200) enable early clients to experience our editorial quality at exceptional value. We believe in building long-term working relationships through demonstrable craft.',
            },
            {
              q: 'Can rates be negotiated for specialized or bulk projects?',
              a: 'Yes. Every project brief is reviewed individually. For high-volume monthly commitments or highly specialized technical domains, custom milestones and package arrangements are mutually agreed upon before work begins.',
            },
            {
              q: 'What is your payment process?',
              a: 'Standard projects typically require a 50% initial retainer upon brief approval, with the remaining 50% due upon delivery of the finalized revision round. Invoicing is handled transparently in USD.',
            },
            {
              q: 'Do you offer unlimited revisions?',
              a: 'No. To maintain sustainable quality and protect project schedules, each package includes one comprehensive, consolidated revision round. Clients compile all feedback within 7 days of draft delivery, ensuring prompt turnaround without open-ended scope creep.',
            },
          ].map((faq, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-200 space-y-2">
              <h4 className="font-serif-heading text-sm font-bold text-[#17136B] flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-[#FFD400] flex-shrink-0" />
                <span>{faq.q}</span>
              </h4>
              <p className="text-xs text-[#66677A] leading-relaxed pl-6">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
