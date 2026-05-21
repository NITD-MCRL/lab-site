// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { ArrowRight, Microscope, BookOpen, Users, ChevronLeft, ChevronRight, Megaphone, Globe, Linkedin, Mail, Heart, ExternalLink, Github } from "lucide-react";
// import { Link, useNavigate } from "react-router-dom";
// import { useState, useEffect } from "react";
// import labHero from "@/assets/lab-hero.jpg";
// import professorImage from "@/assets/professor.jpg";
// import research1 from "@/assets/research-1.jpeg";
// import research2 from "@/assets/research-2.jpeg";
// import research4 from "@/assets/research-4.jpeg";
// import research5 from "@/assets/research-5.jpeg";
// import research6 from "@/assets/research-6.jpeg";
// import research7 from "@/assets/research-7.jpeg";
// import bg from "@/assets/bg.jpg";
// import { MapPin } from "lucide-react";
// import logo2 from "@/assets/logo2.png";


// // Typing Animation Component
// const TypingAnimation = ({ text, speed = 100 }) => {
//   const [displayText, setDisplayText] = useState('');
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     if (currentIndex < text.length) {
//       const timer = setTimeout(() => {
//         setDisplayText(prev => prev + text[currentIndex]);
//         setCurrentIndex(prev => prev + 1);
//       }, speed);

//       return () => clearTimeout(timer);
//     }
//   }, [currentIndex, text, speed]);

//   return <span>{displayText}</span>;
// };

// const Home = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [showSubtitle, setShowSubtitle] = useState(false);
//   const navigate = useNavigate();

//   // Function to handle navigation to team page with scroll to top
//   const handleTeamNavigation = (e) => {
//     e.preventDefault();
//     // Navigate to team page
//     navigate('/team');
//     // Scroll to top after navigation
//     setTimeout(() => {
//       window.scrollTo({ top: 0, behavior: 'smooth' });
//     }, 100);
//   };

//   // News marquee data - these will link to specific positions
//   const newsItems = [
//     {
//       id: 1,
//       text: "🎓 New PhD Position Available - Climate Modeling Research",
//       link: "/positions#phd-climate-modeling"
//     },
//     {
//       id: 2,
//       text: "🔬 Postdoctoral Researcher Opening - Ocean Dynamics Study",
//       link: "/positions#postdoc-ocean-dynamics"
//     },
//     {
//       id: 3,
//       text: "💼 Master's Research Assistant Positions - Apply Now",
//       link: "/positions#masters-assistant"
//     },
//     {
//       id: 4,
//       text: "📢 Summer Internship Program 2025 - Applications Open",
//       link: "/positions#summer-internship"
//     }
//   ];

//   const researchSlides = [
    
//     {
//       image: research2,
//       title: "Wind-wave climate changes and their impacts",
//       description: "Investigating global changes in ocean wind-wave patterns and their profound impacts on coastal erosion, marine ecosystems, and coastal infrastructure worldwide. Our research focuses on understanding climate-driven variations in wave energy and their consequences for coastal vulnerability.",
//       buttonText: "Read Publication1",
//       buttonLink: "https://www.nature.com/articles/s43017-023-00502-0",
//       journal: "Nature Reviews Earth & Environment",
//       year: "2024",
//       researchName: "Wind-Wave Climate Pattern"
//     },
//     {
//       image: research1,
//       title: "Indian Ocean Sea Surface Temperature Modulates the Arctic Oscillation: A Multi‐Model Assessment Using CMIP6",
//       description: "This study examines how sea surface temperature variability across Indian Ocean regions influences the Arctic Oscillation, highlighting a strong wintertime link with the Southern Indian Ocean and notable inter-model variability in CMIP6 simulations.",
//       buttonText: "Read Publication2",
//       buttonLink: "https://www.researchgate.net/publication/399560125_Indian_Ocean_Sea_Surface_Temperature_Modulates_the_Arctic_Oscillation_A_Multi-Model_Assessment_Using_CMIP6",
//       journal: "International Journal of Climatology",
//       year: "2026",
//       researchName: "Arctic Climate Dynamics"
//     },
//     {
//       image: research4,
//       title: "Assessment and future projections of storm surge using CMIP6 models in the Indo-Pacific region",
//       description: "Evaluating current storm surge risks and projecting future coastal flooding scenarios across the Indo-Pacific using state-of-the-art CMIP6 climate models. Our research helps coastal communities prepare for climate change impacts.",
//       buttonText: "Read Publication3",
//       buttonLink: "https://www.sciencedirect.com/science/article/pii/S1463500325000630?via%3Dihub",
//       journal: "Ocean Modelling",
//       year: "2025",
//       researchName: "Coastal Wave Climate Analysis & Prediction"
//     },
//     {
//       image: research7,
//       title: "Bridging the Climate Gap: Multimodel Framework With Explainable Decision-Making for IOD and ENSO Forecasting",
//       description: "Developing an innovative multi-model framework with explainable AI for improved IOD and ENSO predictions. Our approach enhances climate forecasting transparency and reliability for seasonal predictions.",
//       buttonText: "Read Publication4",
//       buttonLink: "https://ieeexplore.ieee.org/document/10742544",
//       journal: "IEEE Transactions on Artificial Intelligence",
//       year: "2025",
//       researchName: "Climate Prediction Using AI/ML"
//     },
//     {
//       image: research6,
//       title: "Extreme wave height response to climate modes and its association with tropical cyclones over the Indo-Pacific Ocean",
//       description: "Assessing climate mode effects on dangerous wave conditions and their correlation with tropical cyclones. Our research enhances coastal risk prediction and marine safety across vulnerable regions.",
//       buttonText: "Read Publication5",
//       buttonLink: "https://www.sciencedirect.com/science/article/pii/S0029801824001264?via%3Dihub",
//       journal: "Ocean Engineering",
//       year: "2024",
//       researchName: "Tropical Cyclone Analysis"
//     },
//     {
//       image: research5,
//       title: "Global future heat stress projections: Regional variations of Humidex changes from high-resolution CMIP6 models",
//       description: "Predicting future heat stress impacts globally with fine-scale regional Humidex analysis using advanced CMIP6 climate projections. Our work identifies vulnerable populations and informs adaptation strategies.",
//       buttonText: "Read Publication6",
//       buttonLink: "https://www.sciencedirect.com/science/article/pii/S0169809525004594?via%3Dihub",
//       journal: "Atmospheric Research",
//       year: "2025",
//       researchName: "Extreme Heat Stress Analysis"
//     },
//   ];

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % researchSlides.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + researchSlides.length) % researchSlides.length);
//   };

