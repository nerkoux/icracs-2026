"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger,
  SheetTitle
} from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Call For Papers", href: "/call-for-papers" },
  { name: "Agenda", href: "/agenda" },
  { name: "Registration", href: "/registration" },
  { name: "Committee", href: "/committee" },
  { name: "Speakers", href: "/speakers" },
  { name: "Archive", href: "/archive" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="mx-auto max-w-7xl">
        <nav className="bg-white">
          <div className="flex h-16 items-center justify-between px-6 lg:px-8">
            {/* Logo Section */}
            <Link 
              href="/" 
              className="flex items-center space-x-3"
            >
              <Image
                src="/pietLogoUpdated.jpg"
                alt="PIET Logo"
                width={240}
                height={240}
                className="object-contain"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-4 py-2 text-sm font-medium text-gray-700 transition-colors duration-200 hover:text-blue-600"
                >
                  {item.name}
                </Link>
              ))}
              
              {/* CTA Button */}
              <div className="ml-4 pl-4 border-l border-gray-200">
                <Button 
                  asChild
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2"
                >
                  <Link href="/registration">Register Now</Link>
                </Button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="p-2"
                  >
                    {isOpen ? (
                      <X className="h-6 w-6 text-gray-700" />
                    ) : (
                      <Menu className="h-6 w-6 text-gray-700" />
                    )}
                    <span className="sr-only">Toggle navigation menu</span>
                  </Button>
                </SheetTrigger>
                
                <SheetContent 
                  side="right" 
                  className="w-[320px] sm:w-[400px]"
                >
                  <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                  
                  {/* Mobile Header */}
                  <div className="flex items-center justify-center pt-6 pb-8 border-b border-gray-100">
                    <div className="flex items-center space-x-3">
                      <Image
                        src="/pietLogoUpdated.jpg"
                        alt="PIET Logo"
                        width={50}
                        height={50}
                        className="object-contain"
                      />
                      <div>
                        <h2 className="text-lg font-bold text-gray-900">ICRACS 2026</h2>
                        <p className="text-sm text-gray-600">AI, Computer Vision & Smart Systems</p>
                      </div>
                    </div>
                  </div>

                  {/* Mobile Navigation Links */}
                  <div className="flex flex-col space-y-3 py-6">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="flex items-center justify-between p-4 text-gray-700 hover:text-blue-600 transition-colors duration-200 hover:bg-blue-50 rounded-lg"
                        onClick={() => setIsOpen(false)}
                      >
                        <span className="font-medium">{item.name}</span>
                      </Link>
                    ))}
                    
                    {/* Mobile CTA */}
                    <div className="pt-6 mt-6 border-t border-gray-100">
                      <Button 
                        asChild
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3"
                        onClick={() => setIsOpen(false)}
                      >
                        <Link href="/registration">Register Now</Link>
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
