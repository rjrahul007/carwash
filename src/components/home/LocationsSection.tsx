import React from 'react';
import { locations } from '../../data/locations';
import { MapPin, Phone, Clock } from 'lucide-react';
import Card, { CardContent } from '../ui/Card';
import Button from '../ui/Button';

const LocationsSection: React.FC = () => {
  return (
    <section id="locations" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Our Locations
          </h2>
          <p className="text-lg text-slate-600">
            Find the LuxeWash location nearest to you. Each of our facilities features state-of-the-art
            equipment and professional staff ready to serve you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {locations.map((location) => (
            <Card key={location.id} hoverable className="h-full">
              <CardContent>
                <div className="h-48 mb-4 rounded-lg overflow-hidden bg-slate-200">
                  {/* We'd use a map here, but for simplicity showing a placeholder */}
                  <div className="w-full h-full bg-slate-300 flex items-center justify-center">
                    <MapPin className="w-12 h-12 text-slate-500" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-slate-800 mb-2">
                  {location.name}
                </h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                    <p className="text-slate-700">
                      {location.address}<br />
                      {location.city}
                    </p>
                  </div>
                  
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                    <p className="text-slate-700">{location.phone}</p>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                    <p className="text-slate-700">{location.hours}</p>
                  </div>
                </div>
                
                <Button variant="outline" fullWidth>
                  Get Directions
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-slate-700 mb-4">
            Need help finding us? Feel free to contact our customer service for assistance.
          </p>
          <Button variant="primary" className='text-center mx-auto'>
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;