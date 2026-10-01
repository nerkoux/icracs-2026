import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const technicalPartners = [
  {
    name: "PIET IEEE STUDENT CHAPTER",
    logo: "/images/piet-ieee.png",
    description: "Institute of Electrical and Electronics Engineers"
  },
  {
    name: "PIET ACM STUDENT CHAPTER",
    logo: "/images/piet-acm.png",
    description: "Association for Computing Machinery"
  }
];

export default function PublicationTechnicalPartners() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            *Publication & Technical Partners
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Collaborating with leading organizations for academic excellence and research dissemination
          </p>
        </div>

        {/* Publication Partners */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-blue-900 mb-8">
            *Publication Partners
          </h3>
          <div className="flex justify-center max-w-xl mx-auto">
            <Card className="w-full text-center hover:shadow-lg transition-shadow border-2 hover:border-blue-200">
              <CardContent className="p-8 flex items-center justify-center min-h-[140px]">
                <p className="text-lg md:text-xl font-medium text-gray-600">
                  Will be updated soon
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Technical Partners */}
        <div>
          <h3 className="text-2xl font-bold text-center text-blue-900 mb-8">
            *Technically Supported By
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {technicalPartners.map((partner, index) => (
              <Card key={index} className="overflow-hidden text-center hover:shadow-lg transition-shadow border-2 hover:border-blue-200">
                <CardContent className="p-8 flex flex-col items-center justify-center min-h-[180px] md:min-h-[200px]">
                  <div className="relative w-full h-28 md:h-32 flex items-center justify-center mb-4">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={320}
                      height={128}
                      className="object-contain max-h-full max-w-full"
                    />
                  </div>
                  <p className="text-sm text-gray-600 text-center">
                    {partner.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
