
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import WhatsAppButton from '@/components/Layout/WhatsAppButton';
import CartSidebar from '@/components/Layout/CartSidebar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Search, Filter, ShoppingCart } from 'lucide-react';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { CartProvider, useCart } from '@/contexts/CartContext';

const ProductsContent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const { addToCart } = useCart();

  const products = [
    {
      id: '1',
      name: 'Organic Turmeric Powder',
      price: 249,
      originalPrice: 299,
      image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=400&q=80',
      category: 'powder',
      organic: true,
      description: 'Pure organic turmeric powder with high curcumin content'
    },
    {
      id: '2',
      name: 'Garam Masala Blend',
      price: 199,
      originalPrice: 249,
      image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=400&q=80',
      category: 'blend',
      organic: true,
      description: 'Traditional aromatic spice blend for authentic Indian cuisine'
    },
    {
      id: '3',
      name: 'Red Chili Powder',
      price: 179,
      originalPrice: 219,
      image: 'https://images.unsplash.com/photo-1583474531547-3794072ff26e?auto=format&fit=crop&w=400&q=80',
      category: 'powder',
      organic: true,
      description: 'Fiery red chili powder for spice lovers'
    },
    {
      id: '4',
      name: 'Whole Black Pepper',
      price: 299,
      originalPrice: 349,
      image: 'https://images.unsplash.com/photo-1599909533681-74ab7ca4a7e2?auto=format&fit=crop&w=400&q=80',
      category: 'whole',
      organic: true,
      description: 'Premium quality whole black peppercorns'
    },
    {
      id: '5',
      name: 'Coriander Seeds',
      price: 159,
      originalPrice: 189,
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=400&q=80',
      category: 'whole',
      organic: true,
      description: 'Fresh aromatic coriander seeds'
    },
    {
      id: '6',
      name: 'Sambar Powder',
      price: 229,
      originalPrice: 269,
      image: 'https://images.unsplash.com/photo-1586511925558-a4c6376fe65f?auto=format&fit=crop&w=400&q=80',
      category: 'blend',
      organic: true,
      description: 'Authentic South Indian sambar masala blend'
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterType === 'all' || product.category === filterType;
    return matchesSearch && matchesFilter;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price') return a.price - b.price;
    if (sortBy === 'name') return a.name.localeCompare(b.name);
    return 0;
  });

  const handleAddToCart = (product: any) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Premium Spices</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our collection of authentic, organic, and homemade spices
          </p>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col lg:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search spices..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={filterType} onValueChange={setFilterType}>
            <SelectTrigger className="w-full lg:w-48">
              <Filter className="h-4 w-4 mr-2" />
              <SelectValue placeholder="Filter by type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="powder">Powder</SelectItem>
              <SelectItem value="whole">Whole Spices</SelectItem>
              <SelectItem value="blend">Spice Blends</SelectItem>
            </SelectContent>
          </Select>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-full lg:w-48">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="name">Name</SelectItem>
              <SelectItem value="price">Price</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedProducts.map((product) => (
            <Card key={product.id} className="group hover:shadow-lg transition-shadow">
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {product.organic && (
                    <Badge className="absolute top-2 left-2 bg-green-500">Organic</Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle className="text-lg mb-2">{product.name}</CardTitle>
                <p className="text-gray-600 text-sm mb-3">{product.description}</p>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-saffron-600">₹{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-500 line-through">₹{product.originalPrice}</span>
                  )}
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0 flex gap-2">
                <Button 
                  className="flex-1 bg-saffron-500 hover:bg-saffron-600"
                  onClick={() => handleAddToCart(product)}
                >
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Add to Cart
                </Button>
                <Button variant="outline" asChild>
                  <Link to={`/product/${product.id}`}>View Details</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {sortedProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
          </div>
        )}
      </main>
      <Footer />
      <WhatsAppButton />
      <CartSidebar />
    </div>
  );
};

const Products = () => {
  return (
    <LanguageProvider>
      <CartProvider>
        <ProductsContent />
      </CartProvider>
    </LanguageProvider>
  );
};

export default Products;
