export type Product = {
  slug: string;
  name: string;
  brand: string;
  category: string;

  price: string;
  range: string;
  speed: string;

  battery: string;
  motor: string;
  charging: string;
  warranty: string;

  weight: string;
  brakes: string;
  tyres: string;
  groundClearance: string;
  seatHeight: string;

  licenseRequired: boolean;
  registrationRequired: boolean;

  image: string;
  colors: string[];
};

export const products: Product[] = [
  {
    slug: "ampra",
    name: "Ampra",
    brand: "Windson",
    category: "Electric Scooter",

    price: "₹89,999",
    range: "120 KM",
    speed: "65 km/h",

    battery: "60V 30Ah Lithium",
    motor: "1500W BLDC",
    charging: "4-5 Hours",
    warranty: "3 Years",

    weight: "92 kg",
    brakes: "Front Disc / Rear Drum",
    tyres: "Tubeless",
    groundClearance: "170 mm",
    seatHeight: "780 mm",

    licenseRequired: true,
    registrationRequired: true,

    image: "/products/ampra.png",
    colors: ["White", "Black", "Blue"],
  },

  {
    slug: "spirit-pro",
    name: "Spirit Pro",
    brand: "Windson",
    category: "Electric Scooter",

    price: "₹99,999",
    range: "140 KM",
    speed: "70 km/h",

    battery: "72V 32Ah Lithium",
    motor: "2000W BLDC",
    charging: "4 Hours",
    warranty: "3 Years",

    weight: "95 kg",
    brakes: "Front Disc / Rear Disc",
    tyres: "Tubeless",
    groundClearance: "175 mm",
    seatHeight: "785 mm",

    licenseRequired: true,
    registrationRequired: true,

    image: "/products/spirit-pro.png",
    colors: ["Black", "Red", "Blue"],
  },

  {
    slug: "spirit-plus",
    name: "Spirit+",
    brand: "Windson",
    category: "Electric Scooter",

    price: "₹1,09,999",
    range: "160 KM",
    speed: "75 km/h",

    battery: "72V 40Ah Lithium",
    motor: "2500W BLDC",
    charging: "3.5 Hours",
    warranty: "3 Years",

    weight: "98 kg",
    brakes: "Front Disc / Rear Disc",
    tyres: "Tubeless",
    groundClearance: "180 mm",
    seatHeight: "790 mm",

    licenseRequired: true,
    registrationRequired: true,

    image: "/products/spirit-plus.png",
    colors: ["White", "Grey", "Black"],
  },
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}