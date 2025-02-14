"use client"

import { useState } from "react"
import { Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { useDispatch, useSelector } from "react-redux"
import { addToWishlist, removeFromWishlist } from "@/store/slices/wishlistSlice"

export default function WishlistButton({ product, variant = "default", size = "default" }) {
  const dispatch = useDispatch()
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)
  const { items: wishlistItems } = useSelector((state) => state.wishlist)
  const isInWishlist = wishlistItems?.some((item) => item._id === product._id)

  const handleToggleWishlist = async () => {
    setIsLoading(true)
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
    setIsLoading(false)
  }

  if (variant === "icon") {
    return (
      <Button
        variant="ghost"
        size={size}
        className={`group ${isInWishlist ? "text-red-500" : "text-gray-500"}`}
        onClick={handleToggleWishlist}
        disabled={isLoading}
      >
        <Heart className={`h-5 w-5 transition-colors ${isInWishlist ? "fill-current" : "group-hover:fill-current"}`} />
        <span className="sr-only">{isInWishlist ? "Remove from Wishlist" : "Add to Wishlist"}</span>
      </Button>
    )
  }

  return (
    <Button
      variant={isInWishlist ? "outline" : "default"}
      className={`w-full ${
        isInWishlist ? "border-red-500 text-red-500 hover:bg-red-50" : "bg-black text-white hover:bg-gray-800"
      }`}
      onClick={handleToggleWishlist}
      disabled={isLoading}
    >
      <Heart className={`mr-2 h-4 w-4 ${isInWishlist ? "fill-current" : ""}`} />
      {isLoading ? "Processing..." : isInWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
    </Button>
  )
}

