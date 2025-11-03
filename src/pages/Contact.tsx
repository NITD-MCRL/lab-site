import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Phone, Globe } from "lucide-react";

// const Contact = () => {
//   return (
//     <div className="max-w-6xl mx-auto animate-fade-in">
//       <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
      
//       <div className="grid md:grid-cols-2 gap-6">
//         <Card className="hover:shadow-lg transition-all duration-300">
//           <CardContent className="p-6">
//             <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
            
//             <form className="space-y-4">
//               <div>
//                 <Label htmlFor="name">Name</Label>
//                 <Input id="name" placeholder="Your name" />
//               </div>
              
//               <div>
//                 <Label htmlFor="email">Email</Label>
//                 <Input id="email" type="email" placeholder="your.email@example.com" />
//               </div>
              
//               <div>
//                 <Label htmlFor="subject">Subject</Label>
//                 <Input id="subject" placeholder="What is this about?" />
//               </div>
              
//               <div>
//                 <Label htmlFor="message">Message</Label>
//                 <Textarea 
//                   id="message" 
//                   placeholder="Your message here..." 
//                   className="min-h-[150px]"
//                 />
//               </div>
              
//               <Button className="w-full">Send Message</Button>
//             </form>
//           </CardContent>
//         </Card>

//         <div className="space-y-6">
//           <Card className="hover:shadow-lg transition-all duration-300">
//             <CardContent className="p-6">
//               <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
              
//               <div className="space-y-4">
//                 <div className="flex items-start gap-3">
//                   <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
//                   <div>
//                     <p className="font-semibold">Email</p>
//                     <p className="text-sm text-muted-foreground">climate.lab@university.edu</p>
//                   </div>
//                 </div>
                
//                 <div className="flex items-start gap-3">
//                   <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
//                   <div>
//                     <p className="font-semibold">Phone</p>
//                     <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
//                   </div>
//                 </div>
                
//                 <div className="flex items-start gap-3">
//                   <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
//                   <div>
//                     <p className="font-semibold">Address</p>
//                     <p className="text-sm text-muted-foreground">
//                       Environmental Science Building<br />
//                       Room 401, 4th Floor<br />
//                       University Campus<br />
//                       City, State 12345
//                     </p>
//                   </div>
//                 </div>
                
//                 <div className="flex items-start gap-3">
//                   <Globe className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
//                   <div>
//                     <p className="font-semibold">Website</p>
//                     <p className="text-sm text-muted-foreground">www.climatelab.university.edu</p>
//                   </div>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>

//           <Card className="hover:shadow-lg transition-all duration-300">
//             <CardContent className="p-6">
//               <h2 className="text-2xl font-bold mb-4">Office Hours</h2>
              
//               <div className="space-y-2">
//                 <div className="flex justify-between">
//                   <span className="font-semibold">Monday - Friday</span>
//                   <span className="text-muted-foreground">9:00 AM - 5:00 PM</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="font-semibold">Saturday</span>
//                   <span className="text-muted-foreground">By Appointment</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="font-semibold">Sunday</span>
//                   <span className="text-muted-foreground">Closed</span>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;

const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto animate-fade-in">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
      
      <div className="grid gap-8">
        <Card className="hover:shadow-lg transition-all duration-300">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-lg">Email</p>
                    <p className="text-muted-foreground">prashantkumar@nitdelhi.ac.in</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-lg">Phone</p>
                    <p className="text-muted-foreground">+91 78350 14011</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-lg">Address</p>
                    <p className="text-sm text-muted-foreground">
                      Admin Block<br />
                      Lab 104, 1st Floor<br />
                      National Institute of Technology Delhi<br />
                      Delhi, India 110036
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Globe className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-lg">Departmental Website</p>
                    <p className="text-muted-foreground">https://nitdelhi.ac.in/applied-sciences/</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-all duration-300">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-6">Office Hours</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="font-semibold text-lg">Monday - Friday</span>
                  <span className="text-muted-foreground font-medium">9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="font-semibold text-lg">Saturday</span>
                  <span className="text-muted-foreground font-medium">By Appointment</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="font-semibold text-lg">Sunday</span>
                  <span className="text-muted-foreground font-medium">Closed</span>
                </div>
              </div>
              
              <div className="bg-muted/50 rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-3">Visit Our Lab</h3>
                <p className="text-muted-foreground">
                  We welcome visitors to our climate research lab. 
                  Please contact us in advance to schedule your visit 
                  and ensure someone is available to show you around.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* <Card className="hover:shadow-lg transition-all duration-300">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-6">Connect With Us</h2>
            
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-4 bg-muted/30 rounded-lg">
                <Mail className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Email Inquiry</h3>
                <p className="text-sm text-muted-foreground">
                  For research collaborations and general inquiries
                </p>
              </div>
              
              <div className="p-4 bg-muted/30 rounded-lg">
                <Phone className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Phone Call</h3>
                <p className="text-sm text-muted-foreground">
                  For urgent matters and scheduled appointments
                </p>
              </div>
              
              <div className="p-4 bg-muted/30 rounded-lg">
                <MapPin className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">In-Person Visit</h3>
                <p className="text-sm text-muted-foreground">
                  Schedule a lab tour or meeting in person
                </p>
              </div>
            </div>
          </CardContent>
        </Card> */}
      </div>
    </div>
  );
};

export default Contact;