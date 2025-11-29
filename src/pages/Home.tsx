// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { ArrowRight, Microscope, BookOpen, Users, ChevronLeft, ChevronRight, Megaphone } from "lucide-react";
// import { Link } from "react-router-dom";
// import { useState, useEffect } from "react";
// import labHero from "@/assets/lab-hero.jpg";
// import professorImage from "@/assets/professor.jpg";
// import research1 from "@/assets/research-1.jpeg";
// import research2 from "@/assets/research-2.jpeg";
// import research4 from "@/assets/research-4.jpeg";
// import research5 from "@/assets/research-5.jpeg";
// import research6 from "@/assets/research-6.jpeg";
// import research7 from "@/assets/research-7.jpeg";

// const Home = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

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
//     // {
//     //   image: labHero,
//     //   title: "CLIMATE INTELLIGENCE AND SIMULATION RESEARCH LAB",
//     //   description: "Advancing climate science through innovative research, cutting-edge technology, and collaborative solutions for a sustainable future.",
//     //   buttonText: "Learn More",
//     //   buttonLink: "/about"
//     // },
//     {
//       image: research2,
//       title: "Wind-wave climate changes and their impacts",
//       description: "Investigating global changes in ocean wind-wave patterns and their profound impacts on coastal erosion, marine ecosystems, and coastal infrastructure worldwide.",
//       buttonText: "Read Publication",
//       buttonLink: "https://doi.org/10.1038/s43017-023-00502-0",
//       journal: "Nature Reviews Earth & Environment",
//       year: "2024"
//     },
//     {
//       image: research1,
//       title: "Assessing the Impact of Climate Modes on Extreme Arctic Sea Ice",
//       description: "Investigating how major climate patterns like ENSO and NAO influence extreme Arctic sea ice events using comprehensive reanalysis datasets.",
//       buttonText: "Read Publication",
//       buttonLink: "https://doi.org/10.1002/joc.70121",
//       journal: "International Journal of Climatology",
//       year: "2025"
//     },
//     {
//       image: research4,
//       title: "Storm surge assessment using CMIP6 models",
//       description: "Evaluating current storm surge risks and projecting future coastal flooding scenarios across the Indo-Pacific using CMIP6 climate models.",
//       buttonText: "Read Publication",
//       buttonLink: "https://doi.org/10.1016/j.ocemod.2025.102560",
//       journal: "Ocean Modelling",
//       year: "2025"
//     },
//     {
//       image: research7,
//       title: "Bridging the Climate Gap for IOD and ENSO Forecasting",
//       description: "Developing an innovative multi-model framework with explainable AI for improved IOD and ENSO predictions.",
//       buttonText: "Read Publication",
//       buttonLink: "https://doi.org/10.1109/TAI.2024.3489535",
//       journal: "IEEE Transactions on Artificial Intelligence",
//       year: "2025"
//     },
//     {
//       image: research6,
//       title: "Extreme wave height response to climate modes",
//       description: "Assessing climate mode effects on dangerous wave conditions and their correlation with tropical cyclones.",
//       buttonText: "Read Publication",
//       buttonLink: "https://doi.org/10.1016/j.oceaneng.2024.116789",
//       journal: "Ocean Engineering",
//       year: "2024"
//     },
//     {
//       image: research5,
//       title: "Global future heat stress projections",
//       description: "Predicting future heat stress impacts globally with regional Humidex analysis using advanced CMIP6 models.",
//       buttonText: "Read Publication",
//       buttonLink: "https://doi.org/10.1016/j.atmosres.2025.108367",
//       journal: "Atmospheric Research",
//       year: "2025"
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

//   return (
//     <div className="space-y-6 animate-fade-in">
//       {/* News Marquee Section */}
//       <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 max-w-4xl mx-auto">
//         <div className="flex items-center gap-4 mb-3">
//           <div className="flex items-center gap-2 bg-primary text-primary-foreground px-3 py-1 rounded-full">
//             <Megaphone className="h-4 w-4" />
//             <span className="text-sm font-semibold">NEWS & UPDATES</span>
//           </div>
//           <Button asChild variant="outline" size="sm" className="ml-auto">
//             <Link to="/positions">View All Positions</Link>
//           </Button>
//         </div>
        
//         <div className="relative overflow-hidden">
//           <div className="animate-marquee whitespace-nowrap">
//             {newsItems.map((item, index) => (
//               <Link
//                 key={item.id}
//                 to={item.link}
//                 className="inline-block mx-8 text-lg font-medium text-primary hover:text-primary/80 hover:underline transition-colors"
//               >
//                 {item.text}
//               </Link>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Hero Section - Image Slider with Left Text & Right Image */}
//       <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[500px] group">
//         {/* Slides */}
//         {researchSlides.map((slide, index) => (
//           <div
//             key={index}
//             className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
//               index === currentSlide ? 'opacity-100' : 'opacity-0'
//             }`}
//           >
//             {/* Main content container */}
//             <div className="flex h-full">
//               {/* Left side - Text content */}
//               <div className="w-1/2 bg-gradient-to-r from-background/95 to-background/80 flex items-center">
//                 <div className="max-w-md p-8">
//                   <h1 className="text-2xl font-bold mb-4 animate-fade-in leading-tight line-clamp-3">
//                     {slide.title}
//                   </h1>
//                   {slide.journal && (
//                     <div className="flex items-center gap-3 mb-3 animate-fade-in" style={{ animationDelay: '0.1s' }}>
//                       <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold line-clamp-1">
//                         {slide.journal}
//                       </span>
//                       <span className="text-muted-foreground text-sm font-medium">
//                         {slide.year}
//                       </span>
//                     </div>
//                   )}
//                   <p className="text-base text-muted-foreground mb-6 animate-fade-in leading-relaxed line-clamp-3" style={{ animationDelay: '0.2s' }}>
//                     {slide.description}
//                   </p>
//                   <div className="flex gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
//                     <Button asChild size="lg" className="gap-2">
//                       <Link 
//                         to={slide.buttonLink} 
//                         target={slide.buttonLink.includes('http') ? '_blank' : '_self'}
//                       >
//                         {slide.buttonText}
//                         <ArrowRight className="h-4 w-4" />
//                       </Link>
//                     </Button>
//                   </div>
//                 </div>
//               </div>

//               {/* Right side - Image */}
//               <div className="w-1/2 relative">
//                 <div className="w-full h-full bg-gray-100 flex items-center justify-center">
//                   <img
//                     src={slide.image}
//                     alt={slide.title}
//                     className="w-full h-full object-contain"
//                   />
//                 </div>
//                 {/* Publication badge for Nature publication */}
//                 {slide.journal === "Nature Reviews Earth & Environment" && (
//                   <div className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg animate-pulse">
//                     <div className="text-sm font-bold">Nature</div>
//                     <div className="text-xs">Featured Publication</div>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         ))}

//         {/* Navigation Arrows */}
//         <button
//           onClick={prevSlide}
//           className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-background/80 hover:bg-background text-foreground p-3 rounded-full transition-all opacity-0 group-hover:opacity-100 shadow-lg z-10"
//           aria-label="Previous slide"
//         >
//           <ChevronLeft className="h-6 w-6" />
//         </button>
//         <button
//           onClick={nextSlide}
//           className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-background/80 hover:bg-background text-foreground p-3 rounded-full transition-all opacity-0 group-hover:opacity-100 shadow-lg z-10"
//           aria-label="Next slide"
//         >
//           <ChevronRight className="h-6 w-6" />
//         </button>

//         {/* Slide Indicators */}
//         <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
//           {researchSlides.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrentSlide(index)}
//               className={`w-3 h-3 rounded-full transition-all ${
//                 index === currentSlide 
//                   ? 'bg-primary scale-125' 
//                   : 'bg-primary/50 hover:bg-primary/80'
//               }`}
//               aria-label={`Go to slide ${index + 1}`}
//             />
//           ))}
//         </div>

//         {/* Progress Bar */}
//         <div className="absolute bottom-0 left-0 w-full h-1 bg-primary/20 z-10">
//           <div 
//             className="h-full bg-primary transition-all duration-5000 ease-linear"
//             style={{ 
//               width: `${((currentSlide + 1) / researchSlides.length) * 100}%` 
//             }}
//           />
//         </div>
//       </div>

