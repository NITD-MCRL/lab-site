import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Presentation, MapPin, Calendar } from "lucide-react";

const InvitedTalks = () => {
  const talks = [
    
    {
      title: "Assessing the Impact of Indian Ocean SST Variability on the Arctic Oscillation using CMIP6 Models",
      event: "National Conference on Polar Sciences",
      location: "National Center for Polar and Ocean Research, Goa, India",
      date: "2025",
      type: "Conference"
},
{
      title: "THEME-7 Oceans and Atmosphere",
      event: "9th National Conference of society of India, OSICON",
      location: "CSIR- National Institute of Oceanography, Goa, India",
      date: "2025",
      type: "Conference"
},
{
      title: "Cryptography,Cyber Security and N/W Sec.",
      event: "1st International Conference on Pioneering Developments in Computer Science & Digital Technologies ",
      location: "National Institute of Technology  Delhi,Delhi, India",
      date: "2024",
      type: "Conference"
},
{
      title: "The Boundary Element Model for long waves in an Irregular Shaped Harbor",
      event: "3rd International Conference on Modern Mathematical Methods and high Performance Computing in Science and Technology",
      location: "Indrerprastha Engineering College, Ghaziabad, India",
      date: "2020",
      type: "Conference"
},
{
      title: " The Numerical Solution of Boussinesq equations for Shallow Water waves ",
      event: "4th International Conference on Recent Advances in Mathematical Science and its Application",
      location: "Jaypee Institute of Information Technology,Noida, India",
      date: "2020",
      type: "Conference"
},
{
      title: "Wave Induced Oscillation in an irregular Domain by using Hybrid Finite Element Model (M14)",
      event: "8th International Conference on Applied Physics and Mathematics",
      location: "Phukhet, Thiland",
      date: "2018",
      type: "Conference"
},
{
      title: "Modelling of wave Induced Oscillation in Phong new harbor by using Hybrid Finite Element Model",
      event: "2nd International Conference on Modern Mathematical Methods and High Performance Computing In Science and Technology ",
      location: "Indrerprastha Engineering College,Ghaziabad,India",
      date: "2018",
      type: "Conference"
},
{
      title: "Mathematical modeling of Influence of Ion size effects in electrolyte in a Nanoslit with overlapped EDL",
      event: "2nd International Conference on Recent Advances in Mathematical Sciences and its Applications",
      location: "Jaypee Institute of Information Technology,Noida, India",
      date: "2017",
      type: "Conference"
},

{
      title: "Multidirectional random wave diffraction in a real harbour by using 3-D Bounding element method",
      event: "2nd International Conference on Recent Advances in Mathematical Sciences and its Applications",
      location: "Jaypee Institute of Information Technology,Noida, India",
      date: "2017",
      type: "Conference"
},
{
      title: "Hybrid Finite Element …in Pohang New Harbor",
      event: "International Conference on Ship & Offshore Technology",
      location: "Indian Institute of Technology Kharagpur, India",
      date: "2017",
      type: "Conference"
},
{
      title: "Moored Ship Motion Analysis in a complex geometry Domain",
      event: "International Conference on Mathematics & Application",
      location: "University of Delhi, India",
      date: "2017",
      type: "Conference"
},
{
      title: "Impact of El Nino on ocean Surface Wave Height for ERA- Interim andERA20C Reanalysis",
      event: "Applied Mathematics Seminar",
      location: "Pohang University of Science and Technoloogy,Gyunbuk,South Korea",
      date: "2015",
      type: "Seminar"
},
{
      title: "Hybrid Finite Element modeling  for wave oscillation in Pohang New Harbor",
      event: "Applied Mathematics Seminar",
      location: "Pohang University of Science and Technoloogy,Gyunbuk,South Korea",
      date: "2016",
      type: "Conference"
},
{
      title: "Global Influence of natural Climate Variability on Extreme Ocean wave Height Accessed by ERA 20C Reanalysis",
      event: "Applied Mathematics Seminar",
      location: "Pohang University of Science and Technoloogy,Gyunbuk,South Korea",
      date: "2016",
      type: "Conference"
},
{
      title: "Wave Spectral Characteristic of Moored Ship Motion In Pohang New Hrabor",
      event: "Applied Mathematics Seminar",
      location: "Pohang University of Science and Technoloogy,Gyunbuk,South Korea",
      date: "2016",
      type: "Conference"
},
{
      title: "Modeling and analysis of Moored Ship Motion in Pohang New Harbor under Resonance conditions",
      event: "Applied Mathematics Seminar",
      location: "Pohang University of Science and Technoloogy,Gyunbuk,South Korea",
      date: "2016",
      type: "Conference"
},
{
      title: "Influence of Climatic Variability on Extreme Ocean Wave Height Assessed From ERA- Internim and REEA40 Reanalysis",
      event: "Applied Mathematics Seminar",
      location: "Pohang University of Science and Technoloogy,Gyunbuk,South Korea",
      date: "2016",
      type: "Conference"
},
{
      title: "Stress analysis In Mooring ropes and Fender of a Moored Ship under the Resonance Condition",
      event: "Applied Mathematics Seminar",
      location: "Pohang University of Science and Technoloogy,Gyunbuk,South Korea",
      date: "2015",
      type: "Conference"
},
{
      title: "Hydrodynamic Modeling of Moored Ship Motion in an Irregular Domain",
      event: "International Conference on Computional Heat and Mass Transfer",
      location: "National Institute of Technology Warangal,India",
      date: "2015",
      type: "Conference"
},
{
      title: "Moored Ship Motion Analysis in Realistic Pohang New Hrabor and Modified PNH",
      event: "International Conference on Modern Mathematics Methods and High Performance Computing In Science And Technology",
      location: "Raj Kumar Goel Institute of Technology,Ghaziabad,India",
      date: "2012",
      type: "Conference"
},
{
      title: "Spectral Density analysis of a Moored ship Motion In Pohang New harbor",
      event: "International Conference on Mathematical modeling and Applied Soft computing",
      location: "Coimbatore Institute of Technology,Coimbatore,India",
      date: "2012",
      type: "Conference"
},
{
      title: "Wave- Induced Ship Motion in POSCO New Harbor via Helmholtz Equation with Numerical Simulations ",
      event: "General Session Speaker and Participant",
      location: "Korean Society for Industrial and Applied Mathematics,Daegu, South Korea",
      date: "2013",
      type: "Conference"
},
{
      title: "The Boundary integral method for the Computation of Linearized ocean surface wave fields in an irregular bounded geometry",
      event: "2010 Global KMS International Conference",
      location: "Seoul National University,Pohang, South Korea",
      date: "2013",
      type: "Conference"
},

{
      title: "Spectral Density analysis for Pohang New harbor ",
      event: "2011 Global KMS International Conference",
      location: "Seoul National University,Pohang, South Korea",
      date: "2012",
      type: "Conference"
},

{
      title: "Theoretical Analysis and model based Simulation to resolve the cause of POSCO New Harbor Hazards ",
      event: "2012 KMS Spring Meeting ",
      location: "Seoul National University,Pohang, South Korea",
      date: "2009",
      type: "Conference"
},
{
      title: "Numerical Simulation of the Pohang New Harbor for Sciche Reduction ",
      event: "2009 Joint Meeting of KMS and AMS",
      location: "Coimbatore Institute of Technology,India",
      date: "2012",
      type: "Conference"
},
{
      title: "Theoretical Analysis and model based Simulation to resolve the cause of POSCO New Harbor Hazards",
      event: "International Conference on Mathematical modeling and Applied Soft computing",
      location: "National Institute of Technology Rourkela ,India",
      date: "2010",
      type: "Conference"
},
{
      title: "A moored Ship Analysis with the resonate Frequency waves in the POCSO New Harbor",
      event: "International Conference on Challenges & Application of Mathematics in Science and Technology",
      location: "International Congress of Mathematicians,Hyderabad, India",
      date: "2010",
      type: "Conference"
},
  ];

  return (
    <div className="max-w-6xl mx-auto animate-fade-in">
      <h1 className="text-4xl font-bold mb-6"> Conference Talks</h1>
      
      <div className="space-y-4">
        {talks.map((talk, index) => (
          <Card 
            key={index} 
            className="hover:shadow-lg transition-all duration-300 hover:translate-x-2"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <CardContent className="p-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Presentation className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="text-xl font-bold">{talk.title}</h3>
                    <Badge variant="secondary">{talk.type}</Badge>
                  </div>
                  <p className="font-semibold text-primary mb-2">{talk.event}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>{talk.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{talk.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default InvitedTalks;
