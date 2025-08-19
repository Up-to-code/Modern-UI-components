import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { TrendingUp, Home, MapPin, Calculator } from "lucide-react"

export function PropertyValuation() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5" />
          Property Valuation
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            Property Address
          </Label>
          <Input placeholder="Enter full address" />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-2">
            <Label>Bedrooms</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Beds" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1</SelectItem>
                <SelectItem value="2">2</SelectItem>
                <SelectItem value="3">3</SelectItem>
                <SelectItem value="4">4</SelectItem>
                <SelectItem value="5">5+</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Bathrooms</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Baths" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1</SelectItem>
                <SelectItem value="2">2</SelectItem>
                <SelectItem value="3">3</SelectItem>
                <SelectItem value="4">4+</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <Label>Square Footage</Label>
          <Input type="number" placeholder="e.g. 2000" />
        </div>

        <div className="space-y-2">
          <Label className="flex items-center gap-2">
            <Home className="h-4 w-4" />
            Property Type
          </Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="house">Single Family Home</SelectItem>
              <SelectItem value="condo">Condominium</SelectItem>
              <SelectItem value="townhouse">Townhouse</SelectItem>
              <SelectItem value="apartment">Apartment</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button className="w-full">
          <Calculator className="mr-2 h-4 w-4" />
          Get Instant Valuation
        </Button>

        <div className="bg-muted/50 rounded-lg p-4 space-y-2">
          <div className="text-sm text-muted-foreground">Estimated Value Range</div>
          <div className="text-2xl font-bold text-primary">$650K - $750K</div>
          <div className="text-sm text-muted-foreground">Based on recent comparable sales in your area</div>
        </div>

        <Button variant="outline" className="w-full bg-transparent">
          Get Detailed Report
        </Button>
      </CardContent>
    </Card>
  )
}
