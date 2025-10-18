import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, ExternalLink } from "lucide-react";

const Publications = () => {
  const publications = [
    {
      title: "Arctic Amplification and Global Climate Feedbacks",
      authors: "Rodriguez, M., Chen, A., Martinez, S.",
      venue: "Nature Climate Change",
      year: 2024,
    },
    {
      title: "Ocean-Atmosphere Coupling in Climate Models",
      authors: "Rodriguez, M., Johnson, M., Wang, E.",
      venue: "Journal of Climate",
      year: 2023,
    },
    {
      title: "Carbon Cycle Dynamics in Coastal Ecosystems",
      authors: "Rodriguez, M., Kim, D., Garcia, R.",
      venue: "Global Biogeochemical Cycles",
      year: 2023,
    },
    {
      title: "Extreme Weather Attribution in a Warming Climate",
      authors: "Rodriguez, M., Park, J., Anderson, L.",
      venue: "Geophysical Research Letters",
      year: 2022,
    }
  ];

  return (
    <div className="max-w-6xl mx-auto animate-fade-in">
      <h1 className="text-4xl font-bold mb-6">Publications</h1>
      
      <div className="space-y-4">
        {publications.map((pub, index) => (
          <Card key={index} className="hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex gap-4">
                <BookOpen className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div className="flex-grow">
                  <h3 className="text-lg font-bold mb-2">{pub.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{pub.authors}</p>
                  <p className="text-sm font-semibold text-primary mb-2">{pub.venue}</p>
                  <div className="flex items-center gap-3">
                    <Badge variant="outline">{pub.year}</Badge>
                    <a href="#" className="text-sm text-primary hover:underline flex items-center gap-1">
                      <ExternalLink className="h-3 w-3" />
                      View Paper
                    </a>
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

export default Publications;
