// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import { Download, Mail } from "lucide-react";

// interface StudentCardProps {
//   name: string;
//   program: string;
//   year: string;
//   researchArea: string;
//   email: string;
//   photo: string;
//   resumeUrl?: string;
// }

// const StudentCard = ({ name, program, year, researchArea, email, photo }: StudentCardProps) => {
//   return (
//     <Card className="hover:shadow-lg transition-shadow">
//       <CardContent className="p-6">
//         <div className="flex flex-col items-center text-center">
//           <img
//             src={photo}
//             alt={name}
//             className="w-32 h-32 rounded-full object-cover mb-4"
//           />
//           <h3 className="text-xl font-bold mb-1">{name}</h3>
//           <Badge variant="secondary" className="mb-2">{program}</Badge>
//           <p className="text-sm text-muted-foreground mb-3">{year}</p>
          
//           <div className="w-full mb-4">
//             <p className="text-sm font-semibold mb-1">Research Area</p>
//             <p className="text-sm text-muted-foreground">{researchArea}</p>
//           </div>

//           <div className="flex gap-2 w-full">
//             <Button variant="outline" size="sm" className="flex-1" asChild>
//               <a href={`mailto:${email}`}>
//                 <Mail className="h-4 w-4 mr-2" />
//                 Email
//               </a>
//             </Button>
//             <Button variant="outline" size="sm" className="flex-1">
              
//               <Download className="h-4 w-4 mr-2" />
//               Resume
//             </Button>
//           </div>
//         </div>
//       </CardContent>
//     </Card>
//   );
// };

// export default StudentCard;


// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import { Download, Mail } from "lucide-react";

// interface StudentCardProps {
//   name: string;
//   program: string;
//   year: string;
//   researchArea: string;
//   email: string;
//   photo: string;
//   resumeUrl?: string; // Make sure this prop is used
// }

// const StudentCard = ({ 
//   name, 
//   program, 
//   year, 
//   researchArea, 
//   email, 
//   photo, 
//   resumeUrl 
// }: StudentCardProps) => {
  
//   const handleDownloadResume = () => {
//     if (resumeUrl) {
//       // Create a temporary anchor tag to trigger download
//       const link = document.createElement('a');
//       link.href = resumeUrl;
//       link.download = `${name.replace(/\s+/g, '_')}_Resume.pdf`; // You can customize the filename
//       document.body.appendChild(link);
//       link.click();
//       document.body.removeChild(link);
//     }
//   };

//   return (
//     <Card className="hover:shadow-lg transition-shadow">
//       <CardContent className="p-6">
//         <div className="flex flex-col items-center text-center">
//           <img
//             src={photo}
//             alt={name}
//             className="w-32 h-32 rounded-full object-cover mb-4"
//           />
//           <h3 className="text-xl font-bold mb-1">{name}</h3>
//           <Badge variant="secondary" className="mb-2">{program}</Badge>
//           <p className="text-sm text-muted-foreground mb-3">{year}</p>
          
//           <div className="w-full mb-4">
//             <p className="text-sm font-semibold mb-1">Research Area</p>
//             <p className="text-sm text-muted-foreground">{researchArea}</p>
//           </div>

//           <div className="flex gap-2 w-full">
//             <Button variant="outline" size="sm" className="flex-1" asChild>
//               <a href={`mailto:${email}`}>
//                 <Mail className="h-4 w-4 mr-2" />
//                 Email
//               </a>
//             </Button>
//             <Button 
//               variant="outline" 
//               size="sm" 
//               className="flex-1"
//               onClick={handleDownloadResume}
//               disabled={!resumeUrl} // Disable if no resume URL
//             >
//               <Download className="h-4 w-4 mr-2" />
//               Resume
//             </Button>
//           </div>
//         </div>
//       </CardContent>
//     </Card>
//   );
// };

// export default StudentCard;

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Mail, Linkedin, ExternalLink } from "lucide-react";

interface StudentCardProps {
  name: string;
  program: string;
  year: string;
  researchArea: string;
  email: string;
  photo: string;
  resumeUrl?: string;
  linkedinUrl?: string; // Add LinkedIn URL prop
}

const StudentCard = ({ 
  name, 
  program, 
  year, 
  researchArea, 
  email, 
  photo, 
  resumeUrl,
  linkedinUrl 
}: StudentCardProps) => {
  
  const handleDownloadResume = () => {
    if (resumeUrl) {
      const link = document.createElement('a');
      link.href = resumeUrl;
      link.download = `${name.replace(/\s+/g, '_')}_Resume.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const handleLinkedInClick = () => {
    if (linkedinUrl) {
      window.open(linkedinUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <Card className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02] group">
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center">
          {/* Profile Image */}
          <div className="relative mb-4">
            <img
              src={photo}
              alt={name}
              className="w-32 h-32 rounded-full object-cover border-4 border-background group-hover:border-primary transition-colors duration-300"
            />
            {/* LinkedIn Badge */}
            {linkedinUrl && (
              <div className="absolute -bottom-2 -right-2 bg-blue-600 text-white p-1.5 rounded-full shadow-lg">
                <Linkedin className="h-4 w-4" />
              </div>
            )}
          </div>

          {/* Student Info */}
          <h3 className="text-xl font-bold mb-1">{name}</h3>
          <Badge variant="secondary" className="mb-2">{program}</Badge>
          <p className="text-sm text-muted-foreground mb-3">{year}</p>
          
          {/* Research Area */}
          <div className="w-full mb-4">
            <p className="text-sm font-semibold mb-1">Research Area</p>
            <p className="text-sm text-muted-foreground">{researchArea}</p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-2 w-full">
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="flex-1" asChild>
                <a href={`mailto:${email}`}>
                  <Mail className="h-4 w-4 mr-2" />
                  Email
                </a>
              </Button>
              
              {/* LinkedIn Button */}
              {linkedinUrl && (
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex-1 bg-blue-50 hover:bg-blue-100 border-blue-200 text-blue-700 hover:text-blue-800"
                  onClick={handleLinkedInClick}
                >
                  <Linkedin className="h-4 w-4 mr-2" />
                  LinkedIn
                </Button>
              )}
            </div>
            
            {/* Resume Button - Full Width */}
            <Button 
              variant="outline" 
              size="sm" 
              className="w-full"
              onClick={handleDownloadResume}
              disabled={!resumeUrl}
            >
              <Download className="h-4 w-4 mr-2" />
              Download Resume
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StudentCard;