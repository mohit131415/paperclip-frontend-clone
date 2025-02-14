import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchCart, addToCart, updateCartItem, removeFromCart, clearCart } from "@/store/slices/cartSlice"
import { useToast } from "@/components/ui/use-toast"

export function useCart() {
  const dispatch = useDispatch()
  const { toast } = useToast()
  const { items, subtotal, total, shippingCost, tax, appliedCoupon, isLoading, error } = useSelector(
    (state) => state.cart,
  )

  useEffect(() => {
    dispatch(fetchCart())
  }, [dispatch])

  const addItem = async (product, quantity = 1, customization = null) => {
    try {
      await dispatch(
        addToCart({
          ...product,
          quantity,
          customization,
        }),
      ).unwrap()
      toast({
        title: "Added to cart",
        description: `${product.name} has been added to your cart.`,
      })
      return true
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message || "Failed to add item to cart.",
      })
      return false
    }
  }

  const updateItem = async (productId, quantity) => {
    try {
      await dispatch(
        updateCartItem({
          productId,
          quantity,
        }),
      ).unwrap()
      return true
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message || "Failed to update cart item.",
      })
      return false
    }
  }

  const removeItem = async (productId) => {
    try {
      await dispatch(removeFromCart(productId)).unwrap()
      toast({
        title: "Item removed",
        description: "The item has been removed from your cart.",
      })
      return true
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message || "Failed to remove item from cart.",
      })
      return false
    }
  }

  const clear = async () => {
    try {
      await dispatch(clearCart()).unwrap()
      toast({
        title: "Cart cleared",
        description: "All items have been removed from your cart.",
      })
      return true
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message || "Failed to clear cart.",
      })
      return false
    }
  }

  const applyCoupon = async (code) => {
    try {
      await dispatch(applyCoupon(code)).unwrap()
      toast({
        title: "Coupon applied",
        description: "The discount has been applied to your cart.",
      })
      return true
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Invalid coupon",
        description: error.message || "This coupon code is not valid.",
      })
      return false
    }
  }

  const removeCoupon = async () => {
    try {
      await dispatch(removeCoupon()).unwrap()
      toast({
        title: "Coupon removed",
        description: "The discount has been removed from your cart.",
      })
      return true
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message || "Failed to remove coupon.",
      })
      return false
    }
  }

  return {
    items,
    subtotal,
    total,
    shippingCost,
    tax,
    appliedCoupon,
    isLoading,
    error,
    addItem,
    updateItem,
    removeItem,
    clear,
    applyCoupon,
    removeCoupon,
  }
}

