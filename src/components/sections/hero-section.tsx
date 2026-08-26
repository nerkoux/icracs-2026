"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin } from "lucide-react";
import Link from "next/link";

const images = [
  "/highresimages/10.jpg",
  "/highresimages/11.jpg",
  "/highresimages/12.jpg",
  "/highresimages/1.jpeg",
  "/highresimages/2.jpeg",
  "/highresimages/3.jpeg",
  "/highresimages/4.jpeg",
  "/highresimages/5.jpeg",
  "/highresimages/6.jpeg",
  "/highresimages/7.jpeg",
  "/highresimages/8.jpeg",
  "/highresimages/9.jpeg",
];

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image Slideshow */}
      <div className="absolute inset-0 z-0">
        {images.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
          >
            <Image
              src={image}
              alt={`ICRACS Conference ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        {/* Hero content: main info on left. The "Important Dates" card was removed per request. */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Content */}
          <div className="text-white">
            <div className="mb-6">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
                <span className="text-blue-400">ICRACS</span> 2026
              </h1>
              <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
                International Conference on Recent Advances in
              </h2>
              <h3 className="text-lg md:text-xl font-medium text-white">
                Artificial Intelligence, Computer Vision & Smart Systems
              </h3>
            </div>

            <div className="mb-8">
              <div className="flex items-center space-x-2 mb-3">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span className="text-lg">Poornima Institute of Engineering and Technology, Sitapura, Jaipur, Rajasthan</span>
              </div>
              <div className="flex items-center space-x-2 mb-3">
                <Calendar className="h-5 w-5 text-blue-400" />
                <span className="text-lg">August 27-28, 2027</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span className="text-lg">Hybrid Mode</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Link href="/registration">Register Now</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-black hover:bg-white hover:text-black">
                <Link href="/call-for-papers">Submit Paper</Link>
              </Button>
            </div>
          </div>

          {/* Right Column removed */}
          {/* 
          <div className="lg:ml-8">
        ...Important Dates card removed...
          </div>
          */}
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${index === currentImageIndex ? "bg-white" : "bg-white/50"
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
