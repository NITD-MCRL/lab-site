// import { Card, CardContent } from "@/components/ui/card";
// import { Users } from "lucide-react";
// import StudentCard from "@/components/StudentCard";
// import student1 from "@/assets/student1.jpg";
// import student2 from "@/assets/student2.jpg";
// import student3 from "@/assets/student3.jpg";
// import student4 from "@/assets/student4.jpg";
// import viaan from "@/assets/viaan.jpeg";

// const Team = () => {
//   const students = [
//     {
//       name: "Viaan Sharma",
//       program: "Master's Student",
//       year: "2st Year",
//       researchArea: "Cycolone Prediction",
//       email: "242432009@nitdelhi.ac.in",
//       photo: viaan,
//       resumeUrl: "/resumes/242432009_Viaan_Sharma.pdf", // Add this line
//     },
//     {
//       name: "Alex Chen",
//       program: "PhD Student",
//       year: "4th Year",
//       researchArea: "Climate Modeling & Prediction",
//       email: "alex.chen@university.edu",
//       photo: student1,
//       resumeUrl: "/resumes/242432009_Viaan_Sharma.pdf", // Add this line
//     },
//     {
//       name: "Sarah Martinez",
//       program: "PhD Student",
//       year: "3rd Year",
//       researchArea: "Ocean-Atmosphere Interactions",
//       email: "sarah.martinez@university.edu",
//       photo: student2,
//       resumeUrl: "/resumes/242432009_Viaan_Sharma.pdf", // Add this line
//     },
//     {
//       name: "Michael Johnson",
//       program: "PhD Student",
//       year: "2024-2026",
//       researchArea: "Carbon Cycle Dynamics",
//       email: "michael.johnson@university.edu",
//       photo: student3,
//       resumeUrl: "/resumes/242432009_Viaan_Sharma.pdf", // Add this line
//     },
//     {
//       name: "Emily Wang",
//       program: "PhD Student",
//       year: "5th Year",
//       researchArea: "Arctic Climate Change",
//       email: "emily.wang@university.edu",
//       photo: student4,
//       resumeUrl: "/resumes/242432009_Viaan_Sharma.pdf", // Add this line
//     },
//     {
//       name: "David Kim",
//       program: "Master's Student",
//       year: "2024-2026",
//       researchArea: "Renewable Energy Systems",
//       email: "david.kim@university.edu",
//       photo: student1,
//       resumeUrl: "/resumes/242432009_Viaan_Sharma.pdf", // Add this line
//     },
//     {
//       name: "Rachel Thompson",
//       program: "Master's Student",
//       year: "2024-2026",
//       researchArea: "Climate Data Analysis",
//       email: "rachel.thompson@university.edu",
//       photo: student2,
//       resumeUrl: "/resumes/242432009_Viaan_Sharma.pdf", // Add this line
//     },
//     {
//       name: "James Park",
//       program: "PhD Student",
//       year: "2024-2026",
//       researchArea: "Extreme Weather Events",
//       email: "james.park@university.edu",
//       photo: student3,
//       resumeUrl: "/resumes/242432009_Viaan_Sharma.pdf", // Add this line
//     },
//     {
//       name: "Lisa Anderson",
//       program: "Master's Student",
//       year: "2024-2026",
//       researchArea: "Environmental Policy",
//       email: "lisa.anderson@university.edu",
//       photo: student4,
//       resumeUrl: "/resumes/242432009_Viaan_Sharma.pdf", // Add this line
//     },
//     {
//       name: "Robert Garcia",
//       program: "PhD Student",
//       year: "3rd Year",
//       researchArea: "Glaciology & Sea Level Rise",
//       email: "robert.garcia@university.edu",
//       photo: student1,
//       resumeUrl: "/resumes/242432009_Viaan_Sharma.pdf", // Add this line
//     },
//     {
//       name: "Amanda Lee",
//       program: "Master's Student",
//       year: "2024-2026",
//       researchArea: "Sustainable Development",
//       email: "amanda.lee@university.edu",
//       photo: student2,
//       resumeUrl: "/resumes/242432009_Viaan_Sharma.pdf", // Add this line
//     },
//   ];

//   return (
//     <div className="max-w-6xl mx-auto animate-fade-in">
//       <Card className="border-2 shadow-lg mb-6">
//         <CardContent className="p-6">
//           <h1 className="text-4xl font-bold mb-2 flex items-center gap-3">
//             <Users className="h-10 w-10 text-primary" />
//             My Students
//           </h1>
//           <p className="text-muted-foreground">
//             Meet the talented researchers advancing climate science in our lab
//           </p>
//         </CardContent>
//       </Card>

