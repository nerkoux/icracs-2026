import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const publicationPartners = [
  {
    name: "AIP Conference Proceedings",
    logo: "/publications-technical/AIP.png",
    note: "*"
  },
  {
    name: "CRC Publications",
    logo: "/publications-technical/crcpress.jpg",
    note: "*"
  },
  {
    name: "IJTE-ISTE Publications",
    logo: "/publications-technical/ijte.png",
    note: "*"
  }
];

const technicalPartners = [
  {
    name: "Indian Society for Technical Education",
    logo: "/publications-technical/ijte.png"
  },
  {
    name: "Institute of Electrical and Electronics Engineers",
    logo: "/publications-technical/ieee.png"
  },
  {
    name: "Association for Computing Machinery",
    logo: "/publications-technical/acm.png"
  }
];

export default function PublicationPartners() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Publication Partners */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Publication Partners
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {publicationPartners.map((partner, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="flex items-center justify-center h-20 mb-4">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={120}
                      height={60}
                      className="object-contain max-h-full"
                    />
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm">
                    {partner.name}{partner.note}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Technical Partners */}
        <div>
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Technical Partners
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {technicalPartners.map((partner, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="flex items-center justify-center h-20 mb-4">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={120}
                      height={60}
                      className="object-contain max-h-full"
                    />
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm">
                    {partner.name}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-600">
            * The Microsoft CMT service was used for managing the peer-reviewing process for this conference.
          </p>
        </div>
      </div>
    </section>
  );
}
