import { Link } from "react-router-dom"

export function ProductCard({ image, title, description }) {
  return (
    <div className="relative h-[65vh] w-full overflow-hidden mt-8">
      <img src={image || "/placeholder.svg"} alt={title} className="h-full w-full object-cover" />
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="container mx-auto max-w-3xl px-4 text-center">
          <h2 className="mb-4 text-3xl font-medium tracking-wider text-white sm:text-4xl">{title}</h2>
          <p className="mb-8 text-base text-gray-200 sm:text-lg">{description}</p>
          <div className="flex flex-col gap-2">
            <button className="mx-auto w-full max-w-md border-white border-1 px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-black/90 sm:text-base cursor-pointer">
              <Link to="/past-projects">
                VIEW PAST PROJECT
              </Link>
            </button>
            <button className="mx-auto w-full max-w-md border border-white bg-transparent px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-black hover:text-white sm:text-base cursor-pointer">
              <Link to="/contact">
              CUSTOMISE MY PROJECT
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

