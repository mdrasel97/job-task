"use client";

import React from "react";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  PhoneCall,
  Mail,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white py-12">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div className="flex flex-col items-start">
          {/* Logo / Title */}
          <img src="/plumber-logo.png" alt="Logo" className="w-58 h-24" />

          {/* Social Icons */}
          <div className="flex space-x-3">
            <a
              href="#"
              className="bg-blue-600 hover:bg-blue-700 p-2 rounded-full transition text-white"
            >
              <Facebook size={16} />
            </a>
            <a
              href="#"
              className="bg-blue-400 hover:bg-blue-500 p-2 rounded-full transition text-white"
            >
              <Twitter size={16} />
            </a>
            <a
              href="https://www.linkedin.com/in/rasel-developer/"
              className="bg-blue-800 hover:bg-blue-900 p-2 rounded-full transition text-white"
            >
              <Linkedin size={16} />
            </a>
            <a
              href="#"
              className="bg-pink-500 hover:bg-pink-600 p-2 rounded-full transition text-white"
            >
              <Instagram size={16} />
            </a>
          </div>
        </div>

        {/* Our Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Our Services</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-primary transition">
                Plumbing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition">
                Drainage
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition">
                Bathrooms
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition">
                Commercial
              </a>
            </li>
          </ul>
        </div>

        {/* Useful Links */}
        <div className="flex">
          <div>
            <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-primary transition">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Updates
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Rates
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-lg font-semibold mb-4 mt-11"></p>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-primary transition">
                  Customer Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Updates
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Locations
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Sitemap
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-center justify-start gap-4">
              <MapPin />
              <p className="">1 Sail Street, London, SE11 6NQ</p>
            </li>
            <li className="flex items-center justify-start gap-4">
              <Mail />
              <p>enquiries@PlumbingPros.com</p>
            </li>
            <li className="flex items-center justify-start gap-4">
              {" "}
              <PhoneCall />
              <p>020 4527 6474</p>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-10 md:flex items-center max-w-6xl mx-auto justify-between ">
        <div className=" text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Plumbing Pros. All Rights Reserved
        </div>
        <div className="text-gray-500 text-sm text-center">
          <p>Website by IH Adventure And Creative</p>
        </div>
      </div>
    </footer>
  );
}
