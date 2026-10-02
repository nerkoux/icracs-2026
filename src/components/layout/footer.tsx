import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Conference Info */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Image
                src="/pietLogoUpdated.png"
                alt="PIET Logo"
                width={240}
                height={240}
                className="object-contain bg-white rounded-lg p-2"
              />
            </div>
            <p className="text-gray-300 mb-4">
              Poornima Institute of Engineering and Technology
            </p>
            <p className="text-gray-300 text-sm">
              ISI-2, RIICO Institutional Area, Sitapura, Jaipur - 302022
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/registration" className="text-gray-300 hover:text-white transition-colors">Registration</Link></li>
              <li><Link href="/call-for-papers" className="text-gray-300 hover:text-white transition-colors">Call for Papers</Link></li>
              <li><Link href="/committee" className="text-gray-300 hover:text-white transition-colors">Committee</Link></li>
              <li><Link href="/speakers" className="text-gray-300 hover:text-white transition-colors">Speakers</Link></li>
              <li><Link href="/agenda" className="text-gray-300 hover:text-white transition-colors">Agenda</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Mail className="h-4 w-4 mt-1 text-blue-400" />
                <p className="text-sm">budesh.kanwar@poornima.org</p>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="h-4 w-4 mt-1 text-blue-400" />
                <p className="text-sm">aditya.pundir@poornima.org</p>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 mt-1 text-blue-400" />
                <p className="text-sm">Jaipur, Rajasthan, India</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-300 text-sm mb-2">
            * The Microsoft CMT service was used for managing the peer-reviewing process for this conference.
            This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.
          </p>
          <p className="text-gray-300 text-sm">
            © 2027 ICRACS. All rights reserved. | Designed & Developed by{" "}
            <a 
              href="https://www.linkedin.com/in/paarth-khandelwal-264954380/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-400 hover:text-blue-300 transition-colors underline-offset-4 hover:underline"
            >
              Paarth Khandelwal
            </a>{" "}
            &{" "}
            <a 
              href="https://github.com/devilsarise0338-rgb" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-400 hover:text-blue-300 transition-colors underline-offset-4 hover:underline"
            >
              Siddharth Dhankani
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