//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {students.map((student, index) => (
//           <div 
//             key={index} 
//             className="animate-fade-in hover-scale"
//             style={{ animationDelay: `${index * 0.1}s` }}
//           >
//             <StudentCard {...student} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Team;

//code 2

// import { Card, CardContent } from "@/components/ui/card";
// import { Users, GraduationCap, BookOpen } from "lucide-react";
// import StudentCard from "@/components/StudentCard";
// import student1 from "@/assets/student1.jpg";
// import student2 from "@/assets/student2.jpg";
// import student3 from "@/assets/student3.jpg";
// import student4 from "@/assets/student4.jpg";
// import viaan from "@/assets/viaan.jpeg";

// const Team = () => {
//   const students = [
//     {
//       name: "Viaan Sharma",
//       program: "M.Tech Research Scholar",
//       year: "2024-2026",
//       researchArea: "Cyclone Prediction",
//       email: "242432009@nitdelhi.ac.in",
//       photo: viaan,
//       resumeUrl: "/resumes/242432009_Viaan_Sharma.pdf",
//     },
//     {
//       name: "David Kim",
//       program: "M.Tech Research Scholar",
//       year: "2024-2026",
//       researchArea: "Renewable Energy Systems",
//       email: "david.kim@nitdelhi.ac.in",
//       photo: student1,
//       resumeUrl: "/resumes/david_kim.pdf",
//     },
//     {
//       name: "Rachel Thompson",
//       program: "M.Tech Research Scholar",
//       year: "2024-2026",
//       researchArea: "Climate Data Analysis",
//       email: "rachel.thompson@nitdelhi.ac.in",
//       photo: student2,
//       resumeUrl: "/resumes/rachel_thompson.pdf",
//     },
//     {
//       name: "Lisa Anderson",
//       program: "M.Tech Research Scholar",
//       year: "2024-2026",
//       researchArea: "Environmental Policy",
//       email: "lisa.anderson@nitdelhi.ac.in",
//       photo: student4,
//       resumeUrl: "/resumes/lisa_anderson.pdf",
//     },
//     {
//       name: "Amanda Lee",
//       program: "M.Tech Research Scholar",
//       year: "2024-2026",
//       researchArea: "Sustainable Development",
//       email: "amanda.lee@nitdelhi.ac.in",
//       photo: student2,
//       resumeUrl: "/resumes/amanda_lee.pdf",
//     },
//     {
//       name: "Alex Chen",
//       program: "PhD Student",
//       year: "4th Year",
//       researchArea: "Climate Modeling & Prediction",
//       email: "alex.chen@nitdelhi.ac.in",
//       photo: student1,
//       resumeUrl: "/resumes/alex_chen.pdf",
//     },
//     {
//       name: "Sarah Martinez",
//       program: "PhD Student",
//       year: "3rd Year",
//       researchArea: "Ocean-Atmosphere Interactions",
//       email: "sarah.martinez@nitdelhi.ac.in",
//       photo: student2,
//       resumeUrl: "/resumes/sarah_martinez.pdf",
//     },
//     {
//       name: "Michael Johnson",
//       program: "PhD Student",
//       year: "2024-2026",
//       researchArea: "Carbon Cycle Dynamics",
//       email: "michael.johnson@nitdelhi.ac.in",
//       photo: student3,
//       resumeUrl: "/resumes/michael_johnson.pdf",
//     },
//     {
//       name: "Emily Wang",
//       program: "PhD Student",
//       year: "5th Year",
//       researchArea: "Arctic Climate Change",
//       email: "emily.wang@nitdelhi.ac.in",
//       photo: student4,
//       resumeUrl: "/resumes/emily_wang.pdf",
//     },
//     {
//       name: "James Park",
//       program: "PhD Student",
//       year: "2024-2026",
//       researchArea: "Extreme Weather Events",
//       email: "james.park@nitdelhi.ac.in",
//       photo: student3,
//       resumeUrl: "/resumes/james_park.pdf",
//     },
//     {
//       name: "Robert Garcia",
//       program: "PhD Student",
//       year: "3rd Year",
//       researchArea: "Glaciology & Sea Level Rise",
//       email: "robert.garcia@nitdelhi.ac.in",
//       photo: student1,
//       resumeUrl: "/resumes/robert_garcia.pdf",
//     },
//   ];

//   // Filter students by program
//   const mtechStudents = students.filter(student => 
//     student.program.includes("M.Tech") || student.program.includes("Master's")
//   );
  
//   const phdStudents = students.filter(student => 
//     student.program.includes("PhD") || student.program.includes("Doctoral")
//   );

