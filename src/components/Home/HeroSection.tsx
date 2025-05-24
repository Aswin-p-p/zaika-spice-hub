
import React from 'react';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const HeroSection = () => {
  const { t, language } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with spice pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-saffron-50 via-turmeric-50 to-curry-50 spice-pattern"></div>
      
      {/* Floating spice elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-4 h-4 bg-saffron-400 rounded-full animate-float opacity-60"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-chili-400 rounded-full animate-float opacity-40" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-20 w-5 h-5 bg-curry-400 rounded-full animate-float opacity-50" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-40 w-3 h-3 bg-turmeric-400 rounded-full animate-float opacity-70" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main heading */}
          <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 ${
            language === 'ml' ? 'malayalam-text' : ''
          }`}>
            <span className="bg-gradient-to-r from-saffron-600 via-chili-600 to-curry-600 bg-clip-text text-transparent">
              {t('heroTitle')}
            </span>
          </h1>

          {/* Subtitle */}
          <p className={`text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed max-w-3xl mx-auto ${
            language === 'ml' ? 'malayalam-text' : ''
          }`}>
            {t('heroSubtitle')}
          </p>

          {/* Call to action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className={`bg-saffron-500 hover:bg-saffron-600 text-white px-8 py-4 text-lg rounded-full shadow-lg transform hover:scale-105 transition-all ${
                language === 'ml' ? 'malayalam-text' : ''
              }`}
            >
              {t('shopNow')}
            </Button>
            <Button
              variant="outline"
              size="lg"
              className={`border-2 border-saffron-500 text-saffron-600 hover:bg-saffron-50 px-8 py-4 text-lg rounded-full shadow-lg transform hover:scale-105 transition-all ${
                language === 'ml' ? 'malayalam-text' : ''
              }`}
            >
              {t('learnMore')}
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-gray-600 mb-8">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className={`text-sm font-medium ${language === 'ml' ? 'malayalam-text' : ''}`}>
                100% {t('organic')}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-saffron-500 rounded-full"></div>
              <span className={`text-sm font-medium ${language === 'ml' ? 'malayalam-text' : ''}`}>
                {language === 'en' ? 'Homemade Quality' : 'വീട്ടിൽ നിർമ്മിച്ചത്'}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-chili-500 rounded-full"></div>
              <span className={`text-sm font-medium ${language === 'ml' ? 'malayalam-text' : ''}`}>
                {language === 'en' ? 'Traditional Recipe' : 'പരമ്പരാഗത പാചകക്കുറിപ്പ്'}
              </span>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="animate-bounce">
            <ArrowDown className="h-6 w-6 text-saffron-500 mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
