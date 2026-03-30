"use client";

import { useState } from 'react';
import Image from 'next/image';

export default function PacificNorthwestIrrigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    {
      title: "Irrigation System Design",
      description: "Customized solutions for your land size, soil type, water availability, and budget"
    },
    {
      title: "Irrigation System Installation",
      description: "Professional installation of sprinkler systems and drip irrigation"
    },
    {
      title: "Irrigation System Maintenance",
      description: "Regular inspections, tune-ups, and water conservation optimization"
    },
    {
      title: "Irrigation System Repair",
      description: "Prompt diagnosis and repair to keep your system running efficiently"
    },
    {
      title: "Smart Irrigation Technology",
      description: "Advanced controllers, sensors, and weather stations for optimal efficiency"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-[#1a5c2e] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">PN</span>
              </div>
              <span className="ml-3 text-xl font-bold text-[#1a5c2e]">Pacific Northwest Irrigation</span>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-700 hover:text-[#1a5c2e] transition-colors">Services</a>
              <a href="#contact" className="text-gray-700 hover:text-[#1a5c2e] transition-colors">Contact</a>
            </nav>

            <a href="tel:2069901392" className="hidden md:block bg-[#2ecc71] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#27ae60] transition-colors">
              (206) 990-1392
            </a>

            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden pb-4">
              <a href="#services" className="block py-2 text-gray-700 hover:text-[#1a5c2e]">Services</a>
              <a href="#contact" className="block py-2 text-gray-700 hover:text-[#1a5c2e]">Contact</a>
              <a href="tel:2069901392" className="block mt-4 bg-[#2ecc71] text-white px-6 py-2 rounded-lg font-semibold text-center">
                (206) 990-1392
              </a>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1a5c2e] to-[#2ecc71] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Seattle's Irrigation Experts</h1>
            <p className="text-xl mb-8 text-gray-100">Professional irrigation services for residential and commercial properties across the Pacific Northwest</p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center bg-white bg-opacity-20 px-4 py-2 rounded-lg">
                <span className="text-yellow-300 mr-2">★★★★★</span>
                <span className="font-semibold">4.6 Stars</span>
              </div>
              <div className="bg-white bg-opacity-20 px-4 py-2 rounded-lg">
                <span className="font-semibold">28 Reviews</span>
              </div>
              <div className="bg-white bg-opacity-20 px-4 py-2 rounded-lg">
                <span className="font-semibold">Open 24 Hours</span>
              </div>
              <div className="bg-white bg-opacity-20 px-4 py-2 rounded-lg">
                <span className="font-semibold">Licensed & Insured</span>
              </div>
            </div>

            <a href="tel:2069901392" className="inline-block bg-white text-[#1a5c2e] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors">
              Call Now: (206) 990-1392
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a5c2e] mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Comprehensive irrigation solutions tailored to your needs</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-[#2ecc71] rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#1a5c2e] mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-[#1a5c2e]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Upgrade Your Irrigation System?</h2>
          <p className="text-xl text-gray-200 mb-8">Contact Seattle's trusted irrigation experts today for a free consultation</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:2069901392" className="bg-[#2ecc71] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#27ae60] transition-colors">
              📞 (206) 990-1392
            </a>
            <div className="bg-white bg-opacity-10 px-8 py-4 rounded-lg text-white">
              <p className="font-semibold">Seattle, WA</p>
              <p className="text-sm">Open 24 Hours</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-[#2ecc71] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">PN</span>
                </div>
                <span className="ml-3 text-xl font-bold">Pacific Northwest Irrigation</span>
              </div>
              <p className="text-gray-400">Seattle's premier irrigation specialists, serving residential and commercial properties throughout the Pacific Northwest.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <p className="text-gray-400 mb-2">📍 Seattle, WA</p>
              <p className="text-gray-400 mb-2">📞 (206) 990-1392</p>
              <p className="text-gray-400">🕐 Open 24 Hours</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Trust & Reliability</h3>
              <div className="flex items-center mb-2">
                <span className="text-yellow-400 mr-2">★★★★★</span>
                <span>4.6 Stars (28 Reviews)</span>
              </div>
              <p className="text-gray-400">✓ Licensed & Insured</p>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Pacific Northwest Irrigation. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}