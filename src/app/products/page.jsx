"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Products() {
  const router = useRouter();

  const products = [
    { id: 1, name: "Wireless Headphones", desc: "High-quality sound", price: "BDT 12,000", img: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=400&q=80" },
    { id: 2, name: "Smart Watch", desc: "Track your fitness", price: "BDT 15,000", img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80" },
    { id: 3, name: "Gaming Mouse", desc: "Ergonomic & responsive", price: "BDT 10,000", img: "https://images.unsplash.com/photo-1628832307345-7404b47f1751?auto=format&fit=crop&w=400&q=80" },
    { id: 4, name: "Bluetooth Speaker", desc: "Portable & loud", price: "BDT 2,000", img: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=400&q=80" },
    { id: 5, name: "Laptop Backpack", desc: "Durable & spacious", price: "BDT 3,500", img: "https://images.unsplash.com/photo-1630522521795-7f59aa2aae1e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGFwdG9wJTIwYmFncGFja3xlbnwwfHwwfHx8MA%3D%3D" },
    { id: 6, name: "Wireless Charger", desc: "Fast charging pad", price: "BDT 1,200", img: "https://images.unsplash.com/photo-1615526675159-e248c3021d3f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2lyZWxlc3MlMjBjaGFyZ2VyfGVufDB8fDB8fHww" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-2 text-gray-900">Our Products</h1>
      <p className="text-gray-600 mb-6">Browse through our latest gadgets and accessories.</p>

      <div className="flex mb-6 gap-4">
        <input
          type="text"
          placeholder="Search products..."
          className="flex-1 border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <select className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option>All Categories</option>
          <option>Electronics</option>
          <option>Accessories</option>
          <option>Gadgets</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p) => (
          <div key={p.id} className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition hover:-translate-y-1">
            <Image src={p.img} alt={p.name} width={400} height={300} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{p.name}</h2>
              <p className="text-gray-600 text-sm line-clamp-2">{p.desc}</p>
              <p className="text-gray-900 font-bold mt-2">{p.price}</p>
              <button
                onClick={() => router.push(`/products/${p.id}`)}
                className="mt-3 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
              >
                Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
