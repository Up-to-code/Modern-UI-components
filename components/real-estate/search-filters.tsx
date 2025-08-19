import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SlidersHorizontal, X, MapPin, DollarSign, Home, Bed, Bath, Square } from "lucide-react"

export function SearchFilters() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center justify-between">
          <span className="flex items-center gap-2">
            <SlidersHorizontal className="h-5 w-5" />
            Filters
          </span>
          <Button variant="ghost" size="sm">
            <X className="h-4 w-4" />
          </Button>
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Location */}
        <div className="space-y-2">
          <Label className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            Location
          </Label>
          <Input placeholder="City, State, ZIP" />
        </div>

        {/* Property Type */}
        <div className="space-y-2">
          <Label className="flex items-center gap-2">
            <Home className="h-4 w-4" />
            Property Type
          </Label>
          <div className="space-y-2">
            {["House", "Apartment", "Condo", "Townhouse", "Land"].map((type) => (
              <div key={type} className="flex items-center space-x-2">
                <Checkbox id={type} />
                <Label htmlFor={type} className="text-sm">
                  {type}
                </Label>
              </div>
            ))}
          </div>
        </div>

        {/* Price Range */}
        <div className="space-y-3">
          <Label className="flex items-center gap-2">
            <DollarSign className="h-4 w-4" />
            Price Range
          </Label>
          <div className="px-2">
            <Slider defaultValue={[200000, 800000]} max={2000000} min={50000} step={10000} className="w-full" />
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>$200K</span>
            <span className="flex-1 text-center">to</span>
            <span>$800K</span>
          </div>
        </div>

        {/* Bedrooms */}
        <div className="space-y-2">
          <Label className="flex items-center gap-2">
            <Bed className="h-4 w-4" />
            Bedrooms
          </Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Any" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="any">Any</SelectItem>
              <SelectItem value="1">1+</SelectItem>
              <SelectItem value="2">2+</SelectItem>
              <SelectItem value="3">3+</SelectItem>
              <SelectItem value="4">4+</SelectItem>
              <SelectItem value="5">5+</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Bathrooms */}
        <div className="space-y-2">
          <Label className="flex items-center gap-2">
            <Bath className="h-4 w-4" />
            Bathrooms
          </Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Any" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="any">Any</SelectItem>
              <SelectItem value="1">1+</SelectItem>
              <SelectItem value="2">2+</SelectItem>
              <SelectItem value="3">3+</SelectItem>
              <SelectItem value="4">4+</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Square Footage */}
        <div className="space-y-3">
          <Label className="flex items-center gap-2">
            <Square className="h-4 w-4" />
            Square Footage
          </Label>
          <div className="px-2">
            <Slider defaultValue={[1000, 3000]} max={10000} min={500} step={100} className="w-full" />
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>1,000 sqft</span>
            <span className="flex-1 text-center">to</span>
            <span>3,000 sqft</span>
          </div>
        </div>

        {/* Additional Features */}
        <div className="space-y-2">
          <Label>Additional Features</Label>
          <div className="space-y-2">
            {["Pool", "Garage", "Fireplace", "Garden", "Balcony"].map((feature) => (
              <div key={feature} className="flex items-center space-x-2">
                <Checkbox id={feature} />
                <Label htmlFor={feature} className="text-sm">
                  {feature}
                </Label>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-2 pt-4">
          <Button className="w-full">Apply Filters</Button>
          <Button variant="outline" className="w-full bg-transparent">
            Clear All
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
