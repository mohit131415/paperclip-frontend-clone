"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Slider } from "@/components/ui/slider"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FilterSidebar({ categories, priceRange, selectedFilters, onFilterChange, isMobile = false }) {
  const [filters, setFilters] = useState(selectedFilters)
  const [price, setPrice] = useState([priceRange.min, priceRange.max])

  useEffect(() => {
    setFilters(selectedFilters)
  }, [selectedFilters])

  const handleFilterChange = (type, value) => {
    const newFilters = { ...filters }

    if (type === "category") {
      if (newFilters.categories?.includes(value)) {
        newFilters.categories = newFilters.categories.filter((cat) => cat !== value)
      } else {
        newFilters.categories = [...(newFilters.categories || []), value]
      }
    } else if (type === "price") {
      newFilters.price = value
      setPrice(value)
    }

    setFilters(newFilters)
    onFilterChange(newFilters)
  }

  const clearFilters = () => {
    setFilters({})
    setPrice([priceRange.min, priceRange.max])
    onFilterChange({})
  }

  const FilterContent = () => (
    <div className="flex h-full flex-col">
      <div className="flex items-center justify-between border-b p-4">
        <h2 className="text-lg font-semibold">Filters</h2>
        <Button variant="ghost" onClick={clearFilters}>
          Clear all
        </Button>
      </div>

      <div className="flex-1 overflow-y-auto">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="categories">
            <AccordionTrigger className="px-4">Categories</AccordionTrigger>
            <AccordionContent className="px-4">
              <div className="space-y-2">
                {categories.map((category) => (
                  <div key={category._id} className="flex items-center space-x-2">
                    <Checkbox
                      id={category._id}
                      checked={filters.categories?.includes(category._id)}
                      onCheckedChange={(checked) => handleFilterChange("category", category._id)}
                    />
                    <label
                      htmlFor={category._id}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {category.name}
                    </label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="price">
            <AccordionTrigger className="px-4">Price Range</AccordionTrigger>
            <AccordionContent className="px-4">
              <div className="space-y-4">
                <Slider
                  value={price}
                  min={priceRange.min}
                  max={priceRange.max}
                  step={100}
                  onValueChange={(value) => handleFilterChange("price", value)}
                  className="mt-2"
                />
                <div className="flex items-center justify-between text-sm">
                  <span>₹{price[0]}</span>
                  <span>₹{price[1]}</span>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="availability">
            <AccordionTrigger className="px-4">Availability</AccordionTrigger>
            <AccordionContent className="px-4">
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="in-stock"
                    checked={filters.inStock}
                    onCheckedChange={(checked) => handleFilterChange("inStock", checked)}
                  />
                  <label htmlFor="in-stock" className="text-sm font-medium leading-none">
                    In Stock
                  </label>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )

  if (isMobile) {
    return (
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" className="lg:hidden">
            Filters
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-full sm:w-[300px] p-0">
          <FilterContent />
        </SheetContent>
      </Sheet>
    )
  }

  return (
    <div className="hidden lg:block w-[300px] border rounded-lg">
      <FilterContent />
    </div>
  )
}