//   useEffect(() => {
//     const interval = setInterval(nextSlide, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     // Show subtitle after typing animation completes
//     const timer = setTimeout(() => {
//       setShowSubtitle(true);
//     }, 2000);

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div className="min-h-screen flex flex-col">
//       <div className="flex-1 space-y-6 animate-fade-in">
//         {/* Lab Name Section with Background Image */}
//         <div className="relative rounded-2xl overflow-hidden shadow-2xl h-64 group">
//           <div 
//             className="absolute inset-0 bg-cover bg-center"
//             style={{ backgroundImage: `url(${bg})` }}
//           />
//           <div className="absolute inset-0 bg-black/50" />
//           <div className="relative h-full flex items-center justify-center text-center p-8">
//             <div className="max-w-4xl">
//               <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
//                 Welcome to{" "}
//                 <span className="inline-block">
//                   <TypingAnimation text="CLIMATE" speed={150} />
//                   {/* Cursor blinking effect */}
//                   <span className="ml-1 animate-pulse">|</span>
//                 </span>
//               </h1>
//               <p 
//                 className={`text-xl text-white/90 transition-all duration-500 ${
//                   showSubtitle ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
//                 }`}
//               >
//                 Climate Lab for Intelligent Modeling, Analytics, Technology & Environment
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Featured Publications Slider */}
//         <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[500px] group">
//           {/* Slides */}
//           {researchSlides.map((slide, index) => (
//             <div
//               key={index}
//               className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
//                 index === currentSlide ? 'opacity-100' : 'opacity-0'
//               }`}
//             >
//               {/* Main content container */}
//               <div className="flex h-full">
                
//                 {/* Left side - Text content */}
//                 <div className="w-1/2 bg-gradient-to-r from-background/95 to-background/80 flex items-center">
//                   <div className="max-w-md p-8 h-full flex flex-col justify-center">
//                   <h1 className="text-3xl font-bold mb-4">
//                     {slide.researchName}
//                     </h1>
//                     {slide.title && (
//                       <div className="mb-3 animate-fade-in">
//                         <span className="justify-center    font-bold">
//                           {slide.title}
//                         </span>
//                       </div>
//                     )}
                    
//                     {slide.journal && (
//                       <div className="flex items-center gap-3 mb-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
//                         <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-base font-semibold">

//                           {slide.journal}
//                         </span>
//                         <span className="text-muted-foreground text-sm font-medium">
//                           {slide.year}
//                         </span>
//                       </div>
//                     )}
//                     <p className="text-base text-muted-foreground mb-6 animate-fade-in leading-relaxed flex-grow" style={{ animationDelay: '0.2s' }}>
// //                       {slide.description}
// //                     </p>
//                     {/* <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
//                       <Button asChild size="lg" className="gap-2">
//                         <a 
//                           href={slide.buttonLink} 
//                           target="_blank" 
//                           rel="noopener noreferrer"
//                           className="flex items-center gap-2"
//                         >
//                           {slide.buttonText}
//                           <ArrowRight className="h-4 w-4" />
//                         </a>
//                       </Button>
//                     </div> */}
//                     <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
//                       <Button asChild size="lg" className="gap-2">
//                         {/* FIX 1: Ensured the anchor tag is correct and uses the unique buttonLink */}
//                         <a 
//                           href={slide.buttonLink} 
//                           target="_blank" 
//                           rel="noopener noreferrer"
//                           className="flex items-center gap-2"
//                         >
//                           {slide.buttonText}
//                           <ExternalLink className="h-4 w-4" /> {/* Changed ArrowRight to ExternalLink for external URLs */}
//                         </a>
//                       </Button>
//                     </div>
//                   </div>
//                 </div>
                

