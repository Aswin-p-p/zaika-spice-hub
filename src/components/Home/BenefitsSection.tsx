
import React from 'react';
import { Leaf, Heart, Shield, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

const BenefitsSection = () => {
  const { language } = useLanguage();

  const benefits = [
    {
      icon: Leaf,
      title: language === 'en' ? '100% Organic' : '100% ഓർഗാനിക്',
      description: language === 'en' 
        ? 'No chemicals, preservatives, or artificial additives. Pure and natural spices.'
        : 'രാസവസ്തുക്കളോ പ്രിസർവേറ്റീവുകളോ കൃത്രിമ അഡിറ്റീവുകളോ ഇല്ല. ശുദ്ധവും പ്രകൃതിദത്തവുമായ മസാലകൾ.',
      color: 'bg-green-500'
    },
    {
      icon: Heart,
      title: language === 'en' ? 'Health Benefits' : 'ആരോഗ്യ ഗുണങ്ങൾ',
      description: language === 'en'
        ? 'Rich in antioxidants, vitamins, and minerals that boost immunity and wellness.'
        : 'രോഗപ്രതിരോധ ശേഷിയും ആരോഗ്യവും വർധിപ്പിക്കുന്ന ആന്റിഓക്സിഡന്റുകൾ, വിറ്റാമിനുകൾ, ധാതുക്കൾ എന്നിവയാൽ സമ്പന്നം.',
      color: 'bg-red-500'
    },
    {
      icon: Shield,
      title: language === 'en' ? 'Quality Assured' : 'ഗുണനിലവാരം ഉറപ്പ്',
      description: language === 'en'
        ? 'Carefully tested and packed in hygienic conditions with strict quality control.'
        : 'കർശനമായ ഗുണനിലവാര നിയന്ത്രണത്തോടെ ശുചിത്വ സാഹചര്യങ്ങളിൽ ശ്രദ്ധാപൂർവ്വം പരിശോധിച്ച് പാക്ക് ചെയ്തത്.',
      color: 'bg-blue-500'
    },
    {
      icon: Award,
      title: language === 'en' ? 'Traditional Recipe' : 'പരമ്പരാഗത പാചകക്കുറിപ്പ്',
      description: language === 'en'
        ? 'Time-tested family recipes passed down through generations for authentic taste.'
        : 'ആധികാരിക രുചിക്കായി തലമുറകളായി കൈമാറ്റം ചെയ്യപ്പെട്ട കാലപരിശോധനയിൽ വിജയിച്ച കുടുംബ പാചകക്കുറിപ്പുകൾ.',
      color: 'bg-yellow-500'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 ${
            language === 'ml' ? 'malayalam-text' : ''
          }`}>
            {language === 'en' ? 'Why Choose Zaika Spices?' : 'എന്തുകൊണ്ട് സൈക സ്പൈസസ് തിരഞ്ഞെടുക്കണം?'}
          </h2>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto ${
            language === 'ml' ? 'malayalam-text' : ''
          }`}>
            {language === 'en'
              ? 'Experience the difference that authentic, homemade spices can make in your cooking'
              : 'നിങ്ങളുടെ പാചകത്തിൽ ആധികാരികവും വീട്ടിൽ നിർമ്മിച്ചതുമായ മസാലകൾക്ക് കഴിയുന്ന വ്യത്യാസം അനുഭവിക്കുക'
            }
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 ${benefit.color} rounded-full mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className={`text-xl font-semibold text-gray-900 mb-3 ${
                    language === 'ml' ? 'malayalam-text' : ''
                  }`}>
                    {benefit.title}
                  </h3>
                  <p className={`text-gray-600 leading-relaxed ${
                    language === 'ml' ? 'malayalam-text text-sm' : ''
                  }`}>
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className={`inline-flex items-center justify-center px-6 py-3 bg-saffron-100 text-saffron-800 rounded-full ${
            language === 'ml' ? 'malayalam-text' : ''
          }`}>
            <Award className="h-5 w-5 mr-2" />
            {language === 'en' 
              ? '5-Star Customer Rating • 10,000+ Happy Customers'
              : '5-സ്റ്റാർ കസ്റ്റമർ റേറ്റിംഗ് • 10,000+ സന്തുഷ്ട ഉപഭോക്താക്കൾ'
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
