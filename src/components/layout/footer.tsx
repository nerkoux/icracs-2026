import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Conference Info */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Image
                src="/pietLogo.png"
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
                <Phone className="h-4 w-4 mt-1 text-blue-400" />
                <div className="text-sm">
                  <p>Dr. Budesh Kanwar: 8127741447</p>
                  <p>Dr. Saurabh Raj: 7458080822</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="h-4 w-4 mt-1 text-blue-400" />
                <div className="text-sm">
                  <p>budesh.kanwar@poornima.org</p>
                  <p>icracs@poornima.org</p>
                </div>
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
          </p>
          <p className="text-gray-300 text-sm">
            © 2026 ICRACS. All rights reserved. | Designed & Developed by{" "}
            <Tooltip>
              <TooltipTrigger asChild>
                <a 
                  href="https://akshatmehta.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-400 hover:text-blue-300 transition-colors underline-offset-4 hover:underline"
                >
                  Akshat Mehta
                </a>
              </TooltipTrigger>
              <TooltipContent 
                side="top" 
                className="max-w-md bg-gray-800 text-white border border-gray-600 shadow-xl p-4"
                sideOffset={8}
              >
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-lg mb-2 text-blue-400">About Me</h4>
                    <p className="text-sm leading-relaxed text-gray-200">
                      I&apos;m a passionate full-stack developer with over 5 years of experience creating modern web applications. 
                      I specialize in React, Next.js, Node.js, and cloud technologies.
                    </p>
                    <p className="text-sm leading-relaxed text-gray-200 mt-2">
                      My journey in web development started with curiosity and grew into a passion for building exceptional digital experiences. 
                      I enjoy working across the full stack to deliver complete solutions.
                    </p>
                    <p className="text-sm leading-relaxed text-gray-200 mt-2">
                      When I&apos;m not coding, you can find me exploring new technologies, contributing to open source projects, 
                      or sharing knowledge with the developer community.
                    </p>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold text-sm mb-2 text-blue-400">Quick Facts</h5>
                    <ul className="text-xs space-y-1 text-gray-300">
                      <li>• 5+ years of development experience</li>
                      <li>• 50+ successful projects delivered</li>
                      <li>• Full-stack expertise</li>
                      <li>• Remote-first mindset</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold text-sm mb-2 text-blue-400">What Drives Me</h5>
                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div>
                        <h6 className="font-medium text-white">Clean Code</h6>
                        <p className="text-gray-300">Writing maintainable, scalable code that stands the test of time.</p>
                      </div>
                      <div>
                        <h6 className="font-medium text-white">Innovation</h6>
                        <p className="text-gray-300">Exploring new technologies and creative solutions to complex problems.</p>
                      </div>
                      <div>
                        <h6 className="font-medium text-white">Collaboration</h6>
                        <p className="text-gray-300">Believing in teamwork and effective communication in development.</p>
                      </div>
                      <div>
                        <h6 className="font-medium text-white">Passion</h6>
                        <p className="text-gray-300">Genuinely passionate about technology and continuous learning.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </TooltipContent>
            </Tooltip>
          </p>
        </div>
      </div>
    </footer>
  );
}
