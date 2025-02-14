export function SlideNavigation({ onPrevious, onNext, isPlaying, onPlayPause, currentIndex, totalSlides }) {
  return (
    <div className="flex h-9 items-center justify-center gap-4 bg-white">
      {/* Previous Button */}
      <button
        onClick={onPrevious}
        className="flex h-8 w-8 items-center justify-center text-black transition-opacity hover:opacity-70"
        aria-label="Previous slide"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>

      {/* Dots */}
      <div className="flex gap-2">
        {[...Array(totalSlides)].map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full border border-black transition-colors ${
              currentIndex === index ? "bg-black" : "bg-transparent"
            }`}
          />
        ))}
      </div>

      {/* Next Button */}
      <button
        onClick={onNext}
        className="flex h-8 w-8 items-center justify-center text-black transition-opacity hover:opacity-70"
        aria-label="Next slide"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>

      {/* Play/Pause Button */}
      <button
        onClick={onPlayPause}
        className="ml-2 flex h-8 w-8 items-center justify-center text-black transition-opacity hover:opacity-70"
        aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
      >
        {isPlaying ? (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <rect x="6" y="4" width="4" height="16" />
            <rect x="14" y="4" width="4" height="16" />
          </svg>
        ) : (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z" />
          </svg>
        )}
      </button>
    </div>
  )
}

