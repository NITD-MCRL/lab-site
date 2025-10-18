import { Card, CardContent } from "@/components/ui/card";
import labHero from "@/assets/lab-hero.jpg";
import professorImage from "@/assets/professor.jpg";
import student1 from "@/assets/student1.jpg";
import student2 from "@/assets/student2.jpg";
import student3 from "@/assets/student3.jpg";
import student4 from "@/assets/student4.jpg";

const Gallery = () => {
  const images = [
    { src: labHero, title: "Climate Research Lab" },
    { src: professorImage, title: "Lab Meeting" },
    { src: student1, title: "Field Research" },
    { src: student2, title: "Data Analysis" },
    { src: student3, title: "Conference Presentation" },
    { src: student4, title: "Team Collaboration" },
  ];

  return (
    <div className="max-w-6xl mx-auto animate-fade-in">
      <h1 className="text-4xl font-bold mb-6">Gallery</h1>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <Card 
            key={index} 
            className="overflow-hidden hover:shadow-xl transition-all duration-300 hover-scale"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <CardContent className="p-0">
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <p className="font-semibold text-center">{image.title}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
