'use client'

import { useState } from "react"
import { Link } from "react-router-dom"
import { Heart, ShoppingBag } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import { useToast } from "@/components/ui/use-toast"
import { useDispatch, useSelector } from "react-redux"
import { addToCart } from "@/store/slices/cartSlice"
import { addToWishlist, removeFromWishlist } from "@/store/slices/wishlistSlice"

export default function ProductCard({ product }) {
  const { toast } = useToast()
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(false)
  const { items: wishlistItems } = useSelector((state) => state.wishlist)
  const isInWishlist = wishlistItems?.some((item) => item._id === product._id)

  const handleAddToCart = async () => {
    setIsLoading(true)
    try {
      await dispatch(addToCart({ ...product, quantity: 1 }))
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

  const toggleWishlist = async () => {
    try {
      if (isInWishlist) {
        await dispatch(removeFromWishlist(product._id))
        toast({
          title: "Removed from wishlist",
          description: `${product.name} has been removed from your wishlist.`,
        })
      } else {
        await dispatch(addToWishlist(product))
        toast({
          title: "Added to wishlist",
          description: `${product.name} has been added to your wishlist.`,
        })
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to update wishlist. Please try again.",
      })
    }
  }

  return (
    <Card className="group relative overflow-hidden border-0 shadow-none transition-all hover:shadow-lg">
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-2 top-2 z-10 opacity-0 transition-opacity group-hover:opacity-100"
        onClick={toggleWishlist}
      >
        <Heart
          className={`h-5 w-5 ${isInWishlist ? "fill-black" : ""}`}
        />
      </Button>
      
      <Link to={`/product/${product.slug}`}>
        <div className="relative aspect-square overflow-hidden">
          <img
            src={product.images[0]?.url || "/placeholder.svg"}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {product.isNewArrival && (
            <span className="absolute left-2 top-2 rounded-full bg-black px-2 py-1 text-xs text-white">
              New Arrival
            </span>
          )}
        </div>
      </Link>

      <CardContent className="p-4">
        <Link to={`/product/${product.slug}`}>
          <h3 className="text-sm font-medium text-gray-900 line-clamp-1">
            {product.name}
          </h3>
        </Link>
        <p className="mt-1 text-sm text-gray-500 line-clamp-1">
          {product.description}
        </p>
        <div className="mt-2 flex items-center justify-between">
          <p className="text-base font-semibold text-gray-900">
            ₹{product.price.toFixed(2)}
          </p>
          {product.countInStock === 0 && (
            <span className="text-xs text-red-500">Out of Stock</span>
          )}
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button
          className="w-full bg-black text-white hover:bg-gray-800"
          onClick={handleAddToCart}
          disabled={isLoading || product.countInStock === 0}
        >
          {isLoading ? (
            "Adding..."
          ) : (
            <>
              <ShoppingBag className="mr-2 h-4 w-4" />
              Add to Cart
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  )
}
