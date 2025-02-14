"use client"

import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { useCart } from "@/context/CartContext"
import productsData from "@/assets/json/products.json"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { toast } from "sonner"

export default function ProductDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { addToCart } = useCart()
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedColor, setSelectedColor] = useState(null)
  const [quantity, setQuantity] = useState(1)

  const product = productsData.products.find((p) => p.id === id)

  useEffect(() => {
    if (product && product.colors.length > 0) {
      setSelectedColor(product.colors[0])
    }
  }, [product])

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-12">
        <p>Product not found</p>
      </div>
    )
  }

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1)
  }

  const decrementQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1))
  }

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedColor)
    toast.success("Added to cart")
    navigate("/cart")
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column - Images */}
        <div className="space-y-4">
          <div className="aspect-square bg-gray-100">
            <img
              src={product.images[selectedImage] || "/placeholder.svg"}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex gap-4 overflow-x-auto pb-2">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`flex-shrink-0 w-20 h-20 border-2 ${
                  selectedImage === index ? "border-black" : "border-transparent"
                }`}
              >
                <img
                  src={image || "/placeholder.svg"}
                  alt={`${product.name} view ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Right Column - Product Details */}
        <div className="space-y-6">
          <h1 className="text-3xl font-medium">{product.name}</h1>
          <p className="text-gray-600">{product.description}</p>
          <p className="text-gray-600">{product.dimensions}</p>

          {/* Color Selection */}
          <div className="space-y-3">
            <h3 className="font-medium">Color: {selectedColor?.name}</h3>
            <div className="flex gap-2">
              {product.colors.map((color) => (
                <button
                  key={color.name}
                  onClick={() => setSelectedColor(color)}
                  className={`w-8 h-8 rounded-full border-2 ${
                    selectedColor?.name === color.name ? "border-black" : "border-gray-200"
                  }`}
                  style={{ backgroundColor: color.code }}
                  title={color.name}
                />
              ))}
            </div>
          </div>

          {/* Quantity Selector */}
          <div className="space-y-3">
            <h3 className="font-medium">Quantity</h3>
            <div className="flex items-center gap-4">
              <button
                onClick={decrementQuantity}
                className="w-10 h-10 border border-gray-300 flex items-center justify-center hover:bg-gray-100"
              >
                -
              </button>
              <span className="w-12 text-center">{quantity}</span>
              <button
                onClick={incrementQuantity}
                className="w-10 h-10 border border-gray-300 flex items-center justify-center hover:bg-gray-100"
              >
                +
              </button>
            </div>
          </div>

          {/* Price */}
          <div className="text-2xl font-medium">INR {product.price}</div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="w-full bg-black text-white py-3 hover:bg-gray-800 transition-colors"
          >
            ADD TO CART
          </button>

          <p className="text-sm text-gray-500">
            Inclusive of all taxes. FREE Shipping on prepaid orders above INR 995.
          </p>

          {/* Specifications Tabs */}
          <Tabs defaultValue="specifications" className="w-full pt-6">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="specifications">SPECIFICATIONS</TabsTrigger>
              <TabsTrigger value="description">DESCRIPTION</TabsTrigger>
            </TabsList>
            <TabsContent value="specifications" className="pt-4">
              <table className="w-full">
                <tbody>
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <tr key={key} className="border-b">
                      <td className="py-2 font-medium capitalize">{key}</td>
                      <td className="py-2">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </TabsContent>
            <TabsContent value="description" className="pt-4">
              <p className="text-gray-600">{product.description}</p>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

