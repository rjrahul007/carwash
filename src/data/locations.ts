import { Location } from "../types";

export const locations: Location[] = [
  {
    id: "delhi-central",
    name: "Connaught Place Flagship",
    address: "A-12, Connaught Place",
    city: "New Delhi, Delhi 110001",
    phone: "+91 11 2345 6789",
    hours: "Mon-Sat: 9am-9pm, Sun: 10am-6pm",
    coordinates: {
      lat: 28.6315,
      lng: 77.2167,
    },
  },
  {
    id: "mumbai-west",
    name: "Bandra Express",
    address: "24th Road, Bandra West",
    city: "Mumbai, Maharashtra 400050",
    phone: "+91 22 2654 3210",
    hours: "Mon-Sat: 10am-8pm, Sun: 11am-7pm",
    coordinates: {
      lat: 19.0583,
      lng: 72.8306,
    },
  },
  {
    id: "bangalore-east",
    name: "Indiranagar Luxury",
    address: "100 Feet Road, Indiranagar",
    city: "Bengaluru, Karnataka 560038",
    phone: "+91 80 2299 4411",
    hours: "Mon-Sat: 9am-10pm, Sun: 10am-8pm",
    coordinates: {
      lat: 12.9719,
      lng: 77.6412,
    },
  },
];
