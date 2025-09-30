"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DestinationCard from "@/components/DestinationCard";
import { Search, Filter, SlidersHorizontal } from "lucide-react";

// Extended destinations data
const allDestinations = [
  {
    title: "Swiss Alps Trek",
    location: "Switzerland",
    image: "/api/placeholder/400/300",
    rating: 4.9,
    reviewCount: 124,
    duration: "8 Days",
    groupSize: "Max 12",
    price: 2899,
    originalPrice: 3299,
    description: "Experience breathtaking Alpine views, pristine mountain trails, and charming Swiss villages on this unforgettable trekking adventure.",
    features: ["Mountain Trekking", "Alpine Views", "Local Cuisine", "Small Groups", "Expert Guides"],
    category: "Adventure",
    continent: "Europe"
  },
  {
    title: "Parisian Romance",
    location: "Paris, France",
    image: "/api/placeholder/400/300",
    rating: 4.8,
    reviewCount: 89,
    duration: "5 Days",
    groupSize: "Max 8",
    price: 1899,
    description: "Immerse yourself in the City of Light with exclusive access to hidden gems, world-class dining, and romantic Seine river experiences.",
    features: ["Historic Tours", "Fine Dining", "Art Museums", "River Cruise", "Romantic Setting"],
    category: "Cultural",
    continent: "Europe"
  },
  {
    title: "Sahara Expeditions",
    location: "Morocco",
    image: "/api/placeholder/400/300",
    rating: 4.7,
    reviewCount: 156,
    duration: "7 Days",
    groupSize: "Max 10",
    price: 2299,
    originalPrice: 2599,
    description: "Journey through golden dunes, experience Berber culture, and sleep under the stars in luxury desert camps in the heart of the Sahara.",
    features: ["Desert Adventure", "Camel Trekking", "Star Gazing", "Luxury Camps", "Cultural Immersion"],
    category: "Adventure",
    continent: "Africa"
  },
  {
    title: "Iceland Northern Lights",
    location: "Reykjavik, Iceland",
    image: "/api/placeholder/400/300",
    rating: 4.9,
    reviewCount: 201,
    duration: "6 Days",
    groupSize: "Max 15",
    price: 2599,
    description: "Witness the magical Aurora Borealis, explore ice caves, and relax in geothermal hot springs in this winter wonderland adventure.",
    features: ["Northern Lights", "Ice Caves", "Hot Springs", "Photography", "Winter Adventure"],
    category: "Nature",
    continent: "Europe"
  },
  {
    title: "Bali Spiritual Retreat",
    location: "Ubud, Bali",
    image: "/api/placeholder/400/300",
    rating: 4.6,
    reviewCount: 78,
    duration: "10 Days",
    groupSize: "Max 8",
    price: 1799,
    originalPrice: 1999,
    description: "Find inner peace through yoga, meditation, and traditional Balinese healing practices in the heart of Bali's cultural center.",
    features: ["Yoga Classes", "Meditation", "Spa Treatments", "Cultural Immersion", "Healthy Cuisine"],
    category: "Wellness",
    continent: "Asia"
  },
  {
    title: "Patagonia Wilderness",
    location: "Argentina & Chile",
    image: "/api/placeholder/400/300",
    rating: 4.8,
    reviewCount: 143,
    duration: "12 Days",
    groupSize: "Max 10",
    price: 3499,
    description: "Explore the untamed wilderness of Patagonia with glacier hiking, wildlife spotting, and dramatic mountain landscapes.",
    features: ["Glacier Hiking", "Wildlife Spotting", "Mountain Views", "Camping", "Photography"],
    category: "Adventure",
    continent: "South America"
  }
];

export default function PackagesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedContinent, setSelectedContinent] = useState("All");
  const [priceRange, setPriceRange] = useState("All");
  const [sortBy, setSortBy] = useState("popular");

  const categories = ["All", "Adventure", "Cultural", "Nature", "Wellness"];
  const continents = ["All", "Europe", "Asia", "Africa", "South America", "North America"];
  const priceRanges = ["All", "Under $2000", "$2000-$3000", "Over $3000"];

  // Filter destinations
  const filteredDestinations = allDestinations.filter((dest) => {
    const matchesSearch = dest.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         dest.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || dest.category === selectedCategory;
    const matchesContinent = selectedContinent === "All" || dest.continent === selectedContinent;

    let matchesPrice = true;
    if (priceRange === "Under $2000") matchesPrice = dest.price < 2000;
    else if (priceRange === "$2000-$3000") matchesPrice = dest.price >= 2000 && dest.price <= 3000;
    else if (priceRange === "Over $3000") matchesPrice = dest.price > 3000;

    return matchesSearch && matchesCategory && matchesContinent && matchesPrice;
  });

  // Sort destinations
  const sortedDestinations = [...filteredDestinations].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      case "duration":
        return parseInt(a.duration) - parseInt(b.duration);
      default: // popular
        return b.reviewCount - a.reviewCount;
    }
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Page Header */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Travel Packages</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Discover our complete collection of extraordinary adventures crafted for every type of traveler
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        {/* Search and Filter Bar */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
            {/* Search */}
            <div className="relative lg:col-span-2">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search destinations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>

            {/* Continent Filter */}
            <select
              value={selectedContinent}
              onChange={(e) => setSelectedContinent(e.target.value)}
              className="px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
            >
              {continents.map((continent) => (
                <option key={continent} value={continent}>
                  {continent}
                </option>
              ))}
            </select>

            {/* Price Filter */}
            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
            >
              {priceRanges.map((range) => (
                <option key={range} value={range}>
                  {range}
                </option>
              ))}
            </select>

            {/* Sort By */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
            >
              <option value="popular">Most Popular</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
              <option value="duration">Duration</option>
            </select>
          </div>
        </div>

        {/* Results Summary */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-gray-600">
            Showing {sortedDestinations.length} of {allDestinations.length} packages
          </p>
        </div>

        {/* Destinations Grid */}
        {sortedDestinations.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedDestinations.map((destination, index) => (
              <DestinationCard
                key={index}
                {...destination}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No packages found</h3>
            <p className="text-gray-600">Try adjusting your filters to see more results.</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}