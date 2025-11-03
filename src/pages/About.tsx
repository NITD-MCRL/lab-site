import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, MapPin, GraduationCap, Italic } from "lucide-react";
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
                  <span>prashantkumar@nitdelhi.ac.in</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>Office no. 20, Mini-Campus, Department of Applied Sciences, NIT Delhi</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <GraduationCap className="h-4 w-4 text-primary" />
                  <span>PDF at Pohang University of Science & Technology, South Korea</span>
                </div>
              </div>
            </div>

            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold mb-2">Dr Prashant Kumar</h2>
              <p className="text-xl text-primary mb-6">Controller of Examination & Associate Professor - Applied Sciences</p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-3">Biography</h3>
                  <p className="text-muted-foreground leading-relaxed mt-4" style={{ fontStyle: 'italic' }}>
                  “The seas may whisper our past, the winds may carry our present, but it is in the mathematics of tomorrow’s waves that we secure our future.”
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Dr. Prashant Kumar is an Associate Professor in the Department of Applied Sciences at the National Institute of Technology Delhi, dedicated to advancing our understanding of climate-driven coastal dynamics through rigorous computational and applied mathematical research.His work sits at the intersection of ocean wave climate, extreme wave modelling, sea‑level rise, and climate variability—employing data‑driven and machine‑learning methods to quantify and project wave and climate behaviour in the Indian Ocean region. With over 70 peer‑reviewed journal articles and a growing h‑index, he has attracted national support through prestigious grants including the Early Career Research Award (SERB‑DST), MoES Core Grant, ITS Grant (SERB‑DST) and Core Research Grant (SERB‑DST). He supervises a vibrant research group at NIT Delhi, mentoring doctoral candidates on topics from wind‑wave climate projections to hybrid mathematical modelling of irregular coastal domains, and contributes actively to professional bodies such as the Ocean Society of India and the Asian Geosciences Society. Through his interdisciplinary leadership, Dr. Kumar is committed to integrating mathematical rigor, physical oceanography and climate science to help build sustainable and resilient coastal futures.
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
                      <p className="font-semibold">PDF </p>
                      <p className="text-sm text-muted-foreground">Pohang University of Science & Technology, South Korea , 2014</p>
                    </div>
                    <div>
                      <p className="font-semibold">PHD</p>
                      <p className="text-sm text-muted-foreground">Pohang University of Science & Technology, South Korea , 2013</p>
                    </div>
                    <div>
                      <p className="font-semibold">M.Sc. </p>
                      <p className="text-sm text-muted-foreground">Indian Institute of Technology Delhi , 2006</p>
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
