import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Navigation, Layers } from "lucide-react"

export function PropertyMap() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Explore Properties on Map</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover properties in your preferred neighborhoods with our interactive map view.
          </p>
        </div>

        <Card className="overflow-hidden">
          <CardHeader className="bg-muted/50">
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                Interactive Property Map
              </CardTitle>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Navigation className="mr-2 h-4 w-4" />
                  My Location
                </Button>
                <Button variant="outline" size="sm">
                  <Layers className="mr-2 h-4 w-4" />
                  Layers
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="relative h-96 bg-muted/20 flex items-center justify-center">
              <div
                className="absolute inset-0 bg-cover bg-center opacity-60"
                style={{
                  backgroundImage: "url('/placeholder.svg?height=400&width=800')",
                }}
              />
              <div className="relative z-10 text-center">
                <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Interactive Map Coming Soon</h3>
                <p className="text-muted-foreground mb-4">Explore properties with our advanced mapping features</p>
                <Button>Enable Map View</Button>
              </div>

              {/* Sample property markers */}
              <div className="absolute top-1/4 left-1/3 w-4 h-4 bg-primary rounded-full border-2 border-white shadow-lg animate-pulse" />
              <div className="absolute top-1/2 right-1/4 w-4 h-4 bg-accent rounded-full border-2 border-white shadow-lg animate-pulse" />
              <div className="absolute bottom-1/3 left-1/2 w-4 h-4 bg-primary rounded-full border-2 border-white shadow-lg animate-pulse" />
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
