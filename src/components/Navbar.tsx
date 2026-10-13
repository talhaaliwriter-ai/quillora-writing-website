import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { servicesData } from '../data/services';
import {
  Search,
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Download,
  Mail,
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

interface NavbarProps {
  currentRoute: string;
  onNavigate: (route: string) => void;
  onOpenSearch: () => void;
  onOpenQuote: () => void;
  onOpenZipDownload: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentRoute,
  onNavigate,
  onOpenSearch,
  onOpenQuote,
  onOpenZipDownload,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', route: '/' },
    { name: 'Services', route: '/services', hasDropdown: true },
    { name: 'How It Works', route: '/how-it-works' },
    { name: 'Pricing', route: '/pricing' },
    { name: 'Portfolio', route: '/portfolio' },
    { name: 'Reviews', route: '/reviews' },
    { name: 'Blog', route: '/blog' },
    { name: 'About', route: '/about' },
    { name: 'Contact', route: '/contact' },
  ];

  const handleLinkClick = (route: string) => {
    onNavigate(route);
    setIsMobileMenuOpen(false);
    setIsServicesDropdownOpen(false);
  };

  return (
    <>
      {/* Top Utility Announcement Bar */}
      <div className="bg-[#17136B] text-white text-xs py-2 px-4 border-b border-white/10 hidden sm:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5 font-medium text-amber-300">
              <span className="w-2 h-2 rounded-full bg-[#FFD400] animate-pulse"></span>
              Human-crafted writing & ethical editorial solutions
            </span>
            <span className="text-white/40">|</span>
            <span className="text-white/80">Introductory rates starting from $20 USD</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="inline-flex items-center gap-1.5 text-white/90 hover:text-[#FFD400] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#FFD400]" />
              <span>{siteConfig.contactEmail}</span>
            </a>
            <span className="text-white/40">|</span>
            <button
              onClick={onOpenZipDownload}
              className="inline-flex items-center gap-1 font-semibold text-[#FFD400] hover:underline cursor-pointer"
              title="Download project package ZIP"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Website (.ZIP)</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3'
            : 'bg-white py-4 border-b border-gray-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Logo */}
          <button
            onClick={() => handleLinkClick('/')}
            className="text-left focus:outline-none"
            aria-label="Quillora Home"
          >
            <Logo size="md" />
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              if (link.hasDropdown) {
                return (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => setIsServicesDropdownOpen(true)}
                    onMouseLeave={() => setIsServicesDropdownOpen(false)}
                  >
                    <button
                      onClick={() => handleLinkClick('/services')}
                      className={`px-3 py-2 text-sm font-semibold rounded-lg flex items-center gap-1 transition-colors ${
                        currentRoute.startsWith('/services')
                          ? 'text-[#17136B] bg-[#FFF8CC]'
                          : 'text-[#25254B] hover:text-[#17136B] hover:bg-gray-50'
                      }`}
                    >
                      {link.name}
                      <ChevronDown className="w-4 h-4 text-[#66677A]" />
                    </button>

                    {/* Mega Dropdown for 12 Services */}
                    {isServicesDropdownOpen && (
                      <div className="absolute top-full left-0 w-[540px] bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 grid grid-cols-2 gap-2 animate-fadeIn z-50">
                        <div className="col-span-2 pb-2 mb-1 border-b border-gray-100 flex items-center justify-between">
                          <span className="text-xs uppercase font-bold tracking-wider text-[#17136B]">
                            All 12 Writing & Editorial Services
                          </span>
                          <button
                            onClick={() => handleLinkClick('/services')}
                            className="text-xs font-semibold text-[#17136B] hover:underline flex items-center gap-1"
                          >
                            Browse Directory <ArrowRight className="w-3 h-3" />
                          </button>
                        </div>
                        {servicesData.map((service) => (
                          <button
                            key={service.slug}
                            onClick={() => handleLinkClick(`/services/${service.slug}`)}
                            className={`p-2.5 rounded-lg text-left transition-colors flex flex-col ${
                              currentRoute === `/services/${service.slug}`
                                ? 'bg-[#FFF8CC]'
                                : 'hover:bg-[#F4F5F8]'
                            }`}
                          >
                            <span className="text-xs font-bold text-[#17136B]">
                              {service.title}
                            </span>
                            <span className="text-[11px] text-[#66677A] line-clamp-1 mt-0.5">
                              {service.shortDescription}
                            </span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              const isActive = currentRoute === link.route;
              return (
                <button
                  key={link.name}
                  onClick={() => handleLinkClick(link.route)}
                  className={`px-3 py-2 text-sm font-semibold rounded-lg transition-colors ${
                    isActive
                      ? 'text-[#17136B] bg-[#FFF8CC]'
                      : 'text-[#25254B] hover:text-[#17136B] hover:bg-gray-50'
                  }`}
                >
                  {link.name}
                </button>
              );
            })}
          </nav>

          {/* Search Bar + Quote Button */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Functional Search Bar Trigger */}
            <button
              onClick={onOpenSearch}
              className="flex items-center gap-2 bg-[#F4F5F8] hover:bg-gray-200 text-[#66677A] hover:text-[#25254B] px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-medium border border-gray-200 transition-colors"
              title="Search services, blog posts, or pricing"
              aria-label="Search"
            >
              <Search className="w-4 h-4 text-[#17136B]" />
              <span className="hidden sm:inline">Search...</span>
              <kbd className="hidden md:inline-block px-1.5 py-0.5 text-[10px] bg-white border border-gray-300 rounded text-gray-500 font-mono">
                /
              </kbd>
            </button>

            {/* Request a Quote CTA Button (Yellow with Navy text) */}
            <button
              onClick={onOpenQuote}
              className="bg-[#FFD400] hover:bg-[#e6bf00] active:scale-95 text-[#17136B] px-4 sm:px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm shadow-sm transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4 hidden sm:inline" />
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-[#25254B] hover:bg-gray-100 lg:hidden"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-100 bg-white px-4 pt-3 pb-6 space-y-2 animate-fadeIn max-h-[80vh] overflow-y-auto">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleLinkClick(link.route)}
                className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-bold flex items-center justify-between ${
                  currentRoute === link.route
                    ? 'bg-[#FFF8CC] text-[#17136B]'
                    : 'text-[#25254B] hover:bg-gray-50'
                }`}
              >
                <span>{link.name}</span>
                <ArrowRight className="w-4 h-4 text-gray-400" />
              </button>
            ))}

            {/* Quick Services list on mobile */}
            <div className="pt-2 border-t border-gray-100">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#66677A] px-2 block mb-2">
                Popular Services
              </span>
              <div className="grid grid-cols-2 gap-1.5">
                {servicesData.slice(0, 6).map((service) => (
                  <button
                    key={service.slug}
                    onClick={() => handleLinkClick(`/services/${service.slug}`)}
                    className="p-2 text-left rounded-lg text-xs font-semibold text-[#17136B] bg-[#F4F5F8] hover:bg-[#FFF8CC]"
                  >
                    {service.title}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-4 flex flex-col gap-2">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenZipDownload();
                }}
                className="w-full py-2.5 px-4 rounded-xl border border-[#17136B] text-[#17136B] text-xs font-bold flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>Download Website ZIP (.zip)</span>
              </button>

              <a
                href={`mailto:${siteConfig.contactEmail}`}
                className="w-full py-2.5 px-4 rounded-xl bg-gray-100 text-[#25254B] text-xs font-bold flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4 text-[#17136B]" />
                <span>{siteConfig.contactEmail}</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
