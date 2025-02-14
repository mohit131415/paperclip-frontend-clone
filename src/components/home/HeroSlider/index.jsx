"use client"

import { useState, useEffect } from "react"
import { HeroSlide } from "./HeroSlide"
import { SlideContent } from "./SlideContent"
import { SlideNavigation } from "./SlideNavigation"

const slides = [
  {
    image: "https://www.paperclipstore.in/cdn/shop/files/Classic_L1_1200_x_800.jpg?v=1719517191&width=2400",
    title: "2025 DAILY / WEEKLY PLANNERS",
    subtitle: "Achieve new level of productivity with myPAPERCLIP 2025 Daily / Weekly planners",
    buttonText: "SHOP NOW",
    buttonLink: "/shop",
  },
  {
    image: "https://www.paperclipstore.in/cdn/shop/files/2025_Planner_Slider_1440_x_600_Option_2.jpg?v=1719078371&width=2400",
    title: "DESK ESSENTIALS COLLECTION",
    subtitle: "Elevate your workspace with our premium desk accessories",
    buttonText: "EXPLORE NOW",
    buttonLink: "/shop",
  },
]

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (!isPlaying || isHovered) return

    const timer = setInterval(() => {
      setCurrentSlide((current) => (current + 1) % slides.length)
    }, 2000)

    return () => clearInterval(timer)
  }, [isPlaying, isHovered])

  const goToNextSlide = () => {
    setCurrentSlide((current) => (current + 1) % slides.length)
  }

  const goToPreviousSlide = () => {
    setCurrentSlide((current) => (current - 1 + slides.length) % slides.length)
  }

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <div className="w-full bg-white">
      <div
        className="relative overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
          }}
        >
          {slides.map((slide, index) => (
            <HeroSlide key={index} image={slide.image} isActive={currentSlide === index}>
              <SlideContent
                title={slide.title}
                subtitle={slide.subtitle}
                buttonText={slide.buttonText}
                buttonLink={slide.buttonLink}
              />
            </HeroSlide>
          ))}
        </div>
      </div>

      {/* Navigation controls below the slider */}
      <SlideNavigation
        onPrevious={goToPreviousSlide}
        onNext={goToNextSlide}
        isPlaying={isPlaying}
        onPlayPause={togglePlayPause}
        currentIndex={currentSlide}
        totalSlides={slides.length}
      />
      <hr />
    </div>
  )
}

