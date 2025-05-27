import React from 'react';
import { services } from '../../data/services';
import { Check, ChevronRight, Droplets, Shield, Clock } from 'lucide-react';
import Card, { CardContent, CardFooter } from '../ui/Card';
import Button from '../ui/Button';

const ServiceCard: React.FC<{ service: typeof services[0], index: number }> = ({ service, index }) => {
  // Add a small animation delay based on index
  const animationDelay = `${index * 100}ms`;

  return (
    <Card 
      hoverable 
      className={`h-full flex flex-col transform transition-all duration-500 ${
        service.popular ? 'border-2 border-blue-500 scale-105' : ''
      }`}
      style={{ animationDelay }}
    >
      {service.popular && (
        <div className="bg-blue-500 text-white text-xs font-bold uppercase tracking-wider py-1 px-3 absolute top-0 right-0 rounded-bl-lg rounded-tr-lg">
          Most Popular
        </div>
      )}
      <CardContent className="flex-grow">
        <h3 className="text-xl font-bold text-slate-800 mb-2">{service.name}</h3>
        <div className="flex items-baseline mb-4">
          <span className="text-3xl font-bold text-blue-600">₹{service.price.toFixed(2)}</span>
          <span className="text-slate-500 ml-1">/wash</span>
        </div>
        <p className="text-slate-600 mb-6">{service.description}</p>
        
        <div className="flex items-center text-slate-700 mb-4">
          <Clock className="w-4 h-4 mr-2 text-blue-500" />
          <span>{service.duration} minutes</span>
        </div>
        
        <ul className="space-y-2 mb-6">
          {service.features.map((feature, idx) => (
            <li key={idx} className="flex items-start">
              <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-slate-700">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="bg-white border-t border-slate-100">
        <Button variant="primary" fullWidth>
          Select Package
          <ChevronRight className="ml-1 w-4 h-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Premium Car Wash Services
          </h2>
          <p className="text-lg text-slate-600">
            Choose from our range of professional car wash packages, 
            each designed to give your vehicle the care it deserves.
          </p>
        </div>

        {/* Service Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <div className="inline-flex items-center justify-center bg-blue-100 text-blue-600 w-16 h-16 rounded-full mb-4">
              <Droplets className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Eco-Friendly Products</h3>
            <p className="text-slate-600">We use biodegradable, eco-friendly cleaning solutions that are gentle on your car and the environment.</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <div className="inline-flex items-center justify-center bg-blue-100 text-blue-600 w-16 h-16 rounded-full mb-4">
              <Shield className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Advanced Protection</h3>
            <p className="text-slate-600">Our treatments include protective coatings that help shield your vehicle from environmental damage.</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <div className="inline-flex items-center justify-center bg-blue-100 text-blue-600 w-16 h-16 rounded-full mb-4">
              <Clock className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Quick Service</h3>
            <p className="text-slate-600">Efficient service delivery means you can get back on the road quickly, with a sparkling clean vehicle.</p>
          </div>
        </div>

        {/* Service Packages */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;