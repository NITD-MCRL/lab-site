import { Card, CardContent } from "@/components/ui/card";
import { Users } from "lucide-react";
import StudentCard from "@/components/StudentCard";
import student1 from "@/assets/student1.jpg";
import student2 from "@/assets/student2.jpg";
import student3 from "@/assets/student3.jpg";
import student4 from "@/assets/student4.jpg";
import viaan from "@/assets/viaan.jpeg";

const Team = () => {
  const students = [
    {
      name: "Viaan Sharma",
      program: "Master's Student",
      year: "2st Year",
      researchArea: "Cycolone Prediction",
      email: "242432009@nitdelhi.ac.in",
      photo: viaan,
      resumeUrl: "/resumes/242432009_Viaan_Sharma.pdf", // Add this line
    },
    {
      name: "Alex Chen",
      program: "PhD Student",
      year: "4th Year",
      researchArea: "Climate Modeling & Prediction",
      email: "alex.chen@university.edu",
      photo: student1,
      resumeUrl: "/resumes/242432009_Viaan_Sharma.pdf", // Add this line
    },
    {
      name: "Sarah Martinez",
      program: "PhD Student",
      year: "3rd Year",
      researchArea: "Ocean-Atmosphere Interactions",
      email: "sarah.martinez@university.edu",
      photo: student2,
      resumeUrl: "/resumes/242432009_Viaan_Sharma.pdf", // Add this line
    },
    {
      name: "Michael Johnson",
      program: "PhD Student",
      year: "2nd Year",
      researchArea: "Carbon Cycle Dynamics",
      email: "michael.johnson@university.edu",
      photo: student3,
      resumeUrl: "/resumes/242432009_Viaan_Sharma.pdf", // Add this line
    },
    {
      name: "Emily Wang",
      program: "PhD Student",
      year: "5th Year",
      researchArea: "Arctic Climate Change",
      email: "emily.wang@university.edu",
      photo: student4,
      resumeUrl: "/resumes/242432009_Viaan_Sharma.pdf", // Add this line
    },
    {
      name: "David Kim",
      program: "Master's Student",
      year: "2nd Year",
      researchArea: "Renewable Energy Systems",
      email: "david.kim@university.edu",
      photo: student1,
      resumeUrl: "/resumes/242432009_Viaan_Sharma.pdf", // Add this line
    },
    {
      name: "Rachel Thompson",
      program: "Master's Student",
      year: "1st Year",
      researchArea: "Climate Data Analysis",
      email: "rachel.thompson@university.edu",
      photo: student2,
      resumeUrl: "/resumes/242432009_Viaan_Sharma.pdf", // Add this line
    },
    {
      name: "James Park",
      program: "PhD Student",
      year: "1st Year",
      researchArea: "Extreme Weather Events",
      email: "james.park@university.edu",
      photo: student3,
      resumeUrl: "/resumes/242432009_Viaan_Sharma.pdf", // Add this line
    },
    {
      name: "Lisa Anderson",
      program: "Master's Student",
      year: "2nd Year",
      researchArea: "Environmental Policy",
      email: "lisa.anderson@university.edu",
      photo: student4,
      resumeUrl: "/resumes/242432009_Viaan_Sharma.pdf", // Add this line
    },
    {
      name: "Robert Garcia",
      program: "PhD Student",
      year: "3rd Year",
      researchArea: "Glaciology & Sea Level Rise",
      email: "robert.garcia@university.edu",
      photo: student1,
      resumeUrl: "/resumes/242432009_Viaan_Sharma.pdf", // Add this line
    },
    {
      name: "Amanda Lee",
      program: "Master's Student",
      year: "1st Year",
      researchArea: "Sustainable Development",
      email: "amanda.lee@university.edu",
      photo: student2,
      resumeUrl: "/resumes/242432009_Viaan_Sharma.pdf", // Add this line
    },
  ];

  return (
    <div className="max-w-6xl mx-auto animate-fade-in">
      <Card className="border-2 shadow-lg mb-6">
        <CardContent className="p-6">
          <h1 className="text-4xl font-bold mb-2 flex items-center gap-3">
            <Users className="h-10 w-10 text-primary" />
            My Students
          </h1>
          <p className="text-muted-foreground">
            Meet the talented researchers advancing climate science in our lab
          </p>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {students.map((student, index) => (
          <div 
            key={index} 
            className="animate-fade-in hover-scale"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <StudentCard {...student} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
