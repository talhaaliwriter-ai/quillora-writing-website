import React from 'react';
import { blogArticlesData, BlogArticle } from '../data/blogArticles';
import { siteConfig } from '../config/siteConfig';
import {
  ArrowLeft,
  Clock,
  Calendar,
  User,
  CheckCircle2,
  Share2,
  ChevronRight,
  ArrowRight,
  Mail,
  Linkedin,
} from 'lucide-react';

interface BlogDetailViewProps {
  slug: string;
  onNavigate: (route: string) => void;
  onOpenQuote: () => void;
}

export const BlogDetailView: React.FC<BlogDetailViewProps> = ({
  slug,
  onNavigate,
  onOpenQuote,
}) => {
  const article =
    blogArticlesData.find((a) => a.slug === slug) || blogArticlesData[0];

  const relatedArticles = blogArticlesData.filter((a) => a.slug !== article.slug).slice(0, 2);

  return (
    <div className="space-y-16 pb-20">
      {/* Article Header */}
      <div className="bg-[#17136B] text-white pt-10 pb-16 border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex items-center gap-2 text-xs text-gray-300">
            <button
              onClick={() => onNavigate('/')}
              className="hover:text-white transition-colors"
            >
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <button
              onClick={() => onNavigate('/blog')}
              className="hover:text-white transition-colors"
            >
              Blog
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <span className="text-[#FFD400] font-semibold truncate max-w-xs">
              {article.title}
            </span>
          </div>

          <div className="space-y-4">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FFD400] text-[#17136B]">
              {article.category}
            </span>

            <h1 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              {article.title}
            </h1>

            <p className="text-gray-200 text-base sm:text-lg leading-relaxed italic">
              {article.excerpt}
            </p>

            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-6 text-xs text-gray-300">
              <span className="flex items-center gap-1.5 font-medium text-white">
                <User className="w-4 h-4 text-[#FFD400]" />
                {article.author}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-[#FFD400]" />
                {article.publishDate}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#FFD400]" />
                {article.readTime}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Reading Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Key Takeaways Box */}
        <div className="bg-[#FFF8CC] p-6 sm:p-8 rounded-3xl border border-[#FFD400]/50 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-[#17136B] block">
            Executive Summary / Key Takeaways:
          </span>
          <div className="space-y-2">
            {article.keyTakeaways.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#17136B]">
                <CheckCircle2 className="w-4 h-4 text-[#17136B] flex-shrink-0 mt-0.5" />
                <span className="leading-snug">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Full Article Content */}
        <article className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200 shadow-sm space-y-10">
          {article.sections.map((section, idx) => (
            <div key={idx} className="space-y-4">
              <h2 className="font-serif-heading text-2xl font-bold text-[#17136B] border-b border-gray-100 pb-3">
                {section.subheading}
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-[#25254B] leading-relaxed">
                {section.paragraphs.map((p, pIdx) => (
                  <p
                    key={pIdx}
                    className={idx === 0 && pIdx === 0 ? 'drop-cap' : ''}
                  >
                    {p}
                  </p>
                ))}
              </div>
            </div>
          ))}

          {/* Tags */}
          <div className="pt-6 border-t border-gray-100 flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-[#66677A] mr-2">Tags:</span>
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs bg-[#F4F5F8] text-[#17136B] font-semibold px-3 py-1 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
        </article>

        {/* Author Bio Card (Talha Ali - Text led, TA monogram) */}
        <div className="bg-[#17136B] text-white p-8 rounded-3xl border border-white/10 flex flex-col sm:flex-row items-center sm:items-start gap-6">
          <div className="w-16 h-16 rounded-2xl bg-[#FFD400] text-[#17136B] font-serif font-black text-2xl flex items-center justify-center flex-shrink-0 shadow-md">
            TA
          </div>
          <div className="space-y-2 text-center sm:text-left flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h3 className="font-serif-heading text-lg font-bold text-white">
                  About {siteConfig.founderName}
                </h3>
                <p className="text-xs text-amber-200">
                  {siteConfig.founderTitle}, Quillora
                </p>
              </div>
              <a
                href={`mailto:${siteConfig.contactEmail}`}
                className="text-xs font-semibold text-[#FFD400] hover:underline flex items-center justify-center sm:justify-start gap-1"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{siteConfig.contactEmail}</span>
              </a>
            </div>
            <p className="text-xs text-gray-300 leading-relaxed">
              Talha Ali leads editorial strategy and content execution at Quillora. Dedicated to human-crafted writing, rigorous factual grounding, and ethical academic proofreading.
            </p>
          </div>
        </div>

        {/* Related Articles */}
        <div className="space-y-4 pt-4">
          <div className="flex items-center justify-between">
            <h3 className="font-serif-heading text-xl font-bold text-[#17136B]">
              Continue Reading
            </h3>
            <button
              onClick={() => onNavigate('/blog')}
              className="text-xs font-bold text-[#17136B] hover:underline"
            >
              All Articles &rarr;
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {relatedArticles.map((rel) => (
              <div
                key={rel.slug}
                onClick={() => onNavigate(`/blog/${rel.slug}`)}
                className="bg-white p-5 rounded-2xl border border-gray-200 hover:border-[#17136B] transition-colors cursor-pointer space-y-2"
              >
                <span className="text-[10px] font-bold uppercase text-[#17136B] bg-[#FFF8CC] px-2 py-0.5 rounded">
                  {rel.category}
                </span>
                <h4 className="font-serif-heading text-sm font-bold text-[#17136B] line-clamp-2">
                  {rel.title}
                </h4>
                <p className="text-xs text-[#66677A] line-clamp-2">
                  {rel.excerpt}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Back and CTA */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={() => onNavigate('/blog')}
            className="text-xs font-bold text-[#17136B] hover:underline flex items-center gap-1.5"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Articles</span>
          </button>

          <button
            onClick={onOpenQuote}
            className="px-6 py-3 rounded-xl bg-[#FFD400] text-[#17136B] font-bold text-xs hover:bg-[#e6bf00] transition-colors flex items-center gap-2"
          >
            <span>Discuss a Project Brief</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
