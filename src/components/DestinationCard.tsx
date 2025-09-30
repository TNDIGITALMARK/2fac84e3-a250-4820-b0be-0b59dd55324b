"use client";

import Image from "next/image";
import { Star, MapPin, Calendar, Users } from "lucide-react";

interface DestinationCardProps {
  title: string;
  location: string;
  image: string;
  rating: number;
  reviewCount: number;
  duration: string;
  groupSize: string;
  price: number;
  originalPrice?: number;
  description: string;
  features: string[];
}

export default function DestinationCard({
  title,
  location,
  image,
  rating,
  reviewCount,
  duration,
  groupSize,
  price,
  originalPrice,
  description,
  features,
}: DestinationCardProps) {
  return (
    <div className="bg-white light-bg rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover hover:scale-105 transition-transform duration-300"
        />
        {originalPrice && (
          <div className="absolute top-3 right-3 bg-accent text-white px-2 py-1 rounded-md text-sm font-medium">
            Save ${originalPrice - price}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-xl font-semibold text-black-bold">{title}</h3>
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm text-black-secondary">
              {rating} ({reviewCount})
            </span>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center gap-1 mb-3">
          <MapPin className="h-4 w-4 text-gray-400" />
          <span className="text-black-secondary text-sm">{location}</span>
        </div>

        {/* Description */}
        <p className="text-black-secondary text-sm mb-4 line-clamp-2">{description}</p>

        {/* Features */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {features.slice(0, 3).map((feature, index) => (
              <span
                key={index}
                className="bg-gray-100 text-black-primary px-2 py-1 rounded-md text-xs"
              >
                {feature}
              </span>
            ))}
            {features.length > 3 && (
              <span className="text-black-tertiary text-xs">
                +{features.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Trip Details */}
        <div className="flex items-center gap-4 mb-4 text-sm text-black-secondary">
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            <span>{groupSize}</span>
          </div>
        </div>

        {/* Price and Button */}
        <div className="flex items-center justify-between">
          <div>
            {originalPrice && (
              <span className="text-black-tertiary line-through text-sm mr-2">
                ${originalPrice}
              </span>
            )}
            <span className="text-2xl font-bold text-black-bold">
              ${price.toLocaleString()}
            </span>
            <span className="text-black-secondary text-sm ml-1">per person</span>
          </div>
          <button className="bg-accent hover:bg-accent-light text-white px-4 py-2 rounded-md font-medium transition-colors">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}