//   return (
//     <div className="max-w-6xl mx-auto animate-fade-in space-y-8">
//       {/* Header */}
//       <Card className="border-2 shadow-lg">
//         <CardContent className="p-6">
//           <h1 className="text-4xl font-bold mb-2 flex items-center gap-3">
//             <Users className="h-10 w-10 text-primary" />
//             My Students
//           </h1>
//           <p className="text-muted-foreground">
//             Meet the talented researchers advancing climate science in our lab
//           </p>
//         </CardContent>
//       </Card>

//       {/* PhD Students Section */}
//       <section className="space-y-4">
//         <Card className="border-l-4 border-l-blue-500 shadow-md">
//           <CardContent className="p-4">
//             <div className="flex items-center gap-3">
//               <BookOpen className="h-8 w-8 text-blue-500" />
//               <div>
//                 <h2 className="text-2xl font-bold text-blue-700">PhD Scholars</h2>
//                 <p className="text-muted-foreground">
//                   Doctoral researchers pursuing advanced climate science studies
//                 </p>
//               </div>
//               <div className="ml-auto bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
//                 {phdStudents.length} Students
//               </div>
//             </div>
//           </CardContent>
//         </Card>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {phdStudents.map((student, index) => (
//             <div 
//               key={index} 
//               className="animate-fade-in hover-scale"
//               style={{ animationDelay: `${index * 0.1}s` }}
//             >
//               <StudentCard {...student} />
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* M.Tech Research Scholars Section */}
//       <section className="space-y-4">
//         <Card className="border-l-4 border-l-green-500 shadow-md">
//           <CardContent className="p-4">
//             <div className="flex items-center gap-3">
//               <GraduationCap className="h-8 w-8 text-green-500" />
//               <div>
//                 <h2 className="text-2xl font-bold text-green-700">M.Tech Scholars</h2>
//                 <p className="text-muted-foreground">
//                   Master's students specializing in climate research and technology
//                 </p>
//               </div>
//               <div className="ml-auto bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
//                 {mtechStudents.length} Students
//               </div>
//             </div>
//           </CardContent>
//         </Card>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {mtechStudents.map((student, index) => (
//             <div 
//               key={index} 
//               className="animate-fade-in hover-scale"
//               style={{ animationDelay: `${index * 0.1}s` }}
//             >
//               <StudentCard {...student} />
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Statistics Card */}
//       <Card className="bg-gradient-to-r from-primary/5 to-secondary/10 border-0">
//         <CardContent className="p-6">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
//             <div>
//               <div className="text-2xl font-bold text-primary">{students.length}</div>
//               <div className="text-sm text-muted-foreground">Total Students</div>
//             </div>
//             <div>
//               <div className="text-2xl font-bold text-blue-600">{phdStudents.length}</div>
//               <div className="text-sm text-muted-foreground">PhD Scholars</div>
//             </div>
//             <div>
//               <div className="text-2xl font-bold text-green-600">{mtechStudents.length}</div>
//               <div className="text-sm text-muted-foreground">M.Tech Scholars</div>
//             </div>
//             <div>
//               <div className="text-2xl font-bold text-purple-600">{new Set(students.map(s => s.researchArea)).size}</div>
//               <div className="text-sm text-muted-foreground">Research Areas</div>
//             </div>
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// export default Team;


// code 3

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
import Arju from "@/assets/Arju.jpg";
import Chhavi from "@/assets/Chhavi.jpeg";
import Meghna from "@/assets/meghna.jpg";
import Mihir from "@/assets/mihir.jpg";
import Abhinav from "@/assets/Abhinav.jpeg";
import Rashika from "@/assets/Rashika.png";
import Mohit from "@/assets/mohit.jpg";
import Shikha from "@/assets/Shikha.jpg";
import Bharat from "@/assets/Bharat.jpg";
import Khushi from "@/assets/Khushi.jpg";
import Bhishek from "@/assets/Bhishek.jpg";
import Vedang from "@/assets/Vedang.jpg";
import Tanuj from "@/assets/Tanuj.jpg";
import Vanagaraouthu from "@/assets/Vanagarouthu.jpg";


