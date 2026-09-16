import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LinkButton } from "@/components/ui/link-button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Calendar, Users, FileText, Award, MapPin, Eye } from "lucide-react";

const conferenceStats = [
  { label: "Date", value: "April 2026", icon: Calendar },
  { label: "Venue", value: "PIET, Jaipur", icon: MapPin },
  { label: "Total Submissions", value: "1095 papers", icon: FileText },
  { label: "Accepted Papers", value: "131 papers", icon: Award },
  { label: "Acceptance Rate", value: "12%", icon: Award },
  { label: "Countries Represented", value: "8", icon: MapPin }
];

const publications = [
  {
    title: "CRC Press, Taylor & Francis Group, USA",
    description: "CRC (Scopus Index)",
    type: "Scopus Indexed",
    color: "blue"
  },
  {
    title: "Indian Journal of Technical Education", 
    description: "IJTE (UGC Index)",
    type: "UGC Indexed",
    color: "green"
  }
];

const highlights = [
  "Advancements in natural language processing and its applications in various industries",
  "Ethical considerations in AI development and deployment", 
  "The role of big data in shaping modern machine learning algorithms",
  "Emerging trends in computer vision and image recognition",
  "Integration of AI in IoT devices and edge computing"
];

const galleryImages = [
  { src: "/1.jpg", alt: "Keynote speaker presentation", caption: "Keynote speaker presentation" },
  { src: "/2.jpg", alt: "Panel discussion", caption: "Panel discussion" },
  { src: "/3.jpg", alt: "Networking session", caption: "Networking session" },
  { src: "/4.png", alt: "Workshop in progress", caption: "Workshop in progress" },
  { src: "/5.jpg", alt: "Award ceremony", caption: "Award ceremony" }
];

export default function ArchivePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 pt-16">
        {/* Hero Section */}
        <section className="bg-blue-600 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">ICRACS 2026 Archive</h1>
            <p className="text-xl opacity-90">Relive the moments from our groundbreaking conference</p>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12">
          {/* Conference Statistics */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Conference Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {conferenceStats.map((stat, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <stat.icon className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                    <h3 className="font-semibold text-gray-900 mb-2">{stat.label}</h3>
                    <p className="text-blue-600 font-bold">{stat.value}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Publications */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Publications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {publications.map((pub, index) => (
                <Card key={index} className={`border-2 ${
                  pub.color === 'blue' ? 'border-blue-200 bg-blue-50' : 'border-green-200 bg-green-50'
                }`}>
                  <CardHeader>
                    <CardTitle className={`text-xl ${
                      pub.color === 'blue' ? 'text-blue-900' : 'text-green-900'
                    }`}>
                      {pub.description}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">{pub.title}</p>
                    <div className="flex justify-between items-center">
                      <Badge variant="secondary" className={
                        pub.color === 'blue' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
                      }>
                        {pub.type}
                      </Badge>
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4 mr-2" />
                        View
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Conference Highlights Gallery */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Conference Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((image, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <p className="text-sm font-medium text-gray-900">{image.caption}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Key Takeaways */}
          <div className="mb-16">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-center">Key Takeaways</CardTitle>
                <p className="text-center text-gray-600">Major insights and discoveries from ICRACS 2026</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start space-x-3 p-4 bg-blue-50 rounded-lg border border-blue-200">
                      <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                        {index + 1}
                      </div>
                      <p className="text-gray-700">{highlight}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Previous Conference Series */}
          <div className="mb-16">
            <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
              <CardHeader>
                <CardTitle className="text-2xl text-center text-blue-900">
                  ICRACS Conference Series
                </CardTitle>
                <p className="text-center text-blue-700">Building a legacy of excellence in AI and smart systems research</p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center p-6 bg-white rounded-lg border border-blue-200">
                    <h4 className="font-bold text-xl text-blue-900 mb-2">ICRACS 2024</h4>
                    <p className="text-gray-600 mb-2">1st Edition</p>
                    <p className="text-sm text-gray-500">190+ submissions</p>
                    <Badge className="mt-2 bg-green-100 text-green-800">Completed</Badge>
                  </div>
                  <div className="text-center p-6 bg-white rounded-lg border border-blue-200">
                    <h4 className="font-bold text-xl text-blue-900 mb-2">ICRACS 2025</h4>
                    <p className="text-gray-600 mb-2">2nd Edition</p>
                    <p className="text-sm text-gray-500">831 submissions</p>
                    <Badge className="mt-2 bg-green-100 text-green-800">Completed</Badge>
                  </div>
                  <div className="text-center p-6 bg-white rounded-lg border border-blue-200">
                    <h4 className="font-bold text-xl text-blue-900 mb-2">ICRACS 2026</h4>
                    <p className="text-gray-600 mb-2">3rd Edition</p>
                    <p className="text-sm text-gray-500">1095 submissions</p>
                    <Badge className="mt-2 bg-blue-100 text-blue-800">Recent</Badge>
                  </div>
                  <div className="text-center p-6 bg-white rounded-lg border border-purple-200">
                    <h4 className="font-bold text-xl text-purple-900 mb-2">ICRACS 2027</h4>
                    <p className="text-gray-600 mb-2">4th Edition</p>
                    <p className="text-sm text-gray-500">August 27-28, 2027</p>
                    <Badge className="mt-2 bg-purple-100 text-purple-800">Upcoming</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Join ICRACS 2027 CTA */}
          <div className="text-center">
            <Card className="bg-blue-600 text-white border-blue-600">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Join ICRACS 2027</h3>
                <p className="text-blue-100 mb-6 text-lg">
                  Be part of the next chapter in AI and smart systems research. Submit your papers and register for ICRACS 2027.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <LinkButton 
                    size="lg" 
                    className="bg-white text-blue-600 hover:bg-gray-100"
                    href="/call-for-papers"
                  >
                    <FileText className="h-5 w-5 mr-2" />
                    Submit Your Paper
                  </LinkButton>
                  <LinkButton 
                    size="lg" 
                    variant="outline" 
                    className="border-white text-blue-600 hover:bg-white hover:text-blue-600"
                    href="/registration"
                  >
                    <Users className="h-5 w-5 mr-2" />
                    Register Now
                  </LinkButton>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
