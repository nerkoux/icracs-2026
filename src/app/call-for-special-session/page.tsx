import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Download, Calendar, MapPin, BookOpen, Award } from "lucide-react";
import Image from "next/image";

interface SpecialSessionChair {
  name: string;
  role: string;
  image?: string;
}

interface SpecialSession {
  title: string;
  chairs: SpecialSessionChair[];
}

export default function CallForSpecialSessionPage() {
  const specialSessions: SpecialSession[] = [
    {
      title: "Trusted and Secure Assistive Robotics for Physically Challenged Individuals",
      chairs: [
        {
          name: "Dr. Priyanka Mishra",
          role: "Session Chair",
          image: "/specialsessiondata/drpriyanka.png"
        }
      ]
    },
    {
      title: "Quantum Artificial Intelligence: Algorithms, Architectures, and Applications",
      chairs: [
        {
          name: "Dr. Varun Malik",
          role: "Session Chair",
          image: "/specialsessiondata/varunmalik.png"
        },
        {
          name: "Ms. Kimmi Gupta",
          role: "Session Co-Chair",
          image: "/specialsessiondata/kimmigupta.png"
        },
        {
          name: "Dr. Mithlesh Arya",
          role: "Session Co-Chair",
          image: "/specialsessiondata/mithilesharya.png"
        }
      ]
    },
    {
      title: "Quantum Technologies for AI, Cryptography, and Complex Systems",
      chairs: [
        {
          name: "Dr. Tanmay Kasbe",
          role: "Session Chair",
          image: "/specialsessiondata/drtanmay.png"
        },
        {
          name: "Dr. Sailesh Iyer",
          role: "Session Co-Chair",
          image: "/specialsessiondata/drshailesh.png"
        },
        {
          name: "Dr. Dipti Durgesh Patil",
          role: "Session Co-Chair",
          image: "/specialsessiondata/drdipti.png"
        }
      ]
    },
    {
      title: "AI-Driven Computer Vision and Federated Learning for Scalable Healthcare Applications",
      chairs: [
        {
          name: "Dr. Adithya Padthe",
          role: "Session Chair",
          image: "/specialsessiondata/draditya.png"
        }
      ]
    },
    {
      title: "Machine Learning for Healthcare and Biomedical Applications",
      chairs: [
        {
          name: "Dr. Anita",
          role: "Session Chair",
          image: "/specialsessiondata/dranita.png"
        }
      ]
    },
    {
      title: "Machine Learning and Deep Learning Techniques for IoT Applications",
      chairs: [
        {
          name: "Rajiv Gandhi",
          role: "Session Chair",
          image: "/specialsessiondata/rajivgandhi.png"
        },
        {
          name: "Prof. (Dr) Jimmy Singla",
          role: "Session Co-Chair",
          image: "/specialsessiondata/jimmysingla.png"
        }
      ]
    }
  ];

  const getInitials = (name: string) => {
    const cleanName = name.replace(/^(Dr\.|Ms\.|Mr\.|Prof\.|Er\.)\s*/i, '').trim();
    return cleanName.charAt(0).toUpperCase();
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Call for Special Sessions</h1>
            <p className="text-xl opacity-90 mb-2">ICRACS-2026</p>
            <p className="text-lg opacity-80">3rd International Conference on Recent Advances in Artificial Intelligence, Computer Vision & Smart Systems</p>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12">
          {/* Conference Details */}
          <Card className="mb-8 bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="flex items-start space-x-3">
                  <Calendar className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Date</h3>
                    <p className="text-gray-700">17–18 April 2026</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-6 w-6 text-purple-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Mode</h3>
                    <p className="text-gray-700">Hybrid Mode</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Venue</h3>
                    <p className="text-gray-700">PIET, Jaipur</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <BookOpen className="h-6 w-6 text-orange-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Publication</h3>
                    <p className="text-gray-700 text-sm">AIP/CRC Press</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Approved Special Sessions - Moved Above Introduction */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-purple-700">Approved Special Sessions</h2>
            <div className="grid grid-cols-1 gap-8">
              {specialSessions.map((session, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 flex flex-col hover:shadow-xl transition-shadow duration-300">
                  <div className="bg-red-50 border-b border-red-100 p-4">
                    <h3 className="text-xl font-bold">
                      <span className="text-red-600 mr-2">Special Session {index + 1}:</span>
                      <span className="text-gray-900 italic">{session.title}</span>
                    </h3>
                  </div>
                  <div className="p-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {session.chairs.map((chair, i) => (
                        <div key={i} className="flex flex-col sm:flex-row gap-4 p-4 bg-gray-50 rounded-lg border border-gray-100 items-start">
                          <div className="flex-shrink-0 mx-auto sm:mx-0">
                            <div className="h-24 w-24 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center overflow-hidden border-2 border-white shadow-md">
                              {chair.image ? (
                                <Image
                                  src={chair.image}
                                  alt={chair.name}
                                  width={96}
                                  height={96}
                                  className="object-cover w-full h-full"
                                />
                              ) : (
                                <span className="text-3xl font-bold text-blue-700">
                                  {getInitials(chair.name)}
                                </span>
                              )}
                            </div>
                          </div>
                          <div className="flex-1 text-center sm:text-left w-full">
                            <h4 className="font-bold text-lg text-gray-900">{chair.name}</h4>
                            {chair.role && <p className="text-sm font-bold text-blue-600 mb-1 uppercase tracking-wide">{chair.role}</p>}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Introduction */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                <span className="font-semibold">Dear Sir/Madam,</span>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                We are delighted to invite <span className="font-semibold">Special Session proposals</span> from active researchers and domain experts for <span className="font-semibold">3rd ICRACS-2026</span>. Special Sessions should address emerging, advanced, and niche topics across Artificial Intelligence, Machine Learning, Computer Vision, Smart Systems, Data Science, Robotics, and related areas.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
                <p className="text-sm text-gray-700">
                  <span className="font-semibold">Organized by:</span> Department of Artificial Intelligence & Data Science, Poornima Institute of Engineering & Technology, Jaipur, India
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Why Host a Special Session */}
          <Card className="mb-8 bg-gradient-to-br from-green-50 to-blue-50 border-green-200">
            <CardHeader>
              <CardTitle className="text-2xl text-green-900 flex items-center">
                <Award className="h-6 w-6 mr-2" />
                🎯 Why Host a Special Session?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Create a focused research track in your specialization</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Attract high-quality submissions from your professional network</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Enjoy Travel & stay to pink city jaipur duly hosted by organizers</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Get your papers registered and presented free, after meeting the benchmark registrations</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">High number of registrations can even help you get in editorial board of the proceedings</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Gain recognition as a Special Session Chair in an esteemed international conference</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Accepted papers from Special Sessions will be included in the official conference proceedings in American Institute of Physics (AIP) Publishing/CRC press (Taylor and Francis) (Proposal is pending for approval)</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Submission Section */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-900 text-center">
                📝 Submit Your Special Session Proposal
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center mb-6">
                <p className="text-gray-700 mb-4">
                  Submit your proposal using the form below or download the proposal format template.
                </p>
                <div className="flex justify-center">
                  <Button
                    asChild
                    variant="outline"
                    className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold px-8 py-6 text-lg"
                  >
                    <a
                      href="/templates/ICRACS 2026_Sample_Call_for_Special_Session.pdf"
                      download
                    >
                      <Download className="h-5 w-5 mr-2" />
                      Proposal Format
                    </a>
                  </Button>
                </div>
              </div>
              {/* Embedded Google Form */}
              <div className="w-full mt-8">
                <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 text-center mb-4">
                  <p className="text-lg font-semibold text-blue-900 mb-2">
                    📋 Fill the Invitation Form for Special Session to ICRACS 2026
                  </p>
                  <p className="text-sm text-gray-700">
                    Kindly fill all the necessary details for being a session chair
                  </p>
                </div>
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLScUxR6hWP0-Z_M5-Uc4ayg6ammQLpGXhyBcZVxNsJwMbxpLsg/viewform?embedded=true"
                  width="100%"
                  height="600"
                  className="border rounded-lg shadow-sm"
                  title="Special Session Proposal Form"
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                >
                  Loading…
                </iframe>
              </div>
            </CardContent>
          </Card>

          {/* Important Information */}
          <Card className="bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
            <CardContent className="p-8">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Calendar className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Special Session Proposal Submission Deadline:</p>
                    <p className="text-lg font-bold text-purple-600">31 Dec 2025</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Award className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Special Considerations:</p>
                    <p className="text-gray-700">💡 Special considerations/discounts for foreign-author papers may apply (details will be shared).</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <BookOpen className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Conference Website:</p>
                    <a
                      href="https://icracs.poornima.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      https://icracs.poornima.org/
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </>
  );
}
