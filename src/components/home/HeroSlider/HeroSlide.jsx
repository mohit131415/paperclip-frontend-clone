export function HeroSlide({ image, isActive, children }) {
  return (
    <div
      className={`relative h-[calc(70vh-64px)] w-full shrink-0 ${
        isActive ? "opacity-100" : "opacity-0"
      } transition-opacity duration-500 ease-in-out`}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src={image || "/placeholder.svg"} alt="" className="h-full w-full object-cover" />
        {/* Subtle dark overlay */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative h-full">{children}</div>
    </div>
  )
}

