import { HeroSlider } from "@/components/home/HeroSlider/index"
import { Categories } from "@/components/home/Categories/index"
import { Collections } from "@/components/home/Collections/index"
import { FeaturedProducts } from "@/components/home/FeaturedProducts/index"

export default function HomePage() {
  return (
    <div>
      <HeroSlider />
      <Categories />
      <FeaturedProducts />
      <Collections />
      {/* Other home page content */}
    </div>
  )
}

