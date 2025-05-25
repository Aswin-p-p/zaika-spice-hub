
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import PaymentMethods from '@/components/Checkout/PaymentMethods';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Truck, Shield, ArrowLeft } from 'lucide-react';
import { LanguageProvider, useLanguage } from '@/contexts/LanguageContext';
import { CartProvider, useCart } from '@/contexts/CartContext';
import { useToast } from '@/hooks/use-toast';

const CheckoutContent = () => {
  const { items, totalPrice, clearCart } = useCart();
  const { t } = useLanguage();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    paymentMethod: 'card'
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSelectChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    if (formErrors[field]) {
      setFormErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const handlePaymentMethodChange = (method: string) => {
    setFormData(prev => ({
      ...prev,
      paymentMethod: method
    }));
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};
    
    if (!formData.email) errors.email = 'Email is required';
    if (!formData.firstName) errors.firstName = 'First name is required';
    if (!formData.lastName) errors.lastName = 'Last name is required';
    if (!formData.phone) errors.phone = 'Phone number is required';
    if (!formData.address) errors.address = 'Address is required';
    if (!formData.city) errors.city = 'City is required';
    if (!formData.state) errors.state = 'State is required';
    if (!formData.pincode) errors.pincode = 'PIN code is required';
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    
    // Phone validation
    const phoneRegex = /^[6-9]\d{9}$/;
    if (formData.phone && !phoneRegex.test(formData.phone.replace(/\D/g, ''))) {
      errors.phone = 'Please enter a valid 10-digit phone number';
    }
    
    // PIN code validation
    const pincodeRegex = /^\d{6}$/;
    if (formData.pincode && !pincodeRegex.test(formData.pincode)) {
      errors.pincode = 'Please enter a valid 6-digit PIN code';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields correctly.",
        variant: "destructive",
      });
      return;
    }
    
    setIsProcessing(true);
    
    try {
      // Simulate order processing
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Here you would integrate with your payment processor (Stripe, etc.)
      // For now, we'll simulate a successful order
      
      clearCart();
      toast({
        title: "Order Placed Successfully!",
        description: "You will receive a confirmation email shortly.",
      });
      
      navigate('/order-success');
    } catch (error) {
      toast({
        title: "Order Failed",
        description: "There was an error processing your order. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">No Items to Checkout</h1>
            <p className="text-gray-600 mb-8">
              Your cart is empty. Add some spices to proceed with checkout.
            </p>
            <Button asChild className="bg-saffron-500 hover:bg-saffron-600">
              <Link to="/products">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Browse Products
              </Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const tax = totalPrice * 0.18;
  const shippingCharge = totalPrice >= 499 ? 0 : 50;
  const finalTotal = totalPrice + tax + shippingCharge;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-gray-900">{t('checkout')}</h1>
            <Button variant="outline" asChild>
              <Link to="/cart">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Cart
              </Link>
            </Button>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Checkout Form */}
              <div className="space-y-6">
                {/* Contact Information */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-saffron-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        1
                      </div>
                      Contact Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">{t('email')} *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                        className={formErrors.email ? 'border-red-500' : ''}
                        required
                      />
                      {formErrors.email && <p className="text-red-500 text-sm">{formErrors.email}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">{t('phone')} *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 9876543210"
                        className={formErrors.phone ? 'border-red-500' : ''}
                        required
                      />
                      {formErrors.phone && <p className="text-red-500 text-sm">{formErrors.phone}</p>}
                    </div>
                  </CardContent>
                </Card>

                {/* Billing Address */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-saffron-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        2
                      </div>
                      {t('billingAddress')}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">{t('firstName')} *</Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className={formErrors.firstName ? 'border-red-500' : ''}
                          required
                        />
                        {formErrors.firstName && <p className="text-red-500 text-sm">{formErrors.firstName}</p>}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">{t('lastName')} *</Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className={formErrors.lastName ? 'border-red-500' : ''}
                          required
                        />
                        {formErrors.lastName && <p className="text-red-500 text-sm">{formErrors.lastName}</p>}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="address">{t('address')} *</Label>
                      <Input
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        placeholder="House No, Street, Area, Landmark"
                        className={formErrors.address ? 'border-red-500' : ''}
                        required
                      />
                      {formErrors.address && <p className="text-red-500 text-sm">{formErrors.address}</p>}
                    </div>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="city">{t('city')} *</Label>
                        <Input
                          id="city"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          className={formErrors.city ? 'border-red-500' : ''}
                          required
                        />
                        {formErrors.city && <p className="text-red-500 text-sm">{formErrors.city}</p>}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="state">{t('state')} *</Label>
                        <Select value={formData.state} onValueChange={(value) => handleSelectChange('state', value)}>
                          <SelectTrigger className={formErrors.state ? 'border-red-500' : ''}>
                            <SelectValue placeholder="Select state" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="andhra-pradesh">Andhra Pradesh</SelectItem>
                            <SelectItem value="arunachal-pradesh">Arunachal Pradesh</SelectItem>
                            <SelectItem value="assam">Assam</SelectItem>
                            <SelectItem value="bihar">Bihar</SelectItem>
                            <SelectItem value="chhattisgarh">Chhattisgarh</SelectItem>
                            <SelectItem value="goa">Goa</SelectItem>
                            <SelectItem value="gujarat">Gujarat</SelectItem>
                            <SelectItem value="haryana">Haryana</SelectItem>
                            <SelectItem value="himachal-pradesh">Himachal Pradesh</SelectItem>
                            <SelectItem value="jharkhand">Jharkhand</SelectItem>
                            <SelectItem value="karnataka">Karnataka</SelectItem>
                            <SelectItem value="kerala">Kerala</SelectItem>
                            <SelectItem value="madhya-pradesh">Madhya Pradesh</SelectItem>
                            <SelectItem value="maharashtra">Maharashtra</SelectItem>
                            <SelectItem value="manipur">Manipur</SelectItem>
                            <SelectItem value="meghalaya">Meghalaya</SelectItem>
                            <SelectItem value="mizoram">Mizoram</SelectItem>
                            <SelectItem value="nagaland">Nagaland</SelectItem>
                            <SelectItem value="odisha">Odisha</SelectItem>
                            <SelectItem value="punjab">Punjab</SelectItem>
                            <SelectItem value="rajasthan">Rajasthan</SelectItem>
                            <SelectItem value="sikkim">Sikkim</SelectItem>
                            <SelectItem value="tamil-nadu">Tamil Nadu</SelectItem>
                            <SelectItem value="telangana">Telangana</SelectItem>
                            <SelectItem value="tripura">Tripura</SelectItem>
                            <SelectItem value="uttar-pradesh">Uttar Pradesh</SelectItem>
                            <SelectItem value="uttarakhand">Uttarakhand</SelectItem>
                            <SelectItem value="west-bengal">West Bengal</SelectItem>
                          </SelectContent>
                        </Select>
                        {formErrors.state && <p className="text-red-500 text-sm">{formErrors.state}</p>}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="pincode">{t('pincode')} *</Label>
                        <Input
                          id="pincode"
                          name="pincode"
                          value={formData.pincode}
                          onChange={handleInputChange}
                          placeholder="682001"
                          maxLength={6}
                          className={formErrors.pincode ? 'border-red-500' : ''}
                          required
                        />
                        {formErrors.pincode && <p className="text-red-500 text-sm">{formErrors.pincode}</p>}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Payment Method */}
                <PaymentMethods 
                  paymentMethod={formData.paymentMethod}
                  onPaymentMethodChange={handlePaymentMethodChange}
                />
              </div>

              {/* Order Summary */}
              <div className="space-y-6">
                <Card className="sticky top-8">
                  <CardHeader>
                    <CardTitle>{t('orderSummary')}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Order Items */}
                    <div className="space-y-3 max-h-60 overflow-y-auto">
                      {items.map((item) => (
                        <div key={item.id} className="flex items-center space-x-3">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-12 h-12 object-cover rounded"
                          />
                          <div className="flex-1">
                            <p className="font-medium text-sm">{item.name}</p>
                            <p className="text-gray-500 text-xs">Qty: {item.quantity}</p>
                          </div>
                          <p className="font-medium">₹{(item.price * item.quantity).toFixed(2)}</p>
                        </div>
                      ))}
                    </div>
                    
                    <Separator />
                    
                    {/* Pricing */}
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>{t('subtotal')}</span>
                        <span>₹{totalPrice.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>{t('shipping')}</span>
                        <span className={shippingCharge === 0 ? "text-green-600" : ""}>
                          {shippingCharge === 0 ? 'Free' : `₹${shippingCharge}`}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>{t('tax')} (18% GST)</span>
                        <span>₹{tax.toFixed(2)}</span>
                      </div>
                      <Separator />
                      <div className="flex justify-between text-lg font-semibold">
                        <span>{t('total')}</span>
                        <span>₹{finalTotal.toFixed(2)}</span>
                      </div>
                    </div>

                    {/* Security Features */}
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <Shield className="h-4 w-4 text-green-600" />
                        <span>Secure payment processing</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Truck className="h-4 w-4 text-blue-600" />
                        <span>Free delivery on orders above ₹499</span>
                      </div>
                    </div>

                    <Button 
                      type="submit"
                      className="w-full bg-saffron-500 hover:bg-saffron-600"
                      disabled={isProcessing}
                    >
                      {isProcessing ? 'Processing...' : `${t('placeOrder')} - ₹${finalTotal.toFixed(2)}`}
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

const Checkout = () => {
  return (
    <LanguageProvider>
      <CartProvider>
        <CheckoutContent />
      </CartProvider>
    </LanguageProvider>
  );
};

export default Checkout;
