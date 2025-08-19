import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Heart, Share2, MapPin, Bed, Bath, Square, Calendar } from "lucide-react"

interface PropertyDetailsModalProps {
  isOpen: boolean
  onClose: () => void
  property: {
    id: number
    title: string
    price: string
    location: string
    beds: number
    baths: number
    sqft: string
    images: string[]
    description: string
    features: string[]
    yearBuilt: number
    lotSize: string
  }
}

export function PropertyDetailsModal({ isOpen, onClose, property }: PropertyDetailsModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-start justify-between">
            <div>
              <DialogTitle className="text-2xl">{property.title}</DialogTitle>
              <div className="flex items-center text-muted-foreground mt-1">
                <MapPin className="h-4 w-4 mr-1" />
                {property.location}
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-primary">{property.price}</div>
              <div className="flex gap-2 mt-2">
                <Button size="sm" variant="outline">
                  <Heart className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="outline">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </DialogHeader>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="photos">Photos</TabsTrigger>
            <TabsTrigger value="details">Details</TabsTrigger>
            <TabsTrigger value="location">Location</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Main Image */}
            <div className="relative h-64 rounded-lg overflow-hidden">
              <img
                src={property.images[0] || "/placeholder.svg"}
                alt={property.title}
                className="w-full h-full object-cover"
              />
              <Badge className="absolute top-4 left-4">For Sale</Badge>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <Bed className="h-6 w-6 mx-auto mb-2 text-primary" />
                <div className="font-semibold">{property.beds}</div>
                <div className="text-sm text-muted-foreground">Bedrooms</div>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <Bath className="h-6 w-6 mx-auto mb-2 text-primary" />
                <div className="font-semibold">{property.baths}</div>
                <div className="text-sm text-muted-foreground">Bathrooms</div>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <Square className="h-6 w-6 mx-auto mb-2 text-primary" />
                <div className="font-semibold">{property.sqft}</div>
                <div className="text-sm text-muted-foreground">Square Feet</div>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <Calendar className="h-6 w-6 mx-auto mb-2 text-primary" />
                <div className="font-semibold">{property.yearBuilt}</div>
                <div className="text-sm text-muted-foreground">Year Built</div>
              </div>
            </div>

            {/* Description */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Description</h3>
              <p className="text-muted-foreground leading-relaxed">{property.description}</p>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Features & Amenities</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {property.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="photos" className="space-y-4">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {property.images.map((image, index) => (
                <div key={index} className="aspect-video rounded-lg overflow-hidden">
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`${property.title} - Photo ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform cursor-pointer"
                  />
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="details" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Property Information</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Property Type:</span>
                    <span>Single Family Home</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Year Built:</span>
                    <span>{property.yearBuilt}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Lot Size:</span>
                    <span>{property.lotSize}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Parking:</span>
                    <span>2-Car Garage</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Financial Details</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Price per sqft:</span>
                    <span>
                      $
                      {Math.round(
                        Number.parseInt(property.price.replace(/[$,]/g, "")) /
                          Number.parseInt(property.sqft.replace(",", "")),
                      )}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Property Tax:</span>
                    <span>$12,500/year</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">HOA Fee:</span>
                    <span>$250/month</span>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="location" className="space-y-4">
            <div className="h-64 bg-muted/20 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-primary mx-auto mb-2" />
                <p className="text-muted-foreground">Interactive map would be displayed here</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <div className="font-semibold">Walk Score</div>
                <div className="text-2xl font-bold text-primary">85</div>
                <div className="text-sm text-muted-foreground">Very Walkable</div>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <div className="font-semibold">Transit Score</div>
                <div className="text-2xl font-bold text-primary">72</div>
                <div className="text-sm text-muted-foreground">Excellent Transit</div>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <div className="font-semibold">Bike Score</div>
                <div className="text-2xl font-bold text-primary">68</div>
                <div className="text-sm text-muted-foreground">Very Bikeable</div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="flex gap-3 pt-4 border-t">
          <Button className="flex-1">Schedule Tour</Button>
          <Button variant="outline" className="flex-1 bg-transparent">
            Contact Agent
          </Button>
          <Button variant="outline">Get Pre-Approved</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