//       {/* Professor Introduction */}
//       <Card className="hover:shadow-xl transition-all duration-300">
//         <CardContent className="p-8">
//           <div className="grid md:grid-cols-2 gap-8 items-center">
//             <div className="animate-fade-in">
//               <div className="w-full aspect-[4/3] bg-gray-100 rounded-lg shadow-lg flex items-center justify-center overflow-hidden">
//                 <img
//                   src={professorImage}
//                   alt="Dr Prashant Kumar"
//                   className="w-full h-full object-contain"
//                 />
//               </div>
//             </div>
//             <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
//               <h2 className="text-3xl font-bold mb-3">Dr. Prashant Kumar</h2>
//               <p className="text-xl text-primary mb-4">Associate Professor & COE at NIT Delhi</p>
//               <p className="text-muted-foreground leading-relaxed mb-4">
//                 Dr. Prashant Kumar is a distinguished climate researcher and Associate Professor at
//                 National Institute of Technology Delhi, currently serving as Controller of Examination.
//                 With over 20 years of research experience, he specializes in climate modeling, ocean-atmosphere
//                 interactions, and polar climate change. Dr. Kumar has authored more than 150 peer-reviewed publications
//                 and led multiple nationally funded research projects. His interdisciplinary work bridges applied mathematics
//                 and environmental science to develop predictive models for climate variability and coastal dynamics. Passionate
//                 about sustainable development, he continues to mentor researchers and contribute to national-level climate resilience strategies.
//               </p>
//             </div>
//           </div>
//         </CardContent>
//       </Card>

//       {/* Quick Links */}
//       <div className="grid md:grid-cols-3 gap-6">
//         <Card className="hover:shadow-xl transition-all duration-300 hover-scale">
//           <CardContent className="p-6">
//             <Microscope className="h-12 w-12 text-primary mb-4" />
//             <h3 className="text-2xl font-bold mb-2">Our Research</h3>
//             <p className="text-muted-foreground mb-4">
//               Explore cutting-edge climate research projects and discoveries shaping our understanding of Earth's climate system.
//             </p>
//             <Button asChild variant="outline" className="w-full gap-2">
//               <Link to="/research">
//                 View Research
//                 <ArrowRight className="h-4 w-4" />
//               </Link>
//             </Button>
//           </CardContent>
//         </Card>

//         <Card className="hover:shadow-xl transition-all duration-300 hover-scale">
//           <CardContent className="p-6">
//             <BookOpen className="h-12 w-12 text-primary mb-4" />
//             <h3 className="text-2xl font-bold mb-2">Publications</h3>
//             <p className="text-muted-foreground mb-4">
//               Access our extensive collection of peer-reviewed publications in leading climate science journals.
//             </p>
//             <Button asChild variant="outline" className="w-full gap-2">
//               <Link to="/publications">
//                 View Publications
//                 <ArrowRight className="h-4 w-4" />
//               </Link>
//             </Button>
//           </CardContent>
//         </Card>

//         <Card className="hover:shadow-xl transition-all duration-300 hover-scale">
//           <CardContent className="p-6">
//             <Users className="h-12 w-12 text-primary mb-4" />
//             <h3 className="text-2xl font-bold mb-2">Our Team</h3>
//             <p className="text-muted-foreground mb-4">
//               Meet our talented team of researchers advancing climate science through collaboration and innovation.
//             </p>
//             <Button asChild variant="outline" className="w-full gap-2">
//               <Link to="/team">
//                 Meet the Team
//                 <ArrowRight className="h-4 w-4" />
//               </Link>
//             </Button>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// };

// export default Home;


// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { ArrowRight, Microscope, BookOpen, Users, ChevronLeft, ChevronRight, Megaphone } from "lucide-react";
// import { Link } from "react-router-dom";
// import { useState, useEffect } from "react";
// import labHero from "@/assets/lab-hero.jpg";
// import professorImage from "@/assets/professor.jpg";
// import research1 from "@/assets/research-1.jpeg";
// import research2 from "@/assets/research-2.jpeg";
// import research4 from "@/assets/research-4.jpeg";
// import research5 from "@/assets/research-5.jpeg";
// import research6 from "@/assets/research-6.jpeg";
// import research7 from "@/assets/research-7.jpeg";

// const Home = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

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

//   // Research Areas
//   const researchAreas = [
//     {
//       title: "Wind-Wave Climate",
//       description: "Studying global changes in ocean wind-wave patterns and their impacts on coastal systems, marine ecosystems, and infrastructure worldwide.",
//       publications: [
//         {
//           title: "Wind-wave climate changes and their impacts",
//           journal: "Nature Reviews Earth & Environment",
//           year: "2024",
//           link: "https://doi.org/10.1038/s43017-023-00502-0"
//         }
//       ]
//     },
//     {
//       title: "Arctic Sea Ice Dynamics",
//       description: "Investigating climate mode impacts on extreme Arctic sea ice events using comprehensive reanalysis datasets and climate models.",
//       publications: [
//         {
//           title: "Assessing the Impact of Climate Modes on Extreme Arctic Sea Ice",
//           journal: "International Journal of Climatology",
//           year: "2025",
//           link: "https://doi.org/10.1002/joc.70121"
//         }
//       ]
//     },
//     {
//       title: "Storm Surge Modeling",
//       description: "Evaluating current storm surge risks and projecting future coastal flooding scenarios using advanced CMIP6 climate models.",
//       publications: [
//         {
//           title: "Storm surge assessment using CMIP6 models",
//           journal: "Ocean Modelling",
//           year: "2025",
//           link: "https://doi.org/10.1016/j.ocemod.2025.102560"
//         }
//       ]
//     },
//     {
//       title: "Climate Forecasting",
//       description: "Developing multi-model frameworks with explainable AI for improved IOD and ENSO predictions and climate forecasting.",
//       publications: [
//         {
//           title: "Bridging the Climate Gap for IOD and ENSO Forecasting",
//           journal: "IEEE Transactions on Artificial Intelligence",
//           year: "2025",
//           link: "https://doi.org/10.1109/TAI.2024.3489535"
//         }
//       ]
//     },
//     {
//       title: "Extreme Wave Analysis",
//       description: "Assessing climate mode effects on dangerous wave conditions and their correlation with tropical cyclones across ocean basins.",
//       publications: [
//         {
//           title: "Extreme wave height response to climate modes",
//           journal: "Ocean Engineering",
//           year: "2024",
//           link: "https://doi.org/10.1016/j.oceaneng.2024.116789"
//         }
//       ]
//     },
//     {
//       title: "Heat Stress Projections",
//       description: "Predicting future heat stress impacts globally with regional Humidex analysis using high-resolution CMIP6 models.",
//       publications: [
//         {
//           title: "Global future heat stress projections",
//           journal: "Atmospheric Research",
//           year: "2025",
//           link: "https://doi.org/10.1016/j.atmosres.2025.108367"
//         }
//       ]
//     }
//   ];

//   const researchSlides = [
//     {
//       image: research2,
//       title: "Wind-wave climate changes and their impacts",
//       description: "Investigating global changes in ocean wind-wave patterns and their profound impacts on coastal erosion, marine ecosystems, and coastal infrastructure worldwide. Our research focuses on understanding climate-driven variations in wave energy and their consequences for coastal vulnerability.",
//       buttonText: "Read Publication",
//       buttonLink: "https://doi.org/10.1038/s43017-023-00502-0",
//       journal: "Nature Reviews Earth & Environment",
//       year: "2024"
//     },
//     {
//       image: research1,
//       title: "Assessing the Impact of Climate Modes on Extreme Arctic Sea Ice",
//       description: "Investigating how major climate patterns like ENSO and NAO influence extreme Arctic sea ice events using comprehensive reanalysis datasets. Our work improves polar climate predictions and understanding of cryosphere-atmosphere interactions.",
//       buttonText: "Read Publication",
//       buttonLink: "https://doi.org/10.1002/joc.70121",
//       journal: "International Journal of Climatology",
//       year: "2025"
//     },
//     {
//       image: research4,
//       title: "Storm surge assessment using CMIP6 models",
//       description: "Evaluating current storm surge risks and projecting future coastal flooding scenarios across the Indo-Pacific using state-of-the-art CMIP6 climate models. Our research helps coastal communities prepare for climate change impacts.",
//       buttonText: "Read Publication",
//       buttonLink: "https://doi.org/10.1016/j.ocemod.2025.102560",
//       journal: "Ocean Modelling",
//       year: "2025"
//     },
//     {
//       image: research7,
//       title: "Bridging the Climate Gap for IOD and ENSO Forecasting",
//       description: "Developing an innovative multi-model framework with explainable AI for improved IOD and ENSO predictions. Our approach enhances climate forecasting transparency and reliability for seasonal predictions.",
//       buttonText: "Read Publication",
//       buttonLink: "https://doi.org/10.1109/TAI.2024.3489535",
//       journal: "IEEE Transactions on Artificial Intelligence",
//       year: "2025"
//     },
//     {
//       image: research6,
//       title: "Extreme wave height response to climate modes",
//       description: "Assessing climate mode effects on dangerous wave conditions and their correlation with tropical cyclones. Our research enhances coastal risk prediction and marine safety across vulnerable regions.",
//       buttonText: "Read Publication",
//       buttonLink: "https://doi.org/10.1016/j.oceaneng.2024.116789",
//       journal: "Ocean Engineering",
//       year: "2024"
//     },
//     {
//       image: research5,
//       title: "Global future heat stress projections",
//       description: "Predicting future heat stress impacts globally with fine-scale regional Humidex analysis using advanced CMIP6 climate projections. Our work identifies vulnerable populations and informs adaptation strategies.",
//       buttonText: "Read Publication",
//       buttonLink: "https://doi.org/10.1016/j.atmosres.2025.108367",
//       journal: "Atmospheric Research",
//       year: "2025"
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

