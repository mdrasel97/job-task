"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

const accordionsItems = [
  {
    id: 1,
    question: "Do plumbers deal with heating?",
    answer:
      "Some of our local plumbers are also gas registered and experienced working on heating systems, bathrooms and kitchens.",
  },
  {
    id: 2,
    question: "Do you charge a call out fee?",
    answer:
      "Call out fees may vary depending on the service and location. Please contact us for confirmation before booking.",
  },
  {
    id: 3,
    question: "How quickly can your company send out an engineer?",
    answer:
      "Response times depend on your location and the type of service required. Please contact us to confirm availability.",
  },
  {
    id: 4,
    question: "What should I do if I get a water leak?",
    answer:
      "If you notice a water leak, first turn off the main water supply to prevent further damage. Then, contact our support team immediately so we can send an engineer to fix the issue as soon as possible",
  },
];

export default function Faq() {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);
  return (
    <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 overflow-hidden">
      <div className="text-center mb-10">
        <h2
          data-aos="fade-left"
          className="text-3xl sm:text-4xl font-bold mb-3"
        >
          Frequently asked <span className="text-primary">questions</span>
        </h2>
        <p className="text-gray-500 max-w-2xl text-sm mx-auto">
          Here are some common questions our users ask. If you have more, feel
          free to contact us.
        </p>
      </div>

      <Accordion type="single" collapsible className="w-full space-y-4">
        {accordionsItems.map((item) => (
          <AccordionItem
            key={item.id}
            value={item.id}
            className="border rounded-lg"
          >
            <AccordionTrigger className="px-4 text-lg">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-4 text-gray-600">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