//                 {/* Right side - Image */}
//                 <div className="w-1/2 relative">
//                   <div className="w-full h-full bg-gray-100 flex items-center justify-center">
//                     <img
//                       src={slide.image}
//                       alt={slide.title}
//                       className="w-full h-full object-contain"
//                     />
//                   </div>
//                   {/* Publication badge for Nature publication */}
//                   {slide.journal === "Nature Reviews Earth & Environment" && (
//                     <div className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg animate-pulse">
//                       <div className="text-sm font-bold">Nature</div>
//                       <div className="text-xs">Featured Publication</div>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </div>
//           ))}

//           {/* Navigation Arrows */}
//           <button
//             onClick={prevSlide}
//             className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-background/80 hover:bg-background text-foreground p-3 rounded-full transition-all opacity-0 group-hover:opacity-100 shadow-lg z-10"
//             aria-label="Previous slide"
//           >
//             <ChevronLeft className="h-6 w-6" />
//           </button>
//           <button
//             onClick={nextSlide}
//             className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-background/80 hover:bg-background text-foreground p-3 rounded-full transition-all opacity-0 group-hover:opacity-100 shadow-lg z-10"
//             aria-label="Next slide"
//           >
//             <ChevronRight className="h-6 w-6" />
//           </button>

//           {/* Slide Indicators */}
//           <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
//             {researchSlides.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => setCurrentSlide(index)}
//                 className={`w-3 h-3 rounded-full transition-all ${
//                   index === currentSlide 
//                     ? 'bg-primary scale-125' 
//                     : 'bg-primary/50 hover:bg-primary/80'
//                 }`}
//                 aria-label={`Go to slide ${index + 1}`}
//               />
//             ))}
//           </div>

//           {/* Progress Bar */}
//           <div className="absolute bottom-0 left-0 w-full h-1 bg-primary/20 z-10">
//             <div 
//               className="h-full bg-primary transition-all duration-5000 ease-linear"
//               style={{ 
//                 width: `${((currentSlide + 1) / researchSlides.length) * 100}%` 
//               }}
//             />
//           </div>
//         </div>

//         {/* Professor Introduction */}
//         <Card className="hover:shadow-xl transition-all duration-300">
//           <CardContent className="p-8">
//             <div className="grid md:grid-cols-2 gap-8 items-center">
//               <div className="animate-fade-in">
//                 <div className="w-full aspect-[4/3] bg-gray-100 rounded-lg shadow-lg flex items-center justify-center overflow-hidden">
//                   <img
//                     src={professorImage}
//                     alt="Dr Prashant Kumar"
//                     className="w-full h-full object-contain"
//                   />
//                 </div>
//               </div>
//               <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
//                 <h2 className="text-3xl font-bold mb-3">Dr. Prashant Kumar</h2>
//                 <p className="text-xl text-primary mb-4">Associate Professor & COE at NIT Delhi</p>
//                 <p className="text-muted-foreground leading-relaxed mb-6">
//                   Dr. Prashant Kumar is a distinguished climate researcher and Associate Professor at
//                   National Institute of Technology Delhi, currently serving as Controller of Examination.
//                   With over 20 years of research experience, he specializes in climate modeling, ocean-atmosphere
//                   interactions, and polar climate change. Dr. Kumar has authored more than 150 peer-reviewed publications
//                   and led multiple nationally funded research projects. His interdisciplinary work bridges applied mathematics
//                   and environmental science to develop predictive models for climate variability and coastal dynamics. Passionate
//                   about sustainable development, he continues to mentor researchers and contribute to national-level climate resilience strategies.
//                 </p>
                
//                 {/* Social Media Links */}
//                 <div className="flex gap-4">
//                   <Button asChild variant="outline" size="sm" className="gap-2">
//                     <Link to="https://nitdelhi.irins.org/profile/62655" target="_blank">
//                       <Globe className="h-4 w-4" />
//                       IRINS Profile
//                     </Link>
//                   </Button>
//                   <Button asChild variant="outline" size="sm" className="gap-2">
//                     <Link to="https://www.researchgate.net/profile/Prashant-Kumar-95" target="_blank">
//                       <Globe className="h-4 w-4" />
//                       ResearchGate
//                     </Link>
//                   </Button>
//                   <Button asChild variant="outline" size="sm" className="gap-2">
//                     <Link to="https://www.linkedin.com/in/aprashant-kumar-421790111/" target="_blank">
//                       <Linkedin className="h-4 w-4" />
//                       LinkedIn
//                     </Link>
//                   </Button>
//                 </div>
//               </div>
//             </div>
//           </CardContent>
//         </Card>

