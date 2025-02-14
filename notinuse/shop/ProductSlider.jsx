"use client"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import ProductCard from "./ProductCard"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"

export default function ProductSlider({ title, products, autoplay = true }) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: "start",
      loop: true,
      skipSnaps: false,
      dragFree: true,
    },
    [autoplay && Autoplay({ delay: 4000, stopOnInteraction: false })].filter(Boolean),
  )

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev()
  const scrollNext = () => emblaApi && emblaApi.scrollNext()

  return (
    <div className="relative">
      {title && (
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-gray-900">{title}</h2>
          <div className="flex space-x-2">
            <Button variant="outline" size="icon" onClick={scrollPrev} className="h-8 w-8 rounded-full">
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Previous slide</span>
            </Button>
            <Button variant="outline" size="icon" onClick={scrollNext} className="h-8 w-8 rounded-full">
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">Next slide</span>
            </Button>
          </div>
        </div>
      )}

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex -ml-4">
          {products.map((product) => (
            <div
              key={product._id}
              className="flex-[0_0_100%] min-w-0 pl-4 sm:flex-[0_0_50%] md:flex-[0_0_33.333333%] lg:flex-[0_0_25%]"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

