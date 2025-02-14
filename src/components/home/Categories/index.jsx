import { CategorySection } from "./CategorySection"
import { CategoryGrid } from "./CategoryGrid"
import { Button } from "@/components/ui/button"

export function Categories() {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-4">
        <CategorySection />
        <CategoryGrid />
        <div className="mt-12 text-center">
          <button className="p-2 px-9 border border-black! hover:bg-black hover:text-white cursor-pointer">
            <a href="/shop">VIEW ALL</a>
          </button>
        </div>
      </div>
    </section>
  )
}

