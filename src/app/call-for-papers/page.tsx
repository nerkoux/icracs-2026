import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Download, Phone, Mail } from "lucide-react";

const conferenceTopics = [
  "Artificial Intelligence and Machine Learning",
  "Computer Vision and Image Processing", 
  "Smart Energy Systems and Grid Intelligence",
  "IoT and Smart City Applications",
  "Deep Learning and Neural Networks",
  "Pattern Recognition and Data Analytics",
  "Intelligent Automation Systems",
  "Renewable Energy Integration through AI",
  "Security and Privacy in Smart Systems",
  "Human-Computer Interaction in Smart Environments",
  "Software Agents and Multi-Agent Systems",
  "Edge Data Authentication",
  "Web Intelligence and Intrusion Detection",
  "High Performance Computing and Cyber Security Issues",
  "Hybridisation of Intelligent Networks",
  "Web and Grid Computing",
  "Soft and Cognitive Computing",
  "Parallel and Distributed Computing",
  "Security Frameworks and Protocols",
  "Advanced Intelligent Systems in Access Control",
  "Natural Language Processing",
  "Robotics and Autonomous Systems",
  "Quantum Computing Applications in AI",
  "Blockchain Technology in Smart Systems",
  "Federated Learning and Distributed AI"
];

const submissionGuidelines = [
  {
    title: "Paper Format",
    description: "Papers must be formatted according to the conference template and should not exceed 8 pages including references."
  },
  {
    title: "Originality", 
    description: "All submissions must be original work that has not been published elsewhere or submitted to other conferences/journals."
  },
  {
    title: "Peer Review",
    description: "All papers will undergo a rigorous double-blind peer review process by subject matter experts."
  },
  {
    title: "Language",
    description: "Papers must be written in English with proper grammar and technical clarity."
  },
  {
    title: "Plagiarism",
    description: "All submissions will be checked for plagiarism. Papers with significant similarity will be rejected."
  },
  {
    title: "Presentation",
    description: "At least one author must register and present the paper at the conference if accepted."
  }
];

const importantDates = [
  {
    event: "Paper Submission Deadline",
    date: "February 15, 2026",
    status: "deadline"
  },
  {
    event: "Notification of Acceptance", 
    date: "March 01, 2026",
    status: "notification"
  },
  {
    event: "Camera-Ready Submission",
    date: "March 16, 2026", 
    status: "camera-ready"
  },
  {
    event: "Early Bird Registration",
    date: "March 21, 2026",
    status: "registration"
  },
  {
    event: "Conference Dates",
    date: "April 15-16, 2026",
    status: "conference"
  }
];