//   return (
//     <div className="space-y-6 animate-fade-in">
//       {/* News Marquee Section */}
//       {/* <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 max-w-4xl mx-auto">
//         <div className="flex items-center gap-4 mb-3">
//           <div className="flex items-center gap-2 bg-primary text-primary-foreground px-3 py-1 rounded-full">
//             <Megaphone className="h-4 w-4" />
//             <span className="text-sm font-semibold">NEWS & UPDATES</span>
//           </div>
//           <Button asChild variant="outline" size="sm" className="ml-auto">
//             <Link to="/positions">View All Positions</Link>
//           </Button>
//         </div>
        
//         <div className="relative overflow-hidden">
//           <div className="animate-marquee whitespace-nowrap">
//             {newsItems.map((item, index) => (
//               <Link
//                 key={item.id}
//                 to={item.link}
//                 className="inline-block mx-8 text-lg font-medium text-primary hover:text-primary/80 hover:underline transition-colors"
//               >
//                 {item.text}
//               </Link>
//             ))}
//           </div>
//         </div>
//       </div> */}

//       {/* Lab Name Section with Background Image */}
//       <div className="relative rounded-2xl overflow-hidden shadow-2xl h-64 group">
//         <div 
//           className="absolute inset-0 bg-cover bg-center"
//           style={{ backgroundImage: `url(${labHero})` }}
//         />
//         <div className="absolute inset-0 bg-black/50" />
//         <div className="relative h-full flex items-center justify-center text-center p-8">
//           <div className="max-w-4xl">
//             <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 animate-fade-in">
//               Climate Intelligence and Simulation Research Lab
//             </h1>
//             <p className="text-xl text-white/90 animate-fade-in" style={{ animationDelay: '0.2s' }}>
//               Advancing Climate Science Through Innovation and Collaboration
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Research Areas Section */}
//       <div className="space-y-8">
//         <div className="text-center">
//           <h2 className="text-4xl font-bold text-primary mb-4">Research Areas</h2>
//           <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
//             Exploring the frontiers of climate science through interdisciplinary research and cutting-edge computational approaches
//           </p>
//         </div>
        
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {researchAreas.map((area, index) => (
//             <Card 
//               key={index}
//               className="hover:shadow-xl transition-all duration-300 hover:scale-105 group"
//             >
//               <CardContent className="p-6">
//                 <h3 className="text-xl font-bold mb-3 text-primary group-hover:text-primary/80 transition-colors">
//                   {area.title}
//                 </h3>
//                 <p className="text-muted-foreground mb-4 leading-relaxed">
//                   {area.description}
//                 </p>
//                 {area.publications.map((pub, pubIndex) => (
//                   <div key={pubIndex} className="border-t pt-3 mt-3">
//                     <Button asChild variant="link" className="p-0 h-auto text-left">
//                       <Link 
//                         to={pub.link} 
//                         target="_blank"
//                         className="text-sm text-blue-600 hover:text-blue-800 no-underline"
//                       >
//                         <div>
//                           <div className="font-medium line-clamp-2">{pub.title}</div>
//                           <div className="text-xs text-muted-foreground mt-1">
//                             {pub.journal} • {pub.year}
//                           </div>
//                         </div>
//                       </Link>
//                     </Button>
//                   </div>
//                 ))}
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>

//       {/* Featured Publications Slider */}
//       <div className="space-y-6">
//         <div className="text-center">
//           <h2 className="text-4xl font-bold text-primary mb-4">Featured Publications</h2>
//           <p className="text-xl text-muted-foreground">Latest research breakthroughs and scientific contributions</p>
//         </div>

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
//                     <h1 className="text-2xl font-bold mb-4 animate-fade-in leading-tight">
//                       {slide.title}
//                     </h1>
//                     {slide.journal && (
//                       <div className="flex items-center gap-3 mb-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
//                         <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
//                           {slide.journal}
//                         </span>
//                         <span className="text-muted-foreground text-sm font-medium">
//                           {slide.year}
//                         </span>
//                       </div>
//                     )}
//                     <p className="text-base text-muted-foreground mb-6 animate-fade-in leading-relaxed flex-grow" style={{ animationDelay: '0.2s' }}>
//                       {slide.description}
//                     </p>
//                     <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
//                       <Button asChild size="lg" className="gap-2">
//                         <Link 
//                           to={slide.buttonLink} 
//                           target={slide.buttonLink.includes('http') ? '_blank' : '_self'}
//                         >
//                           {slide.buttonText}
//                           <ArrowRight className="h-4 w-4" />
//                         </Link>
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
//       </div>

//       {/* Professor Introduction */}
//       <Card className="hover:shadow-xl transition-all duration-300">
//         <CardContent className="p-8">
//           <div className="grid md:grid-cols-2 gap-8 items-center">
//             <div className="animate-fade-in">
//               <div className="w-full aspect-[4/3] bg-gray-100 rounded-lg shadow-lg flex items-center justify-center overflow-hidden">
//                 <img
//                   src={professorImage}
//                   alt="Dr Prashant Kumar"
//                   className="w-full h-full object-contain"
//                 />
//               </div>
//             </div>
//             <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
//               <h2 className="text-3xl font-bold mb-3">Dr. Prashant Kumar</h2>
//               <p className="text-xl text-primary mb-4">Associate Professor & COE at NIT Delhi</p>
//               <p className="text-muted-foreground leading-relaxed mb-4">
//                 Dr. Prashant Kumar is a distinguished climate researcher and Associate Professor at
//                 National Institute of Technology Delhi, currently serving as Controller of Examination.
//                 With over 20 years of research experience, he specializes in climate modeling, ocean-atmosphere
//                 interactions, and polar climate change. Dr. Kumar has authored more than 150 peer-reviewed publications
//                 and led multiple nationally funded research projects. His interdisciplinary work bridges applied mathematics
//                 and environmental science to develop predictive models for climate variability and coastal dynamics. Passionate
//                 about sustainable development, he continues to mentor researchers and contribute to national-level climate resilience strategies.
//               </p>
//             </div>
//           </div>
//         </CardContent>
//       </Card>

//       {/* Quick Links */}
//       <div className="grid md:grid-cols-3 gap-6">
//         <Card className="hover:shadow-xl transition-all duration-300 hover-scale">
//           <CardContent className="p-6">
//             <Microscope className="h-12 w-12 text-primary mb-4" />
//             <h3 className="text-2xl font-bold mb-2">Our Research</h3>
//             <p className="text-muted-foreground mb-4">
//               Explore cutting-edge climate research projects and discoveries shaping our understanding of Earth's climate system.
//             </p>
//             <Button asChild variant="outline" className="w-full gap-2">
//               <Link to="/research">
//                 View Research
//                 <ArrowRight className="h-4 w-4" />
//               </Link>
//             </Button>
//           </CardContent>
//         </Card>

//         <Card className="hover:shadow-xl transition-all duration-300 hover-scale">
//           <CardContent className="p-6">
//             <BookOpen className="h-12 w-12 text-primary mb-4" />
//             <h3 className="text-2xl font-bold mb-2">Publications</h3>
//             <p className="text-muted-foreground mb-4">
//               Access our extensive collection of peer-reviewed publications in leading climate science journals.
//             </p>
//             <Button asChild variant="outline" className="w-full gap-2">
//               <Link to="/publications">
//                 View Publications
//                 <ArrowRight className="h-4 w-4" />
//               </Link>
//             </Button>
//           </CardContent>
//         </Card>

//         <Card className="hover:shadow-xl transition-all duration-300 hover-scale">
//           <CardContent className="p-6">
//             <Users className="h-12 w-12 text-primary mb-4" />
//             <h3 className="text-2xl font-bold mb-2">Our Team</h3>
//             <p className="text-muted-foreground mb-4">
//               Meet our talented team of researchers advancing climate science through collaboration and innovation.
//             </p>
//             <Button asChild variant="outline" className="w-full gap-2">
//               <Link to="/team">
//                 Meet the Team
//                 <ArrowRight className="h-4 w-4" />
//               </Link>
//             </Button>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// };

// export default Home;


// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { ArrowRight, Microscope, BookOpen, Users, ChevronLeft, ChevronRight, Megaphone, Globe, Linkedin, Mail } from "lucide-react";
// import { Link } from "react-router-dom";
// import { useState, useEffect } from "react";
// import labHero from "@/assets/lab-hero.jpg";
// import professorImage from "@/assets/professor.jpg";
// import research1 from "@/assets/research-1.jpeg";
// import research2 from "@/assets/research-2.jpeg";
// import research4 from "@/assets/research-4.jpeg";
// import research5 from "@/assets/research-5.jpeg";
// import research6 from "@/assets/research-6.jpeg";
// import research7 from "@/assets/research-7.jpeg";

// const Home = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

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
//       buttonText: "Read Publication",
//       buttonLink: "https://doi.org/10.1038/s43017-023-00502-0",
//       journal: "Nature Reviews Earth & Environment",
//       year: "2024",
//       researchName: "Wind-Wave Climate"
//     },
//     {
//       image: research1,
//       title: "Assessing the Impact of Climate Modes on Extreme Arctic Sea Ice Using Reanalysis Data",
//       description: "Investigating how major climate patterns like ENSO and NAO influence extreme Arctic sea ice events using comprehensive reanalysis datasets. Our work improves polar climate predictions and understanding of cryosphere-atmosphere interactions.",
//       buttonText: "Read Publication",
//       buttonLink: "https://doi.org/10.1002/joc.70121",
//       journal: "International Journal of Climatology",
//       year: "2025",
//       researchName: "Arctic Climate Dynamics"
//     },
//     {
//       image: research4,
//       title: "Assessment and future projections of storm surge using CMIP6 models in the Indo-Pacific region",
//       description: "Evaluating current storm surge risks and projecting future coastal flooding scenarios across the Indo-Pacific using state-of-the-art CMIP6 climate models. Our research helps coastal communities prepare for climate change impacts.",
//       buttonText: "Read Publication",
//       buttonLink: "https://doi.org/10.1016/j.ocemod.2025.102560",
//       journal: "Ocean Modelling",
//       year: "2025",
//       researchName: "Coastal Wave Climate Analysis &amp; Prediction"
//     },
//     {
//       image: research7,
//       title: "Bridging the Climate Gap: Multimodel Framework With Explainable Decision-Making for IOD and ENSO Forecasting",
//       description: "Developing an innovative multi-model framework with explainable AI for improved IOD and ENSO predictions. Our approach enhances climate forecasting transparency and reliability for seasonal predictions.",
//       buttonText: "Read Publication",
//       buttonLink: "https://doi.org/10.1109/TAI.2024.3489535",
//       journal: "IEEE Transactions on Artificial Intelligence",
//       year: "2025",
//       researchName: "Climate Prediction Using AI/ML"
//     },
//     {
//       image: research6,
//       title: "Extreme wave height response to climate modes and its association with tropical cyclones over the Indo-Pacific Ocean",
//       description: "Assessing climate mode effects on dangerous wave conditions and their correlation with tropical cyclones. Our research enhances coastal risk prediction and marine safety across vulnerable regions.",
//       buttonText: "Read Publication",
//       buttonLink: "https://doi.org/10.1016/j.oceaneng.2024.116789",
//       journal: "Ocean Engineering",
//       year: "2024",
//       researchName: "Tropical Cyclone Analysis"
//     },
//     {
//       image: research5,
//       title: "Global future heat stress projections: Regional variations of Humidex changes from high-resolution CMIP6 models",
//       description: "Predicting future heat stress impacts globally with fine-scale regional Humidex analysis using advanced CMIP6 climate projections. Our work identifies vulnerable populations and informs adaptation strategies.",
//       buttonText: "Read Publication",
//       buttonLink: "https://doi.org/10.1016/j.atmosres.2025.108367",
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

//   return (
//     <div className="space-y-6 animate-fade-in">
//       {/* News Marquee Section */}
//       {/* <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 max-w-4xl mx-auto">
//         <div className="flex items-center gap-4 mb-3">
//           <div className="flex items-center gap-2 bg-primary text-primary-foreground px-3 py-1 rounded-full">
//             <Megaphone className="h-4 w-4" />
//             <span className="text-sm font-semibold">NEWS & UPDATES</span>
//           </div>
//           <Button asChild variant="outline" size="sm" className="ml-auto">
//             <Link to="/positions">View All Positions</Link>
//           </Button>
//         </div>
        
//         <div className="relative overflow-hidden">
//           <div className="animate-marquee whitespace-nowrap">
//             {newsItems.map((item, index) => (
//               <Link
//                 key={item.id}
//                 to={item.link}
//                 className="inline-block mx-8 text-lg font-medium text-primary hover:text-primary/80 hover:underline transition-colors"
//               >
//                 {item.text}
//               </Link>
//             ))}
//           </div>
//         </div>
//       </div> */}

//       {/* Lab Name Section with Background Image */}
//       <div className="relative rounded-2xl overflow-hidden shadow-2xl h-64 group">
//         <div 
//           className="absolute inset-0 bg-cover bg-center"
//           style={{ backgroundImage: `url(${labHero})` }}
//         />
//         <div className="absolute inset-0 bg-black/50" />
//         <div className="relative h-full flex items-center justify-center text-center p-8">
//           <div className="max-w-4xl">
//             <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 animate-fade-in">
//             ClimOne
//             </h1>
//             <p className="text-xl text-white/90 animate-fade-in" style={{ animationDelay: '0.2s' }}>
//               Advancing Climate Science Through Innovation and Collaboration
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Featured Publications Slider */}
//       <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[500px] group">
//         {/* Slides */}
//         {researchSlides.map((slide, index) => (
//           <div
//             key={index}
//             className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
//               index === currentSlide ? 'opacity-100' : 'opacity-0'
//             }`}
//           >
//             {/* Main content container */}
//             <div className="flex h-full">
//               {/* Left side - Text content */}
//               <div className="w-1/2 bg-gradient-to-r from-background/95 to-background/80 flex items-center">
//                 <div className="max-w-md p-8 h-full flex flex-col justify-center">
//                   {slide.researchName && (
//                     <div className="mb-3 animate-fade-in">
//                       <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
//                         {slide.researchName}
//                       </span>
//                     </div>
//                   )}
//                   <h1 className="text-2xl font-bold mb-4 animate-fade-in leading-tight">
//                     {slide.title}
//                   </h1>
//                   {slide.journal && (
//                     <div className="flex items-center gap-3 mb-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
//                       <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
//                         {slide.journal}
//                       </span>
//                       <span className="text-muted-foreground text-sm font-medium">
//                         {slide.year}
//                       </span>
//                     </div>
//                   )}
//                   <p className="text-base text-muted-foreground mb-6 animate-fade-in leading-relaxed flex-grow" style={{ animationDelay: '0.2s' }}>
//                     {slide.description}
//                   </p>
//                   <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
//                     <Button asChild size="lg" className="gap-2">
//                       <Link 
//                         to={slide.buttonLink} 
//                         target={slide.buttonLink.includes('http') ? '_blank' : '_self'}
//                       >
//                         {slide.buttonText}
//                         <ArrowRight className="h-4 w-4" />
//                       </Link>
//                     </Button>
//                   </div>
//                 </div>
//               </div>

//               {/* Right side - Image */}
//               <div className="w-1/2 relative">
//                 <div className="w-full h-full bg-gray-100 flex items-center justify-center">
//                   <img
//                     src={slide.image}
//                     alt={slide.title}
//                     className="w-full h-full object-contain"
//                   />
//                 </div>
//                 {/* Publication badge for Nature publication */}
//                 {slide.journal === "Nature Reviews Earth & Environment" && (
//                   <div className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg animate-pulse">
//                     <div className="text-sm font-bold">Nature</div>
//                     <div className="text-xs">Featured Publication</div>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         ))}

//         {/* Navigation Arrows */}
//         <button
//           onClick={prevSlide}
//           className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-background/80 hover:bg-background text-foreground p-3 rounded-full transition-all opacity-0 group-hover:opacity-100 shadow-lg z-10"
//           aria-label="Previous slide"
//         >
//           <ChevronLeft className="h-6 w-6" />
//         </button>
//         <button
//           onClick={nextSlide}
//           className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-background/80 hover:bg-background text-foreground p-3 rounded-full transition-all opacity-0 group-hover:opacity-100 shadow-lg z-10"
//           aria-label="Next slide"
//         >
//           <ChevronRight className="h-6 w-6" />
//         </button>

//         {/* Slide Indicators */}
//         <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
//           {researchSlides.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrentSlide(index)}
//               className={`w-3 h-3 rounded-full transition-all ${
//                 index === currentSlide 
//                   ? 'bg-primary scale-125' 
//                   : 'bg-primary/50 hover:bg-primary/80'
//               }`}
//               aria-label={`Go to slide ${index + 1}`}
//             />
//           ))}
//         </div>

//         {/* Progress Bar */}
//         <div className="absolute bottom-0 left-0 w-full h-1 bg-primary/20 z-10">
//           <div 
//             className="h-full bg-primary transition-all duration-5000 ease-linear"
//             style={{ 
//               width: `${((currentSlide + 1) / researchSlides.length) * 100}%` 
//             }}
//           />
//         </div>
//       </div>

//       {/* Professor Introduction */}
//       <Card className="hover:shadow-xl transition-all duration-300">
//         <CardContent className="p-8">
//           <div className="grid md:grid-cols-2 gap-8 items-center">
//             <div className="animate-fade-in">
//               <div className="w-full aspect-[4/3] bg-gray-100 rounded-lg shadow-lg flex items-center justify-center overflow-hidden">
//                 <img
//                   src={professorImage}
//                   alt="Dr Prashant Kumar"
//                   className="w-full h-full object-contain"
//                 />
//               </div>
//             </div>
//             <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
//               <h2 className="text-3xl font-bold mb-3">Dr. Prashant Kumar</h2>
//               <p className="text-xl text-primary mb-4">Associate Professor & COE at NIT Delhi</p>
//               <p className="text-muted-foreground leading-relaxed mb-6">
//                 Dr. Prashant Kumar is a distinguished climate researcher and Associate Professor at
//                 National Institute of Technology Delhi, currently serving as Controller of Examination.
//                 With over 20 years of research experience, he specializes in climate modeling, ocean-atmosphere
//                 interactions, and polar climate change. Dr. Kumar has authored more than 150 peer-reviewed publications
//                 and led multiple nationally funded research projects. His interdisciplinary work bridges applied mathematics
//                 and environmental science to develop predictive models for climate variability and coastal dynamics. Passionate
//                 about sustainable development, he continues to mentor researchers and contribute to national-level climate resilience strategies.
//               </p>
              
//               {/* Social Media Links */}
//               <div className="flex gap-4">
//                 <Button asChild variant="outline" size="sm" className="gap-2">
//                 <Link to="https://nitdelhi.irins.org/profile/62655" target="_blank">
//                 <Globe className="h-4 w-4" />
//                 IRINS Profile
//                 </Link>
//                 </Button>
//                 <Button asChild variant="outline" size="sm" className="gap-2">
//                   <Link to="https://www.researchgate.net/profile/Prashant-Kumar-95" target="_blank">
//                     <Globe className="h-4 w-4" />
//                     ResearchGate
//                   </Link>
//                 </Button>
//                 <Button asChild variant="outline" size="sm" className="gap-2">
//                   <Link to="https://www.linkedin.com/in/aprashant-kumar-421790111/" target="_blank">
//                     <Linkedin className="h-4 w-4" />
//                     LinkedIn
//                   </Link>
//                 </Button>
               
//               </div>
//             </div>
//           </div>
//         </CardContent>
//       </Card>

//       {/* Quick Links */}
//       <div className="grid md:grid-cols-3 gap-6">
//         <Card className="hover:shadow-xl transition-all duration-300 hover-scale">
//           <CardContent className="p-6">
//             <Microscope className="h-12 w-12 text-primary mb-4" />
//             <h3 className="text-2xl font-bold mb-2">Our Research</h3>
//             <p className="text-muted-foreground mb-4">
//               Explore cutting-edge climate research projects and discoveries shaping our understanding of Earth's climate system.
//             </p>
//             <Button asChild variant="outline" className="w-full gap-2">
//               <Link to="/research">
//                 View Research
//                 <ArrowRight className="h-4 w-4" />
//               </Link>
//             </Button>
//           </CardContent>
//         </Card>

//         <Card className="hover:shadow-xl transition-all duration-300 hover-scale">
//           <CardContent className="p-6">
//             <BookOpen className="h-12 w-12 text-primary mb-4" />
//             <h3 className="text-2xl font-bold mb-2">Publications</h3>
//             <p className="text-muted-foreground mb-4">
//               Access our extensive collection of peer-reviewed publications in leading climate science journals.
//             </p>
//             <Button asChild variant="outline" className="w-full gap-2">
//               <Link to="/publications">
//                 View Publications
//                 <ArrowRight className="h-4 w-4" />
//               </Link>
//             </Button>
//           </CardContent>
//         </Card>

//         <Card className="hover:shadow-xl transition-all duration-300 hover-scale">
//           <CardContent className="p-6">
//             <Users className="h-12 w-12 text-primary mb-4" />
//             <h3 className="text-2xl font-bold mb-2">Our Team</h3>
//             <p className="text-muted-foreground mb-4">
//               Meet our talented team of researchers advancing climate science through collaboration and innovation.
//             </p>
//             <Button asChild variant="outline" className="w-full gap-2">
//               <Link to="/team">
//                 Meet the Team
//                 <ArrowRight className="h-4 w-4" />
//               </Link>
//             </Button>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// };

// export default Home;


// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { ArrowRight, Microscope, BookOpen, Users, ChevronLeft, ChevronRight, Megaphone, Globe, Linkedin, Mail } from "lucide-react";
// import { Link } from "react-router-dom";
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
//       buttonText: "Read Publication",
//       buttonLink: "https://doi.org/10.1038/s43017-023-00502-0",
//       journal: "Nature Reviews Earth & Environment",
//       year: "2024",
//       researchName: "Wind-Wave Climate"
//     },
//     {
//       image: research1,
//       title: "Assessing the Impact of Climate Modes on Extreme Arctic Sea Ice Using Reanalysis Data",
//       description: "Investigating how major climate patterns like ENSO and NAO influence extreme Arctic sea ice events using comprehensive reanalysis datasets. Our work improves polar climate predictions and understanding of cryosphere-atmosphere interactions.",
//       buttonText: "Read Publication",
//       buttonLink: "https://doi.org/10.1002/joc.70121",
//       journal: "International Journal of Climatology",
//       year: "2025",
//       researchName: "Arctic Climate Dynamics"
//     },
//     {
//       image: research4,
//       title: "Assessment and future projections of storm surge using CMIP6 models in the Indo-Pacific region",
//       description: "Evaluating current storm surge risks and projecting future coastal flooding scenarios across the Indo-Pacific using state-of-the-art CMIP6 climate models. Our research helps coastal communities prepare for climate change impacts.",
//       buttonText: "Read Publication",
//       buttonLink: "https://doi.org/10.1016/j.ocemod.2025.102560",
//       journal: "Ocean Modelling",
//       year: "2025",
//       researchName: "Coastal Wave Climate Analysis & Prediction"
//     },
//     {
//       image: research7,
//       title: "Bridging the Climate Gap: Multimodel Framework With Explainable Decision-Making for IOD and ENSO Forecasting",
//       description: "Developing an innovative multi-model framework with explainable AI for improved IOD and ENSO predictions. Our approach enhances climate forecasting transparency and reliability for seasonal predictions.",
//       buttonText: "Read Publication",
//       buttonLink: "https://doi.org/10.1109/TAI.2024.3489535",
//       journal: "IEEE Transactions on Artificial Intelligence",
//       year: "2025",
//       researchName: "Climate Prediction Using AI/ML"
//     },
//     {
//       image: research6,
//       title: "Extreme wave height response to climate modes and its association with tropical cyclones over the Indo-Pacific Ocean",
//       description: "Assessing climate mode effects on dangerous wave conditions and their correlation with tropical cyclones. Our research enhances coastal risk prediction and marine safety across vulnerable regions.",
//       buttonText: "Read Publication",
//       buttonLink: "https://doi.org/10.1016/j.oceaneng.2024.116789",
//       journal: "Ocean Engineering",
//       year: "2024",
//       researchName: "Tropical Cyclone Analysis"
//     },
//     {
//       image: research5,
//       title: "Global future heat stress projections: Regional variations of Humidex changes from high-resolution CMIP6 models",
//       description: "Predicting future heat stress impacts globally with fine-scale regional Humidex analysis using advanced CMIP6 climate projections. Our work identifies vulnerable populations and informs adaptation strategies.",
//       buttonText: "Read Publication",
//       buttonLink: "https://doi.org/10.1016/j.atmosres.2025.108367",
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
//     <div className="space-y-6 animate-fade-in">
//       {/* Lab Name Section with Background Image */}
//       <div className="relative rounded-2xl overflow-hidden shadow-2xl h-64 group">
//         <div 
//           className="absolute inset-0 bg-cover bg-center"
//           style={{ backgroundImage: `url(${bg})` }}
//         />
//         <div className="absolute inset-0 bg-black/50" />
//         <div className="relative h-full flex items-center justify-center text-center p-8">
//           <div className="max-w-4xl">
//             <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
//               Welcome to{" "}
//               <span className="inline-block">
//                 <TypingAnimation text="ClimOne" speed={150} />
//                 {/* Cursor blinking effect */}
//                 <span className="ml-1 animate-pulse">|</span>
//               </span>
//             </h1>
//             <p 
//               className={`text-xl text-white/90 transition-all duration-500 ${
//                 showSubtitle ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
//               }`}
//             >
//               Advancing Climate Science Through Innovation and Collaboration
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Featured Publications Slider */}
//       <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[500px] group">
//         {/* Slides */}
//         {researchSlides.map((slide, index) => (
//           <div
//             key={index}
//             className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
//               index === currentSlide ? 'opacity-100' : 'opacity-0'
//             }`}
//           >
//             {/* Main content container */}
//             <div className="flex h-full">
//               {/* Left side - Text content */}
//               <div className="w-1/2 bg-gradient-to-r from-background/95 to-background/80 flex items-center">
//                 <div className="max-w-md p-8 h-full flex flex-col justify-center">
//                   {slide.researchName && (
//                     <div className="mb-3 animate-fade-in">
//                       <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
//                         {slide.researchName}
//                       </span>
//                     </div>
//                   )}
//                   <h1 className="text-2xl font-bold mb-4 animate-fade-in leading-tight">
//                     {slide.title}
//                   </h1>
//                   {slide.journal && (
//                     <div className="flex items-center gap-3 mb-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
//                       <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
//                         {slide.journal}
//                       </span>
//                       <span className="text-muted-foreground text-sm font-medium">
//                         {slide.year}
//                       </span>
//                     </div>
//                   )}
//                   <p className="text-base text-muted-foreground mb-6 animate-fade-in leading-relaxed flex-grow" style={{ animationDelay: '0.2s' }}>
//                     {slide.description}
//                   </p>
//                   <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
//                     <Button asChild size="lg" className="gap-2">
//                       <Link 
//                         to={slide.buttonLink} 
//                         target={slide.buttonLink.includes('http') ? '_blank' : '_self'}
//                       >
//                         {slide.buttonText}
//                         <ArrowRight className="h-4 w-4" />
//                       </Link>
//                     </Button>
//                   </div>
//                 </div>
//               </div>

//               {/* Right side - Image */}
//               <div className="w-1/2 relative">
//                 <div className="w-full h-full bg-gray-100 flex items-center justify-center">
//                   <img
//                     src={slide.image}
//                     alt={slide.title}
//                     className="w-full h-full object-contain"
//                   />
//                 </div>
//                 {/* Publication badge for Nature publication */}
//                 {slide.journal === "Nature Reviews Earth & Environment" && (
//                   <div className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg animate-pulse">
//                     <div className="text-sm font-bold">Nature</div>
//                     <div className="text-xs">Featured Publication</div>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         ))}

//         {/* Navigation Arrows */}
//         <button
//           onClick={prevSlide}
//           className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-background/80 hover:bg-background text-foreground p-3 rounded-full transition-all opacity-0 group-hover:opacity-100 shadow-lg z-10"
//           aria-label="Previous slide"
//         >
//           <ChevronLeft className="h-6 w-6" />
//         </button>
//         <button
//           onClick={nextSlide}
//           className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-background/80 hover:bg-background text-foreground p-3 rounded-full transition-all opacity-0 group-hover:opacity-100 shadow-lg z-10"
//           aria-label="Next slide"
//         >
//           <ChevronRight className="h-6 w-6" />
//         </button>

//         {/* Slide Indicators */}
//         <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
//           {researchSlides.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrentSlide(index)}
//               className={`w-3 h-3 rounded-full transition-all ${
//                 index === currentSlide 
//                   ? 'bg-primary scale-125' 
//                   : 'bg-primary/50 hover:bg-primary/80'
//               }`}
//               aria-label={`Go to slide ${index + 1}`}
//             />
//           ))}
//         </div>

//         {/* Progress Bar */}
//         <div className="absolute bottom-0 left-0 w-full h-1 bg-primary/20 z-10">
//           <div 
//             className="h-full bg-primary transition-all duration-5000 ease-linear"
//             style={{ 
//               width: `${((currentSlide + 1) / researchSlides.length) * 100}%` 
//             }}
//           />
//         </div>
//       </div>

//       {/* Professor Introduction */}
//       <Card className="hover:shadow-xl transition-all duration-300">
//         <CardContent className="p-8">
//           <div className="grid md:grid-cols-2 gap-8 items-center">
//             <div className="animate-fade-in">
//               <div className="w-full aspect-[4/3] bg-gray-100 rounded-lg shadow-lg flex items-center justify-center overflow-hidden">
//                 <img
//                   src={professorImage}
//                   alt="Dr Prashant Kumar"
//                   className="w-full h-full object-contain"
//                 />
//               </div>
//             </div>
//             <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
//               <h2 className="text-3xl font-bold mb-3">Dr. Prashant Kumar</h2>
//               <p className="text-xl text-primary mb-4">Associate Professor & COE at NIT Delhi</p>
//               <p className="text-muted-foreground leading-relaxed mb-6">
//                 Dr. Prashant Kumar is a distinguished climate researcher and Associate Professor at
//                 National Institute of Technology Delhi, currently serving as Controller of Examination.
//                 With over 20 years of research experience, he specializes in climate modeling, ocean-atmosphere
//                 interactions, and polar climate change. Dr. Kumar has authored more than 150 peer-reviewed publications
//                 and led multiple nationally funded research projects. His interdisciplinary work bridges applied mathematics
//                 and environmental science to develop predictive models for climate variability and coastal dynamics. Passionate
//                 about sustainable development, he continues to mentor researchers and contribute to national-level climate resilience strategies.
//               </p>
              
//               {/* Social Media Links */}
//               <div className="flex gap-4">
//                 <Button asChild variant="outline" size="sm" className="gap-2">
//                   <Link to="https://nitdelhi.irins.org/profile/62655" target="_blank">
//                     <Globe className="h-4 w-4" />
//                     IRINS Profile
//                   </Link>
//                 </Button>
//                 <Button asChild variant="outline" size="sm" className="gap-2">
//                   <Link to="https://www.researchgate.net/profile/Prashant-Kumar-95" target="_blank">
//                     <Globe className="h-4 w-4" />
//                     ResearchGate
//                   </Link>
//                 </Button>
//                 <Button asChild variant="outline" size="sm" className="gap-2">
//                   <Link to="https://www.linkedin.com/in/aprashant-kumar-421790111/" target="_blank">
//                     <Linkedin className="h-4 w-4" />
//                     LinkedIn
//                   </Link>
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </CardContent>
//       </Card>

//       {/* Quick Links */}
//       <div className="grid md:grid-cols-3 gap-6">
//         <Card className="hover:shadow-xl transition-all duration-300 hover-scale">
//           <CardContent className="p-6">
//             <Microscope className="h-12 w-12 text-primary mb-4" />
//             <h3 className="text-2xl font-bold mb-2">Our Research</h3>
//             <p className="text-muted-foreground mb-4">
//               Explore cutting-edge climate research projects and discoveries shaping our understanding of Earth's climate system.
//             </p>
//             <Button asChild variant="outline" className="w-full gap-2">
//               <Link to="/research">
//                 View Research
//                 <ArrowRight className="h-4 w-4" />
//               </Link>
//             </Button>
//           </CardContent>
//         </Card>

//         <Card className="hover:shadow-xl transition-all duration-300 hover-scale">
//           <CardContent className="p-6">
//             <BookOpen className="h-12 w-12 text-primary mb-4" />
//             <h3 className="text-2xl font-bold mb-2">Publications</h3>
//             <p className="text-muted-foreground mb-4">
//               Access our extensive collection of peer-reviewed publications in leading climate science journals.
//             </p>
//             <Button asChild variant="outline" className="w-full gap-2">
//               <Link to="/publications">
//                 View Publications
//                 <ArrowRight className="h-4 w-4" />
//               </Link>
//             </Button>
//           </CardContent>
//         </Card>

//         <Card className="hover:shadow-xl transition-all duration-300 hover-scale">
//           <CardContent className="p-6">
//             <Users className="h-12 w-12 text-primary mb-4" />
//             <h3 className="text-2xl font-bold mb-2">Our Team</h3>
//             <p className="text-muted-foreground mb-4">
//               Meet our talented team of researchers advancing climate science through collaboration and innovation.
//             </p>
//             <Button asChild variant="outline" className="w-full gap-2">
//               <Link to="/team">
//                 Meet the Team
//                 <ArrowRight className="h-4 w-4" />
//               </Link>
//             </Button>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// };

// export default Home;

// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { ArrowRight, Microscope, BookOpen, Users, ChevronLeft, ChevronRight, Megaphone, Globe, Linkedin, Mail, Heart, ExternalLink } from "lucide-react";
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
//       buttonText: "Read Publication",
//       buttonLink: "https://doi.org/10.1038/s43017-023-00502-0",
//       journal: "Nature Reviews Earth & Environment",
//       year: "2024",
//       researchName: "Wind-Wave Climate"
//     },
//     {
//       image: research1,
//       title: "Assessing the Impact of Climate Modes on Extreme Arctic Sea Ice Using Reanalysis Data",
//       description: "Investigating how major climate patterns like ENSO and NAO influence extreme Arctic sea ice events using comprehensive reanalysis datasets. Our work improves polar climate predictions and understanding of cryosphere-atmosphere interactions.",
//       buttonText: "Read Publication",
//       buttonLink: "https://doi.org/10.1002/joc.70121",
//       journal: "International Journal of Climatology",
//       year: "2025",
//       researchName: "Arctic Climate Dynamics"
//     },
//     {
//       image: research4,
//       title: "Assessment and future projections of storm surge using CMIP6 models in the Indo-Pacific region",
//       description: "Evaluating current storm surge risks and projecting future coastal flooding scenarios across the Indo-Pacific using state-of-the-art CMIP6 climate models. Our research helps coastal communities prepare for climate change impacts.",
//       buttonText: "Read Publication",
//       buttonLink: "https://doi.org/10.1016/j.ocemod.2025.102560",
//       journal: "Ocean Modelling",
//       year: "2025",
//       researchName: "Coastal Wave Climate Analysis & Prediction"
//     },
//     {
//       image: research7,
//       title: "Bridging the Climate Gap: Multimodel Framework With Explainable Decision-Making for IOD and ENSO Forecasting",
//       description: "Developing an innovative multi-model framework with explainable AI for improved IOD and ENSO predictions. Our approach enhances climate forecasting transparency and reliability for seasonal predictions.",
//       buttonText: "Read Publication",
//       buttonLink: "https://doi.org/10.1109/TAI.2024.3489535",
//       journal: "IEEE Transactions on Artificial Intelligence",
//       year: "2025",
//       researchName: "Climate Prediction Using AI/ML"
//     },
//     {
//       image: research6,
//       title: "Extreme wave height response to climate modes and its association with tropical cyclones over the Indo-Pacific Ocean",
//       description: "Assessing climate mode effects on dangerous wave conditions and their correlation with tropical cyclones. Our research enhances coastal risk prediction and marine safety across vulnerable regions.",
//       buttonText: "Read Publication",
//       buttonLink: "https://doi.org/10.1016/j.oceaneng.2024.116789",
//       journal: "Ocean Engineering",
//       year: "2024",
//       researchName: "Tropical Cyclone Analysis"
//     },
//     {
//       image: research5,
//       title: "Global future heat stress projections: Regional variations of Humidex changes from high-resolution CMIP6 models",
//       description: "Predicting future heat stress impacts globally with fine-scale regional Humidex analysis using advanced CMIP6 climate projections. Our work identifies vulnerable populations and informs adaptation strategies.",
//       buttonText: "Read Publication",
//       buttonLink: "https://doi.org/10.1016/j.atmosres.2025.108367",
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
//                   <TypingAnimation text="ClimOne" speed={150} />
//                   {/* Cursor blinking effect */}
//                   <span className="ml-1 animate-pulse">|</span>
//                 </span>
//               </h1>
//               <p 
//                 className={`text-xl text-white/90 transition-all duration-500 ${
//                   showSubtitle ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
//                 }`}
//               >
//                 Advancing Climate Science Through Innovation and Collaboration
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
//                     {slide.researchName && (
//                       <div className="mb-3 animate-fade-in">
//                         <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
//                           {slide.researchName}
//                         </span>
//                       </div>
//                     )}
//                     <h1 className="text-2xl font-bold mb-4 animate-fade-in leading-tight">
//                       {slide.title}
//                     </h1>
//                     {slide.journal && (
//                       <div className="flex items-center gap-3 mb-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
//                         <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
//                           {slide.journal}
//                         </span>
//                         <span className="text-muted-foreground text-sm font-medium">
//                           {slide.year}
//                         </span>
//                       </div>
//                     )}
//                     <p className="text-base text-muted-foreground mb-6 animate-fade-in leading-relaxed flex-grow" style={{ animationDelay: '0.2s' }}>
//                       {slide.description}
//                     </p>
//                     <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
//                       <Button asChild size="lg" className="gap-2">
//                         <Link 
//                           to={slide.buttonLink} 
//                           target={slide.buttonLink.includes('http') ? '_blank' : '_self'}
//                         >
//                           {slide.buttonText}
//                           <ArrowRight className="h-4 w-4" />
//                         </Link>
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
//       <footer className="bg-muted/50 border-t mt-12">
//         <div className="max-w-6xl mx-auto px-4 py-8">
//           <div className="grid md:grid-cols-2 gap-8 items-center">
//             {/* Left side - Lab Info */}
//             <div className="space-y-4">
//               <div className="flex items-center gap-3">
//                 <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
//                   <span className="text-white font-bold text-lg">C</span>
//                 </div>
//                 <div>
//                   <h3 className="font-bold text-lg">ClimOne</h3>
//                   <p className="text-sm text-muted-foreground">
//                     Climate Intelligence and Simulation Research Lab
//                   </p>
//                 </div>
//               </div>
//               <p className="text-sm text-muted-foreground max-w-md">
//                 Advancing climate science through innovative research, cutting-edge technology, 
//                 and collaborative solutions for a sustainable future.
//               </p>
//               <div className="flex items-center gap-4 text-sm text-muted-foreground">
//                 <span>National Institute of Technology Delhi</span>
//               </div>
//             </div>

//             {/* Right side - Developer Info */}
//             <div className="space-y-4 text-right">
//               <div className="inline-flex items-center gap-2 bg-background px-4 py-2 rounded-lg border">
//                 <Heart className="h-4 w-4 text-red-500" />
//                 <span className="text-sm font-medium">
//                   Crafted with passion by
//                 </span>
//               </div>
//               <div>
//                 <button 
//                   onClick={handleTeamNavigation}
//                   className="group cursor-pointer text-right"
//                 >
//                   <h4 className="font-semibold text-lg group-hover:text-primary transition-colors duration-200 inline-flex items-center">
//                     Viaan Sharma
//                     <ExternalLink className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
//                   </h4>
//                 </button>
//                 <p className="text-sm text-muted-foreground mb-2">
//                   M.Tech Student • National Institute of Technology Delhi
//                 </p>
//                 <div className="flex gap-3 justify-end">
//                   <Button asChild variant="ghost" size="sm" className="gap-2">
//                     <Link to="https://www.linkedin.com/in/viaan-sharma-9a6368201/" target="_blank">
//                       <Linkedin className="h-4 w-4" />
//                       LinkedIn
//                     </Link>
//                   </Button>
//                   <Button asChild variant="ghost" size="sm" className="gap-2">
//                     <Link to="https://github.com/viaansharma" target="_blank">
//                       <ExternalLink className="h-4 w-4" />
//                       GitHub
//                     </Link>
//                   </Button>
//                   <Button asChild variant="ghost" size="sm" className="gap-2">
//                     <Link to="mailto:viaansharma7@gmail.com">
//                       <Mail className="h-4 w-4" />
//                       Email
//                     </Link>
//                   </Button>
//                 </div>
//               </div>
//             </div>
//           </div>
          
//           {/* Bottom Bar */}
//           <div className="border-t mt-8 pt-6 text-center">
//             <p className="text-sm text-muted-foreground">
//               © {new Date().getFullYear()} ClimOne Research Lab. All rights reserved. | 
//               Designed and developed with ❤️ by{" "}
//               <button 
//                 onClick={handleTeamNavigation}
//                 className="text-primary hover:underline font-medium cursor-pointer"
//               >
//                 Viaan Sharma
//               </button>
//             </p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Home;

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Microscope, BookOpen, Users, ChevronLeft, ChevronRight, Megaphone, Globe, Linkedin, Mail, Heart, ExternalLink, Github } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import labHero from "@/assets/lab-hero.jpg";
import professorImage from "@/assets/professor.jpg";
import research1 from "@/assets/research-1.jpeg";
import research2 from "@/assets/research-2.jpeg";
import research4 from "@/assets/research-4.jpeg";
import research5 from "@/assets/research-5.jpeg";
import research6 from "@/assets/research-6.jpeg";
import research7 from "@/assets/research-7.jpeg";
import bg from "@/assets/bg.jpg";
import { MapPin } from "lucide-react";
import logo2 from "@/assets/logo2.png";


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
      id: 1,
      text: "🎓 New PhD Position Available - Climate Modeling Research",
      link: "/positions#phd-climate-modeling"
    },
    {
      id: 2,
      text: "🔬 Postdoctoral Researcher Opening - Ocean Dynamics Study",
      link: "/positions#postdoc-ocean-dynamics"
    },
    {
      id: 3,
      text: "💼 Master's Research Assistant Positions - Apply Now",
      link: "/positions#masters-assistant"
    },
    {
      id: 4,
      text: "📢 Summer Internship Program 2025 - Applications Open",
      link: "/positions#summer-internship"
    }
  ];

  const researchSlides = [
    {
      image: research2,
      title: "Wind-wave climate changes and their impacts",
      description: "Investigating global changes in ocean wind-wave patterns and their profound impacts on coastal erosion, marine ecosystems, and coastal infrastructure worldwide. Our research focuses on understanding climate-driven variations in wave energy and their consequences for coastal vulnerability.",
      buttonText: "Read Publication",
      buttonLink: "https://doi.org/10.1038/s43017-023-00502-0",
      journal: "Nature Reviews Earth & Environment",
      year: "2024",
      researchName: "Wind-Wave Climate"
    },
    {
      image: research1,
      title: "Assessing the Impact of Climate Modes on Extreme Arctic Sea Ice Using Reanalysis Data",
      description: "Investigating how major climate patterns like ENSO and NAO influence extreme Arctic sea ice events using comprehensive reanalysis datasets. Our work improves polar climate predictions and understanding of cryosphere-atmosphere interactions.",
      buttonText: "Read Publication",
      buttonLink: "https://doi.org/10.1002/joc.70121",
      journal: "International Journal of Climatology",
      year: "2025",
      researchName: "Arctic Climate Dynamics"
    },
    {
      image: research4,
      title: "Assessment and future projections of storm surge using CMIP6 models in the Indo-Pacific region",
      description: "Evaluating current storm surge risks and projecting future coastal flooding scenarios across the Indo-Pacific using state-of-the-art CMIP6 climate models. Our research helps coastal communities prepare for climate change impacts.",
      buttonText: "Read Publication",
      buttonLink: "https://doi.org/10.1016/j.ocemod.2025.102560",
      journal: "Ocean Modelling",
      year: "2025",
      researchName: "Coastal Wave Climate Analysis & Prediction"
    },
    {
      image: research7,
      title: "Bridging the Climate Gap: Multimodel Framework With Explainable Decision-Making for IOD and ENSO Forecasting",
      description: "Developing an innovative multi-model framework with explainable AI for improved IOD and ENSO predictions. Our approach enhances climate forecasting transparency and reliability for seasonal predictions.",
      buttonText: "Read Publication",
      buttonLink: "https://doi.org/10.1109/TAI.2024.3489535",
      journal: "IEEE Transactions on Artificial Intelligence",
      year: "2025",
      researchName: "Climate Prediction Using AI/ML"
    },
    {
      image: research6,
      title: "Extreme wave height response to climate modes and its association with tropical cyclones over the Indo-Pacific Ocean",
      description: "Assessing climate mode effects on dangerous wave conditions and their correlation with tropical cyclones. Our research enhances coastal risk prediction and marine safety across vulnerable regions.",
      buttonText: "Read Publication",
      buttonLink: "https://doi.org/10.1016/j.oceaneng.2024.116789",
      journal: "Ocean Engineering",
      year: "2024",
      researchName: "Tropical Cyclone Analysis"
    },
    {
      image: research5,
      title: "Global future heat stress projections: Regional variations of Humidex changes from high-resolution CMIP6 models",
      description: "Predicting future heat stress impacts globally with fine-scale regional Humidex analysis using advanced CMIP6 climate projections. Our work identifies vulnerable populations and informs adaptation strategies.",
      buttonText: "Read Publication",
      buttonLink: "https://doi.org/10.1016/j.atmosres.2025.108367",
      journal: "Atmospheric Research",
      year: "2025",
      researchName: "Extreme Heat Stress Analysis"
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
        <div className="relative rounded-2xl overflow-hidden shadow-2xl h-64 group">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${bg})` }}
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative h-full flex items-center justify-center text-center p-8">
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                Welcome to{" "}
                <span className="inline-block">
                  <TypingAnimation text="CLIMATE" speed={150} />
                  {/* Cursor blinking effect */}
                  <span className="ml-1 animate-pulse">|</span>
                </span>
              </h1>
              <p 
                className={`text-xl text-white/90 transition-all duration-500 ${
                  showSubtitle ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                Climate Lab for Intelligent Modeling, Analytics, Technology & Environment
              </p>
            </div>
          </div>
        </div>

        {/* Featured Publications Slider */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[500px] group">
          {/* Slides */}
          {researchSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {/* Main content container */}
              <div className="flex h-full">
                {/* Left side - Text content */}
                <div className="w-1/2 bg-gradient-to-r from-background/95 to-background/80 flex items-center">
                  <div className="max-w-md p-8 h-full flex flex-col justify-center">
                    {slide.researchName && (
                      <div className="mb-3 animate-fade-in">
                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                          {slide.researchName}
                        </span>
                      </div>
                    )}
                    <h1 className="text-2xl font-bold mb-4 animate-fade-in leading-tight">
                      {slide.title}
                    </h1>
                    {slide.journal && (
                      <div className="flex items-center gap-3 mb-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
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
                        <Link 
                          to={slide.buttonLink} 
                          target={slide.buttonLink.includes('http') ? '_blank' : '_self'}
                        >
                          {slide.buttonText}
                          <ArrowRight className="h-4 w-4" />
                        </Link>
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
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-background/80 hover:bg-background text-foreground p-3 rounded-full transition-all opacity-0 group-hover:opacity-100 shadow-lg z-10"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-background/80 hover:bg-background text-foreground p-3 rounded-full transition-all opacity-0 group-hover:opacity-100 shadow-lg z-10"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Slide Indicators */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
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
          <div className="absolute bottom-0 left-0 w-full h-1 bg-primary/20 z-10">
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