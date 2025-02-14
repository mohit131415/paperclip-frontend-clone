"use client"

import { useState } from "react"
import { useDispatch } from "react-redux"
import { addToCart } from "@/store/slices/cartSlice"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import QuantitySelector from "notinuse/shop/QuantitySelector"
import WishlistButton from "notinuse/shop/WishlistButton"
import SocialShare from "@/components/common/SocialShare"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ProductInfo({ product }) {
  const dispatch = useDispatch()
  const { toast } = useToast()
  const [quantity, setQuantity] = useState(1)
  const [selectedOptions, setSelectedOptions] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  const handleOptionChange = (name, value) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleAddToCart = async () => {
    setIsLoading(true)
    try {
      await dispatch(
        addToCart({
          ...product,
          quantity,
          customization: {
            options: Object.entries(selectedOptions).map(([name, value]) => ({
              name,
              value,
            })),
          },
        }),
      )
      toast({
        title: "Added to cart",
        description: `${product.name} has been added to your cart.`,
      })
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to add to cart. Please try again.",
      })
    }
    setIsLoading(false)
  }

  return (
    <div className="mt-8 lg:mt-0">
      <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product.name}</h1>

      <div className="mt-4">
        <p className="text-3xl tracking-tight text-gray-900">₹{product.price.toFixed(2)}</p>
        {product.countInStock > 0 ? (
          <p className="mt-1 text-sm text-green-600">In stock</p>
        ) : (
          <p className="mt-1 text-sm text-red-600">Out of stock</p>
        )}
      </div>

      <div className="mt-6 space-y-6">
        <div className="prose prose-sm">
          <p>{product.description}</p>
        </div>

        {product.customization?.available && (
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-gray-900">Customization Options</h3>
            {product.customization.options.map((option) => (
              <div key={option.name}>
                <label className="text-sm text-gray-500">{option.name}</label>
                <Select
                  value={selectedOptions[option.name] || ""}
                  onValueChange={(value) => handleOptionChange(option.name, value)}
                >
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder={`Select ${option.name}`} />
                  </SelectTrigger>
                  <SelectContent>
                    {option.values.map((value) => (
                      <SelectItem key={value} value={value}>
                        {value}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            ))}
          </div>
        )}

        <div className="flex flex-col gap-4 sm:flex-row">
          <div className="w-full sm:w-1/3">
            <QuantitySelector
              quantity={quantity}
              onChange={setQuantity}
              max={product.countInStock}
              disabled={product.countInStock === 0}
            />
          </div>
          <div className="flex flex-1 gap-4">
            <Button
              className="flex-1 bg-black text-white hover:bg-gray-800"
              onClick={handleAddToCart}
              disabled={isLoading || product.countInStock === 0}
            >
              {isLoading ? "Adding..." : "Add to Cart"}
            </Button>
            <WishlistButton product={product} variant="icon" />
          </div>
        </div>

        <div className="border-t pt-6">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium text-gray-500">Share:</span>
              <SocialShare url={window.location.href} title={product.name} />
            </div>
            <div className="space-y-2 text-sm text-gray-500">
              <p>SKU: {product._id}</p>
              <p>Category: {product.category?.name}</p>
              {product.material && <p>Material: {product.material}</p>}
              <p>
                Dimensions: {product.dimensions.length}x{product.dimensions.width}
                {product.dimensions.height ? `x${product.dimensions.height}` : ""} cm
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

