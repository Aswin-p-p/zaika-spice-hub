
import React from 'react';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import WhatsAppButton from '@/components/Layout/WhatsAppButton';
import CartSidebar from '@/components/Layout/CartSidebar';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Leaf, Award, Users } from 'lucide-react';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { CartProvider } from '@/contexts/CartContext';

const AboutContent = () => {
  const values = [
    {
      icon: Heart,
      title: 'Made with Love',
      description: 'Every spice is carefully prepared in our kitchen with love and traditional methods passed down through generations.'
    },
    {
      icon: Leaf,
      title: '100% Organic',
      description: 'We source only the finest organic ingredients, ensuring no harmful chemicals or preservatives in our products.'
    },
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'Our commitment to excellence means you get the purest, most flavorful spices for your culinary adventures.'
    },
    {
      icon: Users,
      title: 'Family Tradition',
      description: 'Rooted in Kerala\'s rich spice heritage, our recipes have been perfected over generations.'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-16 bg-gradient-to-r from-saffron-50 to-turmeric-50">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4 bg-saffron-100 text-saffron-800">Our Story</Badge>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Crafting Authentic Flavors Since Generations
                </h1>
                <p className="text-lg text-gray-600 mb-6">
                  Welcome to Zaika Spices, where tradition meets purity. Born in the heart of Kerala, 
                  we bring you the authentic taste of homemade organic spices, carefully prepared 
                  using time-honored methods that preserve both flavor and nutritional value.
                </p>
                <p className="text-lg text-gray-600">
                  Our journey began in a small kitchen with a passion for preserving the rich 
                  culinary heritage of India. Today, we continue that legacy by delivering 
                  the finest quality spices directly to your doorstep.
                </p>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80"
                  alt="Traditional spice preparation"
                  className="rounded-lg shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                  <p className="text-sm text-gray-600">Established</p>
                  <p className="text-2xl font-bold text-saffron-600">1995</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                What sets us apart is our unwavering commitment to quality, tradition, and authenticity.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="text-center border-none shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-saffron-500 to-chili-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <value.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1583474531547-3794072ff26e?auto=format&fit=crop&w=600&q=80"
                  alt="Spice processing"
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div>
                <Badge className="mb-4 bg-turmeric-100 text-turmeric-800">Our Process</Badge>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  From Farm to Your Kitchen
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-saffron-500 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Sourcing</h3>
                      <p className="text-gray-600">We carefully select organic spices from trusted farmers across Kerala and India.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-saffron-500 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Processing</h3>
                      <p className="text-gray-600">Using traditional methods, we clean, dry, and grind spices to perfection.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-saffron-500 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Quality Check</h3>
                      <p className="text-gray-600">Every batch is tested for purity, flavor, and quality before packaging.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-saffron-500 rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Packaging</h3>
                      <p className="text-gray-600">Sealed in airtight containers to preserve freshness and aroma.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Meet Our Family</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                The passionate people behind Zaika Spices who ensure every product meets our high standards.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: 'Priya Nair',
                  role: 'Founder & Master Spice Blender',
                  image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=300&q=80'
                },
                {
                  name: 'Rajesh Kumar',
                  role: 'Quality Control Manager',
                  image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80'
                },
                {
                  name: 'Lakshmi Menon',
                  role: 'Traditional Recipe Curator',
                  image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&q=80'
                }
              ].map((member, index) => (
                <Card key={index} className="text-center border-none shadow-lg">
                  <CardContent className="p-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                    />
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-saffron-600 font-medium">{member.role}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
      <CartSidebar />
    </div>
  );
};

const About = () => {
  return (
    <LanguageProvider>
      <CartProvider>
        <AboutContent />
      </CartProvider>
    </LanguageProvider>
  );
};

export default About;
