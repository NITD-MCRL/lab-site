import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger, DialogClose } from "@/components/ui/dialog";
import { X } from "lucide-react";
import im1 from "@/assets/im1.jpg";
import im2 from "@/assets/im2.jpeg";
import im3 from "@/assets/im3.jpg";
import im4 from "@/assets/im4.jpg";
import im5 from "@/assets/im5.jpg";
import im6 from "@/assets/im6.jpg";
import im7 from "@/assets/im7.jpg";
import im8 from "@/assets/im8.jpeg";
import im9 from "@/assets/im9.jpg";
import im10 from "@/assets/im10.jpeg";
import im11 from "@/assets/im11.jpeg";
import im12 from "@/assets/im12.jpeg";
import im13 from "@/assets/im13.jpeg";
import im14 from "@/assets/im14.jpeg";

const Gallery = () => {
  // All gallery images combined
  const galleryImages = [
    { src: im1 },
    { src: im2 },
    { src: im3 },
    { src: im4 },
    { src: im5 },
    { src: im6 },
    { src: im7 },
    { src: im8 },
    { src: im9 },
    { src: im10 },
    { src: im11 },
    { src: im12 },
    { src: im13 },
    { src: im14 },
  ];

  return (
    <div className="max-w-6xl mx-auto animate-fade-in space-y-12">
      <h1 className="text-4xl font-bold mb-6">Gallery</h1>
      
      {/* Gallery Section */}
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-primary mb-2">Research Gallery</h2>
          <p className="text-muted-foreground">Collection of our research activities, team moments, and fieldwork</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 group cursor-pointer">
                  <CardContent className="p-0">
                    <div className="w-full aspect-square overflow-hidden bg-gray-100">
                      <img
                        src={image.src}
                        alt={`Gallery image ${index + 1}`}
                        className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                        onError={(e) => {
                          const parent = e.currentTarget.parentElement;
                          if (parent) {
                            parent.innerHTML = `
                              <div class="w-full h-full flex items-center justify-center bg-gray-200">
                                <span class="text-gray-500">Image not available</span>
                              </div>
                            `;
                          }
                        }}
                      />
                    </div>
                  </CardContent>
                </Card>
              </DialogTrigger>
              
              <DialogContent className="max-w-4xl w-full p-0 bg-transparent border-none">
                <div className="relative bg-white rounded-lg overflow-hidden">
                  <DialogClose className="absolute top-4 right-4 z-50 bg-black hover:bg-gray-800 text-white p-2 rounded-full transition-colors">
                    <X className="h-6 w-6" />
                  </DialogClose>
                  <div className="max-h-[80vh] max-w-4xl flex items-center justify-center p-4">
                    <img
                      src={image.src}
                      alt={`Gallery image ${index + 1}`}
                      className="max-h-full max-w-full object-contain rounded-lg"
                    />
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;