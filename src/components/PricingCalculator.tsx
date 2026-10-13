import React, { useState } from 'react';
import { siteConfig, PricingPackage } from '../config/siteConfig';
import { Check, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';

interface PricingCalculatorProps {
  onSelectPackage: (pkg: PricingPackage) => void;
  onOpenQuote: () => void;
}

export const PricingCalculator: React.FC<PricingCalculatorProps> = ({
  onSelectPackage,
  onOpenQuote,
}) => {
  const [selectedPackageId, setSelectedPackageId] = useState<string>('seo-blog');

  const packages = siteConfig.pricingPackages;

  return (
    <div className="space-y-12">
      {/* Intro Subtext */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FFF8CC] text-[#17136B] border border-[#FFD400]/40">
          Transparent USD Pricing
        </span>
        <h2 className="font-serif-heading text-3xl sm:text-4xl font-bold text-[#17136B]">
          Introductory Packages Tailored to Your Content Scope
        </h2>
        <p className="text-[#66677A] text-sm sm:text-base leading-relaxed">
          Straightforward pricing with clear word counts, defined revision rounds, and zero hidden fees. All packages are editable starting points subject to mutual project scope agreement.
        </p>
      </div>

      {/* 4 Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {packages.map((pkg) => {
          const isSelected = selectedPackageId === pkg.id;
          const isHighlight = pkg.badge === 'Most Popular' || pkg.badge === 'Best Value';

          return (
            <div
              key={pkg.id}
              onClick={() => setSelectedPackageId(pkg.id)}
              className={`relative rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all cursor-pointer border ${
                isSelected
                  ? 'bg-white border-[#17136B] shadow-2xl ring-2 ring-[#17136B]/20 transform -translate-y-1'
                  : 'bg-white hover:bg-gray-50 border-gray-200 shadow-sm'
              }`}
            >
              {/* Badge if present */}
              {pkg.badge && (
                <div className="absolute -top-3.5 left-1/2 transform -translate-x-1/2">
                  <span className="px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider bg-[#FFD400] text-[#17136B] shadow-sm">
                    {pkg.badge}
                  </span>
                </div>
              )}

              <div>
                {/* Header */}
                <div className="border-b border-gray-100 pb-5">
                  <h3 className="font-serif-heading text-xl font-bold text-[#17136B]">
                    {pkg.name}
                  </h3>
                  <p className="text-xs text-[#66677A] mt-1 min-h-[32px]">
                    {pkg.tagline}
                  </p>

                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-3xl sm:text-4xl font-black text-[#17136B]">
                      ${pkg.priceUSD}
                    </span>
                    <span className="text-xs font-semibold text-[#66677A]">
                      USD / intro
                    </span>
                  </div>
                  <span className="inline-block mt-1 text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                    Up to {pkg.wordCountLimit.toLocaleString()} words total
                  </span>
                </div>

                {/* Scope description */}
                <div className="py-4">
                  <p className="text-xs text-[#25254B] font-medium leading-relaxed bg-[#F4F5F8] p-3 rounded-xl border border-gray-100">
                    {pkg.scope}
                  </p>
                </div>

                {/* Deliverables Checklist */}
                <div className="space-y-2.5 pt-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#66677A] block">
                    What&apos;s Included:
                  </span>
                  {pkg.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#25254B]">
                      <Check className="w-3.5 h-3.5 text-[#17136B] flex-shrink-0 mt-0.5" />
                      <span className="leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="pt-6 mt-6 border-t border-gray-100 space-y-2">
                <div className="flex items-center justify-between text-xs text-[#66677A] mb-2">
                  <span>Revisions:</span>
                  <span className="font-semibold text-[#17136B]">{pkg.revisionRounds} consolidated round</span>
                </div>
                <div className="flex items-center justify-between text-xs text-[#66677A] mb-3">
                  <span>Turnaround:</span>
                  <span className="font-semibold text-[#17136B]">{pkg.deliveryTimeEstimate}</span>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectPackage(pkg);
                  }}
                  className={`w-full py-3 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                    isHighlight
                      ? 'bg-[#FFD400] hover:bg-[#e6bf00] text-[#17136B] shadow-md'
                      : 'bg-[#17136B] hover:bg-[#0f0b4d] text-white'
                  }`}
                >
                  <span>Select {pkg.name}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Detailed Feature Comparison Table */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200 shadow-sm overflow-hidden">
        <div className="border-b border-gray-100 pb-5 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="font-serif-heading text-xl sm:text-2xl font-bold text-[#17136B]">
              Side-by-Side Package Comparison
            </h3>
            <p className="text-xs sm:text-sm text-[#66677A] mt-1">
              Compare inclusions across all four introductory pricing tiers.
            </p>
          </div>
          <button
            onClick={onOpenQuote}
            className="px-4 py-2 rounded-xl bg-[#F4F5F8] hover:bg-[#FFF8CC] text-[#17136B] font-bold text-xs border border-gray-200 transition-colors self-start sm:self-auto"
          >
            Need Custom Word Count? Request Quote
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-gray-200 text-[#17136B]">
                <th className="py-3 px-3 font-bold w-1/3">Feature / Deliverable</th>
                <th className="py-3 px-2 font-bold text-center">Starter ($20)</th>
                <th className="py-3 px-2 font-bold text-center bg-[#FFF8CC]/50 rounded-t-lg">SEO Blog ($40)</th>
                <th className="py-3 px-2 font-bold text-center">Growth ($100)</th>
                <th className="py-3 px-2 font-bold text-center">Premium ($200)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-[#25254B]">
              <tr>
                <td className="py-3 px-3 font-medium">Included Word Count</td>
                <td className="py-3 px-2 text-center">Up to 500w</td>
                <td className="py-3 px-2 text-center bg-[#FFF8CC]/30 font-semibold">Up to 800w</td>
                <td className="py-3 px-2 text-center">3 &times; 700w (2,100w)</td>
                <td className="py-3 px-2 text-center">4 &times; 1,000w (4,000w)</td>
              </tr>
              <tr>
                <td className="py-3 px-3 font-medium">Articles in Package</td>
                <td className="py-3 px-2 text-center">1 Article</td>
                <td className="py-3 px-2 text-center bg-[#FFF8CC]/30 font-semibold">1 Article</td>
                <td className="py-3 px-2 text-center">3 Articles</td>
                <td className="py-3 px-2 text-center">4 Articles</td>
              </tr>
              <tr>
                <td className="py-3 px-3 font-medium">Research Scope</td>
                <td className="py-3 px-2 text-center">Brief-based</td>
                <td className="py-3 px-2 text-center bg-[#FFF8CC]/30 font-semibold">Search intent & SERP</td>
                <td className="py-3 px-2 text-center">Topic alignment</td>
                <td className="py-3 px-2 text-center">In-depth source citations</td>
              </tr>
              <tr>
                <td className="py-3 px-3 font-medium">SEO Headings & Meta Snippet</td>
                <td className="py-3 px-2 text-center text-gray-400">Basic</td>
                <td className="py-3 px-2 text-center bg-[#FFF8CC]/30 text-emerald-700 font-bold">Included</td>
                <td className="py-3 px-2 text-center text-emerald-700 font-bold">Included</td>
                <td className="py-3 px-2 text-center text-emerald-700 font-bold">Full Metadata Suite</td>
              </tr>
              <tr>
                <td className="py-3 px-3 font-medium">Included Revision Rounds</td>
                <td className="py-3 px-2 text-center">1 Round</td>
                <td className="py-3 px-2 text-center bg-[#FFF8CC]/30 font-semibold">1 Round</td>
                <td className="py-3 px-2 text-center">1 Consolidated</td>
                <td className="py-3 px-2 text-center">1 Consolidated</td>
              </tr>
              <tr>
                <td className="py-3 px-3 font-medium">Typical Turnaround</td>
                <td className="py-3 px-2 text-center">2–3 Days</td>
                <td className="py-3 px-2 text-center bg-[#FFF8CC]/30 font-semibold">3–4 Days</td>
                <td className="py-3 px-2 text-center">5–7 Days</td>
                <td className="py-3 px-2 text-center">7–10 Days</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Pricing Policy Notice */}
        <div className="mt-6 pt-5 border-t border-gray-100 flex items-start gap-2 text-xs text-[#66677A]">
          <ShieldCheck className="w-4 h-4 text-[#17136B] flex-shrink-0 mt-0.5" />
          <span>
            <strong>Editorial Policy Note:</strong> These prices reflect editable introductory rates. Complex technical topics, enterprise white papers, or extensive multi-source academic dissertations are quoted transparently prior to work commencement. No hidden fees or automated rebilling.
          </span>
        </div>
      </div>
    </div>
  );
};
