
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Shield, Truck } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { CartItem } from '@/contexts/CartContext';

interface OrderSummaryProps {
  items: CartItem[];
  totalPrice: number;
  tax: number;
  shippingCharge: number;
  finalTotal: number;
  isProcessing: boolean;
}

const OrderSummary = ({ items, totalPrice, tax, shippingCharge, finalTotal, isProcessing }: OrderSummaryProps) => {
  const { t } = useLanguage();

  return (
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
  );
};

export default OrderSummary;
