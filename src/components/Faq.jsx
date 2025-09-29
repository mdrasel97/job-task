"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    id: "item-1",
    question: "What is this service about?",
    answer:
      "This service helps you manage your tasks efficiently with an easy-to-use interface and smart tools.",
  },
  {
    id: "item-2",
    question: "Is this mobile friendly?",
    answer:
      "Yes! The platform is fully responsive and works smoothly on desktops, tablets, and smartphones.",
  },
  {
    id: "item-3",
    question: "How can I contact support?",
    answer:
      "You can reach out to our support team via email or live chat 24/7 for assistance.",
  },
  {
    id: "item-4",
    question: "Do you offer a free trial?",
    answer:
      "Yes, we offer a 14-day free trial so you can explore all the features before committing.",
  },
];

export default function FAQ() {
  return (
    <section className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold mb-3">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Here are some common questions our users ask. If you have more, feel
          free to contact us.
        </p>
      </div>

      <Accordion type="single" collapsible className="w-full space-y-4">
        {faqs.map((faq) => (
          <AccordionItem
            key={faq.id}
            value={faq.id}
            className="border rounded-lg"
          >
            <AccordionTrigger className="px-4 text-lg">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-4 text-gray-600">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
