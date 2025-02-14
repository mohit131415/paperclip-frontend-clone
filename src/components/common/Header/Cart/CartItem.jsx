import { Minus, Plus, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CartItem({ item, onUpdateQuantity, onRemove }) {
  return (
    <div className="flex gap-4 py-4">
      <div className="relative h-20 w-20 flex-shrink-0 bg-neutral-100">
        <img src={item.image || "/placeholder.svg"} alt={item.name} className="h-full w-full object-cover" />
      </div>
      <div className="flex flex-1 flex-col">
        <div className="flex justify-between">
          <h3 className="text-sm font-medium">{item.name}</h3>
          <button onClick={() => onRemove(item.id)} className="text-neutral-400 hover:text-neutral-900">
            <X className="h-4 w-4" />
            <span className="sr-only">Remove</span>
          </button>
        </div>
        <p className="mt-1 text-sm text-neutral-600">₹{item.price.toFixed(2)}</p>
        <div className="mt-2 flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8"
            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
            disabled={item.quantity <= 1}
          >
            <Minus className="h-4 w-4" />
            <span className="sr-only">Decrease quantity</span>
          </Button>
          <span className="w-8 text-center text-sm">{item.quantity}</span>
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8"
            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
          >
            <Plus className="h-4 w-4" />
            <span className="sr-only">Increase quantity</span>
          </Button>
        </div>
      </div>
    </div>
  )
}

