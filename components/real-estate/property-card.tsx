import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, MapPin, Bed, Bath, Square, Eye, Calendar } from "lucide-react"

interface PropertyCardProps {
  property: {
    id: number
    title: string
    price: string
    location: string
    beds: number
    baths: number
    sqft: string
    image: string
    featured?: boolean
    type: string
    daysOnMarket?: number
  }
}

export function PropertyCard({ property }: PropertyCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
      <div className="relative">
        <img
          src={property.image || "/placeholder.svg"}
          alt={property.title}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4 flex gap-2">
          <Badge variant={property.type === "For Sale" ? "default" : "secondary"}>{property.type}</Badge>
          {property.featured && <Badge variant="destructive">Featured</Badge>}
        </div>
        <Button size="icon" variant="ghost" className="absolute top-4 right-4 bg-white/80 hover:bg-white">
          <Heart className="h-4 w-4" />
        </Button>
        {property.daysOnMarket && (
          <div className="absolute bottom-4 left-4">
            <Badge variant="outline" className="bg-white/90">
              <Calendar className="h-3 w-3 mr-1" />
              {property.daysOnMarket} days
            </Badge>
          </div>
        )}
      </div>

      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-xl font-semibold text-foreground line-clamp-1">{property.title}</h3>
          <span className="text-2xl font-bold text-primary whitespace-nowrap ml-2">{property.price}</span>
        </div>

        <div className="flex items-center text-muted-foreground mb-4">
          <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
          <span className="text-sm line-clamp-1">{property.location}</span>
        </div>

        <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center">
              <Bed className="h-4 w-4 mr-1" />
              {property.beds}
            </div>
            <div className="flex items-center">
              <Bath className="h-4 w-4 mr-1" />
              {property.baths}
            </div>
            <div className="flex items-center">
              <Square className="h-4 w-4 mr-1" />
              {property.sqft} sqft
            </div>
          </div>
        </div>

        <Button className="w-full">
          <Eye className="mr-2 h-4 w-4" />
          View Details
        </Button>
      </CardContent>
    </Card>
  )
}
