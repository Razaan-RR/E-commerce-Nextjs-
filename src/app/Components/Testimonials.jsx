'use client'
import React from 'react'
import Image from 'next/image'

export default function Testimonials() {
  const reviews = [
    {
      id: 1,
      name: 'Sarah Khan',
      feedback:
        'Amazing service! The product quality exceeded my expectations. Highly recommended!',
      avatar: 'https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybHxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      id: 2,
      name: 'Rafi Ahmed',
      feedback:
        'Fast delivery and excellent customer support. I will definitely shop again.',
      avatar: 'https://images.unsplash.com/photo-1554126807-6b10f6f6692a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ym95fGVufDB8fDB8fHww',
    },
    {
      id: 3,
      name: 'Tania Hossain',
      feedback:
        'Loved the website experience! Easy to navigate and find products.',
      avatar: 'https://plus.unsplash.com/premium_photo-1670282393309-70fd7f8eb1ef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2lybHxlbnwwfHwwfHx8MA%3D%3D',
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-gray-900">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
            >
              <div className="mx-auto mb-4 w-16 h-16 relative">
                <Image
                  src={review.avatar}
                  alt={review.name}
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <p className="text-gray-700 mb-4">{review.feedback}</p>
              <h3 className="font-semibold text-gray-900">{review.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
