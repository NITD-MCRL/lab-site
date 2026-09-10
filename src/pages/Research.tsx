import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Research = () => {
  const researchAreas = [
    // {
    //   title: "Wave Power",
    //   description: "Investigating wind-wave interactions and spectral wave dynamics to understand coastal wave climate variability, extreme events, and marine energy potential.",
    //   topics: ["Spectral Wave Dynamics", "Coastal Wave Forecasting", "Ocean Wave Energy Assessment", "Wave Spectrum Modeling", "Nearshore Wave Transformation",]
    // },
    {
      title: "Wind-Wave Climate",
      description: "Investigating the complex interactions between atmospheric winds and ocean waves to understand wave climate variability and its impacts on coastal systems.",
      topics: ["Wave Modeling", "Spectral Analysis", "Wave Energy Assessment", "SWAN Modeling", "Wave Climate Projections"]
    },
    {
      title: "Extreme Heat Stress Analysis",
      description: "Studying extreme heat events and thermal stress patterns to assess their impacts on human health, ecosystems, and urban environments under changing climate conditions.",
      topics: ["Heat Wave Dynamics", "Thermal Comfort Indices", "Urban Heat Islands", "Health Impact Assessment", "Humidex Analysis"]
    },
    {
      title: "Coastal Wave Climate Analysis",
      description: "Analyzing wave climate patterns and their transformations in coastal regions to support coastal management, erosion control, and infrastructure planning.",
      topics: ["Nearshore Wave Dynamics", "Coastal Erosion", "Wave Transformation", "Sediment Transport", "Coastal Vulnerability"]
    },
    {
      title: "Polar Sea Ice Variations",
      description: "Examining the rapid changes in Arctic sea ice extent, thickness, and dynamics to understand polar amplification and global climate feedback mechanisms.",
      topics: ["Sea Ice Retreat", "Albedo Feedback", "Polar Amplification", "Ice-Ocean Interactions", "Satellite Remote Sensing"]
    },
    {
      title: "Climate Prediction using AI Techniques",
      description: "Leveraging artificial intelligence and machine learning methods to enhance climate prediction accuracy and uncover complex patterns in climate data.",
      topics: ["Machine Learning Models", "Neural Networks", "Climate Data Mining", "Predictive Analytics", "Deep Learning Applications"]
    },
    // {
    //   title: "Tropical Cyclone Prediction & Analysis",
    //   description: "Developing advanced forecasting techniques and analysis methods for tropical cyclones to improve early warning systems and risk assessment.",
    //   topics: ["Cyclone Track Prediction", "Intensity Forecasting", "Storm Surge Modeling", "Satellite Meteorology", "Risk Assessment"]
    // }
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
