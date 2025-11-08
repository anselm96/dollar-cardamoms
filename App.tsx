import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import PartnershipPage from './pages/PartnershipPage';
import RecipesBlogPage from './pages/RecipesBlogPage';
import ContactPage from './pages/ContactPage';
import TermsPage from './pages/TermsPage';
import PrivacyPage from './pages/PrivacyPage';
import PageWrapper from './components/PageWrapper';
import ScrollToTop from './components/ui/ScrollToTop';
import WhatsAppFab from "./components/WhatsAppFab";



const App: React.FC = () => {
  return (
    <LanguageProvider>
      <HashRouter>
        <ScrollToTop />
        <PageWrapper>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/partnership" element={<PartnershipPage />} />
            <Route path="/recipes-blog" element={<RecipesBlogPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
          </Routes>
          
          {/* ✅ WhatsApp floating button added */}
          <WhatsAppFab />
        </PageWrapper>
      </HashRouter>
    </LanguageProvider>
  );
};

export default App;
