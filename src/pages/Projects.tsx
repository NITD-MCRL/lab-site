import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FolderKanban } from "lucide-react";

const Projects = () => {
  const projects = [
    // {
    //   title: "Arctic Climate Amplification Study",
    //   status: "Ongoing",
    //   funding: "National Science Foundation",
    //   duration: "2023-2026",
    //   description: "Investigating the mechanisms behind rapid Arctic warming and its global implications.",
    //   team: ["Dr. Maria Rodriguez", "3 PhD Students", "2 Postdocs"]
    // },
    // {
    //   title: "Ocean-Atmosphere Coupling Dynamics",
    //   status: "Ongoing",
    //   funding: "NOAA Climate Program",
    //   duration: "2024-2027",
    //   description: "Exploring interactions between ocean currents and atmospheric circulation patterns.",
    //   team: ["Dr. Maria Rodriguez", "2 PhD Students", "1 Postdoc"]
    // },
    // {
    //   title: "Carbon Cycle in Coastal Ecosystems",
    //   status: "Ongoing",
    //   funding: "Department of Energy",
    //   duration: "2022-2025",
    //   description: "Quantifying carbon sequestration in coastal wetlands and their role in climate mitigation.",
    //   team: ["Dr. Maria Rodriguez", "4 PhD Students"]
    // },
    // {
    //   title: "Renewable Energy Integration Models",
    //   status: "Completed",
    //   funding: "European Research Council",
    //   duration: "2020-2023",
    //   description: "Developed models for optimal integration of renewable energy sources in power grids.",
    //   team: ["Dr. Maria Rodriguez", "2 PhD Students"]
    // },
    // {
    //   title: "Extreme Weather Attribution",
    //   status: "Ongoing",
    //   funding: "NASA Earth Science",
    //   duration: "2023-2026",
    //   description: "Attribution of extreme weather events to anthropogenic climate change using advanced statistical methods.",
    //   team: ["Dr. Maria Rodriguez", "3 PhD Students", "1 Postdoc"]
    // }

    {
      title: "Extended Forecast of Wind-Wave Parameter along the Indian Coastline using Multi-Task Machine Learning Model",
      status: "Ongoing",
      funding: " INCOIS, MoES, Govt of India",
      duration: "2024-2026",
      description: "",
      team: ["Dr. Prashant Kumar"]
},
{
      title: "Projection of Wave Power in Indian Ocean and its Utilization along the Coastal Regions",
      status: "Ongoing",
      funding: " SERB DST Govt. of India",
      duration: "2022-2025",
      description: "",
      team: ["Dr. Prashant Kumar"]
},
{
      title: "Influence of natural climate variability over Indian ocean wave climate accessed by re-analysis and CMIP5 model data",
      status: "Completed",
      funding: " Ministry of Earth Sciences (MoES)",
      duration: "2018-2022",
      description: "",
      team: ["Dr. Prashant Kumar"]
},
{
      title: "Modeling and simulation of moored ship motion in Paradip port under the resonance conditions for multidirectional random waves",
      status: "Completed",
      funding: " SERB DST",
      duration: "2017-2020",
      description: "",
      team: ["Dr. Prashant Kumar"]
}
  ];

  return (
    <div className="max-w-6xl mx-auto animate-fade-in">
      <h1 className="text-4xl font-bold mb-6">Research Projects</h1>
      
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <Card 
            key={index} 
            className="hover:shadow-xl transition-all duration-300 hover-scale"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <CardContent className="p-6">
              <div className="flex gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <FolderKanban className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <div className="flex gap-2 mb-3">
                    <Badge variant={project.status === "Ongoing" ? "default" : "secondary"}>
                      {project.status}
                    </Badge>
                    <Badge variant="outline">{project.duration}</Badge>
                  </div>
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
              
              <div className="space-y-2 text-sm">
                <div>
                  <span className="font-semibold">Funding: </span>
                  <span className="text-muted-foreground">{project.funding}</span>
                </div>
                <div>
                  <span className="font-semibold">Principal Investigator: </span>
                  <span className="text-muted-foreground">{project.team.join(", ")}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Projects;
