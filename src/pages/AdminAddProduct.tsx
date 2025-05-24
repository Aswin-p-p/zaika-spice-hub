
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowLeft, Save } from 'lucide-react';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { CartProvider } from '@/contexts/CartContext';

const AdminAddProduct = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    stock: '',
    category: '',
    image: '',
    benefits: '',
    ingredients: '',
    usage: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Product data:', formData);
    // Here you would typically save to backend
    navigate('/admin/products');
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <LanguageProvider>
      <CartProvider>
        <div className="min-h-screen flex flex-col bg-gray-50">
          <Header />
          <main className="flex-1 container mx-auto px-4 py-8">
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-4">
                <Link to="/admin/products">
                  <Button variant="outline" size="sm">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back to Products
                  </Button>
                </Link>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Add New Product</h1>
              <p className="text-gray-600">Create a new spice product</p>
            </div>

            <Card className="max-w-2xl">
              <CardHeader>
                <CardTitle>Product Details</CardTitle>
                <CardDescription>Fill in the information for your new product</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Product Name *</Label>
                      <Input
                        id="name"
                        placeholder="e.g., Organic Turmeric Powder"
                        value={formData.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="category">Category *</Label>
                      <Select value={formData.category} onValueChange={(value) => handleChange('category', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="powders">Powders</SelectItem>
                          <SelectItem value="whole-spices">Whole Spices</SelectItem>
                          <SelectItem value="blends">Spice Blends</SelectItem>
                          <SelectItem value="herbs">Herbs</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="price">Price (₹) *</Label>
                      <Input
                        id="price"
                        type="number"
                        placeholder="299"
                        value={formData.price}
                        onChange={(e) => handleChange('price', e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="stock">Stock Quantity *</Label>
                      <Input
                        id="stock"
                        type="number"
                        placeholder="50"
                        value={formData.stock}
                        onChange={(e) => handleChange('stock', e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Description *</Label>
                    <Textarea
                      id="description"
                      placeholder="Describe your product..."
                      value={formData.description}
                      onChange={(e) => handleChange('description', e.target.value)}
                      rows={3}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="image">Product Image URL</Label>
                    <Input
                      id="image"
                      placeholder="https://example.com/image.jpg"
                      value={formData.image}
                      onChange={(e) => handleChange('image', e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="benefits">Health Benefits</Label>
                    <Textarea
                      id="benefits"
                      placeholder="List the health benefits..."
                      value={formData.benefits}
                      onChange={(e) => handleChange('benefits', e.target.value)}
                      rows={2}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="ingredients">Ingredients</Label>
                    <Textarea
                      id="ingredients"
                      placeholder="List all ingredients..."
                      value={formData.ingredients}
                      onChange={(e) => handleChange('ingredients', e.target.value)}
                      rows={2}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="usage">Usage Instructions</Label>
                    <Textarea
                      id="usage"
                      placeholder="How to use this product..."
                      value={formData.usage}
                      onChange={(e) => handleChange('usage', e.target.value)}
                      rows={2}
                    />
                  </div>

                  <div className="flex gap-4 pt-4">
                    <Button type="submit" className="bg-saffron-500 hover:bg-saffron-600">
                      <Save className="h-4 w-4 mr-2" />
                      Save Product
                    </Button>
                    <Link to="/admin/products">
                      <Button variant="outline">Cancel</Button>
                    </Link>
                  </div>
                </form>
              </CardContent>
            </Card>
          </main>
          <Footer />
        </div>
      </CartProvider>
    </LanguageProvider>
  );
};

export default AdminAddProduct;
