// import { Card, CardContent } from "@/components/ui/card";
// import im1 from "@/assets/im1.jpg";
// import im2 from "@/assets/im2.jpeg";
// import im3 from "@/assets/im3.jpg";
// import im4 from "@/assets/im4.jpg";
// import im5 from "@/assets/im5.jpg";
// import im6 from "@/assets/im6.jpg";
// import im7 from "@/assets/im7.jpg";
// import im8 from "@/assets/im8.jpeg";
// import im9 from "@/assets/im9.jpg";
// import im10 from "@/assets/im10.jpeg";
// import im11 from "@/assets/im11.jpeg";
// import im12 from "@/assets/im12.jpeg";
// import im13 from "@/assets/im13.jpeg";
// import im14 from "@/assets/im14.jpeg";

// const Gallery = () => {
//   const images = [
//     { src: im1 },
//     { src: im2 },
//     { src: im3 },
//     { src: im4 },
//     { src: im5 },
//     { src: im6 },
//     { src: im7 },
//     { src: im8 },
//     { src: im9 },
//     { src: im10 },
//     { src: im11 },
//     { src: im12 },
//     { src: im13 },
//     { src: im14 },
//   ];

//   return (
//     <div className="max-w-6xl mx-auto animate-fade-in">
//       <h1 className="text-4xl font-bold mb-6">Gallery</h1>
      
//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {images.map((image, index) => (
//           <Card 
//             key={index} 
//             className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105"
//             style={{ animationDelay: `${index * 0.1}s` }}
//           >
//             <CardContent className="p-0">
//               <div className="w-full h-64 overflow-hidden">
//                 <img
//                   src={image.src}
//                   alt={`Gallery image ${index + 1}`}
//                   className="w-full h-full object-contain bg-gray-100"
//                   loading="lazy"
//                   onError={(e) => {
//                     // Fallback if image fails to load
//                     e.currentTarget.style.display = 'none';
//                     e.currentTarget.parentElement.innerHTML = `
//                       <div class="w-full h-full flex items-center justify-center bg-gray-200">
//                         <span class="text-gray-500">Image not available</span>
//                       </div>
//                     `;
//                   }}
//                 />
//               </div>
//             </CardContent>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Gallery;


import { Card, CardContent } from "@/components/ui/card";
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
  // Highlight images - select your best/most important images
  const highlightImages = [
    { src: im1, title: "Lab Research" },
    { src: im2, title: "Team Collaboration" },
    { src: im3, title: "Field Work" },
    { src: im4, title: "Data Analysis" },
  ];

  // All gallery images
  const galleryImages = [
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
      
      {/* Highlights Section */}
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-primary mb-2">Highlights</h2>
          <p className="text-muted-foreground">Featured moments from our research journey</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlightImages.map((image, index) => (
            <Card 
              key={`highlight-${index}`}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0 relative">
                <div className="w-full h-80 overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                {/* Overlay with title */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <h3 className="text-white font-semibold text-lg">{image.title}</h3>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Full Gallery Section */}
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-primary mb-2">Full Gallery</h2>
          <p className="text-muted-foreground">Complete collection of our research activities and team moments</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <Card 
              key={index} 
              className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                <div className="w-full h-64 overflow-hidden">
                  <img
                    src={image.src}
                    alt={`Gallery image ${index + 1}`}
                    className="w-full h-full object-contain bg-gray-100"
                    loading="lazy"
                    onError={(e) => {
                      // Fallback if image fails to load
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement.innerHTML = `
                        <div class="w-full h-full flex items-center justify-center bg-gray-200">
                          <span class="text-gray-500">Image not available</span>
                        </div>
                      `;
                    }}
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;