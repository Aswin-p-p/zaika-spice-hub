
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
import { Search, Clock, Users, ChefHat } from 'lucide-react';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { CartProvider } from '@/contexts/CartContext';

const RecipesContent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCuisine, setFilterCuisine] = useState('all');
  const [filterDifficulty, setFilterDifficulty] = useState('all');

  const recipes = [
    {
      id: '1',
      title: 'Authentic Chicken Curry',
      description: 'Traditional Kerala-style chicken curry with aromatic spices',
      image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=400&q=80',
      cuisine: 'Kerala',
      difficulty: 'Medium',
      cookTime: '45 mins',
      servings: 4,
      spices: ['Garam Masala', 'Turmeric', 'Red Chili Powder'],
      featured: true
    },
    {
      id: '2',
      title: 'Sambar',
      description: 'South Indian lentil curry with vegetables and tamarind',
      image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=400&q=80',
      cuisine: 'South Indian',
      difficulty: 'Easy',
      cookTime: '30 mins',
      servings: 6,
      spices: ['Sambar Powder', 'Turmeric', 'Mustard Seeds'],
      featured: true
    },
    {
      id: '3',
      title: 'Biriyani Masala Rice',
      description: 'Fragrant basmati rice with aromatic biriyani spices',
      image: 'https://images.unsplash.com/photo-1563379091339-03246963d29c?auto=format&fit=crop&w=400&q=80',
      cuisine: 'Mughlai',
      difficulty: 'Hard',
      cookTime: '90 mins',
      servings: 8,
      spices: ['Biriyani Masala', 'Saffron', 'Bay Leaves'],
      featured: false
    },
    {
      id: '4',
      title: 'Tandoori Chicken',
      description: 'Marinated chicken grilled with traditional tandoori spices',
      image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=400&q=80',
      cuisine: 'North Indian',
      difficulty: 'Medium',
      cookTime: '60 mins',
      servings: 4,
      spices: ['Tandoori Masala', 'Red Chili Powder', 'Garam Masala'],
      featured: false
    },
    {
      id: '5',
      title: 'Masala Chai',
      description: 'Traditional Indian spiced tea with aromatic spices',
      image: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?auto=format&fit=crop&w=400&q=80',
      cuisine: 'Indian',
      difficulty: 'Easy',
      cookTime: '10 mins',
      servings: 2,
      spices: ['Cardamom', 'Cinnamon', 'Ginger'],
      featured: true
    },
    {
      id: '6',
      title: 'Fish Curry',
      description: 'Kerala-style fish curry with coconut and curry leaves',
      image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=400&q=80',
      cuisine: 'Kerala',
      difficulty: 'Medium',
      cookTime: '35 mins',
      servings: 4,
      spices: ['Fish Curry Powder', 'Turmeric', 'Fenugreek'],
      featured: false
    }
  ];

  const filteredRecipes = recipes.filter(recipe => {
    const matchesSearch = recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         recipe.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCuisine = filterCuisine === 'all' || recipe.cuisine === filterCuisine;
    const matchesDifficulty = filterDifficulty === 'all' || recipe.difficulty === filterDifficulty;
    return matchesSearch && matchesCuisine && matchesDifficulty;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-100 text-green-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Hard': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-saffron-50 to-turmeric-50">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Authentic Recipes
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover traditional recipes that showcase the authentic flavors of our premium spices
            </p>
          </div>
        </section>

        {/* Search and Filters */}
        <section className="py-8 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search recipes..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={filterCuisine} onValueChange={setFilterCuisine}>
                <SelectTrigger className="w-full lg:w-48">
                  <SelectValue placeholder="Cuisine" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Cuisines</SelectItem>
                  <SelectItem value="Kerala">Kerala</SelectItem>
                  <SelectItem value="South Indian">South Indian</SelectItem>
                  <SelectItem value="North Indian">North Indian</SelectItem>
                  <SelectItem value="Mughlai">Mughlai</SelectItem>
                  <SelectItem value="Indian">Indian</SelectItem>
                </SelectContent>
              </Select>
              <Select value={filterDifficulty} onValueChange={setFilterDifficulty}>
                <SelectTrigger className="w-full lg:w-48">
                  <SelectValue placeholder="Difficulty" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Levels</SelectItem>
                  <SelectItem value="Easy">Easy</SelectItem>
                  <SelectItem value="Medium">Medium</SelectItem>
                  <SelectItem value="Hard">Hard</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </section>

        {/* Featured Recipes */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Recipes</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {recipes.filter(recipe => recipe.featured).map((recipe) => (
                <Card key={recipe.id} className="group hover:shadow-xl transition-shadow">
                  <CardHeader className="p-0">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img
                        src={recipe.image}
                        alt={recipe.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <Badge className="absolute top-2 left-2 bg-saffron-500">Featured</Badge>
                      <Badge className={`absolute top-2 right-2 ${getDifficultyColor(recipe.difficulty)}`}>
                        {recipe.difficulty}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4">
                    <CardTitle className="text-xl mb-2">{recipe.title}</CardTitle>
                    <p className="text-gray-600 text-sm mb-3">{recipe.description}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {recipe.cookTime}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        {recipe.servings} servings
                      </div>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-gray-700">Key Spices:</p>
                      <div className="flex flex-wrap gap-1">
                        {recipe.spices.map((spice, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {spice}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <Button className="w-full bg-saffron-500 hover:bg-saffron-600">
                      <ChefHat className="h-4 w-4 mr-2" />
                      View Recipe
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* All Recipes */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">All Recipes</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredRecipes.map((recipe) => (
                <Card key={recipe.id} className="group hover:shadow-lg transition-shadow">
                  <CardHeader className="p-0">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img
                        src={recipe.image}
                        alt={recipe.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <Badge className={`absolute top-2 right-2 ${getDifficultyColor(recipe.difficulty)}`}>
                        {recipe.difficulty}
                      </Badge>
                      {recipe.featured && (
                        <Badge className="absolute top-2 left-2 bg-saffron-500">Featured</Badge>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="p-4">
                    <CardTitle className="text-lg mb-2">{recipe.title}</CardTitle>
                    <p className="text-gray-600 text-sm mb-3">{recipe.description}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {recipe.cookTime}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        {recipe.servings}
                      </div>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {recipe.cuisine}
                    </Badge>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <Button variant="outline" className="w-full">
                      View Recipe
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            {filteredRecipes.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No recipes found matching your criteria.</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
      <CartSidebar />
    </div>
  );
};

const Recipes = () => {
  return (
    <LanguageProvider>
      <CartProvider>
        <RecipesContent />
      </CartProvider>
    </LanguageProvider>
  );
};

export default Recipes;
