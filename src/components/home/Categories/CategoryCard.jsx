export function CategoryCard({ title, image, href }) {
  return (
    <a href={href} className="group block">
      <div className="relative overflow-hidden rounded-3xl h-[170px] w-[170px]">
        <div className="aspect-square w-full">
          <img
            src={image || "/placeholder.svg"}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 "
          />
          {/* Dark overlay with text */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 p-4 text-center transition-colors duration-300 group-hover:bg-black/60">
            <h3 className="text-sm font-medium tracking-wider text-white">{title}</h3>
          </div>
        </div>
      </div>
    </a>
  )
}

