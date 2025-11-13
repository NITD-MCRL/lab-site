import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, GraduationCap, Briefcase, MapPin, Mail, ExternalLink } from "lucide-react";
// Import alumni photos (you'll need to add these images to your assets)
import alumni1 from "@/assets/student1.jpg";
import alumni2 from "@/assets/student2.jpg";
import alumni3 from "@/assets/student3.jpg";
import alumni4 from "@/assets/student4.jpg";
import alumni5 from "@/assets/student4.jpg";

const Alumni = () => {
  const alumniData = [
    {
      id: 1,
      name: "Dr. Rajesh Sharma",
      program: "PhD Research Scholar",
      year: "2018-2022",
      researchArea: "Climate Modeling & Prediction",
      currentPosition: "Climate Scientist",
      currentOrganization: "Indian Institute of Tropical Meteorology, Pune",
      location: "Pune, India",
      email: "rajesh.sharma@iitm.ac.in",
      linkedinUrl: "https://linkedin.com/in/rajesh-sharma",
      photo: alumni1,
      achievements: [
        "Published 15+ research papers in Q1 journals",
        "Awarded Young Scientist Award 2023",
        "Lead author in IPCC special report"
      ]
    },
    {
      id: 2,
      name: "Priya Patel",
      program: "M.Tech Research Scholar",
      year: "2019-2021",
      researchArea: "Ocean-Atmosphere Dynamics",
      currentPosition: "Research Scientist",
      currentOrganization: "National Oceanic and Atmospheric Administration",
      location: "Maryland, USA",
      email: "priya.patel@noaa.gov",
      linkedinUrl: "https://linkedin.com/in/priya-patel",
      photo: alumni2,
      achievements: [
        "Developed new wave prediction models",
        "Contributed to NOAA's climate assessment",
        "Patent for coastal erosion prediction system"
      ]
    },
    {
      id: 3,
      name: "Amit Kumar",
      program: "PhD Research Scholar",
      year: "2017-2021",
      researchArea: "Arctic Climate Studies",
      currentPosition: "Assistant Professor",
      currentOrganization: "University of Delhi",
      location: "Delhi, India",
      email: "amit.kumar@du.ac.in",
      linkedinUrl: "https://linkedin.com/in/amit-kumar",
      photo: alumni3,
      achievements: [
        "Received SERB Early Career Research Award",
        "Principal investigator of 3 national projects",
        "Member of National Climate Committee"
      ]
    },
    {
      id: 4,
      name: "Neha Gupta",
      program: "M.Tech Research Scholar",
      year: "2020-2022",
      researchArea: "Renewable Energy Systems",
      currentPosition: "Data Scientist",
      currentOrganization: "Microsoft Research",
      location: "Bangalore, India",
      email: "neha.gupta@microsoft.com",
      linkedinUrl: "https://linkedin.com/in/neha-gupta",
      photo: alumni4,
      achievements: [
        "Developed AI models for energy optimization",
        "Speaker at International AI Conference 2023",
        "Open source contributor to climate AI tools"
      ]
    },
    {
      id: 5,
      name: "Sanjay Verma",
      program: "PhD Research Scholar",
      year: "2016-2020",
      researchArea: "Carbon Cycle Research",
      currentPosition: "Senior Research Fellow",
      currentOrganization: "Max Planck Institute for Meteorology",
      location: "Hamburg, Germany",
      email: "sanjay.verma@mpimet.mpg.de",
      linkedinUrl: "https://linkedin.com/in/sanjay-verma",
      photo: alumni5,
      achievements: [
        "Marie Curie Fellowship recipient",
        "Key contributor to EU Horizon projects",
        "Reviewer for Nature Climate Change"
      ]
    },
    {
      id: 6,
      name: "Anjali Singh",
      program: "M.Tech Research Scholar",
      year: "2018-2020",
      researchArea: "Climate Data Analytics",
      currentPosition: "Climate Risk Analyst",
      currentOrganization: "Goldman Sachs",
      location: "Mumbai, India",
      email: "anjali.singh@gs.com",
      linkedinUrl: "https://linkedin.com/in/anjali-singh",
      photo: alumni1, // You can replace with actual photos
      achievements: [
        "Developed climate risk assessment frameworks",
        "Featured in Economic Times for climate finance work",
        "Mentor for women in climate tech"
      ]
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
              <div className="mb-4">
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
              </div>

              {/* Contact Links */}
              <div className="flex gap-2 pt-4 border-t">
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
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Statistics Section */}
      <Card className="bg-muted/50">
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
      </Card>

      {/* Call to Action */}
      <Card>
        <CardContent className="p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Stay Connected</h2>
          <p className="text-muted-foreground mb-6">
            Are you an alumnus of our lab? Update your information and join our alumni network.
          </p>
          <div className="flex gap-4 justify-center">
            <Button asChild>
              <a href="mailto:climate.lab@university.edu">
                Update Your Profile
              </a>
            </Button>
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