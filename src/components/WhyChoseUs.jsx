"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Aos from "aos";
import { Wrench, Clock, BadgeDollarSign, ShieldCheck } from "lucide-react";
import { useEffect } from "react";
import "aos/dist/aos.css";

const reasons = [
  {
    id: 1,
    title: "24/7 Emergency Service",
    description:
      "We are always ready to fix leaks, clogs, and urgent plumbing issues anytime, day or night.",
    icon: Clock,
  },
  {
    id: 2,
    title: "Expert Plumbers",
    description:
      "Our certified and experienced plumbers ensure reliable and professional service every time.",
    icon: Wrench,
  },
  {
    id: 3,
    title: "Affordable Pricing",
    description:
      "We provide high-quality plumbing services at transparent and fair prices.",
    icon: BadgeDollarSign,
  },
  {
    id: 4,
    title: "Guaranteed Work",
    description:
      "All our plumbing work comes with a service guarantee for your peace of mind.",
    icon: ShieldCheck,
  },
];

export default function WhyChooseUs() {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2
          data-aos="fade-right"
          className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white"
        >
          Why Choose <span className="text-primary">Our Plumbing Service?</span>
        </h2>
        <p className="mt-4 text-sm text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          We take pride in providing fast, reliable, and affordable plumbing
          solutions. Here’s why customers trust us.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => (
            <Card
              key={reason.id}
              className="shadow-md hover:shadow-xl transition rounded-2xl hover:bg-primary hover:text-white"
            >
              <CardHeader>
                <reason.icon className="h-10 w-10 hover:text-white mx-auto mb-2" />
                <CardTitle className="text-xl font-semibold">
                  {reason.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className=" text-sm">{reason.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
