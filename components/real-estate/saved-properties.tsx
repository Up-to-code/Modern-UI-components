import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, Trash2, Eye, Share2 } from "lucide-react"

const savedProperties = [
  {
    id: 1,
    title: "Modern Luxury Villa",
    price: "$1,250,000",
    location: "Beverly Hills, CA",
    image: "/placeholder.svg?height=100&width=150",
    savedDate: "2 days ago",
    priceChange: "+$25K",
  },
  {
    id: 2,
    title: "Downtown Penthouse",
    price: "$850,000",
    location: "Manhattan, NY",
    image: "/placeholder.svg?height=100&width=150",
    savedDate: "1 week ago",
    priceChange: "-$15K",
  },
  {
    id: 3,
    title: "Cozy Family Home",
    price: "$650,000",
    location: "Austin, TX",
    image: "/placeholder.svg?height=100&width=150",
    savedDate: "3 days ago",
    priceChange: null,
  },
]

export function SavedProperties() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Heart className="h-5 w-5" />
          Saved Properties ({savedProperties.length})
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        {savedProperties.map((property) => (
          <div key={property.id} className="flex gap-4 p-4 border rounded-lg hover:bg-muted/50 transition-colors">
            <img
              src={property.image || "/placeholder.svg"}
              alt={property.title}
              className="w-24 h-16 object-cover rounded flex-shrink-0"
            />

            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between mb-1">
                <h4 className="font-semibold text-foreground truncate">{property.title}</h4>
                <div className="text-right flex-shrink-0 ml-2">
                  <div className="font-bold text-primary">{property.price}</div>
                  {property.priceChange && (
                    <Badge
                      variant={property.priceChange.startsWith("+") ? "destructive" : "secondary"}
                      className="text-xs"
                    >
                      {property.priceChange}
                    </Badge>
                  )}
                </div>
              </div>

              <p className="text-sm text-muted-foreground mb-2">{property.location}</p>
              <p className="text-xs text-muted-foreground">Saved {property.savedDate}</p>
            </div>

            <div className="flex flex-col gap-1 flex-shrink-0">
              <Button size="sm" variant="ghost">
                <Eye className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="ghost">
                <Share2 className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="ghost" className="text-destructive hover:text-destructive">
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}

        {savedProperties.length === 0 && (
          <div className="text-center py-8 text-muted-foreground">
            <Heart className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <p>No saved properties yet</p>
            <p className="text-sm">Start browsing to save your favorites</p>
          </div>
        )}

        <Button variant="outline" className="w-full bg-transparent">
          View All Saved Properties
        </Button>
      </CardContent>
    </Card>
  )
}
