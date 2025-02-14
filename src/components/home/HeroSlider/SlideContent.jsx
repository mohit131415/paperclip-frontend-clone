export function SlideContent({ title, subtitle, buttonText, buttonLink }) {
  return (
    <div className="container mx-auto flex h-full items-center justify-center px-4">
      <div className="text-center">
        <h2 className="mb-4 text-4xl font-medium tracking-wider text-white">{title}</h2>
        <p className="mb-8 text-base text-gray-200">{subtitle}</p>
        {buttonText && buttonLink && (
          <a
            href={buttonLink}
            className="inline-block border border-white px-8 py-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-white hover:text-black"
          >
            {buttonText}
          </a>
        )}
      </div>
    </div>
  )
}

