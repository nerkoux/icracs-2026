import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LinkButton } from "@/components/ui/link-button";
import { ExternalLink, Calendar, Clock, MapPin, Users } from "lucide-react";

const scheduleOverview = [
  {
    day: "Day 1 - April 15, 2026",
    events: [
      { time: "09:00 - 09:30", event: "Registration & Welcome Coffee", type: "registration" },
      { time: "09:30 - 10:00", event: "Opening Ceremony", type: "ceremony" },
      { time: "10:00 - 11:00", event: "Keynote Speech 1", type: "keynote" },
      { time: "11:00 - 11:15", event: "Coffee Break", type: "break" },
      { time: "11:15 - 12:30", event: "Technical Session 1: AI & Machine Learning", type: "technical" },
      { time: "12:30 - 13:30", event: "Lunch Break", type: "break" },
      { time: "13:30 - 14:30", event: "Keynote Speech 2", type: "keynote" },
      { time: "14:30 - 15:45", event: "Technical Session 2: Computer Vision", type: "technical" },
      { time: "15:45 - 16:00", event: "Tea Break", type: "break" },
      { time: "16:00 - 17:15", event: "Technical Session 3: Smart Systems", type: "technical" },
      { time: "17:15 - 17:30", event: "Day 1 Closing", type: "ceremony" }
    ]
  },
  {
    day: "Day 2 - April 16, 2026", 
    events: [
      { time: "09:00 - 09:30", event: "Registration & Morning Coffee", type: "registration" },
      { time: "09:30 - 10:30", event: "Keynote Speech 3", type: "keynote" },
      { time: "10:30 - 10:45", event: "Coffee Break", type: "break" },
      { time: "10:45 - 12:00", event: "Technical Session 4: IoT & Smart Cities", type: "technical" },
      { time: "12:00 - 13:00", event: "Lunch Break", type: "break" },
      { time: "13:00 - 14:00", event: "Panel Discussion: Future of AI", type: "panel" },
      { time: "14:00 - 15:15", event: "Technical Session 5: Security & Privacy", type: "technical" },
      { time: "15:15 - 15:30", event: "Tea Break", type: "break" },
      { time: "15:30 - 16:30", event: "Award Ceremony & Closing", type: "ceremony" }
    ]
  }
];

const eventTypeColors = {
  registration: "bg-green-100 text-green-800 border-green-200",
  ceremony: "bg-purple-100 text-purple-800 border-purple-200", 
  keynote: "bg-blue-100 text-blue-800 border-blue-200",
  technical: "bg-orange-100 text-orange-800 border-orange-200",
  panel: "bg-red-100 text-red-800 border-red-200",
  break: "bg-gray-100 text-gray-800 border-gray-200"
};

export default function AgendaPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 pt-16">
        {/* Hero Section */}
        <section className="bg-blue-600 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Conference Agenda</h1>
            <p className="text-xl opacity-90">Detailed schedule for ICRACS 2026</p>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12">
          {/* Conference Overview */}
          <div className="mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-center">Conference Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <Calendar className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <h4 className="font-semibold text-blue-900">Dates</h4>
                    <p className="text-sm text-gray-700">April 15-16, 2026</p>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
                    <MapPin className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <h4 className="font-semibold text-green-900">Venue</h4>
                    <p className="text-sm text-gray-700">PIET, Jaipur</p>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg border border-purple-200">
                    <Users className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                    <h4 className="font-semibold text-purple-900">Expected Attendees</h4>
                    <p className="text-sm text-gray-700">200+ Participants</p>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-lg border border-orange-200">
                    <Clock className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                    <h4 className="font-semibold text-orange-900">Duration</h4>
                    <p className="text-sm text-gray-700">2 Days</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Detailed Agenda Access */}
          <div className="mb-12">
            <Card className="bg-blue-50 border-blue-200">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-900 text-center">
                  Access Detailed Agenda
                </CardTitle>
                <p className="text-center text-blue-700">
                  Get the complete conference schedule with session details, speaker information, and venue maps
                </p>
              </CardHeader>
              <CardContent className="text-center">
                <div className="space-y-4">
                  <p className="text-gray-700">
                    The detailed conference agenda including speaker timelines, session abstracts, 
                    venue information, and networking events is available in our comprehensive agenda document.
                  </p>
                  <LinkButton 
                    href="#"
                    external={true}
                    className="bg-blue-600 hover:bg-blue-700"
                  >
                    <ExternalLink className="h-5 w-5 mr-2" />
                    View Complete Agenda (Google Drive)
                  </LinkButton>
                  <p className="text-sm text-gray-600">
                    Note: The agenda document will open in a new tab and may require permission to access.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Schedule Overview */}
          <div className="space-y-8">
            {scheduleOverview.map((day, dayIndex) => (
              <Card key={dayIndex}>
                <CardHeader>
                  <CardTitle className="text-xl text-blue-600">{day.day}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {day.events.map((event, eventIndex) => (
                      <div key={eventIndex} className="flex items-center space-x-4 p-3 rounded-lg border bg-gray-50">
                        <div className="font-mono text-sm font-semibold text-gray-900 w-24">
                          {event.time}
                        </div>
                        <div className="flex-1">
                          <span className="text-gray-900">{event.event}</span>
                        </div>
                        <div className={`px-3 py-1 rounded-full text-xs font-medium border ${eventTypeColors[event.type as keyof typeof eventTypeColors]}`}>
                          {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Information */}
          <div className="mt-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Important Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Registration</h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• Registration opens 30 minutes before sessions</li>
                      <li>• Conference kit collection at registration desk</li>
                      <li>• Name badges must be worn at all times</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Presentations</h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• Technical sessions: 15 min presentation + 5 min Q&A</li>
                      <li>• Keynotes: 45 min presentation + 15 min Q&A</li>
                      <li>• All presentations must be submitted 1 day prior</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Networking</h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• Coffee breaks for informal discussions</li>
                      <li>• Lunch sessions with poster presentations</li>
                      <li>• Welcome reception on Day 1</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Special Events</h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• Industry panel discussion</li>
                      <li>• Best paper awards ceremony</li>
                      <li>• Student research showcase</li>
                    </ul>
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
