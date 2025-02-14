const possibilities = [
    {
      title: "SCREEN PRINTING",
      description:
        "Screen print logo OR pair with text/image in single or multi colour. This is the most popular option for branding on notebooks & journals.",
      image: "https://www.paperclipstore.in/cdn/shop/files/Custom_Options_ScreenPrint_Paper_01-3x2.jpg?v=1719080276&width=400",
    },
    {
      title: "BLIND EMBOSSING",
      description:
        "Blind embossing is the another popular option for branding. The process involves pressing of the logo into the cover of a quality notebook.",
      image: "https://www.paperclipstore.in/cdn/shop/files/Custom_Options_Debossing_PU_02-3x2.jpg?v=1719080297&width=400",
    },
    {
      title: "FOIL STAMPING",
      description:
        "Foil stamping creates a stunning effect when used on the right notebook. Gold or silver foil stamping/printing of a logo adds a touch of luxury to the brand.",
      image: "https://www.paperclipstore.in/cdn/shop/files/Custom_Options_Foiling_Paper_01-3x2.jpg?v=1719080333&width=400",
    },
    {
      title: "TITLE PAGE OR INSERTS",
      description:
        "You can opt to add custom printed pages as the title page or inserts. The pages with text or images in full color can carry your message beyond the back cover.",
      image: "https://www.paperclipstore.in/cdn/shop/files/CP_GetShitDone03.jpg?v=1719080368&width=400",
    },
    {
      title: "OFFSET PRINTING",
      description:
        "Your design can be offset printed in full colour to suit your communication preferences or needs. You can also choose to print on inside pages.",
      image: "https://www.paperclipstore.in/cdn/shop/files/Custom_Options_OffsetPrint_Paper_01-3x2.jpg?v=1719080389&width=400",
    },
    {
      title: "COLOUR MATCHING",
      description:
        "We can incorporate your specific brand color to build your notebooks. White imprint on Blue or full colour if we can.",
      image: "https://www.paperclipstore.in/cdn/shop/files/CP_Facebook01.jpg?v=1719080404&width=400",
    },
  ]
  
  export function ViewPossibilities() {
    return (
      <section className="py-4">
        <h2 className="mb-4 text-2xl">View Possibilities</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {possibilities.map((item) => (
            <div key={item.title} className="space-y-2">
              <div className="aspect-[4/3] overflow-hidden bg-gray-100 rounded-2xl">
                <img src={item.image || "/placeholder.svg"} alt={item.title} className="w-full h-full object-cover" />
              </div>
              <div className="space-y-1">
                <h3 className="font-bold">{item.title}</h3>
                <p className="text-[14px] text-gray-500">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    )
  }
  
  