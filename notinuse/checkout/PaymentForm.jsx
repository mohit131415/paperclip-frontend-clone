'use client'

import { useState } from "react"
import { useSelector } from "react-redux"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"
import { Loader2, CreditCard, Wallet } from 'lucide-react'

const paymentMethods = [
  {
    id: "card",
    title: "Credit/Debit Card",
    description: "Pay securely with your card",
    icon: CreditCard,
  },
  {
    id: "upi",
    title: "UPI",
    description: "Pay using UPI",
    icon: Wallet,
  },
]

export default function PaymentForm({ onSubmit }) {
  const [selectedMethod, setSelectedMethod] = useState("card")
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()
  const { total } = useSelector((state) => state.cart)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Simulating payment processing
      await new Promise((resolve) => setTimeout(resolve, 2000))
      
      await onSubmit({
        paymentMethod: selectedMethod,
        amount: total,
      })

      toast({
        title: "Payment successful",
        description: "Your order has been placed successfully.",
      })
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Payment failed",
        description: error.message || "Something went wrong. Please try again.",
      })
    }

    setIsLoading(false)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <RadioGroup
        value={selectedMethod}
        onValueChange={setSelectedMethod}
        className="space-y-4"
      >
        {paymentMethods.map((method) => (
          <div
            key={method.id}
            className={`relative flex cursor-pointer rounded-lg border p-4 ${
              selectedMethod === method.id
                ? "border-black bg-gray-50"
                : "border-gray-200"
            }`}
          >
            <RadioGroupItem
              value={method.id}
              id={method.id}
              className="absolute right-4 top-4"
            />
            <div className="flex w-full items-start space-x-4">
              <method.icon className="h-6 w-6" />
              <div className="flex-1">
                <Label
                  htmlFor={method.id}
                  className="text-sm font-medium text-gray-900"
                >
                  {method.title}
                </Label>
                <p className="text-sm text-gray-500">{method.description}</p>

                {selectedMethod === method.id && method.id === "card" && (
                  <div className="mt-4 space-y-4">
                    <div>
                      <Label htmlFor="card-number">Card Number</Label>
                      <Input
                        id="card-number"
                        placeholder="1234 5678 9012 3456"
                        required
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="expiry">Expiry Date</Label>
                        <Input
                          id="expiry"
                          placeholder="MM/YY"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="cvv">CVV</Label>
                        <Input
                          id="cvv"
                          type="password"
                          maxLength={3}
                          placeholder="123"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="name">Name on Card</Label>
                      <Input
                        id="name"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                  </div>
                )}

                {selectedMethod === method.id && method.id === "upi" && (
                  <div className="mt-4">
                    <Label htmlFor="upi-id">UPI ID</Label>
                    <Input
                      id="upi-id"
                      placeholder="username@upi"
                      required
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </RadioGroup>

      <div className="border-t pt-6">
        <Button
          type="submit"
          className="w-full bg-black text-white hover:bg-gray-800"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Processing...
            </>
          ) : (
            `Pay ₹${total.toFixed(2)}`
          )}
        </Button>
      </div>
    </form>
  )
}
