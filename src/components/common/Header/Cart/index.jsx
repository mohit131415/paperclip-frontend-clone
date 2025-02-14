"use client"

import { useState } from "react"
import { ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { CartPreview } from "./CartPreview"

// Mock data for static frontend
const mockCartItems = [
  {
    id: 1,
    name: "2025 Daily Planner",
    price: 899,
    quantity: 1,
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 2,
    name: "Spiral Notebook",
    price: 299,
    quantity: 2,
    image: "/placeholder.svg?height=80&width=80",
  },
]

export function Cart() {
  const [items, setItems] = useState(mockCartItems)
  const [isOpen, setIsOpen] = useState(false)

  const updateQuantity = (id, quantity) => {
    if (quantity < 1) return
    setItems(items.map((item) => (item.id === id ? { ...item, quantity } : item)))
  }

  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id))
  }

  const itemCount = items.reduce((total, item) => total + item.quantity, 0)

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          {/* <ShoppingBag  /> */}
          <a href="/Cart">
          <img src="src\assets\icons\cart.png" alt="cart" className="h-11 w-12" />
          <span className="sr-only">Open cart</span>
          </a>
        </Button>
      </SheetTrigger>
    </Sheet>
  )
}

