import { useState, useCallback, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useSearchParams } from "react-router-dom"
import { searchProducts } from "@/store/slices/productSlice"
import debounce from "lodash/debounce"

export function useSearch() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const [query, setQuery] = useState(searchParams.get("q") || "")
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const { searchResults, isLoading, error } = useSelector((state) => state.products)

  // Debounced search function
  const debouncedSearch = useCallback(
    debounce((searchQuery) => {
      if (searchQuery.trim()) {
        dispatch(searchProducts({ query: searchQuery }))
      }
    }, 300),
    [], // Removed unnecessary dependency: [dispatch]
  )

  useEffect(() => {
    if (query) {
      debouncedSearch(query)
    }
    return () => {
      debouncedSearch.cancel()
    }
  }, [query, debouncedSearch])

  const handleSearch = (searchQuery) => {
    setQuery(searchQuery)
    if (searchQuery.trim()) {
      setIsSearchOpen(true)
    } else {
      setIsSearchOpen(false)
    }
  }

  const handleSelect = (item) => {
    setIsSearchOpen(false)
    setQuery("")
    navigate(`/product/${item.slug}`)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (query.trim()) {
      setIsSearchOpen(false)
      navigate(`/search?q=${encodeURIComponent(query)}`)
    }
  }

  const clearSearch = () => {
    setQuery("")
    setIsSearchOpen(false)
  }

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Open search on CMD/CTRL + K
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault()
        setIsSearchOpen(true)
      }
      // Close search on ESC
      if (e.key === "Escape") {
        setIsSearchOpen(false)
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [])

  return {
    query,
    isSearchOpen,
    searchResults,
    isLoading,
    error,
    handleSearch,
    handleSelect,
    handleSubmit,
    clearSearch,
    setIsSearchOpen,
  }
}

