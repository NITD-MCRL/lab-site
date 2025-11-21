import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Microscope, BookOpen, Users, ChevronLeft, ChevronRight, Megaphone } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import labHero from "@/assets/lab-hero.jpg";
import professorImage from "@/assets/professor.jpg";
import research1 from "@/assets/research-1.jpeg";
import research2 from "@/assets/research-2.jpeg";
import research4 from "@/assets/research-4.jpeg";
import research5 from "@/assets/research-5.jpeg";
import research6 from "@/assets/research-6.jpeg";
import research7 from "@/assets/research-7.jpeg";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

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
      image: labHero,
      title: "CLIMATE INTELLIGENCE AND SIMULATION RESEARCH LAB",
      description: "Advancing climate science through innovative research, cutting-edge technology, and collaborative solutions for a sustainable future.",
      buttonText: "Learn More",
      buttonLink: "/about"
    },
    {
      image: research2,
      title: "Wind-wave climate changes and their impacts",
      description: "Investigating global changes in ocean wind-wave patterns and their profound impacts on coastal erosion, marine ecosystems, and coastal infrastructure worldwide.",
      buttonText: "Read Publication",
      buttonLink: "https://doi.org/10.1038/s43017-023-00502-0",
      journal: "Nature Reviews Earth & Environment",
      year: "2024"
    },
    {
      image: research1,
      title: "Assessing the Impact of Climate Modes on Extreme Arctic Sea Ice",
      description: "Investigating how major climate patterns like ENSO and NAO influence extreme Arctic sea ice events using comprehensive reanalysis datasets.",
      buttonText: "Read Publication",
      buttonLink: "https://doi.org/10.1002/joc.70121",
      journal: "International Journal of Climatology",
      year: "2025"
    },
    {
      image: research4,
      title: "Storm surge assessment using CMIP6 models",
      description: "Evaluating current storm surge risks and projecting future coastal flooding scenarios across the Indo-Pacific using CMIP6 climate models.",
      buttonText: "Read Publication",
      buttonLink: "https://doi.org/10.1016/j.ocemod.2025.102560",
      journal: "Ocean Modelling",
      year: "2025"
    },
    {
      image: research7,
      title: "Bridging the Climate Gap for IOD and ENSO Forecasting",
      description: "Developing an innovative multi-model framework with explainable AI for improved IOD and ENSO predictions.",
      buttonText: "Read Publication",
      buttonLink: "https://doi.org/10.1109/TAI.2024.3489535",
      journal: "IEEE Transactions on Artificial Intelligence",
      year: "2025"
    },
    {
      image: research6,
      title: "Extreme wave height response to climate modes",
      description: "Assessing climate mode effects on dangerous wave conditions and their correlation with tropical cyclones.",
      buttonText: "Read Publication",
      buttonLink: "https://doi.org/10.1016/j.oceaneng.2024.116789",
      journal: "Ocean Engineering",
      year: "2024"
    },
    {
      image: research5,
      title: "Global future heat stress projections",
      description: "Predicting future heat stress impacts globally with regional Humidex analysis using advanced CMIP6 models.",
      buttonText: "Read Publication",
      buttonLink: "https://doi.org/10.1016/j.atmosres.2025.108367",
      journal: "Atmospheric Research",
      year: "2025"
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

  return (
    <div className="space-y-6 animate-fade-in">
      {/* News Marquee Section */}
      <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-3">
          <div className="flex items-center gap-2 bg-primary text-primary-foreground px-3 py-1 rounded-full">
            <Megaphone className="h-4 w-4" />
            <span className="text-sm font-semibold">NEWS & UPDATES</span>
          </div>
          <Button asChild variant="outline" size="sm" className="ml-auto">
            <Link to="/positions">View All Positions</Link>
          </Button>
        </div>
        
        <div className="relative overflow-hidden">
          <div className="animate-marquee whitespace-nowrap">
            {newsItems.map((item, index) => (
              <Link
                key={item.id}
                to={item.link}
                className="inline-block mx-8 text-lg font-medium text-primary hover:text-primary/80 hover:underline transition-colors"
              >
                {item.text}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Hero Section - Image Slider with Left Text & Right Image */}
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
                <div className="max-w-md p-8">
                  <h1 className="text-2xl font-bold mb-4 animate-fade-in leading-tight line-clamp-3">
                    {slide.title}
                  </h1>
                  {slide.journal && (
                    <div className="flex items-center gap-3 mb-3 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold line-clamp-1">
                        {slide.journal}
                      </span>
                      <span className="text-muted-foreground text-sm font-medium">
                        {slide.year}
                      </span>
                    </div>
                  )}
                  <p className="text-base text-muted-foreground mb-6 animate-fade-in leading-relaxed line-clamp-3" style={{ animationDelay: '0.2s' }}>
                    {slide.description}
                  </p>
                  <div className="flex gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
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
              <p className="text-muted-foreground leading-relaxed mb-4">
                Dr. Prashant Kumar is a distinguished climate researcher and Associate Professor at
                National Institute of Technology Delhi, currently serving as Controller of Examination.
                With over 20 years of research experience, he specializes in climate modeling, ocean-atmosphere
                interactions, and polar climate change. Dr. Kumar has authored more than 150 peer-reviewed publications
                and led multiple nationally funded research projects. His interdisciplinary work bridges applied mathematics
                and environmental science to develop predictive models for climate variability and coastal dynamics. Passionate
                about sustainable development, he continues to mentor researchers and contribute to national-level climate resilience strategies.
              </p>
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
  );
};

export default Home;
