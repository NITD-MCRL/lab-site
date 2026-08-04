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
import im15 from "@/assets/15.jpeg";
import im16 from "@/assets/im16.jpg";

import img_01 from "@/assets/gallery/img_01.jpg";
import img_02 from "@/assets/gallery/img_02.jpg";
import img_03 from "@/assets/gallery/img_03.jpg";
import img_04 from "@/assets/gallery/img_04.jpg";
import img_05 from "@/assets/gallery/img_05.jpg";
import img_06 from "@/assets/gallery/img_06.jpg";
import img_07 from "@/assets/gallery/img_07.jpg";
import img_08 from "@/assets/gallery/img_08.jpg";
import img_09 from "@/assets/gallery/img_09.jpg";
import img_10 from "@/assets/gallery/img_10.jpg";
import img_11 from "@/assets/gallery/img_11.jpg";
import img_12 from "@/assets/gallery/img_12.jpg";
import img_13 from "@/assets/gallery/img_13.jpg";
import img_14 from "@/assets/gallery/img_14.jpg";
// import img_15 from "@/assets/gallery/img_15.jpg";
import img_16 from "@/assets/gallery/img_16.jpg";
import img_17 from "@/assets/gallery/img_17.jpg";
import img_18 from "@/assets/gallery/img_18.jpg";
import img_19 from "@/assets/gallery/img_19.jpg";
import img_20 from "@/assets/gallery/img_20.jpg";
import img_21 from "@/assets/gallery/img_21.jpg";
import img_22 from "@/assets/gallery/img_22.jpg";




const Gallery = () => {
  // All gallery images combined
  const galleryImages = [
    // { src: im1 },
    // { src: im2 },
    { src: im11 },
    { src: im3 },
    // { src: im4 },
    { src: im5 },
    { src: im6 },
    { src: im7 },
    { src: im8 },
    { src: im9 },
    { src: im10 },
    
    { src: im12 },
    { src: im13 },
    { src: im15 },
    { src: im16 },
    { src: img_01 },
    // { src: img_02 },
    // { src: img_03 },
    // { src: img_04 },
    { src: img_05 },
    { src: img_06 },
    // { src: img_07 },
    // { src: img_08 },
    { src: img_09 },
    { src: img_10 },
    { src: img_11 },
    { src: img_12 },
    { src: img_13 },
    { src: img_14 },
    // { src: img_15 },
    { src: img_16 },
    { src: img_17 },
    { src: img_18 },
    { src: img_19 },
    { src: img_20 },
    { src: img_21 },
    // { src: img_22 },
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
                      style={{ maxHeight: "500px" }}
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