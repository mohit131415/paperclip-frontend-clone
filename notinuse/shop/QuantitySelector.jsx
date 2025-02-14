"use client"

import { Minus, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function QuantitySelector({ quantity, onChange, min = 1, max, disabled = false }) {
  const handleQuantityChange = (value) => {
    // Convert to number and ensure within bounds
    const newValue = Math.max(min, Math.min(max || Number.POSITIVE_INFINITY, Number(value)))
    if (!isNaN(newValue) && newValue !== quantity) {
      onChange(newValue)
    }
  }

  const handleInputChange = (e) => {
    const value = e.target.value
    if (value === "") {
      onChange(min)
    } else {
      handleQuantityChange(Number.parseInt(value, 10))
    }
  }

  const increment = () => {
    if (!max || quantity < max) {
      handleQuantityChange(quantity + 1)
    }
  }

  const decrement = () => {
    if (quantity > min) {
      handleQuantityChange(quantity - 1)
    }
  }

  return (
    <div className="flex items-center space-x-2">
      <div className="flex items-center rounded-md border">
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 rounded-none border-r"
          onClick={decrement}
          disabled={disabled || quantity <= min}
        >
          <Minus className="h-3 w-3" />
          <span className="sr-only">Decrease quantity</span>
        </Button>

        <Input
          type="number"
          min={min}
          max={max}
          value={quantity}
          onChange={handleInputChange}
          className="h-8 w-12 border-0 text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          disabled={disabled}
        />

        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 rounded-none border-l"
          onClick={increment}
          disabled={disabled || (max !== undefined && quantity >= max)}
        >
          <Plus className="h-3 w-3" />
          <span className="sr-only">Increase quantity</span>
        </Button>
      </div>

      {max !== undefined && <span className="text-sm text-gray-500">{max} available</span>}
    </div>
  )
}

