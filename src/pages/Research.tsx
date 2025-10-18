import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Research = () => {
  const researchAreas = [
    {
      title: "Climate Modeling & Prediction",
      description: "Developing advanced models to predict future climate scenarios and understand climate system dynamics.",
      topics: ["General Circulation Models", "Statistical Downscaling", "Climate Projections"]
    },
    {
      title: "Ocean-Atmosphere Interactions",
      description: "Investigating the complex coupling between ocean currents and atmospheric circulation patterns.",
      topics: ["El Niño Dynamics", "Ocean Heat Transport", "Air-Sea Exchange"]
    },
    {
      title: "Arctic Climate Change",
      description: "Studying rapid Arctic warming and its global implications for climate and ecosystems.",
      topics: ["Sea Ice Decline", "Arctic Amplification", "Permafrost Thawing"]
    },
    {
      title: "Carbon Cycle Research",
      description: "Quantifying carbon sources and sinks in terrestrial and marine ecosystems.",
      topics: ["Carbon Sequestration", "Ocean Acidification", "Biogeochemical Cycles"]
    }
  ];

  return (
    <div className="max-w-6xl mx-auto animate-fade-in">
      <h1 className="text-4xl font-bold mb-6">Research Areas</h1>
      
      <div className="grid md:grid-cols-2 gap-6">
        {researchAreas.map((area, index) => (
          <Card key={index} className="hover:shadow-xl transition-all duration-300 hover-scale">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-3">{area.title}</h2>
              <p className="text-muted-foreground mb-4">{area.description}</p>
              <div className="flex flex-wrap gap-2">
                {area.topics.map((topic) => (
                  <Badge key={topic} variant="secondary">{topic}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Research;
