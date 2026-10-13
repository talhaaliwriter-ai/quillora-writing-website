import React, { useState } from 'react';
import { portfolioSamplesData, PortfolioSample } from '../data/portfolioSamples';
import {
  FileText,
  CheckCircle2,
  ArrowRight,
  ShieldAlert,
  X,
  ExternalLink,
} from 'lucide-react';

interface PortfolioViewProps {
  onOpenQuote: () => void;
}

export const PortfolioView: React.FC<PortfolioViewProps> = ({ onOpenQuote }) => {
  const [activeSample, setActiveSample] = useState<PortfolioSample | null>(null);

  return (
    <div className="space-y-16 pb-20">
      {/* Header Banner */}
      <section className="bg-[#17136B] text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-white/10">
        <div className="max-w-7xl mx-auto space-y-4">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FFD400] text-[#17136B]">
            Demonstration Portfolio
          </span>
          <h1 className="font-serif-heading text-3xl sm:text-5xl font-bold text-white">
            Editorial Writing & Excerpt Samples
          </h1>
          <p className="text-gray-300 text-sm sm:text-base max-w-3xl leading-relaxed">
            In accordance with our strict privacy and confidentiality standards, published client materials are protected. The pieces below are <strong>demonstration samples</strong> crafted to showcase our prose style, research rigor, and analytical clarity across different formats.
          </p>

          <div className="pt-2 flex items-center gap-2 text-xs text-amber-200">
            <ShieldAlert className="w-4 h-4 text-[#FFD400]" />
            <span>All entries are clearly labelled demonstration samples, not proprietary client data.</span>
          </div>
        </div>
      </section>

      {/* Portfolio Samples Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioSamplesData.map((sample) => (
            <div
              key={sample.id}
              id={sample.id}
              className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-bold text-amber-800 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                    {sample.sampleBadge}
                  </span>
                  <span className="text-xs text-[#66677A] font-semibold">
                    {sample.niche}
                  </span>
                </div>

                <h3 className="font-serif-heading text-xl font-bold text-[#17136B]">
                  {sample.title}
                </h3>

                <div className="text-xs text-[#66677A] space-y-1">
                  <p>
                    <strong className="text-[#17136B]">Category:</strong> {sample.category}
                  </p>
                  <p>
                    <strong className="text-[#17136B]">Sample Word Count:</strong> ~{sample.wordCount} words
                  </p>
                </div>

                <p className="text-xs text-[#25254B] bg-[#F4F5F8] p-3.5 rounded-xl border border-gray-100 leading-relaxed">
                  <strong className="text-[#17136B] block mb-1">Editorial Objective:</strong>
                  {sample.objective}
                </p>

                {/* Excerpt callout */}
                <div className="border-l-4 border-[#17136B] pl-4 py-1 text-xs text-[#25254B] italic leading-relaxed">
                  &ldquo;{sample.excerptSnippet}&rdquo;
                </div>

                {/* Key Techniques */}
                <div className="pt-2 space-y-1.5">
                  <span className="text-[10px] uppercase font-bold text-[#66677A] tracking-wider block">
                    Techniques Demonstrated:
                  </span>
                  {sample.keyTechniques.map((tech, idx) => (
                    <div key={idx} className="flex items-start gap-1.5 text-xs text-[#25254B]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>{tech}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action */}
              <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                <button
                  onClick={() => setActiveSample(sample)}
                  className="px-5 py-2.5 rounded-xl bg-[#17136B] text-white text-xs font-bold hover:bg-[#0f0b4d] transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Inspect Full Sample Text</span>
                </button>
                <button
                  onClick={onOpenQuote}
                  className="text-xs font-bold text-[#17136B] hover:underline"
                >
                  Request Similar Piece
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal for full sample viewing */}
      {activeSample && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#17136B]/60 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden max-h-[85vh] flex flex-col">
            <div className="bg-[#17136B] text-white p-6 flex items-center justify-between border-b border-white/10 flex-shrink-0">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#FFD400]">
                  {activeSample.sampleBadge}
                </span>
                <h3 className="font-serif-heading text-lg font-bold text-white">
                  {activeSample.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveSample(null)}
                className="p-1.5 rounded-lg text-white/70 hover:text-white hover:bg-white/10"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 sm:p-8 overflow-y-auto space-y-4 text-sm text-[#25254B] leading-relaxed">
              <div className="bg-amber-50 border border-amber-200 p-3 rounded-xl text-xs text-amber-900">
                <strong>Demonstration Note:</strong> This excerpt is formatted to showcase tone, transition clarity, and vocabulary choices.
              </div>

              {activeSample.fullExcerpt.map((para, i) => (
                <p key={i} className="text-sm leading-relaxed">
                  {para}
                </p>
              ))}
            </div>

            <div className="p-4 bg-gray-50 border-t border-gray-100 flex items-center justify-between flex-shrink-0">
              <span className="text-xs text-[#66677A]">Sample Scope: ~{activeSample.wordCount} words</span>
              <button
                onClick={() => {
                  setActiveSample(null);
                  onOpenQuote();
                }}
                className="px-5 py-2 rounded-xl bg-[#FFD400] text-[#17136B] font-bold text-xs hover:bg-[#e6bf00]"
              >
                Request a Project Like This
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
