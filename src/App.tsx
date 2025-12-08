// import { Toaster } from "@/components/ui/toaster";
// import { Toaster as Sonner } from "@/components/ui/sonner";
// import { TooltipProvider } from "@/components/ui/tooltip";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
// import { AppSidebar } from "@/components/AppSidebar";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Gallery from "./pages/Gallery";
// import Awards from "./pages/Awards";
// import Research from "./pages/Research";
// import Positions from "./pages/Positions";
// import Projects from "./pages/Projects";
// import Resources from "./pages/Resources";
// import Academic from "./pages/Academic";
// import Publications from "./pages/Publications";
// import InvitedTalks from "./pages/InvitedTalks";
// import Workshop from "./pages/Workshop";
// import Team from "./pages/Team";
// import Contact from "./pages/Contact";
// import NotFound from "./pages/NotFound";
// // import logo from "/logo.png"; // Import logo from src/assets
// import Alumni from "./pages/Alumni";
// import logo from "./assets/logo.png"; // Adjust the path as necessary

// const queryClient = new QueryClient();

// const App = () => (
//   <QueryClientProvider client={queryClient}>
//     <TooltipProvider>
//       <Toaster />
//       <Sonner />
//       <BrowserRouter>
//         <SidebarProvider>
//           <div className="min-h-screen flex w-full">
//             <AppSidebar />
//             <div className="flex-1 flex flex-col">
//               {/* <header className="sticky top-0 z-10 bg-background border-b px-4 py-3 flex items-center gap-2">
//                 <SidebarTrigger />
//                 <h1 className="text-lg font-semibold">CLIMATE INTELLIGENCE AND SIMULATION
//                 RESEARCH LAB</h1>
//               </header> */}
//               <header className="sticky top-0 z-10 bg-background border-b px-4 py-3 flex items-center gap-2">
//                 <SidebarTrigger />
//                 <div className="flex items-center gap-3">
//                   <img 
//                     src={logo} // Use the imported logo
//                     alt="Climate Research Lab Logo"
//                     className="h-10 w-10 object-contain" // Adjust size as needed
//                   />
//                   <h1 className="text-lg font-semibold">Climate Lab for Intelligent Modeling Analytics Technology & Environment (CLIMATE)</h1>
//                 </div>
//               </header>
//               <main className="flex-1 p-8 bg-gradient-to-br from-background via-background to-secondary/10">
//                 <Routes>
//                   <Route path="/" element={<Home />} />
//                   <Route path="/about" element={<About />} />
//                   <Route path="/gallery" element={<Gallery />} />
//                   <Route path="/awards" element={<Awards />} />
//                   <Route path="/research" element={<Research />} />
//                   <Route path="/positions" element={<Positions />} />
//                   <Route path="/projects" element={<Projects />} />
//                   <Route path="/resources" element={<Resources />} />
//                   <Route path="/academic" element={<Academic />} />
//                   <Route path="/publications" element={<Publications />} />
//                   <Route path="/invited-talks" element={<InvitedTalks />} />
//                   <Route path="/workshop" element={<Workshop />} />
//                   <Route path="/team" element={<Team />} />
//                   // In your App.tsx or routing setup
//                   <Route path="/alumni" element={<Alumni />} />
//                   <Route path="/contact" element={<Contact />} />
//                   {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
//                   <Route path="*" element={<NotFound />} />
//                 </Routes>
//               </main>
//             </div>
//           </div>
//         </SidebarProvider>
//       </BrowserRouter>
//     </TooltipProvider>
//   </QueryClientProvider>
// );

// export default App;

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Awards from "./pages/Awards";
import Research from "./pages/Research";
import Positions from "./pages/Positions";
import Projects from "./pages/Projects";
import Resources from "./pages/Resources";
import Academic from "./pages/Academic";
import ThesisGuided from "./pages/ThesisGuided";
import Publications from "./pages/Publications";
import InvitedTalks from "./pages/InvitedTalks";
import Workshop from "./pages/Workshop";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Alumni from "./pages/Alumni";
import logo from "./assets/logo.png";
import Footer from "./components/Footer";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SidebarProvider>
          {/* Main container - full viewport */}
          <div className="min-h-screen w-full">
            {/* Content wrapper */}
            <div className="flex min-h-screen">
              {/* Sidebar */}
              <AppSidebar />
              
              {/* Main content area - takes remaining space */}
              <div className="flex-1 flex flex-col min-w-0">
                {/* Header */}
                <header className="sticky top-0 z-10 bg-background border-b px-0 py-0 flex items-center gap-2">
                  <SidebarTrigger />
                  {/* <div className="flex items-center gap-3">
                    <img 
                      src={logo}
                      alt="Climate Research Lab Logo"
                      className="h-10 w-10 object-contain"
                    />
                    <h1 className="text-lg font-semibold">Climate Lab for Intelligent Modeling Analytics Technology & Environment (CLIMATE)</h1>
                  </div> */}
                </header>
                
                {/* Main content */}
                <main className="flex-1 p-8 bg-gradient-to-br from-background via-background to-secondary/10">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/awards" element={<Awards />} />
                    <Route path="/research" element={<Research />} />
                    <Route path="/positions" element={<Positions />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/resources" element={<Resources />} />
                    <Route path="/thesis-guided" element={<ThesisGuided />} />
                    <Route path="/academic" element={<Academic />} />
                    <Route path="/publications" element={<Publications />} />
                    <Route path="/invited-talks" element={<InvitedTalks />} />
                    <Route path="/workshop" element={<Workshop />} />
                    <Route path="/team" element={<Team />} />
                    <Route path="/alumni" element={<Alumni />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </main>
                
                {/* Footer - inside main content area but full width */}
                <div className="w-full">
                  <Footer />
                </div>
              </div>
            </div>
          </div>
        </SidebarProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;