import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const Team = () => {
  const students = [
    {
      name: "Viaan Sharma",
      program: "M.Tech Research Scholar",
      year: "2024-2026",
      researchArea: "Cyclone Prediction",
      email: "242432009@nitdelhi.ac.in",
      photo: viaan,
      resumeUrl: "/resumes/242432009_Viaan_Sharma.pdf",
      linkedinUrl: "https://www.linkedin.com/in/viaan-sharma-9a6368201/", // Add LinkedIn URL
    },
    {
      name: "Shweta Jain",
      program: "M.Tech Research Scholar",
      year: "2024-2026",
      researchArea: "Co-Founder@SkillifyMe | AI Researcher",
      email: "242432008@nitdelhi.ac.in",
      photo: shweta,
      resumeUrl: "/resumes/Shweta.pdf",
      linkedinUrl: "https://www.linkedin.com/in/shweta-jain-a4aaa1246/", // Add LinkedIn URL
    },
    {
      name: "Dushyant Sharma",
      program: "M.Tech Research Scholar",
      year: "2024-2026",
      researchArea: "Climate Data Analysis",
      email: "242432005@nitdelhi.ac.in",
      photo: dushyant,
      resumeUrl: "/resumes/DushyantSharma.pdf",
      linkedinUrl: "https://www.linkedin.com/in/dushyant-sharma-71588822b", // Add LinkedIn URL
    },
    {
      name: "Ankit Kumar",
      program: "M.Tech Research Scholar",
      year: "2024-2026",
      researchArea: "Machine Learning Researcher",
      email: "242432002@nitdelhi.ac.in",
      photo: ankit,
      resumeUrl: "/resumes/Ankit.pdf",
      linkedinUrl: "https://www.linkedin.com/in/ankitx55", // Add LinkedIn URL
    },
    {
      name: "Dibyadarshini Maharatha",
      program: "M.Tech Research Scholar",
      year: "2024-2026",
      researchArea: "Climate Data Analytics",
      email: "242432003@nitdelhi.ac.in",
      photo: dibya,
      resumeUrl: "/resumes/Dibyadarshini.pdf",
      linkedinUrl: "https://www.linkedin.com/in/dibya-darshini-maharatha-719989234/", // Add LinkedIn URL
    },
    {
      name: "Shanthiprasad Jain",
      program: "M.Tech Research Scholar",
      year: "2024-2026",
      researchArea: "Machine Learning in Climate",
      email: "242432007@nitdelhi.ac.in",
      photo: shanti,
      resumeUrl: "/resumes/Shanthiprasad.pdf",
      linkedinUrl: "https://www.linkedin.com/in/shanthiprasad-jain-02557a1b8", // Add LinkedIn URL
    },
//m.tech batch 2025-2027 data
     
    {
    name: "Bharat Choudhary",
    program: "M.Tech Research Scholar",
    year: "2025",
    researchArea: "Machine Learning",
    email: "252432003@nitdelhi.ac.in",
    photo: Bharat,
    resumeUrl: "/resumes/Bharat.pdf",
    linkedinUrl: "https://www.linkedin.com/in/bharat-choudhary-iitm/", // Add LinkedIn URL
    },

    {
    name: "Khushi Singh",
    program: "M.Tech Research Scholar",
    year: "2025",
    researchArea: "Machine Learning",
    email: "Khushi.anuanand203@gmail.com",
    photo: Khushi,
    resumeUrl: "/resumes/Khushi.pdf",
    linkedinUrl: "https://in.linkedin.com/in/khushi-singh-323133234"
    },
    {
    name: "Bhishek Kumar",
    program: "M.Tech Research Scholar",
    year: "2025",
    researchArea: "AI, ML, Python, Cyber-Security, Crypto, BlockChain",
    email: "252432004@nitdelhi.ac.in",
    photo: Bhishek,
    resumeUrl: "/resumes/Bhishek.pdf",
    linkedinUrl: "https://www.linkedin.com/in/bhishek-kumar-958b14208/", // Add LinkedIn URL
     },
    {
    name: "Vedang Jamenis",
    program: "M.Tech Research Scholar",
    year: "2025",
    researchArea : "Machine Learning, Artificial Intelligence , Graph Theory, Computer Science ",
    email : "252432012@nitdelhi.ac.in",
    photo : Vedang,
    resumeUrl : "/resumes/Vedang.pdf",
    linkedinUrl : "https://www.linkedin.com/in/vedang-jamenis-55539a170/", // Add LinkedIn URL
     },
    {
    name: "Tanuj Joshi",
    program: "M.Tech Research Scholar",
    year: "2025",
    researchArea: "ML, Data science and analytics",
    email: "tanujjoshi37776@gmail.com",
    photo: Tanuj,
    resumeUrl: "/resumes/Tanuj.pdf",
    linkedinUrl: "https://in.linkedin.com/in/tanuj-joshi-433815200", // Add LinkedIn URL
     },
    {
    name: "Vanagarouthu Sree Chaitran",
    program: "M.Tech Research Scholar",
    year: "2025",
    researchArea: "Machine Learning, Deep Learning, Artififcial Intelligence",
    email: "chaitran0006@gmail.com",
    photo: Vanagaraouthu,
    resumeUrl: "/resumes/Vanagaraouthu.pdf",
    linkedinUrl: "https://www.linkedin.com/in/vanagarouthu-sreechaitran-b0152525a/", // Add LinkedIn URL
     },
    {
      name: "Anushka Sunil",
      program: "PhD Research Scholar",
      year: "2023-Present",
      researchArea: "Arctic Climate Dynamics, Sea Ice Variability",
      email: "anushka.sunil@nitdelhi.ac.in",
      photo: Anushka,
      resumeUrl: "/resumes/Anushka.pdf",
      linkedinUrl: "https://www.linkedin.com/in/anushka-sunil-579115317/", // Add LinkedIn URL
 },
{
  name: "Patel Mihirkumar Atulbhai",
  program: "PhD Research Scholar",
  year: "2024 - Present",
  researchArea: "Cyclone Destructiveness Analysis and Prediction using ML",
  email: "patelmihir5033@gmail.com",
  photo: Mihir,
  resumeUrl: "/resumes/Mihir.pdf",
  linkedinUrl: "https://www.linkedin.com/in/mihir-patel-7369b72b3/", // Add LinkedIn URL
 },
{
      name: "Arju",
      program: "PhD Research Scholar",
      year: "2024-Present",
      researchArea: "Climate Modelling with Machine Learning",
      email: "arju@nitdelhi.ac.in",
      photo: Arju,
      resumeUrl: "/resumes/Arju.pdf",
      linkedinUrl: "www.linkedin.com/in/arju-990589192", // Add LinkedIn URL
 },
{
      name: "Chhavi",
      program: "PhD Research Scholar",
      year: "2023-Present",
      researchArea: "Economic impacts of Climate Extremes",
      email: "chhavi@nitdelhi.ac.in",
      photo: Chhavi,
      resumeUrl: "/resumes/Chhavi.pdf",
      linkedinUrl: "https://www.linkedin.com/in/chhavi-bhakhna-a03202321?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", // Add LinkedIn URL
 },
{
      name: "Meghna",
      program: "PhD Research Scholar",
      year: "2025",
      researchArea: "Rainfall Prediction using ML",
      email: "meghnasharma2207@gmail.com",
      photo: Meghna,
      resumeUrl: "/resumes/Meghna.pdf",
      linkedinUrl: " ", // Add LinkedIn URL
 },
{
  name: "Abhinav Chaudhary",
  program: "PhD Research Scholar",
  year: "2024-Present",
  researchArea: "Sea Level Variability",
  email: "abhinavchaudhary@nitdelhi.ac.in",
  photo: Abhinav,
  resumeUrl: "/resumes/Abhinav.pdf",
  linkedinUrl: "https://www.linkedin.com/in/abhinav-chaudhary12/", // Add LinkedIn URL
 },
{
  name: "Rashika Rana",
  program: "PhD Research Scholar",
  year: "2025",
  researchArea: "Statistical Analysis of Climate and Economic Data",
  email: "rashikarana@nitdelhi.ac.in",
  photo: Rashika,
  resumeUrl: "/resumes/Rashika.pdf",
  linkedinUrl: "www.linkedin.com/in/ rashika-rana-7495a9394", // Add LinkedIn URL
 },
{
  name: "Mohit Bisht",
  program: "PhD Research Scholar",
  year: "2025",
  researchArea: "Machine Learning, Deep Learning, Artififcial Intelligence",
  email: "mohitbisht@nitdelhi.ac.in",
  photo: Mohit,
  resumeUrl: "/resumes/Mohit.pdf",
  linkedinUrl: "https://www.linkedin.com/in/mohitbisht54321/", // Add LinkedIn URL
 },
{
  name: "SHIKHA MAURYA",
  program: "PhD Research Scholar",
  year: "2025",
  researchArea: "Aerosol and Climate Change",
  email: "shikhamaurya@nitdelhi.ac.in",
  photo: Shikha,
  resumeUrl: "/resumes/Shikha.pdf",
  linkedinUrl: "https://www.linkedin.com/in/shikha-maurya-895856293", // Add LinkedIn URL
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
          <TabsTrigger value="mtech" className="flex items-center gap-2">
            <GraduationCap className="h-4 w-4" />
            M.Tech ({mtechStudents.length})
          </TabsTrigger>
          <TabsTrigger value="phd" className="flex items-center gap-2">
            <BookOpen className="h-4 w-4" />
            PhD ({phdStudents.length})
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