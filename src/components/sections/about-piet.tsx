import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, GraduationCap, Users, Trophy } from "lucide-react";
import Image from "next/image";

const achievements = [
  {
    icon: <Award className="h-6 w-6" />,
    title: "NAAC Accredited",
    description: "Accredited by National Assessment and Accreditation Council"
  },
  {
    icon: <Trophy className="h-6 w-6" />,
    title: "PLATINUM Rating",
    description: "Rated PLATINUM in AICTE-CII Survey of Industry Linked Technical Institutes"
  },
  {
    icon: <GraduationCap className="h-6 w-6" />,
    title: "NBA Accredited",
    description: "B.Tech CSE and Civil Engineering programs accredited by NBA"
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "3rd in QIV Ranking",
    description: "Ranked 3rd in Quality of Infrastructure and Viability ranking"
  }
];

const highlights = [
  "1st institution to offer B.Tech CSE in Regional language",
  "Only institute in Rajasthan funded by AICTE with Rs. 55 Lakh for IDEA Lab",
  "Granted Rs. 12.84 Lakh for Neural Network & Deep Learning Lab under MODROB Scheme",
  "Received research grants of more than Rs. 50 Lakh in 2019-20 & 2020-21"
];

export default function AboutPIET() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About PIET
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Poornima Institute of Engineering & Technology - A Premier Institution in Engineering Education
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Left Column - PIET Images */}
          <div className="space-y-6">
            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/piet.jpg"
                alt="PIET Campus View"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/piet2.jpg"
                alt="PIET Infrastructure"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Middle Column - About Content */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-blue-600">Excellence in Education Since 2007</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Poornima Institute of Engineering & Technology, Jaipur, PIET, a premier institution in 
                  engineering education was established in the academic year 2007. PIET is affiliated to 
                  Rajasthan Technical University and approved by AICTE.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  The institution aims at providing world-class technical and scientific education that 
                  can develop a professional outlook in every walk of life. PIET has been continuously 
                  striving for excellence in engineering education and research.
                </p>
                <div className="pt-4">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Achievements:</h4>
                  <div className="space-y-2">
                    {highlights.map((highlight, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                        <p className="text-sm text-gray-700">{highlight}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Achievements Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {achievements.map((achievement, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="text-blue-600 mb-4 flex justify-center">
                      {achievement.icon}
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">{achievement.title}</h4>
                    <p className="text-sm text-gray-600">{achievement.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Department Information */}
        <div className="mt-16">
          <Card className="bg-blue-50 border-blue-200">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-900 text-center">
                Department of Artificial Intelligence & Data Science
              </CardTitle>
              <p className="text-center text-blue-700">Founded in 2022</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-blue-900 mb-3">Vision</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    To expand and further the research, education and outreach activities in the areas 
                    of data science and artificial intelligence, becoming a world leader in data science 
                    research where long-standing fundamental research problems across multiple disciplines 
                    are targeted and solved.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-900 mb-3">Mission</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    To develop technocrats in the domain of emerging technology by making them ethical 
                    professionals with innovative knowledge and scientific temper to enrich society and 
                    face global challenges in AI and data science.
                  </p>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-blue-900 mb-3">Research Areas</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Deep Learning",
                    "Reinforcement Learning", 
                    "Network Analytics",
                    "Interpretable Machine Learning",
                    "Domain Aware AI",
                    "Computer Vision",
                    "Natural Language Processing"
                  ].map((area) => (
                    <Badge key={area} variant="secondary" className="bg-blue-100 text-blue-800">
                      {area}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
