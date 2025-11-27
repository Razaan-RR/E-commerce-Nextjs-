"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function FeaturedProducts() {
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: "BDT 12,000",
      image:
        "https://plus.unsplash.com/premium_photo-1678099940967-73fe30680949?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2lyZWxlc3MlMjBoZWFkcGhvbmVzfGVufDB8fDB8fHww",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: "BDT 15,000",
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 3,
      name: "Gaming Mouse",
      price: "BDT 10,000",
      image:
        "https://images.unsplash.com/photo-1628832307345-7404b47f1751?w=600&auto=format&fit=crop&q=60",
    },
    {
      id: 4,
      name: "Bluetooth Speaker",
      price: "BDT 2,000",
      image:
        "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&auto=format&fit=crop&q=60",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-gray-900 text-center">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Link
              key={product.id}
              href="#"
              className="group bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600">
                {product.name}
              </h3>
              <p className="text-gray-600 mt-1">{product.price}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
