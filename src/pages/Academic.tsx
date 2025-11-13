import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, BookOpen } from "lucide-react";

const Academic = () => {
  const courses = [
    {
      code: "01",
      title: "Probability and Statistics",
      semester: "Fall",
      level: "Undergraduate",
      description: "Introduces fundamental concepts of randomness, probability models, and statistical inference techniques."
},
{
      code: "02",
      title: "Advanced Calculus",
      semester: "Fall",
      level: "Undergraduate",
      description: "Studies advanced topics in differentiation, integration, sequences, and series for mathematical modelling."
},
{
      code: "03",
      title: "Probability and Statistical Technique",
      semester: "Spring",
      level: "Undergraduate",
      description: "Covers applied statistical methods and probability tools used for data analysis and decision-making."
},
{
      code: "04",
      title: "Numerical Methods",
      semester: "Spring",
      level: "Undergraduate",
      description: "Focuses on algorithmic approaches to solve mathematical problems using computational techniques."
},
{
      code: "05",
      title: "Modelling and Simulation",
      semester: "Fall",
      level: "Postgraduate|PhD",
      description: "Teaches mathematical modelling and simulation of real-world systems for analysis and prediction."
},
{
      code: "06",
      title: "Numerical Methods and Computations",
      semester: "Fall",
      level: "Postgraduate|PhD",
      description: "Covers advanced numerical algorithms and computational strategies for solving scientific problems."
},
{
      code: "07",
      title: "Probability and Statistics",
      semester: "Spring",
      level: "Postgraduate|PhD",
      description: "Explores graduate-level probabilistic modelling and statistical inference for complex datasets."
},
{
      code: "08",
      title: "Numerical Optimization",
      semester: "Spring",
      level: "Postgraduate|PhD",
      description: "Focuses on optimization techniques used to minimize or maximize functions in engineering and science."
},
{
      code: "09",
      title: "Numerical Method Laboratory",
      semester: "Spring",
      level: "Postgraduate|PhD",
      description: "Provides hands-on computational experiments to implement and test numerical algorithms."
},
{
      code: "10",
      title: "Computational Simulation Laboratory",
      semester: "Fall",
      level: "Postgraduate|PhD",
      description: "Offers practical training in building and analyzing simulation models using computational tools."
},
  ];

  const thesis = [
    {
      code: "1",
      title: "Divya Sardana , National Institute of Technology Delhi",
      semester: "2023",
      level: "Doctoral Thesis",
      description: "Sea Level Rise Response to the Climate Modes, Model evaluation and projection of Sea Surface Height over global oceans"
},
{
      code: "2",
      title: "Prachi Priya , National Institute of Technology Delhi",
      semester: "2023",
      level: "Doctoral Thesis",
      description: "Mathematical Modelling for Linear and Non-Linear Pressure Drop over Barriers in Partially Reflecting Arbitrary Shaped Port"
},
{
      code: "3",
      title: "Sukhwinder Kaur , National Institute of Technology Delhi",
      semester: "2022",
      level: "Doctoral Thesis",
      description: "Influence of Natural Climate Variability and Projections of extreme Wind -Wave Climate in the Indian Ocean"
},
{
      code: "4",
      title: "Rupali , National Institute of Technology Delhi",
      semester: "2021",
      level: "Doctoral Thesis",
      description: "Mathematical Modeling of Arbitrary Shaped Domain using Hybrid Element Method"
},
{
      code: "5",
      title: "Gulshan , National Institute of Technology Delhi",
      semester: "2019",
      level: "Doctoral Thesis",
      description: "Mathematical Modeling of Multidirectional Random Waves by using Boundary Element Method in an Irregular Domain"
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
              <h2 className="text-2xl font-bold"> Teaching</h2>
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
              <BookOpen className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold"> Thesis Guided</h2>
            </div>
            
            <div className="space-y-4">
              {thesis.map((thesis, index) => (
                <div 
                  key={index} 
                  className="p-4 bg-muted/50 rounded-lg hover:bg-muted transition-all"
                >
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div>
                      <h3 className="text-lg font-bold">{thesis.code}: {thesis.title}</h3>
                      <p className="text-sm text-muted-foreground">{thesis.description}</p>
                    </div>
                    <div className="flex gap-2 flex-shrink-0">
                      <Badge variant="secondary">{thesis.level}</Badge>
                      <Badge variant="outline">{thesis.semester}</Badge>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* <Card className="hover:shadow-lg transition-all duration-300">
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
        </Card> */}
      </div>
    </div>
  );
};

export default Academic;
