
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Link } from "react-router"

const shopCategories = {
  "SHOP BY CATEGORY": [
    "2025 DAILY / WEEKLY PLANNERS",
    "NOTEBOOKS & JOURNALS",
    "ORGANISERS & REFILLS",
    "OBJECTS & ACCESSORIES",
    "MEMO BLOCKS & INDEX CARDS",
  ],
  "SHOP BY SIZE": [
    "SMALL / A6 SIZED NOTEBOOKS",
    "MEDIUM / A5 SIZED NOTEBOOKS",
    "LARGE / B5 SIZED NOTEBOOKS",
    "X - LARGE / A4 SIZED NOTEBOOKS",
  ],
  "GIFT BOXES": ["MYPAPERCLIP X PLATINUM Japan", "MYPAPERCLIP X KARL-JOEL LARSSON", "MYPAPERCLIP X SHIVAN & NARRESH"],
  "SPECIAL PRICES": ["BUY MORE SAVE MORE"],
}

export function ShopMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="group relative flex items-center gap-1 text-sm font-medium tracking-wide text-neutral-900">
            <Link to="/shop">
              SHOP
            </Link>
            <span className="absolute -top-[2px] left-0 h-[2px] w-full bg-black scale-x-0 transition-transform group-hover:scale-x-100" />
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="fixed left-0 right-0 border-t border-neutral-200 bg-[#f5f5f5]">
              <div className="mx-auto max-w-[1400px] px-6 py-8">
                <div className="grid grid-cols-4 gap-8">
                  {Object.entries(shopCategories).map(([category, items]) => (
                    <div key={category}>
                      <h3 className="mb-4 text-sm font-medium text-neutral-800">{category}</h3>
                      <ul className="space-y-3">
                        {items.map((item) => (
                          <li key={item}>
                            <a href="#" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
                              {item}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

