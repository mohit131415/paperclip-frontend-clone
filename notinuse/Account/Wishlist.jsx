'use client'

import { useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { fetchWishlist } from "@/store/slices/wishlistSlice"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import ProductCard from "notinuse/shop/ProductCard"
import { Loader } from "@/components/common/Loader"
import { Heart } from 'lucide-react'

export default function WishlistPage() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { items, isLoading } = useSelector((state) => state.wishlist)
  const { user } = useSelector((state) => state.auth)

  useEffect(() => {
    if (!user) {
      navigate("/login?redirect=/account/wishlist")
      return
    }
    dispatch(fetchWishlist())
  }, [dispatch, navigate, user])

  if (isLoading) {
    return <Loader />
  }

  if (!items?.length) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <Heart className="mx-auto h-12 w-12 text-gray-400" />
          <h3 className="mt-2 text-lg font-medium text-gray-900">
            Your wishlist is empty
          </h3>
          <p className="mt-1 text-sm text-gray-500">
            Save items you love to your wishlist.
          </p>
          <div className="mt-6">
            <Button asChild>
              <Link to="/shop">Start Shopping</Link>
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <Card>
        <CardHeader>
          <CardTitle>Your Wishlist</CardTitle>
          <CardDescription>
            {items.length} {items.length === 1 ? "item" : "items"} saved for later
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
