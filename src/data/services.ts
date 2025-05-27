import { ServicePackage } from "../types";

export const services: ServicePackage[] = [
  {
    id: "basic-wash",
    name: "Essential Shine",
    description:
      "A quick exterior wash to remove dirt and grime, leaving your vehicle with a basic shine.",
    price: 1499,
    duration: 20,
    features: [
      "Exterior wash",
      "Wheel cleaning",
      "Basic dry",
      "Windows cleaned",
    ],
  },
  {
    id: "deluxe-wash",
    name: "Premium Refresh",
    description:
      "A comprehensive wash package for both exterior and interior, perfect for regular maintenance.",
    price: 2499,
    duration: 45,
    features: [
      "Everything in Essential Shine",
      "Interior vacuum",
      "Dashboard cleaning",
      "Door jamb cleaning",
      "Tire dressing",
    ],
    popular: true,
  },
  {
    id: "ultimate-wash",
    name: "Executive Detail",
    description:
      "Our signature package with premium wax, interior detailing, and advanced protective coatings.",
    price: 3999,
    duration: 90,
    features: [
      "Everything in Premium Refresh",
      "Hand wax application",
      "Interior detailing",
      "Leather conditioning",
      "Air freshener",
      "Triple-coat protectant",
      "Headlight restoration",
    ],
  },
  {
    id: "ceramic-coating",
    name: "Ceramic Shield",
    description:
      "Long-lasting ceramic coating that provides superior protection and a mirror-like finish for months.",
    price: 6999,
    duration: 180,
    features: [
      "Clay bar treatment",
      "Paint correction",
      "Ceramic coating application",
      "Hydrophobic protection",
      "UV damage prevention",
      "Complete interior detailing",
      "3-month guarantee",
    ],
  },
];

export const additionalServices = [
  { id: "pet-hair", name: "Pet Hair Removal", price: 999 },
  { id: "engine-bay", name: "Engine Bay Cleaning", price: 1999 },
  { id: "headlight", name: "Headlight Restoration", price: 1499 },
  { id: "odor", name: "Odor Elimination", price: 1299 },
];

export const vehicleTypes = [
  { id: "sedan", name: "Sedan", surcharge: 0 },
  { id: "suv", name: "SUV / Crossover", surcharge: 499 },
  { id: "truck", name: "Truck", surcharge: 799 },
  { id: "van", name: "Van", surcharge: 799 },
  { id: "luxury", name: "Luxury / Sports Car", surcharge: 999 },
];
