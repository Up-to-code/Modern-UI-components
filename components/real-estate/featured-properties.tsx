import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, MapPin, Bed, Bath, Square, Eye } from "lucide-react"

const properties = [
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

export function FeaturedProperties() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Featured Properties</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our handpicked selection of premium properties available for sale and rent.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {properties.map((property) => (
            <Card key={property.id} className="overflow-hidden hover:shadow-xl transition-shadow group">
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
              </div>

              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-foreground">{property.title}</h3>
                  <span className="text-2xl font-bold text-primary">{property.price}</span>
                </div>

                <div className="flex items-center text-muted-foreground mb-4">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-sm">{property.location}</span>
                </div>

                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center">
                      <Bed className="h-4 w-4 mr-1" />
                      {property.beds} beds
                    </div>
                    <div className="flex items-center">
                      <Bath className="h-4 w-4 mr-1" />
                      {property.baths} baths
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
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg">
            View All Properties
          </Button>
        </div>
      </div>
    </section>
  )
}