//         {/* Quick Links */}
//         <div className="grid md:grid-cols-3 gap-6">
//           <Card className="hover:shadow-xl transition-all duration-300 hover-scale">
//             <CardContent className="p-6">
//               <Microscope className="h-12 w-12 text-primary mb-4" />
//               <h3 className="text-2xl font-bold mb-2">Our Research</h3>
//               <p className="text-muted-foreground mb-4">
//                 Explore cutting-edge climate research projects and discoveries shaping our understanding of Earth's climate system.
//               </p>
//               <Button asChild variant="outline" className="w-full gap-2">
//                 <Link to="/research">
//                   View Research
//                   <ArrowRight className="h-4 w-4" />
//                 </Link>
//               </Button>
//             </CardContent>
//           </Card>

//           <Card className="hover:shadow-xl transition-all duration-300 hover-scale">
//             <CardContent className="p-6">
//               <BookOpen className="h-12 w-12 text-primary mb-4" />
//               <h3 className="text-2xl font-bold mb-2">Publications</h3>
//               <p className="text-muted-foreground mb-4">
//                 Access our extensive collection of peer-reviewed publications in leading climate science journals.
//               </p>
//               <Button asChild variant="outline" className="w-full gap-2">
//                 <Link to="/publications">
//                   View Publications
//                   <ArrowRight className="h-4 w-4" />
//                 </Link>
//               </Button>
//             </CardContent>
//           </Card>

//           <Card className="hover:shadow-xl transition-all duration-300 hover-scale">
//             <CardContent className="p-6">
//               <Users className="h-12 w-12 text-primary mb-4" />
//               <h3 className="text-2xl font-bold mb-2">Our Team</h3>
//               <p className="text-muted-foreground mb-4">
//                 Meet our talented team of researchers advancing climate science through collaboration and innovation.
//               </p>
//               <Button asChild variant="outline" className="w-full gap-2">
//                 <Link to="/team">
//                   Meet the Team
//                   <ArrowRight className="h-4 w-4" />
//                 </Link>
//               </Button>
//             </CardContent>
//           </Card>
//         </div>
//       </div>

//       {/* Footer Section */}
//       {false && ( //this whole footer is disabled for now
//   <footer className="bg-background border-t mt-16">
//   <div className="max-w-7xl mx-auto px-6 py-10">
//     <div className="grid lg:grid-cols-5 md:grid-cols-3 gap-8 mb-8">
//       {/* Brand */}
//       <div className="lg:col-span-2 space-y-4">
//         <div className="flex items-center gap-3 mb-4">
//           <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
//             <span className="text-white font-bold text-lg">C</span>
//           </div>
//           <div>
//             <h3 className="font-bold text-xl text-foreground">CLIMATE LAB</h3>
//             <p className="text-sm text-muted-foreground">
//               National Institute of Technology Delhi
//             </p>
//           </div>
//         </div>
//         <p className="text-sm text-muted-foreground leading-relaxed">
//           Dedicated to advancing climate science through intelligent modeling, 
//           analytics, and technology for environmental sustainability.
//         </p>
//       </div>

//       {/* Research */}
//       <div className="space-y-3">
//         <h4 className="font-semibold text-foreground text-sm uppercase tracking-wide">Research</h4>
//         <div className="space-y-2 text-sm text-muted-foreground">
//           <div>Climate Modeling</div>
//           <div>Ocean Dynamics</div>
//           <div>Coastal Engineering</div>
//         </div>
//       </div>

//       {/* Links */}
//       <div className="space-y-3">
//         <h4 className="font-semibold text-foreground text-sm uppercase tracking-wide">Links</h4>
//         <div className="space-y-2 text-sm text-muted-foreground">
//           <Link to="/publications" className="block hover:text-foreground">Publications</Link>
//           <Link to="/team" className="block hover:text-foreground">Team</Link>
//           <Link to="/contact" className="block hover:text-foreground">Contact</Link>
//         </div>
//       </div>

//       {/* Connect */}
//         <div className="space-y-3">
//         <h4 className="font-semibold text-foreground text-sm uppercase tracking-wide text-center">Connect</h4>
//         <div className="space-y-2 text-center">
//         <Button asChild variant="outline" size="sm" className="w-full">
//         <Link to="/contact">Contact Lab</Link>
//         </Button>
//         <Button asChild variant="outline" size="sm" className="w-full">
//         <Link to="https://nitdelhi.ac.in" target="_blank">NITD Website</Link>
//         </Button>
//         </div>
//         </div>
//     </div>

