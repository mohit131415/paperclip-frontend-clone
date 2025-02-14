'use client'

import { useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { searchProducts } from "@/store/slices/productSlice"
import ProductCard from "notinuse/shop/ProductCard"
import { Loader } from "@/components/common/Loader"
import { Button } from "@/components/ui/button"

export default function SearchPage() {
  const [searchParams] = useSearchParams()
  const query = searchParams.get("q")
  const dispatch = useDispatch()
  const { products, isLoading, totalPages, currentPage } = useSelector(
    (state) => state.products
  )

  useEffect(() => {
    if (query) {
      dispatch(searchProducts({ query, page: 1 }))
    }
  }, [dispatch, query])

  if (isLoading && !products.length) {
    return <Loader />
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="border-b pb-4">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900">
          Search Results
        </h1>
        <p className="mt-2 text-sm text-gray-500">
          {products.length} results found for "{query}"
        </p>
      </div>

      <div className="mt-6">
        {products.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">
              No products found matching your search.
            </p>
            <Button
              variant="outline"
              className="mt-4"
              onClick={() => window.history.back()}
            >
              Go Back
            </Button>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
              {products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>

            {totalPages > 1 && (
              <div className="mt-8 flex justify-center">
                <Button
                  variant="outline"
                  className="w-full sm:w-auto"
                  onClick={() =>
                    dispatch(searchProducts({ 
                      query, 
                      page: currentPage + 1 
                    }))
                  }
                  disabled={currentPage >= totalPages}
                >
                  Load More Results
                </Button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}
