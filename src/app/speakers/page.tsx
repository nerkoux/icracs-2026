import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Building, Award } from "lucide-react";

const keynoteSpeakers = [
  {
    name: "Prof. (Dr.) Ravi Kumar Arya",
    title: "Professor",
    affiliation: "Zhingshan Institute of Changchun University of Science and Technology, China",
    expertise: ["Wireless Communications", "Signal Processing", "AI in Telecommunications"],
    bio: "Leading researcher in wireless communications and AI applications in telecommunications systems.",
    category: "keynote",
    image: "/speakers/ravikumar.jpg"
  },
  {
    name: "Dr. Ankit Agrawal",
    title: "Research Professor",
    affiliation: "Department of Electrical and Computer Engineering, McCormick School of Engineering and Applied Science, Northwestern University",
    expertise: ["Machine Learning", "Data Science", "High Performance Computing"],
    bio: "Expert in machine learning applications and high-performance computing for large-scale data analysis.",
    category: "keynote",
    image: "/speakers/Ankitagarwal.jpg"
  },
  {
    name: "Dr. Vijayshri Chaurasiya",
    title: "Associate Professor",
    affiliation: "Maulana Azad National Institute of Technology, Bhopal",
    expertise: ["Computer Vision", "Image Processing", "Pattern Recognition"],
    bio: "Specialist in computer vision and image processing with focus on pattern recognition applications.",
    category: "keynote",
    image: "/speakers/VijayshriChaurasia.jpg"
  },
  {
    name: "Prof. (Dr.) Sandeep Saxena",
    title: "Professor & Head",
    affiliation: "JIMS Greater Noida, Senior Member IEEE",
    expertise: ["Artificial Intelligence", "Machine Learning", "Educational Technology"],
    bio: "Keynote Speaker, Associate Editor, and Resource Person with extensive experience in AI research and education.",
    category: "keynote",
    image: "/speakers/sandeepsaxena.jpg"
  }
];

const pastSpeakers = [
  {
    name: "Dr. Akash Saxena",
    title: "Professor",
    affiliation: "Central University of Haryana, Mahendergarh",
    expertise: ["Artificial Intelligence", "Optimization Algorithms", "Data Science"],
    bio: "Distinguished researcher ranked among top 2% scientists of Artificial Intelligence by Elsevier and Stanford University.",
    category: "past",
    year: "ICRACS 2025",
    image: "/speakers/AkashSaxena.jpg"
  }
];

const invitedSpeakers = [
  {
    name: "Prof. Brij Gupta",
    title: "Distinguished Professor",
    affiliation: "Director, Center for AI and Cyber Security | Board of Governors, IEEE CT Society",
    expertise: ["Cybersecurity", "AI Security", "Network Security"],
    bio: "Editor-in-Chief of SCIE Indexed journal and Clarivate Highly Cited Researcher (0.1%).",
    category: "invited",
    image: "/speakers/brij-gupta.jpg"
  },
  {
    name: "Dr. Dharm Singh",
    title: "Professor of Computer Science",
    affiliation: "Namibia University of Science and Technology (NUST)",
    expertise: ["Computer Science", "Software Engineering", "Distributed Systems"],
    bio: "Experienced professor with extensive research in computer science and software engineering.",
    category: "invited",
    image: "/speakers/dharmsingh.jpg"
  }
];

interface Speaker {
  name: string;
  title: string;
  affiliation: string;
  expertise: string[];
  bio: string;
  category: string;
  year?: string;
  image?: string;
}

interface SpeakerCardProps {
  speaker: Speaker;
  colorScheme: string;
}

