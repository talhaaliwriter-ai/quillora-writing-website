import React from 'react';
import { reviewSlotsData } from '../data/reviews';
import { siteConfig } from '../config/siteConfig';
import { ShieldCheck, HelpCircle, Mail, ArrowRight } from 'lucide-react';

interface ReviewsViewProps {
  onOpenQuote: () => void;
}

export const ReviewsView: React.FC<ReviewsViewProps> = ({ onOpenQuote }) => {
  return (
    <div className="space-y-16 pb-20">
      {/* Banner */}
      <section className="bg-[#17136B] text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-white/10">
        <div className="max-w-7xl mx-auto space-y-4">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FFD400] text-[#17136B]">
            Client Review Policy & Trust
          </span>
          <h1 className="font-serif-heading text-3xl sm:text-5xl font-bold text-white">
            Transparent Client Feedback Slots
          </h1>
          <p className="text-gray-300 text-sm sm:text-base max-w-3xl leading-relaxed">
            At Quillora, integrity comes first. We never fabricate fictitious client names, artificial 5-star ratings, or imaginary customer reviews. Instead, this page outlines our quality commitments and transparently preserves slots for verified client testimonials.
          </p>
        </div>
      </section>

      {/* Trust Commitments */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-7 rounded-3xl border border-gray-200 space-y-3">
            <ShieldCheck className="w-6 h-6 text-[#17136B]" />
            <h3 className="font-serif-heading text-lg font-bold text-[#17136B]">
              Zero Fabricated Testimonials
            </h3>
            <p className="text-xs text-[#66677A] leading-relaxed">
              We decline to use fake stock headshots or artificial blurbs. Every review displayed on Quillora will be genuine and owner-verified.
            </p>
          </div>

          <div className="bg-white p-7 rounded-3xl border border-gray-200 space-y-3">
            <ShieldCheck className="w-6 h-6 text-[#17136B]" />
            <h3 className="font-serif-heading text-lg font-bold text-[#17136B]">
              Protected Client Privacy
            </h3>
            <p className="text-xs text-[#66677A] leading-relaxed">
              Clients who prefer anonymity (such as ghostwritten publications or academic dissertations) receive complete non-disclosure protection.
            </p>
          </div>

          <div className="bg-white p-7 rounded-3xl border border-gray-200 space-y-3">
            <ShieldCheck className="w-6 h-6 text-[#17136B]" />
            <h3 className="font-serif-heading text-lg font-bold text-[#17136B]">
              Direct Accountability
            </h3>
            <p className="text-xs text-[#66677A] leading-relaxed">
              Founder Talha Ali personally reviews all client feedback and oversees the consolidated revision round to ensure deliverables meet requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Review Placeholders Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="border-b border-gray-200 pb-4">
          <h2 className="font-serif-heading text-2xl font-bold text-[#17136B]">
            Reserved Testimonial Cards
          </h2>
          <p className="text-xs text-[#66677A] mt-1">
            These cards show the structured format for displaying verified client reviews once completed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviewSlotsData.map((slot) => (
            <div
              key={slot.id}
              className="bg-white rounded-3xl p-7 border-2 border-dashed border-gray-300 space-y-4 relative flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#17136B] uppercase tracking-wider bg-[#FFF8CC] px-2.5 py-1 rounded-full">
                    {slot.projectCategory}
                  </span>
                  <span className="text-[10px] text-amber-700 bg-amber-50 px-2 py-0.5 rounded font-semibold">
                    Placeholder Slot
                  </span>
                </div>

                <h3 className="font-serif-heading text-base font-bold text-[#17136B]">
                  {slot.placeholderNotice}
                </h3>

                <p className="text-xs text-[#66677A] leading-relaxed bg-[#F4F5F8] p-3 rounded-xl border border-gray-100">
                  {slot.submissionInstructions}
                </p>

                <div className="space-y-1.5 text-xs text-[#25254B] pt-2">
                  <p>
                    <strong className="text-[#17136B]">Expected Profile:</strong>{' '}
                    {slot.recommendedFields.clientInitialsOrOrganization}
                  </p>
                  <p>
                    <strong className="text-[#17136B]">Delivered Service:</strong>{' '}
                    {slot.recommendedFields.serviceDelivered}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100 text-[11px] text-[#66677A]">
                To populate, update entry in <code>src/data/reviews.ts</code>.
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Review Submission Notice for Clients */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#17136B] text-white rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h3 className="font-serif-heading text-xl font-bold">
              Are you a past or current client?
            </h3>
            <p className="text-xs text-gray-300">
              Submit your experience directly to Talha Ali at {siteConfig.contactEmail}.
            </p>
          </div>

          <a
            href={`mailto:${siteConfig.contactEmail}?subject=Quillora%20Client%20Feedback`}
            className="px-5 py-3 rounded-xl bg-[#FFD400] text-[#17136B] font-bold text-xs hover:bg-[#e6bf00] transition-colors flex items-center gap-1.5 flex-shrink-0"
          >
            <Mail className="w-4 h-4" />
            <span>Send Client Review</span>
          </a>
        </div>
      </section>
    </div>
  );
};
