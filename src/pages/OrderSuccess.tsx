
import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Package, Truck, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import { LanguageProvider } from '@/contexts/LanguageContext';

const OrderSuccess = () => {
  const orderId = 'ORD' + Math.random().toString(36).substr(2, 9).toUpperCase();

  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8">
              <CheckCircle className="h-20 w-20 text-green-500 mx-auto mb-4" />
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Order Placed Successfully!</h1>
              <p className="text-gray-600">
                Thank you for your order. We'll send you a confirmation email with order details.
              </p>
            </div>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center justify-center gap-2">
                  <Package className="h-5 w-5" />
                  Order Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <p className="text-sm text-gray-600">Order ID</p>
                  <p className="text-lg font-semibold">{orderId}</p>
                </div>
                
                <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Truck className="h-4 w-4" />
                    <span>Expected delivery: 3-5 business days</span>
                  </div>
                </div>

                <div className="space-y-3 pt-4">
                  <Button asChild className="w-full bg-saffron-500 hover:bg-saffron-600">
                    <Link to="/track-order">
                      Track Your Order
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                  
                  <Button variant="outline" asChild className="w-full">
                    <Link to="/products">
                      Continue Shopping
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="text-sm text-gray-600">
              <p>Need help? Contact us at <a href="mailto:support@zaika.com" className="text-saffron-600 hover:underline">support@zaika.com</a></p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default OrderSuccess;
