
import React, { createContext, useContext } from 'react';

interface LanguageContextType {
  language: 'en' | 'ml';
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
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
  heroTitle: 'Premium Homemade Spices',
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
  
  // Checkout
  checkout: 'Checkout',
  billingAddress: 'Billing Address',
  paymentMethod: 'Payment Method',
  placeOrder: 'Place Order',
  orderSummary: 'Order Summary',
  subtotal: 'Subtotal',
  shipping: 'Shipping',
  tax: 'Tax',
  total: 'Total',
  
  // Form fields
  firstName: 'First Name',
  lastName: 'Last Name',
  email: 'Email Address',
  phone: 'Phone Number',
  address: 'Complete Address',
  city: 'City',
  state: 'State',
  pincode: 'PIN Code',
  
  // Payment methods
  creditCard: 'Credit/Debit Card',
  upiPayment: 'UPI Payment',
  cashOnDelivery: 'Cash on Delivery',
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const t = (key: string): string => {
    return translations[key as keyof typeof translations] || key;
  };

  return (
    <LanguageContext.Provider value={{ language: 'en', t }}>
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
