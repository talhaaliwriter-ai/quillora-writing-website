import React from 'react';
import { servicesData, ServiceItem } from '../data/services';
import { siteConfig } from '../config/siteConfig';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Clock,
  ShieldCheck,
  HelpCircle,
  Layers,
  ChevronRight,
  Sparkles,
  Mail,
} from 'lucide-react';

interface ServiceDetailViewProps {
  slug: string;
  onNavigate: (route: string) => void;
  onOpenQuote: () => void;
}

export const ServiceDetailView: React.FC<ServiceDetailViewProps> = ({
  slug,
  onNavigate,
  onOpenQuote,
}) => {
  const service = servicesData.find((s) => s.slug === slug) || servicesData[0];

  const relatedServices = servicesData.filter((s) =>
    service.relatedServiceSlugs.includes(s.slug)
  );

  const isAcademic =
    service.slug === 'academic-editing-proofreading' ||
    service.slug === 'research-citation-assistance';

  return (
    <div className="space-y-16 pb-20">
      {/* Breadcrumb & Navigation */}
      <div className="bg-[#17136B] text-white pt-10 pb-16 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex items-center gap-2 text-xs text-gray-300">
            <button
              onClick={() => onNavigate('/')}
              className="hover:text-white transition-colors"
            >
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <button
              onClick={() => onNavigate('/services')}
              className="hover:text-white transition-colors"
            >
              Services
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <span className="text-[#FFD400] font-semibold">{service.title}</span>
          </div>

          <div className="max-w-3xl space-y-4">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FFD400] text-[#17136B]">
              {service.startingPrice}
            </span>

            <h1 className="font-serif-heading text-3xl sm:text-5xl font-bold text-white leading-tight">
              {service.title}
            </h1>

            <p className="text-gray-200 text-base sm:text-lg italic font-normal">
              {service.subtitle}
            </p>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              {service.shortDescription}
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenQuote}
                className="px-6 py-3.5 rounded-xl bg-[#FFD400] hover:bg-[#e6bf00] active:scale-95 text-[#17136B] font-bold text-xs sm:text-sm shadow-md transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Request a Quote for {service.title}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('/services')}
                className="px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold transition-all flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>All 12 Services</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Two-Column Content Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Comprehensive In-Depth Service Exposition (~600–1,000 words) */}
          <div className="lg:col-span-8 space-y-12">
            {/* Academic Ethics Warning Banner if applicable */}
            {isAcademic && (
              <div className="p-6 rounded-3xl bg-amber-50 border-2 border-amber-300 text-amber-950 space-y-2">
                <div className="flex items-center gap-2 font-bold text-sm text-[#17136B]">
                  <ShieldCheck className="w-5 h-5 text-amber-700" />
                  <span>Quillora Academic Integrity & Ethical Editing Compliance</span>
                </div>
                <p className="text-xs leading-relaxed">
                  In strict accordance with international university honor codes, COPE (Committee on Publication Ethics) principles, and CIEP editorial standards, Quillora provides <strong>editorial refinement, language proofreading, logical flow guidance, and citation formatting</strong> on student- and researcher-authored manuscripts. We strictly <strong>DO NOT ghostwrite assignments, fabricate research findings, or guarantee specific grades</strong>. The author retains full intellectual ownership.
                </p>
              </div>
            )}

            {/* In-depth content sections */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-200 shadow-sm space-y-10">
              {service.contentSections.map((section, idx) => (
                <article key={idx} className="space-y-4">
                  <h2 className="font-serif-heading text-2xl font-bold text-[#17136B] border-b border-gray-100 pb-3">
                    {section.heading}
                  </h2>
                  <div className="space-y-3.5 text-sm sm:text-base text-[#25254B] leading-relaxed">
                    {section.body.map((paragraph, pIdx) => (
                      <p
                        key={pIdx}
                        className={idx === 0 && pIdx === 0 ? 'drop-cap' : ''}
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </article>
              ))}
            </div>

            {/* Step-by-Step Delivery Process */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-200 shadow-sm space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#17136B] bg-[#FFF8CC] px-3 py-1 rounded-full border border-[#FFD400]/40">
                Editorial Workflow
              </span>
              <h3 className="font-serif-heading text-2xl font-bold text-[#17136B]">
                How We Deliver {service.title}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {service.processSteps.map((step) => (
                  <div
                    key={step.step}
                    className="p-5 rounded-2xl bg-[#F4F5F8] border border-gray-200 space-y-2"
                  >
                    <div className="w-7 h-7 rounded-full bg-[#17136B] text-white flex items-center justify-center text-xs font-bold">
                      {step.step}
                    </div>
                    <h4 className="font-serif-heading text-sm font-bold text-[#17136B]">
                      {step.title}
                    </h4>
                    <p className="text-xs text-[#66677A] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tailored FAQs */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-200 shadow-sm space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#17136B] bg-[#FFF8CC] px-3 py-1 rounded-full border border-[#FFD400]/40">
                Service Clarifications
              </span>
              <h3 className="font-serif-heading text-2xl font-bold text-[#17136B]">
                Frequently Asked Questions About {service.title}
              </h3>

              <div className="space-y-4">
                {service.faqs.map((faq, fIdx) => (
                  <div
                    key={fIdx}
                    className="p-5 rounded-2xl bg-[#F4F5F8] border border-gray-100 space-y-2"
                  >
                    <h4 className="font-serif-heading text-sm font-bold text-[#17136B] flex items-center gap-2">
                      <HelpCircle className="w-4 h-4 text-[#FFD400] flex-shrink-0" />
                      <span>{faq.question}</span>
                    </h4>
                    <p className="text-xs text-[#66677A] leading-relaxed pl-6">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Sticky Sidebar with Deliverables, Audience & Quote CTA */}
          <div className="lg:col-span-4 space-y-6">
            {/* Quick Action Card */}
            <div className="bg-white rounded-3xl p-7 border border-gray-200 shadow-md space-y-6 sticky top-24">
              <div className="border-b border-gray-100 pb-5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#66677A]">
                  Pricing & Turnaround
                </span>
                <div className="mt-2 flex items-baseline justify-between">
                  <span className="text-2xl font-black text-[#17136B]">
                    {service.startingPrice}
                  </span>
                  <span className="text-xs text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full font-semibold">
                    1 Revision Round
                  </span>
                </div>
                <p className="text-xs text-[#66677A] mt-2 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#17136B]" />
                  <span>Standard Scope: {service.wordCountEstimate}</span>
                </p>
              </div>

              {/* Key Deliverables */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#17136B]">
                  Included Deliverables:
                </h4>
                <div className="space-y-2">
                  {service.keyDeliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#25254B]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Target Audience */}
              <div className="pt-4 border-t border-gray-100 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#17136B]">
                  Ideal For:
                </h4>
                <ul className="space-y-1.5 text-xs text-[#66677A]">
                  {service.targetAudience.map((aud, idx) => (
                    <li key={idx} className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#17136B]"></span>
                      <span>{aud}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Buttons */}
              <div className="pt-4 border-t border-gray-100 space-y-2.5">
                <button
                  onClick={onOpenQuote}
                  className="w-full py-3.5 rounded-xl bg-[#FFD400] hover:bg-[#e6bf00] active:scale-95 text-[#17136B] font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Request Quote for This Service</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={`mailto:${siteConfig.contactEmail}?subject=Inquiry%20about%20${encodeURIComponent(service.title)}`}
                  className="w-full py-2.5 rounded-xl bg-[#F4F5F8] hover:bg-gray-200 text-[#25254B] text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-[#17136B]" />
                  <span>Email Talha Ali Directly</span>
                </a>
              </div>
            </div>

            {/* Related Services Links */}
            {relatedServices.length > 0 && (
              <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-sm space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#17136B]">
                  Related Services:
                </h4>
                <div className="space-y-2">
                  {relatedServices.map((rel) => (
                    <button
                      key={rel.slug}
                      onClick={() => onNavigate(`/services/${rel.slug}`)}
                      className="w-full text-left p-3 rounded-xl bg-[#F4F5F8] hover:bg-[#FFF8CC] text-xs font-semibold text-[#17136B] transition-colors flex items-center justify-between group"
                    >
                      <span>{rel.title}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
