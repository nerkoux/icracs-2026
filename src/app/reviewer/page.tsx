import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, UserCheck, Shield, Clock } from "lucide-react";

export default function ReviewerPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 pt-16">
        {/* Hero Section */}
        <section className="bg-blue-600 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Become a Reviewer</h1>
            <p className="text-xl opacity-90">Join us in ensuring academic excellence at ICRACS 2026</p>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12">
          {/* Introduction */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <p className="text-lg text-gray-700 leading-relaxed">
                The Organizing Committee of <span className="font-semibold">ICRACS 2026</span> cordially invites 
                academicians, researchers, and industry professionals to serve as <span className="font-semibold">Reviewers</span> for 
                the conference.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mt-4">
                Reviewers will play a vital role in ensuring the technical quality and academic integrity of the 
                conference by evaluating submitted manuscripts based on <span className="font-semibold">originality</span>, 
                <span className="font-semibold"> technical soundness</span>, <span className="font-semibold">relevance</span>, and 
                <span className="font-semibold"> clarity</span>.
              </p>
            </CardContent>
          </Card>

          {/* Eligibility Section */}
          <div className="mb-8">
            <Card className="bg-blue-50 border-blue-200">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-900 flex items-center">
                  <UserCheck className="h-6 w-6 mr-2" />
                  Eligibility
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">PhD holders or senior researchers</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Faculty members, researchers, or industry experts</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Expertise in relevant conference tracks</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Responsibilities Section */}
          <div className="mb-8">
            <Card className="bg-green-50 border-green-200">
              <CardHeader>
                <CardTitle className="text-2xl text-green-900 flex items-center">
                  <Shield className="h-6 w-6 mr-2" />
                  Reviewer Responsibilities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Review assigned papers within the stipulated timeline</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Provide constructive and unbiased feedback</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Shield className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Maintain confidentiality and ethical standards</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Registration Form Section */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900 text-center">
                Reviewer Registration Form
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-700 mb-6">
                Interested experts are requested to register as reviewers by completing the Reviewer Registration Form below.
              </p>
              <div className="w-full">
                <iframe 
                  src="https://docs.google.com/forms/d/e/1FAIpQLSfLmUocx-lNk7w6CwbgBCEUuUKkwdZzIBcvjGFvYUWgkZHfwA/viewform?embedded=true"
                  width="100%" 
                  height="800"
                  className="border-0 rounded-lg shadow-sm"
                  title="Reviewer Registration Form"
                >
                  Loading form...
                </iframe>
                <div className="text-center mt-4">
                  <a 
                    href="https://forms.gle/VLKJxMtK3mB2iSDbA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Open Form in New Tab
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Closing Message */}
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
            <CardContent className="p-8 text-center">
              <p className="text-lg text-gray-800 font-medium">
                We look forward to your valuable contribution in making <span className="font-bold text-blue-600">ICRACS 2026</span> a 
                successful and high-quality academic event.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </>
  );
}
