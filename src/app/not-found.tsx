"use client";

import Link from "next/link";
import { Home, ArrowLeft, Mail, Phone, FileText, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  const handleGoBack = () => {
    if (typeof window !== 'undefined' && window.history.length > 1) {
      window.history.back();
    } else {
      window.location.href = '/';
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8 min-h-screen flex items-center justify-center">
        <div className="max-w-4xl w-full text-center">
          {/* 404 Header */}
          <div className="mb-12">
            <h1 className="text-6xl sm:text-8xl lg:text-9xl font-bold text-white mb-6">
              404
            </h1>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-100 mb-4">
              Page Not Found
            </h2>
            <p className="text-lg text-gray-300 mb-4 max-w-2xl mx-auto">
              The page you are looking for could not be found.
            </p>
            <p className="text-gray-400 max-w-xl mx-auto">
              The requested URL may have been moved, deleted, or temporarily unavailable.
            </p>
          </div>

          {/* Conference Information */}
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 sm:p-8 mb-12">
            <h3 className="text-xl sm:text-2xl font-bold text-blue-400 mb-4">
              ICRACS 2027
            </h3>
            <p className="text-gray-200 text-base sm:text-lg mb-2">
              International Conference on Recent Advances in
            </p>
            <p className="text-gray-200 text-base sm:text-lg mb-4">
              Artificial Intelligence, Computer Vision & Smart Systems
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-sm text-gray-300">
              <span>April 17-18, 2027</span>
              <span className="hidden sm:block w-1 h-1 bg-gray-400 rounded-full"></span>
              <span className="text-center">Poornima Institute of Engineering & Technology</span>
              <span className="hidden sm:block w-1 h-1 bg-gray-400 rounded-full"></span>
              <span>Jaipur, India</span>
            </div>
          </div>

          {/* Navigation and Contact Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Quick Navigation */}
            <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
              <h4 className="font-semibold text-white mb-6 flex items-center text-lg">
                <Search className="h-5 w-5 mr-3 text-blue-400" />
                Quick Navigation
              </h4>
              <div className="space-y-4 text-left">
                <Link href="/" className="flex items-center text-gray-300 hover:text-white transition-colors">
                  <Home className="h-4 w-4 mr-3 text-blue-400" />
                  Homepage
                </Link>
                <Link href="/registration" className="flex items-center text-gray-300 hover:text-white transition-colors">
                  <FileText className="h-4 w-4 mr-3 text-blue-400" />
                  Registration
                </Link>
                <Link href="/call-for-papers" className="flex items-center text-gray-300 hover:text-white transition-colors">
                  <FileText className="h-4 w-4 mr-3 text-blue-400" />
                  Call for Papers
                </Link>
                <Link href="/speakers" className="flex items-center text-gray-300 hover:text-white transition-colors">
                  <FileText className="h-4 w-4 mr-3 text-blue-400" />
                  Speakers
                </Link>
                <Link href="/agenda" className="flex items-center text-gray-300 hover:text-white transition-colors">
                  <FileText className="h-4 w-4 mr-3 text-blue-400" />
                  Conference Agenda
                </Link>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
              <h4 className="font-semibold text-white mb-6 flex items-center text-lg">
                <Mail className="h-5 w-5 mr-3 text-blue-400" />
                Contact Support
              </h4>
              <div className="space-y-4 text-left">
                <div>
                  <p className="text-sm text-gray-400 mb-1">Email Support</p>
                  <a href="mailto:icracs@poornima.org" className="text-blue-400 hover:text-blue-300 transition-colors">
                    icracs@poornima.org
                  </a>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Conference Coordinator</p>
                  <p className="text-gray-200">Dr. Budesh Kanwar</p>
                  <div className="flex items-center mt-1">
                    <Phone className="h-4 w-4 mr-2 text-blue-400" />
                    <span className="text-blue-400">9460503316</span>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Technical Support</p>
                  <p className="text-gray-200">Dr. Shipra Bhatia</p>
                  <div className="flex items-center mt-1">
                    <Phone className="h-4 w-4 mr-2 text-blue-400" />
                    <span className="text-blue-400">7568645848</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-base">
              <Link href="/" className="flex items-center justify-center">
                <Home className="h-5 w-5 mr-2" />
                Return to Homepage
              </Link>
            </Button>
            <Button 
              onClick={handleGoBack}
              variant="outline" 
              className="border-gray-600 text-black hover:bg-gray-700 hover:text-white hover:border-gray-500 px-8 py-3 text-base"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Go Back
            </Button>
          </div>

          {/* Footer */}
          <div className="pt-8 border-t border-gray-700">
            <p className="text-sm text-gray-400">
              If you believe this is an error or need technical assistance, 
              please contact our support team using the information provided above.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
