import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchWishlist, addToWishlist, removeFromWishlist, clearWishlist } from "@/store/slices/wishlistSlice"
import { useToast } from "@/components/ui/use-toast"

export function useWishlist() {
  const dispatch = useDispatch()
  const { toast } = useToast()
  const { items, isLoading, error } = useSelector((state) => state.wishlist)

  useEffect(() => {
    dispatch(fetchWishlist())
  }, [dispatch])

  const addItem = async (product) => {
    try {
      await dispatch(addToWishlist(product)).unwrap()
      toast({
        title: "Added to wishlist",
        description: `${product.name} has been added to your wishlist.`,
      })
      return true
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message || "Failed to add to wishlist.",
      })
      return false
    }
  }

  const removeItem = async (productId) => {
    try {
      await dispatch(removeFromWishlist(productId)).unwrap()
      toast({
        title: "Removed from wishlist",
        description: "The item has been removed from your wishlist.",
      })
      return true
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message || "Failed to remove from wishlist.",
      })
      return false
    }
  }

  const clear = async () => {
    try {
      await dispatch(clearWishlist()).unwrap()
      toast({
        title: "Wishlist cleared",
        description: "All items have been removed from your wishlist.",
      })
      return true
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message || "Failed to clear wishlist.",
      })
      return false
    }
  }

  const isInWishlist = (productId) => {
    return items?.some((item) => item._id === productId) || false
  }

  const toggleWishlist = async (product) => {
    if (isInWishlist(product._id)) {
      return removeItem(product._id)
    }
    return addItem(product)
  }

  return {
    items,
    isLoading,
    error,
    addItem,
    removeItem,
    clear,
    isInWishlist,
    toggleWishlist,
  }
}

