import { Link } from "react-router-dom"
import productsData from "@/assets/json/products.json"

export default function Shop() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-2xl font-medium mb-8">ACCESSORIES</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {productsData.products.map((product) => (
          <div key={product.id} className="flex flex-col">
            <Link to={`/shop/product/${product.id}`} className="group">
              <div className="bg-gray-100 mb-4 aspect-[4/3] overflow-hidden">
                <img
                  src={product.images[0] || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <h2 className="font-medium uppercase mb-1">{product.name}</h2>

              <p className="text-gray-600 text-sm mb-2">{product.description}</p>

              <div className="text-sm text-gray-600 mb-2">{product.dimensions}</div>

              <div className="flex gap-1 mb-4">
                {product.colors.map((color, index) => (
                  <div
                    key={index}
                    className="w-4 h-4 rounded-full border border-gray-200"
                    style={{ backgroundColor: color.code }}
                    title={color.name}
                  />
                ))}
              </div>

              <div className="text-lg mb-4">INR {product.price}</div>

              <button className="border border-black px-8 py-2 hover:bg-black hover:text-white transition-colors w-fit">
                SHOP NOW
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

