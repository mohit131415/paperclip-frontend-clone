'use client'

import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

export default function OrderSummary({ showEditButton = true }) {
  const { 
    items, 
    subtotal, 
    total, 
    shippingCost, 
    tax,
    appliedCoupon 
  } = useSelector((state) => state.cart)

  return (
    <div className="rounded-lg border bg-white">
      <div className="px-6 py-4">
        <h3 className="text-lg font-medium text-gray-900">Order Summary</h3>
        <p className="mt-1 text-sm text-gray-500">
          Check your items and select a suitable payment method.
        </p>
      </div>
      
      <Separator />
      
      <ScrollArea className="h-[280px] px-6 py-4">
        {items.map((item) => (
          <div key={item.product._id} className="flex py-4">
            <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border">
              <img
                src={item.product.images[0]?.url || "/placeholder.svg"}
                alt={item.product.name}
                className="h-full w-full object-cover object-center"
              />
            </div>

            <div className="ml-4 flex flex-1 flex-col">
              <div>
                <div className="flex justify-between text-base font-medium text-gray-900">
                  <h4 className="line-clamp-1">{item.product.name}</h4>
                  <p>₹{(item.product.price * item.quantity).toFixed(2)}</p>
                </div>
                {item.customization?.options?.map((option, index) => (
                  <p key={index} className="mt-1 text-sm text-gray-500">
                    {option.name}: {option.value}
                  </p>
                ))}
              </div>
              <div className="flex flex-1 items-end justify-between text-sm">
                <p className="text-gray-500">Qty {item.quantity}</p>
                {item.quantity > 1 && (
                  <p className="text-gray-500">
                    ₹{item.product.price.toFixed(2)} each
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </ScrollArea>

      <Separator />

      <div className="space-y-4 px-6 py-4">
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <p className="text-gray-500">Subtotal</p>
            <p className="font-medium text-gray-900">₹{subtotal.toFixed(2)}</p>
          </div>
          <div className="flex justify-between text-sm">
            <p className="text-gray-500">Shipping</p>
            <p className="font-medium text-gray-900">
              {shippingCost === 0 ? "Free" : `₹${shippingCost.toFixed(2)}`}
            </p>
          </div>
          <div className="flex justify-between text-sm">
            <p className="text-gray-500">Tax (18% GST)</p>
            <p className="font-medium text-gray-900">₹{tax.toFixed(2)}</p>
          </div>

          {appliedCoupon && (
            <div className="flex justify-between text-sm text-green-600">
              <p>Discount ({appliedCoupon.code})</p>
              <p className="font-medium">
                -₹{(subtotal - total).toFixed(2)}
              </p>
            </div>
          )}
        </div>

        <Separator />

        <div className="flex justify-between">
          <p className="text-base font-medium text-gray-900">Total</p>
          <p className="text-base font-medium text-gray-900">
            ₹{total.toFixed(2)}
          </p>
        </div>

        {showEditButton && (
          <Button asChild variant="outline" className="w-full">
            <Link to="/cart">Edit Cart</Link>
          </Button>
        )}
      </div>
    </div>
  )
}
