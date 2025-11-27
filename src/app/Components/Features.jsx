"use client";
import React from "react";

export default function Features() {
  const features = [
    { id: 1, title: "Free Shipping", desc: "On all orders over BDT 5000" },
    { id: 2, title: "Premium Quality", desc: "Top-notch products guaranteed" },
    { id: 3, title: "24/7 Support", desc: "We're here to help anytime" },
    { id: 4, title: "Easy Returns", desc: "Hassle-free returns within 30 days" },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-gray-900">
          Why Shop With Us
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f) => (
            <div
              key={f.id}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
            >
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                {f.title}
              </h3>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
