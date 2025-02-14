import { Image } from 'lucide-react'

export function SearchResults({ results, isLoading, onClose }) {
  if (isLoading) {
    return (
      <div className="absolute left-0 top-full z-50 w-full bg-white py-4 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center py-8">
            <div className="h-6 w-6 animate-spin rounded-full border-2 border-neutral-900 border-t-transparent" />
          </div>
        </div>
      </div>
    )
  }

  if (results.length === 0) {
    return (
      <div className="absolute left-0 top-full z-50 w-full bg-white py-4 shadow-lg">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm text-neutral-600">No products found</p>
        </div>
      </div>
    )
  }

  return (
    <div className="absolute left-0 top-full z-50 w-full bg-white py-4 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="grid gap-4">
          {results.map((product) => (
            <a
              key={product.id}
              href={`/products/${product.id}`}
              className="flex items-center gap-4 hover:bg-neutral-50"
              onClick={onClose}
            >
              <div className="relative h-16 w-16 flex-shrink-0 bg-neutral-100">
                {product.image ? (
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center">
                    <Image className="h-6 w-6 text-neutral-400" />
                  </div>
                )}
              </div>
              <div>
                <h3 className="text-sm font-medium">{product.name}</h3>
                <p className="text-sm text-neutral-600">₹{product.price.toFixed(2)}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
