"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Wrench, Clock, BadgeDollarSign, ShieldCheck } from "lucide-react";

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
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
          Why Choose{" "}
          <span className="text-blue-600">Our Plumbing Service?</span>
        </h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          We take pride in providing fast, reliable, and affordable plumbing
          solutions. Here’s why customers trust us.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => (
            <Card
              key={reason.id}
              className="shadow-md hover:shadow-xl transition rounded-2xl"
            >
              <CardHeader>
                <reason.icon className="h-10 w-10 text-blue-600 mx-auto mb-2" />
                <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">
                  {reason.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {reason.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
