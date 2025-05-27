import React, { useState } from 'react';
import { Calendar, Clock, Car, MapPin, Plus, Minus } from 'lucide-react';
import Button from '../ui/Button';
import { services, additionalServices, vehicleTypes } from '../../data/services';
import { locations } from '../../data/locations';

// Mock time slots for demo
const generateTimeSlots = () => {
  const slots = [];
  for (let hour = 8; hour <= 19; hour++) {
    const time = `${hour % 12 === 0 ? 12 : hour % 12}:00 ${hour < 12 ? 'AM' : 'PM'}`;
    slots.push({
      id: `slot-${hour}`,
      time,
      available: Math.random() > 0.3 // Random availability
    });
  }
  return slots;
};

const BookingForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('');
  const [selectedVehicle, setSelectedVehicle] = useState('sedan');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  
  const timeSlots = generateTimeSlots();
  
  // Format date for display
  const formatDate = (dateString: string) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      month: 'long', 
      day: 'numeric'
    });
  };
  
  // Calculate total price
  const calculateTotal = () => {
    if (!selectedService) return 0;
    
    const service = services.find(s => s.id === selectedService);
    if (!service) return 0;
    
    let total = service.price;
    
    // Add vehicle surcharge
    const vehicle = vehicleTypes.find(v => v.id === selectedVehicle);
    if (vehicle) {
      total += vehicle.surcharge;
    }
    
    // Add selected addons
    selectedAddons.forEach(addonId => {
      const addon = additionalServices.find(a => a.id === addonId);
      if (addon) {
        total += addon.price;
      }
    });
    
    return total;
  };
  
  const toggleAddon = (addonId: string) => {
    if (selectedAddons.includes(addonId)) {
      setSelectedAddons(selectedAddons.filter(id => id !== addonId));
    } else {
      setSelectedAddons([...selectedAddons, addonId]);
    }
  };
  
  const nextStep = () => {
    if (step < 4) setStep(step + 1);
  };
  
  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };
  
  // Render progress indicator
  const renderProgress = () => {
    return (
      <div className="mb-8">
        <div className="flex items-center justify-between">
          {['Select Service', 'Choose Date & Time', 'Vehicle Details', 'Review & Confirm'].map((label, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                step > index + 1 ? 'bg-green-500 text-white' : 
                step === index + 1 ? 'bg-blue-600 text-white' : 
                'bg-slate-200 text-slate-500'
              }`}>
                {step > index + 1 ? '✓' : index + 1}
              </div>
              <span className={`text-xs mt-2 ${
                step === index + 1 ? 'text-blue-600 font-medium' : 'text-slate-500'
              }`}>
                {label}
              </span>
            </div>
          ))}
        </div>
        
        <div className="mt-2 flex justify-between">
          <div className="h-1 bg-green-500" style={{ width: `${(step - 1) * 33.33}%` }}></div>
          <div className="h-1 bg-blue-600" style={{ width: '33.33%', transform: `translateX(-${(step - 1) * 100}%)` }}></div>
          <div className="h-1 bg-slate-200" style={{ width: `${(4 - step) * 33.33}%` }}></div>
        </div>
      </div>
    );
  };
  
  // Step 1: Service Selection
  const renderServiceSelection = () => {
    return (
      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-slate-800">Select Your Wash Package</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((service) => (
            <div 
              key={service.id}
              className={`border rounded-lg p-4 cursor-pointer transition-all ${
                selectedService === service.id 
                  ? 'border-blue-500 bg-blue-50' 
                  : 'border-slate-200 hover:border-blue-300'
              }`}
              onClick={() => setSelectedService(service.id)}
            >
              <div className="flex justify-between">
                <h4 className="font-medium text-slate-800">{service.name}</h4>
                <span className="font-semibold text-blue-600">${service.price.toFixed(2)}</span>
              </div>
              <p className="text-sm text-slate-600 mt-1">{service.description}</p>
              <div className="flex items-center text-slate-700 text-sm mt-2">
                <Clock className="w-4 h-4 mr-1 text-slate-400" />
                <span>{service.duration} minutes</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-end mt-8">
          <Button 
            variant="primary"
            onClick={nextStep}
            disabled={!selectedService}
          >
            Continue
          </Button>
        </div>
      </div>
    );
  };
  
  // Step 2: Date & Time Selection
  const renderDateTimeSelection = () => {
    return (
      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-slate-800">Choose Date & Time</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Date Selection */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              <Calendar className="w-4 h-4 inline mr-1" />
              Select Date
            </label>
            <input
              type="date"
              className="w-full p-2 border border-slate-300 rounded-md"
              min={new Date().toISOString().split('T')[0]}
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
            />
            {selectedDate && (
              <p className="text-slate-600 text-sm mt-2">
                {formatDate(selectedDate)}
              </p>
            )}
          </div>
          
          {/* Time Selection */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              <Clock className="w-4 h-4 inline mr-1" />
              Select Time
            </label>
            <div className="grid grid-cols-3 gap-2">
              {timeSlots.map((slot) => (
                <button
                  key={slot.id}
                  className={`p-2 text-sm rounded-md transition-colors ${
                    !slot.available 
                      ? 'bg-slate-100 text-slate-400 cursor-not-allowed' 
                      : selectedTimeSlot === slot.id
                        ? 'bg-blue-600 text-white'
                        : 'bg-white border border-slate-200 text-slate-700 hover:border-blue-300'
                  }`}
                  onClick={() => slot.available && setSelectedTimeSlot(slot.id)}
                  disabled={!slot.available}
                >
                  {slot.time}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        {/* Location Selection */}
        <div className="mt-6">
          <label className="block text-sm font-medium text-slate-700 mb-2">
            <MapPin className="w-4 h-4 inline mr-1" />
            Select Location
          </label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {locations.map((location) => (
              <div
                key={location.id}
                className={`border p-3 rounded-md cursor-pointer ${
                  selectedLocation === location.id 
                    ? 'border-blue-500 bg-blue-50' 
                    : 'border-slate-200 hover:border-blue-300'
                }`}
                onClick={() => setSelectedLocation(location.id)}
              >
                <h4 className="font-medium text-slate-800">{location.name}</h4>
                <p className="text-xs text-slate-600 mt-1">{location.address}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex justify-between mt-8">
          <Button variant="outline" onClick={prevStep}>
            Back
          </Button>
          <Button 
            variant="primary"
            onClick={nextStep}
            disabled={!selectedDate || !selectedTimeSlot || !selectedLocation}
          >
            Continue
          </Button>
        </div>
      </div>
    );
  };
  
  // Step 3: Vehicle Details
  const renderVehicleDetails = () => {
    return (
      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-slate-800">Vehicle Details</h3>
        
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            <Car className="w-4 h-4 inline mr-1" />
            Vehicle Type
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {vehicleTypes.map((vehicle) => (
              <div
                key={vehicle.id}
                className={`border p-3 rounded-md cursor-pointer ${
                  selectedVehicle === vehicle.id 
                    ? 'border-blue-500 bg-blue-50' 
                    : 'border-slate-200 hover:border-blue-300'
                }`}
                onClick={() => setSelectedVehicle(vehicle.id)}
              >
                <div className="flex justify-between">
                  <h4 className="font-medium text-slate-800">{vehicle.name}</h4>
                  {vehicle.surcharge > 0 && (
                    <span className="text-sm text-slate-600">+${vehicle.surcharge}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-6">
          <h4 className="text-sm font-medium text-slate-700 mb-3">Additional Services</h4>
          
          <div className="space-y-3">
            {additionalServices.map((addon) => (
              <div
                key={addon.id}
                className={`border p-3 rounded-md cursor-pointer ${
                  selectedAddons.includes(addon.id) 
                    ? 'border-blue-500 bg-blue-50' 
                    : 'border-slate-200 hover:border-blue-300'
                }`}
                onClick={() => toggleAddon(addon.id)}
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    {selectedAddons.includes(addon.id) 
                      ? <Minus className="w-4 h-4 text-blue-600 mr-2" /> 
                      : <Plus className="w-4 h-4 text-slate-400 mr-2" />
                    }
                    <h4 className="font-medium text-slate-800">{addon.name}</h4>
                  </div>
                  <span className="font-medium text-blue-600">+${addon.price.toFixed(2)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex justify-between mt-8">
          <Button variant="outline" onClick={prevStep}>
            Back
          </Button>
          <Button variant="primary" onClick={nextStep}>
            Review Booking
          </Button>
        </div>
      </div>
    );
  };
  
  // Step 4: Review & Confirm
  const renderReviewConfirm = () => {
    const service = services.find(s => s.id === selectedService);
    const location = locations.find(l => l.id === selectedLocation);
    const vehicle = vehicleTypes.find(v => v.id === selectedVehicle);
    const selectedTimeSlotObj = timeSlots.find(t => t.id === selectedTimeSlot);
    
    return (
      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-slate-800">Review Your Booking</h3>
        
        <div className="bg-slate-50 p-4 rounded-lg">
          <div className="space-y-4">
            <div className="flex justify-between pb-3 border-b border-slate-200">
              <span className="text-slate-600">Service:</span>
              <span className="font-medium text-slate-800">{service?.name}</span>
            </div>
            
            <div className="flex justify-between pb-3 border-b border-slate-200">
              <span className="text-slate-600">Date & Time:</span>
              <span className="font-medium text-slate-800">
                {formatDate(selectedDate)} at {selectedTimeSlotObj?.time}
              </span>
            </div>
            
            <div className="flex justify-between pb-3 border-b border-slate-200">
              <span className="text-slate-600">Location:</span>
              <span className="font-medium text-slate-800">{location?.name}</span>
            </div>
            
            <div className="flex justify-between pb-3 border-b border-slate-200">
              <span className="text-slate-600">Vehicle Type:</span>
              <span className="font-medium text-slate-800">{vehicle?.name}</span>
            </div>
            
            {selectedAddons.length > 0 && (
              <div className="pb-3 border-b border-slate-200">
                <span className="text-slate-600">Additional Services:</span>
                <ul className="mt-1">
                  {selectedAddons.map((addonId) => {
                    const addon = additionalServices.find(a => a.id === addonId);
                    return (
                      <li key={addonId} className="flex justify-between text-sm">
                        <span>{addon?.name}</span>
                        <span>${addon?.price.toFixed(2)}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
            
            <div className="flex justify-between pt-2">
              <span className="text-lg font-semibold text-slate-800">Total:</span>
              <span className="text-lg font-bold text-blue-600">${calculateTotal().toFixed(2)}</span>
            </div>
          </div>
        </div>
        
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h4 className="text-sm font-semibold text-blue-800 mb-2">Important Information:</h4>
          <ul className="text-sm text-blue-700 space-y-1">
            <li>• Please arrive 10 minutes before your scheduled time.</li>
            <li>• Cancellations must be made at least 2 hours in advance.</li>
            <li>• Payment will be collected at the location.</li>
          </ul>
        </div>
        
        <div className="flex justify-between mt-8">
          <Button variant="outline" onClick={prevStep}>
            Back
          </Button>
          <Button variant="primary">
            Confirm Booking
          </Button>
        </div>
      </div>
    );
  };
  
  return (
    <div className="max-w-3xl mx-auto">
      {renderProgress()}
      
      <div className="bg-white rounded-xl shadow-lg p-6">
        {step === 1 && renderServiceSelection()}
        {step === 2 && renderDateTimeSelection()}
        {step === 3 && renderVehicleDetails()}
        {step === 4 && renderReviewConfirm()}
      </div>
    </div>
  );
};

export default BookingForm;