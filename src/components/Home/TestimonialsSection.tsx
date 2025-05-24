
import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

const TestimonialsSection = () => {
  const { language } = useLanguage();

  const testimonials = [
    {
      id: 1,
      name: language === 'en' ? 'Priya Nair' : 'പ്രിയ നായർ',
      location: language === 'en' ? 'Kochi, Kerala' : 'കൊച്ചി, കേരളം',
      rating: 5,
      text: language === 'en'
        ? "The turmeric powder is absolutely amazing! The aroma and color are so vibrant. It's like having fresh turmeric from my grandmother's garden."
        : "മഞ്ഞൾ പൊടി തികച്ചും അത്ഭുതകരമാണ്! സുഗന്ധവും നിറവും വളരെ ചടുലമാണ്. എന്റെ മുത്തശ്ശിയുടെ തോട്ടത്തിൽ നിന്നുള്ള പുതിയ മഞ്ഞൾ ഉള്ളത് പോലെയാണ്.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 2,
      name: language === 'en' ? 'Rajesh Kumar' : 'രാജേഷ് കുമാർ',
      location: language === 'en' ? 'Mumbai, Maharashtra' : 'മുംബൈ, മഹാരാഷ്ട്ര',
      rating: 5,
      text: language === 'en'
        ? "Best garam masala I've ever used! The blend is perfect and the flavor is authentic. My family can taste the difference immediately."
        : "ഞാൻ ഇതുവരെ ഉപയോഗിച്ചിട്ടുള്ളതിൽ വച്ച് ഏറ്റവും മികച്ച ഗരം മസാല! മിശ്രിതം തികഞ്ഞതും രുചി ആധികാരികവുമാണ്. എന്റെ കുടുംബത്തിന് ഉടനെ വ്യത്യാസം അനുഭവപ്പെടുന്നു.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 3,
      name: language === 'en' ? 'Meera Shah' : 'മീര ഷാ',
      location: language === 'en' ? 'Bangalore, Karnataka' : 'ബെംഗളൂരു, കർണാടക',
      rating: 5,
      text: language === 'en'
        ? "As a professional chef, I'm very particular about spice quality. Zaika Spices exceeds all my expectations with their freshness and purity."
        : "ഒരു പ്രൊഫഷണൽ ഷെഫ് എന്ന നിലയിൽ, മസാലയുടെ ഗുണനിലവാരത്തെക്കുറിച്ച് ഞാൻ വളരെ പ്രത്യേകമാണ്. സൈക സ്പൈസസ് അവരുടെ പുതുമയും ശുദ്ധതയും കൊണ്ട് എന്റെ എല്ലാ പ്രതീക്ഷകളും കവിഞ്ഞു.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 ${
            language === 'ml' ? 'malayalam-text' : ''
          }`}>
            {language === 'en' ? 'What Our Customers Say' : 'ഞങ്ങളുടെ ഉപഭോക്താക്കൾ പറയുന്നത്'}
          </h2>
          <p className={`text-xl text-gray-600 max-w-2xl mx-auto ${
            language === 'ml' ? 'malayalam-text' : ''
          }`}>
            {language === 'en'
              ? 'Hear from our satisfied customers who have experienced the authentic taste of our spices'
              : 'ഞങ്ങളുടെ മസാലകളുടെ ആധികാരിക രുചി അനുഭവിച്ച സംതൃപ്ത ഉപഭോക്താക്കളിൽ നിന്ന് കേൾക്കുക'
            }
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="relative group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 text-saffron-200">
                  <Quote className="h-8 w-8" />
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className={`text-gray-700 mb-6 leading-relaxed ${
                  language === 'ml' ? 'malayalam-text text-sm' : ''
                }`}>
                  "{testimonial.text}"
                </p>

                {/* Customer Info */}
                <div className="flex items-center space-x-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className={`font-semibold text-gray-900 ${
                      language === 'ml' ? 'malayalam-text' : ''
                    }`}>
                      {testimonial.name}
                    </h4>
                    <p className={`text-sm text-gray-600 ${
                      language === 'ml' ? 'malayalam-text' : ''
                    }`}>
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="text-center mt-12">
          <div className={`inline-flex items-center justify-center px-6 py-3 bg-green-100 text-green-800 rounded-full ${
            language === 'ml' ? 'malayalam-text' : ''
          }`}>
            <Star className="h-5 w-5 mr-2 fill-current" />
            {language === 'en'
              ? 'Trusted by 10,000+ families across India'
              : 'ഇന്ത്യയിലുടനീളമുള്ള 10,000+ കുടുംബങ്ങൾ വിശ്വസിക്കുന്നു'
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