//     {/* Bottom Bar */}
//     <div className="border-t pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
//       <div className="text-sm text-muted-foreground">
//         © {new Date().getFullYear()} CLIMATE Research Laboratory
//       </div>
//       <div className="flex items-center gap-4">
//         <span className="text-sm text-muted-foreground">Committed to research excellence</span>
//         <div className="w-1 h-1 bg-border rounded-full"></div>
//         <div className="flex items-center gap-3">
//           <button 
//             onClick={handleTeamNavigation}
//             className="text-primary hover:underline cursor-pointer text-sm font-medium"
//           >
//             Developed by Viaan Sharma
//           </button>
//           <div className="flex gap-2">
//             <Button asChild variant="ghost" size="sm" className="h-7 w-7 p-0">
//               <Link to="https://www.linkedin.com/in/viaan-sharma-9a6368201/" target="_blank" title="LinkedIn">
//                 <Linkedin className="h-3.5 w-3.5" />
//               </Link>
//             </Button>
//             <Button asChild variant="ghost" size="sm" className="h-7 w-7 p-0">
//               <Link to="https://github.com/viaansharma" target="_blank" title="GitHub">
//                 <Github className="h-3.5 w-3.5" />
//               </Link>
//             </Button>
//             <Button asChild variant="ghost" size="sm" className="h-7 w-7 p-0">
//               <Link to="mailto:viaansharma7@gmail.com" title="Email">
//                 <Mail className="h-3.5 w-3.5" />
//               </Link>
//             </Button>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </footer>
// )}

//     </div>
//   );
// };

