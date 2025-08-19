"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { MapPin, Bed, Bath, Square, Calendar, Heart, Share2 } from "lucide-react"

interface PropertyDetailsProps {
  property: {
    id: string
    title: string
    price: number
    location: string
    bedrooms: number
    bathrooms: number
    sqft: number
    type: string
    status: string
    images: string[]
    description: string
    agent: {
      name: string
      phone: string
      email: string
      image: string
    }
  }
}

export function PropertyDetails({ property }: PropertyDetailsProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(price)
  }

  const pricePerSqft = Math.round(property.price / property.sqft)

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <CardTitle className="text-2xl font-bold">{property.title}</CardTitle>
            <div className="flex items-center text-muted-foreground">
              <MapPin className="h-4 w-4 mr-1" />
              <span>{property.location}</span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold text-primary">{formatPrice(property.price)}</div>
            <div className="text-sm text-muted-foreground">${pricePerSqft}/sqft</div>
          </div>
        </div>

        <div className="flex items-center gap-2 mt-4">
          <Badge variant={property.status === "For Sale" ? "default" : "secondary"}>{property.status}</Badge>
          <Badge variant="outline">{property.type}</Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Key Features */}
        <div className="grid grid-cols-3 gap-4">
          <div className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg">
            <Bed className="h-5 w-5 text-primary" />
            <div>
              <div className="font-semibold">{property.bedrooms}</div>
              <div className="text-sm text-muted-foreground">Bedrooms</div>
            </div>
          </div>
          <div className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg">
            <Bath className="h-5 w-5 text-primary" />
            <div>
              <div className="font-semibold">{property.bathrooms}</div>
              <div className="text-sm text-muted-foreground">Bathrooms</div>
            </div>
          </div>
          <div className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg">
            <Square className="h-5 w-5 text-primary" />
            <div>
              <div className="font-semibold">{property.sqft.toLocaleString()}</div>
              <div className="text-sm text-muted-foreground">Sq Ft</div>
            </div>
          </div>
        </div>

        <Separator />

        {/* Description */}
        <div>
          <h3 className="font-semibold mb-2">Description</h3>
          <p className="text-muted-foreground leading-relaxed">{property.description}</p>
        </div>

        <Separator />

        {/* Property Details */}
        <div>
          <h3 className="font-semibold mb-4">Property Details</h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Property Type:</span>
              <span className="font-medium">{property.type}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Status:</span>
              <span className="font-medium">{property.status}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Bedrooms:</span>
              <span className="font-medium">{property.bedrooms}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Bathrooms:</span>
              <span className="font-medium">{property.bathrooms}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Square Feet:</span>
              <span className="font-medium">{property.sqft.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Price per Sq Ft:</span>
              <span className="font-medium">${pricePerSqft}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Year Built:</span>
              <span className="font-medium">2020</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Lot Size:</span>
              <span className="font-medium">0.25 acres</span>
            </div>
          </div>
        </div>

        <Separator />

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3">
          <Button className="flex-1 min-w-[120px]">
            <Calendar className="h-4 w-4 mr-2" />
            Schedule Tour
          </Button>
          <Button variant="outline" className="flex-1 min-w-[120px] bg-transparent">
            Contact Agent
          </Button>
          <Button variant="outline" size="icon">
            <Heart className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <Share2 className="h-4 w-4" />
          </Button>
        </div>

        {/* Agent Info */}
        <div className="bg-muted/30 p-4 rounded-lg">
          <h4 className="font-semibold mb-2">Listed by</h4>
          <div className="flex items-center gap-3">
            <img
              src={property.agent.image || "/placeholder.svg"}
              alt={property.agent.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <div className="font-medium">{property.agent.name}</div>
              <div className="text-sm text-muted-foreground">{property.agent.phone}</div>
              <div className="text-sm text-muted-foreground">{property.agent.email}</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
