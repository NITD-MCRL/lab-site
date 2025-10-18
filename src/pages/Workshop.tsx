import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Calendar, Clock, MapPin } from "lucide-react";

const Workshop = () => {
  const workshops = [
    {
      title: "Climate Data Analysis with Python",
      date: "February 15-16, 2025",
      time: "9:00 AM - 5:00 PM",
      location: "Environmental Science Building, Room 201",
      status: "Registration Open",
      description: "Hands-on workshop covering data processing, visualization, and statistical analysis of climate datasets using Python.",
      topics: ["NumPy & Pandas", "Climate data formats", "Visualization with Matplotlib", "Statistical methods"],
      capacity: "25 participants"
    },
    {
      title: "Introduction to Climate Modeling",
      date: "March 10-12, 2025",
      time: "10:00 AM - 4:00 PM",
      location: "Online (Zoom)",
      status: "Registration Open",
      description: "Three-day workshop introducing fundamental concepts of climate modeling and hands-on experience with simple climate models.",
      topics: ["Energy balance models", "General circulation models", "Model validation", "Scenario analysis"],
      capacity: "40 participants"
    },
    {
      title: "Scientific Communication for Climate Scientists",
      date: "April 5, 2025",
      time: "1:00 PM - 6:00 PM",
      location: "Conference Center",
      status: "Coming Soon",
      description: "Workshop focused on effective communication of climate science to diverse audiences including policymakers and the public.",
      topics: ["Science communication principles", "Data visualization", "Media engagement", "Policy briefs"],
      capacity: "30 participants"
    },
    {
      title: "Advanced Climate Statistics",
      date: "May 20-21, 2025",
      time: "9:00 AM - 5:00 PM",
      location: "Statistics Department, Room 305",
      status: "Coming Soon",
      description: "Advanced statistical methods for climate data analysis including time series, extreme value theory, and uncertainty quantification.",
      topics: ["Time series analysis", "Extreme value statistics", "Bayesian methods", "Uncertainty quantification"],
      capacity: "20 participants"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto animate-fade-in">
      <h1 className="text-4xl font-bold mb-6">Workshops & Training</h1>
      
      <div className="space-y-6">
        {workshops.map((workshop, index) => (
          <Card 
            key={index} 
            className="hover:shadow-xl transition-all duration-300"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <CardContent className="p-6">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{workshop.title}</h3>
                    <Badge 
                      variant={workshop.status === "Registration Open" ? "default" : "secondary"}
                      className="mb-3"
                    >
                      {workshop.status}
                    </Badge>
                  </div>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-4">{workshop.description}</p>
              
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span>{workshop.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-primary" />
                    <span>{workshop.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>{workshop.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="h-4 w-4 text-primary" />
                    <span>{workshop.capacity}</span>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Topics Covered:</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                    {workshop.topics.map((topic, idx) => (
                      <li key={idx}>{topic}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <Button 
                disabled={workshop.status !== "Registration Open"}
                className="gap-2"
              >
                {workshop.status === "Registration Open" ? "Register Now" : "More Info Coming Soon"}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Workshop;
