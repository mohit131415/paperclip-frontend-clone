'use client'

import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { fetchProductById } from "@/store/slices/productSlice"
import Breadcrumb from "@/components/common/Breadcrumb"
import { Loader } from "@/components/common/Loader"
import ProductGallery from "./components/ProductGallery"
import ProductInfo from "./components/ProductInfo"
import ProductSlider from "notinuse/shop/ProductSlider"
import { Separator } from "@/components/ui/separator"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

export default function ProductDetailPage() {
  const { slug } = useParams()
  const dispatch = useDispatch()
  const { product, relatedProducts, isLoading } = useSelector((state) => state.products)

  useEffect(() => {
    dispatch(fetchProductById(slug))
  }, [dispatch, slug])

  if (isLoading || !product) {
    return <Loader />
  }

  const breadcrumbItems = [
    { name: "Shop", href: "/shop" },
    { name: product.category?.name, href: `/shop/${product.category?.slug}` },
    { name: product.name },
  ]

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <Breadcrumb items={breadcrumbItems} />

      <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
        <ProductGallery images={product.images} />
        <ProductInfo product={product} />
      </div>

      <div className="mt-16">
        <Tabs defaultValue="description">
          <TabsList className="w-full justify-start border-b">
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="specifications">Specifications</TabsTrigger>
            <TabsTrigger value="shipping">Shipping</TabsTrigger>
          </TabsList>
          
          <TabsContent value="description" className="mt-8 prose max-w-none">
            <div dangerouslySetInnerHTML={{ __html: product.description }} />
          </TabsContent>
          
          <TabsContent value="specifications" className="mt-8">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {product.specifications?.map((spec, index) => (
                <div key={index} className="flex justify-between border-b py-2">
                  <span className="font-medium">{spec.name}</span>
                  <span className="text-gray-500">{spec.value}</span>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="shipping" className="mt-8 prose max-w-none">
            <h3>Shipping Information</h3>
            <ul>
              <li>Free shipping on orders above ₹1000</li>
              <li>Delivery within 5-7 business days</li>
              <li>Secure packaging for safe delivery</li>
            </ul>
          </TabsContent>
        </Tabs>
      </div>

      <Separator className="my-16" />

      {relatedProducts?.length > 0 && (
        <section className="mb-16">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Related Products
          </h2>
          <div className="mt-6">
            <ProductSlider products={relatedProducts} />
          </div>
        </section>
      )}
    </div>
  )
}
