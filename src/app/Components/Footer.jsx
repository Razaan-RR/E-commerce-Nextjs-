"use client";

import React from "react";
import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">

        <div>
          <h2 className="text-xl font-semibold text-white">MyShop</h2>
          <p className="mt-3 text-gray-400">
            Your favorite destination for premium products and amazing deals.
          </p>

          <div className="flex items-center gap-4 mt-4">
            <Link href="/">
              <Facebook className="w-6 h-6 hover:text-white" />
            </Link>
            <Link href="/">
              <Instagram className="w-6 h-6 hover:text-white" />
            </Link>
            <Link href="/">
              <Twitter className="w-6 h-6 hover:text-white" />
            </Link>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-white">Links</h2>
          <ul className="mt-3 space-y-2">
            <li><Link href="/" className="hover:text-white">Home</Link></li>
            <li><Link href="/products" className="hover:text-white">Products</Link></li>
            <li><Link href="/about" className="hover:text-white">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-white">Help</h2>
          <ul className="mt-3 space-y-2">
            <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
            <li><Link href="/shipping" className="hover:text-white">Shipping Info</Link></li>
            <li><Link href="/returns" className="hover:text-white">Returns</Link></li>
            <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
          </ul>
        </div>

      </div>

      <div className="mt-10 border-t border-gray-700 pt-5 text-center text-gray-400">
        © {new Date().getFullYear()} ShopEase. All Rights Reserved by Razaan Reza.
      </div>
    </footer>
  );
}

export default Footer;
