import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const committeeData = {
  honoraryChair: [
    {
      name: "Dr. Brij Bhushan Gupta",
      title: "Distinguished Professor of Computer Science | Director, Center for AI and Cyber Security",
      affiliation: "Board of Governors, IEEE CT Society",
      description: "IEEE Senior Member"
    }
  ],
  generalChair: [
    {
      name: "Dr. Dharm Singh", 
      title: "Professor of Computer Science",
      affiliation: "Namibia University of Science and Technology (NUST)",
      description: "IEEE Senior Member"
    }
  ],
  conferenceChair: [
    {
      name: "Dr. Dinesh Goyal",
      title: "Professor, Principal",
      affiliation: "Poornima Institute of Engineering & Technology",
      description: "IEEE Senior Member"
    }
  ],
  programChair: [
    {
      name: "Dr. Budesh Kanwer",
      title: "Professor & Head, Department of Artificial Intelligence & Data Science",
      affiliation: "Poornima Institute of Engineering & Technology",
      description: "CIS & IEEE Senior Member"
    }
  ],
  technicalCommittee: [
    {
      name: "Dr. Valentina E. Balas",
      title: "Full Professor, Department of Automatics and Applied Software",
      affiliation: "Aurel Vlaicu University of Arad, Romania",
      description: "IEEE Fellow"
    },
    {
      name: "Dr. Joaquim Jorge",
      title: "UNESCO Chair on AI & XR",
      affiliation: "Eurographics & IEEE Fellow"
    },
    {
      name: "Prof. Seeram Ramakrishna",
      title: "Vice President Research Strategy, Professor",
      affiliation: "National University of Singapore (NUS)",
      description: "Distinguished Researcher"
    },
    {
      name: "Prof. San Murugesan",
      title: "Adjunct Professor, Western Sydney University",
      affiliation: "Director, BRITE Professional Services",
      description: "Golden Core Member, IEEE"
    },
    {
      name: "Prof. Raman M. Unnikrishnan",
      title: "Dean Professor Fellow IEEE",
      affiliation: "California State University, United States",
      description: "IEEE Fellow"
    },
    {
      name: "Dr. Naveen Sharma",
      title: "Professor and Chair, Software Engineering Department",
      affiliation: "Rochester Institute of Technology, NY, USA",
      description: "Distinguished Academic"
    },
    {
      name: "Prof. R.K. Joshi",
      title: "Professor",
      affiliation: "Department of Computer Science & Engineering, IIT Bombay",
      description: "Distinguished Researcher"
    },
    {
      name: "Dr. Puneet Goyal",
      title: "Associate Professor",
      affiliation: "Department of Computer Science & Engineering, IIT Ropar",
      description: "IIT Faculty"
    }
  ],
  publicityChair: [
    {
      name: "Dr. Marcin Paprzycki",
      title: "Associate Professor",
      affiliation: "Systems Research Institute Polish Academy of Sciences",
      description: "Senior Member IEEE"
    },
    {
      name: "Dr. Ankit Agrawal",
      title: "Research Professor",
      affiliation: "Northwestern University, Evanston, Illinois, United States"
    },
    {
      name: "Ms. Alka Rani",
      title: "Assistant Professor",
      affiliation: "Poornima Institute of Engineering & Technology",
      description: "Member IEEE"
    },
    {
      name: "Dr. Hitesh Mehta",
      title: "Founder Director",
      affiliation: "Aahan (Inc) Pte Ltd, Singapore, CEO of Eagle Photonics Pvt Ltd",
      description: "SMIEEE"
    }
  ],
  financeChair: [
    {
      name: "Dr. Uday Pratap Singh",
      title: "Associate Professor",
      affiliation: "Poornima Institute of Engineering & Technology"
    },
    {
      name: "Dr. Pradeep Singh Bhati",
      title: "Professor",
      affiliation: "Jai Narain Vyas University",
      description: "Expert in Computer Science applications, IEEE Member"
    }
  ],
  internationalAdvisory: [
    {
      name: "Manfred (Fred) Schindler",
      title: "2024 IEEE VP Technical Activities",
      affiliation: "RF, Microwave, and Semiconductor Engineering",
      description: "IEEE Fellow"
    },
    {
      name: "Ravi Kumar ARYA",
      title: "Director",
      affiliation: "Xiangshan Laboratory Wireless Group, Xiangshan Laboratory, China",
      description: "Senior Member IEEE"
    },
    {
      name: "Dr. Witold Pedrycz",
      title: "Professor",
      affiliation: "University of Alberta Edmonton, Alberta, Canada",
      description: "Senior Member IEEE"
    },
    {
      name: "Dr. Janusz Kacprzyk",
      title: "Professor",
      affiliation: "Systems Research Institute, Polish Academy of Sciences, Warsaw, Poland",
      description: "Senior Member IEEE"
    },
    {
      name: "Dr. Piero P. Bonissone",
      title: "IEEE Life Fellow",
      affiliation: "Former President IEEE Computational Intelligence Society",
      description: "24 years of IEEE CIS leadership, Advanced Analytics Advisor"
    }
  ],
  nationalAdvisory: [
    {
      name: "Dr. Veerpratap Meena",
      title: "Assistant Professor",
      affiliation: "NIT Jamshedpur",
      description: "IEEE Systems Council Systems Education Technical Committee Chair"
    },
    {
      name: "Dr. Nilanjan Dey",
      title: "Professor",
      affiliation: "Department of Computer Science and Engineering, Techno International New Town, Kolkata",
      description: "Senior Member IEEE"
    },
    {
      name: "Dr. Deepak Garg",
      title: "Professor, Vice Chancellor",
      affiliation: "SR University, Director - leadingindia.ai",
      description: "Senior Member IEEE"
    },
    {
      name: "Dr. Akash Saxena",
      title: "Professor",
      affiliation: "Ranked amongst top 2% scientists by Elsevier and Stanford university",
      description: "Senior Member IEEE, Fellow IETE"
    },
    {
      name: "Dr. Ghanshyam Singh",
      title: "Professor",
      affiliation: "Department of Electronics and Communication Engineering, MNIT Jaipur",
      description: "Senior Member IEEE"
    }
  ],
  cisInvolvement: [
    {
      name: "Prof. Valentina E. Balas",
      title: "CIS Task Force Chair, Interdisciplinary Emergent Technologies",
      affiliation: "Professor, Aurel Valicu University of Arad, Romania",
      description: "IEEE CIS active member (Neural Networks & Soft Computing)"
    },
    {
      name: "Dr. Abhishek Gupta",
      title: "Associate Professor",
      affiliation: "Department of Electrical Engineering, Indian Institute of Technology Kanpur",
      description: "Young Faculty Fellow, Editor IEEE Trans. Wireless Commun."
    },
    {
      name: "Dr. Budesh Kanwer",
      title: "Program Chair",
      affiliation: "Professor & Head, Department of AI & Data Science, PIET",
      description: "IEEE Senior Member, CIS Member"
    },
    {
      name: "Dr. Sandeep Gupta",
      title: "Core Technical Program Committee",
      affiliation: "Professor, Department of AI & Data Science, PIET",
      description: "IEEE Member, CIS Member"
    },
    {
      name: "Prof. M.N. Hoda",
      title: "IEEE Delhi Section Leadership",
      affiliation: "Director, BVICAM, Executive Vice Chairperson, IEEE Delhi Section",
      description: "Closely engaged with IEEE CIS activities in Region 10"
    },
    {
      name: "Dr. A. Murali M. Rao",
      title: "Past Chair, IEEE CS, Delhi Section",
      affiliation: "IEEE Senior Member",
      description: "Active in IEEE CS & CIS Delhi Section initiatives"
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
