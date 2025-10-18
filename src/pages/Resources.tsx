import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookMarked, Download, ExternalLink } from "lucide-react";

const Resources = () => {
  const resources = [
    {
      category: "Climate Data",
      items: [
        { name: "Global Climate Dataset 2000-2024", type: "Dataset", link: "#" },
        { name: "Arctic Temperature Records", type: "Dataset", link: "#" },
        { name: "Ocean Circulation Data", type: "Dataset", link: "#" }
      ]
    },
    {
      category: "Research Tools",
      items: [
        { name: "Climate Model Analysis Toolkit", type: "Software", link: "#" },
        { name: "Data Visualization Scripts", type: "Code", link: "#" },
        { name: "Statistical Analysis Package", type: "Software", link: "#" }
      ]
    },
    {
      category: "Teaching Materials",
      items: [
        { name: "Climate Science Fundamentals", type: "Course Material", link: "#" },
        { name: "Advanced Climate Modeling", type: "Lecture Notes", link: "#" },
        { name: "Lab Protocols & Methods", type: "Documentation", link: "#" }
      ]
    },
    {
      category: "Publications & Reports",
      items: [
        { name: "Annual Lab Report 2024", type: "PDF", link: "#" },
        { name: "Climate Assessment Summary", type: "PDF", link: "#" },
        { name: "Research Highlights 2023", type: "PDF", link: "#" }
      ]
    }
  ];

  return (
    <div className="max-w-6xl mx-auto animate-fade-in">
      <h1 className="text-4xl font-bold mb-6">Resources</h1>
      
      <div className="space-y-6">
        {resources.map((section, index) => (
          <Card 
            key={index} 
            className="hover:shadow-lg transition-all duration-300"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <BookMarked className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold">{section.category}</h2>
              </div>
              
              <div className="space-y-3">
                {section.items.map((item, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-center justify-between p-3 bg-muted/50 rounded-lg hover:bg-muted transition-all"
                  >
                    <div>
                      <p className="font-semibold">{item.name}</p>
                      <p className="text-sm text-muted-foreground">{item.type}</p>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                      <Button size="sm" variant="ghost">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Resources;
