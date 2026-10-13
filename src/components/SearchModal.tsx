import React, { useState, useMemo } from 'react';
import { Search, X, ArrowRight, FileText, BookOpen, Layers } from 'lucide-react';
import { servicesData } from '../data/services';
import { blogArticlesData } from '../data/blogArticles';
import { portfolioSamplesData } from '../data/portfolioSamples';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (route: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onNavigate,
}) => {
  const [query, setQuery] = useState('');

  const searchResults = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];

    const results: {
      type: 'service' | 'blog' | 'portfolio' | 'page';
      title: string;
      snippet: string;
      route: string;
    }[] = [];

    // Search Services
    servicesData.forEach((s) => {
      if (
        s.title.toLowerCase().includes(q) ||
        s.shortDescription.toLowerCase().includes(q) ||
        s.keyDeliverables.some((d) => d.toLowerCase().includes(q))
      ) {
        results.push({
          type: 'service',
          title: s.title,
          snippet: s.shortDescription,
          route: `/services/${s.slug}`,
        });
      }
    });

    // Search Blogs
    blogArticlesData.forEach((b) => {
      if (
        b.title.toLowerCase().includes(q) ||
        b.excerpt.toLowerCase().includes(q) ||
        b.tags.some((t) => t.toLowerCase().includes(q))
      ) {
        results.push({
          type: 'blog',
          title: b.title,
          snippet: b.excerpt,
          route: `/blog/${b.slug}`,
        });
      }
    });

    // Search Portfolio Samples
    portfolioSamplesData.forEach((p) => {
      if (
        p.title.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.objective.toLowerCase().includes(q)
      ) {
        results.push({
          type: 'portfolio',
          title: p.title,
          snippet: p.objective,
          route: `/portfolio#${p.id}`,
        });
      }
    });

    // Standard static pages
    const staticPages = [
      { name: 'Pricing & Packages', snippet: 'Introductory pricing from $20 for articles to $200 premium suites', route: '/pricing' },
      { name: 'How It Works', snippet: 'Briefing, drafting, revision rounds, and transparent editorial delivery', route: '/how-it-works' },
      { name: 'About Quillora & Talha Ali', snippet: 'Editorial philosophy and writing standards by founder Talha Ali', route: '/about' },
      { name: 'Request a Quote', snippet: 'Submit your project brief and receive an exact scope proposal', route: '/quote' },
      { name: 'Frequently Asked Questions (FAQs)', snippet: 'Turnaround times, revision policies, format compatibility', route: '/faqs' },
      { name: 'Client Reviews & Feedback', snippet: 'Client feedback slots and transparent editorial standards', route: '/reviews' },
    ];

    staticPages.forEach((page) => {
      if (page.name.toLowerCase().includes(q) || page.snippet.toLowerCase().includes(q)) {
        results.push({
          type: 'page',
          title: page.name,
          snippet: page.snippet,
          route: page.route,
        });
      }
    });

    return results;
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-[#17136B]/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden transform transition-all">
        {/* Input Header */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-gray-100 bg-[#F4F5F8]">
          <Search className="w-5 h-5 text-[#17136B] flex-shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search services, blog topics, pricing, or guides..."
            className="w-full bg-transparent text-[#25254B] placeholder:text-[#66677A] text-base focus:outline-none"
            autoFocus
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-gray-400 hover:text-gray-600 text-sm font-medium"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-[#66677A] hover:bg-gray-200 hover:text-[#25254B]"
            aria-label="Close search"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results Area */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-2">
          {!query.trim() ? (
            <div className="p-6 text-center text-[#66677A]">
              <p className="text-sm font-medium">Quick suggestions:</p>
              <div className="flex flex-wrap justify-center gap-2 mt-3">
                {['SEO Content Writing', 'Academic Proofreading', 'Starter Article ($20)', 'Blog Writing', 'Citation Mastery', 'Pricing'].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setQuery(tag)}
                    className="px-3 py-1.5 rounded-full text-xs font-semibold bg-white border border-gray-200 text-[#17136B] hover:bg-[#FFF8CC] transition-colors"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          ) : searchResults.length === 0 ? (
            <div className="p-8 text-center text-[#66677A]">
              <p className="text-base font-semibold text-[#25254B]">No direct results found for &ldquo;{query}&rdquo;</p>
              <p className="text-sm mt-1">Try searching for keywords like &ldquo;article&rdquo;, &ldquo;pricing&rdquo;, &ldquo;editing&rdquo;, or &ldquo;research&rdquo;.</p>
            </div>
          ) : (
            searchResults.map((item, index) => (
              <button
                key={index}
                onClick={() => {
                  onNavigate(item.route);
                  onClose();
                }}
                className="w-full text-left p-3.5 rounded-xl hover:bg-[#F4F5F8] border border-transparent hover:border-gray-200 transition-all flex items-start gap-3 group"
              >
                <div className="mt-0.5 p-2 rounded-lg bg-[#FFF8CC] text-[#17136B] flex-shrink-0">
                  {item.type === 'service' && <Layers className="w-4 h-4" />}
                  {item.type === 'blog' && <BookOpen className="w-4 h-4" />}
                  {item.type === 'portfolio' && <FileText className="w-4 h-4" />}
                  {item.type === 'page' && <Search className="w-4 h-4" />}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-xs uppercase tracking-wider font-bold text-[#17136B]">
                      {item.type}
                    </span>
                    <h4 className="font-semibold text-sm text-[#25254B] group-hover:text-[#17136B] truncate">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-xs text-[#66677A] mt-1 line-clamp-2">
                    {item.snippet}
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-[#66677A] group-hover:text-[#17136B] group-hover:translate-x-1 transition-all flex-shrink-0 mt-2" />
              </button>
            ))
          )}
        </div>

        {/* Footer info */}
        <div className="px-5 py-2.5 bg-gray-50 border-t border-gray-100 flex items-center justify-between text-[11px] text-[#66677A]">
          <span>Tip: Press ESC or click outside to dismiss</span>
          <span>Index covers all 12 services & 6 blog articles</span>
        </div>
      </div>
    </div>
  );
};
