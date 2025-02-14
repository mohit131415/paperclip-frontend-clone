"use client"

import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useCart } from "@/context/CartContext"
import { Trash2 } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { toast } from "sonner"

export default function Cart() {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal } = useCart()
  const navigate = useNavigate()
  const [isCheckingOut, setIsCheckingOut] = useState(false)
  const [needsGST, setNeedsGST] = useState(false)
  const [formData, setFormData] = useState({
    customerName: "",
    email: "",
    phone: "",
    address: {
      street: "",
      city: "",
      state: "",
      pincode: "",
    },
    gstNumber: "",
  })

  if (cartItems.length === 0) {
    navigate("/empty-cart")
    return null
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    if (name.includes(".")) {
      const [parent, child] = name.split(".")
      setFormData((prev) => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value,
        },
      }))
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }))
    }
  }

  const handleCheckout = async (e) => {
    e.preventDefault()
    setIsCheckingOut(true)

    try {
      const response = await fetch("http://localhost:5000/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          items: cartItems.map((item) => ({
            productId: item.id,
            name: item.name,
            price: item.price,
            quantity: item.quantity,
            color: item.color,
          })),
          totalAmount: getCartTotal(),
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong")
      }

      toast.success("Order placed successfully!")
      // Clear cart and redirect to success page
      // You'll need to implement clearCart in your CartContext
      navigate("/order-success")
    } catch (error) {
      toast.error(error.message)
    } finally {
      setIsCheckingOut(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-medium">Your cart</h1>
          <Link to="/shop" className="text-gray-600 hover:underline">
            Continue shopping
          </Link>
        </div>

        <div className="border-t border-gray-200">
          {/* Header */}
          <div className="grid grid-cols-[2fr,1fr,1fr] gap-4 py-4 text-sm text-gray-600">
            <div>PRODUCT</div>
            <div className="text-center">QUANTITY</div>
            <div className="text-right">TOTAL</div>
          </div>

          {/* Cart Items */}
          {cartItems.map((item) => (
            <div
              key={`${item.id}-${item.color.name}`}
              className="grid grid-cols-[2fr,1fr,1fr] gap-4 py-4 border-t border-gray-200 items-center"
            >
              <div className="flex gap-4">
                <img src={item.image || "/placeholder.svg"} alt={item.name} className="w-20 h-20 object-cover" />
                <div>
                  <h3 className="font-medium">{item.name}</h3>
                  <p className="text-sm text-gray-600">INR {item.price}</p>
                  <p className="text-sm text-gray-600">Color: {item.color.name}</p>
                </div>
              </div>

              <div className="flex justify-center items-center gap-2">
                <button
                  onClick={() => updateQuantity(item.id, item.color.name, item.quantity - 1)}
                  className="w-8 h-8 border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                >
                  -
                </button>
                <span className="w-12 text-center">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.color.name, item.quantity + 1)}
                  className="w-8 h-8 border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                >
                  +
                </button>
                <button
                  onClick={() => removeFromCart(item.id, item.color.name)}
                  className="ml-2 text-gray-500 hover:text-red-500"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>

              <div className="text-right">INR {item.price * item.quantity}</div>
            </div>
          ))}
        </div>

        <form onSubmit={handleCheckout} className="mt-8">
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                name="customerName"
                placeholder="Full Name*"
                required
                value={formData.customerName}
                onChange={handleInputChange}
              />
              <Input
                name="email"
                type="email"
                placeholder="Email*"
                required
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>

            <Input
              name="phone"
              placeholder="Phone Number*"
              required
              value={formData.phone}
              onChange={handleInputChange}
            />

            <Input
              name="address.street"
              placeholder="Street Address*"
              required
              value={formData.address.street}
              onChange={handleInputChange}
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Input
                name="address.city"
                placeholder="City*"
                required
                value={formData.address.city}
                onChange={handleInputChange}
              />
              <Input
                name="address.state"
                placeholder="State*"
                required
                value={formData.address.state}
                onChange={handleInputChange}
              />
              <Input
                name="address.pincode"
                placeholder="Pincode*"
                required
                value={formData.address.pincode}
                onChange={handleInputChange}
              />
            </div>

            <div className="flex items-center gap-2">
              <Checkbox id="gst" checked={needsGST} onCheckedChange={setNeedsGST} />
              <Label htmlFor="gst">Need a GST Invoice?</Label>
            </div>

            {needsGST && (
              <Input
                name="gstNumber"
                placeholder="GST Number*"
                required={needsGST}
                value={formData.gstNumber}
                onChange={handleInputChange}
              />
            )}
          </div>

          <div className="mt-8 border-t border-gray-200 pt-8">
            <div className="flex justify-between items-center mb-4">
              <span className="font-medium">Estimated total</span>
              <span className="text-xl font-medium">INR {getCartTotal()}</span>
            </div>

            <p className="text-sm text-gray-600 text-center mb-8">
              Inclusive of all taxes. FREE Shipping on prepaid orders above INR 995.
            </p>

            <button
              type="submit"
              disabled={isCheckingOut}
              className="w-full border border-black py-3 hover:bg-black hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isCheckingOut ? "Processing..." : "Place Order"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

