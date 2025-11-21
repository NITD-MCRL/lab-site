import { Home, User, Image, Award, Search, Briefcase, FolderKanban, BookMarked, GraduationCap, FileText, Presentation, Users as UsersIcon, Mail } from "lucide-react";
import { NavLink } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { Users } from "lucide-react";
const menuItems = [
  { title: "Home", url: "/", icon: Home },
  { title: "About", url: "/about", icon: User },
  { title: "Academic", url: "/academic", icon: GraduationCap },
  { title: "Research", url: "/research", icon: Search },
  { title: "Projects", url: "/projects", icon: FolderKanban },
  { title: "Publications", url: "/publications", icon: FileText },
  { title: "Team", url: "/team", icon: UsersIcon }, // Renamed from "My Students"
  // Add this to your menuItems array
  { title: "Alumni", url: "/alumni",icon: Users}, // or use GraduationCap icon
 
  { title: "Positions", url: "/positions", icon: Briefcase },
  { title: "Conference", url: "/invited-talks", icon: Presentation },
  { title: "Awards", url: "/awards", icon: Award },
 
  // { title: "Resources", url: "/resources", icon: BookMarked },
  { title: "Contact", url: "/contact", icon: Mail },
  { title: "Gallery", url: "/gallery", icon: Image },
];

export function AppSidebar() {
  return (
    <Sidebar className="border-r bg-card">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1 px-2 py-4">
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url}
                      end={item.url === "/"}
                      className={({ isActive }) =>
                        `flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all ${
                          isActive
                            ? "bg-primary text-black font-medium"
                            : "hover:bg-muted"
                        }`
                      }
                    >
                      <item.icon className="h-5 w-5" />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
