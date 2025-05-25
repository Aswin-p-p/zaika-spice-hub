
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { useLanguage } from '@/contexts/LanguageContext';

interface ContactFormProps {
  formData: {
    email: string;
    phone: string;
  };
  formErrors: Record<string, string>;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ContactForm = ({ formData, formErrors, onInputChange }: ContactFormProps) => {
  const { t } = useLanguage();

  return (
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
            onChange={onInputChange}
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
            onChange={onInputChange}
            placeholder="+91 9876543210"
            className={formErrors.phone ? 'border-red-500' : ''}
            required
          />
          {formErrors.phone && <p className="text-red-500 text-sm">{formErrors.phone}</p>}
        </div>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
