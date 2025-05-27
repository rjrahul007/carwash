import React from 'react';
import Hero from '../components/home/Hero';
import ServicesSection from '../components/home/ServicesSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import LocationsSection from '../components/home/LocationsSection';
import { Sparkles, ShieldCheck, Repeat, Users } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      
      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <Sparkles className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">Premium Quality</h3>
              <p className="text-slate-600">We use only the highest quality products and equipment for exceptional results.</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <ShieldCheck className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">Vehicle Protection</h3>
              <p className="text-slate-600">Our techniques and products are designed to protect your vehicle's finish.</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <Repeat className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">Loyalty Rewards</h3>
              <p className="text-slate-600">Join our membership program for exclusive perks and discounted services.</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">Expert Team</h3>
              <p className="text-slate-600">Our trained professionals take pride in delivering exceptional service.</p>
            </div>
          </div>
        </div>
      </section>
      
      <ServicesSection />
      
      <TestimonialsSection />
      
      {/* CTA Section */}
      <section className="py-20 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute w-64 h-64 rounded-full bg-blue-600 -top-10 -left-10"></div>
          <div className="absolute w-96 h-96 rounded-full bg-blue-400 -bottom-20 -right-20"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready for a Spotless Shine?
            </h2>
            <p className="text-xl text-blue-200 mb-8">
              Book your appointment today and experience the LuxeWash difference.
              Our expert team is ready to give your vehicle the care it deserves.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-lg transition-colors">
                Book Now
              </button>
              <button className="bg-white/10 hover:bg-white/20 text-white font-medium px-8 py-3 rounded-lg transition-colors backdrop-blur-sm">
                View Membership Plans
              </button>
            </div>
          </div>
        </div>
      </section>
      
      <LocationsSection />
      
      {/* FAQ Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-slate-600">
              Have questions about our services? Find answers to common inquiries below.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {[
                {
                  question: "How long does a typical car wash take?",
                  answer: "The duration varies based on the package you choose. Our Essential Shine takes about 20 minutes, while our premium packages like Executive Detail can take up to 90 minutes. The Ceramic Shield requires approximately 3 hours for the complete application and curing process."
                },
                {
                  question: "Do I need to make an appointment?",
                  answer: "While we do accept walk-ins when possible, we highly recommend booking an appointment to ensure availability and minimize wait times. You can easily schedule your appointment online or through our mobile app."
                },
                {
                  question: "What's included in your interior detailing?",
                  answer: "Our interior detailing includes thorough vacuuming, dust removal from all surfaces, cleaning of all plastic and vinyl components, leather conditioning (if applicable), carpet shampooing, window cleaning, and air freshening."
                },
                {
                  question: "Do you offer any guarantees on your services?",
                  answer: "Yes, we stand behind the quality of our work. If you're not completely satisfied with your wash, let us know within 24 hours and we'll happily rewash your vehicle at no additional charge. Our Ceramic Shield package comes with a 3-month guarantee."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <details className="group">
                    <summary className="flex justify-between items-center font-medium cursor-pointer p-4">
                      <span className="text-slate-800">{faq.question}</span>
                      <span className="transition group-open:rotate-180">
                        <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24">
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </summary>
                    <p className="text-slate-600 p-4 pt-0 border-t border-slate-100">{faq.answer}</p>
                  </details>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;