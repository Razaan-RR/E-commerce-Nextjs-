"use client";

import React from "react";
import Image from "next/image";

function AboutPage() {
  return (
    <section className="w-full bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-gray-900 text-center">
          About ShopEase
        </h1>
        <p className="mt-4 text-gray-600 text-center max-w-2xl mx-auto">
          We are committed to bringing you the best shopping experience with high-quality products, secure checkout, and fast delivery.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="w-full">
            <Image
              src="https://plus.unsplash.com/premium_photo-1681488262364-8aeb1b6aac56?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWNvbW1lcmNlfGVufDB8fDB8fHww"
              alt="About ShopEase"
              width={600}
              height={400}
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800">Who We Are</h2>
            <p className="mt-3 text-gray-600 leading-7">
              At <strong>ShopEase</strong>, our goal is to make online shopping simple, enjoyable, and trustworthy. From fashion and electronics to home essentials, we offer a wide selection curated for our customers.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8">Our Mission</h2>
            <p className="mt-3 text-gray-600 leading-7">
              We aim to deliver high-quality products at affordable prices while ensuring a smooth shopping experience through fast delivery, secure payments, and excellent customer support.
            </p>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-white shadow rounded-lg">
            <h3 className="text-3xl font-bold text-gray-900">10K+</h3>
            <p className="text-gray-500">Happy Customers</p>
          </div>
          <div className="p-6 bg-white shadow rounded-lg">
            <h3 className="text-3xl font-bold text-gray-900">5,000+</h3>
            <p className="text-gray-500">Products</p>
          </div>
          <div className="p-6 bg-white shadow rounded-lg">
            <h3 className="text-3xl font-bold text-gray-900">4.8⭐</h3>
            <p className="text-gray-500">Average Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
