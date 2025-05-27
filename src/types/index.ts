export type ServicePackage = {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: number;
  features: string[];
  popular?: boolean;
};

export type TimeSlot = {
  id: string;
  time: string;
  available: boolean;
};

export type Location = {
  id: string;
  name: string;
  address: string;
  city: string;
  phone: string;
  hours: string;
  coordinates: {
    lat: number;
    lng: number;
  };
};

export type Booking = {
  id: string;
  serviceId: string;
  date: string;
  timeSlot: string;
  vehicleType: string;
  locationId: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
};

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
};