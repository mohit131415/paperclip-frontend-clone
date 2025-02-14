import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";

const menuItems = [
  { name: "VIEW POSSIBILITIES", link: "/view-possibilities" },
  { name: "PAST PROJECTS", link: "/past-projects" },
  { name: "MY QUESTIONS", link: "/my-questions" },
];

export function CustomProjectsMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="group relative text-sm font-medium tracking-wide text-neutral-900">
            <Link to="/custom-projects">CUSTOM PROJECTS</Link>
            <span className="absolute -top-[2px] left-0 h-[2px] w-full bg-black scale-x-0 transition-transform group-hover:scale-x-100" />
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="w-48 bg-[#f5f5f5] p-4">
              <ul className="space-y-4">
                {menuItems.map(({ name, link }) => (
                  <li key={name}>
                    <Link to={link} className="block text-sm text-neutral-500 hover:text-neutral-900 transition-colors">
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
