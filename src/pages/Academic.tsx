import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, BookOpen } from "lucide-react";

const Academic = () => {
  const courses = [
    {
      code: "CLIM 501",
      title: "Climate System Dynamics",
      semester: "Fall 2024",
      level: "Graduate",
      description: "Advanced course covering Earth's climate system, energy balance, and climate variability."
    },
    {
      code: "CLIM 601",
      title: "Climate Modeling",
      semester: "Spring 2025",
      level: "Graduate",
      description: "Hands-on training in climate model development, validation, and interpretation."
    },
    {
      code: "ENV 301",
      title: "Environmental Data Analysis",
      semester: "Fall 2024",
      level: "Undergraduate",
      description: "Introduction to statistical methods and computational tools for environmental data."
    }
  ];

  const serviceRoles = [
    // {
    //   role: "Associate Editor",
    //   organization: "Climate Dynamics Journal",
    //   period: "2022-Present"
    // },
    // {
    //   role: "Review Panel Member",
    //   organization: "National Science Foundation",
    //   period: "2021-Present"
    // },
    // {
    //   role: "Conference Organizer",
    //   organization: "International Climate Science Symposium",
    //   period: "2023"
    // },
    // {
    //   role: "Department Graduate Committee Chair",
    //   organization: "University Graduate Programs",
    //   period: "2020-2024"
    // }

    {
      role: "Dr. Prashant Kumar - LIFE Member",
      organization: "Ocean Society of India",
      period: "2020"
},
{
      role: "Dr. Prashant Kumar - Annual",
      organization: "Asian Geo Science Society (AOGS)",
      period: "2020"
},
{
      role: "Dr. Prashant Kumar - Annual",
      organization: "Korean Mathematical Society",
      period: "2010"
},
{
      role: "Dr. Prashant Kumar - Annual",
      organization: "SIAM",
      period: "2007"
}
  ];

  return (
    <div className="max-w-6xl mx-auto animate-fade-in">
      <h1 className="text-4xl font-bold mb-6">Academic Activities</h1>
      
      <div className="space-y-6">
        <Card className="hover:shadow-lg transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold">Teaching</h2>
            </div>
            
            <div className="space-y-4">
              {courses.map((course, index) => (
                <div 
                  key={index} 
                  className="p-4 bg-muted/50 rounded-lg hover:bg-muted transition-all"
                >
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div>
                      <h3 className="text-lg font-bold">{course.code}: {course.title}</h3>
                      <p className="text-sm text-muted-foreground">{course.description}</p>
                    </div>
                    <div className="flex gap-2 flex-shrink-0">
                      <Badge variant="secondary">{course.level}</Badge>
                      <Badge variant="outline">{course.semester}</Badge>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <GraduationCap className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold">Professional Service</h2>
            </div>
            
            <div className="space-y-3">
              {serviceRoles.map((service, index) => (
                <div 
                  key={index} 
                  className="flex items-center justify-between p-3 bg-muted/50 rounded-lg hover:bg-muted transition-all"
                >
                  <div>
                    <p className="font-semibold">{service.role}</p>
                    <p className="text-sm text-muted-foreground">{service.organization}</p>
                  </div>
                  <Badge variant="outline">{service.period}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Academic;
