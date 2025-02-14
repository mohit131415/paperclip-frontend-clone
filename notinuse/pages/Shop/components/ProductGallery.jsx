'use client'

import { useState } from "react"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function ProductGallery({ images }) {
  const [currentImage, setCurrentImage] = useState(0)
  const [isZoomed, setIsZoomed] = useState(false)

  const handlePrevious = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  const handleThumbnailClick = (index) => {
    setCurrentImage(index)
  }

  const handleMouseMove = (e) => {
    if (!isZoomed) return

    const image = e.currentTarget
    const { left, top, width, height } = image.getBoundingClientRect()
    const x = ((e.clientX - left) / width) * 100
    const y = ((e.clientY - top) / height) * 100

    image.style.transformOrigin = `${x}% ${y}%`
  }

  return (
    <div className="flex flex-col-reverse gap-4">
      {/* Thumbnails */}
      <div className="flex gap-4 overflow-x-auto pb-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => handleThumbnailClick(index)}
            className={`relative flex-shrink-0 cursor-pointer overflow-hidden rounded-lg border-2 ${
              currentImage === index ? "border-black" : "border-transparent"
            }`}
          >
            <img
              src={image.url || "/placeholder.svg"}
              alt={`Product thumbnail ${index + 1}`}
              className="h-20 w-20 object-cover"
            />
          </button>
        ))}
      </div>

      {/* Main Image */}
      <Dialog>
        <DialogTrigger asChild>
          <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
            <img
              src={images[currentImage]?.url || "/placeholder.svg"}
              alt="Product image"
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 flex items-center justify-between p-4">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-white/80 text-gray-900 hover:bg-white"
                onClick={(e) => {
                  e.stopPropagation()
                  handlePrevious()
                }}
              >
                <ChevronLeft className="h-6 w-6" />
                <span className="sr-only">Previous image</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-white/80 text-gray-900 hover:bg-white"
                onClick={(e) => {
                  e.stopPropagation()
                  handleNext()
                }}
              >
                <ChevronRight className="h-6 w-6" />
                <span className="sr-only">Next image</span>
              </Button>
            </div>
          </div>
        </DialogTrigger>
        <DialogContent className="max-w-3xl">
          <div
            className="relative aspect-square cursor-zoom-in overflow-hidden"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsZoomed(true)}
            onMouseLeave={() => setIsZoomed(false)}
          >
            <img
              src={images[currentImage]?.url || "/placeholder.svg"}
              alt="Product image"
              className={`h-full w-full object-cover transition-transform duration-200 ${
                isZoomed ? "scale-150" : "scale-100"
              }`}
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
