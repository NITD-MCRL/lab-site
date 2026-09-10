import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, GraduationCap, Briefcase, MapPin, Mail, ExternalLink } from "lucide-react";
// Import alumni photos (you'll need to add these images to your assets)
import alumni1 from "@/assets/user.jpg";
import alumni2 from "@/assets/user.jpg";
import alumni3 from "@/assets/user.jpg";
import alumni4 from "@/assets/user.jpg";
import alumni5 from "@/assets/user.jpg";
import alumni6 from "@/assets/user.jpg";
import Anshu from "@/assets/anshu.jpg";
import viaan from "@/assets/viaan.jpeg";
import shweta from "@/assets/shweta.jpg";
import dushyant from "@/assets/242432005.jpg";
import ankit from "@/assets/242432002.jpg";
import dibya from "@/assets/242432003.jpg";
import shanti from "@/assets/242432007.jpeg";
import Tanuj from "@/assets/Tanuj.jpg";
import Ramakant from "@/assets/Ramakant.jpeg";

const Alumni = () => {
  const alumniData = [
    { 
      name: "Ramakant Prasad",
      program: "PhD Research Scholar",
      year: "2022-2026",
      researchArea: "Wind-Wave Climate Change", 
      email: "ramakant.prasad@nitdelhi.ac.in",
      photo: Ramakant,
      resumeUrl: null, // Set to null or undefined
      linkedinUrl: "https://www.linkedin.com/in/ramakant-prasad-a42469a0/",
      showResume: false, // Add this flag
      location: "Delhi, India",
    },
    {
      name: "Tanuj Joshi",
      program: "M.Tech Research Scholar",
      year: "2025-2027",
      researchArea: "ML, Data science and analytics",
      email: "tanujjoshi37776@gmail.com",
      photo: Tanuj,
      location: "Lucknow, India",
      resumeUrl: "/resumes/Tanuj.pdf",
      linkedinUrl: "https://in.linkedin.com/in/tanuj-joshi-433815200",
    },
    {
      name: "Ankit Kumar",
      program: "M.Tech Research Scholar",
      year: "2024-2026",
      researchArea: "Cloudburst Analysis | ML Researcher",
      email: "242432002@nitdelhi.ac.in",
      photo: ankit,
      location: "Banglore, India",
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
      location: "Surat, India",
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
      location: "Haryana, India",
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
      location: "Delhi, India",
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
      location: "Delhi, India",
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
      location: "Delhi, India",
      resumeUrl: "/resumes/242432009_Viaan_Sharma.pdf",
      linkedinUrl: "https://www.linkedin.com/in/viaan-sharma-9a6368201/",
    },
    {
      id: 1,
      name: "Anshu Yadav",
      program: "PhD Research Scholar",
      year: "2022-2026",
      researchArea: "Wind-wave, Wave Power, and Tropical Cyclones", 
      email: "anshuyadav@nitdelhi.ac.in",
      photo: Anshu,
      location: "Haryana, India",
      resumeUrl: "/resumes/Anshu.pdf",
      linkedinUrl: "https://www.linkedin.com/in/anshu-yadav-b41099233/",
    },
    {
      id: 2,
      name: "Gulshan",
      program: "PhD Research Scholar",
      year: "PhD – 2018",
      researchArea: "Mathematical Modelling",
      currentPosition: "Lecturer",
      currentOrganization: "Government College in Haryana",
      location: "Haryana, India",
      email: "gulshan@example.com",
      linkedinUrl: "https://linkedin.com/in/gulshan",
      photo: alumni1,
    },
    {
      id: 3,
      name: "Rupali",
      program: "PhD Research Scholar",
      year: "PhD – 2021",
      researchArea: "Mathematical Modelling",
      currentPosition: "Assistant Professor",
      currentOrganization: "Vivekananda Institute of Professional Studies, Gurugram",
      location: "Gurugram, India",
      email: "rupali@example.com",
      linkedinUrl: "https://linkedin.com/in/rupali",
      photo: alumni2,
    },
    {
      id: 4,
      name: "Sukhwinder Kaur",
      program: "PhD Research Scholar",
      year: "PhD – 2022",
      researchArea: "Extreme Wind-Wave Climate",
      currentPosition: "Scientist",
      currentOrganization: "NCMRWF - National Center For Medium Range Weather Forecasting, Noida",
      location: "Noida, India",
      email: "sukhwinder@example.com",
      linkedinUrl: "https://linkedin.com/in/sukhwinder",
      photo: alumni3,
    },
    {
      id: 5,
      name: "Prachi Priya",
      program: "PhD Research Scholar",
      year: "PhD – 2023",
      researchArea: "Mathematical Modelling",
      currentPosition: "Assistant Professor",
      currentOrganization: "KIET Group of Institutions, Delhi–NCR, Ghaziabad",
      location: "Ghaziabad, India",
      email: "prachi@example.com",
      linkedinUrl: "https://linkedin.com/in/prachi",
      photo: alumni4,
    },
    {
      id: 6,
      name: "Divya Sardana",
      program: "PhD Research Scholar",
      year: "PhD – 2023",
      researchArea: "Sea Level Changes",
      currentPosition: "Post-Doc",
      currentOrganization: "IIT Roorkee",
      location: "Uttar Pradesh, India",
      email: "divya@example.com",
      linkedinUrl: "https://linkedin.com/in/divya",
      photo: alumni5,
    },
    {
      id: 7,
      name: "Vinita",
      program: "PhD Research Scholar",
      year: "PhD – 2025",
      researchArea: "Mathematical Modelling",
      currentPosition: "Lecturer",
      currentOrganization: "Government Polytechnic College",
      location: "Uttar Pradesh, India",
      email: "divya@example.com",
      linkedinUrl: "https://linkedin.com/in/divya",
      photo: alumni6,
    }
  ];
  // Group alumni by program type
  const phdAlumni = alumniData.filter(alumni => alumni.program.includes("PhD"));
  const mtechAlumni = alumniData.filter(alumni => alumni.program.includes("M.Tech"));

  return (
    <div className="max-w-6xl mx-auto animate-fade-in space-y-8">
      {/* Header Section */}
      <Card className="border-2 shadow-lg bg-gradient-to-r from-primary/5 to-primary/10">
        <CardContent className="p-8 text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <Users className="h-12 w-12 text-primary" />
            <GraduationCap className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Our Alumni</h1>
          <p className="text-xl text-muted-foreground mb-4">
            Celebrating the achievements of our former students who are making significant contributions to climate science worldwide
          </p>
          <div className="flex justify-center gap-6 text-sm">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">{alumniData.length}</div>
              <div className="text-muted-foreground">Total Alumni</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">{phdAlumni.length}</div>
              <div className="text-muted-foreground">PhD Graduates</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">{mtechAlumni.length}</div>
              <div className="text-muted-foreground">M.Tech Graduates</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Alumni Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {alumniData.map((alumni, index) => (
          <Card 
            key={alumni.id}
            className="hover:shadow-xl transition-all duration-300 hover:scale-105 group"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <CardContent className="p-6">
              {/* Alumni Photo and Basic Info */}
              <div className="text-center mb-4">
                <img
                  src={alumni.photo}
                  alt={alumni.name}
                  className="w-24 h-24 rounded-full mx-auto mb-3 object-cover border-4 border-primary/20 group-hover:border-primary/40 transition-colors"
                />
                <h3 className="text-xl font-bold mb-1">{alumni.name}</h3>
                <Badge variant="secondary" className="mb-2">
                  {alumni.program}
                </Badge>
                <p className="text-sm text-muted-foreground">{alumni.year}</p>
              </div>

              {/* Research Area */}
              <div className="mb-4">
                <h4 className="font-semibold text-sm mb-1">Research Area</h4>
                <p className="text-sm text-muted-foreground">{alumni.researchArea}</p>
              </div>

              {/* Current Position */}
              <div className="mb-4">
                <div className="flex items-start gap-2 mb-2">
                  <Briefcase className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-sm">Current Position</h4>
                    <p className="text-sm">{alumni.currentPosition}</p>
                    <p className="text-sm text-muted-foreground">{alumni.currentOrganization}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="text-sm text-muted-foreground">{alumni.location}</span>
                </div>
              </div>

              {/* Key Achievements */}
              {/* <div className="mb-4">
                <h4 className="font-semibold text-sm mb-2">Key Achievements</h4>
                <ul className="space-y-1">
                  {alumni.achievements.slice(0, 2).map((achievement, idx) => (
                    <li key={idx} className="text-xs text-muted-foreground flex items-start gap-1">
                      <span className="text-primary mt-1">•</span>
                      {achievement}
                    </li>
                  ))}
                  {alumni.achievements.length > 2 && (
                    <li className="text-xs text-primary font-medium">
                      +{alumni.achievements.length - 2} more achievements
                    </li>
                  )}
                </ul>
              </div> */}

              {/* Contact Links */}
              {/* <div className="flex gap-2 pt-4 border-t">
                <Button variant="outline" size="sm" className="flex-1" asChild>
                  <a href={`mailto:${alumni.email}`}>
                    <Mail className="h-3 w-3 mr-1" />
                    Email
                  </a>
                </Button>
                <Button variant="outline" size="sm" className="flex-1" asChild>
                  <a href={alumni.linkedinUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-3 w-3 mr-1" />
                    LinkedIn
                  </a>
                </Button>
              </div> */}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Statistics Section */}
      {/* <Card className="bg-muted/50">
        <CardContent className="p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Alumni Impact</h2>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">6+</div>
              <div className="text-sm text-muted-foreground">Countries</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Research Papers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Awards</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">10+</div>
              <div className="text-sm text-muted-foreground">Patents</div>
            </div>
          </div>
        </CardContent>
      </Card> */}

      {/* Call to Action */}
      <Card>
        <CardContent className="p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Stay Connected</h2>
          <p className="text-muted-foreground mb-6">
            Are you an alumnus of our lab? Update your information and join our alumni network.
          </p>
          <div className="flex gap-4 justify-center">
            {/* <Button asChild>
              <a href="mailto:climate.lab@university.edu">
                Update Your Profile
              </a>
            </Button> */}
            <Button variant="outline" asChild>
              <a href="/contact">
                Join Alumni Network
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Alumni;