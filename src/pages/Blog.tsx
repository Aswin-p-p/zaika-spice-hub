
import React, { useState } from 'react';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import WhatsAppButton from '@/components/Layout/WhatsAppButton';
import CartSidebar from '@/components/Layout/CartSidebar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Search, Calendar, User, ArrowRight } from 'lucide-react';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { CartProvider } from '@/contexts/CartContext';

const BlogContent = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const blogPosts = [
    {
      id: '1',
      title: 'The Health Benefits of Turmeric: Ancient Wisdom Meets Modern Science',
      excerpt: 'Discover how turmeric, the golden spice, has been used for centuries and what modern research reveals about its incredible health benefits.',
      content: 'Full article content...',
      image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=400&q=80',
      author: 'Priya Nair',
      date: '2024-01-15',
      category: 'Health',
      readTime: '5 min read',
      featured: true
    },
    {
      id: '2',
      title: 'Mastering the Art of Spice Storage: Keep Your Spices Fresh Longer',
      excerpt: 'Learn the best practices for storing spices to maintain their potency, flavor, and aroma for maximum culinary impact.',
      content: 'Full article content...',
      image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=400&q=80',
      author: 'Rajesh Kumar',
      date: '2024-01-10',
      category: 'Tips',
      readTime: '4 min read',
      featured: false
    },
    {
      id: '3',
      title: 'From Farm to Kitchen: The Journey of Our Organic Spices',
      excerpt: 'Take a behind-the-scenes look at how we source, process, and deliver the finest organic spices to your kitchen.',
      content: 'Full article content...',
      image: 'https://images.unsplash.com/photo-1583474531547-3794072ff26e?auto=format&fit=crop&w=400&q=80',
      author: 'Lakshmi Menon',
      date: '2024-01-08',
      category: 'Process',
      readTime: '6 min read',
      featured: true
    },
    {
      id: '4',
      title: 'Regional Spice Blends: Exploring India\'s Diverse Culinary Landscape',
      excerpt: 'Journey through different regions of India and discover the unique spice blends that define each area\'s distinctive cuisine.',
      content: 'Full article content...',
      image: 'https://images.unsplash.com/photo-1586511925558-a4c6376fe65f?auto=format&fit=crop&w=400&q=80',
      author: 'Priya Nair',
      date: '2024-01-05',
      category: 'Culture',
      readTime: '7 min read',
      featured: false
    },
    {
      id: '5',
      title: 'Spice Pairing Guide: Creating Perfect Flavor Combinations',
      excerpt: 'Master the art of combining spices to create harmonious flavors that will elevate your cooking to new heights.',
      content: 'Full article content...',
      image: 'https://images.unsplash.com/photo-1599909533681-74ab7ca4a7e2?auto=format&fit=crop&w=400&q=80',
      author: 'Rajesh Kumar',
      date: '2024-01-03',
      category: 'Cooking',
      readTime: '5 min read',
      featured: false
    },
    {
      id: '6',
      title: 'The Science of Spices: Understanding Heat Levels and Flavor Profiles',
      excerpt: 'Delve into the chemistry behind spices and learn how different compounds create the heat, flavor, and aroma we love.',
      content: 'Full article content...',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=400&q=80',
      author: 'Lakshmi Menon',
      date: '2024-01-01',
      category: 'Science',
      readTime: '8 min read',
      featured: true
    }
  ];

  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  const getCategoryColor = (category: string) => {
    const colors = {
      'Health': 'bg-green-100 text-green-800',
      'Tips': 'bg-blue-100 text-blue-800',
      'Process': 'bg-purple-100 text-purple-800',
      'Culture': 'bg-orange-100 text-orange-800',
      'Cooking': 'bg-red-100 text-red-800',
      'Science': 'bg-indigo-100 text-indigo-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-saffron-50 to-turmeric-50">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Spice Stories & Kitchen Wisdom
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Discover the world of spices through our articles on health benefits, cooking tips, 
              and the rich cultural heritage behind every blend.
            </p>
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        </section>

        {/* Featured Articles */}
        {searchTerm === '' && (
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Articles</h2>
              <div className="grid lg:grid-cols-3 gap-8">
                {featuredPosts.map((post) => (
                  <Card key={post.id} className="group hover:shadow-xl transition-shadow">
                    <CardHeader className="p-0">
                      <div className="relative overflow-hidden rounded-t-lg">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <Badge className="absolute top-3 left-3 bg-saffron-500">Featured</Badge>
                        <Badge className={`absolute top-3 right-3 ${getCategoryColor(post.category)}`}>
                          {post.category}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="p-6">
                      <CardTitle className="text-xl mb-3 group-hover:text-saffron-600 transition-colors">
                        {post.title}
                      </CardTitle>
                      <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <User className="h-4 w-4" />
                            {post.author}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {new Date(post.date).toLocaleDateString()}
                          </div>
                        </div>
                        <span className="text-saffron-600">{post.readTime}</span>
                      </div>
                    </CardContent>
                    <CardFooter className="p-6 pt-0">
                      <Button variant="outline" className="w-full group-hover:bg-saffron-50 group-hover:border-saffron-300">
                        Read More
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* All Articles */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              {searchTerm ? 'Search Results' : 'Latest Articles'}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {(searchTerm ? filteredPosts : [...featuredPosts, ...regularPosts]).map((post) => (
                <Card key={post.id} className="group hover:shadow-lg transition-shadow">
                  <CardHeader className="p-0">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <Badge className={`absolute top-3 right-3 ${getCategoryColor(post.category)}`}>
                        {post.category}
                      </Badge>
                      {post.featured && (
                        <Badge className="absolute top-3 left-3 bg-saffron-500">Featured</Badge>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="p-4">
                    <CardTitle className="text-lg mb-2 group-hover:text-saffron-600 transition-colors line-clamp-2">
                      {post.title}
                    </CardTitle>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>{post.author}</span>
                      <span>{post.readTime}</span>
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <Button variant="outline" size="sm" className="w-full">
                      Read Article
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            {filteredPosts.length === 0 && searchTerm && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No articles found matching your search.</p>
                <Button
                  variant="outline"
                  className="mt-4"
                  onClick={() => setSearchTerm('')}
                >
                  Clear Search
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter Subscription */}
        <section className="py-16 bg-gradient-to-r from-saffron-500 to-chili-500">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
            <p className="text-saffron-100 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter to get the latest articles, recipes, and spice tips delivered to your inbox.
            </p>
            <div className="max-w-md mx-auto flex gap-2">
              <Input
                placeholder="Enter your email"
                className="bg-white border-white"
              />
              <Button className="bg-white text-saffron-600 hover:bg-gray-100">
                Subscribe
              </Button>
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

const Blog = () => {
  return (
    <LanguageProvider>
      <CartProvider>
        <BlogContent />
      </CartProvider>
    </LanguageProvider>
  );
};

export default Blog;