export default function CallForPapersPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 pt-16">
        {/* Hero Section */}
        <section className="bg-blue-600 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Call for Papers</h1>
            <p className="text-xl opacity-90">Submit your cutting-edge research to ICRACS 2026</p>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12">
          {/* Important Dates */}
          <div className="mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-center">Important Submission Dates</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {importantDates.map((date, index) => (
                    <div key={index} className={`p-4 rounded-lg border-l-4 ${
                      date.status === 'deadline' ? 'bg-red-50 border-red-500' :
                      date.status === 'notification' ? 'bg-yellow-50 border-yellow-500' :
                      date.status === 'camera-ready' ? 'bg-green-50 border-green-500' :
                      date.status === 'registration' ? 'bg-blue-50 border-blue-500' :
                      'bg-purple-50 border-purple-500'
                    }`}>
                      <h4 className="font-semibold text-gray-900 mb-2">{date.event}</h4>
                      <p className={`font-bold ${
                        date.status === 'deadline' ? 'text-red-600' :
                        date.status === 'notification' ? 'text-yellow-600' :
                        date.status === 'camera-ready' ? 'text-green-600' :
                        date.status === 'registration' ? 'text-blue-600' :
                        'text-purple-600'
                      }`}>
                        {date.date}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Conference Scope */}
          <div className="mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Conference Scope</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-6">
                  ICRACS 2026 focuses on the revolutionary applications of Artificial Intelligence, Computer Vision, 
                  and Smart Systems in emerging technologies. The conference addresses the critical integration of AI 
                  techniques including deep learning, machine learning, pattern recognition, natural language processing, 
                  and computer vision in smart city infrastructure, industrial automation, and energy systems.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  We invite researchers, academicians, and industry professionals to share innovative AI solutions 
                  that enhance efficiency, stability, robustness, and security of smart systems. Papers should 
                  demonstrate novel contributions to the field with clear practical applications.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Topics of Interest */}
          <div className="mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Topics of Interest</CardTitle>
                <p className="text-gray-600">The topics of the conference include, but are not limited to:</p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {conferenceTopics.map((topic, index) => (
                    <div key={index} className="flex items-center space-x-2 p-2 bg-gray-50 rounded-lg">
                      <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0" />
                      <span className="text-sm text-gray-700">{topic}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Submission Guidelines */}
          <div className="mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Submission Guidelines</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {submissionGuidelines.map((guideline, index) => (
                    <div key={index} className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                      <h4 className="font-semibold text-blue-900 mb-2">{guideline.title}</h4>
                      <p className="text-gray-700 text-sm">{guideline.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Submission Process */}
          <div className="mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">How to Submit</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                  <h4 className="font-semibold text-green-900 mb-4">Submission Process</h4>
                  <ol className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <Badge className="bg-green-600">1</Badge>
                      <span className="text-gray-700">Download and follow the paper template provided below</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Badge className="bg-green-600">2</Badge>
                      <span className="text-gray-700">Prepare your manuscript according to the formatting guidelines</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Badge className="bg-green-600">3</Badge>
                      <span className="text-gray-700">Submit your paper through the CMT system before the deadline</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Badge className="bg-green-600">4</Badge>
                      <span className="text-gray-700">Wait for peer review feedback and acceptance notification</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Badge className="bg-green-600">5</Badge>
                      <span className="text-gray-700">Submit camera-ready version and register for the conference</span>
                    </li>
                  </ol>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700">
                    <ExternalLink className="h-4 w-4" />
                    <span>Submit via CMT Portal</span>
                  </Button>
                  <Button variant="outline" className="flex items-center space-x-2">
                    <Download className="h-4 w-4" />
                    <span>Download Paper Template</span>
                  </Button>
                  <Button variant="outline" className="flex items-center space-x-2">
                    <Download className="h-4 w-4" />
                    <span>Download Sample Paper</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Publication Opportunities */}
          <div className="mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Publication Opportunities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-6 bg-blue-50 rounded-lg border border-blue-200">
                    <h4 className="font-semibold text-blue-900 mb-2">AIP Conference Proceedings</h4>
                    <p className="text-sm text-gray-600">Selected papers will be published in AIP Conference Proceedings (Scopus Indexed)</p>
                  </div>
                  <div className="text-center p-6 bg-green-50 rounded-lg border border-green-200">
                    <h4 className="font-semibold text-green-900 mb-2">CRC Publications</h4>
                    <p className="text-sm text-gray-600">Outstanding papers may be invited for CRC Press publications</p>
                  </div>
                  <div className="text-center p-6 bg-purple-50 rounded-lg border border-purple-200">
                    <h4 className="font-semibold text-purple-900 mb-2">IJTE-ISTE Publications</h4>
                    <p className="text-sm text-gray-600">Quality papers will be considered for IJTE-ISTE journal publication</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact for Queries */}
          <div className="mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Contact for Paper Submission Queries</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Phone className="h-5 w-5 text-blue-600 mt-1" />
                      <div>
                        <p className="font-semibold">Dr. Budesh Kanwar</p>
                        <p className="text-gray-600">Program Chair</p>
                        <p className="text-gray-600">8127741447, 7458080822</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Mail className="h-5 w-5 text-blue-600 mt-1" />
                      <div>
                        <p className="text-gray-600">budesh.kanwar@poornima.org</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Phone className="h-5 w-5 text-blue-600 mt-1" />
                      <div>
                        <p className="font-semibold">Dr. Saurabh Raj</p>
                        <p className="text-gray-600">Organizing Chair</p>
                        <p className="text-gray-600">8127741447, 7458080822</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Mail className="h-5 w-5 text-blue-600 mt-1" />
                      <div>
                        <p className="text-gray-600">saurabh.raj@poornima.org</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t text-center">
                  <p className="text-gray-600">
                    General Inquiries: <a href="mailto:icracs@poornima.org" className="text-blue-600 hover:underline">icracs@poornima.org</a>
                  </p>
                  <p className="text-gray-600 mt-2">
                    Visit: <a href="http://icracs.poornima.org" className="text-blue-600 hover:underline">http://icracs.poornima.org</a>
                  </p>
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
