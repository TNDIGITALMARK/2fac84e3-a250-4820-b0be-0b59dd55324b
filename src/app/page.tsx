export const dynamic = 'force-dynamic'

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import DestinationCard from "@/components/DestinationCard";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

// Mock data for destinations
const destinations = [
  {
    title: "Swiss Alps Trek",
    location: "Switzerland",
    image: "/generated/swiss-alps-landscape.png",
    rating: 4.9,
    reviewCount: 124,
    duration: "8 Days",
    groupSize: "Max 12",
    price: 2899,
    originalPrice: 3299,
    description: "Experience breathtaking Alpine views, pristine mountain trails, and charming Swiss villages on this unforgettable trekking adventure.",
    features: ["Mountain Trekking", "Alpine Views", "Local Cuisine", "Small Groups", "Expert Guides"]
  },
  {
    title: "Parisian Romance",
    location: "Paris, France",
    image: "/generated/paris-romantic-cityscape.png",
    rating: 4.8,
    reviewCount: 89,
    duration: "5 Days",
    groupSize: "Max 8",
    price: 1899,
    description: "Immerse yourself in the City of Light with exclusive access to hidden gems, world-class dining, and romantic Seine river experiences.",
    features: ["Historic Tours", "Fine Dining", "Art Museums", "River Cruise", "Romantic Setting"]
  },
  {
    title: "Sahara Expeditions",
    location: "Morocco",
    image: "/generated/sahara-desert-expedition.png",
    rating: 4.7,
    reviewCount: 156,
    duration: "7 Days",
    groupSize: "Max 10",
    price: 2299,
    originalPrice: 2599,
    description: "Journey through golden dunes, experience Berber culture, and sleep under the stars in luxury desert camps in the heart of the Sahara.",
    features: ["Desert Adventure", "Camel Trekking", "Star Gazing", "Luxury Camps", "Cultural Immersion"]
  }
];

export default function Index() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />

      {/* Travel Packages Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Travel Packages
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Discover our carefully curated collection of extraordinary adventures.
              Each journey is designed to create lasting memories and connect you
              with the world's most incredible destinations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination, index) => (
              <DestinationCard
                key={index}
                {...destination}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-primary text-white px-8 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors">
              View All Packages
            </button>
          </div>
        </div>
      </section>

      <Testimonials />

      {/* Newsletter Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Start Your Next Adventure
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Get travel inspiration, exclusive deals, and adventure tips delivered
            straight to your inbox.
          </p>

          <form className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <button
              type="submit"
              className="bg-accent text-white px-6 py-3 rounded-md font-medium hover:bg-accent-light transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}