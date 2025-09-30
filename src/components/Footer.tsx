"use client";

import Link from "next/link";
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Wayward</h3>
            <p className="text-gray-100 leading-relaxed">
              Your gateway to extraordinary adventures. We create unforgettable
              travel experiences that connect you with the world's most amazing
              destinations.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-gray-200 hover:text-accent transition-colors"
              >
                <Facebook size={20} />
              </Link>
              <Link
                href="#"
                className="text-gray-200 hover:text-accent transition-colors"
              >
                <Instagram size={20} />
              </Link>
              <Link
                href="#"
                className="text-gray-200 hover:text-accent transition-colors"
              >
                <Twitter size={20} />
              </Link>
              <Link
                href="#"
                className="text-gray-200 hover:text-accent transition-colors"
              >
                <Youtube size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link
                href="/destinations"
                className="block text-gray-100 hover:text-white transition-colors"
              >
                Destinations
              </Link>
              <Link
                href="/packages"
                className="block text-gray-100 hover:text-white transition-colors"
              >
                Travel Packages
              </Link>
              <Link
                href="/about"
                className="block text-gray-100 hover:text-white transition-colors"
              >
                About Us
              </Link>
              <Link
                href="/blog"
                className="block text-gray-100 hover:text-white transition-colors"
              >
                Travel Blog
              </Link>
            </div>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <div className="space-y-2">
              <Link
                href="/contact"
                className="block text-gray-100 hover:text-white transition-colors"
              >
                Contact Us
              </Link>
              <Link
                href="/faq"
                className="block text-gray-100 hover:text-white transition-colors"
              >
                FAQ
              </Link>
              <Link
                href="/booking-policy"
                className="block text-gray-100 hover:text-white transition-colors"
              >
                Booking Policy
              </Link>
              <Link
                href="/cancellation"
                className="block text-gray-100 hover:text-white transition-colors"
              >
                Cancellation
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-accent" />
                <span className="text-gray-100">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-accent" />
                <span className="text-gray-100">hello@wayward.com</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={16} className="text-accent mt-0.5" />
                <span className="text-gray-100">
                  123 Adventure Ave
                  <br />
                  Travel City, TC 12345
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-200 text-sm">
            © 2024 Wayward. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              href="/privacy"
              className="text-gray-200 hover:text-white text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-gray-200 hover:text-white text-sm transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/cookies"
              className="text-gray-200 hover:text-white text-sm transition-colors"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}