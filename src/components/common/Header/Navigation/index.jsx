import { cn } from "@/lib/utils"
import { ShopMenu } from "./ShopMenu"
import { CustomProjectsMenu } from "./CustomProjectsMenu"
import { CollaborationsMenu } from "./CollaborationsMenu"

export function Navigation({ className }) {
  return (
    <nav className={cn("", className)}>
      <ul className="flex items-center space-x-8">
        <li>
          <ShopMenu />
        </li>
        <li>
          <CustomProjectsMenu />
        </li>
        <li>
          <CollaborationsMenu />
        </li>
        <li className="group relative">
          <a href="/become-reseller" className="text-sm font-medium tracking-wide text-neutral-900 py-2">
            BECOME A RESELLER
            <span className="absolute -top-[2px] left-0 h-[2px] w-full bg-black scale-x-0 transition-transform group-hover:scale-x-100" />
          </a>
        </li>
        <li className="group relative">
          <a href="/contact" className="text-sm font-medium tracking-wide text-neutral-900 py-2">
            GET IN TOUCH
            <span className="absolute -top-[2px] left-0 h-[2px] w-full bg-black scale-x-0 transition-transform group-hover:scale-x-100" />
          </a>
        </li>
      </ul>
    </nav>
  )
}

