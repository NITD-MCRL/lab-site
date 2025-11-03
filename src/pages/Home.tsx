import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Microscope, BookOpen, Users, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import labHero from "@/assets/lab-hero.jpg";
import professorImage from "@/assets/professor.jpg";
import research1 from "@/assets/research-1.jpg"; // Add your research images
import research2 from "@/assets/research-2.jpg";
import research3 from "@/assets/research-3.jpg";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const researchSlides = [
    {
      image: labHero,
      title: "CLIMATE INTELLIGENCE AND SIMULATION RESEARCH LAB",
      description: "Advancing climate science through innovative research, cutting-edge technology, and collaborative solutions for a sustainable future.",
      buttonText: "Learn More",
      buttonLink: "/about"
    },
    {
      image: research1,
      title: "Cyclone Analysis Research",
      description: "Studying extreme weather patterns using satellite data and statistical modeling to predict and mitigate climate impacts.",
      buttonText: "View Research",
      buttonLink: "/research/cyclone"
    },
    {
      image: research2,
      title: "Data Science & Modeling",
      description: "Applying advanced statistical models and machine learning to solve complex environmental challenges.",
      buttonText: "Explore Projects",
      buttonLink: "/projects"
    },
    {
      image: research3,
      title: "Field Research & Innovation",
      description: "Ground-breaking fieldwork combined with technological innovation to address pressing climate issues.",
      buttonText: "See Innovations",
      buttonLink: "/innovations"
    }
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
    <div className="space-y-12 animate-fade-in">
      {/* Hero Section - Image Slider */}
      <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[500px] group">
        {/* Slides */}
        {researchSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-transparent flex items-center">
              <div className="max-w-2xl p-12">
                <h1 className="text-5xl font-bold mb-4 animate-fade-in">
                  {slide.title}
                </h1>
                <p className="text-xl text-muted-foreground mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                  {slide.description}
                </p>
                <div className="flex gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                  <Button asChild size="lg" className="gap-2">
                    <Link to={slide.buttonLink}>
                      {slide.buttonText}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link to="/contact">Contact Us</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-background/80 hover:bg-background text-foreground p-3 rounded-full transition-all opacity-0 group-hover:opacity-100 shadow-lg"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-background/80 hover:bg-background text-foreground p-3 rounded-full transition-all opacity-0 group-hover:opacity-100 shadow-lg"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
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
        <div className="absolute bottom-0 left-0 w-full h-1 bg-primary/20">
          <div 
            className="h-full bg-primary transition-all duration-5000 ease-linear"
            style={{ 
              width: `${((currentSlide + 1) / researchSlides.length) * 100}%` 
            }}
          />
        </div>
      </div>

      {/* Rest of your existing code remains the same */}
      {/* Professor Introduction */}
      <Card className="hover:shadow-xl transition-all duration-300">
        <CardContent className="p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="animate-fade-in">
              <img
                src={professorImage}
                alt="Dr Prashant Kumar"
                className="rounded-lg w-full object-cover aspect-[4/3] shadow-lg"
              />
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
              {/* <Button asChild className="gap-2">
                <Link to="/about">
                  View Full Profile
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button> */}
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