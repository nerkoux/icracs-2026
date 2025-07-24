import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const committeeData = {
  honoraryChair: [
    {
      name: "Prof. Brij Gupta",
      title: "Distinguished Professor of Computer Science",
      affiliation: "Director, Center for AI and Cyber Security | IITian | Board of Governors, IEEE CT Society",
      description: "Editor-in-Chief (SCIE Indexed journal) | Clarivate Highly Cited Researcher (0.1%)"
    }
  ],
  generalChair: [
    {
      name: "Dr. Dharm Singh", 
      title: "Professor of Computer Science",
      affiliation: "Namibia University of Science and Technology (NUST)"
    }
  ],
  conferenceChair: [
    {
      name: "Dr. Dinesh Goyal",
      title: "Principal & Professor",
      affiliation: "Poornima Institute of Engineering & Technology",
      description: "PhD in Computer Science, 15+ years experience in AI research"
    }
  ],
  programChair: [
    {
      name: "Dr. Budesh Kanwar",
      title: "Professor & Head",
      affiliation: "Department of Artificial Intelligence & Data Science, PIET",
      description: "IEEE Senior Member, Expert in Machine Learning and Computer Vision"
    }
  ],
  technicalCommittee: [
    {
      name: "Prof. Joaquim Jorge",
      title: "UNESCO Chair on AI & XR",
      affiliation: "Eurographics & IEEE Fellow"
    },
    {
      name: "Prof. Saurabh Sinha",
      title: "Professor, Executive Dean",
      affiliation: "University of Canterbury | Chartered Professional Engineer | Board Member, IEEE Foundation"
    },
    {
      name: "Dr. Sandeep Gupta",
      title: "Professor",
      affiliation: "Department of Artificial Intelligence & Data Science, PIET",
      description: "Specialist in Smart Systems and IoT Applications"
    },
    {
      name: "Dr. Saurabh Raj",
      title: "Assistant Professor",
      affiliation: "PIET",
      description: "IEEE Member, IoT, Sensors"
    }
  ],
  publicityChair: [
    {
      name: "Prof. Marcin Paprzycki",
      title: "Associate Professor",
      affiliation: "Systems Research Institute Polish Academy of Sciences, Warsaw, Poland"
    },
    {
      name: "Dr. Ankit Agrawal",
      title: "Research Professor",
      affiliation: "Northwestern University, Evanston, Illinois, United States"
    },
    {
      name: "Dr. Payal Bansal",
      title: "Senior Member IEEE, Professor",
      affiliation: "Poornima Institute of Engineering & Technology"
    },
    {
      name: "Ms. Alka Rani",
      title: "Member IEEE, Assistant Professor",
      affiliation: "Poornima Institute of Engineering & Technology"
    }
  ],
  financeChair: [
    {
      name: "Dr. Uday Pratap Singh",
      title: "Associate Professor",
      affiliation: "Poornima Institute of Engineering & Technology"
    }
  ],
  internationalAdvisory: [
    {
      name: "Manfred (Fred) Schindler",
      title: "2024 IEEE VP Technical Activities",
      affiliation: "RF, Microwave, and Semiconductor Engineering | IEEE Fellow"
    },
    {
      name: "Ravi Kumar ARYA",
      title: "Director",
      affiliation: "Xiangshan Laboratory Wireless Group, Xiangshan Laboratory, Zhongshan Institute, China"
    },
    {
      name: "Prof. Witold Pedrycz",
      title: "Professor",
      affiliation: "University of Alberta, Edmonton, Alberta, Canada"
    },
    {
      name: "Prof. Janusz Kacprzyk",
      title: "Professor of Computer Science",
      affiliation: "Systems Research Institute, Polish Academy of Sciences, Warsaw University of Technology, Poland"
    }
  ],
  nationalAdvisory: [
    {
      name: "Dr. Veerpratap Meena",
      title: "Assistant Professor",
      affiliation: "NIT Jamshedpur | IEEE Systems Council Systems Education Technical Committee Chair"
    },
    {
      name: "Dr. Nilanjan Dey",
      title: "Professor, PhD., SMIEEE",
      affiliation: "Department of Computer Science and Engineering, Techno International New Town, Kolkata, India"
    },
    {
      name: "Dr. Deepak Garg",
      title: "VC | AI Expert | Growth Specialist",
      affiliation: "Technology Leader"
    },
    {
      name: "Dr. Akash Saxena",
      title: "Professor",
      affiliation: "Ranked amongst top 2% scientists of AI by Elsevier and Stanford university | Senior Member IEEE"
    },
    {
      name: "Dr. Ghanshyam Singh",
      title: "Professor",
      affiliation: "Department of Electronics and Communication Engineering, MNIT Jaipur"
    },
    {
      name: "Dr. Pankaj Dadheech",
      title: "Professor",
      affiliation: "Swami Keshvanand Institute of Technology Management and Gramothan (SKIT)"
    }
  ],
  cisInvolvement: [
    {
      name: "Dr. Budesh Kanwar",
      title: "Professor & Head, IEEE Senior Member, CIS Member",
      affiliation: "Department of AI & DS, PIET",
      description: "Expert in Machine Learning and Computer Vision"
    },
    {
      name: "Dr. Saurabh Raj",
      title: "Associate Professor, IEEE Member, CIS Member",
      affiliation: "Department of AI & DS, PIET",
      description: "Expert IoT, Sensors"
    },
    {
      name: "Ms. Bhawana Purohit",
      title: "Assistant Professor, IEEE Member, CIS Member",
      affiliation: "Department of AI & DS, PIET",
      description: "Workshop Coordinator"
    },
    {
      name: "Dr. Sandeep Gupta",
      title: "Professor, IEEE Member, CIS Member",
      affiliation: "Department of AI & DS, PIET",
      description: "Specialist in Smart Systems and IoT Applications"
    },
    {
      name: "Dr. Ashish Laddha",
      title: "Associate Professor, IEEE Member",
      affiliation: "PIET"
    },
    {
      name: "Mr. Kartikey Sharma",
      title: "IEEE CIS Student Member",
      affiliation: "Poornima Institute of Engineering & Technology",
      description: "Student Activities Coordinator, Computer Vision and Pattern Recognition"
    }
  ]
};

