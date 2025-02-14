import { Link } from "react-router-dom"
import { Card, CardContent } from "@/components/ui/card"

export default function CategoryCard({ category }) {
  return (
    <Link to={`/shop/${category.slug}`}>
      <Card className="group relative overflow-hidden border-0 shadow-none transition-all hover:shadow-lg">
        <div className="relative aspect-[4/5] overflow-hidden">
          <img
            src={category.image.url || "/placeholder.svg"}
            alt={category.name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <h3 className="text-xl font-semibold">{category.name}</h3>
            <p className="mt-2 text-sm line-clamp-2 text-gray-200">
              {category.description}
            </p>
          </div>
        </div>
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">
              {category.subcategories?.length || 0} Collections
            </span>
            <span className="text-sm font-medium text-black">Shop Now →</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
