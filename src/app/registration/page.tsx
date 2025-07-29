import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Download, ExternalLink, Phone, Mail, MapPin } from "lucide-react";

const feeStructure = [
  {
    category: "Attendee",
    regularFee: "₹1,500",
    afterDeadline: "₹2,500"
  },
  {
    category: "UG Student Author (Member- ACM/ISTE/IEEE/FIP)",
    regularFee: "₹5,000",
    afterDeadline: "₹6,000"
  },
  {
    category: "UG Student Author (Non-Member- ACM/ISTE/IEEE/FIP)",
    regularFee: "₹6,000",
    afterDeadline: "₹7,000"
  },
  {
    category: "Post Graduate Scholar Author (Member- ACM/ISTE/IEEE/FIP)",
    regularFee: "₹7,000",
    afterDeadline: "₹8,000"
  },
  {
    category: "Post Graduate Scholar Author (Non-Member- ACM/ISTE/IEEE/FIP)",
    regularFee: "₹8,000",
    afterDeadline: "₹9,000"
  },
  {
    category: "Author-Faculty or Research Scholars (Member- ACM/ISTE/IEEE/FIP)",
    regularFee: "₹9,000",
    afterDeadline: "₹11,000"
  },
  {
    category: "Author-Faculty or Research Scholars (Non-Member- ACM/ISTE/IEEE/FIP)",
    regularFee: "₹10,000",
    afterDeadline: "₹12,000"
  },
  {
    category: "Corporate/Industry Professional",
    regularFee: "₹11,000",
    afterDeadline: "₹13,000"
  },
  {
    category: "Foreign Delegate (Member- ACM/ISTE/IEEE/FIP)",
    regularFee: "$180",
    afterDeadline: "$200"
  },
  {
    category: "Foreign Delegate (Non-Member- ACM/ISTE/IEEE/FIP)",
    regularFee: "$220",
    afterDeadline: "$250"
  }
];

const importantDates = [
  {
    event: "Paper Submission",
    oldDate: "February 15, 2025",
    newDate: "March 31, 2025",
    status: "extended"
  },
  {
    event: "Notification of Acceptance",
    oldDate: "March 01, 2025",
    newDate: "April 01, 2025",
    status: "extended"
  },
  {
    event: "Early Bird Registration",
    oldDate: "March 16, 2025",
    newDate: "April 03, 2025",
    status: "extended"
  },
  {
    event: "Late Registration",
    oldDate: "March 21, 2025",
    newDate: "April 07, 2025",
    status: "extended"
  },
  {
    event: "Revised Paper Submission (If Applicable)",
    oldDate: "",
    newDate: "April 10, 2025",
    status: "new"
  },
  {
    event: "Conference Dates",
    oldDate: "",
    newDate: "April 15-16, 2026",
    status: "confirmed"
  }
];

export default function RegistrationPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 pt-16">
        {/* Hero Section */}
        <section className="bg-blue-600 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Registration</h1>
            <p className="text-xl opacity-90">ICRACS 2026 - Join us for cutting-edge research presentations</p>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12">
          {/* Important Dates */}
          <div className="mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-center">Important Dates</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {importantDates.map((date, index) => (
                    <div key={index} className={`p-4 rounded-lg border-l-4 ${
                      date.status === 'extended' ? 'bg-yellow-50 border-yellow-500' :
                      date.status === 'new' ? 'bg-green-50 border-green-500' :
                      'bg-blue-50 border-blue-500'
                    }`}>
                      <h4 className="font-semibold text-gray-900 mb-2">{date.event}</h4>
                      {date.oldDate && (
                        <p className="text-sm text-gray-500 line-through">{date.oldDate}</p>
                      )}
                      <p className={`font-bold ${
                        date.status === 'extended' ? 'text-yellow-600' :
                        date.status === 'new' ? 'text-green-600' :
                        'text-blue-600'
                      }`}>
                        {date.newDate}
                      </p>
                      {date.status === 'extended' && (
                        <Badge variant="secondary" className="mt-1 bg-yellow-100 text-yellow-800">
                          Extended
                        </Badge>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Registration Guidelines */}
          <div className="mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Registration Guidelines</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                      <span>One of the authors must register for the conference and must present the paper himself/herself.</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                      <span>Online Registration fee shall be deposited in the account mentioned below.</span>
                    </li>
                  </ul>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="flex items-center space-x-2">
                    <ExternalLink className="h-4 w-4" />
                    <span>CMT Link: ICRACS2026</span>
                  </Button>
                  <Button variant="outline" className="flex items-center space-x-2">
                    <Download className="h-4 w-4" />
                    <span>Download Sample Paper</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Fee Structure */}
          <div className="mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Fee Structure</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="min-w-[300px]">Category</TableHead>
                        <TableHead className="text-center">Registration Fee</TableHead>
                        <TableHead className="text-center">After Deadline</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {feeStructure.map((fee, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium">{fee.category}</TableCell>
                          <TableCell className="text-center font-semibold text-green-600">
                            {fee.regularFee}
                          </TableCell>
                          <TableCell className="text-center font-semibold text-red-600">
                            {fee.afterDeadline}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Account Details */}
          <div className="mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Account Details</CardTitle>
                <p className="text-gray-600">For Conference Registration, Authors can pay fees to the following Bank Account:</p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900">Account Name</h4>
                      <p className="text-gray-700">POORNIMA INSTITUTE PART TWO</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Account Number</h4>
                      <p className="text-gray-700 font-mono">50200067728688</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">IFSC Code</h4>
                      <p className="text-gray-700 font-mono">HDFC0003873</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900">Bank</h4>
                      <p className="text-gray-700">HDFC BANK LTD. F-129 RIICO INDUSTRIAL AREA SITAPURA JAIPUR</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">SWIFT Code</h4>
                      <p className="text-gray-700 font-mono">HDFCINBBXXX</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Phone className="h-5 w-5 text-blue-600 mt-1" />
                      <div>
                        <p className="font-semibold">Dr. Budesh Kanwar</p>
                        <p className="text-gray-600">9460503316</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Mail className="h-5 w-5 text-blue-600 mt-1" />
                      <div>
                        <p className="text-gray-600">budesh.kanwar@poornima.org</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Phone className="h-5 w-5 text-blue-600 mt-1" />
                      <div>
                        <p className="font-semibold">Dr. Saurabh Raj</p>
                        <p className="text-gray-600">8127741447, 7458080822</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Mail className="h-5 w-5 text-blue-600 mt-1" />
                      <div>
                        <p className="text-gray-600">saurabh.raj@poornima.org</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-blue-600 mt-1" />
                    <div>
                      <p className="font-semibold">Address</p>
                      <p className="text-gray-600">ISI-2, RIICO Institutional Area, Sitapura, Jaipur - 302022</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 mt-4">
                    <Mail className="h-5 w-5 text-blue-600 mt-1" />
                    <div>
                      <p className="font-semibold">General Inquiry</p>
                      <p className="text-gray-600">icracs@poornima.org</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
