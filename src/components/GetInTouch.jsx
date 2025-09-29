"use client";

import React from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export default function GetInTouch() {
  return (
    <section className="w-11/12 py-16 my-16 max-w-6xl mx-auto rounded-2xl bg-primary flex justify-center items-center text-white">
      <div className="text-center max-w-3xl px-4">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get In Touch</h2>
        <p className=" mb-6">
          Contact us now to enquire our plumbing services, whether you have a
          commercial project that requires support, or a domestic plumbing task
          that needs the attention of a trusted professional.
        </p>
        <Button className=" bg-white text-primary hover:bg-blue-100 transition font-semibold">
          Book a Professional Plumber <ArrowRight />
        </Button>
      </div>
    </section>
  );
}
