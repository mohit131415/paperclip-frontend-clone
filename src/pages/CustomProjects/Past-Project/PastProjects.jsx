import { Link } from "react-router"

const pastProjects = [
  {
    name: "ROYAL ENFIELD",
    description: "Logo debossed on Italian Vegan Leather",
    image: "https://www.paperclipstore.in/cdn/shop/files/CP_RoyalEnfield.jpg?v=1719082943&width=200",
  },
  {
    name: "TODDLE",
    description: "Logo & Text (Multi Colour) screen print on paper cover",
    image: "https://www.paperclipstore.in/cdn/shop/files/CP_Toddle01_2.jpg?v=1719082970&width=200",
  },
  {
    name: "DARWIN BOX",
    description: "Logo & Text (Multi Colour) screen print on paper cover",
    image: "https://www.paperclipstore.in/cdn/shop/files/CP_Darwinbox01.jpg?v=1719082042&width=200",
  },
  {
    name: "RUNGTA STEEL",
    description: "Offset print on paper cover",
    image: "https://www.paperclipstore.in/cdn/shop/files/CP_RungtaSteel01.jpg?v=1719082063&width=200",
  },
  {
    name: "MULLENLOWE LINTAS",
    description: "Logo screen print on hard cover & spine",
    image: "https://www.paperclipstore.in/cdn/shop/files/CP_Lintas01.jpg?v=1719082087&width=200",
  },
  {
    name: "GRANT THORNTON",
    description: "Logo screen print on paper cover & custom packing slip",
    image: "https://www.paperclipstore.in/cdn/shop/files/CP_GT02.jpg?v=1719082117&width=200",
  },
  {
    name: "BR SPECIALITIES",
    description: "Logo screen print & debossed on paper cover",
    image: "https://www.paperclipstore.in/cdn/shop/files/CP_BR01.jpg?v=1719082150&width=200",
  },
  {
    name: "DEVFOLIO",
    description: "Offset print on paper cover",
    image: "https://www.paperclipstore.in/cdn/shop/files/CP_Devfolio01.jpg?v=1719082175&width=200",
  },
  {
    name: "VENA ENERGY",
    description: "Offset print on paper cover",
    image: "https://www.paperclipstore.in/cdn/shop/files/CP_VenaEnergy01.jpg?v=1719082202&width=200",
  },
  {
    name: "JCBL",
    description: "Custom design screen print on hard cover",
    image: "https://www.paperclipstore.in/cdn/shop/files/CP_JCBL02.jpg?v=1719082228&width=200",
  },
  {
    name: "SECTONA",
    description: "Logo & Design screen print on paper cover",
    image: "https://www.paperclipstore.in/cdn/shop/files/CP_Sectona01.jpg?v=1719082252&width=200  ",
  },
  {
    name: "VILLEROY & BOCH",
    description: "Logo screen print on paper cover & custom box",
    image: "https://www.paperclipstore.in/cdn/shop/files/CP_Villeroy_Boch01.jpg?v=1719082282&width=200",
  },
]

export function PastProjects() {
  return (
    <div className="container mx-auto px-56">
      <section className="py-10">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {pastProjects.map((project) => (
            <div key={project.name} className="space-y-4">
              <div className="aspect-square overflow-hidden bg-gray-100 rounded-lg">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={`${project.name} Project`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-bold text-gray-500">{project.name}</h3>
                <p className="text-xs text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <div className="text-center pb-6">
        <button className="border border-black px-6 py-3 hover:bg-black hover:text-white cursor-pointer text-[16px] text-gray-600">
          <Link to="/contact">
            CUSTOMISE MY PROJECT
          </Link>
        </button>
      </div>
    </div>
  )
}

