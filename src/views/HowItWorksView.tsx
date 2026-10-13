import React from 'react';
import { siteConfig } from '../config/siteConfig';
import {
  FileText,
  Search,
  PenTool,
  CheckCircle2,
  Clock,
  ShieldCheck,
  ArrowRight,
  HelpCircle,
} from 'lucide-react';

interface HowItWorksViewProps {
  onOpenQuote: () => void;
}

export const HowItWorksView: React.FC<HowItWorksViewProps> = ({ onOpenQuote }) => {
  return (
    <div className="space-y-16 pb-20">
      {/* Banner */}
      <section className="bg-[#17136B] text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-white/10">
        <div className="max-w-7xl mx-auto space-y-4">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FFD400] text-[#17136B]">
            Transparent Editorial Workflow
          </span>
          <h1 className="font-serif-heading text-3xl sm:text-5xl font-bold text-white">
            How Quillora Delivers Exceptional Writing
          </h1>
          <p className="text-gray-300 text-sm sm:text-base max-w-3xl leading-relaxed">
            From your initial brief to the finalized revision round, our structured process ensures predictable timelines, clear communication, and high-impact written deliverables.
          </p>
        </div>
      </section>

      {/* 4 In-Depth Workflow Steps */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {[
            {
              step: '01',
              title: 'Project Briefing & Scope Definition',
              icon: FileText,
              tagline: 'Aligning on audience, tone, word count, and objectives',
              details: [
                'Submit your requirements via our website quote form or email to talhahashim816@gmail.com.',
                'Specify target audience demographics, desired word count, key themes, and any mandatory reference links.',
                'Receive a formal quote confirmation in USD and estimated delivery turnaround based on current scheduling.',
                'Approve the scope and confirm introductory pricing ($20 Starter, $40 SEO Blog, $100 Growth, $200 Premium Pack).',
              ],
            },
            {
              step: '02',
              title: 'Research, Search Intent & Outline Architecture',
              icon: Search,
              tagline: 'Grounding every assertion in reliable evidence before writing',
              details: [
                'We evaluate search intent and competitor content gaps to ensure high audience utility.',
                'Gather relevant public industry data, statistics, and verifiable source citations.',
                'Build a logical H2/H3 heading hierarchy that guarantees high scannability on desktop and mobile.',
                'For academic assignments, verify target style manual rules (APA 7, MLA 9, Chicago 17, Harvard).',
              ],
            },
            {
              step: '03',
              title: 'Meticulous Drafting & Tone Calibration',
              icon: PenTool,
              tagline: 'Drafting human-crafted prose with disciplined sentence syntax',
              details: [
                'Composing original, articulate paragraphs with zero generic AI fluff or filler.',
                'Refining transitions between arguments to maintain smooth reader momentum.',
                'Crafting compelling titles, subheadings, and meta descriptions.',
                'Formatting with bullet points, pull quotes, and clear takeaway summaries.',
              ],
            },
            {
              step: '04',
              title: 'Consolidated Revision Round & Final Handover',
              icon: CheckCircle2,
              tagline: 'Refining voice and delivering ready-to-publish assets',
              details: [
                'Initial draft delivered in your preferred format (Google Docs, Microsoft Word, or Markdown).',
                'You review the manuscript and compile all adjustments into one consolidated feedback list within 7 days.',
                'We implement the requested revisions promptly to achieve complete tonal alignment.',
                'Final clean copy delivered with full copyright ownership transferring to your organization.',
              ],
            },
          ].map((item) => (
            <div
              key={item.step}
              className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-200 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
            >
              <div className="lg:col-span-4 space-y-3">
                <span className="font-serif text-4xl sm:text-5xl font-black text-[#FFD400] block">
                  {item.step}
                </span>
                <h3 className="font-serif-heading text-xl sm:text-2xl font-bold text-[#17136B]">
                  {item.title}
                </h3>
                <p className="text-xs text-[#66677A] italic">
                  {item.tagline}
                </p>
              </div>

              <div className="lg:col-span-8 bg-[#F4F5F8] p-6 rounded-2xl border border-gray-100 space-y-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#17136B] block">
                  Key Actions in This Phase:
                </span>
                <div className="space-y-2.5">
                  {item.details.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#25254B]">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Revision Policy Deep-Dive */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#17136B] text-white rounded-3xl p-8 sm:p-10 space-y-4 border border-white/10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#FFD400]">
            Revision Policy Explained
          </span>
          <h3 className="font-serif-heading text-2xl font-bold">
            Why We Include One Consolidated Revision Round
          </h3>
          <p className="text-xs sm:text-sm text-gray-200 leading-relaxed">
            Consolidated revision rounds protect both client schedules and project focus. By collecting all adjustments to tone, emphasis, vocabulary, and specific examples into a single unified document, we can apply holistic adjustments quickly without disjointed back-and-forth delays.
          </p>
          <div className="pt-2 text-xs text-amber-200 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#FFD400]" />
            <span>Turnaround for standard revision requests is typically 24–48 business hours.</span>
          </div>
        </div>
      </section>
    </div>
  );
};
