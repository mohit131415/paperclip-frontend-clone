import { useState } from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navigation } from "./Navigation"
import { Search } from "./Search"
import { Cart } from "./Cart"
import { cn } from "@/lib/utils"
import Logo from "@/assets/images/logo.png"

export function MainHeader({ className }) {
  const [isProfileOpen, setIsProfileOpen] = useState(false)

  return (
    <div
      className={cn("border-b bg-white", className)}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        {/* Mobile Menu Button */}
        <Button variant="ghost" size="icon" className="lg:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Menu</span>
        </Button>

        {/* Logo */}
        <a href="/" className="flex items-center">
          <img src={Logo} alt="logo" className="h-7! w-[200px]!" />
        </a>

        {/* Navigation */}
        <Navigation className="hidden lg:block" />

        {/* Actions */}
        <div className="flex items-center gap-1">
          <div className="relative">
            <Button variant="ghost" size="icon" onClick={() => setIsProfileOpen(!isProfileOpen)}>
              {/* <ProfileIcon className="h-5 w-5" /> */}
              <img src="src\assets\icons\user.png" alt="user" className="h-6 w-6" />
              <span className="sr-only">Account</span>
            </Button>

            {/* User Dropdown */}
            {isProfileOpen && (
              <div className="absolute right-0 top-full mt-2 w-48 bg-white py-2 shadow-lg">
                <a href="/register" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100">
                  REGISTER
                </a>
                <a href="/login" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100">
                  LOGIN
                </a>
              </div>
            )}
          </div>

          {/* Search Component */}
          <div className="hidden md:block">
            <Search />
          </div>

          {/* Cart Component */}
          <Cart />
        </div>
      </div>
    </div>
  )
}

