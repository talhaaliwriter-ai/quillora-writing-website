import React from 'react';
import { siteConfig } from '../config/siteConfig';
import { Mail, Linkedin, Twitter, ArrowRight, ShieldCheck, Award } from 'lucide-react';

interface FounderSectionProps {
  onOpenQuote: () => void;
}

export const FounderSection: React.FC<FounderSectionProps> = ({ onOpenQuote }) => {
  return (
    <section className="py-20 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#17136B] rounded-3xl overflow-hidden shadow-2xl border border-[#25254B]/20 text-white grid grid-cols-1 lg:grid-cols-12">
          {/* Left Column: Monogram & Heraldic Crest (NO photo as instructed) */}
          <div className="lg:col-span-5 bg-[#0f0b4d] p-8 sm:p-12 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/10 relative overflow-hidden">
            {/* Background geometric watermark */}
            <div className="absolute -top-12 -left-12 w-48 h-48 rounded-full bg-[#FFD400]/10 blur-2xl pointer-events-none"></div>

            <div className="space-y-6 relative z-10">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FFD400] text-[#17136B]">
                Editorial Leadership
              </span>

              {/* Refined TA Monogram Crest */}
              <div className="flex items-center gap-5">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#FFD400] to-[#e6bf00] flex items-center justify-center text-[#17136B] font-serif font-black text-3xl shadow-lg border-2 border-white/20 select-none">
                  TA
                </div>
                <div>
                  <h3 className="font-serif-heading text-2xl font-bold text-white">
                    {siteConfig.founderName}
                  </h3>
                  <p className="text-amber-200 text-sm font-medium">
                    {siteConfig.founderTitle}
                  </p>
                  <p className="text-gray-400 text-xs mt-0.5">
                    Quillora Writing & Content Solutions
                  </p>
                </div>
              </div>

              {/* Key Principles Checklist */}
              <div className="pt-4 space-y-3 text-sm text-gray-300">
                <div className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-[#FFD400] flex-shrink-0 mt-0.5" />
                  <span>Strict human authorship with zero artificial hallucinations or filler</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Award className="w-4 h-4 text-[#FFD400] flex-shrink-0 mt-0.5" />
                  <span>Rigorous ethical academic compliance (editing, clarity & citations)</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Mail className="w-4 h-4 text-[#FFD400] flex-shrink-0 mt-0.5" />
                  <span>Direct founder communication: no middlemen or communication bottlenecks</span>
                </div>
              </div>
            </div>

            {/* Social & Contact links */}
            <div className="pt-8 border-t border-white/10 relative z-10 space-y-3">
              <div>
                <span className="text-xs uppercase tracking-wider text-gray-400 font-semibold block mb-1">
                  Founder Business Email
                </span>
                <a
                  href={`mailto:${siteConfig.contactEmail}`}
                  className="text-sm font-bold text-[#FFD400] hover:underline inline-flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  <span>{siteConfig.contactEmail}</span>
                </a>
              </div>

              <div className="flex items-center gap-2 pt-2">
                <a
                  href="https://www.linkedin.com/in/talha-ali-33418b384/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/10 hover:bg-[#FFD400] hover:text-[#17136B] transition-colors"
                  title="LinkedIn: Talha Ali"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/talha-freelancer-369240396/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/10 hover:bg-[#FFD400] hover:text-[#17136B] transition-colors"
                  title="LinkedIn: Talha Freelancer"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://x.com/Talha70234"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/10 hover:bg-[#FFD400] hover:text-[#17136B] transition-colors"
                  title="X (Twitter): @Talha70234"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href="https://medium.com/@talhafreelancr109"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/10 hover:bg-[#FFD400] hover:text-[#17136B] transition-colors font-serif font-bold text-xs flex items-center justify-center w-8 h-8"
                  title="Medium: @talhafreelancr109"
                >
                  M
                </a>
                <a
                  href="https://uk.pinterest.com/talhafreelancr109/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/10 hover:bg-[#FFD400] hover:text-[#17136B] transition-colors font-bold text-xs flex items-center justify-center w-8 h-8"
                  title="Pinterest: talhafreelancr109"
                >
                  P
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Text-Led Founder Statement */}
          <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between">
            <div className="space-y-6">
              <span className="text-xs font-bold tracking-widest uppercase text-[#FFD400]">
                A Message from the Founder
              </span>

              <h2 className="font-serif-heading text-2xl sm:text-3xl font-bold text-white leading-snug">
                &ldquo;Every sentence must earn its place through clarity, substance, and respect for the reader.&rdquo;
              </h2>

              {/* Text with tasteful drop cap */}
              <div className="space-y-4 text-gray-200 text-sm sm:text-base leading-relaxed">
                <p className="drop-cap">
                  When I founded Quillora, my goal was straightforward: to provide individuals, businesses, and academic researchers with written communication that is articulate, thoroughly researched, and dependable. Too much contemporary writing relies on shallow buzzwords, mechanical fluff, or unexamined claims.
                </p>
                <p>
                  Whether working on an introductory 500-word Starter Article ($20), an organic SEO blog post ($40), or a multi-article Content Growth package ($100), I treat each brief as a direct partnership. You receive clear structural thinking, thoughtful revision care, and meticulous attention to tone.
                </p>
                <p>
                  In academic editing and proofreading, we maintain strict ethical boundaries: we enhance grammar, clarity, structure, and citation formatting, while safeguarding the author&apos;s authentic voice and intellectual integrity.
                </p>
              </div>
            </div>

            <div className="pt-8 mt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="font-serif font-bold text-lg text-white">Talha Ali</p>
                <p className="text-xs text-amber-200">Lead Content Strategist & Founder, Quillora</p>
              </div>

              <button
                onClick={onOpenQuote}
                className="px-6 py-3 rounded-xl bg-[#FFD400] hover:bg-[#e6bf00] active:scale-95 text-[#17136B] font-bold text-sm transition-all shadow-md flex items-center gap-2 cursor-pointer"
              >
                <span>Discuss Your Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
