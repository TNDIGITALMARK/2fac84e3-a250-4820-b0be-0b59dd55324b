"use client";

import Image from "next/image";
import { Star } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  comment: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah K.",
    location: "New York, USA",
    rating: 5,
    comment: "Flawless planning, unforgettable memories. Couldn't recommend Wayward more!",
    avatar: "/api/placeholder/40/40"
  },
  {
    id: 2,
    name: "Mike R.",
    location: "London, UK",
    rating: 5,
    comment: "Comprehensive itineraries, hidden gems. Every detail was perfectly organized.",
    avatar: "/api/placeholder/40/40"
  },
  {
    id: 3,
    name: "Lisa M.",
    location: "Sydney, AU",
    rating: 5,
    comment: "Adventure planning, endless wonder. The trip exceeded all our expectations!",
    avatar: "/api/placeholder/40/40"
  }
];

export default function Testimonials() {
  return (
    <section className="bg-primary text-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Travelers Say
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Real stories from real adventures. See why thousands of travelers
            trust Wayward with their dream journeys.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20"
            >
              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Comment */}
              <blockquote className="text-white/90 mb-6 text-lg leading-relaxed">
                "{testimonial.comment}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-white font-medium text-sm">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-medium text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-white/70 text-sm">
                    {testimonial.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}