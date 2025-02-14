import { ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CartItem } from "./CartItem"

export function CartPreview({ items, onUpdateQuantity, onRemove, onClose }) {
  const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0)

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-8">
        <ShoppingBag className="h-12 w-12 text-neutral-300" />
        <p className="mt-4 text-sm text-neutral-600">Your cart is empty</p>
      </div>
    )
  }

  return (
    <div className="grid gap-4">
      <div className="max-h-[60vh] overflow-auto">
        {items.map((item) => (
          <CartItem key={item.id} item={item} onUpdateQuantity={onUpdateQuantity} onRemove={onRemove} />
        ))}
      </div>
      <div className="border-t pt-4">
        <div className="flex justify-between text-sm">
          <span>Subtotal</span>
          <span className="font-medium">₹{subtotal.toFixed(2)}</span>
        </div>
        <p className="mt-1 text-xs text-neutral-600">Shipping and taxes calculated at checkout</p>
        <Button className="mt-4 w-full" onClick={onClose} asChild>
          <a href="/checkout">Checkout</a>
        </Button>
      </div>
    </div>
  )
}

