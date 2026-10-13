import React from 'react';
import { siteConfig } from '../config/siteConfig';
import { servicesData } from '../data/services';
import { blogArticlesData } from '../data/blogArticles';
import { portfolioSamplesData } from '../data/portfolioSamples';
import { reviewSlotsData } from '../data/reviews';
import { FounderSection } from '../components/FounderSection';
import { PricingCalculator } from '../components/PricingCalculator';
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  BookOpen,
  FileText,
  Clock,
  Layers,
  HelpCircle,
  Mail,
  ChevronRight,
  Award,
} from 'lucide-react';

interface HomeViewProps {
  onNavigate: (route: string) => void;
  onOpenQuote: () => void;
  onOpenZipDownload: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigate,
  onOpenQuote,
  onOpenZipDownload,
}) => {
  return (
    <div className="space-y-20 pb-20">
      {/* 1. Hero Section (Deep Royal Navy #17136B with Bright Yellow #FFD400 Accents) */}
      <section className="relative bg-[#17136B] text-white pt-16 sm:pt-24 pb-20 sm:pb-28 overflow-hidden">
        {/* Subtle geometric background shapes */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-gradient-to-br from-[#FFD400]/10 to-transparent blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-blue-600/10 blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-[#FFD400] border border-white/10 backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Writing & Content Solutions</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15]">
              Articulate Words.{' '}
              <span className="text-[#FFD400]">Rigorous Research.</span>{' '}
              Measurable Impact.
            </h1>

            {/* Opening paragraph with restrained drop-cap aesthetic */}
            <p className="text-gray-200 text-base sm:text-lg lg:text-xl font-normal leading-relaxed drop-cap">
              Quillora delivers human-crafted written content, organic search articles, academic proofreading, and strategic business copy. Founded by Talha Ali, we champion clarity over algorithmic clutter, giving your ideas the authoritative voice they deserve.
            </p>

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenQuote}
                className="px-7 py-4 rounded-xl bg-[#FFD400] hover:bg-[#e6bf00] active:scale-95 text-[#17136B] font-bold text-sm sm:text-base shadow-lg transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Request a Project Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('/services')}
                className="px-6 py-4 rounded-xl bg-white/10 hover:bg-white/20 active:scale-95 text-white font-semibold text-sm sm:text-base border border-white/20 transition-all flex items-center gap-2"
              >
                <span>Browse All 12 Services</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Value Highlights */}
            <div className="pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-gray-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FFD400] flex-shrink-0" />
                <span>Intro rates from $20 USD</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FFD400] flex-shrink-0" />
                <span>1 Revision round included</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FFD400] flex-shrink-0" />
                <span>100% Ethical academic care</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FFD400] flex-shrink-0" />
                <span>Zero AI fluff or hallucinations</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Core Value Pillars Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#FFF8CC] text-[#17136B] flex items-center justify-center font-bold">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="font-serif-heading text-xl font-bold text-[#17136B]">
              Human-Crafted Substance
            </h3>
            <p className="text-sm text-[#66677A] leading-relaxed">
              Every sentence is drafted with deliberate intent. We avoid generic templates, repetitive syntax, and automated fluff, focusing on your actual thesis and reader value.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#FFF8CC] text-[#17136B] flex items-center justify-center font-bold">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-serif-heading text-xl font-bold text-[#17136B]">
              Ethical Academic Integrity
            </h3>
            <p className="text-sm text-[#66677A] leading-relaxed">
              Strictly compliant with international university guidelines. We provide language polishing, proofreading, and citation audits without ghostwriting or academic shortcuts.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#FFF8CC] text-[#17136B] flex items-center justify-center font-bold">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="font-serif-heading text-xl font-bold text-[#17136B]">
              Transparent Turnaround
            </h3>
            <p className="text-sm text-[#66677A] leading-relaxed">
              No hidden fees, surprise upsells, or missed deadlines. Introductory pricing starting at $20, with clear scope definitions and a dedicated consolidated revision round.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Services Directory Spotlight (Highlights across all 12 services) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#17136B] bg-[#FFF8CC] px-3 py-1 rounded-full border border-[#FFD400]/40">
              Complete Editorial Solutions
            </span>
            <h2 className="font-serif-heading text-3xl sm:text-4xl font-bold text-[#17136B]">
              Specialized Writing & Editorial Services
            </h2>
            <p className="text-[#66677A] text-sm sm:text-base">
              Explore our 12 dedicated disciplines, crafted for founders, digital brands, and academic authors.
            </p>
          </div>

          <button
            onClick={() => onNavigate('/services')}
            className="text-sm font-bold text-[#17136B] hover:text-[#0f0b4d] flex items-center gap-1.5 hover:underline self-start md:self-auto"
          >
            <span>View All 12 Service Pages</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 6 Featured Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.slice(0, 6).map((service) => (
            <div
              key={service.slug}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-gray-200 shadow-sm hover:shadow-md hover:border-[#17136B]/30 transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-[#F4F5F8] group-hover:bg-[#FFF8CC] text-[#17136B] transition-colors">
                    <Layers className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">
                    {service.startingPrice}
                  </span>
                </div>

                <div>
                  <h3 className="font-serif-heading text-lg font-bold text-[#17136B] group-hover:text-blue-900">
                    {service.title}
                  </h3>
                  <p className="text-xs text-[#66677A] mt-2 line-clamp-2 leading-relaxed">
                    {service.shortDescription}
                  </p>
                </div>

                <div className="space-y-1.5 pt-2 border-t border-gray-100">
                  <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">
                    Core Deliverables:
                  </span>
                  {service.keyDeliverables.slice(0, 2).map((deliv, idx) => (
                    <div key={idx} className="flex items-start gap-1.5 text-xs text-[#25254B]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-gray-100 flex items-center justify-between">
                <span className="text-[11px] text-[#66677A]">{service.wordCountEstimate}</span>
                <button
                  onClick={() => onNavigate(`/services/${service.slug}`)}
                  className="text-xs font-bold text-[#17136B] group-hover:translate-x-1 transition-transform flex items-center gap-1"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Text-Led Founder Section (Talha Ali) */}
      <FounderSection onOpenQuote={onOpenQuote} />

      {/* 5. How It Works 4-Step Process */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-[#17136B] bg-[#FFF8CC] px-3 py-1 rounded-full border border-[#FFD400]/40">
            Simple, Transparent Process
          </span>
          <h2 className="font-serif-heading text-3xl sm:text-4xl font-bold text-[#17136B]">
            From Initial Brief to Polished Final Delivery
          </h2>
          <p className="text-[#66677A] text-sm sm:text-base">
            A frictionless workflow designed to respect your time and preserve editorial precision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            {
              num: '01',
              title: 'Project Briefing',
              desc: 'Submit your topic, target audience, preferred tone, and reference links via our quote form or email.',
            },
            {
              num: '02',
              title: 'Research & Blueprinting',
              desc: 'We outline the structural narrative, verify cited facts, and align search intent before drafting.',
            },
            {
              num: '03',
              title: 'Meticulous Drafting',
              desc: 'Composing polished prose with disciplined syntax, scannable subheadings, and engaging transitions.',
            },
            {
              num: '04',
              title: 'Consolidated Revision',
              desc: 'One full revision round included to fine-tune phrasing, emphasis, and styling for immediate publishing.',
            },
          ].map((step) => (
            <div key={step.num} className="bg-white p-6 rounded-3xl border border-gray-200 relative space-y-3">
              <span className="font-serif text-3xl font-black text-[#FFD400]">
                {step.num}
              </span>
              <h3 className="font-serif-heading text-lg font-bold text-[#17136B]">
                {step.title}
              </h3>
              <p className="text-xs text-[#66677A] leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Pricing Summary on Homepage */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PricingCalculator
          onSelectPackage={(pkg) => onOpenQuote()}
          onOpenQuote={onOpenQuote}
        />
      </section>

      {/* 7. Demonstration Portfolio Showcase (Clearly labelled samples) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#17136B] bg-[#FFF8CC] px-3 py-1 rounded-full border border-[#FFD400]/40">
              Demonstration Samples
            </span>
            <h2 className="font-serif-heading text-3xl sm:text-4xl font-bold text-[#17136B]">
              Sample Writing & Editorial Pieces
            </h2>
            <p className="text-[#66677A] text-sm">
              Explore demonstration writing excerpts illustrating our style, syntax, and analytical structure across different domains.
            </p>
          </div>

          <button
            onClick={() => onNavigate('/portfolio')}
            className="text-sm font-bold text-[#17136B] hover:underline flex items-center gap-1"
          >
            <span>View All Portfolio Samples</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolioSamplesData.slice(0, 2).map((sample) => (
            <div
              key={sample.id}
              className="bg-white rounded-3xl p-7 border border-gray-200 space-y-4 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-bold text-amber-800 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
                  {sample.sampleBadge}
                </span>
                <span className="text-xs text-[#66677A] font-medium">{sample.category}</span>
              </div>

              <h3 className="font-serif-heading text-xl font-bold text-[#17136B]">
                {sample.title}
              </h3>

              <div className="bg-[#F4F5F8] p-4 rounded-2xl border-l-4 border-[#17136B] text-xs text-[#25254B] italic leading-relaxed">
                &ldquo;{sample.excerptSnippet}&rdquo;
              </div>

              <div className="space-y-1 text-xs text-[#66677A]">
                <strong className="text-[#17136B]">Technique Focus:</strong> {sample.keyTechniques.join(' • ')}
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('/portfolio')}
                  className="text-xs font-bold text-[#17136B] hover:underline flex items-center gap-1"
                >
                  <span>Read Full Sample Excerpt</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Reviews / Client Feedback Placeholders (Honest placeholders as instructed) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#17136B] bg-[#FFF8CC] px-3 py-1 rounded-full border border-[#FFD400]/40">
            Client Feedback & Standards
          </span>
          <h2 className="font-serif-heading text-3xl font-bold text-[#17136B]">
            Client Review Policy & Quality Commitments
          </h2>
          <p className="text-xs sm:text-sm text-[#66677A]">
            We uphold strict honesty: rather than inventing artificial testimonials, our review slots showcase our transparency and are reserved for verified client feedback upon project completion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviewSlotsData.map((slot) => (
            <div
              key={slot.id}
              className="bg-white p-6 rounded-3xl border border-dashed border-gray-300 space-y-3 relative"
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-[#17136B] uppercase tracking-wider bg-gray-100 px-2 py-0.5 rounded">
                  {slot.projectCategory}
                </span>
                <span className="text-[10px] text-amber-700 font-semibold bg-amber-50 px-2 py-0.5 rounded">
                  Reserved Slot
                </span>
              </div>

              <p className="text-xs font-semibold text-[#17136B]">
                {slot.placeholderNotice}
              </p>

              <p className="text-xs text-[#66677A] leading-relaxed">
                {slot.submissionInstructions}
              </p>

              <div className="pt-2 text-[11px] text-[#25254B] bg-[#F4F5F8] p-3 rounded-xl border border-gray-100">
                <span className="font-semibold block text-[#17136B]">Target Client Profile:</span>
                <span>{slot.recommendedFields.clientInitialsOrOrganization}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. Blog Articles Teaser */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#17136B] bg-[#FFF8CC] px-3 py-1 rounded-full border border-[#FFD400]/40">
              Editorial Insights
            </span>
            <h2 className="font-serif-heading text-3xl sm:text-4xl font-bold text-[#17136B]">
              Latest Articles from the Quillora Desk
            </h2>
            <p className="text-[#66677A] text-sm">
              Original guidance on SEO writing, academic ethics, citation standards, and conversion copy.
            </p>
          </div>

          <button
            onClick={() => onNavigate('/blog')}
            className="text-sm font-bold text-[#17136B] hover:underline flex items-center gap-1"
          >
            <span>Read All 6 Blog Articles</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogArticlesData.slice(0, 3).map((article) => (
            <div
              key={article.slug}
              onClick={() => onNavigate(`/blog/${article.slug}`)}
              className="bg-white rounded-3xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-[#66677A]">
                  <span className="font-bold text-[#17136B] uppercase">{article.category}</span>
                  <span>{article.readTime}</span>
                </div>

                <h3 className="font-serif-heading text-lg font-bold text-[#17136B] group-hover:text-blue-900 leading-snug">
                  {article.title}
                </h3>

                <p className="text-xs text-[#66677A] line-clamp-3 leading-relaxed">
                  {article.excerpt}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-gray-100 flex items-center justify-between text-xs">
                <span className="text-[#66677A]">By {article.author}</span>
                <span className="font-bold text-[#17136B] group-hover:translate-x-1 transition-transform flex items-center gap-1">
                  Read Article <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 10. Frequently Asked Questions (FAQ) */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#17136B] bg-[#FFF8CC] px-3 py-1 rounded-full border border-[#FFD400]/40">
            Common Inquiries
          </span>
          <h2 className="font-serif-heading text-3xl font-bold text-[#17136B]">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {[
            {
              q: 'How does your introductory pricing work?',
              a: 'Our introductory prices ($20 for Starter Article up to 500w, $40 for SEO Blog up to 800w, $100 for Content Growth 3 articles, $200 for Premium Pack 4 articles) provide predictable, accessible costs for first-time and recurring clients. All prices are in USD and subject to mutual scope confirmation.',
            },
            {
              q: 'What is included in the revision round?',
              a: 'Each package includes one consolidated revision round. Within 7 days of receiving your initial draft, you can compile all adjustments to tone, emphasis, or examples into a single feedback email, which we promptly implement.',
            },
            {
              q: 'Do you write academic essays for students?',
              a: 'No. Under our strict ethical guidelines, we never ghostwrite assignments, sit exams, or fabricate research. We provide academic editing, proofreading, clarity improvements, and citation verification on work written by the student or researcher.',
            },
            {
              q: 'How do we communicate throughout the project?',
              a: 'All official project communication, brief submissions, and draft deliveries take place via our verified work email: talhahashim816@gmail.com. We do not use phone or WhatsApp support.',
            },
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-200 space-y-2">
              <h4 className="font-serif-heading text-base font-bold text-[#17136B] flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-[#FFD400] flex-shrink-0" />
                <span>{item.q}</span>
              </h4>
              <p className="text-xs sm:text-sm text-[#66677A] leading-relaxed pl-6">
                {item.a}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
