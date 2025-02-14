'use client'

import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { fetchCategoryProducts } from "@/store/slices/productSlice"
import { fetchCategories } from "@/store/slices/categorySlice"
import ProductCard from "notinuse/shop/ProductCard"
import Breadcrumb from "@/components/common/Breadcrumb"
import { Loader } from "@/components/common/Loader"

export default function CategoriesPage() {
  const { slug } = useParams()
  const dispatch = useDispatch()
  const { products, isLoading } = useSelector((state) => state.products)
  const { categories } = useSelector((state) => state.categories)
  const category = categories.find(c => c.slug === slug)

  useEffect(() => {
    dispatch(fetchCategories())
  }, [dispatch])

  useEffect(() => {
    if (category?._id) {
      dispatch(fetchCategoryProducts(category._id))
    }
  }, [dispatch, category])

  if (isLoading || !category) {
    return <Loader />
  }

  const breadcrumbItems = [
    { name: "Shop", href: "/shop" },
    { name: category.name },
  ]

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <Breadcrumb items={breadcrumbItems} />

      <div className="mt-6">
        <div className="flex flex-col items-center justify-between gap-4 border-b pb-4 sm:flex-row">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-gray-900">
              {category.name}
            </h1>
            <p className="mt-2 text-sm text-gray-500">
              {category.description}
            </p>
          </div>
        </div>

        {category.subcategories?.length > 0 && (
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {category.subcategories.map((subcategory) => (
              <div
                key={subcategory.name}
                className="group relative overflow-hidden rounded-lg border bg-white p-4 hover:border-black"
              >
                {subcategory.image && (
                  <img
                    src={subcategory.image.url || "/placeholder.svg"}
                    alt={subcategory.name}
                    className="mx-auto h-32 w-32 object-contain"
                  />
                )}
                <h3 className="mt-4 text-center text-sm font-medium text-gray-900">
                  {subcategory.name}
                </h3>
              </div>
            ))}
          </div>
        )}

        <div className="mt-8">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
            {products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>

          {products.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">
                No products found in this category.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
