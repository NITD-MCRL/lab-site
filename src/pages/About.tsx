import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, MapPin, GraduationCap } from "lucide-react";
import professorImage from "@/assets/professor.jpg";

const About = () => {
  const researchInterests = [
    "Climate Modeling",
    "Ocean-Atmosphere Dynamics",
    "Carbon Cycle Research",
    "Arctic Studies",
    "Renewable Energy"
  ];

  return (
    <div className="max-w-6xl mx-auto animate-fade-in">
      <h1 className="text-4xl font-bold mb-6">About</h1>
      
      <Card className="shadow-lg hover:shadow-xl transition-all duration-300">
        <CardContent className="p-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <img
                src={professorImage}
                alt="Dr Prashant Kumar"
                className="rounded-lg w-full object-cover aspect-[3/4] shadow-lg"
              />
              
              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <Mail className="h-4 w-4 text-primary" />
                  <span>climate.lab@university.edu</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>Environmental Science Building, Room 401</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <GraduationCap className="h-4 w-4 text-primary" />
                  <span>Ph.D., Climate Science</span>
                </div>
              </div>
            </div>

            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold mb-2">Dr Prashant Kumar</h2>
              <p className="text-xl text-primary mb-6">COE & Associate Professor</p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-3">Biography</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Dr Prashant Kumar is a distinguished professor specializing in climate science 
                    and environmental research. With over 20 years of research experience, she has published 
                    more than 150 papers in top-tier journals and has been recognized with numerous awards.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    She received her Ph.D. from MIT and has been recognized as a leading expert in 
                    climate modeling and Arctic research. She is passionate about mentoring the next 
                    generation of climate scientists and has supervised over 40 graduate students.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-3">Research Interests</h3>
                  <div className="flex flex-wrap gap-2">
                    {researchInterests.map((interest) => (
                      <Badge key={interest} variant="secondary" className="text-sm">
                        {interest}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-3">Education</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="font-semibold">Ph.D. in Climate Science</p>
                      <p className="text-sm text-muted-foreground">MIT, 2003</p>
                    </div>
                    <div>
                      <p className="font-semibold">M.S. in Atmospheric Sciences</p>
                      <p className="text-sm text-muted-foreground">Stanford University, 1999</p>
                    </div>
                    <div>
                      <p className="font-semibold">B.S. in Environmental Science</p>
                      <p className="text-sm text-muted-foreground">UC Berkeley, 1997</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default About;
