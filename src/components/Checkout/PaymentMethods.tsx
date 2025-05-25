
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { CreditCard, Smartphone, Banknote } from 'lucide-react';

interface PaymentMethodsProps {
  paymentMethod: string;
  onPaymentMethodChange: (method: string) => void;
}

const PaymentMethods = ({ paymentMethod, onPaymentMethodChange }: PaymentMethodsProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <div className="w-8 h-8 bg-saffron-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
            3
          </div>
          Payment Method
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <RadioGroup value={paymentMethod} onValueChange={onPaymentMethodChange}>
          {/* Credit/Debit Card */}
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="card" id="card" />
            <Label htmlFor="card" className="flex items-center gap-2 cursor-pointer">
              <CreditCard className="h-4 w-4" />
              Credit/Debit Card
            </Label>
          </div>
          
          {paymentMethod === 'card' && (
            <div className="ml-6 space-y-4 p-4 bg-gray-50 rounded-lg">
              <div className="space-y-2">
                <Label htmlFor="cardNumber">Card Number</Label>
                <Input
                  id="cardNumber"
                  placeholder="1234 5678 9012 3456"
                  className="bg-white"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="expiry">Expiry Date</Label>
                  <Input
                    id="expiry"
                    placeholder="MM/YY"
                    className="bg-white"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cvv">CVV</Label>
                  <Input
                    id="cvv"
                    placeholder="123"
                    className="bg-white"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="cardName">Name on Card</Label>
                <Input
                  id="cardName"
                  placeholder="John Doe"
                  className="bg-white"
                />
              </div>
            </div>
          )}

          {/* UPI Payment */}
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="upi" id="upi" />
            <Label htmlFor="upi" className="flex items-center gap-2 cursor-pointer">
              <Smartphone className="h-4 w-4" />
              UPI Payment
            </Label>
          </div>
          
          {paymentMethod === 'upi' && (
            <div className="ml-6 space-y-4 p-4 bg-gray-50 rounded-lg">
              <div className="space-y-2">
                <Label htmlFor="upiId">UPI ID</Label>
                <Input
                  id="upiId"
                  placeholder="yourname@paytm"
                  className="bg-white"
                />
              </div>
              <div className="text-sm text-gray-600">
                <p>Popular UPI Apps:</p>
                <div className="flex gap-2 mt-2">
                  <span className="px-2 py-1 bg-blue-100 rounded text-xs">Google Pay</span>
                  <span className="px-2 py-1 bg-purple-100 rounded text-xs">PhonePe</span>
                  <span className="px-2 py-1 bg-green-100 rounded text-xs">Paytm</span>
                </div>
              </div>
            </div>
          )}

          {/* Cash on Delivery */}
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="cod" id="cod" />
            <Label htmlFor="cod" className="flex items-center gap-2 cursor-pointer">
              <Banknote className="h-4 w-4" />
              Cash on Delivery
            </Label>
          </div>
          
          {paymentMethod === 'cod' && (
            <div className="ml-6 p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600">
                Pay with cash when your order is delivered. Additional charges may apply.
              </p>
            </div>
          )}
        </RadioGroup>
      </CardContent>
    </Card>
  );
};

export default PaymentMethods;
