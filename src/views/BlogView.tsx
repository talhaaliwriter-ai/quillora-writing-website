import React, { useState } from 'react';
import { blogArticlesData } from '../data/blogArticles';
import {
  BookOpen,
  ArrowRight,
  Clock,
  Search,
  Tag,
  User,
  Sparkles,
} from 'lucide-react';

interface BlogViewProps {
  onNavigate: (route: string) => void;
}

export const BlogView: React.FC<BlogViewProps> = ({ onNavigate }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', 'Editorial Strategy', 'Academic Standards', 'SEO & Search', 'Content Optimization', 'E-Commerce Copywriting', 'Research & Style Guides'];

  const filteredArticles = blogArticlesData.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.tags.some((t) => t.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesCategory =
      selectedCategory === 'all' || article.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-16 pb-20">
      {/* Banner */}
      <section className="bg-[#17136B] text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-white/10">
        <div className="max-w-7xl mx-auto space-y-4">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FFD400] text-[#17136B]">
            Quillora Editorial Desk
          </span>
          <h1 className="font-serif-heading text-3xl sm:text-5xl font-bold text-white">
            Practical Guides on Writing, SEO & Academic Integrity
          </h1>
          <p className="text-gray-300 text-sm sm:text-base max-w-3xl leading-relaxed">
            In-depth articles crafted by Talha Ali exploring content strategy, citation standards, conversion copywriting, and search intent.
          </p>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-4 sm:p-6 rounded-3xl border border-gray-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#17136B] text-white'
                    : 'bg-[#F4F5F8] text-[#25254B] hover:bg-gray-200'
                }`}
              >
                {cat === 'all' ? 'All 6 Articles' : cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search blog articles..."
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-[#F4F5F8] border border-gray-200 text-xs text-[#25254B] focus:outline-none focus:ring-2 focus:ring-[#17136B]"
            />
          </div>
        </div>
      </section>

      {/* Articles Grid (All 6 Articles) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <article
              key={article.slug}
              onClick={() => onNavigate(`/blog/${article.slug}`)}
              className="bg-white rounded-3xl p-7 border border-gray-200 shadow-sm hover:shadow-lg hover:border-[#17136B]/30 transition-all cursor-pointer flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-[#66677A]">
                  <span className="font-bold text-[#17136B] uppercase tracking-wider bg-[#FFF8CC] px-2.5 py-1 rounded-full">
                    {article.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-gray-400" />
                    {article.readTime}
                  </span>
                </div>

                <h2 className="font-serif-heading text-xl font-bold text-[#17136B] group-hover:text-blue-900 leading-snug">
                  {article.title}
                </h2>

                <p className="text-xs text-[#66677A] leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] bg-[#F4F5F8] text-[#25254B] px-2 py-0.5 rounded font-medium"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-gray-100 flex items-center justify-between text-xs">
                <span className="text-[#66677A] font-medium">By {article.author}</span>
                <span className="font-bold text-[#17136B] group-hover:translate-x-1 transition-transform flex items-center gap-1">
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};
