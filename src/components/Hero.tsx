"use client";

import { useState } from "react";
import { Search, Calendar, MapPin, Users } from "lucide-react";

export default function Hero() {
  const [searchQuery, setSearchQuery] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [travelers, setTravelers] = useState("2");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Search:", { searchQuery, destination, date, travelers });
  };

  return (
    <section className="relative h-[600px] flex items-center justify-center">
      {/* Hero Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('/generated/hero-tropical-paradise.png')`,
        }}
      />

      {/* Fallback gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 opacity-70" />

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Embark on Your Next
          <br />
          <span className="text-accent">Great Adventure</span>
        </h1>
        <p className="text-lg md:text-xl mb-8 text-gray-100">
          Discover extraordinary destinations and create unforgettable memories
          with our curated travel experiences
        </p>

        {/* Search Form */}
        <form
          onSubmit={handleSearch}
          className="bg-white rounded-lg p-6 shadow-xl max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
            {/* Destination */}
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Where to?"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-accent text-gray-800"
              />
            </div>

            {/* Date */}
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-accent text-gray-800"
              />
            </div>

            {/* Travelers */}
            <div className="relative">
              <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <select
                value={travelers}
                onChange={(e) => setTravelers(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-accent text-gray-800 appearance-none"
              >
                <option value="1">1 Traveler</option>
                <option value="2">2 Travelers</option>
                <option value="3">3 Travelers</option>
                <option value="4">4 Travelers</option>
                <option value="5+">5+ Travelers</option>
              </select>
            </div>

            {/* Search Button */}
            <button
              type="submit"
              className="bg-accent hover:bg-accent-light text-white px-6 py-3 rounded-md font-medium flex items-center justify-center gap-2 transition-colors"
            >
              <Search size={20} />
              Search
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}