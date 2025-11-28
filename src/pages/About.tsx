// import { Card, CardContent } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Mail, MapPin, GraduationCap, Italic } from "lucide-react";
// import professorImage from "@/assets/professor.jpg";

// const About = () => {
//   const researchInterests = [
//     "Climate Modeling",
//     "Ocean-Atmosphere Dynamics",
//     "Carbon Cycle Research",
//     "Arctic Studies",
//     "Renewable Energy"
//   ];

//   return (
//     <div className="max-w-6xl mx-auto animate-fade-in">
//       <h1 className="text-4xl font-bold mb-6">About</h1>
      
//       <Card className="shadow-lg hover:shadow-xl transition-all duration-300">
//         <CardContent className="p-8">
//           <div className="grid md:grid-cols-3 gap-8">
//             <div className="md:col-span-1">
//               <img
//                 src={professorImage}
//                 alt="Dr Prashant Kumar"
//                 className="rounded-lg w-full object-cover aspect-[3/4] shadow-lg"
//               />
              
//               <div className="mt-6 space-y-3">
//                 <div className="flex items-center gap-2 text-sm">
//                   <Mail className="h-4 w-4 text-primary" />
//                   <span>prashantkumar@nitdelhi.ac.in</span>
//                 </div>
//                 <div className="flex items-center gap-2 text-sm">
//                   <MapPin className="h-4 w-4 text-primary" />
//                   <span>Office no. 20, Mini-Campus, Department of Applied Sciences, NIT Delhi</span>
//                 </div>
//                 <div className="flex items-center gap-2 text-sm">
//                   <GraduationCap className="h-4 w-4 text-primary" />
//                   <span>PDF at Pohang University of Science & Technology, South Korea</span>
//                 </div>
//               </div>
//             </div>

//             <div className="md:col-span-2">
//               <h2 className="text-3xl font-bold mb-2">Dr Prashant Kumar</h2>
//               <p className="text-xl text-primary mb-6">Controller of Examination & Associate Professor - Applied Sciences</p>
              
//               <div className="space-y-6">
//                 <div>
//                   <h3 className="text-2xl font-bold mb-3">Biography</h3>
//                   <p className="text-muted-foreground leading-relaxed mt-4" style={{ fontStyle: 'italic' }}>
//                   “The seas may whisper our past, the winds may carry our present, but it is in the mathematics of tomorrow’s waves that we secure our future.”
//                   </p>
//                   <p className="text-muted-foreground leading-relaxed">
//                     Dr. Prashant Kumar is an Associate Professor in the Department of Applied Sciences at the National Institute of Technology Delhi, dedicated to advancing our understanding of climate-driven coastal dynamics through rigorous computational and applied mathematical research.His work sits at the intersection of ocean wave climate, extreme wave modelling, sea‑level rise, and climate variability—employing data‑driven and machine‑learning methods to quantify and project wave and climate behaviour in the Indian Ocean region. With over 70 peer‑reviewed journal articles and a growing h‑index, he has attracted national support through prestigious grants including the Early Career Research Award (SERB‑DST), MoES Core Grant, ITS Grant (SERB‑DST) and Core Research Grant (SERB‑DST). He supervises a vibrant research group at NIT Delhi, mentoring doctoral candidates on topics from wind‑wave climate projections to hybrid mathematical modelling of irregular coastal domains, and contributes actively to professional bodies such as the Ocean Society of India and the Asian Geosciences Society. Through his interdisciplinary leadership, Dr. Kumar is committed to integrating mathematical rigor, physical oceanography and climate science to help build sustainable and resilient coastal futures.
//                   </p>
                  
//                 </div>

//                 <div>
//                   <h3 className="text-2xl font-bold mb-3">Research Interests</h3>
//                   <div className="flex flex-wrap gap-2">
//                     {researchInterests.map((interest) => (
//                       <Badge key={interest} variant="secondary" className="text-sm">
//                         {interest}
//                       </Badge>
//                     ))}
//                   </div>
//                 </div>

