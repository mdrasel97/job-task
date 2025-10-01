"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const products = [
  {
    id: 1,
    name: "Premium Pipe Wrench",
    image: "/assets/product1.jpg",
    price: "$25",
  },
  {
    id: 2,
    name: "Leak Detector",
    image: "/assets/product2.avif",
    price: "$40",
  },
  {
    id: 3,
    name: "Adjustable Pliers",
    image: "/assets/product3.avif",
    price: "$15",
  },
  {
    id: 4,
    name: "Pipe Cutter",
    image: "/assets/product4.avif",
    price: "$30",
  },
];

export default function OurBestProduct() {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2
          data-aos="fade-right"
          className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white"
        >
          Our <span className="text-blue-600">Best Products</span>
        </h2>
        <p className="mt-4 text-sm text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          High-quality plumbing tools and equipment trusted by professionals.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden"
            >
              <div className="relative w-full h-38">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {product.name}
                </h3>
                <p className="mt-2 text-blue-600 font-bold">{product.price}</p>
                <Button size="sm" className="mt-4 w-full">
                  Buy Now
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center mt-10">
        <Button>All Products</Button>
      </div>
    </section>
  );
}
