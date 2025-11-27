"use client";

import React from "react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";

export default function ProductDetailsPage() {
  const { id } = useParams();
  const router = useRouter();

  const products = [
    { id: "1", name: "Wireless Headphones", price: "BDT 12,000", img: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=800&q=80", desc: "Experience premium sound quality with these wireless headphones. Comfortable design, long-lasting battery, and crystal-clear audio make it perfect for music lovers and gamers alike." },
    { id: "2", name: "Smart Watch", price: "BDT 15,000", img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80", desc: "Track your fitness, monitor your health, and stay connected with this stylish smart watch." },
    { id: "3", name: "Gaming Mouse", price: "BDT 10,000", img: "https://images.unsplash.com/photo-1628832307345-7404b47f1751?auto=format&fit=crop&w=800&q=80", desc: "Ergonomic design with responsive buttons, perfect for gamers seeking precision." },
    { id: "4", name: "Bluetooth Speaker", price: "BDT 2,000", img: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=800&q=80", desc: "Portable and loud, perfect for parties or outdoor use." },
    { id: "5", name: "Laptop Backpack", price: "BDT 3,500", img: "https://images.unsplash.com/photo-1630522521795-7f59aa2aae1e?w=800&auto=format&fit=crop&q=60", desc: "Durable, spacious, and stylish backpack for your laptop and essentials." },
    { id: "6", name: "Wireless Charger", price: "BDT 1,200", img: "https://images.unsplash.com/photo-1615526675159-e248c3021d3f?w=800&auto=format&fit=crop&q=60", desc: "Fast wireless charging pad compatible with most devices." },
  ];

  const product = products.find((p) => p.id === id);

  if (!product) return <div className="text-center py-12">Product not found</div>;

  return (
    <div className="max-w-5xl mx-auto py-12 px-4">
      <button
        onClick={() => router.back()}
        className="mb-6 text-blue-600 hover:underline"
      >
        &larr; Back
      </button>

      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <Image
          src={product.img}
          alt={product.name}
          width={800}
          height={400}
          className="w-full h-96 object-cover"
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-700 mb-4">{product.desc}</p>
          <div className="flex flex-col sm:flex-row sm:justify-between text-gray-600 mb-4">
            <span><strong>Price:</strong> {product.price}</span>
          </div>
          <button className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
