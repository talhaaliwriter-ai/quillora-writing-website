import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { SearchModal } from './components/SearchModal';
import { QuoteModal } from './components/QuoteModal';
import { ZipDownloadModal } from './components/ZipDownloadModal';
import { PricingPackage, siteConfig } from './config/siteConfig';

// Views
import { HomeView } from './views/HomeView';
import { ServicesOverviewView } from './views/ServicesOverviewView';
import { ServiceDetailView } from './views/ServiceDetailView';
import { PricingView } from './views/PricingView';
import { PortfolioView } from './views/PortfolioView';
import { ReviewsView } from './views/ReviewsView';
import { HowItWorksView } from './views/HowItWorksView';
import { BlogView } from './views/BlogView';
import { BlogDetailView } from './views/BlogDetailView';
import { AboutView } from './views/AboutView';
import { ContactView } from './views/ContactView';
import { FaqView } from './views/FaqView';
import { LegalPolicyView } from './views/LegalPolicyView';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<string>(() => {
    return window.location.pathname || '/';
  });
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [isZipDownloadOpen, setIsZipDownloadOpen] = useState(false);
  const [preselectedPackage, setPreselectedPackage] = useState<PricingPackage | null>(null);

  // Sync with browser history
  useEffect(() => {
    const handlePopState = () => {
      setCurrentRoute(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Keyboard shortcut '/' to trigger search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '/' && !['INPUT', 'TEXTAREA', 'SELECT'].includes((e.target as HTMLElement).tagName)) {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navigate = (route: string) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (route === '/quote') {
      setIsQuoteOpen(true);
      return;
    }
    if (window.location.pathname !== route) {
      window.history.pushState({}, '', route);
    }
    setCurrentRoute(route);
  };

  const handleOpenQuoteWithPackage = (pkg: PricingPackage) => {
    setPreselectedPackage(pkg);
    setIsQuoteOpen(true);
  };

  // Determine which view to render
  const renderCurrentView = () => {
    // 1. Home
    if (currentRoute === '/' || currentRoute === '') {
      return (
        <HomeView
          onNavigate={navigate}
          onOpenQuote={() => {
            setPreselectedPackage(null);
            setIsQuoteOpen(true);
          }}
          onOpenZipDownload={() => setIsZipDownloadOpen(true)}
        />
      );
    }

    // 2. Services Overview
    if (currentRoute === '/services') {
      return (
        <ServicesOverviewView
          onNavigate={navigate}
          onOpenQuote={() => {
            setPreselectedPackage(null);
            setIsQuoteOpen(true);
          }}
        />
      );
    }

    // 3. Service Detail
    if (currentRoute.startsWith('/services/')) {
      const slug = currentRoute.replace('/services/', '');
      return (
        <ServiceDetailView
          slug={slug}
          onNavigate={navigate}
          onOpenQuote={() => {
            setPreselectedPackage(null);
            setIsQuoteOpen(true);
          }}
        />
      );
    }

    // 4. Pricing
    if (currentRoute === '/pricing') {
      return (
        <PricingView
          onOpenQuote={() => {
            setPreselectedPackage(null);
            setIsQuoteOpen(true);
          }}
        />
      );
    }

    // 5. Portfolio
    if (currentRoute === '/portfolio' || currentRoute.startsWith('/portfolio')) {
      return (
        <PortfolioView
          onOpenQuote={() => {
            setPreselectedPackage(null);
            setIsQuoteOpen(true);
          }}
        />
      );
    }

    // 6. Reviews
    if (currentRoute === '/reviews') {
      return (
        <ReviewsView
          onOpenQuote={() => {
            setPreselectedPackage(null);
            setIsQuoteOpen(true);
          }}
        />
      );
    }

    // 7. How It Works
    if (currentRoute === '/how-it-works') {
      return (
        <HowItWorksView
          onOpenQuote={() => {
            setPreselectedPackage(null);
            setIsQuoteOpen(true);
          }}
        />
      );
    }

    // 8. Blog Overview
    if (currentRoute === '/blog') {
      return <BlogView onNavigate={navigate} />;
    }

    // 9. Blog Detail
    if (currentRoute.startsWith('/blog/')) {
      const slug = currentRoute.replace('/blog/', '');
      return (
        <BlogDetailView
          slug={slug}
          onNavigate={navigate}
          onOpenQuote={() => {
            setPreselectedPackage(null);
            setIsQuoteOpen(true);
          }}
        />
      );
    }

    // 10. About
    if (currentRoute === '/about') {
      return (
        <AboutView
          onOpenQuote={() => {
            setPreselectedPackage(null);
            setIsQuoteOpen(true);
          }}
        />
      );
    }

    // 11. Contact
    if (currentRoute === '/contact') {
      return <ContactView />;
    }

    // 12. FAQs
    if (currentRoute === '/faqs') {
      return (
        <FaqView
          onOpenQuote={() => {
            setPreselectedPackage(null);
            setIsQuoteOpen(true);
          }}
        />
      );
    }

    // 13. Legal policies
    if (
      currentRoute === '/privacy-policy' ||
      currentRoute === '/terms-and-conditions' ||
      currentRoute === '/refund-cancellation-policy' ||
      currentRoute === '/disclaimer' ||
      currentRoute === '/client-service-agreement'
    ) {
      const policyKey = currentRoute.replace('/', '');
      return <LegalPolicyView policyKey={policyKey} onNavigate={navigate} />;
    }

    // Fallback: render Home
    return (
      <HomeView
        onNavigate={navigate}
        onOpenQuote={() => {
          setPreselectedPackage(null);
          setIsQuoteOpen(true);
        }}
        onOpenZipDownload={() => setIsZipDownloadOpen(true)}
      />
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F5F8] text-[#25254B]">
      {/* Top Navigation */}
      <Navbar
        currentRoute={currentRoute}
        onNavigate={navigate}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenQuote={() => {
          setPreselectedPackage(null);
          setIsQuoteOpen(true);
        }}
        onOpenZipDownload={() => setIsZipDownloadOpen(true)}
      />

      {/* Main Page Content */}
      <main className="flex-1">
        {renderCurrentView()}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={navigate}
        onOpenQuote={() => {
          setPreselectedPackage(null);
          setIsQuoteOpen(true);
        }}
        onOpenZipDownload={() => setIsZipDownloadOpen(true)}
      />

      {/* Interactive Global Modals */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onNavigate={navigate}
      />

      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        preselectedPackage={preselectedPackage}
      />

      <ZipDownloadModal
        isOpen={isZipDownloadOpen}
        onClose={() => setIsZipDownloadOpen(false)}
      />
    </div>
  );
}
