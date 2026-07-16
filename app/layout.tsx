import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.bhalothiaelectrichub.com"),

  title: {
    default: "Bhalothia Electric Hub",
    template: "%s | Bhalothia Electric Hub",
  },

  description:
    "Bhalothia Electric Hub is an authorized Windson Electric Scooter dealer offering premium electric scooters, test rides, EMI options, and after-sales service.",

  keywords: [
    "Bhalothia Electric Hub",
    "Windson Dealer",
    "Electric Scooter",
    "Electric Bike",
    "EV Showroom",
    "Windson Electric",
    "Electric Scooter Haryana",
    "Electric Scooter Bhiwani",
    "Electric Scooter Behal",
  ],

  authors: [{ name: "Bhalothia Electric Hub" }],
  creator: "Bhalothia Electric Hub",
  publisher: "Bhalothia Electric Hub",

  openGraph: {
    title: "Bhalothia Electric Hub",
    description:
      "Authorized Windson Electric Scooter Dealer in Behal, Haryana.",
    url: "https://www.bhalothiaelectrichub.com",
    siteName: "Bhalothia Electric Hub",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bhalothia Electric Hub",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Bhalothia Electric Hub",
    description: "Authorized Windson Electric Scooter Dealer",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        <main className="pt-24">{children}</main>
      </body>
    </html>
  );
}