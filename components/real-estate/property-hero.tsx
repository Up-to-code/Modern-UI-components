import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, MapPin, Home } from "lucide-react"

export function PropertyHero() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: "url('/placeholder.svg?height=800&width=1200')",
        }}
      />
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-center gap-2 mb-6">
          <Home className="h-8 w-8 text-primary" />
          <span className="text-2xl font-bold text-foreground">EstateHub</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
          Find Your
          <span className="text-primary block">Dream Home</span>
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Discover the perfect property with our comprehensive real estate platform. From luxury homes to investment
          opportunities.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
          <div className="relative flex-1">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input placeholder="Enter location, city, or neighborhood" className="pl-10 h-12 text-lg" />
          </div>
          <Button size="lg" className="h-12 px-8">
            <Search className="mr-2 h-5 w-5" />
            Search Properties
          </Button>
        </div>
      </div>
    </section>
  )
}