// export default Home;

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Microscope, BookOpen, Users, ChevronLeft, ChevronRight, Megaphone, Globe, Linkedin, Mail, Heart, ExternalLink, Github } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import bg from "@/assets/bg2.jpg";
import { MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

import professorImage from "@/assets/professor.jpg";
// --- START IMAGE URL FIX ---
// Replacing local file imports with placeholder URLs to resolve persistent compilation errors.
import research1 from "@/assets/research-1.jpeg";
import research2 from "@/assets/research-2.jpeg";
import research4 from "@/assets/research-4.jpeg";
import research5 from "@/assets/research-5.jpeg";
import research6 from "@/assets/research-6.jpeg";
import research7 from "@/assets/research-7.jpeg";
import research8 from "@/assets/research-8.jpeg";
// const labHero = "https://placehold.co/1200x300/374151/ffffff?text=Lab+Hero+Image"; 
// const professorImage = "https://placehold.co/400x300/1e40af/ffffff?text=Dr+Kumar";
// const research1 = "https://placehold.co/800x400/059669/ffffff?text=Arctic+Sea+Ice+Study";
// const research2 = "https://placehold.co/800x400/06b6d4/ffffff?text=Wind-Wave+Climate";
// const research4 = "https://placehold.co/800x400/9333ea/ffffff?text=Storm+Surge+Projection";
// const research5 = "https://placehold.co/800x400/c026d3/ffffff?text=Heat+Stress+Analysis";
// const research6 = "https://placehold.co/800x400/db2777/ffffff?text=Tropical+Cyclones";
// const research7 = "https://placehold.co/800x400/f59e0b/ffffff?text=AI+Climate+Forecasting";
 
// --- END IMAGE URL FIX ---

// Typing Animation Component
const TypingAnimation = ({ text, speed = 100 }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timer);
    }
  }, [currentIndex, text, speed]);

  return <span>{displayText}</span>;
};

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const navigate = useNavigate();

  // Function to handle navigation to team page with scroll to top
  const handleTeamNavigation = (e) => {
    e.preventDefault();
    // Navigate to team page
    navigate('/team');
    // Scroll to top after navigation
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  // News marquee data - these will link to specific positions
  const newsItems = [
    {
      id: 4,
      text: "📢 Summer Internship Program 2026 - Applications Open",
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7460984933616979968/"
    },
    {
      id: 1,
      text: "🎓 New PhD Position Available ",
      link: "/positions#phd-climate-modeling"
    },
    {
      id: 2,
      text: "🔬 Postdoctoral Researcher Opening ",
      link: "/positions#postdoc-ocean-dynamics"
    },
    {
      id: 3,
      text: "💼 Master's Research Assistant Positions - Apply Now",
      link: "/positions#masters-assistant"
    },
  ];

  const researchSlides = [
    
    {
      image: research2,
      title: "Predicting extreme storm surge along the Indian coastline using a physics-guided machine learning ensemble",
      description: "A physics-guided ML framework was developed to improve storm surge forecasting along India’s coastline, outperforming traditional models with higher accuracy and reliability for extreme events. By integrating physical constraints and ensemble learning, the model remains interpretable and confirms key dynamics like the inverse barometer effect.",
      buttonText: "Read Publication 1",
      buttonLink: "https://www.sciencedirect.com/science/article/pii/S0029801826012552",
      journal: "Ocean Engineering",
      year: "2026",
      researchName: "Coastal Wave Climate Analysis & Prediction"
    },
    {
      image: research1,
      title: "Indian Ocean Sea Surface Temperature Modulates the Arctic Oscillation: A Multi‐Model Assessment Using CMIP6",
      description: "This study examines how sea surface temperature variability across Indian Ocean regions influences the Arctic Oscillation, highlighting a strong wintertime link with the Southern Indian Ocean and notable inter-model variability in CMIP6 simulations.",
      buttonText: "Read Publication 2",
      buttonLink: "https://rmets.onlinelibrary.wiley.com/doi/10.1002/joc.70259?utm_medium=article",
      journal: "International Journal of Climatology",
      year: "2026",
      researchName: "Arctic Climate Dynamics"
    },
    {
      image: research4,
      title: "Wind-wave climate changes and their impacts",
      description: "Investigating global changes in ocean wind-wave patterns and their profound impacts on coastal erosion, marine ecosystems, and coastal infrastructure worldwide. Our research focuses on understanding climate-driven variations in wave energy and their consequences for coastal vulnerability.",
      buttonText: "Read Publication 3",
      buttonLink: "https://www.nature.com/articles/s43017-023-00502-0",
      journal: "Nature Reviews Earth & Environment",
      year: "2024",
      researchName: "Wind-Wave Climate Pattern" 
    },
    {
      image: research7,
      title: "Bridging the Climate Gap: Multimodel Framework With Explainable Decision-Making for IOD and ENSO Forecasting",
      description: "Developing an innovative multi-model framework with explainable AI for improved IOD and ENSO predictions. Our approach enhances climate forecasting transparency and reliability for seasonal predictions.",
      buttonText: "Read Publication 4",
      buttonLink: "https://ieeexplore.ieee.org/document/10742544",
      journal: "IEEE Transactions on Artificial Intelligence",
      year: "2025",
      researchName: "Climate Prediction Using AI/ML"
    },
    {
      image: research6,
      title: "Assessment of projected changes in mean and extreme wave power across the Indian coastal sectors under high-emission climate scenarios",
      description: "Future climate scenarios indicate shifting and more variable wave power along India’s coasts, with select locations like Gujarat and island regions retaining strong potential for reliable wave energy despite overall declines.",
      buttonText: "Read Publication 5",
      buttonLink: "https://www.sciencedirect.com/science/article/pii/S1463500325000952",
      journal: "Ocean Modelling",
      year: "2025",
      researchName: "Coastal Wave Climate Analysis & Prediction"
    },
    {
      image: research5,
      title: "Global future heat stress projections: Regional variations of Humidex changes from high-resolution CMIP6 models",
      description: "Predicting future heat stress impacts globally with fine-scale regional Humidex analysis using advanced CMIP6 climate projections. Our work identifies vulnerable populations and informs adaptation strategies.",
      buttonText: "Read Publication 6",
      buttonLink: "https://www.sciencedirect.com/science/article/pii/S0169809525004594",
      journal: "Atmospheric Research",
      year: "2025",
      researchName: "Extreme Heat Stress Analysis"
    },
    {
      image: research8,
      title: "Assessing wave energy spectra at major Indian ports using the dual reciprocity boundary element technique",
      description: "This study investigates seasonal spectral wave energy variability across major Indian ports using advanced numerical wave modeling to support coastal energy planning and marine sustainability.",
      buttonText: "Read Publication 7",
      buttonLink: "https://www.sciencedirect.com/science/article/pii/S0029801825022073?via%3Dihub",
      journal: "Ocean Engineering",
      year: "2025",
      researchName: "Water Wave Resonance"
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % researchSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + researchSlides.length) % researchSlides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Show subtitle after typing animation completes
    const timer = setTimeout(() => {
      setShowSubtitle(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 space-y-6 animate-fade-in">
        {/* Lab Name Section with Background Image */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl min-h-[300px] md:min-h-[340px] lg:min-h-[370px] group">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${bg})` }}
          />
          <div className="absolute inset-0 bg-black/50" />

          <div className="relative h-full flex items-center justify-center text-center px-6 py-8 md:py-10">
            <div className="w-full max-w-6xl flex flex-col items-center">
              <img
                src={logo}
                alt="CLIMATE Lab Logo"
                className="h-12 w-12 md:h-16 md:w-16 mb-4 rounded-full bg-white p-1 shadow-lg animate-fade-in"
              />

              <h1
                className="w-full text-white font-bold tracking-tight
                          leading-[1.0]
                          text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
              >
                <span className="block mb-1">
                  Welcome to
                </span>

                <span className="block whitespace-nowrap">
                  <TypingAnimation
                    text="CLIMATE ENGINEERING LAB"
                    speed={150}
                  />
                  <span className="ml-1 animate-pulse">|</span>
                </span>
              </h1>

              <p
                className={`mt-4 text-sm sm:text-base md:text-lg lg:text-xl
                text-white/90 transition-all duration-500 max-w-5xl
                ${showSubtitle ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              >
                Climate Lab for Intelligent Modeling, Analytics, Technology & Environment
              </p>
            </div>
          </div>
        </div>
        

        <div className="w-full border-y border-primary/20 bg-gradient-to-r from-primary/5 via-background to-primary/5">
  <div className="max-w-screen-2xl mx-auto">
    <div className="relative p-4">
      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-primary via-primary/80 to-primary"></div>
      
      <div className="flex items-center gap-6 pl-4">
        <div className="flex items-center gap-3 shrink-0">
          <div className="relative bg-primary/10 p-2.5 rounded-lg">
            <Megaphone className="h-4.5 w-4.5 text-primary" />
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
          </div>
          <div>
            <span className="text-sm font-bold text-primary block">NEWS & UPDATES</span>
            <span className="text-xs text-muted-foreground">Latest announcements</span>
          </div>
        </div>
        
        <div className="flex-1 relative overflow-hidden h-7">
          <div className="animate-marquee whitespace-nowrap flex items-center h-full">
            {newsItems.map((item, index) => (
              <Link
                key={item.id}
                to={item.link}
                className="inline-flex items-center mx-8 text-sm font-medium text-foreground hover:text-primary transition-colors hover:underline"
              >
                <span className="mr-2 text-primary">›</span>
                {item.text}
              </Link>
            ))}
          </div>
        </div>
        
        <Button asChild variant="outline" size="sm" className="h-8 px-4 text-sm shrink-0 border-primary/30">
          <Link to="/positions" className="flex items-center gap-2">
            View All
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </Button>
      </div>
    </div>
  </div>
</div>
        {/* Featured Publications Slider */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[500px] group">
          {/* Slides */}
          {researchSlides.map((slide, index) => (
            <div
              key={index}
              // FIX 1: Added z-index and pointer-events-none to prevent ghost clicks on hidden slides
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide 
                  ? 'opacity-100 z-20' 
                  : 'opacity-0 z-0 pointer-events-none' 
              }`}
            >
              {/* Main content container */}
              <div className="flex h-full">
                
                {/* Left side - Text content */}
                <div className="w-1/2 bg-gradient-to-r from-background/95 to-background/80 flex items-center">
                  <div className="max-w-md p-8 h-full flex flex-col justify-center">
                  <h1 className="text-3xl font-bold mb-4">
                    {slide.researchName}
                    </h1>
                    {slide.title && (
                      <div className="mb-3 animate-fade-in">
                        <span className="justify-center    font-bold">
                          {slide.title}
                        </span>
                      </div>
                    )}
                    
                    {slide.journal && (
                      <div className="flex items-center gap-3 mb-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                        <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-base font-semibold">

                          {slide.journal}
                        </span>
                        <span className="text-muted-foreground text-sm font-medium">
                          {slide.year}
                        </span>
                      </div>
                    )}
                    <p className="text-base text-muted-foreground mb-6 animate-fade-in leading-relaxed flex-grow" style={{ animationDelay: '0.2s' }}>
                       {slide.description}
                     </p>
                    <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
                      <Button asChild size="lg" className="gap-2">
                        <a 
                          href={slide.buttonLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          {slide.buttonText}
                          <ArrowRight className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
                

                {/* Right side - Image */}
                <div className="w-1/2 relative">
                  <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  {/* Publication badge for Nature publication */}
                  {slide.journal === "Nature Reviews Earth & Environment" && (
                    <div className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg animate-pulse">
                      <div className="text-sm font-bold">Nature</div>
                      <div className="text-xs">Featured Publication</div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            // Z-index adjustment for clickability
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-background/80 hover:bg-background text-foreground p-3 rounded-full transition-all opacity-0 group-hover:opacity-100 shadow-lg z-30" 
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextSlide}
            // Z-index adjustment for clickability
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-background/80 hover:bg-background text-foreground p-3 rounded-full transition-all opacity-0 group-hover:opacity-100 shadow-lg z-30"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Slide Indicators */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-30">
            {researchSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide 
                    ? 'bg-primary scale-125' 
                    : 'bg-primary/50 hover:bg-primary/80'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Progress Bar */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-primary/20 z-30">
            <div 
              className="h-full bg-primary transition-all duration-5000 ease-linear"
              style={{ 
                width: `${((currentSlide + 1) / researchSlides.length) * 100}%` 
              }}
            />
          </div>
        </div>

        {/* Professor Introduction */}
        <Card className="hover:shadow-xl transition-all duration-300">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="animate-fade-in">
                <div className="w-full aspect-[4/3] bg-gray-100 rounded-lg shadow-lg flex items-center justify-center overflow-hidden">
                  <img
                    src={professorImage}
                    alt="Dr Prashant Kumar"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <h2 className="text-3xl font-bold mb-3">Dr. Prashant Kumar</h2>
                <p className="text-xl text-primary mb-4">Associate Professor & COE at NIT Delhi</p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Dr. Prashant Kumar is a distinguished climate researcher and Associate Professor at
                  National Institute of Technology Delhi, currently serving as Controller of Examination.
                  With over 20 years of research experience, he specializes in climate modeling, ocean-atmosphere
                  interactions, and polar climate change. Dr. Kumar has authored more than 150 peer-reviewed publications
                  and led multiple nationally funded research projects. His interdisciplinary work bridges applied mathematics
                  and environmental science to develop predictive models for climate variability and coastal dynamics. Passionate
                  about sustainable development, he continues to mentor researchers and contribute to national-level climate resilience strategies.
                </p>
                
                {/* Social Media Links */}
                <div className="flex gap-4">
                  <Button asChild variant="outline" size="sm" className="gap-2">
                    <Link to="https://nitdelhi.irins.org/profile/62655" target="_blank">
                      <Globe className="h-4 w-4" />
                      IRINS Profile
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="sm" className="gap-2">
                    <Link to="https://www.researchgate.net/profile/Prashant-Kumar-95" target="_blank">
                      <Globe className="h-4 w-4" />
                      ResearchGate
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="sm" className="gap-2">
                    <Link to="https://www.linkedin.com/in/aprashant-kumar-421790111/" target="_blank">
                      <Linkedin className="h-4 w-4" />
                      LinkedIn
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Links */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="hover:shadow-xl transition-all duration-300 hover-scale">
            <CardContent className="p-6">
              <Microscope className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-2">Our Research</h3>
              <p className="text-muted-foreground mb-4">
                Explore cutting-edge climate research projects and discoveries shaping our understanding of Earth's climate system.
              </p>
              <Button asChild variant="outline" className="w-full gap-2">
                <Link to="/research">
                  View Research
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 hover-scale">
            <CardContent className="p-6">
              <BookOpen className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-2">Publications</h3>
              <p className="text-muted-foreground mb-4">
                Access our extensive collection of peer-reviewed publications in leading climate science journals.
              </p>
              <Button asChild variant="outline" className="w-full gap-2">
                <Link to="/publications">
                  View Publications
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 hover-scale">
            <CardContent className="p-6">
              <Users className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-2">Our Team</h3>
              <p className="text-muted-foreground mb-4">
                Meet our talented team of researchers advancing climate science through collaboration and innovation.
              </p>
              <Button asChild variant="outline" className="w-full gap-2">
                <Link to="/team">
                  Meet the Team
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer Section */}
      {false && ( //this whole footer is disabled for now
  <footer className="bg-background border-t mt-16">
  <div className="max-w-7xl mx-auto px-6 py-10">
    <div className="grid lg:grid-cols-5 md:grid-cols-3 gap-8 mb-8">
      {/* Brand */}
      <div className="lg:col-span-2 space-y-4">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">C</span>
          </div>
          <div>
            <h3 className="font-bold text-xl text-foreground">CLIMATE LAB</h3>
            <p className="text-sm text-muted-foreground">
              National Institute of Technology Delhi
            </p>
          </div>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Dedicated to advancing climate science through intelligent modeling, 
          analytics, and technology for environmental sustainability.
        </p>
      </div>

      {/* Research */}
      <div className="space-y-3">
        <h4 className="font-semibold text-foreground text-sm uppercase tracking-wide">Research</h4>
        <div className="space-y-2 text-sm text-muted-foreground">
          <div>Climate Modeling</div>
          <div>Ocean Dynamics</div>
          <div>Coastal Engineering</div>
        </div>
      </div>

      {/* Links */}
      <div className="space-y-3">
        <h4 className="font-semibold text-foreground text-sm uppercase tracking-wide">Links</h4>
        <div className="space-y-2 text-sm text-muted-foreground">
          <Link to="/publications" className="block hover:text-foreground">Publications</Link>
          <Link to="/team" className="block hover:text-foreground">Team</Link>
          <Link to="/contact" className="block hover:text-foreground">Contact</Link>
        </div>
      </div>

      {/* Connect */}
        <div className="space-y-3">
        <h4 className="font-semibold text-foreground text-sm uppercase tracking-wide text-center">Connect</h4>
        <div className="space-y-2 text-center">
        <Button asChild variant="outline" size="sm" className="w-full">
        <Link to="/contact">Contact Lab</Link>
        </Button>
        <Button asChild variant="outline" size="sm" className="w-full">
        <Link to="https://nitdelhi.ac.in" target="_blank">NITD Website</Link>
        </Button>
        </div>
        </div>
    </div>

    {/* Bottom Bar */}
    <div className="border-t pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
      <div className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} CLIMATE Research Laboratory
      </div>
      <div className="flex items-center gap-4">
        <span className="text-sm text-muted-foreground">Committed to research excellence</span>
        <div className="w-1 h-1 bg-border rounded-full"></div>
        <div className="flex items-center gap-3">
          <button 
            onClick={handleTeamNavigation}
            className="text-primary hover:underline cursor-pointer text-sm font-medium"
          >
            Developed by Viaan Sharma
          </button>
          <div className="flex gap-2">
            <Button asChild variant="ghost" size="sm" className="h-7 w-7 p-0">
              <Link to="https://www.linkedin.com/in/viaan-sharma-9a6368201/" target="_blank" title="LinkedIn">
                <Linkedin className="h-3.5 w-3.5" />
              </Link>
            </Button>
            <Button asChild variant="ghost" size="sm" className="h-7 w-7 p-0">
              <Link to="https://github.com/viaansharma" target="_blank" title="GitHub">
                <Github className="h-3.5 w-3.5" />
              </Link>
            </Button>
            <Button asChild variant="ghost" size="sm" className="h-7 w-7 p-0">
              <Link to="mailto:viaansharma7@gmail.com" title="Email">
                <Mail className="h-3.5 w-3.5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>
)}

    </div>
  );
};

export default Home;