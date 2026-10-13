import React, { useState } from 'react';
import { X, Download, CheckCircle2, FileArchive, ShieldCheck, ArrowRight, ExternalLink } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

interface ZipDownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ZipDownloadModal: React.FC<ZipDownloadModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [downloadTriggered, setDownloadTriggered] = useState(false);

  if (!isOpen) return null;

  const handleDownload = () => {
    setDownloadTriggered(true);
    // Trigger download of the physical zip archive generated in public/
    const link = document.createElement('a');
    link.href = '/quillora-writing-website.zip';
    link.download = 'quillora-writing-website.zip';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#17136B]/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
        {/* Header */}
        <div className="bg-[#17136B] text-white px-6 py-5 flex items-center justify-between border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-[#FFD400] text-[#17136B]">
              <FileArchive className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#FFD400]">
                Verified Project Archive
              </span>
              <h3 className="font-serif-heading text-lg font-bold text-white">
                Download Website Package (.ZIP)
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-white/70 hover:text-white hover:bg-white/10"
            aria-label="Close download modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-5">
          <div className="flex items-start gap-3 p-4 rounded-2xl bg-[#FFF8CC] border border-[#FFD400]/40 text-[#17136B]">
            <ShieldCheck className="w-5 h-5 flex-shrink-0 mt-0.5 text-[#17136B]" />
            <div className="text-xs space-y-1">
              <strong className="block text-sm font-bold">Archive: quillora-writing-website.zip</strong>
              <p className="text-[#25254B]">
                Contains full complete production code: all 12 services, 6 blog articles, pricing config, SEO files, Netlify settings, and original assets with node_modules cleanly excluded.
              </p>
            </div>
          </div>

          {/* Archive Manifest Checklist */}
          <div className="bg-[#F4F5F8] p-4 rounded-2xl border border-gray-200 text-xs space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#17136B] block mb-1">
              Verified Manifest Inclusions:
            </span>
            <div className="grid grid-cols-2 gap-2 text-[#25254B]">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>12 Detailed Service Pages</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>6 Original Blog Articles</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>$20 - $200 Pricing Config</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Original Logo & SVG Favicon</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>sitemap.xml & robots.txt</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>netlify.toml & _redirects</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>research-sources.md</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>README & Deployment Guide</span>
              </div>
            </div>
          </div>

          {/* Action Button */}
          <div className="pt-2 flex flex-col gap-3">
            <button
              onClick={handleDownload}
              className="w-full py-3.5 rounded-xl bg-[#FFD400] hover:bg-[#e6bf00] active:scale-95 text-[#17136B] font-black text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Download quillora-writing-website.zip Now</span>
            </button>

            {downloadTriggered && (
              <p className="text-emerald-700 text-xs text-center font-semibold animate-fadeIn">
                Download initiated. If your browser blocks popups, check your downloads folder or click the button again.
              </p>
            )}

            <div className="text-center">
              <span className="text-[11px] text-[#66677A]">
                Netlify Ready: Simply drag & drop the extracted folder or connect to Git to deploy to Netlify.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
