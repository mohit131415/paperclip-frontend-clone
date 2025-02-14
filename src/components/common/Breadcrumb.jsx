import { ChevronRight, Home } from "lucide-react"
import { Link } from "react-router-dom"

export default function Breadcrumb({ items = [] }) {
  return (
    <nav aria-label="Breadcrumb" className="w-full">
      <ol className="flex items-center space-x-2 text-sm">
        <li>
          <Link to="/" className="text-gray-500 hover:text-gray-700 flex items-center">
            <Home className="h-4 w-4" />
            <span className="sr-only">Home</span>
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <ChevronRight className="h-4 w-4 text-gray-400" />
            {index === items.length - 1 ? (
              <span className="ml-2 text-sm font-medium text-gray-700" aria-current="page">
                {item.name}
              </span>
            ) : (
              <Link to={item.href} className="ml-2 text-sm font-medium text-gray-500 hover:text-gray-700">
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

