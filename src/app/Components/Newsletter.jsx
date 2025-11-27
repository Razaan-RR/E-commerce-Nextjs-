"use client";
import React, { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  return (
    <section className="py-16 bg-blue-50">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
          Join Our Newsletter
        </h2>
        <p className="text-gray-700 mb-8">
          Subscribe for updates on new products, exclusive deals, and discounts.
        </p>
        <form className="flex flex-col sm:flex-row justify-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-auto"
          />
          <button className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