//                 <div>
//                   <h3 className="text-2xl font-bold mb-3">Education</h3>
//                   <div className="space-y-3">
//                     <div>
//                       <p className="font-semibold">PDF </p>
//                       <p className="text-sm text-muted-foreground">Pohang University of Science & Technology, South Korea , 2014</p>
//                     </div>
//                     <div>
//                       <p className="font-semibold">PHD</p>
//                       <p className="text-sm text-muted-foreground">Pohang University of Science & Technology, South Korea , 2013</p>
//                     </div>
//                     <div>
//                       <p className="font-semibold">M.Sc. </p>
//                       <p className="text-sm text-muted-foreground">Indian Institute of Technology Delhi , 2006</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// export default About;


import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, MapPin, GraduationCap, Calendar, Briefcase } from "lucide-react";
import professorImage from "@/assets/professor.jpg";

const About = () => {
  const researchInterests = [
    "Wind-Wave Climate",
    "Extreme Heat Stress Analysis",
    "Coastal Wave Climate Analysis",
    "Arctic Sea Ice Variations",
    "Climate Prediction using AI Techniques",
    "Tropical Cyclone Prediction & Analysis"
  ];

  const timelineData = [
    {
      responsibility: "Controller of Examination",
      from: "May, 2024",
      to: "Present"
    },
    {
      responsibility: "Program Coordinator (M. Tech. (MC))",
      from: "July 2023",
      to: "Present"
    },
    {
      responsibility: "Head of the Department (AS &HM)",
      from: "July 2022",
      to: "September 2023"
    },
    {
      responsibility: "Associate Dean (Planning and Development)",
      from: "September 2022",
      to: "December 2023"
    },
    {
      responsibility: "Warden (Boy Hostel)",
      from: "June 2018",
      to: "January 2023"
    },
    {
      responsibility: "DPGC convener (AS&HM)",
      from: "July, 2018",
      to: "July 2021"
    },
    {
      responsibility: "Faculty Coordinator (Social Reform Club)",
      from: "January 2020",
      to: "Present"
    },
    {
      responsibility: "Chairman (Photography Club)",
      from: "October 2016",
      to: "July 2020"
    }
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
              
              {/* Timeline Section */}
              <div className="mt-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-primary" />
                  Administrative Responsibilities
                </h3>
                <div className="space-y-4">
                  {timelineData.map((item, index) => (
                    <div key={index} className="relative pl-6 pb-4 border-l-2 border-primary/30 last:pb-0">
                      {/* Timeline dot */}
                      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-2 border-background"></div>
                      
                      <div className="space-y-1">
                        <h4 className="font-semibold text-sm leading-tight">{item.responsibility}</h4>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Calendar className="h-3 w-3" />
                          <span>{item.from} - {item.to}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

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
                  <p className="text-muted-foreground leading-relaxed mt-4 italic">
                  "The seas may whisper our past, the winds may carry our present, but it is in the mathematics of tomorrow's waves that we secure our future."
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
                      <p className="font-semibold">PDF</p>
                      <p className="text-sm text-muted-foreground">Pohang University of Science & Technology, South Korea, 2014</p>
                    </div>
                    <div>
                      <p className="font-semibold">PHD</p>
                      <p className="text-sm text-muted-foreground">Pohang University of Science & Technology, South Korea, 2013</p>
                    </div>
                    <div>
                      <p className="font-semibold">M.Sc.</p>
                      <p className="text-sm text-muted-foreground">Indian Institute of Technology Delhi, 2006</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Professional Service</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="font-semibold">Dr. Prashant Kumar - LIFE Member</p>
                      <p className="text-sm text-muted-foreground">Ocean Society of India, 2020</p>
                    </div>
                    <div>
                      <p className="font-semibold">Dr. Prashant Kumar - Annual</p>
                      <p className="text-sm text-muted-foreground">Asian Geo Science Society (AOGS), 2020</p>
                    </div>
                    <div>
                      <p className="font-semibold">Dr. Prashant Kumar - Annual</p>
                      <p className="text-sm text-muted-foreground">Korean Mathematical Society, 2010</p>
                    </div>
                    {/* <div>
                      <p className="font-semibold">Dr. Prashant Kumar - Annual</p>
                      <p className="text-sm text-muted-foreground">SIAM, 2007</p>
                    </div> */}
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