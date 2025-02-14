"use client"

import { useState } from "react"
import { SearchIcon, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { SearchResults } from "./SearchResults"

// Mock data for static frontend
const mockProducts = [
  {
    id: 1,
    name: "2025 Daily Planner",
    price: 899,
    image: "/placeholder.svg?height=64&width=64",
  },
  {
    id: 2,
    name: "Spiral Notebook",
    price: 299,
    image: "/placeholder.svg?height=64&width=64",
  },
  {
    id: 3,
    name: "Desk Organizer",
    price: 1499,
    image: "/placeholder.svg?height=64&width=64",
  },
]

export function Search() {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [results, setResults] = useState([])

  const handleSearch = (e) => {
    const value = e.target.value
    setQuery(value)
    setIsLoading(true)

    // Simulate API call for static frontend
    setTimeout(() => {
      setResults(
        value ? mockProducts.filter((product) => product.name.toLowerCase().includes(value.toLowerCase())) : [],
      )
      setIsLoading(false)
    }, 500)
  }

  return (
    <>
      {!isOpen ? (
        <Button variant="ghost" size="icon" onClick={() => setIsOpen(true)}>
          {/* <SearchIcon className="h-11 w-11" /> */}
          <img src="src\assets\icons\search.png" alt="search" className="ml-2 h-5 w-5" />
          <span className="sr-only">Search</span>
        </Button>
      ) : (
        <>
          <div className="fixed inset-0 z-50 bg-white border-black">
            <div className="container mx-auto flex h-20 items-center justify-center px-4">
              <div className="relative flex w-[500px] items-center">
                <Input
                  type="search"
                  placeholder="Search"
                  className="h-10 w-full border-1 border-black bg-transparent text-base placeholder:text-neutral-500 focus-visible:ring-0"
                  value={query}
                  onChange={handleSearch}
                  autoFocus
                />
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon" type="submit">
                    <SearchIcon className="h-5 w-5" />
                    <span className="sr-only cursor-pointer">Search</span>
                  </Button>
                  <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                    <X className="h-5 w-5" />
                    <span className="sr-only cursor-pointer ">Close</span>
                  </Button>
                </div>
              </div>
            </div>
            {(query || isLoading) && (
              <SearchResults results={results} isLoading={isLoading} onClose={() => setIsOpen(false)} />
            )}
          </div>
        </>
      )}
    </>
  )
}

