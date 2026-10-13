import React from 'react';
import { Logo } from './Logo';
import { siteConfig } from '../config/siteConfig';
import { servicesData } from '../data/services';
import {
  Mail,
  Linkedin,
  Twitter,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  Download,
} from 'lucide-react';

interface FooterProps {
  onNavigate: (route: string) => void;
  onOpenQuote: () => void;
  onOpenZipDownload: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenQuote,
  onOpenZipDownload,
}) => {
  return (
    <footer className="bg-[#17136B] text-white pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top CTA Banner in Royal Navy with Yellow Highlight */}
        <div className="bg-[#0f0b4d] rounded-3xl p-8 sm:p-12 mb-16 border border-white/10 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-xl">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FFD400] text-[#17136B] mb-3">
              Introductory Pricing From $20 USD
            </span>
            <h3 className="font-serif-heading text-2xl sm:text-3xl font-bold text-white leading-tight">
              Ready to elevate your articles, blogs, and scholarly manuscripts?
            </h3>
            <p className="text-gray-300 text-sm sm:text-base mt-2">
              Share your project brief for custom guidance, transparent deliverables, and dedicated editorial care.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={onOpenQuote}
              className="px-6 py-3.5 rounded-xl bg-[#FFD400] hover:bg-[#e6bf00] active:scale-95 text-[#17136B] font-bold text-sm transition-all shadow-md flex items-center gap-2 cursor-pointer"
            >
              <span>Request a Project Quote</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <a
              href={`mailto:${siteConfig.contactEmail}?subject=Quillora%20Writing%20Inquiry`}
              className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm transition-all flex items-center gap-2"
            >
              <Mail className="w-4 h-4 text-[#FFD400]" />
              <span>Email Talha Ali</span>
            </a>
          </div>
        </div>

        {/* Structured Multi-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-14 border-b border-white/10">
          {/* Column 1: Brand & Founder Bio */}
          <div className="lg:col-span-2 space-y-4">
            <Logo variant="light" size="lg" />
            <p className="text-gray-300 text-sm leading-relaxed max-w-sm mt-3">
              Quillora provides articulate, research-grounded writing and ethical editorial solutions. Founded and operated by <strong className="text-white">Talha Ali</strong>, delivering meticulous prose for growing brands, publications, and scholars.
            </p>

            {/* Approved Business Email */}
            <div className="pt-2">
              <span className="text-xs uppercase tracking-wider text-gray-400 font-semibold block mb-1">
                Direct Work / Business Email
              </span>
              <a
                href={`mailto:${siteConfig.contactEmail}`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#FFD400] hover:underline"
              >
                <Mail className="w-4 h-4" />
                <span>{siteConfig.contactEmail}</span>
              </a>
              <span className="block text-xs text-gray-400 mt-0.5">
                (Owner-approved official communication channel)
              </span>
            </div>

            {/* Approved Social Links */}
            <div className="pt-3">
              <span className="text-xs uppercase tracking-wider text-gray-400 font-semibold block mb-2">
                Official Verified Profiles
              </span>
              <div className="flex flex-wrap items-center gap-2">
                {/* LinkedIn Personal */}
                <a
                  href="https://www.linkedin.com/in/talha-ali-33418b384/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/10 hover:bg-[#FFD400] hover:text-[#17136B] transition-colors"
                  title="LinkedIn: Talha Ali (Personal)"
                  aria-label="Talha Ali LinkedIn Personal Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>

                {/* LinkedIn Freelancer */}
                <a
                  href="https://www.linkedin.com/in/talha-freelancer-369240396/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/10 hover:bg-[#FFD400] hover:text-[#17136B] transition-colors"
                  title="LinkedIn: Talha Freelancer"
                  aria-label="Talha Freelancer LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>

                {/* Pinterest */}
                <a
                  href="https://uk.pinterest.com/talhafreelancr109/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/10 hover:bg-[#FFD400] hover:text-[#17136B] transition-colors font-bold text-xs flex items-center justify-center w-8 h-8"
                  title="Pinterest: talhafreelancr109"
                  aria-label="Talha Ali Pinterest Profile"
                >
                  P
                </a>

                {/* X / Twitter */}
                <a
                  href="https://x.com/Talha70234"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/10 hover:bg-[#FFD400] hover:text-[#17136B] transition-colors"
                  title="X (Twitter): @Talha70234"
                  aria-label="Talha Ali X Profile"
                >
                  <Twitter className="w-4 h-4" />
                </a>

                {/* Medium */}
                <a
                  href="https://medium.com/@talhafreelancr109"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/10 hover:bg-[#FFD400] hover:text-[#17136B] transition-colors font-serif font-bold text-sm flex items-center justify-center w-8 h-8"
                  title="Medium: @talhafreelancr109"
                  aria-label="Talha Ali Medium Profile"
                >
                  M
                </a>
              </div>
            </div>

            {/* ZIP Download Button */}
            <div className="pt-2">
              <button
                onClick={onOpenZipDownload}
                className="inline-flex items-center gap-1.5 text-xs text-[#FFD400] bg-white/5 hover:bg-white/10 border border-[#FFD400]/30 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Export Website ZIP Archive (.zip)</span>
              </button>
            </div>
          </div>

          {/* Column 2: Core Navigation */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-[#FFD400] mb-4">
              Explore Quillora
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <button
                  onClick={() => onNavigate('/')}
                  className="hover:text-[#FFD400] transition-colors text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/about')}
                  className="hover:text-[#FFD400] transition-colors text-left"
                >
                  About Us & Founder
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/how-it-works')}
                  className="hover:text-[#FFD400] transition-colors text-left"
                >
                  How It Works
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/services')}
                  className="hover:text-[#FFD400] transition-colors text-left"
                >
                  Services Directory
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/pricing')}
                  className="hover:text-[#FFD400] transition-colors text-left"
                >
                  Pricing & Packages
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/portfolio')}
                  className="hover:text-[#FFD400] transition-colors text-left"
                >
                  Demonstration Portfolio
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/reviews')}
                  className="hover:text-[#FFD400] transition-colors text-left"
                >
                  Client Reviews & Feedback
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/blog')}
                  className="hover:text-[#FFD400] transition-colors text-left"
                >
                  Blog & Editorial Insights
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/faqs')}
                  className="hover:text-[#FFD400] transition-colors text-left"
                >
                  Frequently Asked Questions
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/contact')}
                  className="hover:text-[#FFD400] transition-colors text-left"
                >
                  Contact Us
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenQuote}
                  className="hover:text-[#FFD400] transition-colors text-left font-bold text-amber-300"
                >
                  Request a Quote
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Individual Services (Part 1 - General & Digital) */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-[#FFD400] mb-4">
              Writing Services
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
              {servicesData.slice(0, 6).map((service) => (
                <li key={service.slug}>
                  <button
                    onClick={() => onNavigate(`/services/${service.slug}`)}
                    className="hover:text-[#FFD400] transition-colors text-left"
                  >
                    {service.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Individual Services (Part 2 - Editorial & Academic) */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-[#FFD400] mb-4">
              Editorial & Research
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
              {servicesData.slice(6, 12).map((service) => (
                <li key={service.slug}>
                  <button
                    onClick={() => onNavigate(`/services/${service.slug}`)}
                    className="hover:text-[#FFD400] transition-colors text-left"
                  >
                    {service.title}
                  </button>
                </li>
              ))}
            </ul>

            {/* Academic Ethics Badge */}
            <div className="mt-5 p-3 rounded-xl bg-white/5 border border-white/10 text-xs text-gray-300 flex items-start gap-2">
              <ShieldCheck className="w-4 h-4 text-[#FFD400] flex-shrink-0 mt-0.5" />
              <span>Strict adherence to university academic integrity & ethical editing standards.</span>
            </div>
          </div>
        </div>

        {/* Bottom Legal Policies Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-6 gap-y-2">
            <button
              onClick={() => onNavigate('/privacy-policy')}
              className="hover:text-[#FFD400] transition-colors"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => onNavigate('/terms-and-conditions')}
              className="hover:text-[#FFD400] transition-colors"
            >
              Terms & Conditions
            </button>
            <button
              onClick={() => onNavigate('/refund-cancellation-policy')}
              className="hover:text-[#FFD400] transition-colors"
            >
              Refund / Cancellation Policy
            </button>
            <button
              onClick={() => onNavigate('/disclaimer')}
              className="hover:text-[#FFD400] transition-colors"
            >
              Disclaimer
            </button>
            <button
              onClick={() => onNavigate('/client-service-agreement')}
              className="hover:text-[#FFD400] transition-colors"
            >
              Client Service Agreement
            </button>
          </div>

          <div className="text-center md:text-right">
            <p>
              &copy; {new Date().getFullYear()} {siteConfig.brandName}. All rights reserved.
            </p>
            <p className="text-[11px] text-gray-500 mt-0.5">
              Founder: {siteConfig.founderName} | Operating Base URL: {siteConfig.productionBaseUrl}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
