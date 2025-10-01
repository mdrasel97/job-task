"use client";

import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <section className="py-20 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Get In <span className="text-blue-600">Touch</span>
          </h2>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
            Need a plumber urgently? Have questions about our services? Fill out
            the form or contact us directly. We are here 24/7 to help you.
          </p>

          <div className="mt-8 space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              <strong>📍 Address:</strong> 123 Plumbing Street, Dhaka,
              Bangladesh
            </p>
            <p>
              <strong>📞 Phone:</strong> +880 1234-567890
            </p>
            <p>
              <strong>📧 Email:</strong> support@plumberbd.com
            </p>
          </div>
        </div>

        {/* Right Contact Form */}
        <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-2xl shadow-md">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Name
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="mt-2 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Email
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="mt-2 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Write your message..."
                className="mt-2 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700"
              ></textarea>
            </div>

            <Button type="submit" size="lg" className="w-full">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
