import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award } from "lucide-react";

const Awards = () => {
  const awards = [
    {
      year: "2024",
      title: "Excellence in Climate Research Award",
      organization: "International Climate Science Association",
      description: "For outstanding contributions to understanding Arctic climate change"
    },
    {
      year: "2023",
      title: "Outstanding Mentor Award",
      organization: "National Science Foundation",
      description: "Recognizing exceptional mentorship of graduate students"
    },
    {
      year: "2022",
      title: "Best Paper Award",
      organization: "American Geophysical Union",
      description: "For groundbreaking research on ocean-atmosphere interactions"
    },
    {
      year: "2021",
      title: "Distinguished Faculty Award",
      organization: "University Research Excellence Program",
      description: "For exceptional research productivity and impact"
    },
    {
      year: "2020",
      title: "Early Career Achievement Award",
      organization: "Climate Research Society",
      description: "Recognizing significant early career contributions to climate science"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto animate-fade-in">
      <h1 className="text-4xl font-bold mb-6">Awards & Honors</h1>
      
      <div className="space-y-4">
        {awards.map((award, index) => (
          <Card 
            key={index} 
            className="hover:shadow-lg transition-all duration-300 hover:translate-x-2"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <CardContent className="p-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold mb-1">{award.title}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{award.organization}</p>
                      <p className="text-sm">{award.description}</p>
                    </div>
                    <Badge variant="secondary" className="flex-shrink-0">{award.year}</Badge>
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

export default Awards;
