
import React from 'react';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import WhatsAppButton from '@/components/Layout/WhatsAppButton';
import CartSidebar from '@/components/Layout/CartSidebar';
import HeroSection from '@/components/Home/HeroSection';
import FeaturedProducts from '@/components/Home/FeaturedProducts';
import BenefitsSection from '@/components/Home/BenefitsSection';
import TestimonialsSection from '@/components/Home/TestimonialsSection';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { CartProvider } from '@/contexts/CartContext';

const Index = () => {
  return (
    <LanguageProvider>
      <CartProvider>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            <HeroSection />
            <FeaturedProducts />
            <BenefitsSection />
            <TestimonialsSection />
          </main>
          <Footer />
          <WhatsAppButton />
          <CartSidebar />
        </div>
      </CartProvider>
    </LanguageProvider>
  );
};

export default Index;
