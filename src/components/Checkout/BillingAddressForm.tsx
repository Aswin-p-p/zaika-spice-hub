
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useLanguage } from '@/contexts/LanguageContext';

interface BillingAddressFormProps {
  formData: {
    firstName: string;
    lastName: string;
    address: string;
    city: string;
    state: string;
    pincode: string;
  };
  formErrors: Record<string, string>;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSelectChange: (field: string, value: string) => void;
}

const BillingAddressForm = ({ formData, formErrors, onInputChange, onSelectChange }: BillingAddressFormProps) => {
  const { t } = useLanguage();

  return (
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
              onChange={onInputChange}
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
              onChange={onInputChange}
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
            onChange={onInputChange}
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
              onChange={onInputChange}
              className={formErrors.city ? 'border-red-500' : ''}
              required
            />
            {formErrors.city && <p className="text-red-500 text-sm">{formErrors.city}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="state">{t('state')} *</Label>
            <Select value={formData.state} onValueChange={(value) => onSelectChange('state', value)}>
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
              onChange={onInputChange}
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
  );
};

export default BillingAddressForm;
