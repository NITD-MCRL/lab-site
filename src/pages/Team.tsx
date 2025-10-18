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
//       year: "2nd Year",
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
//       year: "2nd Year",
//       researchArea: "Renewable Energy Systems",
//       email: "david.kim@university.edu",
//       photo: student1,
//       resumeUrl: "/resumes/242432009_Viaan_Sharma.pdf", // Add this line
//     },
//     {
//       name: "Rachel Thompson",
//       program: "Master's Student",
//       year: "1st Year",
//       researchArea: "Climate Data Analysis",
//       email: "rachel.thompson@university.edu",
//       photo: student2,
//       resumeUrl: "/resumes/242432009_Viaan_Sharma.pdf", // Add this line
//     },
//     {
//       name: "James Park",
//       program: "PhD Student",
//       year: "1st Year",
//       researchArea: "Extreme Weather Events",
//       email: "james.park@university.edu",
//       photo: student3,
//       resumeUrl: "/resumes/242432009_Viaan_Sharma.pdf", // Add this line
//     },
//     {
//       name: "Lisa Anderson",
//       program: "Master's Student",
//       year: "2nd Year",
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
//       year: "1st Year",
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
//       program: "M.Tech Student",
//       year: "2nd Year",
//       researchArea: "Cyclone Prediction",
//       email: "242432009@nitdelhi.ac.in",
//       photo: viaan,
//       resumeUrl: "/resumes/242432009_Viaan_Sharma.pdf",
//     },
//     {
//       name: "David Kim",
//       program: "M.Tech Student",
//       year: "2nd Year",
//       researchArea: "Renewable Energy Systems",
//       email: "david.kim@nitdelhi.ac.in",
//       photo: student1,
//       resumeUrl: "/resumes/david_kim.pdf",
//     },
//     {
//       name: "Rachel Thompson",
//       program: "M.Tech Student",
//       year: "1st Year",
//       researchArea: "Climate Data Analysis",
//       email: "rachel.thompson@nitdelhi.ac.in",
//       photo: student2,
//       resumeUrl: "/resumes/rachel_thompson.pdf",
//     },
//     {
//       name: "Lisa Anderson",
//       program: "M.Tech Student",
//       year: "2nd Year",
//       researchArea: "Environmental Policy",
//       email: "lisa.anderson@nitdelhi.ac.in",
//       photo: student4,
//       resumeUrl: "/resumes/lisa_anderson.pdf",
//     },
//     {
//       name: "Amanda Lee",
//       program: "M.Tech Student",
//       year: "1st Year",
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
//       year: "2nd Year",
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
//       year: "1st Year",
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

//       {/* M.Tech Students Section */}
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
import student1 from "@/assets/student1.jpg";
import student2 from "@/assets/student2.jpg";
import student3 from "@/assets/student3.jpg";
import student4 from "@/assets/student4.jpg";
import viaan from "@/assets/viaan.jpeg";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const Team = () => {
  const students = [
    {
      name: "Viaan Sharma",
      program: "M.Tech Student",
      year: "2nd Year",
      researchArea: "Cyclone Prediction",
      email: "242432009@nitdelhi.ac.in",
      photo: viaan,
      resumeUrl: "/resumes/242432009_Viaan_Sharma.pdf",
    },
    {
      name: "David Kim",
      program: "M.Tech Student",
      year: "2nd Year",
      researchArea: "Renewable Energy Systems",
      email: "david.kim@nitdelhi.ac.in",
      photo: student1,
      resumeUrl: "/resumes/david_kim.pdf",
    },
    {
      name: "Rachel Thompson",
      program: "M.Tech Student",
      year: "1st Year",
      researchArea: "Climate Data Analysis",
      email: "rachel.thompson@nitdelhi.ac.in",
      photo: student2,
      resumeUrl: "/resumes/rachel_thompson.pdf",
    },
    {
      name: "Lisa Anderson",
      program: "M.Tech Student",
      year: "2nd Year",
      researchArea: "Environmental Policy",
      email: "lisa.anderson@nitdelhi.ac.in",
      photo: student4,
      resumeUrl: "/resumes/lisa_anderson.pdf",
    },
    {
      name: "Amanda Lee",
      program: "M.Tech Student",
      year: "1st Year",
      researchArea: "Sustainable Development",
      email: "amanda.lee@nitdelhi.ac.in",
      photo: student2,
      resumeUrl: "/resumes/amanda_lee.pdf",
    },
    {
      name: "Alex Chen",
      program: "PhD Student",
      year: "4th Year",
      researchArea: "Climate Modeling & Prediction",
      email: "alex.chen@nitdelhi.ac.in",
      photo: student1,
      resumeUrl: "/resumes/alex_chen.pdf",
    },
    {
      name: "Sarah Martinez",
      program: "PhD Student",
      year: "3rd Year",
      researchArea: "Ocean-Atmosphere Interactions",
      email: "sarah.martinez@nitdelhi.ac.in",
      photo: student2,
      resumeUrl: "/resumes/sarah_martinez.pdf",
    },
    {
      name: "Michael Johnson",
      program: "PhD Student",
      year: "2nd Year",
      researchArea: "Carbon Cycle Dynamics",
      email: "michael.johnson@nitdelhi.ac.in",
      photo: student3,
      resumeUrl: "/resumes/michael_johnson.pdf",
    },
    {
      name: "Emily Wang",
      program: "PhD Student",
      year: "5th Year",
      researchArea: "Arctic Climate Change",
      email: "emily.wang@nitdelhi.ac.in",
      photo: student4,
      resumeUrl: "/resumes/emily_wang.pdf",
    },
    {
      name: "James Park",
      program: "PhD Student",
      year: "1st Year",
      researchArea: "Extreme Weather Events",
      email: "james.park@nitdelhi.ac.in",
      photo: student3,
      resumeUrl: "/resumes/james_park.pdf",
    },
    {
      name: "Robert Garcia",
      program: "PhD Student",
      year: "3rd Year",
      researchArea: "Glaciology & Sea Level Rise",
      email: "robert.garcia@nitdelhi.ac.in",
      photo: student1,
      resumeUrl: "/resumes/robert_garcia.pdf",
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