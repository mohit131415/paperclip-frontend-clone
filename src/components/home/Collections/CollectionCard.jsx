export function CollectionCard({ title, description, image, buttonText = "SHOP NOW", buttonLink = "#" }) {
  return (
    <div className="flex flex-col w-[470px]">
      <div className="h-[320px] w-[520px] overflow-hidden rounded-2xl bg-neutral-100">
        <img src={image || "/placeholder.svg"} alt={title} className="h-full w-full object-cover" />
      </div>
      <h3 className="mb-1 text-sm font-bold mt-2 uppercase tracking-wide text-neutral-900">{title}</h3>
      <p className="mb-2 text-sm leading-relaxed text-neutral-600">{description}</p>
      <a
        href={buttonLink}
        className="inline-flex w-fit border border-black! px-8 py-2.5 xl:text-[14px] uppercase tracking-wide text-neutral-900 transition-colors hover:bg-neutral-900 hover:text-white"
      >
        {buttonText}
      </a>
    </div>
  )
}

