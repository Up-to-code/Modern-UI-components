import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card } from "@/components/ui/card"
import { Search, SlidersHorizontal, MapPin, DollarSign, Home, Bed } from "lucide-react"

export function PropertySearch() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <Card className="p-8 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 items-end">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Location
              </label>
              <Input placeholder="City, State, ZIP" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground flex items-center gap-2">
                <Home className="h-4 w-4" />
                Property Type
              </label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Any Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="house">House</SelectItem>
                  <SelectItem value="apartment">Apartment</SelectItem>
                  <SelectItem value="condo">Condo</SelectItem>
                  <SelectItem value="townhouse">Townhouse</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground flex items-center gap-2">
                <DollarSign className="h-4 w-4" />
                Price Range
              </label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Any Price" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0-200k">$0 - $200k</SelectItem>
                  <SelectItem value="200k-500k">$200k - $500k</SelectItem>
                  <SelectItem value="500k-1m">$500k - $1M</SelectItem>
                  <SelectItem value="1m+">$1M+</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground flex items-center gap-2">
                <Bed className="h-4 w-4" />
                Bedrooms
              </label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Any" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1+</SelectItem>
                  <SelectItem value="2">2+</SelectItem>
                  <SelectItem value="3">3+</SelectItem>
                  <SelectItem value="4">4+</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button variant="outline" className="h-10 bg-transparent">
              <SlidersHorizontal className="mr-2 h-4 w-4" />
              More Filters
            </Button>

            <Button className="h-10">
              <Search className="mr-2 h-4 w-4" />
              Search
            </Button>
          </div>
        </Card>
      </div>
    </section>
  )
}
