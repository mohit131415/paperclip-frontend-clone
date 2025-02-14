"use client"

import { useState } from "react"
import { Check } from "lucide-react"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const sortOptions = [
  { label: "Newest First", value: "-createdAt" },
  { label: "Price: Low to High", value: "price" },
  { label: "Price: High to Low", value: "-price" },
  { label: "Popularity", value: "-numReviews" },
  { label: "Best Rating", value: "-rating" },
]

export default function SortDropdown({ onSort, defaultValue = "-createdAt" }) {
  const [selected, setSelected] = useState(defaultValue)

  const handleSort = (value) => {
    setSelected(value)
    onSort(value)
  }

  return (
    <div className="flex items-center space-x-2">
      <span className="text-sm text-gray-500">Sort by:</span>
      <Select value={selected} onValueChange={handleSort}>
        <SelectTrigger className="w-[180px]">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {sortOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                <div className="flex items-center justify-between">
                  <span>{option.label}</span>
                  {selected === option.value && <Check className="ml-2 h-4 w-4" />}
                </div>
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}

