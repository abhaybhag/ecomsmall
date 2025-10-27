import React from 'react'
import Header from '../common/Header'

export default function Aboutus() {
    return (
        <>
           <body class="bg-gray-100 font-sans text-gray-700">
  <div class="container mx-auto px-6 py-12">
    <div class="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-8">
      <h1 class="text-4xl font-thin text-center mb-6 text-indigo-600">About Us</h1>

      <p class="text-gray-600 leading-relaxed mb-6">
        Welcome to <span class="font-semibold text-indigo-500">ShopEase</span> — your trusted online store for
        everything stylish, smart, and affordable! We’re a passionate team dedicated to bringing you
        high-quality products with an easy, enjoyable shopping experience.
      </p>

      <p class="text-gray-600 leading-relaxed mb-6">
        Founded with a simple idea — <span class="italic">shopping should be fun, fast, and reliable</span> — we’ve
        built a platform where quality meets convenience. From trendy fashion to home essentials,
        we carefully curate every product to make sure you get only the best.
      </p>

      <div class="mt-10">
        <h2 class="text-2xl font-semibold mb-3 text-center text-gray-800">Our Mission</h2>
        <p class="text-gray-600 leading-relaxed text-center">
          To make online shopping effortless and enjoyable by offering top-quality products,
          honest pricing, and outstanding customer service.
        </p>
      </div>

      <div class="mt-10">
        <h2 class="text-2xl font-semibold mb-3 text-center text-gray-800">Why Shop With Us?</h2>
        <ul class="text-gray-600 space-y-2 max-w-md mx-auto">
          <li>🛍️ Wide range of premium products at unbeatable prices</li>
          <li>🚚 Fast, reliable, and trackable shipping</li>
          <li>💳 Secure payment options and easy checkout</li>
          <li>📞 24/7 customer support for your peace of mind</li>
          <li>💬 Hassle-free returns and refunds</li>
        </ul>
      </div>

      <div class="mt-12 text-center">
        <h2 class="text-2xl font-semibold mb-3 text-gray-800">Our Story</h2>
        <p class="text-gray-600 leading-relaxed mb-6">
          What started as a small idea in a room full of passion has grown into a thriving online
          store trusted by thousands of happy customers. We believe shopping online should feel
          personal — so every order, every detail, and every product matters to us.
        </p>

        <p class="text-gray-600 leading-relaxed">
          Whether you’re upgrading your wardrobe or gifting someone special, 
          <span class="font-semibold text-indigo-500">ShopEase</span> is here to make it special.
        </p>
      </div>

      <div class="mt-12 text-center">
        <a
          href="index.html"
          class="inline-block px-6 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition-colors"
        >
          Start Shopping
        </a>
      </div>
    </div>
  </div>
</body>

        </>
    )
}
