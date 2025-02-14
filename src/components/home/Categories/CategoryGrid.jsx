import { CategoryCard } from "./CategoryCard"

// Static category data
const categories = [
  {
    title: "DAILY/WEEKLY PLANNERS",
    image: "https://www.paperclipstore.in/cdn/shop/collections/Colour_Banner_2800_x_1000_Turquoise.jpg?v=1719524865",
    href: "/shop",
  },
  {
    title: "BOUND",
    image: "https://www.paperclipstore.in/cdn/shop/collections/ESX192A5-R-grey-Master.jpg?v=1719524869",
    href: "/shop",
  },
  {
    title: "ORGANIZERS & REFILLS",
    image: "https://www.paperclipstore.in/cdn/shop/collections/Classic_L3_Master_01.jpg?v=1719524904",
    href: "/shop",
  },
  {
    title: "OBJECTS & ACCESSORIES",
    image: "https://www.paperclipstore.in/cdn/shop/collections/Colour_Banner_2800_x_1000_Lilac.jpg?v=1719524873&width=1000",
    href: "/shop",
  },
  {
    title: "MEMO BLOCKS & INDEX CARDS",
    image: "https://www.paperclipstore.in/cdn/shop/collections/MB100A6.jpg?v=1719524877&width=1000",
    href: "/shop",
  },
  {
    title: "GIFT BOXES",
    image: "https://www.paperclipstore.in/cdn/shop/collections/Colour_Banner_2800_x_1000_Lilac_65e3a981-52d6-489e-9bcb-4bd061ebe7ad.jpg?v=1719524920&width=1000",
    href: "/shop",
  },
]

export function CategoryGrid() {
  return (
    <div className="flex flex-wrap gap-6 align-center justify-center">
      {categories.map((category) => (
        <CategoryCard key={category.title} title={category.title} image={category.image} href={category.href} />
      ))}
    </div>
  )
}

