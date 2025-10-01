"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Banner() {
  return (
    <section className="relative w-full mt-16 bg-gradient-to-r from-blue-100 to-blue-200 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
            Reliable <span className="text-blue-600">Plumbing Services</span>{" "}
            You Can Trust
          </h1>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-xl text-sm">
            Fast, affordable, and professional plumbing solutions for your home
            or business. Available 24/7 to fix leaks, install systems, and keep
            your water running smoothly.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <Button size="lg">Book a Plumber</Button>
            <Button size="lg" variant="outline">
              Call Now
            </Button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-end">
          <Image
            src="/banner.jpeg"
            alt="Plumber at work"
            width={450}
            height={350}
            className="rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
