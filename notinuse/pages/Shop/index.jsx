'use client'

import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchProducts } from "@/store/slices/productSlice"
import { fetchCategories } from "@/store/slices/categorySlice"
import ProductCard from "notinuse/shop/ProductCard"
import FilterSidebar from "notinuse/shop/FilterSidebar"
import SortDropdown from "notinuse/shop/SortDropdown"
import { Loader } from "@/components/common/Loader"
import { Button } from "@/components/ui/button"
import { Grid3x3, List } from 'lucide-react'

export default function ShopPage() {
  const dispatch = useDispatch()
  const [view, setView] = useState('grid')
  const [filters, setFilters] = useState({})
  const [sort, setSort] = useState('-createdAt')
  const { products, isLoading, totalPages, currentPage } = useSelector((state) => state.products)
  const { categories } = useSelector((state) => state.categories)

  useEffect(() => {
    dispatch(fetchCategories())
  }, [dispatch])

  useEffect(() => {
    dispatch(fetchProducts({ ...filters, sort, page: currentPage }))
  }, [dispatch, filters, sort, currentPage])

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters)
  }

  const handleSort = (value) => {
    setSort(value)
  }

  if (isLoading && !products.length) {
    return <Loader />
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between border-b pb-4">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900">
          All Products
        </h1>
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex">
            <Button
              variant={view === 'grid' ? 'default' : 'ghost'}
              size="icon"
              onClick={() => setView('grid')}
            >
              <Grid3x3 className="h-4 w-4" />
              <span className="sr-only">Grid view</span>
            </Button>
            <Button
              variant={view === 'list' ? 'default' : 'ghost'}
              size="icon"
              onClick={() => setView('list')}
            >
              <List className="h-4 w-4" />
              <span className="sr-only">List view</span>
            </Button>
          </div>
          <SortDropdown onSort={handleSort} defaultValue={sort} />
        </div>
      </div>

      <div className="mt-6 lg:grid lg:grid-cols-12 lg:gap-8">
        <div className="hidden lg:col-span-3 lg:block">
          <FilterSidebar
            categories={categories}
            priceRange={{ min: 0, max: 5000 }}
            selectedFilters={filters}
            onFilterChange={handleFilterChange}
          />
        </div>

        <div className="lg:col-span-9">
          <div className="lg:hidden mb-6">
            <FilterSidebar
              categories={categories}
              priceRange={{ min: 0, max: 5000 }}
              selectedFilters={filters}
              onFilterChange={handleFilterChange}
              isMobile
            />
          </div>

          {products.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500">No products found matching your criteria.</p>
            </div>
          ) : (
            <>
              <div className={`grid gap-6 ${
                view === 'grid' 
                  ? 'grid-cols-2 sm:grid-cols-2 md:grid-cols-3' 
                  : 'grid-cols-1'
              }`}>
                {products.map((product) => (
                  <ProductCard 
                    key={product._id} 
                    product={product}
                    view={view}
                  />
                ))}
              </div>

              {totalPages > 1 && (
                <div className="mt-8 flex justify-center">
                  <Button
                    variant="outline"
                    className="w-full sm:w-auto"
                    onClick={() => dispatch(fetchProducts({ 
                      ...filters, 
                      sort, 
                      page: currentPage + 1 
                    }))}
                    disabled={currentPage >= totalPages}
                  >
                    Load More Products
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  )
}
