import React, { useState } from 'react';
import { siteConfig, PricingPackage } from '../config/siteConfig';
import { servicesData } from '../data/services';
import { X, Send, Mail, CheckCircle2, AlertCircle, Info } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedPackage?: PricingPackage | null;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  preselectedPackage,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    serviceSlug: servicesData[0].slug,
    packageId: preselectedPackage?.id || 'seo-blog',
    wordCount: preselectedPackage ? preselectedPackage.wordCountLimit.toString() : '800',
    deadline: 'Flexible (Standard 3-5 days)',
    projectDetails: '',
    sampleOrWebsiteUrl: '',
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const validate = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) errors.name = 'Please provide your name or business name.';
    if (!formData.email.trim() || !formData.email.includes('@')) {
      errors.email = 'Please provide a valid email address so Talha Ali can reply to you.';
    }
    if (!formData.projectDetails.trim() || formData.projectDetails.trim().length < 15) {
      errors.projectDetails = 'Please share a brief description of your project (at least 15 characters).';
    }
    return errors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});
    setIsSubmitted(true);

    // Prepare mailto fallback URL
    const selectedService = servicesData.find((s) => s.slug === formData.serviceSlug)?.title;
    const selectedPkg = siteConfig.pricingPackages.find((p) => p.id === formData.packageId);

    const subject = encodeURIComponent(`Quillora Project Inquiry: ${selectedService} (${formData.name})`);
    const body = encodeURIComponent(
      `Hello Talha,\n\nI would like to request a quote / discuss an editorial project with Quillora.\n\n` +
      `Client Name: ${formData.name}\n` +
      `Client Email: ${formData.email}\n` +
      `Service: ${selectedService}\n` +
      `Package Tier: ${selectedPkg ? selectedPkg.name + ` ($${selectedPkg.priceUSD})` : 'Custom Scope'}\n` +
      `Target Word Count: ${formData.wordCount} words\n` +
      `Timeline / Deadline: ${formData.deadline}\n` +
      `Reference / Site URL: ${formData.sampleOrWebsiteUrl || 'None specified'}\n\n` +
      `Project Brief Details:\n${formData.projectDetails}\n\n` +
      `Sent via Quillora Website Quote Form`
    );

    // Open user's default email client addressed to approved business email
    window.location.href = `mailto:${siteConfig.contactEmail}?subject=${subject}&body=${body}`;
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#17136B]/60 backdrop-blur-sm animate-fadeIn overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden my-8">
        {/* Header */}
        <div className="bg-[#17136B] text-white px-6 py-5 flex items-center justify-between border-b border-white/10">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#FFD400]">
              Direct Editorial Proposal
            </span>
            <h3 className="font-serif-heading text-xl font-bold text-white">
              Request a Project Quote
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-white/70 hover:text-white hover:bg-white/10"
            aria-label="Close quote modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        {isSubmitted ? (
          <div className="p-8 text-center space-y-5">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h4 className="font-serif-heading text-2xl font-bold text-[#17136B]">
              Brief Prepared for Talha Ali
            </h4>

            <p className="text-sm text-[#66677A] max-w-md mx-auto leading-relaxed">
              Your inquiry has been compiled and opened in your email client addressed directly to{' '}
              <strong className="text-[#17136B]">{siteConfig.contactEmail}</strong>.
            </p>

            <div className="bg-[#F4F5F8] p-4 rounded-2xl text-left text-xs space-y-2 border border-gray-200 max-w-md mx-auto">
              <div className="flex items-center justify-between">
                <span className="text-[#66677A]">Target Service:</span>
                <span className="font-semibold text-[#17136B]">
                  {servicesData.find((s) => s.slug === formData.serviceSlug)?.title}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#66677A]">Package Tier:</span>
                <span className="font-semibold text-[#17136B]">
                  {siteConfig.pricingPackages.find((p) => p.id === formData.packageId)?.name || 'Custom'}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#66677A]">Target Word Count:</span>
                <span className="font-semibold text-[#17136B]">{formData.wordCount} words</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#66677A]">Official Contact Email:</span>
                <span className="font-semibold text-[#17136B]">{siteConfig.contactEmail}</span>
              </div>
            </div>

            {/* Netlify Forms note as specified in prompt */}
            <div className="bg-amber-50 border border-amber-200 text-amber-900 rounded-xl p-3 text-xs text-left max-w-md mx-auto flex items-start gap-2">
              <Info className="w-4 h-4 flex-shrink-0 mt-0.5 text-amber-700" />
              <span>
                <strong>Deployment Note:</strong> When deployed to Netlify with static forms, notifications must be configured in your Netlify site dashboard under <em>Forms &gt; Form Notifications</em>. You can also send briefs directly to <a href={`mailto:${siteConfig.contactEmail}`} className="underline font-bold">{siteConfig.contactEmail}</a>.
              </span>
            </div>

            <button
              onClick={handleReset}
              className="px-6 py-2.5 rounded-xl bg-[#17136B] text-white text-xs font-bold hover:bg-[#0f0b4d]"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-4 max-h-[75vh] overflow-y-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Name */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#17136B] mb-1">
                  Your Full Name / Company *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Sarah Jenkins / FinScale Media"
                  className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-[#25254B] bg-white focus:outline-none focus:ring-2 focus:ring-[#17136B] ${
                    formErrors.name ? 'border-red-500 bg-red-50' : 'border-gray-200'
                  }`}
                />
                {formErrors.name && (
                  <p className="text-red-600 text-xs mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {formErrors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#17136B] mb-1">
                  Your Contact Email *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@company.com"
                  className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-[#25254B] bg-white focus:outline-none focus:ring-2 focus:ring-[#17136B] ${
                    formErrors.email ? 'border-red-500 bg-red-50' : 'border-gray-200'
                  }`}
                />
                {formErrors.email && (
                  <p className="text-red-600 text-xs mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {formErrors.email}
                  </p>
                )}
              </div>
            </div>

            {/* Service & Package Selection */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#17136B] mb-1">
                  Select Writing Service *
                </label>
                <select
                  value={formData.serviceSlug}
                  onChange={(e) => setFormData({ ...formData, serviceSlug: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm text-[#25254B] bg-white focus:outline-none focus:ring-2 focus:ring-[#17136B]"
                >
                  {servicesData.map((s) => (
                    <option key={s.slug} value={s.slug}>
                      {s.title}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#17136B] mb-1">
                  Select Introductory Package *
                </label>
                <select
                  value={formData.packageId}
                  onChange={(e) => {
                    const pkg = siteConfig.pricingPackages.find((p) => p.id === e.target.value);
                    setFormData({
                      ...formData,
                      packageId: e.target.value,
                      wordCount: pkg ? pkg.wordCountLimit.toString() : formData.wordCount,
                    });
                  }}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm text-[#25254B] bg-white focus:outline-none focus:ring-2 focus:ring-[#17136B]"
                >
                  {siteConfig.pricingPackages.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.name} — ${p.priceUSD} USD (Up to {p.wordCountLimit}w)
                    </option>
                  ))}
                  <option value="custom">Custom Project Scope (Negotiable)</option>
                </select>
              </div>
            </div>

            {/* Word count & Deadline */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#17136B] mb-1">
                  Approximate Word Count
                </label>
                <input
                  type="number"
                  value={formData.wordCount}
                  onChange={(e) => setFormData({ ...formData, wordCount: e.target.value })}
                  placeholder="e.g. 800"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm text-[#25254B] bg-white focus:outline-none focus:ring-2 focus:ring-[#17136B]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#17136B] mb-1">
                  Target Deadline
                </label>
                <select
                  value={formData.deadline}
                  onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm text-[#25254B] bg-white focus:outline-none focus:ring-2 focus:ring-[#17136B]"
                >
                  <option value="2-3 days (Standard for Starter)">2–3 days (Starter)</option>
                  <option value="3-5 days (Standard for SEO Blog)">3–5 days (SEO Blog)</option>
                  <option value="5-7 days (Growth Package)">5–7 days (Growth Package)</option>
                  <option value="Flexible / Ongoing Monthly">Flexible / Ongoing Monthly</option>
                  <option value="Urgent (Subject to availability)">Urgent (Subject to availability)</option>
                </select>
              </div>
            </div>

            {/* Reference URL */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#17136B] mb-1">
                Website or Sample URL (Optional)
              </label>
              <input
                type="url"
                value={formData.sampleOrWebsiteUrl}
                onChange={(e) => setFormData({ ...formData, sampleOrWebsiteUrl: e.target.value })}
                placeholder="https://yourwebsite.com or article link"
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm text-[#25254B] bg-white focus:outline-none focus:ring-2 focus:ring-[#17136B]"
              />
            </div>

            {/* Project Details */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#17136B] mb-1">
                Project Overview / Topic Notes *
              </label>
              <textarea
                rows={3}
                value={formData.projectDetails}
                onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                placeholder="Briefly describe your topic, tone requirements, target audience, or specific questions you need covered..."
                className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-[#25254B] bg-white focus:outline-none focus:ring-2 focus:ring-[#17136B] ${
                  formErrors.projectDetails ? 'border-red-500 bg-red-50' : 'border-gray-200'
                }`}
              />
              {formErrors.projectDetails && (
                <p className="text-red-600 text-xs mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {formErrors.projectDetails}
                </p>
              )}
            </div>

            {/* Direct Email Notice */}
            <div className="bg-[#FFF8CC] p-3 rounded-xl border border-[#FFD400]/40 flex items-center justify-between text-xs text-[#17136B]">
              <span className="flex items-center gap-1.5 font-medium">
                <Mail className="w-4 h-4 text-[#17136B]" />
                Direct submission to Talha Ali: <strong>{siteConfig.contactEmail}</strong>
              </span>
              <span className="text-[11px] text-[#66677A] hidden sm:inline">1 revision round included</span>
            </div>

            {/* Submit button */}
            <div className="pt-2 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2.5 rounded-xl text-xs font-bold text-[#66677A] hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2.5 rounded-xl bg-[#FFD400] hover:bg-[#e6bf00] active:scale-95 text-[#17136B] font-bold text-xs sm:text-sm shadow-sm flex items-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Submit Project Brief</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
