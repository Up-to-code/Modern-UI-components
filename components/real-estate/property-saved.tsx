"use client"

import type React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Heart, MapPin, Bed, Bath, Square, Trash2, Share2, Calendar } from "lucide-react"

interface SavedProperty {
  id: string
  title: string
  price: string
  location: string
  bedrooms: number
  bathrooms: number
  area: string
  image: string
  type: string
  savedDate: string
  priceChange?: {
    amount: string
    direction: "up" | "down"
  }
}

interface PropertySavedProps {
  userId?: string
}

const PropertySaved: React.FC<PropertySavedProps> = ({ userId = "user1" }) => {
  const savedProperties: SavedProperty[] = [
    {
      id: "1",
      title: "Modern Family Home",
      price: "$525,000",
      location: "Oakwood Heights",
      bedrooms: 3,
      bathrooms: 2,
      area: "1,850 sq ft",
      image: "/placeholder.svg?height=200&width=300",
      type: "House",
      savedDate: "2024-01-15",
      priceChange: {
        amount: "$5,000",
        direction: "down",
      },
    },
    {
      id: "2",
      title: "Downtown Luxury Condo",
      price: "$485,000",
      location: "City Center",
      bedrooms: 2,
      bathrooms: 2,
      area: "1,200 sq ft",
      image: "/placeholder.svg?height=200&width=300",
      type: "Condo",
      savedDate: "2024-01-12",
    },
    {
      id: "3",
      title: "Suburban Townhouse",
      price: "$395,000",
      location: "Maple Ridge",
      bedrooms: 3,
      bathrooms: 2,
      area: "1,650 sq ft",
      image: "/placeholder.svg?height=200&width=300",
      type: "Townhouse",
      savedDate: "2024-01-10",
      priceChange: {
        amount: "$10,000",
        direction: "up",
      },
    },
    {
      id: "4",
      title: "Waterfront Apartment",
      price: "$675,000",
      location: "Harbor District",
      bedrooms: 2,
      bathrooms: 2,
      area: "1,400 sq ft",
      image: "/placeholder.svg?height=200&width=300",
      type: "Apartment",
      savedDate: "2024-01-08",
    },
  ]

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    })
  }

  const handleRemoveFromSaved = (propertyId: string) => {
    console.log(`Removing property ${propertyId} from saved`)
  }

  const handleShare = (propertyId: string) => {
    console.log(`Sharing property ${propertyId}`)
  }

  const handleScheduleViewing = (propertyId: string) => {
    console.log(`Scheduling viewing for property ${propertyId}`)
  }

  return (
    <div className="w-full max-w-7xl mx-auto p-6">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Saved Properties</h2>
        <p className="text-gray-600">{savedProperties.length} properties saved • Keep track of your favorites</p>
      </div>

      {savedProperties.length === 0 ? (
        <div className="text-center py-12">
          <Heart className="h-16 w-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">No saved properties yet</h3>
          <p className="text-gray-600 mb-6">Start saving properties you're interested in to keep track of them</p>
          <Button className="bg-cyan-600 hover:bg-cyan-700">Browse Properties</Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {savedProperties.map((property) => (
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
                    className="h-8 w-8 p-0 bg-white/90 hover:bg-white text-red-500"
                    onClick={() => handleRemoveFromSaved(property.id)}
                  >
                    <Heart className="h-4 w-4 fill-current" />
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="h-8 w-8 p-0 bg-white/90 hover:bg-white text-gray-600"
                    onClick={() => handleShare(property.id)}
                  >
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
                {property.priceChange && (
                  <div className="absolute bottom-3 left-3">
                    <Badge
                      variant={property.priceChange.direction === "down" ? "default" : "destructive"}
                      className={`${
                        property.priceChange.direction === "down"
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {property.priceChange.direction === "down" ? "↓" : "↑"} {property.priceChange.amount}
                    </Badge>
                  </div>
                )}
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

                <div className="flex items-center text-xs text-gray-500 mb-4">
                  <Calendar className="h-3 w-3 mr-1" />
                  Saved on {formatDate(property.savedDate)}
                </div>

                <div className="flex gap-2">
                  <Button className="flex-1 bg-cyan-600 hover:bg-cyan-700">View Details</Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="px-3 bg-transparent"
                    onClick={() => handleScheduleViewing(property.id)}
                  >
                    <Calendar className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="px-3 bg-transparent text-red-600 hover:text-red-700"
                    onClick={() => handleRemoveFromSaved(property.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      <div className="mt-8 flex justify-center gap-4">
        <Button variant="outline" size="lg" className="px-8 bg-transparent">
          Export List
        </Button>
        <Button variant="outline" size="lg" className="px-8 bg-transparent">
          Share Collection
        </Button>
      </div>
    </div>
  )
}

export default PropertySaved
export { PropertySaved }
