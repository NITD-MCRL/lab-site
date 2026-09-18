import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, GraduationCap, Briefcase, MapPin, Mail, ExternalLink, BookOpen } from "lucide-react";
// Import alumni photos (you'll need to add these images to your assets)
import alumni1 from "@/assets/user.jpg";
import alumni2 from "@/assets/user.jpg";
import alumni3 from "@/assets/user.jpg";
import alumni4 from "@/assets/user.jpg";
import alumni5 from "@/assets/user.jpg";
import alumni6 from "@/assets/user.jpg";
import Anshu from "@/assets/anshu.jpg";
import viaan from "@/assets/viaan.jpeg";
import shweta from "@/assets/shweta.jpg";
import dushyant from "@/assets/242432005.jpg";
import ankit from "@/assets/242432002.jpg";
import dibya from "@/assets/242432003.jpg";
import shanti from "@/assets/242432007.jpeg";
import Tanuj from "@/assets/Tanuj.jpg";
import Ramakant from "@/assets/Ramakant.jpeg";

import AlumniCard from "@/components/AlumniCard";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
// import { Card, CardContent } from "@/components/ui/card";
// import { Users, GraduationCap, BookOpen } from "lucide-react";

const Alumni = () => {
  const alumniData = [
    { 
      name: "Ramakant Prasad",
      program: "PhD Research Scholar",
      year: "2022-2026",
      researchArea: "Wind-Wave Climate Change", 
      email: "ramakant.prasad@nitdelhi.ac.in",
      photo: Ramakant,
      resumeUrl: null, // Set to null or undefined
      linkedinUrl: "https://www.linkedin.com/in/ramakant-prasad-a42469a0/",
      showResume: false, // Add this flag
      location: "Delhi, India",
    },
    {
      name: "Tanuj Joshi",
      program: "M.Tech Research Scholar",
      year: "2025-2026",
      researchArea: "ML, Data science and analytics",
      email: "tanujjoshi37776@gmail.com",
      photo: Tanuj,
      location: "Lucknow, India",
      resumeUrl: "/resumes/Tanuj.pdf",
      linkedinUrl: "https://in.linkedin.com/in/tanuj-joshi-433815200",
    },
    {
      name: "Ankit Kumar",
      program: "M.Tech Research Scholar",
      year: "2024-2026",
      researchArea: "Cloudburst Analysis | ML Researcher",
      email: "242432002@nitdelhi.ac.in",
      photo: ankit,
      location: "Banglore, India",
      resumeUrl: "/resumes/Ankit.pdf",
      linkedinUrl: "https://www.linkedin.com/in/ankitx55",
    },
    
    {
      name: "Dibyadarshini Maharatha",
      program: "M.Tech Research Scholar",
      year: "2024-2026",
      researchArea: "Climate Data Analytics",
      email: "242432003@nitdelhi.ac.in",
      photo: dibya,
      location: "Surat, India",
      resumeUrl: "/resumes/Dibyadarshini.pdf",
      linkedinUrl: "https://www.linkedin.com/in/dibya-darshini-maharatha-719989234/",
    },
    {
      name: "Dushyant Sharma",
      program: "M.Tech Research Scholar",
      year: "2024-2026",
      researchArea: "Climate Data Analysis | ML Researcher",
      email: "242432005@nitdelhi.ac.in",
      photo: dushyant,
      location: "Haryana, India",
      resumeUrl: "/resumes/DushyantSharma.pdf",
      linkedinUrl: "https://www.linkedin.com/in/dushyant-sharma-71588822b",
    },
    {
      name: "Shanthiprasad Jain",
      program: "M.Tech Research Scholar",
      year: "2024-2026",
      researchArea: "Machine Learning in Climate",
      email: "242432007@nitdelhi.ac.in",
      photo: shanti,
      location: "Delhi, India",
      resumeUrl: "/resumes/Shanthiprasad.pdf",
      linkedinUrl: "https://www.linkedin.com/in/shanthiprasad-jain-02557a1b8",
    },
    {
      name: "Shweta Jain",
      program: "M.Tech Research Scholar",
      year: "2024-2026",
      researchArea: "AI Researcher",
      email: "242432008@nitdelhi.ac.in",
      photo: shweta,
      location: "Delhi, India",
      resumeUrl: "/resumes/Shweta.pdf",
      linkedinUrl: "https://www.linkedin.com/in/shweta-jain-a4aaa1246/",
      // currentPosition: "Software Developer"
    },
    
    {
      name: "Viaan Sharma",
      program: "M.Tech Research Scholar",
      year: "2024-2026",
      researchArea: "Cyclone-Induced Rainfall Prediction | AI Researcher",
      email: "242432009@nitdelhi.ac.in",
      photo: viaan,
      location: "Delhi, India",
      resumeUrl: "/resumes/242432009_Viaan_Sharma.pdf",
      linkedinUrl: "https://www.linkedin.com/in/viaan-sharma-9a6368201/",
    },
    {
      id: 1,
      name: "Anshu Yadav",
      program: "PhD Research Scholar",
      year: "2022-2026",
      researchArea: "Wind-wave, Wave Power, and Tropical Cyclones", 
      email: "anshuyadav@nitdelhi.ac.in",
      photo: Anshu,
      location: "Haryana, India",
      resumeUrl: "/resumes/Anshu.pdf",
      linkedinUrl: "https://www.linkedin.com/in/anshu-yadav-b41099233/",
    },
    {
      id: 2,
      name: "Gulshan",
      program: "PhD Research Scholar",
      year: "PhD – 2018",
      researchArea: "Mathematical Modelling",
      currentPosition: "Lecturer",
      currentOrganization: "Government College in Haryana",
      location: "Haryana, India",
      email: "gulshan@example.com",
      linkedinUrl: "https://linkedin.com/in/gulshan",
      photo: alumni1,
    },
    {
      id: 3,
      name: "Rupali",
      program: "PhD Research Scholar",
      year: "PhD – 2021",
      researchArea: "Mathematical Modelling",
      currentPosition: "Assistant Professor",
      currentOrganization: "Vivekananda Institute of Professional Studies, Gurugram",
      location: "Gurugram, India",
      email: "rupali@example.com",
      linkedinUrl: "https://linkedin.com/in/rupali",
      photo: alumni2,
    },
    {
      id: 4,
      name: "Sukhwinder Kaur",
      program: "PhD Research Scholar",
      year: "PhD – 2022",
      researchArea: "Extreme Wind-Wave Climate",
      currentPosition: "Scientist",
      currentOrganization: "NCMRWF - National Center For Medium Range Weather Forecasting, Noida",
      location: "Noida, India",
      email: "sukhwinder@example.com",
      linkedinUrl: "https://linkedin.com/in/sukhwinder",
      photo: alumni3,
    },
    {
      id: 5,
      name: "Prachi Priya",
      program: "PhD Research Scholar",
      year: "PhD – 2023",
      researchArea: "Mathematical Modelling",
      currentPosition: "Assistant Professor",
      currentOrganization: "KIET Group of Institutions, Delhi–NCR, Ghaziabad",
      location: "Ghaziabad, India",
      email: "prachi@example.com",
      linkedinUrl: "https://linkedin.com/in/prachi",
      photo: alumni4,
    },
    {
      id: 6,
      name: "Divya Sardana",
      program: "PhD Research Scholar",
      year: "PhD – 2023",
      researchArea: "Sea Level Changes",
      currentPosition: "Post-Doc",
      currentOrganization: "IIT Roorkee",
      location: "Uttar Pradesh, India",
      email: "divya@example.com",
      linkedinUrl: "https://linkedin.com/in/divya",
      photo: alumni5,
    },
    {
      id: 7,
      name: "Vinita",
      program: "PhD Research Scholar",
      year: "PhD – 2025",
      researchArea: "Mathematical Modelling",
      currentPosition: "Lecturer",
      currentOrganization: "Government Polytechnic College",
      location: "Uttar Pradesh, India",
      email: "divya@example.com",
      linkedinUrl: "https://linkedin.com/in/divya",
      photo: alumni6,
    }
  ];

  const students = alumniData;

  // Group alumni by program type
  const phdAlumni = alumniData.filter(alumni => alumni.program.includes("PhD"));
  const mtechAlumni = alumniData.filter(alumni => alumni.program.includes("M.Tech"));

  const mtechStudents = students.filter(student => 
    student.program.includes("M.Tech") || student.program.includes("Master's")
  );
  
  const phdStudents = students.filter(student => 
    student.program.includes("PhD") || student.program.includes("Philosophy")
  );

  const postDoc = students.filter(student => 
    student.program.includes("Post Doctoral") || student.program.includes("Post-Doctoral")
  );

  return (
    <div className="max-w-6xl mx-auto animate-fade-in space-y-8">
      {/* Header Section */}
      <Card className="border-2 shadow-lg bg-gradient-to-r from-primary/5 to-primary/10">
        <CardContent className="p-8 text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <Users className="h-12 w-12 text-primary" />
            <GraduationCap className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Our Alumni</h1>
          <p className="text-xl text-muted-foreground mb-4">
            Celebrating the achievements of our former students who are making significant contributions to climate science worldwide
          </p>
          <div className="flex justify-center gap-6 text-sm">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">{alumniData.length}</div>
              <div className="text-muted-foreground">Total Alumni</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">{phdAlumni.length}</div>
              <div className="text-muted-foreground">PhD Graduates</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">{mtechAlumni.length}</div>
              <div className="text-muted-foreground">M.Tech Graduates</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tabs Navigation */}
      <Tabs defaultValue="all" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="all" className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            Total ({students.length})
          </TabsTrigger>
          <TabsTrigger value="phd" className="flex items-center gap-2">
            <BookOpen className="h-4 w-4" />
            PhD ({phdStudents.length})
          </TabsTrigger>
          <TabsTrigger value="mtech" className="flex items-center gap-2">
            <GraduationCap className="h-4 w-4" />
            M.Tech ({mtechStudents.length})
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {students.map((student, index) => (
              <div key={index} className="animate-fade-in hover-scale">
                <AlumniCard {...student} />
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="phd">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {phdStudents.map((student, index) => (
              <div key={index} className="animate-fade-in hover-scale">
                <AlumniCard {...student} />
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="mtech">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mtechStudents.map((student, index) => (
              <div key={index} className="animate-fade-in hover-scale">
                <AlumniCard {...student} />
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      

      {/* Statistics Section */}
      {/* <Card className="bg-muted/50">
        <CardContent className="p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Alumni Impact</h2>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">6+</div>
              <div className="text-sm text-muted-foreground">Countries</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Research Papers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Awards</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">10+</div>
              <div className="text-sm text-muted-foreground">Patents</div>
            </div>
          </div>
        </CardContent>
      </Card> */}

      {/* Call to Action */}
      <Card>
        <CardContent className="p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Stay Connected</h2>
          <p className="text-muted-foreground mb-6">
            Are you an alumnus of our lab? Update your information and join our alumni network.
          </p>
          <div className="flex gap-4 justify-center">
            {/* <Button asChild>
              <a href="mailto:climate.lab@university.edu">
                Update Your Profile
              </a>
            </Button> */}
            <Button variant="outline" asChild>
              <a href="/contact">
                Join Alumni Network
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Alumni;