import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Eye, Zap, Shield, Users, TrendingUp } from "lucide-react";

const focusAreas = [
  {
    icon: <Brain className="h-6 w-6" />,
    title: "Neural Networks and Deep Learning Applications",
    description: "Deep learning architectures, neural network optimization, convolutional and recurrent networks, transformers, and generative models"
  },
  {
    icon: <Eye className="h-6 w-6" />,
    title: "Computer Vision and Pattern Recognition", 
    description: "Object detection and recognition, image processing, video analysis, medical imaging, biometric systems, and 3D vision"
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Smart Systems and IoT Applications",
    description: "Intelligent IoT systems, smart city infrastructure, industrial automation, energy management, and cyber-physical systems"
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Computational Intelligence for Security",
    description: "AI-driven cybersecurity, privacy-preserving machine learning, adversarial systems, and intelligent threat detection"
  }
];

const topics = [
  "Neural Networks and Deep Learning Applications", 
  "Evolutionary Computation and Bio-inspired Algorithms",
  "Computer Vision and Pattern Recognition",
  "Computational Intelligence for Smart Energy Systems",
  "IoT and Smart City Applications with CI Techniques",
  "Swarm Intelligence and Multi-agent Systems",
  "Genetic Algorithms for Optimization Problems",
  "Reinforcement Learning in Smart Environments",
  "Hybrid Intelligent Systems",
  "Security and Privacy through Computational Intelligence",
  "Quantum Machine Learning",
  "Neuromorphic Computing",
  "Edge AI and Distributed Intelligence",
  "Explainable AI and Ethics",
  "Brain-Computer Interfaces"
];

const stats2025 = [
  { label: "Total Submissions", value: "831", color: "blue" },
  { label: "Accepted Papers", value: "202", color: "green" },
  { label: "Acceptance Rate", value: "24%", color: "purple" },
  { label: "Countries Represented", value: "8", color: "orange" }
];

const projections2026 = [
  { label: "Expected Submissions", value: "1500+", color: "blue" },
  { label: "Target Accepted Papers", value: "250", color: "green" },
  { label: "Target Acceptance Rate", value: "16-18%", color: "purple" },
  { label: "Expected Participants", value: "1000+", color: "orange" }
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
                ICRACS2026 focuses on the revolutionary applications of Artificial Intelligence, Computer Vision, and 
                Smart Systems in emerging technologies. The conference addresses the critical integration of AI techniques 
                including deep learning, machine learning, pattern recognition, natural language processing, and computer 
                vision in smart city infrastructure, industrial automation, and energy systems.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                The conference serves as a premier platform for researchers, academicians, and industry professionals 
                to share innovative AI solutions that enhance efficiency, stability, robustness, and security of smart 
                systems through computational intelligence paradigms. With IEEE CIS technical co-sponsorship, ICRACS2026 
                maintains the highest standards of technical excellence and global reach.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Beyond traditional paper presentations, the conference features specialized workshops on &ldquo;Computational 
                Intelligence for Sustainable Energy Systems&rdquo; and panel discussions on &ldquo;Neural Networks for Computer Vision&rdquo;, 
                creating a comprehensive platform for knowledge exchange and collaboration across the global CIS community.
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
