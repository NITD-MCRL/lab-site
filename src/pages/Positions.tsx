import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Briefcase, Mail } from "lucide-react";

const Positions = () => {
  const positions = [
    {
      title: "Postdoctoral Researcher",
      type: "Full-time",
      deadline: "April 15, 2025",
      description: "Postdoctoral position available to study ocean-atmosphere interactions and their role in climate variability. 2-year appointment with possibility of extension.",
      requirements: [
        "PhD in Oceanography, Climate Science, or related field",
        "Publications in peer-reviewed journals",
        "Experience with ocean models",
        "Strong analytical skills"
      ],
      status: "Open"
    },
    {
      title: "PhD Position",
      type: "Full-time",
      deadline: "March 31, 2025",
      description: "Seeking a motivated PhD student to work on advanced climate modeling techniques and Arctic climate change. The position includes full funding for 4 years.",
      requirements: [
        "Master's degree in Climate Science, Physics, or related field",
        "Strong programming skills (Python, R)",
        "Experience with climate models preferred",
        "Excellent communication skills"
      ],
      status: "Open"
    },
    {
      title: "Master's Research Assistant",
      type: "Part-time",
      deadline: "Rolling",
      description: "Research assistant position for Master's students interested in climate data analysis and renewable energy systems.",
      requirements: [
        "Enrolled in Master's program",
        "Background in environmental science or engineering",
        "Data analysis skills",
        "Ability to work independently"
      ],
      status: "Open"
    },
    {
      title: "Summer Internship",
      type: "Part-time",
      deadline: "23 May 2026",
      description: "Summer Internship for students interested in climate data analysis and renewable energy systems.",
      requirements: [
        "Background in environmental science or engineering",
        "Data analysis skills",
        "Ability to work independently"
      ],
      status: "Open"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto animate-fade-in">
      <h1 className="text-4xl font-bold mb-6">Open Positions</h1>
      
      <div className="space-y-6">
        {positions.map((position, index) => (
          <Card 
            key={index} 
            className="hover:shadow-xl transition-all duration-300"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <CardContent className="p-6">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Briefcase className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-1">{position.title}</h3>
                    <div className="flex gap-2 items-center">
                      <Badge variant="secondary">{position.type}</Badge>
                      <Badge variant="outline">Deadline: {position.deadline}</Badge>
                      <Badge className="bg-primary">{position.status}</Badge>
                    </div>
                  </div>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-4">{position.description}</p>
              
              <div className="mb-4">
                <h4 className="font-semibold mb-2">Requirements:</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  {position.requirements.map((req, idx) => (
                    <li key={idx}>{req}</li>
                  ))}
                </ul>
              </div>

              {/* <Button className="gap-2">
                <Mail className="h-4 w-4" />
                Apply Now
              </Button> */}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Positions;
