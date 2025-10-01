"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <section className="py-20 mt-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Image */}
        <div className="flex justify-center md:justify-start">
          <Image
            src="/about-plumber.jpg" // replace with your image
            alt="Plumber at work"
            width={500}
            height={400}
            className="rounded-2xl shadow-lg object-cover"
          />
        </div>

        {/* Right Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            About <span className="text-blue-600">Our Plumbing Service</span>
          </h2>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
            We are a team of professional plumbers with years of experience in
            delivering top-notch plumbing solutions. From fixing leaks and
            installing pipes to handling emergency repairs, we provide reliable,
            affordable, and customer-friendly services 24/7.
          </p>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Our mission is to ensure your water systems run smoothly and safely.
            We take pride in being the go-to plumbers for homeowners and
            businesses alike.
          </p>

          <div className="mt-6">
            <Button size="lg">Learn More</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
