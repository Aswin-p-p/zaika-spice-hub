
import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'ml';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    home: 'Home',
    products: 'Products',
    about: 'About Us',
    contact: 'Contact',
    blog: 'Blog',
    recipes: 'Recipes',
    cart: 'Cart',
    login: 'Login',
    signup: 'Sign Up',
    
    // Hero Section
    heroTitle: 'Authentic Homemade Spices',
    heroSubtitle: 'From our kitchen to yours - Experience the pure taste of traditional spices',
    shopNow: 'Shop Now',
    learnMore: 'Learn More',
    
    // Common
    addToCart: 'Add to Cart',
    viewDetails: 'View Details',
    readMore: 'Read More',
    search: 'Search...',
    filter: 'Filter',
    sort: 'Sort',
    price: 'Price',
    organic: 'Organic',
    
    // Product Categories
    wholeSpices: 'Whole Spices',
    groundSpices: 'Ground Spices',
    spiceMixes: 'Spice Mixes',
    
    // Footer
    followUs: 'Follow Us',
    quickLinks: 'Quick Links',
    customerService: 'Customer Service',
    newsletter: 'Newsletter',
    subscribeNewsletter: 'Subscribe to our newsletter for recipes and offers',
  },
  ml: {
    // Navigation
    home: 'ഹോം',
    products: 'ഉൽപ്പന്നങ്ങൾ',
    about: 'ഞങ്ങളെ കുറിച്ച്',
    contact: 'ബന്ധപ്പെടുക',
    blog: 'ബ്ലോഗ്',
    recipes: 'പാചകക്കുറിപ്പുകൾ',
    cart: 'കാർട്ട്',
    login: 'ലോഗിൻ',
    signup: 'സൈൻ അപ്പ്',
    
    // Hero Section
    heroTitle: 'ആധികാരിക വീട്ടിൽ നിർമ്മിച്ച മസാലകൾ',
    heroSubtitle: 'ഞങ്ങളുടെ അടുക്കളയിൽ നിന്ന് നിങ്ങളുടെ അടുക്കളയിലേക്ക് - പരമ്പരാഗത മസാലകളുടെ ശുദ്ധമായ രുചി അനുഭവിക്കൂ',
    shopNow: 'ഇപ്പോൾ വാങ്ങുക',
    learnMore: 'കൂടുതൽ അറിയുക',
    
    // Common
    addToCart: 'കാർട്ടിലേക്ക് ചേർക്കുക',
    viewDetails: 'വിശദാംശങ്ങൾ കാണുക',
    readMore: 'കൂടുതൽ വായിക്കുക',
    search: 'തിരയുക...',
    filter: 'ഫിൽട്ടർ',
    sort: 'ക്രമീകരിക്കുക',
    price: 'വില',
    organic: 'ഓർഗാനിക്',
    
    // Product Categories
    wholeSpices: 'മുഴുവൻ മസാലകൾ',
    groundSpices: 'പൊടിച്ച മസാലകൾ',
    spiceMixes: 'മസാല മിശ്രിതങ്ങൾ',
    
    // Footer
    followUs: 'ഞങ്ങളെ പിന്തുടരുക',
    quickLinks: 'ദ്രുത ലിങ്കുകൾ',
    customerService: 'ഉപഭോക്തൃ സേവനം',
    newsletter: 'ന്യൂസ്‌ലെറ്റർ',
    subscribeNewsletter: 'പാചകക്കുറിപ്പുകൾക്കും ഓഫറുകൾക്കുമായി ഞങ്ങളുടെ ന്യൂസ്‌ലെറ്ററിന് സബ്‌സ്‌ക്രൈബ് ചെയ്യുക',
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
