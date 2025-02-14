"use client"

import { X } from "lucide-react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { useDispatch } from "react-redux"
import { updateCartItem, removeFromCart } from "@/store/slices/cartSlice"
import QuantitySelector from "../shop/QuantitySelector"

export default function CartItem({ item }) {
  const dispatch = useDispatch()
  const { toast } = useToast()

  const handleQuantityChange = async (quantity) => {
    try {
      await dispatch(
        updateCartItem({
          productId: item.product._id,
          quantity,
        }),
      )
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to update quantity. Please try again.",
      })
    }
  }

  const handleRemove = async () => {
    try {
      await dispatch(removeFromCart(item.product._id))
      toast({
        title: "Item removed",
        description: "The item has been removed from your cart.",
      })
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to remove item. Please try again.",
      })
    }
  }

  return (
    <div className="flex gap-4 py-4 sm:gap-6">
      <Link
        to={`/product/${item.product.slug}`}
        className="aspect-square h-24 overflow-hidden rounded-lg border bg-gray-50 sm:h-32"
      >
        <img
          src={item.product.images[0]?.url || "/placeholder.svg"}
          alt={item.product.name}
          className="h-full w-full object-cover object-center"
        />
      </Link>

      <div className="flex flex-1 flex-col justify-between">
        <div className="flex justify-between">
          <div>
            <Link
              to={`/product/${item.product.slug}`}
              className="text-sm font-medium text-gray-900 hover:text-gray-800 sm:text-base"
            >
              {item.product.name}
            </Link>
            {item.customization?.options?.map((option, index) => (
              <p key={index} className="mt-1 text-sm text-gray-500">
                {option.name}: {option.value}
              </p>
            ))}
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-gray-400 hover:text-gray-500"
            onClick={handleRemove}
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Remove item</span>
          </Button>
        </div>

        <div className="flex items-end justify-between mt-2">
          <QuantitySelector
            quantity={item.quantity}
            onChange={handleQuantityChange}
            max={item.product.countInStock}
            disabled={item.product.countInStock === 0}
          />
          <div className="flex flex-col items-end">
            <p className="text-sm font-medium text-gray-900 sm:text-base">
              ₹{(item.product.price * item.quantity).toFixed(2)}
            </p>
            {item.quantity > 1 && <p className="text-xs text-gray-500">₹{item.product.price.toFixed(2)} each</p>}
          </div>
        </div>
      </div>
    </div>
  )
}

