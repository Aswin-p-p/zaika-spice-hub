
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t, language } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-saffron-500 to-chili-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Zaika Spices</h3>
                <p className="text-sm text-gray-400">Authentic • Organic • Homemade</p>
              </div>
            </div>
            <p className={`text-gray-300 text-sm leading-relaxed ${language === 'ml' ? 'malayalam-text' : ''}`}>
              {language === 'en' 
                ? "Experience the pure taste of traditional spices, carefully crafted in our kitchen with love and authenticity."
                : "സ്നേഹത്തോടും ആധികാരികതയോടും കൂടി ഞങ്ങളുടെ അടുക്കളയിൽ ശ്രദ്ധാപൂർവ്വം തയ്യാറാക്കിയ പരമ്പരാഗത മസാലകളുടെ ശുദ്ധമായ രുചി അനുഭവിക്കൂ."}
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-saffron-400">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-saffron-400">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-saffron-400">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className={`text-lg font-semibold text-saffron-400 ${language === 'ml' ? 'malayalam-text' : ''}`}>
              {t('quickLinks')}
            </h4>
            <ul className="space-y-2">
              {['products', 'recipes', 'about', 'blog', 'contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item}`}
                    className={`text-gray-300 hover:text-saffron-400 transition-colors text-sm ${
                      language === 'ml' ? 'malayalam-text' : ''
                    }`}
                  >
                    {t(item)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h4 className={`text-lg font-semibold text-saffron-400 ${language === 'ml' ? 'malayalam-text' : ''}`}>
              {t('customerService')}
            </h4>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-gray-300 text-sm">
                <Phone className="h-4 w-4 text-saffron-400" />
                <span>+91 9876543210</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-300 text-sm">
                <Mail className="h-4 w-4 text-saffron-400" />
                <span>hello@zaikaspices.com</span>
              </li>
              <li className="flex items-start space-x-2 text-gray-300 text-sm">
                <MapPin className="h-4 w-4 text-saffron-400 mt-0.5" />
                <span>123 Spice Street<br />Kochi, Kerala 682001</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className={`text-lg font-semibold text-saffron-400 ${language === 'ml' ? 'malayalam-text' : ''}`}>
              {t('newsletter')}
            </h4>
            <p className={`text-gray-300 text-sm ${language === 'ml' ? 'malayalam-text' : ''}`}>
              {t('subscribeNewsletter')}
            </p>
            <div className="flex space-x-2">
              <Input
                type="email"
                placeholder="your@email.com"
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 flex-1"
              />
              <Button className="bg-saffron-500 hover:bg-saffron-600 text-white">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Zaika Spices. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-400 hover:text-saffron-400 text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-saffron-400 text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
