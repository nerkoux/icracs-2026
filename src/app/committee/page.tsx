import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const committeeData = {
  honoraryPatron: [
    {
      name: "Mr. Hari Singh Director",
      title: "Director",
      affiliation: "Poornima Group, Jaipur"
    },
    {
      name: "Mr. MKM Shah Director",
      title: "Director",
      affiliation: "Poornima Group, Jaipur"
    }
  ],
  honoraryChair: [
    {
      name: "Dr. Brij Bhushan Gupta",
      title: "Board of governors, IEEE CT Society",
      affiliation: ""
    }
  ],
  generalChair: [
    {
      name: "Dr. Dharam Singh", 
      title: "Professor of Computer Science",
      affiliation: ""
    }
  ],
  conferenceChair: [
    {
      name: "Prof. (Dr.) Dinesh Goyal",
      title: "Professor and Prinicipal, PIET",
      affiliation: ""
    }
  ],
  programChair: [
    {
      name: "Dr. Budesh Kanwar",
      title: "HOD, Dept. of AI&DS, PIET",
      affiliation: ""
    }
  ],
  organizingChair: [
    {
      name: "Dr. Shipra Bhatia",
      title: "Assistant Professor, Dept. of AI&DS, PIET",
      affiliation: ""
    },
    {
      name: "Dr. Aditya Pundir",
      title: "Professor, Dept. of AI&DS, PIET",
      affiliation: ""
    }
  ],
  organizingCommittee: [
    {
      name: "Dr. Ajay Maurya",
      title: "Professor, Dept. of AI&DS, PIET",
      affiliation: ""
    },
    {
      name: "Dr. Umesh Kumar",
      title: "Associate Professor, Dept. of AI&DS, PIET",
      affiliation: ""
    },
    {
      name: "Dr. Priya Mathur",
      title: "Professor, Dept. of AI&DS, PIET",
      affiliation: ""
    },
    {
      name: "Dr. Ebtasam Ahmad Siddiqui",
      title: "Assistant Professor, Dept. of AI&DS, PIET",
      affiliation: ""
    },
    {
      name: "Mr. Kamal Saini",
      title: "Assistant Professor, Dept. of AI&DS, PIET",
      affiliation: ""
    },
    {
      name: "Mr. Punit Kumar",
      title: "Assistant Professor, Dept. of AI&DS, PIET",
      affiliation: ""
    },
    {
      name: "Mr. Mohnish Sachdeva",
      title: "Assistant Professor, Dept. of AI&DS, PIET",
      affiliation: ""
    },
    {
      name: "Ms. Bhawana Purohit",
      title: "Assistant Professor, Dept. of AI&DS, PIET",
      affiliation: ""
    },
    {
      name: "Ms. Krishna Gupta",
      title: "Assistant Professor, Dept. of AI&DS, PIET",
      affiliation: ""
    },
    {
      name: "Mr. Vaibhav Shekhawat",
      title: "Assistant Professor, Dept. of AI&DS, PIET",
      affiliation: ""
    },
    {
      name: "Mr. Vikas Kumar",
      title: "Assistant Professor, Dept. of AI&DS, PIET",
      affiliation: ""
    },
    {
      name: "Ms. Bhawana Kumari",
      title: "Assistant Professor, Dept. of AI&DS, PIET",
      affiliation: ""
    },
    {
      name: "Mr. Anurag Anand Dubey",
      title: "Assistant Professor, Dept. of AI&DS, PIET",
      affiliation: ""
    },
    {
      name: "Mr. Bharat Thathera",
      title: "Assistant Professor, Dept. of AI&DS, PIET",
      affiliation: ""
    },
    {
      name: "Mr. Rohit Kumar",
      title: "Assistant Professor, Dept. of AI&DS, PIET",
      affiliation: ""
    },
    {
      name: "Mr. Girdhari Lal",
      title: "Assistant Professor, Dept. of AI&DS, PIET",
      affiliation: ""
    }
  ],
  technicalCommittee: [
    {
      name: "Dr. Valentina E. Balas",
      title: "Full Professor, Department of Automatics",
      affiliation: ""
    },
    {
      name: "Dr. Joaquim Jorge",
      title: "UNESCO Chair on AI & XR",
      affiliation: ""
    },
    {
      name: "Prof. Seeram Ramakrishna",
      title: "Vice president research strategy, Professor",
      affiliation: ""
    },
    {
      name: "Prof. San Murugesan",
      title: "Adjunct professor",
      affiliation: ""
    },
    {
      name: "Prof. Raman M. Unnikrishnan",
      title: "Dean professor Fellow IEEE",
      affiliation: ""
    },
    {
      name: "Dr. Naveen Sharma",
      title: "Professor, SE department",
      affiliation: ""
    },
    {
      name: "Prof. R.K. Joshi",
      title: "Department of CSE, IIT Bombay",
      affiliation: ""
    },
    {
      name: "Dr. Puneet Goyal",
      title: "Assistant Professor",
      affiliation: ""
    },
    {
      name: "Dr. Mauro Conti",
      title: "Professor, university of Padua, Italy",
      affiliation: ""
    },
    {
      name: "Prof. Albert Dipanda",
      title: "Professor, university of Bourgogne, France",
      affiliation: ""
    },
    {
      name: "Prof. Kokou Yetongnon",
      title: "Professor, university of Bourgogne, France",
      affiliation: ""
    },
    {
      name: "Dr. Xiao Zhi Gao",
      title: "Professor, LUT University, Finland",
      affiliation: ""
    },
    {
      name: "Dr. Ghasi Ram Verma",
      title: "Professor, University of Rhode Island, USA",
      affiliation: ""
    },
    {
      name: "Dr. Vaibhav Katewa",
      title: "University of California, USA",
      affiliation: ""
    },
    {
      name: "Dr. Sugam Sharma",
      title: "Iowa State University, USA",
      affiliation: ""
    },
    {
      name: "Dr. Soujanya Poria",
      title: "NT University, Singapore",
      affiliation: ""
    },
    {
      name: "Prof. K. Subramanian",
      title: "IEEE Delhi Section",
      affiliation: ""
    },
    {
      name: "Prof. Arun Sharma",
      title: "Managing Director - IGDTUW",
      affiliation: ""
    }
  ],
  publicityChair: [
    {
      name: "Dr. Marcin Paprzycki",
      title: "Polish Academy of Science, Poland",
      affiliation: ""
    },
    {
      name: "Dr. Ankit Agarwal",
      title: "Northernwest University, U.S.",
      affiliation: ""
    },
    {
      name: "Ms. Alka Rani",
      title: "PIET, Jaipur",
      affiliation: ""
    },
    {
      name: "Dr. Hitesh Mehta",
      title: "Founder Director.",
      affiliation: ""
    },
    {
      name: "Gajendra Deshpande",
      title: "Founder And Managing Director",
      affiliation: ""
    }
  ],
  financeChair: [
    {
      name: "Dr. Uday Pratap Singh",
      title: "Associate Professor Department of AI & DS, PIET",
      affiliation: ""
    },
    {
      name: "Dr. Pradeep Singh Bhati",
      title: "Lecturer Selection Grade, GPC Kota",
      affiliation: ""
    }
  ],
  internationalAdvisory: [
    {
      name: "Manfred (Fred) Schindler",
      title: "2024 IEEE Fellow",
      affiliation: ""
    },
    {
      name: "Ravi Kumar Arya",
      title: "Director, Xiangshan Laboratory Wireless Group",
      affiliation: ""
    },
    {
      name: "Dr. Witold Pedrycz",
      title: "Professor, University of Alberta, Canada",
      affiliation: ""
    },
    {
      name: "Dr. Janusz Kacprzyk",
      title: "Professor, Warsaw, Poland",
      affiliation: ""
    },
    {
      name: "Dr. Piero P. Bonissone",
      title: "IEEE Life Fellow",
      affiliation: ""
    },
    {
      name: "Dr. Badrul Hisham Ahmad",
      title: "Professor, UTeM, Malaysia",
      affiliation: ""
    },
    {
      name: "Dr. J. Eduardo Lugo",
      title: "Université de Montreal, Canada",
      affiliation: ""
    }
  ],
  nationalAdvisory: [
    {
      name: "Dr. Veerpratap Meena",
      title: "Assistant Professor, NIT Jamshedpur",
      affiliation: ""
    },
    {
      name: "Dr. Nilanjan Dey",
      title: "Professor, Techno International New Town, Kolkata",
      affiliation: ""
    },
    {
      name: "Dr. Deepak Garg",
      title: "Professor and Vice Chancellor, SR University",
      affiliation: ""
    },
    {
      name: "Dr. Akash Saxena",
      title: "Professor and Data Scientist, Stanford University",
      affiliation: ""
    },
    {
      name: "Dr. Ghanshyam Singh",
      title: "Professor, MNIT Jaipur",
      affiliation: ""
    }
  ]
};

interface CommitteeMember {
  name: string;
  title: string;
  affiliation: string;
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
                {member.affiliation && (
                  <p className="text-xs text-gray-600 mb-2 leading-relaxed">{member.affiliation}</p>
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
            title="Honorary Patron" 
            members={committeeData.honoraryPatron} 
            color="purple" 
          />

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
            title="Organizing Chair" 
            members={committeeData.organizingChair} 
            color="orange" 
          />

          <CommitteeSection 
            title="Organizing Committee" 
            members={committeeData.organizingCommittee} 
            color="teal" 
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
            title="International Advisory Committee" 
            members={committeeData.internationalAdvisory} 
            color="cyan" 
          />
          
          <CommitteeSection 
            title="National Advisory Committee" 
            members={committeeData.nationalAdvisory} 
            color="amber" 
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
