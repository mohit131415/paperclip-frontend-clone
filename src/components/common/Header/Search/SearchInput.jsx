import { SearchIcon } from 'lucide-react'
import { Input } from "@/components/ui/input"

export function SearchInput({ onFocus, value, onChange }) {
  return (
    <div className="relative">
      <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-500" />
      <Input
        type="search"
        placeholder="Search products..."
        className="h-10 w-full rounded-none border-x-0 border-b border-t-0 pl-10 text-sm focus-visible:ring-0"
        value={value}
        onChange={onChange}
        onFocus={onFocus}
      />
    </div>
  )
}