function SpeakerCard({ speaker, colorScheme }: SpeakerCardProps) {
  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue':
        return {
          bg: 'bg-blue-50',
          border: 'border-blue-200',
          badge: 'bg-blue-100 text-blue-800',
          text: 'text-blue-600'
        };
      case 'green':
        return {
          bg: 'bg-green-50',
          border: 'border-green-200',
          badge: 'bg-green-100 text-green-800',
          text: 'text-green-600'
        };
      case 'purple':
        return {
          bg: 'bg-purple-50',
          border: 'border-purple-200',
          badge: 'bg-purple-100 text-purple-800',
          text: 'text-purple-600'
        };
      default:
        return {
          bg: 'bg-gray-50',
          border: 'border-gray-200',
          badge: 'bg-gray-100 text-gray-800',
          text: 'text-gray-600'
        };
    }
  };

  const colors = getColorClasses(colorScheme);

  return (
    <Card className={`h-full hover:shadow-lg transition-shadow ${colors.bg} ${colors.border}`}>
      <CardContent className="p-6">
        <div className="flex items-start space-x-4 mb-4">
          <div className="relative">
            <Avatar className="h-20 w-20">
              {speaker.image ? (
                <AvatarImage 
                  src={speaker.image} 
                  alt={speaker.name}
                  className="object-cover"
                />
              ) : null}
              <AvatarFallback className={`text-lg font-bold ${colors.badge}`}>
                {speaker.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
              </AvatarFallback>
            </Avatar>
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 mb-1">{speaker.name}</h3>
            <p className={`font-semibold mb-2 ${colors.text}`}>{speaker.title}</p>
            <div className="flex items-start space-x-2 mb-3">
              <Building className={`h-4 w-4 mt-1 ${colors.text}`} />
              <p className="text-sm text-gray-700 leading-relaxed">{speaker.affiliation}</p>
            </div>
            {speaker.year && (
              <Badge variant="outline" className={colors.badge}>
                {speaker.year}
              </Badge>
            )}
          </div>
        </div>
        
        <div className="mb-4">
          <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
            <Award className={`h-4 w-4 mr-2 ${colors.text}`} />
            Areas of Expertise
          </h4>
          <div className="flex flex-wrap gap-2">
            {speaker.expertise.map((area, index) => (
              <Badge key={index} variant="secondary" className={`text-xs ${colors.badge}`}>
                {area}
              </Badge>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Biography</h4>
          <p className="text-sm text-gray-700 leading-relaxed">{speaker.bio}</p>
        </div>
      </CardContent>
    </Card>
  );
}

export default function SpeakersPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 pt-16">
        {/* Hero Section */}
        <section className="bg-blue-600 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Keynote Speakers</h1>
            <p className="text-xl opacity-90">Distinguished experts sharing their insights at ICRACS 2026</p>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12">
          {/* Keynote Speakers Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Keynote Speakers</h2>
              <p className="text-lg text-gray-600">Leading researchers and industry experts</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {keynoteSpeakers.map((speaker, index) => (
                <SpeakerCard 
                  key={index} 
                  speaker={speaker} 
                  colorScheme="blue"
                />
              ))}
            </div>
          </div>

          {/* Invited Speakers Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Invited Speakers</h2>
              <p className="text-lg text-gray-600">Special invited talks from renowned experts</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {invitedSpeakers.map((speaker, index) => (
                <SpeakerCard 
                  key={index} 
                  speaker={speaker} 
                  colorScheme="green"
                />
              ))}
            </div>
          </div>

          {/* Past Speakers Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Past Speakers</h2>
              <p className="text-lg text-gray-600">Distinguished speakers from previous ICRACS conferences</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {pastSpeakers.map((speaker, index) => (
                <SpeakerCard 
                  key={index} 
                  speaker={speaker} 
                  colorScheme="purple"
                />
              ))}
            </div>
          </div>

          {/* Speaker Information */}
          <Card className="bg-blue-50 border-blue-200">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-900 text-center">
                Speaker Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-blue-900 mb-3">Keynote Sessions</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                      <span>45-minute presentations followed by Q&A</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                      <span>Focus on cutting-edge research and industry trends</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                      <span>Interactive discussions with conference participants</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-900 mb-3">Topics Coverage</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                      <span>Latest advances in AI and Machine Learning</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                      <span>Computer Vision and Image Processing innovations</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                      <span>Smart Systems and IoT applications</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                      <span>Cybersecurity and AI integration</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-900 mb-2">Speaking Opportunities</h4>
                <p className="text-sm text-gray-700">
                  We welcome proposals from distinguished researchers and industry leaders who would like to 
                  share their expertise at ICRACS 2026. Please contact our organizing committee for speaking 
                  opportunities and collaboration possibilities.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </>
  );
}
