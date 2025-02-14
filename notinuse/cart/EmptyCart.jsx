import { ShoppingBag } from "lucide-react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

export default function EmptyCart() {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <div className="rounded-full bg-gray-100 p-6">
        <ShoppingBag className="h-12 w-12 text-gray-400" />
      </div>
      <h2 className="mt-6 text-2xl font-semibold text-gray-900">Your cart is empty</h2>
      <p className="mt-2 text-center text-gray-500">
        Looks like you haven't added anything to your cart yet.
        <br />
        Browse our collection and find something you'll love.
      </p>
      <Button asChild className="mt-8 bg-black text-white hover:bg-gray-800">
        <Link to="/shop">Continue Shopping</Link>
      </Button>
    </div>
  )
}

