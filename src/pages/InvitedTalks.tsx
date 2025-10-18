import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Presentation, MapPin, Calendar } from "lucide-react";

const InvitedTalks = () => {
  const talks = [
    {
      title: "Climate Tipping Points: What We Know and Don't Know",
      event: "International Climate Summit 2024",
      location: "Geneva, Switzerland",
      date: "November 15, 2024",
      type: "Keynote"
    },
    {
      title: "Arctic Amplification and Global Climate Impacts",
      event: "American Geophysical Union Fall Meeting",
      location: "San Francisco, CA",
      date: "December 10, 2024",
      type: "Invited Talk"
    },
    {
      title: "Bridging Climate Science and Policy",
      event: "National Academy of Sciences Symposium",
      location: "Washington, DC",
      date: "September 20, 2024",
      type: "Panel Discussion"
    },
    {
      title: "Ocean-Atmosphere Coupling in Climate Models",
      event: "European Climate Research Conference",
      location: "Copenhagen, Denmark",
      date: "June 5, 2024",
      type: "Invited Talk"
    },
    {
      title: "The Future of Climate Research: Challenges and Opportunities",
      event: "University Climate Science Colloquium",
      location: "Stanford University",
      date: "April 18, 2024",
      type: "Seminar"
    },
    {
      title: "Carbon Cycle Feedbacks in a Warming World",
      event: "Gordon Research Conference",
      location: "Ventura, CA",
      date: "March 12, 2024",
      type: "Invited Talk"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto animate-fade-in">
      <h1 className="text-4xl font-bold mb-6">Invited Talks & Presentations</h1>
      
      <div className="space-y-4">
        {talks.map((talk, index) => (
          <Card 
            key={index} 
            className="hover:shadow-lg transition-all duration-300 hover:translate-x-2"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <CardContent className="p-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Presentation className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="text-xl font-bold">{talk.title}</h3>
                    <Badge variant="secondary">{talk.type}</Badge>
                  </div>
                  <p className="font-semibold text-primary mb-2">{talk.event}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>{talk.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{talk.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default InvitedTalks;
