"use client";

import Aos from "aos";
import Image from "next/image";
import { useEffect } from "react";
import Marquee from "react-fast-marquee";
import "aos/dist/aos.css";

const partners = [
  { id: 1, name: "PipeMaster", logo: "/partners/pipemaster.png" },
  { id: 2, name: "AquaFlow", logo: "/partners/aquaflow.png" },
  { id: 3, name: "WaterPro", logo: "/partners/waterpro.png" },
  { id: 4, name: "FixIt", logo: "/partners/fixit.png" },
  { id: 5, name: "PlumbGuard", logo: "/partners/plumbguard.png" },
  { id: 6, name: "PipeKing", logo: "/partners/pipeking.png" },
  { id: 7, name: "FlowTech", logo: "/partners/flowtech.png" },
];

export default function OurTrustedPartners() {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);
  return (
    <section className="py-16 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2
          data-aos="fade-left"
          className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white"
        >
          Our Trusted <span className="text-primary">Partners</span>
        </h2>
        <p className="mt-4 text-sm text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          We proudly collaborate with leading plumbing suppliers and trusted
          brands to deliver the highest quality service.
        </p>

        {/* Marquee Logos */}
        <div className="mt-12">
          <Marquee pauseOnHover={true} speed={50} gradient={false}>
            {partners.map((partner) => (
              <div
                key={partner.id}
                className="flex items-center justify-center mx-8 grayscale hover:grayscale-0 transition"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={140}
                  height={70}
                  className="object-contain"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
