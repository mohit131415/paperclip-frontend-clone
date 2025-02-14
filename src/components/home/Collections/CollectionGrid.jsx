import { CollectionCard } from "./CollectionCard"

const newArrivals = [
  {
    title: "CLASSIC ORGANISER - MODEL L3",
    description:
      "Hand crafted using Italian Vegan Leather featuring ring binder, magnetic strap closure & pockets to hold cards & memos",
    image: "https://www.paperclipstore.in/cdn/shop/files/Classic_L3_1200_x_800.jpg?v=1719460916&width=1750",
    buttonLink: "/shop",
  },
  {
    title: "LIMITED EDITION WIRO NOTEBOOK - XL",
    description: "Handcrafted using FSC certified paper cover & 80 GSM Munken from Arctic Paper, Sweden.",
    image:"https://www.paperclipstore.in/cdn/shop/files/WIRO128XL_Master_01_1200_x_800_4b5c6643-4320-405e-abc6-f62766bd70dd.jpg?v=1719461220&width=1750",
    buttonLink: "/shop",
  },
]

const bundleDeals = [
  {
    title: "LIMITED EDITION WIRO (PACK OF TWO)",
    image: "https://www.paperclipstore.in/cdn/shop/files/Limited_Edition_-_Wiro.png?v=1720861829&width=1750",
    originalPrice: "INR 1,190",
    offerPrice: "INR 952",
    href: "/shop",
  },
  {
    title: "MEMO BLOCKS - A6 (PACK OF FIVE)",
    image: "https://www.paperclipstore.in/cdn/shop/files/Memo_Block_A6_-_Pack_of_5.png?v=1720861822&width=1750",
    originalPrice: "INR 1,275",
    offerPrice: "INR 1,020",
    href: "/shop",
  },
  {
    title: "EXECUTIVE SERIES - A5 (PACK OF FIVE)",
    image: "https://www.paperclipstore.in/cdn/shop/files/ESX192A5_-_Pack_of_5.png?v=1720861825&width=200",
    originalPrice: "INR 2,140",
    offerPrice: "INR 1,712",
    href: "/shop/executive-series-pack",
  },
  {
    title: "WIRO NOTEBOOKS - B5 (PACK OF EIGHT)",
    image: "https://www.paperclipstore.in/cdn/shop/files/Wiro_B5_-_Pack_of_8.png?v=1720861828&width=1750",
    originalPrice: "INR 2,852",
    offerPrice: "INR 2,282",
    href: "/shop",
  },
  {
    title: "WIRO NOTEBOOKS - XL (PACK OF FOUR)",
    image: "https://www.paperclipstore.in/cdn/shop/files/Wiro_XL_-_Pack_of_4.png?v=1720861828&width=1750",
    originalPrice: "INR 2,140",
    offerPrice: "INR 1,712",
    href: "/shop",
  },
]

export function CollectionGrid() {
  return (
    <div>
      {/* New Arrivals */}
      <div className="px-8">
        <h2 className="mb-4 text-2xl font-medium tracking-wide">NEW ARRIVALS</h2>
        <div className="flex! flex-row! lg:flex-row! lg:gap-24!">
          {newArrivals.map((item) => (
            <div className="m-0 p-0">
              <CollectionCard key={item.image} {...item} />
            </div>
          ))}
        </div>
      </div>

      {/* Buy More Save More */}
      <div className="px-8">
        <h2 className="mb-8 text-2xl font-medium tracking-wide mt-12">BUY MORE SAVE MORE</h2>
        <div className="grid grid-cols-5 gap-6">
          {bundleDeals.map((item) => (
            <a key={item.title} href={item.href} className="group block">
              <div className="mb-4 w-[200px] h-[135px] overflow-hidden bg-neutral-100 rounded-lg">
                <img src={item.image || "/placeholder.svg"} alt={item.title} className="h-full w-full object-cover" />
              </div>
              <h3 className="mb-2 text-sm font-medium uppercase">{item.title}</h3>
              <span className="text-xs font-medium uppercase text-neutral-900 underline-offset-4 underline">
                SHOP NOW
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

