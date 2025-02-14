"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"
import { useSelector, useDispatch } from "react-redux"
import { applyCoupon, removeCoupon } from "@/store/slices/cartSlice"

export default function CartSummary() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { toast } = useToast()
  const [couponCode, setCouponCode] = useState("")
  const [isApplying, setIsApplying] = useState(false)

  const { items, subtotal, total, shippingCost, tax, appliedCoupon } = useSelector((state) => state.cart)

  const handleApplyCoupon = async () => {
    if (!couponCode) return

    setIsApplying(true)
    try {
      await dispatch(applyCoupon(couponCode))
      toast({
        title: "Coupon applied",
        description: "The discount has been applied to your cart.",
      })
      setCouponCode("")
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Invalid coupon",
        description: error.message || "This coupon code is not valid.",
      })
    }
    setIsApplying(false)
  }

  const handleRemoveCoupon = async () => {
    try {
      await dispatch(removeCoupon())
      toast({
        title: "Coupon removed",
        description: "The discount has been removed from your cart.",
      })
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to remove coupon. Please try again.",
      })
    }
  }

  const handleCheckout = () => {
    navigate("/checkout")
  }

  return (
    <div className="rounded-lg border bg-white p-6">
      <h2 className="text-lg font-medium text-gray-900">Order Summary</h2>

      <div className="mt-6 space-y-4">
        <div className="flex justify-between text-sm">
          <p className="text-gray-600">Subtotal ({items.length} items)</p>
          <p className="font-medium text-gray-900">₹{subtotal.toFixed(2)}</p>
        </div>

        <div className="flex justify-between text-sm">
          <p className="text-gray-600">Shipping</p>
          <p className="font-medium text-gray-900">{shippingCost === 0 ? "Free" : `₹${shippingCost.toFixed(2)}`}</p>
        </div>

        <div className="flex justify-between text-sm">
          <p className="text-gray-600">Tax (18% GST)</p>
          <p className="font-medium text-gray-900">₹{tax.toFixed(2)}</p>
        </div>

        {appliedCoupon && (
          <div className="flex justify-between text-sm text-green-600">
            <div className="flex items-center gap-2">
              <p>Discount ({appliedCoupon.code})</p>
              <button onClick={handleRemoveCoupon} className="text-xs underline hover:text-green-700">
                Remove
              </button>
            </div>
            <p className="font-medium">-₹{(subtotal - total).toFixed(2)}</p>
          </div>
        )}

        <div className="border-t pt-4">
          <div className="flex justify-between">
            <p className="text-base font-medium text-gray-900">Total</p>
            <p className="text-base font-medium text-gray-900">₹{total.toFixed(2)}</p>
          </div>
        </div>

        {!appliedCoupon && (
          <div className="flex gap-2">
            <Input
              type="text"
              placeholder="Enter coupon code"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
            />
            <Button variant="outline" onClick={handleApplyCoupon} disabled={!couponCode || isApplying}>
              {isApplying ? "Applying..." : "Apply"}
            </Button>
          </div>
        )}

        <Button
          className="w-full bg-black text-white hover:bg-gray-800"
          onClick={handleCheckout}
          disabled={items.length === 0}
        >
          Proceed to Checkout
        </Button>

        <p className="text-center text-xs text-gray-500">Shipping & taxes calculated at checkout</p>
      </div>
    </div>
  )
}

