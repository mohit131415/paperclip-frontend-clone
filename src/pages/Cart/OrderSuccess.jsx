import { Link } from "react-router-dom"
import { CheckCircle } from "lucide-react"

export default function OrderSuccess() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto text-center">
        <CheckCircle className="w-16 h-16 mx-auto mb-6 text-green-500" />
        <h1 className="text-2xl font-medium mb-4">Thank you for your order!</h1>
        <p className="text-gray-600 mb-8">We've received your order and will send you an email confirmation shortly.</p>
        <Link
          to="/shop"
          className="inline-block border border-black px-8 py-2 hover:bg-black hover:text-white transition-colors"
        >
          Continue shopping
        </Link>
      </div>
    </div>
  )
}

