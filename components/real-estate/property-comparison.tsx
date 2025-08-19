import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { X, Bed, Bath, Square, MapPin, DollarSign, Calendar } from "lucide-react"

const comparisonProperties = [
  {
    id: 1,
    title: "Modern Luxury Villa",
    price: "$1,250,000",
    location: "Beverly Hills, CA",
    beds: 4,
    baths: 3,
    sqft: "3,200",
    yearBuilt: 2020,
    lotSize: "0.5 acres",
    image: "/placeholder.svg?height=200&width=300",
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
    yearBuilt: 2018,
    lotSize: "N/A",
    image: "/placeholder.svg?height=200&width=300",
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
    yearBuilt: 2015,
    lotSize: "0.25 acres",
    image: "/placeholder.svg?height=200&width=300",
    type: "For Sale",
  },
]

export function PropertyComparison() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Property Comparison</CardTitle>
      </CardHeader>

      <CardContent>
        <div className="overflow-x-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 min-w-[800px]">
            {comparisonProperties.map((property) => (
              <div key={property.id} className="space-y-4">
                {/* Property Image and Header */}
                <div className="relative">
                  <img
                    src={property.image || "/placeholder.svg"}
                    alt={property.title}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <Button size="icon" variant="ghost" className="absolute top-2 right-2 bg-white/80 hover:bg-white">
                    <X className="h-4 w-4" />
                  </Button>
                  <Badge className="absolute bottom-2 left-2">{property.type}</Badge>
                </div>

                {/* Property Details */}
                <div className="space-y-3">
                  <div>
                    <h3 className="font-semibold text-foreground">{property.title}</h3>
                    <div className="flex items-center text-muted-foreground text-sm">
                      <MapPin className="h-3 w-3 mr-1" />
                      {property.location}
                    </div>
                  </div>

                  <div className="text-2xl font-bold text-primary">{property.price}</div>

                  {/* Comparison Metrics */}
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-between py-2 border-b">
                      <span className="flex items-center text-muted-foreground">
                        <Bed className="h-4 w-4 mr-2" />
                        Bedrooms
                      </span>
                      <span className="font-semibold">{property.beds}</span>
                    </div>

                    <div className="flex items-center justify-between py-2 border-b">
                      <span className="flex items-center text-muted-foreground">
                        <Bath className="h-4 w-4 mr-2" />
                        Bathrooms
                      </span>
                      <span className="font-semibold">{property.baths}</span>
                    </div>

                    <div className="flex items-center justify-between py-2 border-b">
                      <span className="flex items-center text-muted-foreground">
                        <Square className="h-4 w-4 mr-2" />
                        Square Feet
                      </span>
                      <span className="font-semibold">{property.sqft}</span>
                    </div>

                    <div className="flex items-center justify-between py-2 border-b">
                      <span className="flex items-center text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-2" />
                        Year Built
                      </span>
                      <span className="font-semibold">{property.yearBuilt}</span>
                    </div>

                    <div className="flex items-center justify-between py-2 border-b">
                      <span className="text-muted-foreground">Lot Size</span>
                      <span className="font-semibold">{property.lotSize}</span>
                    </div>

                    <div className="flex items-center justify-between py-2">
                      <span className="flex items-center text-muted-foreground">
                        <DollarSign className="h-4 w-4 mr-2" />
                        Price/sqft
                      </span>
                      <span className="font-semibold">
                        $
                        {Math.round(
                          Number.parseInt(property.price.replace(/[$,]/g, "")) /
                            Number.parseInt(property.sqft.replace(",", "")),
                        )}
                      </span>
                    </div>
                  </div>

                  <Button className="w-full bg-transparent" variant="outline">
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-6">
          <Button>Add Property to Compare</Button>
        </div>
      </CardContent>
    </Card>
  )
}
