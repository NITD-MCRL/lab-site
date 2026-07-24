import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, BookOpen, Users } from "lucide-react";

const ThesisGuided = () => {
  const phdTheses = [
    {
        "code": "7",
        "student": "Anshu",
        "institution": "National Institute of Technology Delhi",
        "year": "2026",
        "level": "PhD",
        "description": "Mathematical Modeling of Shallow Water Waves Using Nwogu's 2D Nonlinear Coupled Boussinesq Type Equations with Improved Dispersion",
        "status": "Completed"
      },
    {
        "code": "6",
        "student": "Vinita",
        "institution": "National Institute of Technology Delhi",
        "year": "2025",
        "level": "PhD",
        "description": "Mathematical Modeling of Shallow Water Waves Using Nwogu's 2D Nonlinear Coupled Boussinesq Type Equations with Improved Dispersion",
        "status": "Completed"
      },
    {
      code: "1",
      student: "Divya Sardana",
      institution: "National Institute of Technology Delhi",
      year: "2023",
      level: "PhD",
      description: "Sea Level Rise Response to the Climate Modes, Model evaluation and projection of Sea Surface Height over global oceans",
      status: "Completed"
    },
    {
      code: "2",
      student: "Prachi Priya",
      institution: "National Institute of Technology Delhi",
      year: "2023",
      level: "PhD",
      description: "Mathematical Modelling for Linear and Non-Linear Pressure Drop over Barriers in Partially Reflecting Arbitrary Shaped Port",
      status: "Completed"
    },
    {
      code: "3",
      student: "Sukhwinder Kaur",
      institution: "National Institute of Technology Delhi",
      year: "2022",
      level: "PhD",
      description: "Influence of Natural Climate Variability and Projections of extreme Wind-Wave Climate in the Indian Ocean",
      status: "Completed"
    },
    {
      code: "4",
      student: "Rupali",
      institution: "National Institute of Technology Delhi",
      year: "2021",
      level: "PhD",
      description: "Mathematical Modeling of Arbitrary Shaped Domain using Hybrid Element Method",
      status: "Completed"
    },
    {
      code: "5",
      student: "Gulshan",
      institution: "National Institute of Technology Delhi",
      year: "2019",
      level: "PhD",
      description: "Mathematical Modeling of Multidirectional Random Waves by using Boundary Element Method in an Irregular Domain",
      status: "Completed"
    },
    
    // {
    //   code: "6",
    //   student: "Amit Kumar",
    //   institution: "National Institute of Technology Delhi",
    //   year: "2024",
    //   level: "PhD",
    //   description: "Climate Change Impact Assessment on Coastal Infrastructure using AI Models",
    //   status: "In Progress"
    // },
    // {
    //   code: "7",
    //   student: "Neha Sharma",
    //   institution: "National Institute of Technology Delhi",
    //   year: "2024",
    //   level: "PhD",
    //   description: "Ocean-Atmosphere Coupling Mechanisms in Tropical Regions",
    //   status: "In Progress"
    // }
  ];

  const mtechTheses = [
    {
        "code": "M7",
        "student": "Ankit Kumar",
        "institution": "National Institute of Technology Delhi",
        "year": "2026",
        "level": "M.Tech",
        "description": "",
        "status": "Completed"
      },
      {
        "code": "M8",
        "student": "Dibyadarshini Maharatha",
        "institution": "National Institute of Technology Delhi",
        "year": "2026",
        "level": "M.Tech",
        "description": "",
        "status": "Completed"
      },
      {
        "code": "M9",
        "student": "Dushyant Sharma",
        "institution": "National Institute of Technology Delhi",
        "year": "2026",
        "level": "M.Tech",
        "description": "",
        "status": "Completed"
      },
      {
        "code": "M10",
        "student": "Diksha Pandey",
        "institution": "National Institute of Technology Delhi",
        "year": "2026",
        "level": "M.Tech",
        "description": "",
        "status": "Completed"
      },
      {
        "code": "M11",
        "student": "Shweta Jain",
        "institution": "National Institute of Technology Delhi",
        "year": "2026",
        "level": "M.Tech",
        "description": "",
        "status": "Completed"
      },
      {
        "code": "M12",
        "student": "Viaan Sharma",
        "institution": "National Institute of Technology Delhi",
        "year": "2026",
        "level": "M.Tech",
        "description": "",
        "status": "Completed"
      },
    {
        "code": "M1",
        "student": "Purnima Garg",
        "institution": "National Institute of Technology Delhi",
        "year": "2025",
        "level": "M.Tech",
        "description": "Real-Time Traffic Sign Detection and Warning System Using Deep Learning for Vehicle Safety",
        "status": "Completed"
      },
      {
        "code": "M2",
        "student": "Aman Shama",
        "institution": "National Institute of Technology Delhi",
        "year": "2025",
        "level": "M.Tech",
        "description": "Deep Learning Model for Monthly Rainfall Prediction in Metropolitan Cities in India",
        "status": "Completed"
      },
      {
        "code": "M3",
        "student": "Keshav Jha",
        "institution": "National Institute of Technology Delhi",
        "year": "2025",
        "level": "M.Tech",
        "description": "Comparing Different Machine Learning and Deep Learning Models for Daily Rainfall Prediction at Kerala Point Location",
        "status": "Completed"
      },
      {
        "code": "M4",
        "student": "Vishakha Rohila",
        "institution": "National Institute of Technology Delhi",
        "year": "2025",
        "level": "M.Tech",
        "description": "Sea Level Anomaly Prediction using Multivariate Stacked LSTM Model at Key Coastal Locations of India",
        "status": "Completed"
      },
      {
        "code": "M5",
        "student": "Priyanka Sarkar",
        "institution": "National Institute of Technology Delhi",
        "year": "2025",
        "level": "M.Tech",
        "description": "Predicting Surface Temperature at Indian Port Using Machine Learning Model",
        "status": "Completed"
      },
      {
        "code": "M6",
        "student": "Pranati Mishra",
        "institution": "National Institute of Technology Delhi",
        "year": "2025",
        "level": "M.Tech",
        "description": "Multi-Model Ensemble Learning Prediction of Surface Air Temperature in Four Major Metro Cities: A Stacking-Based Approach",
        "status": "Completed"
      }
  ];

  return (
    <div className="max-w-6xl mx-auto animate-fade-in p-6" style={{"height": "fit-content"}}>
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-3">Theses Guided</h1>
        <p className="text-lg text-muted-foreground">
          Doctoral and Master's theses supervised by Dr. Prashant Kumar
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* PhD Theses Section */}
        <Card className="hover:shadow-xl transition-all duration-300 border-primary/20" style={{"height": "fit-content"}}>
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-primary/10 rounded-lg">
                <GraduationCap className="h-7 w-7 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">PhD Theses Guided</h2>
                <p className="text-sm text-muted-foreground">
                  Doctoral research supervised
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {phdTheses.map((thesis, index) => (
                <div 
                  key={index} 
                  className="p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-all border-l-4 border-primary"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <Badge variant="outline" className="mb-2">PhD</Badge>
                      <h3 className="text-lg font-bold">{thesis.student}</h3>
                      <p className="text-sm text-muted-foreground">{thesis.institution}</p>
                    </div>
                    <div className="text-right">
                      <Badge variant={thesis.status === "Completed" ? "default" : "secondary"} className="mb-2">
                        {thesis.status}
                      </Badge>
                      <p className="text-sm font-medium">{thesis.year}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">{thesis.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t">
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>Total PhD Theses: {phdTheses.length}</span>
                <span>Completed: {phdTheses.filter(t => t.status === "Completed").length}</span>
                <span>In Progress: {phdTheses.filter(t => t.status === "In Progress").length}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* M.Tech Theses Section */}
        <Card className="hover:shadow-xl transition-all duration-300 border-blue-500/20" style={{"height": "fit-content"}}>
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-blue-500/10 rounded-lg">
                <BookOpen className="h-7 w-7 text-blue-500" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">M.Tech Theses Guided</h2>
                <p className="text-sm text-muted-foreground">
                  Master's research supervised
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {mtechTheses.map((thesis, index) => (
                <div 
                  key={index} 
                  className="p-4 bg-blue-50/30 rounded-lg hover:bg-blue-50/50 transition-all border-l-4 border-blue-500"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <Badge variant="outline" className="mb-2 bg-blue-100 text-blue-800">M.Tech</Badge>
                      <h3 className="text-lg font-bold">{thesis.student}</h3>
                      <p className="text-sm text-muted-foreground">{thesis.institution}</p>
                    </div>
                    <div className="text-right">
                      <Badge variant={thesis.status === "Completed" ? "default" : "secondary"} className="mb-2">
                        {thesis.status}
                      </Badge>
                      <p className="text-sm font-medium">{thesis.year}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">{thesis.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t">
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>Total M.Tech Theses: {mtechTheses.length}</span>
                <span>Completed: {mtechTheses.filter(t => t.status === "Completed").length}</span>
                <span>In Progress: {mtechTheses.filter(t => t.status === "In Progress").length}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Summary Card */}
      <Card className="mt-8 hover:shadow-lg transition-all duration-300">
        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <Users className="h-6 w-6 text-primary" />
            <h2 className="text-xl font-bold">Supervision Summary</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <h3 className="font-semibold text-lg">PhD Supervision</h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 bg-primary/5 rounded-lg">
                  <p className="text-2xl font-bold">{phdTheses.length}</p>
                  <p className="text-sm text-muted-foreground">Total Theses</p>
                </div>
                <div className="p-3 bg-green-500/5 rounded-lg">
                  <p className="text-2xl font-bold text-green-600">
                    {phdTheses.filter(t => t.status === "Completed").length}
                  </p>
                  <p className="text-sm text-muted-foreground">Completed</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <h3 className="font-semibold text-lg">M.Tech Supervision</h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 bg-blue-500/5 rounded-lg">
                  <p className="text-2xl font-bold">{mtechTheses.length}</p>
                  <p className="text-sm text-muted-foreground">Total Theses</p>
                </div>
                <div className="p-3 bg-green-500/5 rounded-lg">
                  <p className="text-2xl font-bold text-green-600">
                    {mtechTheses.filter(t => t.status === "Completed").length}
                  </p>
                  <p className="text-sm text-muted-foreground">Completed</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 pt-4 border-t">
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold">Total Theses Guided:</span> {phdTheses.length + mtechTheses.length} 
              <span className="mx-2">•</span>
              <span className="font-semibold">Completed:</span> {
                phdTheses.filter(t => t.status === "Completed").length + 
                mtechTheses.filter(t => t.status === "Completed").length
              }
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ThesisGuided;