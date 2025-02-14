import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";

const menuItems = [
  { label: "MYPAPERCLIP X PLATINUM Japan", path: "/shop" },
  { label: "MYPAPERCLIP X INDUS PEOPLE", path: "/collaborations/indus-people" },
  { label: "MYPAPERCLIP X SHIVAN & NARRESH", path: "/shop" },
  { label: "MYPAPERCLIP X KARL-JOEL LARSSON", path: "/shop" },
];

export function CollaborationsMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="group relative text-sm font-medium tracking-wide text-neutral-900">
            <Link to="/collaborations">COLLABORATIONS</Link>
            <span className="absolute -top-[2px] left-0 h-[2px] w-full bg-black scale-x-0 transition-transform group-hover:scale-x-90" />
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="w-72 bg-[#f5f5f5] p-4">
              <ul className="space-y-4">
                {menuItems.map(({ label, path }) => (
                  <li key={path}>
                    <Link to={path} className="block text-sm text-neutral-500 hover:text-neutral-900 transition-colors">
                      {label}
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
