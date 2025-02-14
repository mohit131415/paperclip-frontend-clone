import { TopAnnouncement } from "./TopAnnouncement"
import { MainHeader } from "./MainHeader"

export function Header({ onCartClick, onSearchClick }) {
  return (
    <header className="sticky top-0 z-50 w-full">
      <TopAnnouncement />
      <MainHeader onCartClick={onCartClick} onSearchClick={onSearchClick} />
    </header>
  )
}
