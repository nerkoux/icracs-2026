import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const publicationPartners = [
  
  {
    name: "IET Conference Proceedings",
    logo: "/publications-technical/iet.svg",
    description: "Institution of Engineering and Technology"
  },

  {
    name: "AIP Publishing",
    logo: "/publications-technical/AIP.png",
    description: "American Institute of Physics Publishing"
  }
];

const technicalPartners = [
  {
    name: "IEEE",
    logo: "/publications-technical/ieee.png",
    description: "Institute of Electrical and Electronics Engineers"
  },
  {
    name: "ACM",
    logo: "/publications-technical/acm.png",
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
          <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
            {publicationPartners.map((partner, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow border-2 hover:border-green-200 w-full md:w-80">
              <CardContent className="p-8">
                  <div className="relative h-24 mb-6 flex items-center justify-center">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={partner.name === "IET Conference Proceedings" ? 140 : 120}
                      height={partner.name === "IET Conference Proceedings" ? 90 : 80}
                      className="object-contain max-h-full"
                    />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2 text-lg">
                    {partner.name}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {partner.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Technical Partners */}
        <div>
          <h3 className="text-2xl font-bold text-center text-blue-900 mb-8">
            *Technically Supported By
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {technicalPartners.map((partner, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow border-2 hover:border-green-200">
                <CardContent className="p-8">
                  <div className="relative h-24 mb-6 flex items-center justify-center">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={120}
                      height={80}
                      className="object-contain max-h-full"
                    />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2 text-lg">
                    {partner.name}
                  </h4>
                  <p className="text-sm text-gray-600">
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
