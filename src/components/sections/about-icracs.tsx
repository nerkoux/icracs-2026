import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Eye, Zap, Shield, Users, TrendingUp } from "lucide-react";

const focusAreas = [
  {
    icon: <Brain className="h-6 w-6" />,
    title: "Artificial Intelligence and Machine Learning",
    description: "Deep learning, neural networks, and advanced AI algorithms"
  },
  {
    icon: <Eye className="h-6 w-6" />,
    title: "Computer Vision and Image Processing", 
    description: "Pattern recognition, image analysis, and visual computing"
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Smart Energy Systems and Grid Intelligence",
    description: "AI-powered energy management and smart grid technologies"
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Security and Privacy in Smart Systems",
    description: "Cybersecurity, privacy protection, and secure AI systems"
  }
];

const topics = [
  "Software Agents and Multi-Agent Systems",
  "Edge Data Authentication", 
  "Web Intelligence and Intrusion Detection",
  "High Performance Computing and Cyber Security",
  "Hybridisation of Intelligent Networks",
  "Web and Grid Computing",
  "Soft and Cognitive Computing",
  "Parallel and Distributed Computing",
  "Security Frameworks and Protocols",
  "Advanced Intelligent Systems in Access Control",
  "IoT and Smart City Applications",
  "Renewable Energy Integration through AI",
  "Human-Computer Interaction in Smart Environments"
];

const stats2025 = [
  { label: "Total Submissions", value: "285", color: "blue" },
  { label: "Accepted Papers", value: "53", color: "green" },
  { label: "Acceptance Rate", value: "18%", color: "purple" },
  { label: "Countries Represented", value: "8", color: "orange" }
];

const projections2026 = [
  { label: "Expected Submissions", value: "400+", color: "blue" },
  { label: "Target Accepted Papers", value: "75-90", color: "green" },
  { label: "Target Acceptance Rate", value: "18-20%", color: "purple" },
  { label: "Expected Countries", value: "15+", color: "orange" }
];

export default function AboutICRACS() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About ICRACS
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            International Conference on Recent Advances in Artificial Intelligence, Computer Vision & Smart Systems
          </p>
        </div>

        {/* Introduction */}
        <div className="mb-16">
          <Card className="border-none shadow-lg">
            <CardContent className="p-8">
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                Recent years have witnessed the evolution of Artificial Intelligence techniques like deep learning, 
                machine learning, pattern recognition, Natural language processing, and computer vision and their 
                revolutionary applications in emerging smart city and industrial automation applications.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                ICRACS 2026 serves as a premier platform for researchers, academicians, and industry professionals 
                to share innovative AI solutions that enhance the efficiency, stability, robustness, and security 
                of smart systems. The conference addresses the critical integration of AI techniques in smart city 
                infrastructure, industrial automation, and energy systems.
              </p>
              <p className="text-gray-700 leading-relaxed">
                As AI techniques continue to revolutionize energy generation, transmission, and consumption in smart 
                cities and industrial infrastructure, ICRACS provides a vital forum for exploring the integration 
                of renewable energy sources into smart grids using cutting-edge AI technologies.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Focus Areas */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Key Focus Areas</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {focusAreas.map((area, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="text-blue-600 mt-1">
                      {area.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">{area.title}</h4>
                      <p className="text-gray-600 text-sm">{area.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Conference Topics */}
        <div className="mb-16">
          <Card className="bg-gray-50">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Conference Topics Include</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {topics.map((topic, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0" />
                    <span className="text-sm text-gray-700">{topic}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Conference Statistics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* ICRACS 2025 Stats */}
          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-xl text-green-800 flex items-center space-x-2">
                <TrendingUp className="h-5 w-5" />
                <span>ICRACS 2025 Achievement</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                {stats2025.map((stat, index) => (
                  <div key={index} className="text-center p-4 bg-white rounded-lg border border-green-200">
                    <div className={`text-2xl font-bold text-${stat.color}-600 mb-1`}>
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* ICRACS 2026 Projections */}
          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-xl text-blue-800 flex items-center space-x-2">
                <Users className="h-5 w-5" />
                <span>ICRACS 2026 Projections</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                {projections2026.map((projection, index) => (
                  <div key={index} className="text-center p-4 bg-white rounded-lg border border-blue-200">
                    <div className={`text-2xl font-bold text-${projection.color}-600 mb-1`}>
                      {projection.value}
                    </div>
                    <div className="text-sm text-gray-600">{projection.label}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
