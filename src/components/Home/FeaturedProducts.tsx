
import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCart } from '@/contexts/CartContext';

const FeaturedProducts = () => {
  const { t, language } = useLanguage();
  const { addToCart } = useCart();

  const featuredProducts = [
    {
      id: '1',
      name: language === 'en' ? 'Premium Turmeric Powder' : 'പ്രീമിയം മഞ്ഞൾ പൊടി',
      price: 299,
      originalPrice: 399,
      image: 'https://images.unsplash.com/photo-1615485020998-e5c03c4d63b5?auto=format&fit=crop&w=500&q=80',
      rating: 4.8,
      reviews: 124,
      badge: language === 'en' ? 'Bestseller' : 'ബെസ്റ്റ് സെല്ലർ',
      organic: true
    },
    {
      id: '2',
      name: language === 'en' ? 'Garam Masala Mix' : 'ഗരം മസാല മിശ്രിതം',
      price: 249,
      originalPrice: 329,
      image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=500&q=80',
      rating: 4.9,
      reviews: 89,
      badge: language === 'en' ? 'Most Popular' : 'ഏറ്റവും പ്രശസ്തം',
      organic: true
    },
    {
      id: '3',
      name: language === 'en' ? 'Red Chili Powder' : 'ചുവന്ന മുളക് പൊടി',
      price: 199,
      originalPrice: 249,
      image: 'https://images.unsplash.com/photo-1505253304499-671c55fb57fe?auto=format&fit=crop&w=500&q=80',
      rating: 4.7,
      reviews: 156,
      badge: language === 'en' ? 'Spicy Hot' : 'കാരമുള്ളത്',
      organic: true
    },
    {
      id: '4',
      name: language === 'en' ? 'Whole Cardamom' : 'മുഴുവൻ ഏലയ്ക്ക',
      price: 899,
      originalPrice: 1199,
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=500&q=80',
      rating: 4.9,
      reviews: 67,
      badge: language === 'en' ? 'Premium' : 'പ്രീമിയം',
      organic: true
    }
  ];

  const handleAddToCart = (product: typeof featuredProducts[0]) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image
    });
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 ${
            language === 'ml' ? 'malayalam-text' : ''
          }`}>
            {language === 'en' ? 'Featured Spices' : 'പ്രത്യേക മസാലകൾ'}
          </h2>
          <p className={`text-xl text-gray-600 max-w-2xl mx-auto ${
            language === 'ml' ? 'malayalam-text' : ''
          }`}>
            {language === 'en' 
              ? 'Discover our most loved spices, handpicked and freshly ground for maximum flavor'
              : 'ഏറ്റവും കൂടുതൽ സ്നേഹിക്കപ്പെടുന്ന മസാലകൾ കണ്ടെത്തുക, കൈകൊണ്ട് തെരഞ്ഞെടുത്ത് പുതുതായി പൊടിച്ചത്'
            }
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredProducts.map((product) => (
            <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  
                  {/* Badge */}
                  <div className="absolute top-3 left-3 bg-saffron-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                    {product.badge}
                  </div>
                  
                  {/* Organic Badge */}
                  {product.organic && (
                    <div className="absolute top-3 right-3 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                      {language === 'en' ? 'Organic' : 'ഓർഗാനിക്'}
                    </div>
                  )}
                </div>

                <div className="p-4">
                  <h3 className={`font-semibold text-gray-900 mb-2 line-clamp-2 ${
                    language === 'ml' ? 'malayalam-text text-sm' : ''
                  }`}>
                    {product.name}
                  </h3>

                  {/* Rating */}
                  <div className="flex items-center space-x-1 mb-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating)
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">({product.reviews})</span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="text-lg font-bold text-saffron-600">₹{product.price}</span>
                    <span className="text-sm text-gray-500 line-through">₹{product.originalPrice}</span>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">
                      {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                    </span>
                  </div>

                  {/* Actions */}
                  <div className="flex space-x-2">
                    <Button
                      onClick={() => handleAddToCart(product)}
                      className="flex-1 bg-saffron-500 hover:bg-saffron-600 text-white text-sm"
                    >
                      <ShoppingCart className="h-4 w-4 mr-1" />
                      {t('addToCart')}
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-saffron-600 border-saffron-600 hover:bg-saffron-50"
                      asChild
                    >
                      <Link to={`/products/${product.id}`}>
                        {t('viewDetails')}
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Products Button */}
        <div className="text-center">
          <Button
            asChild
            size="lg"
            className="bg-curry-500 hover:bg-curry-600 text-white px-8 py-3 text-lg rounded-full"
          >
            <Link to="/products">
              {language === 'en' ? 'View All Products' : 'എല്ലാ ഉൽപ്പന്നങ്ങളും കാണുക'}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
