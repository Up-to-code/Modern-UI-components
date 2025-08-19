import { ChevronRight, Home } from "lucide-react"

interface BreadcrumbItem {
  label: string
  href?: string
  current?: boolean
}

interface PropertyBreadcrumbProps {
  items?: BreadcrumbItem[]
  className?: string
}

const defaultItems: BreadcrumbItem[] = [
  { label: "Home", href: "/" },
  { label: "Properties", href: "/properties" },
  { label: "San Francisco", href: "/properties?location=san-francisco" },
  { label: "Single Family Homes", href: "/properties?type=single-family" },
  { label: "123 Oak Street", current: true },
]

function PropertyBreadcrumb({ items = defaultItems, className = "" }: PropertyBreadcrumbProps) {
  return (
    <nav className={`flex items-center space-x-1 text-sm text-gray-600 ${className}`} aria-label="Breadcrumb">
      <ol className="flex items-center space-x-1">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {index === 0 && <Home className="h-4 w-4 mr-1 text-gray-500" />}

            {item.current ? (
              <span className="font-medium text-gray-900" aria-current="page">
                {item.label}
              </span>
            ) : (
              <a href={item.href} className="hover:text-cyan-600 transition-colors duration-200">
                {item.label}
              </a>
            )}

            {index < items.length - 1 && <ChevronRight className="h-4 w-4 mx-2 text-gray-400" />}
          </li>
        ))}
      </ol>
    </nav>
  )
}

export { PropertyBreadcrumb }
export default PropertyBreadcrumb
