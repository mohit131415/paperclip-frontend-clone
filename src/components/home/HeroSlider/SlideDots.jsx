export function SlideDots({ slides, currentIndex, onDotClick }) {
  return (
    <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 transform gap-3">
      {slides.map((_, index) => (
        <button
          key={index}
          onClick={() => onDotClick(index)}
          className={`h-2 rounded-full transition-all ${currentIndex === index ? "w-8 bg-white" : "w-2 bg-white/50"}`}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  )
}

