import React, { useState } from 'react';
import { siteConfig } from '../config/siteConfig';
import { servicesData } from '../data/services';
import {
  Mail,
  Send,
  Linkedin,
  Twitter,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Clock,
  HelpCircle,
} from 'lucide-react';

export const ContactView: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    serviceSlug: servicesData[0].slug,
    wordCount: '800',
    deadline: 'Flexible (Standard 3-5 days)',
    message: '',
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) errors.name = 'Please provide your name or business name.';
    if (!formData.email.trim() || !formData.email.includes('@')) {
      errors.email = 'Please provide a valid email address.';
    }
    if (!formData.message.trim() || formData.message.trim().length < 15) {
      errors.message = 'Please provide brief project details (at least 15 characters).';
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

    const selectedService = servicesData.find((s) => s.slug === formData.serviceSlug)?.title;
    const subject = encodeURIComponent(`Quillora Inquiry: ${selectedService} (${formData.name})`);
    const body = encodeURIComponent(
      `Hello Talha,\n\nI would like to inquire about writing services for my project.\n\n` +
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Service: ${selectedService}\n` +
      `Target Word Count: ${formData.wordCount} words\n` +
      `Desired Timeline: ${formData.deadline}\n\n` +
      `Project Brief Details:\n${formData.message}\n\n` +
      `Sent via Quillora Contact Page`
    );

    window.location.href = `mailto:${siteConfig.contactEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="space-y-16 pb-20">
      {/* Banner */}
      <section className="bg-[#17136B] text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-white/10">
        <div className="max-w-7xl mx-auto space-y-4">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FFD400] text-[#17136B]">
            Direct Work Contact
          </span>
          <h1 className="font-serif-heading text-3xl sm:text-5xl font-bold text-white">
            Get in Touch with Talha Ali
          </h1>
          <p className="text-gray-300 text-sm sm:text-base max-w-3xl leading-relaxed">
            Have an article idea, need a quote for an upcoming content batch, or require ethical academic proofreading? Send your project brief directly.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Official Contact & Verified Channels */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#66677A]">
                  Public Business Email
                </span>
                <div className="mt-2 flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-[#FFF8CC] text-[#17136B]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <a
                      href={`mailto:${siteConfig.contactEmail}`}
                      className="font-bold text-sm sm:text-base text-[#17136B] hover:underline"
                    >
                      {siteConfig.contactEmail}
                    </a>
                    <p className="text-xs text-[#66677A] mt-0.5">
                      Direct mailbox for Talha Ali (Founder)
                    </p>
                  </div>
                </div>
              </div>

              {/* Policy note regarding no phone/WhatsApp */}
              <div className="p-4 rounded-2xl bg-[#F4F5F8] border border-gray-200 text-xs text-[#66677A] space-y-1">
                <strong className="text-[#17136B] block">Asynchronous Written Communication:</strong>
                <p>
                  To ensure careful documentation of all project briefs, word counts, and revision notes, Quillora operates exclusively via email. We do not provide phone or WhatsApp support.
                </p>
              </div>

              {/* Turnaround Expectations */}
              <div className="space-y-2 pt-2 border-t border-gray-100 text-xs text-[#25254B]">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#17136B]" />
                  <span>Email replies typically within 12–24 business hours.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>1 Consolidated revision round included in every package.</span>
                </div>
              </div>
            </div>

            {/* Verified Social Channels */}
            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm space-y-4">
              <h3 className="font-serif-heading text-lg font-bold text-[#17136B]">
                Verified Social Profiles
              </h3>
              <p className="text-xs text-[#66677A]">
                Connect with Talha Ali across official verified professional channels:
              </p>

              <div className="space-y-2.5 pt-1">
                {siteConfig.socialLinks.map((social) => (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-[#F4F5F8] hover:bg-[#FFF8CC] text-xs font-semibold text-[#17136B] transition-colors"
                  >
                    <span>{social.platform}</span>
                    <span className="text-[#66677A] text-[11px] font-normal">{social.handle} &rarr;</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Contact & Project Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-200 shadow-sm">
              <div className="border-b border-gray-100 pb-5 mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-[#17136B] bg-[#FFF8CC] px-3 py-1 rounded-full">
                  Send Project Inquiry
                </span>
                <h2 className="font-serif-heading text-2xl font-bold text-[#17136B] mt-2">
                  Tell Us About Your Content Requirements
                </h2>
                <p className="text-xs text-[#66677A] mt-1">
                  Submitting this form prepares a formatted email draft directly to {siteConfig.contactEmail}.
                </p>
              </div>

              {isSubmitted ? (
                <div className="p-8 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif-heading text-xl font-bold text-[#17136B]">
                    Inquiry Opened in Your Email App
                  </h3>
                  <p className="text-xs text-[#66677A] max-w-md mx-auto leading-relaxed">
                    A pre-addressed email draft has been generated for <strong>{siteConfig.contactEmail}</strong>. If your email app did not open automatically, you can write directly to <a href={`mailto:${siteConfig.contactEmail}`} className="text-[#17136B] font-bold underline">{siteConfig.contactEmail}</a>.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4 px-5 py-2.5 rounded-xl bg-[#17136B] text-white text-xs font-bold"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#17136B] mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. David Miller"
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-[#25254B] bg-white focus:outline-none focus:ring-2 focus:ring-[#17136B] ${
                          formErrors.name ? 'border-red-500 bg-red-50' : 'border-gray-200'
                        }`}
                      />
                      {formErrors.name && (
                        <p className="text-red-600 text-xs mt-1">{formErrors.name}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#17136B] mb-1">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="david@example.com"
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-[#25254B] bg-white focus:outline-none focus:ring-2 focus:ring-[#17136B] ${
                          formErrors.email ? 'border-red-500 bg-red-50' : 'border-gray-200'
                        }`}
                      />
                      {formErrors.email && (
                        <p className="text-red-600 text-xs mt-1">{formErrors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#17136B] mb-1">
                        Service of Interest
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
                        Approximate Word Count
                      </label>
                      <input
                        type="number"
                        value={formData.wordCount}
                        onChange={(e) => setFormData({ ...formData, wordCount: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm text-[#25254B] bg-white focus:outline-none focus:ring-2 focus:ring-[#17136B]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#17136B] mb-1">
                      Project Details & Goals *
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Outline your article topic, target audience, preferred tone, or questions..."
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-[#25254B] bg-white focus:outline-none focus:ring-2 focus:ring-[#17136B] ${
                        formErrors.message ? 'border-red-500 bg-red-50' : 'border-gray-200'
                      }`}
                    />
                    {formErrors.message && (
                      <p className="text-red-600 text-xs mt-1">{formErrors.message}</p>
                    )}
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl bg-[#FFD400] hover:bg-[#e6bf00] active:scale-95 text-[#17136B] font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send Message to Talha Ali</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
