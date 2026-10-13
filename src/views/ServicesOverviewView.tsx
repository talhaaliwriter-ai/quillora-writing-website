import React, { useState } from 'react';
import { servicesData } from '../data/services';
import {
  Layers,
  ArrowRight,
  CheckCircle2,
  Search,
  ShieldCheck,
  BookOpen,
  PenTool,
  Clock,
} from 'lucide-react';

interface ServicesOverviewViewProps {
  onNavigate: (route: string) => void;
  onOpenQuote: () => void;
}

export const ServicesOverviewView: React.FC<ServicesOverviewViewProps> = ({
  onNavigate,
  onOpenQuote,
}) => {
  const [filterCategory, setFilterCategory] = useState<'all' | 'content' | 'academic' | 'commercial'>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredServices = servicesData.filter((service) => {
    const matchesSearch =
      service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.shortDescription.toLowerCase().includes(searchTerm.toLowerCase());

    if (!matchesSearch) return false;

    if (filterCategory === 'all') return true;
    if (filterCategory === 'academic') {
      return (
        service.slug === 'academic-editing-proofreading' ||
        service.slug === 'research-citation-assistance' ||
        service.slug === 'web-research'
      );
    }
    if (filterCategory === 'commercial') {
      return (
        service.slug === 'copywriting' ||
        service.slug === 'website-content-writing' ||
        service.slug === 'product-descriptions' ||
        service.slug === 'business-professional-writing'
      );
    }
    if (filterCategory === 'content') {
      return (
        service.slug === 'content-writing' ||
        service.slug === 'seo-content-writing' ||
        service.slug === 'article-writing' ||
        service.slug === 'blog-writing' ||
        service.slug === 'content-optimization'
      );
    }
    return true;
  });

  return (
    <div className="space-y-16 pb-20">
      {/* Header Banner */}
      <section className="bg-[#17136B] text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-white/10">
        <div className="max-w-7xl mx-auto space-y-4">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FFD400] text-[#17136B]">
            Editorial Solutions Directory
          </span>
          <h1 className="font-serif-heading text-3xl sm:text-5xl font-bold text-white">
            Comprehensive Writing & Editorial Services
          </h1>
          <p className="text-gray-300 text-sm sm:text-base max-w-3xl leading-relaxed">
            Explore Quillora&apos;s full catalog of 12 specialized writing, optimization, and research disciplines. Each service provides dedicated research, clear deliverables, human authorship, and a consolidated revision round.
          </p>

          {/* Quick Stats */}
          <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-gray-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#FFD400]" />
              <span>12 Dedicated Disciplines</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#FFD400]" />
              <span>From $20 USD Introductory</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#FFD400]" />
              <span>1 Revision Round Included</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#FFD400]" />
              <span>Ethical Academic Care</span>
            </div>
          </div>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-4 sm:p-6 rounded-3xl border border-gray-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Categories */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {[
              { id: 'all', label: 'All 12 Services' },
              { id: 'content', label: 'Content & Articles' },
              { id: 'commercial', label: 'Copy & Commercial' },
              { id: 'academic', label: 'Academic & Research' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilterCategory(cat.id as any)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  filterCategory === cat.id
                    ? 'bg-[#17136B] text-white shadow-sm'
                    : 'bg-[#F4F5F8] text-[#25254B] hover:bg-gray-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search services..."
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-[#F4F5F8] border border-gray-200 text-xs text-[#25254B] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#17136B]"
            />
          </div>
        </div>
      </section>

      {/* Services Grid (All 12 Services) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.slug}
              className="bg-white rounded-3xl p-7 border border-gray-200 shadow-sm hover:shadow-lg hover:border-[#17136B]/30 transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-2xl bg-[#FFF8CC] text-[#17136B] group-hover:scale-110 transition-transform">
                    <Layers className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                    {service.startingPrice}
                  </span>
                </div>

                <div>
                  <h3 className="font-serif-heading text-xl font-bold text-[#17136B] group-hover:text-blue-900">
                    {service.title}
                  </h3>
                  <p className="text-xs text-[#66677A] font-medium italic mt-1">
                    {service.subtitle}
                  </p>
                  <p className="text-xs text-[#25254B] mt-3 leading-relaxed line-clamp-3">
                    {service.shortDescription}
                  </p>
                </div>

                {/* Deliverables snippet */}
                <div className="pt-3 border-t border-gray-100 space-y-1.5">
                  <span className="text-[10px] uppercase font-bold text-[#66677A] tracking-wider block">
                    Key Deliverables:
                  </span>
                  {service.keyDeliverables.slice(0, 3).map((d, i) => (
                    <div key={i} className="flex items-start gap-1.5 text-xs text-[#25254B]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{d}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-6 mt-6 border-t border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-1 text-[11px] text-[#66677A]">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{service.wordCountEstimate}</span>
                </div>

                <button
                  onClick={() => onNavigate(`/services/${service.slug}`)}
                  className="px-4 py-2 rounded-xl bg-[#17136B] hover:bg-[#0f0b4d] text-white text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Explore Service</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quote Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#17136B] text-white rounded-3xl p-8 sm:p-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="max-w-xl space-y-2">
            <h3 className="font-serif-heading text-2xl font-bold">
              Need a Custom Multi-Service Combination?
            </h3>
            <p className="text-xs sm:text-sm text-gray-300">
              Combine SEO article packages with academic proofreading or custom web research into a unified monthly cadence.
            </p>
          </div>
          <button
            onClick={onOpenQuote}
            className="px-6 py-3.5 rounded-xl bg-[#FFD400] text-[#17136B] font-bold text-xs sm:text-sm hover:bg-[#e6bf00] transition-all flex items-center gap-2 flex-shrink-0"
          >
            <span>Request a Custom Quote</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
