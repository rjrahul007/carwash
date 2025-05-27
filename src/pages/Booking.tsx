import React from 'react';
import BookingForm from '../components/booking/BookingForm';

const Booking: React.FC = () => {
  return (
    <div className="pt-24 pb-16 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Book Your Car Wash
          </h1>
          <p className="text-lg text-slate-600">
            Select your preferred service, date, and time to schedule your next car wash experience.
          </p>
        </div>
        
        <BookingForm />
      </div>
    </div>
  );
};

export default Booking;