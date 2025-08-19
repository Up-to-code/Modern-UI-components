import { PropertyCard } from "./property-card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Grid, List, SlidersHorizontal } from "lucide-react"

const sampleProperties = [
  {
    id: 1,
    title: "Modern Luxury Villa",
    price: "$1,250,000",
    location: "Beverly Hills, CA",
    beds: 4,
    baths: 3,
    sqft: "3,200",
    image: "/placeholder.svg?height=300&width=400",
    featured: true,
    type: "For Sale",
    daysOnMarket: 12,
  },
  {
    id: 2,
    title: "Downtown Penthouse",
    price: "$850,000",
    location: "Manhattan, NY",
    beds: 3,
    baths: 2,
    sqft: "2,100",
    image: "/placeholder.svg?height=300&width=400",
    featured: false,
    type: "For Sale",
    daysOnMarket: 5,
  },
  {
    id: 3,
    title: "Cozy Family Home",
    price: "$650,000",
    location: "Austin, TX",
    beds: 3,
    baths: 2,
    sqft: "1,800",
    image: "/placeholder.svg?height=300&width=400",
    featured: false,
    type: "For Sale",
    daysOnMarket: 23,
  },
  {
    id: 4,
    title: "Waterfront Condo",
    price: "$2,100/mo",
    location: "Miami, FL",
    beds: 2,
    baths: 2,
    sqft: "1,400",
    image: "/placeholder.svg?height=300&width=400",
    featured: true,
    type: "For Rent",
  },
  {
    id: 5,
    title: "Mountain Retreat",
    price: "$950,000",
    location: "Aspen, CO",
    beds: 5,
    baths: 4,
    sqft: "4,500",
    image: "/placeholder.svg?height=300&width=400",
    featured: false,
    type: "For Sale",
    daysOnMarket: 8,
  },
  {
    id: 6,
    title: "Urban Loft",
    price: "$1,800/mo",
    location: "Portland, OR",
    beds: 1,
    baths: 1,
    sqft: "900",
    image: "/placeholder.svg?height=300&width=400",
    featured: false,
    type: "For Rent",
  },
]

export function PropertyListingGrid() {
  return (
    <div className="space-y-6">
      {/* Header with controls */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Property Listings</h2>
          <p className="text-muted-foreground">{sampleProperties.length} properties found</p>
        </div>

        <div className="flex items-center gap-3">
          <Select defaultValue="newest">
            <SelectTrigger className="w-40">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest First</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="beds">Most Bedrooms</SelectItem>
              <SelectItem value="sqft">Largest First</SelectItem>
            </SelectContent>
          </Select>

          <div className="flex border rounded-md">
            <Button variant="ghost" size="sm" className="rounded-r-none">
              <Grid className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" className="rounded-l-none">
              <List className="h-4 w-4" />
            </Button>
          </div>

          <Button variant="outline" size="sm">
            <SlidersHorizontal className="mr-2 h-4 w-4" />
            Filters
          </Button>
        </div>
      </div>

      {/* Property Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sampleProperties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>

      {/* Load More */}
      <div className="text-center pt-8">
        <Button variant="outline" size="lg">
          Load More Properties
        </Button>
      </div>
    </div>
  )
}
