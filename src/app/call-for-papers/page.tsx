import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Download, Phone, Mail } from "lucide-react";

const conferenceTracks = [
  {
    title: "Track 1: Neural Networks and Deep Learning",
    topics: [
      "Deep learning architectures",
      "Neural network optimization", 
      "Convolutional and recurrent networks",
      "Transformers and attention mechanisms",
      "Generative models",
      "Advanced training techniques for intelligent systems"
    ]
  },
  {
    title: "Track 2: Computer Vision and Pattern Recognition",
    topics: [
      "Object detection and recognition",
      "Image processing and analysis",
      "Video analysis and understanding",
      "Medical imaging applications",
      "Biometric systems",
      "3D vision and visual perception applications"
    ]
  },
  {
    title: "Track 3: Smart Systems and IoT Applications",
    topics: [
      "Intelligent IoT systems",
      "Smart city infrastructure",
      "Industrial automation",
      "Energy management systems",
      "Healthcare applications",
      "Computational intelligence in cyber-physical systems"
    ]
  },
  {
    title: "Track 4: Computational Intelligence for Security and Privacy",
    topics: [
      "AI-driven cybersecurity",
      "Privacy-preserving machine learning",
      "Adversarial systems and defenses",
      "Blockchain integration with AI",
      "Biometric security systems",
      "Intelligent threat detection mechanisms"
    ]
  },
  {
    title: "Track 5: Reinforcement Learning and Intelligent Control",
    topics: [
      "Reinforcement learning algorithms",
      "Multi-agent systems",
      "Intelligent control strategies",
      "Robotics applications",
      "Game-theoretic learning",
      "Adaptive control in smart environments"
    ]
  },
  {
    title: "Track 6: Emerging Technologies and Applications",
    topics: [
      "Quantum machine learning",
      "Neuromorphic computing",
      "Edge AI and distributed intelligence",
      "Explainable AI and interpretability",
      "AI ethics and responsible AI",
      "Brain-computer interfaces"
    ]
  }
];

const reviewProcess = [
  {
    title: "THREE-LAYER PEER REVIEW",
    description: "All submissions undergo three-layer peer review: editorial review, TPC review, and external expert review with conflict of interest declarations."
  },
  {
    title: "IEEE CIS STANDARDS", 
    description: "Review criteria aligned with IEEE CIS standards: Technical Quality (40%), CIS Relevance (25%), Clarity (20%), Impact (15%)."
  },
  {
    title: "EXPERT REVIEWERS",
    description: "200+ qualified reviewers from IEEE CIS community with automated expertise matching and performance tracking."
  },
  {
    title: "PLAGIARISM DETECTION",
    description: "All submissions screened using Turnitin with maximum 15% similarity threshold and self-plagiarism verification."
  },
  {
    title: "MULTI-STAGE PROCESS",
    description: "Initial screening → Comprehensive review → Optional rebuttal → Final decision → Meta-review for borderline cases."
  },
  {
    title: "QUALITY METRICS",
    description: "Target 98%+ review completion rate with statistical analysis of inter-reviewer agreement and quality scoring."
  }
];

const submissionGuidelines = [
  {
    title: "Paper Format",
    description: "Papers must follow IEEE conference format and should not exceed 8 pages including references."
  },
  {
    title: "Acceptance Rate", 
    description: "Target acceptance rate: 16-18% with rigorous peer review to maintain high standards."
  },
  {
    title: "IEEE Standards",
    description: "All submissions must comply with IEEE ethical guidelines and originality requirements."
  },
  {
    title: "Presentation Requirement",
    description: "At least one author must register and present the paper at the conference if accepted."
  }
];

const importantDates = [
  {
    event: "Paper Submission Deadline",
    date: "February 17, 2026",
    status: "deadline"
  },
  {
    event: "Notification of Acceptance", 
    date: "March 10, 2026",
    status: "notification"
  },
  {
    event: "Camera-Ready Submission",
    date: "March 15, 2026", 
    status: "camera-ready"
  },
  {
    event: "Early Bird Registration",
    date: "March 21, 2026",
    status: "registration"
  },
  {
    event: "Conference Dates",
    date: "April 17-18, 2026",
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

          {/* Conference Tracks */}
          <div className="mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Conference Tracks</CardTitle>
                <p className="text-gray-600">ICRACS2026 features six specialized tracks aligned with IEEE CIS focus areas:</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {conferenceTracks.map((track, index) => (
                    <div key={index} className="p-4 bg-gray-50 rounded-lg border-l-4 border-blue-500">
                      <h4 className="font-semibold text-blue-900 mb-3">{track.title}</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {track.topics.map((topic, topicIndex) => (
                          <div key={topicIndex} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0" />
                            <span className="text-sm text-gray-700">{topic}</span>
                          </div>
                        ))}
                      </div>
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

          {/* Quality Assurance and Review Process */}
          <div className="mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Quality Assurance & Review Process</CardTitle>
                <p className="text-gray-600">Rigorous peer review system aligned with IEEE CIS standards</p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {reviewProcess.map((process, index) => (
                    <div key={index} className="p-4 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                      <h4 className="font-semibold text-purple-900 mb-2">{process.title}</h4>
                      <p className="text-gray-700 text-sm">{process.description}</p>
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

          {/* Publication Strategy */}
          <div className="mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Publication Strategy</CardTitle>
                <p className="text-gray-600">IEEE CIS Technical Co-Sponsorship ensures high-quality publication venues</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="p-6 bg-blue-50 rounded-lg border border-blue-200">
                    <h4 className="font-bold text-blue-900 mb-3 text-lg">Primary Publication</h4>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-blue-800">IEEE Xplore Digital Library</p>
                          <p className="text-sm text-gray-700">All accepted papers published in IEEE Conference Proceedings</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-blue-800">SCOPUS Indexing</p>
                          <p className="text-sm text-gray-700">Conference proceedings eligible for SCOPUS indexing</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-blue-800">DOI Assignment</p>
                          <p className="text-sm text-gray-700">Each paper receives a unique DOI identifier</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6 bg-green-50 rounded-lg border border-green-200">
                    <h4 className="font-bold text-green-900 mb-3 text-lg">Publication Timeline</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Camera-ready submissions deadline</span>
                        <span className="font-semibold text-green-800">March 15, 2026</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Conference proceedings available</span>
                        <span className="font-semibold text-green-800">Within 30 days post-conference</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Final proceedings in IEEE Xplore</span>
                        <span className="font-semibold text-green-800">By May 30, 2026</span>
                      </div>
                    </div>
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
                        <p className="text-gray-600">9460503316</p>
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
