import React from 'react';
import { legalPoliciesData, LegalPolicy } from '../data/legalPolicies';
import { siteConfig } from '../config/siteConfig';
import { ShieldCheck, Mail, ArrowLeft, ChevronRight } from 'lucide-react';

interface LegalPolicyViewProps {
  policyKey: string;
  onNavigate: (route: string) => void;
}

export const LegalPolicyView: React.FC<LegalPolicyViewProps> = ({
  policyKey,
  onNavigate,
}) => {
  const policy: LegalPolicy =
    legalPoliciesData[policyKey] || legalPoliciesData['privacy-policy'];

  const policyLinks = [
    { key: 'privacy-policy', label: 'Privacy Policy', route: '/privacy-policy' },
    { key: 'terms-and-conditions', label: 'Terms & Conditions', route: '/terms-and-conditions' },
    { key: 'refund-cancellation-policy', label: 'Refund / Cancellation', route: '/refund-cancellation-policy' },
    { key: 'disclaimer', label: 'Disclaimer', route: '/disclaimer' },
    { key: 'client-service-agreement', label: 'Client Service Agreement', route: '/client-service-agreement' },
  ];

  return (
    <div className="space-y-16 pb-20">
      {/* Banner */}
      <section className="bg-[#17136B] text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-white/10">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="flex items-center gap-2 text-xs text-gray-300">
            <button
              onClick={() => onNavigate('/')}
              className="hover:text-white transition-colors"
            >
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <span className="text-[#FFD400] font-semibold">{policy.title}</span>
          </div>

          <h1 className="font-serif-heading text-3xl sm:text-4xl font-bold text-white">
            {policy.title}
          </h1>

          <p className="text-gray-300 text-sm max-w-2xl leading-relaxed">
            {policy.summary}
          </p>

          <p className="text-xs text-amber-200">
            Effective Date: {policy.effectiveDate} | Quillora Writing & Content Solutions
          </p>
        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Policy Navigation Sidebar */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-sm space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#66677A] block mb-2">
                Legal & Editorial Policies
              </span>
              {policyLinks.map((link) => (
                <button
                  key={link.key}
                  onClick={() => onNavigate(link.route)}
                  className={`w-full text-left p-3 rounded-xl text-xs font-bold transition-colors ${
                    policyKey === link.key
                      ? 'bg-[#17136B] text-white'
                      : 'bg-[#F4F5F8] text-[#25254B] hover:bg-gray-200'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            <div className="bg-white rounded-3xl p-6 border border-gray-200 text-xs text-[#66677A] space-y-2">
              <span className="font-bold text-[#17136B] block">Legal & Governance Inquiries</span>
              <p>Direct inquiries to founder Talha Ali:</p>
              <a
                href={`mailto:${siteConfig.contactEmail}`}
                className="font-bold text-[#17136B] hover:underline flex items-center gap-1.5"
              >
                <Mail className="w-3.5 h-3.5 text-[#17136B]" />
                <span>{siteConfig.contactEmail}</span>
              </a>
            </div>
          </div>

          {/* Policy Content Body */}
          <div className="lg:col-span-8 bg-white rounded-3xl p-8 sm:p-10 border border-gray-200 shadow-sm space-y-8">
            {policy.sections.map((section, idx) => (
              <div key={idx} className="space-y-3">
                <h2 className="font-serif-heading text-lg sm:text-xl font-bold text-[#17136B] border-b border-gray-100 pb-2">
                  {section.heading}
                </h2>
                <div className="space-y-3 text-xs sm:text-sm text-[#25254B] leading-relaxed">
                  {section.content.map((p, pIdx) => (
                    <p key={pIdx}>{p}</p>
                  ))}
                </div>
              </div>
            ))}

            <div className="pt-6 border-t border-gray-100 flex items-center justify-between text-xs text-[#66677A]">
              <span>Governing Brand: {siteConfig.brandName}</span>
              <button
                onClick={() => onNavigate('/')}
                className="font-bold text-[#17136B] hover:underline flex items-center gap-1"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Return to Home</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
