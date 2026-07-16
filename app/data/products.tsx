export type Product = {
  slug: string;
  name: string;
  image: string;
  price: string;
  battery: string;
  range: string;
  topSpeed: string;
  chargingTime: string;
  warranty: string;
  colors: string[];
};

export const products: Product[] = [
  {
    slug: "windson-classic",
    name: "Windson Classic",
    image: "/scooter1.png",
    price: "₹69,999",
    battery: "60V 30Ah Lithium",
    range: "80 KM",
    topSpeed: "45 KM/H",
    chargingTime: "4-5 Hours",
    warranty: "3 Years",
    colors: ["White", "Black", "Blue"],
  },
  {
    slug: "windson-premium",
    name: "Windson Premium",
    image: "/scooter2.png",
    price: "₹84,999",
    battery: "72V 32Ah Lithium",
    range: "100 KM",
    topSpeed: "55 KM/H",
    chargingTime: "4 Hours",
    warranty: "3 Years",
    colors: ["Blue", "Grey", "Red"],
  },
  {
    slug: "windson-smart",
    name: "Windson Smart",
    image: "/scooter3.png",
    price: "₹79,999",
    battery: "72V 30Ah Lithium",
    range: "90 KM",
    topSpeed: "50 KM/H",
    chargingTime: "4-5 Hours",
    warranty: "3 Years",
    colors: ["Silver", "Black"],
  },
  {
    slug: "windson-pro",
    name: "Windson Pro",
    image: "/scooter4.png",
    price: "₹89,999",
    battery: "72V 40Ah Lithium",
    range: "120 KM",
    topSpeed: "65 KM/H",
    chargingTime: "5 Hours",
    warranty: "5 Years",
    colors: ["Black", "Blue"],
  },
];