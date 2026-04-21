import { Card, CardContent } from "@/components/ui/card";
import { Users, GraduationCap, BookOpen } from "lucide-react";
import StudentCard from "@/components/StudentCard";
import viaan from "@/assets/viaan.jpeg";
import shweta from "@/assets/shweta.jpg";
import dushyant from "@/assets/242432005.jpg";
import ankit from "@/assets/242432002.jpg";
import dibya from "@/assets/242432003.jpg";
import shanti from "@/assets/242432007.jpeg";
import Anushka from "@/assets/Anushka.jpg";  
import Arju from "@/assets/Arju.jpeg";
import Chhavi from "@/assets/Chhavi.jpeg";
import Meghna from "@/assets/Meghna.jpg";
import Mihir from "@/assets/Mihir.jpg";
import Abhinav from "@/assets/Abhinav.jpeg";
import Rashika from "@/assets/Rashika.png";
import Mohit from "@/assets/mohit.jpg";
import Shikha from "@/assets/Shikha.jpg";
import Bharat from "@/assets/Bharat.jpg";
import Khushi from "@/assets/Khushi.jpg";
import Bhishek from "@/assets/Bhishek.jpg";
import Vedang from "@/assets/Vedang.jpg";
import Tanuj from "@/assets/Tanuj.jpg";
import Vanagaraouthu from "@/assets/Vanagarouthu.jpeg";
import kamlesh from "@/assets/KAMLESH.jpg";
import Anshu from "@/assets/anshu.jpg";
import Rishabh from "@/assets/rishabh.jpeg";
import Shruti from "@/assets/Shruti.jpeg";
import Ramakant from "@/assets/Ramakant.jpeg";
import Suresh from "@/assets/Suresh.jpeg";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const Team = () => {
  const students = [

    // PhD Students - Ordered by seniority (earliest start year first)
    
    { 
      name: "Ramakant Prasad",
      program: "PhD Research Scholar",
      year: "2022-Present",
      researchArea: "Wind-Wave Climate Change", 
      email: "ramakant.prasad@nitdelhi.ac.in",
      photo: Ramakant,
      resumeUrl: null, // Set to null or undefined
      linkedinUrl: "https://www.linkedin.com/in/ramakant-prasad-a42469a0/",
      showResume: false, // Add this flag
    },
    {
      name: "Rishabh Kushwaha",
      program: "PhD Research Scholar",
      year: "2022-Present",
      researchArea: "Heat Stress and Marine heatwaves", 
      email: "rishabh@nitdelhi.ac.in",
      photo: Rishabh,
      resumeUrl: "/resumes/Rishabh.pdf",
      linkedinUrl: "https://www.linkedin.com/in/rishabh-kushwaha-a89620256/",
    },
    {
      name: "Shruti",
      program: "PhD Research Scholar",
      year: "2022-Present",
      researchArea: "Air Pollution Dynamics and it's associated climate feedback mechanism over India",
      email: "shrutigulia@nitdelhi.ac.in",
      photo: Shruti,
      resumeUrl: null, // Set to null or undefined
      linkedinUrl: "https://www.linkedin.com/in/shruti-gulia-0227b0185/",
      showResume: false, // Add this flag
    },
    {   
      name: "Suresh Yadav",
      program: "PhD Research Scholar",
      year: "2022-Present",
      researchArea: "Climate Change impacts on Economy", 
      email: "sureshyadavirs@gmail.com",
      photo: Suresh,
      resumeUrl: null, // Set to null or undefined
      linkedinUrl: "https://www.linkedin.com/in/sureshyadavirs/",
      showResume: false, // Add this flag
    },
    {
      name: "Anshu Yadav",
      program: "PhD Research Scholar",
      year: "2022-Present",
      researchArea: "Wind-wave, Wave Power, and Tropical Cyclones", 
      email: "anshuyadav@nitdelhi.ac.in",
      photo: Anshu,
      resumeUrl: "/resumes/Anshu.pdf",
      linkedinUrl: "https://www.linkedin.com/in/anshu-yadav-b41099233/",
    },
    {
      name: "Kamlesh Kumar Saha",
      program: "PhD Research Scholar",
      year: "2022-Present",
      researchArea: "Climate Modelling, Storm Surge Prediction using AI/ML",
      email: "kamleshkumarsaha@nitdelhi.ac.in",
      photo: kamlesh,
      resumeUrl: "/resumes/Kamlesh.pdf",
      linkedinUrl: "https://www.linkedin.com/in/kamlesh-kumar-saha-b91b0437a/",
    },
    
    
   
    {
      name: "Anushka Sunil",
      program: "PhD Research Scholar",
      year: "2023-Present",
      researchArea: "Arctic Climate Dynamics, Sea Ice Variability",
      email: "anushka.sunil@nitdelhi.ac.in",
      photo: Anushka,
      resumeUrl: "/resumes/Anushka.pdf",
      linkedinUrl: "https://www.linkedin.com/in/anushka-sunil-579115317/",
    },
    {
      name: "Chhavi",
      program: "PhD Research Scholar",
      year: "2023-Present",
      researchArea: "Economic impacts of Climate Extremes",
      email: "chhavi@nitdelhi.ac.in",
      photo: Chhavi,
      resumeUrl: "/resumes/Chhavi.pdf",
      linkedinUrl: "https://www.linkedin.com/in/chhavi-bhakhna-a03202321?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "Patel Mihirkumar Atulbhai",
      program: "PhD Research Scholar",
      year: "2024-Present",
      researchArea: "Cyclone Destructiveness Analysis and Prediction using ML",
      email: "patelmihir5033@gmail.com",
      photo: Mihir,
      resumeUrl: "/resumes/Mihir.pdf",
      linkedinUrl: "https://www.linkedin.com/in/mihir-patel-7369b72b3/",
    },
    {
      name: "Arju",
      program: "PhD Research Scholar",
      year: "2024-Present",
      researchArea: "Climate Modelling with Machine Learning",
      email: "arju@nitdelhi.ac.in",
      photo: Arju,
      resumeUrl: "/resumes/Arju.pdf",
      linkedinUrl: "https://www.linkedin.com/in/arju-990589192",
    },
    {
      name: "Abhinav Chaudhary",
      program: "PhD Research Scholar",
      year: "2024-Present",
      researchArea: "Sea Level Variability",
      email: "abhinavchaudhary@nitdelhi.ac.in",
      photo: Abhinav,
      resumeUrl: "/resumes/Abhinav.pdf",
      linkedinUrl: "https://www.linkedin.com/in/abhinav-chaudhary12/",
    },
    {
      name: "Meghna",
      program: "PhD Research Scholar",
      year: "2025-Present",
      researchArea: "Rainfall Prediction using ML",
      email: "meghnasharma2207@gmail.com",
      photo: Meghna,
      resumeUrl: "/resumes/Meghna.pdf",
      linkedinUrl: " ",
    },
    {
      name: "Mohit Bisht",
      program: "PhD Research Scholar",
      year: "2025-Present",
      researchArea: "Machine Learning, Deep Learning, Artificial Intelligence",
      email: "mohitbisht@nitdelhi.ac.in",
      photo: Mohit,
      resumeUrl: "/resumes/Mohit.pdf",
      linkedinUrl: "https://www.linkedin.com/in/mohitbisht54321/",
    },
    {
      name: "Rashika Rana",
      program: "PhD Research Scholar",
      year: "2025-Present",
      researchArea: "Statistical Analysis of Climate and Economic Data",
      email: "rashikarana@nitdelhi.ac.in",
      photo: Rashika,
      resumeUrl: "/resumes/Rashika.pdf",
      linkedinUrl: "https://www.linkedin.com/in/rashika-rana-7495a9394",
    },
    {
      name: "SHIKHA MAURYA",
      program: "PhD Research Scholar",
      year: "2025-Present",
      researchArea: "Aerosol and Climate Change",
      email: "shikhamaurya@nitdelhi.ac.in",
      photo: Shikha,
      resumeUrl: "/resumes/Shikha.pdf",
      linkedinUrl: "https://www.linkedin.com/in/shikha-maurya-895856293",
    },
    
    // M.Tech Students - Ordered by seniority (2024 batch first, then 2025 batch)
    // M.Tech 2024-2026 Batch
    {
      name: "Ankit Kumar",
      program: "M.Tech Research Scholar",
      year: "2024-2026",
      researchArea: "Cloudburst Analysis | ML Researcher",
      email: "242432002@nitdelhi.ac.in",
      photo: ankit,
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
      resumeUrl: "/resumes/Shweta.pdf",
      linkedinUrl: "https://www.linkedin.com/in/shweta-jain-a4aaa1246/",
    },
    
    {
      name: "Viaan Sharma",
      program: "M.Tech Research Scholar",
      year: "2024-2026",
      researchArea: "Cyclone-Induced Rainfall Prediction | AI Researcher",
      email: "242432009@nitdelhi.ac.in",
      photo: viaan,
      resumeUrl: "/resumes/242432009_Viaan_Sharma.pdf",
      linkedinUrl: "https://www.linkedin.com/in/viaan-sharma-9a6368201/",
    },

    
    // M.Tech 2025-2027 Batch
    {
      name: "Bharat Choudhary",
      program: "M.Tech Research Scholar",
      year: "2025-2027",
      researchArea: "Machine Learning",
      email: "252432003@nitdelhi.ac.in",
      photo: Bharat,
      resumeUrl: "/resumes/Bharat.pdf",
      linkedinUrl: "https://www.linkedin.com/in/bharat-choudhary-iitm/",
    },
    {
      name: "Bhishek Kumar",
      program: "M.Tech Research Scholar",
      year: "2025-2027",
      researchArea: "AI, ML, Python, Cyber-Security, Crypto, BlockChain",
      email: "252432004@nitdelhi.ac.in",
      photo: Bhishek,
      resumeUrl: "/resumes/Bhishek.pdf",
      linkedinUrl: "https://www.linkedin.com/in/bhishek-kumar-958b14208/",
    },
    {
      name: "Khushi Singh",
      program: "M.Tech Research Scholar",
      year: "2025-2027",
      researchArea: "Machine Learning",
      email: "Khushi.anuanand203@gmail.com",
      photo: Khushi,
      resumeUrl: "/resumes/Khushi.pdf",
      linkedinUrl: "https://in.linkedin.com/in/khushi-singh-323133234"
    },
    {
      name: "Tanuj Joshi",
      program: "M.Tech Research Scholar",
      year: "2025-2027",
      researchArea: "ML, Data science and analytics",
      email: "tanujjoshi37776@gmail.com",
      photo: Tanuj,
      resumeUrl: "/resumes/Tanuj.pdf",
      linkedinUrl: "https://in.linkedin.com/in/tanuj-joshi-433815200",
    },
    {
      name: "Vedang Jamenis",
      program: "M.Tech Research Scholar",
      year: "2025-2027",
      researchArea: "Machine Learning, Artificial Intelligence, Graph Theory, Computer Science",
      email: "252432012@nitdelhi.ac.in",
      photo: Vedang,
      resumeUrl: "/resumes/Vedang.pdf",
      linkedinUrl: "https://www.linkedin.com/in/vedang-jamenis-55539a170/",
    },
    {
      name: "Vanagarouthu Sree Chaitran",
      program: "M.Tech Research Scholar",
      year: "2025-2027",
      researchArea: "Machine Learning, Deep Learning, Artificial Intelligence",
      email: "chaitran0006@gmail.com",
      photo: Vanagaraouthu,
      resumeUrl: "/resumes/Vanagaraouthu.pdf",
      linkedinUrl: "https://www.linkedin.com/in/vanagarouthu-sreechaitran-b0152525a/",
    },
  ];

  const mtechStudents = students.filter(student => 
    student.program.includes("M.Tech") || student.program.includes("Master's")
  );
  
  const phdStudents = students.filter(student => 
    student.program.includes("PhD") || student.program.includes("Doctoral")
  );

  return (
    <div className="max-w-6xl mx-auto animate-fade-in space-y-8">
      {/* Header */}
      <Card className="border-2 shadow-lg">
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

      {/* Tabs Navigation */}
      <Tabs defaultValue="all" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="all" className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            All Students ({students.length})
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
                <StudentCard {...student} />
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="phd">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {phdStudents.map((student, index) => (
              <div key={index} className="animate-fade-in hover-scale">
                <StudentCard {...student} />
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="mtech">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mtechStudents.map((student, index) => (
              <div key={index} className="animate-fade-in hover-scale">
                <StudentCard {...student} />
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Team;