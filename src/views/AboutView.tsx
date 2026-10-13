import React from 'react';
import { siteConfig } from '../config/siteConfig';
import { FounderSection } from '../components/FounderSection';
import {
  ShieldCheck,
  Award,
  BookOpen,
  Sparkles,
  Mail,
  Linkedin,
  Twitter,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

interface AboutViewProps {
  onOpenQuote: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onOpenQuote }) => {
  return (
    <div className="space-y-16 pb-20">
      {/* Banner */}
      <section className="bg-[#17136B] text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-white/10">
        <div className="max-w-7xl mx-auto space-y-4">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FFD400] text-[#17136B]">
            About Quillora
          </span>
          <h1 className="font-serif-heading text-3xl sm:text-5xl font-bold text-white">
            Editorial Purpose, Human Craft & Ethical Rigor
          </h1>
          <p className="text-gray-300 text-sm sm:text-base max-w-3xl leading-relaxed">
            Founded by <strong>Talha Ali</strong>, Quillora was built on a simple belief: in an internet crowded with synthetic noise and unexamined assertions, clear, disciplined human writing is the ultimate competitive advantage.
          </p>
        </div>
      </section>

      {/* Main Philosophy Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#17136B] bg-[#FFF8CC] px-3 py-1 rounded-full border border-[#FFD400]/40">
              Our Founding Principles
            </span>
            <h2 className="font-serif-heading text-3xl sm:text-4xl font-bold text-[#17136B]">
              Why We Champion Human-Crafted Editorial Solutions
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-[#25254B] leading-relaxed">
              <p className="drop-cap">
                The digital landscape has fundamentally changed. Automated tools can generate thousands of words in seconds, but sheer volume has diluted trust. Readers have developed an acute sensitivity to hollow phrasing, repetitive cadence, and superficial generalizations.
              </p>
              <p>
                At Quillora, we treat writing as an intellectual craft. We analyze search intent, structure arguments logically, cross-reference reputable citations, and tune prose to the exact nuance of our clients&apos; target audiences.
              </p>
              <p>
                From an introductory 500-word Starter Article ($20) to a comprehensive monthly Content Growth package ($100), our work is backed by transparent commitments: 1 dedicated revision round included, verified facts, and zero synthetic fluff.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 bg-white p-8 rounded-3xl border border-gray-200 shadow-sm space-y-6">
            <h3 className="font-serif-heading text-xl font-bold text-[#17136B]">
              The Quillora Quality Standard
            </h3>
            <div className="space-y-4">
              {[
                {
                  title: '100% Original Drafting',
                  desc: 'Every piece is composed fresh from your project brief with zero plagiarized content.',
                },
                {
                  title: 'Ethical Academic Integrity',
                  desc: 'Strictly editing, proofreading, and citation support; zero ghostwritten student essays.',
                },
                {
                  title: 'Factual Attribution',
                  desc: 'All statistical claims and industry data points are verified against reputable public sources.',
                },
                {
                  title: 'Consolidated Revision Care',
                  desc: 'One full revision round included to ensure voice and emphasis meet your expectations.',
                },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#17136B] block">{item.title}</strong>
                    <span className="text-[#66677A] text-xs">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <FounderSection onOpenQuote={onOpenQuote} />

      {/* Verified Contact Details Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-200 shadow-sm text-center space-y-4">
          <h3 className="font-serif-heading text-2xl font-bold text-[#17136B]">
            Official Communication & Profiles
          </h3>
          <p className="text-xs sm:text-sm text-[#66677A] max-w-md mx-auto">
            Talha Ali handles project communications directly. We do not use phone or WhatsApp support; official inquiries are conducted via our verified work email.
          </p>

          <div className="pt-2">
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#FFF8CC] text-[#17136B] font-bold text-sm border border-[#FFD400] hover:bg-[#FFD400] transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>{siteConfig.contactEmail}</span>
            </a>
          </div>

          <div className="pt-4 flex justify-center gap-3">
            {siteConfig.socialLinks.map((social) => (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-[#F4F5F8] hover:bg-[#17136B] hover:text-white text-xs font-semibold text-[#17136B] transition-colors"
              >
                {social.platform}
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
