import type React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Heart, MapPin, Bed, Bath, Square, Eye } from "lucide-react"

interface SimilarProperty {
  id: string
  title: string
  price: string
  location: string
  bedrooms: number
  bathrooms: number
  area: string
  image: string
  type: string
  isLiked: boolean
  views: number
}

interface PropertySimilarProps {
  currentPropertyId?: string
  maxResults?: number
}

const PropertySimilar: React.FC<PropertySimilarProps> = ({ currentPropertyId = "1", maxResults = 6 }) => {
  const similarProperties: SimilarProperty[] = [
    {
      id: "2",
      title: "Modern Downtown Condo",
      price: "$485,000",
      location: "Downtown District",
      bedrooms: 2,
      bathrooms: 2,
      area: "1,200 sq ft",
      image: "/placeholder.svg?height=200&width=300",
      type: "Condo",
      isLiked: false,
      views: 234,
    },
    {
      id: "3",
      title: "Luxury Suburban Home",
      price: "$750,000",
      location: "Maple Heights",
      bedrooms: 4,
      bathrooms: 3,
      area: "2,800 sq ft",
      image: "/placeholder.svg?height=200&width=300",
      type: "House",
      isLiked: true,
      views: 456,
    },
    {
      id: "4",
      title: "Cozy Garden Apartment",
      price: "$320,000",
      location: "Garden District",
      bedrooms: 1,
      bathrooms: 1,
      area: "850 sq ft",
      image: "/placeholder.svg?height=200&width=300",
      type: "Apartment",
      isLiked: false,
      views: 189,
    },
    {
      id: "5",
      title: "Executive Penthouse",
      price: "$1,200,000",
      location: "City Center",
      bedrooms: 3,
      bathrooms: 3,
      area: "2,200 sq ft",
      image: "/placeholder.svg?height=200&width=300",
      type: "Penthouse",
      isLiked: false,
      views: 678,
    },
    {
      id: "6",
      title: "Family Townhouse",
      price: "$565,000",
      location: "Riverside",
      bedrooms: 3,
      bathrooms: 2,
      area: "1,800 sq ft",
      image: "/placeholder.svg?height=200&width=300",
      type: "Townhouse",
      isLiked: true,
      views: 345,
    },
    {
      id: "7",
      title: "Studio Loft",
      price: "$280,000",
      location: "Arts Quarter",
      bedrooms: 1,
      bathrooms: 1,
      area: "650 sq ft",
      image: "/placeholder.svg?height=200&width=300",
      type: "Studio",
      isLiked: false,
      views: 123,
    },
  ]

  const displayProperties = similarProperties.slice(0, maxResults)

  return (
    <div className="w-full max-w-7xl mx-auto p-6">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Similar Properties</h2>
        <p className="text-gray-600">Properties you might also be interested in</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayProperties.map((property) => (
          <Card key={property.id} className="group hover:shadow-lg transition-shadow duration-300">
            <div className="relative">
              <img
                src={property.image || "/placeholder.svg"}
                alt={property.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="absolute top-3 left-3">
                <Badge variant="secondary" className="bg-white/90 text-gray-800">
                  {property.type}
                </Badge>
              </div>
              <div className="absolute top-3 right-3 flex gap-2">
                <Button
                  size="sm"
                  variant="ghost"
                  className={`h-8 w-8 p-0 bg-white/90 hover:bg-white ${
                    property.isLiked ? "text-red-500" : "text-gray-600"
                  }`}
                >
                  <Heart className={`h-4 w-4 ${property.isLiked ? "fill-current" : ""}`} />
                </Button>
              </div>
              <div className="absolute bottom-3 right-3">
                <div className="flex items-center gap-1 bg-black/70 text-white px-2 py-1 rounded text-xs">
                  <Eye className="h-3 w-3" />
                  {property.views}
                </div>
              </div>
            </div>

            <CardContent className="p-4">
              <div className="mb-3">
                <h3 className="font-semibold text-lg text-gray-900 mb-1 group-hover:text-cyan-600 transition-colors">
                  {property.title}
                </h3>
                <div className="flex items-center text-gray-600 text-sm mb-2">
                  <MapPin className="h-4 w-4 mr-1" />
                  {property.location}
                </div>
                <div className="text-2xl font-bold text-cyan-600">{property.price}</div>
              </div>

              <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                <div className="flex items-center gap-1">
                  <Bed className="h-4 w-4" />
                  {property.bedrooms} bed
                </div>
                <div className="flex items-center gap-1">
                  <Bath className="h-4 w-4" />
                  {property.bathrooms} bath
                </div>
                <div className="flex items-center gap-1">
                  <Square className="h-4 w-4" />
                  {property.area}
                </div>
              </div>

              <div className="flex gap-2">
                <Button className="flex-1 bg-cyan-600 hover:bg-cyan-700">View Details</Button>
                <Button variant="outline" size="sm" className="px-3 bg-transparent">
                  Compare
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Button variant="outline" size="lg" className="px-8 bg-transparent">
          View More Similar Properties
        </Button>
      </div>
    </div>
  )
}

export { PropertySimilar }
export default PropertySimilar
