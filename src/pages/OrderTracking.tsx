
import React, { useState } from 'react';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Package, Truck, CheckCircle, Clock, Search } from 'lucide-react';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { CartProvider } from '@/contexts/CartContext';

const OrderTracking = () => {
  const [orderNumber, setOrderNumber] = useState('');
  const [orderData, setOrderData] = useState(null);

  const trackOrder = () => {
    // Mock data - in real app, this would fetch from backend
    if (orderNumber) {
      setOrderData({
        id: orderNumber,
        status: 'Shipped',
        estimatedDelivery: '2024-05-26',
        items: [
          { name: 'Organic Turmeric Powder', quantity: 1, price: 299 },
          { name: 'Kerala Garam Masala', quantity: 1, price: 349 }
        ],
        total: 648,
        shippingAddress: '123 Main Street, New Delhi, India 110001',
        trackingSteps: [
          { status: 'Order Placed', date: '2024-05-23', completed: true },
          { status: 'Processing', date: '2024-05-24', completed: true },
          { status: 'Shipped', date: '2024-05-25', completed: true },
          { status: 'Out for Delivery', date: '2024-05-26', completed: false },
          { status: 'Delivered', date: '2024-05-26', completed: false }
        ]
      });
    }
  };

  const getStepIcon = (status: string, completed: boolean) => {
    if (completed) return <CheckCircle className="h-5 w-5 text-green-500" />;
    
    switch (status) {
      case 'Order Placed': return <Package className="h-5 w-5 text-gray-400" />;
      case 'Processing': return <Clock className="h-5 w-5 text-gray-400" />;
      case 'Shipped': return <Truck className="h-5 w-5 text-gray-400" />;
      case 'Out for Delivery': return <Truck className="h-5 w-5 text-gray-400" />;
      case 'Delivered': return <CheckCircle className="h-5 w-5 text-gray-400" />;
      default: return <Package className="h-5 w-5 text-gray-400" />;
    }
  };

  return (
    <LanguageProvider>
      <CartProvider>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1 container mx-auto px-4 py-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Track Your Order</h1>
                <p className="text-gray-600">Enter your order number to get real-time updates</p>
              </div>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Order Tracking</CardTitle>
                  <CardDescription>Enter your order ID to track your spice delivery</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-1">
                      <Input
                        placeholder="Enter order number (e.g., ORD001)"
                        value={orderNumber}
                        onChange={(e) => setOrderNumber(e.target.value)}
                      />
                    </div>
                    <Button onClick={trackOrder} className="bg-saffron-500 hover:bg-saffron-600">
                      <Search className="h-4 w-4 mr-2" />
                      Track Order
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {orderData && (
                <div className="space-y-6">
                  {/* Order Summary */}
                  <Card>
                    <CardHeader>
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        <div>
                          <CardTitle>Order #{orderData.id}</CardTitle>
                          <CardDescription>Estimated delivery: {orderData.estimatedDelivery}</CardDescription>
                        </div>
                        <Badge variant="secondary" className="text-sm">
                          {orderData.status}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h3 className="font-semibold mb-3">Order Items</h3>
                          <div className="space-y-2">
                            {orderData.items.map((item, index) => (
                              <div key={index} className="flex justify-between">
                                <span>{item.name} x {item.quantity}</span>
                                <span>₹{item.price}</span>
                              </div>
                            ))}
                            <div className="border-t pt-2 mt-2">
                              <div className="flex justify-between font-semibold">
                                <span>Total</span>
                                <span>₹{orderData.total}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h3 className="font-semibold mb-3">Shipping Address</h3>
                          <p className="text-gray-600">{orderData.shippingAddress}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Tracking Timeline */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Tracking Timeline</CardTitle>
                      <CardDescription>Follow your order's journey</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {orderData.trackingSteps.map((step, index) => (
                          <div key={index} className="flex items-center space-x-4">
                            {getStepIcon(step.status, step.completed)}
                            <div className="flex-1">
                              <div className={`font-medium ${step.completed ? 'text-gray-900' : 'text-gray-400'}`}>
                                {step.status}
                              </div>
                              <div className={`text-sm ${step.completed ? 'text-gray-600' : 'text-gray-400'}`}>
                                {step.date}
                              </div>
                            </div>
                            {step.completed && (
                              <Badge variant="default" className="bg-green-100 text-green-800">
                                Completed
                              </Badge>
                            )}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}

              {!orderData && orderNumber && (
                <Card>
                  <CardContent className="text-center py-8">
                    <p className="text-gray-500">No order found with this number. Please check and try again.</p>
                  </CardContent>
                </Card>
              )}
            </div>
          </main>
          <Footer />
        </div>
      </CartProvider>
    </LanguageProvider>
  );
};

export default OrderTracking;