interface CommitteeMember {
  name: string;
  title: string;
  affiliation: string;
  description?: string;
}

interface CommitteeSectionProps {
  title: string;
  members: CommitteeMember[];
  color: string;
}

function CommitteeSection({ title, members, color }: CommitteeSectionProps) {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className={`text-2xl text-${color}-600 border-b border-${color}-200 pb-2`}>
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {members.map((member, index) => (
            <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
              <Avatar className="h-12 w-12">
                <AvatarFallback className={`bg-${color}-100 text-${color}-700 font-semibold`}>
                  {member.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-gray-900 text-sm leading-tight">{member.name}</h4>
                <p className="text-xs text-blue-600 font-medium mb-1">{member.title}</p>
                <p className="text-xs text-gray-600 mb-2 leading-relaxed">{member.affiliation}</p>
                {member.description && (
                  <p className="text-xs text-gray-500 leading-relaxed">{member.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export default function CommitteePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 pt-16">
        {/* Hero Section */}
        <section className="bg-blue-600 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Organizing Committee</h1>
            <p className="text-xl opacity-90">Meet the distinguished leaders organizing ICRACS 2026</p>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12">
          <CommitteeSection 
            title="Honorary Chair" 
            members={committeeData.honoraryChair} 
            color="purple" 
          />
          
          <CommitteeSection 
            title="General Chair" 
            members={committeeData.generalChair} 
            color="blue" 
          />
          
          <CommitteeSection 
            title="Conference Chair" 
            members={committeeData.conferenceChair} 
            color="green" 
          />
          
          <CommitteeSection 
            title="Program Chair" 
            members={committeeData.programChair} 
            color="red" 
          />
          
          <CommitteeSection 
            title="Technical Program Committee" 
            members={committeeData.technicalCommittee} 
            color="indigo" 
          />
          
          <CommitteeSection 
            title="Publicity Chair" 
            members={committeeData.publicityChair} 
            color="pink" 
          />
          
          <CommitteeSection 
            title="Finance Chair" 
            members={committeeData.financeChair} 
            color="yellow" 
          />
          
          <CommitteeSection 
            title="International Advisory Board" 
            members={committeeData.internationalAdvisory} 
            color="teal" 
          />
          
          <CommitteeSection 
            title="National Advisory Board" 
            members={committeeData.nationalAdvisory} 
            color="orange" 
          />
          
          {/* CIS Involvement Section */}
          <Card className="bg-blue-50 border-blue-200">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-800 text-center">
                IEEE CIS (Computational Intelligence Society) Involvement
              </CardTitle>
              <p className="text-center text-blue-700">Confirmed IEEE CIS Members in Organizing Roles</p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {committeeData.cisInvolvement.map((member, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-white rounded-lg border border-blue-200">
                    <Avatar className="h-12 w-12">
                      <AvatarFallback className="bg-blue-100 text-blue-700 font-semibold">
                        {member.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 text-sm">{member.name}</h4>
                      <div className="flex flex-wrap gap-1 my-2">
                        <Badge variant="secondary" className="text-xs bg-blue-100 text-blue-800">
                          IEEE CIS Member
                        </Badge>
                      </div>
                      <p className="text-xs text-blue-600 font-medium mb-1">{member.title}</p>
                      <p className="text-xs text-gray-600 mb-2">{member.affiliation}</p>
                      {member.description && (
                        <p className="text-xs text-gray-500">{member.description}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </>
  );
}
