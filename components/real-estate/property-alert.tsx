"use client"

import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Bell, MapPin, DollarSign, Home, Bed, Bath, Edit, Trash2, Plus } from "lucide-react"

interface PropertyAlert {
  id: string
  name: string
  location: string
  minPrice: number
  maxPrice: number
  propertyType: string
  minBedrooms: number
  maxBedrooms: number
  minBathrooms: number
  isActive: boolean
  frequency: "instant" | "daily" | "weekly"
  matchCount: number
  createdDate: string
  lastMatch?: string
}

interface PropertyAlertProps {
  userId?: string
}

const PropertyAlertComponent: React.FC<PropertyAlertProps> = ({ userId = "user1" }) => {
  const [alerts, setAlerts] = React.useState<PropertyAlert[]>([
    {
      id: "1",
      name: "Downtown Condos",
      location: "Downtown District",
      minPrice: 400000,
      maxPrice: 600000,
      propertyType: "Condo",
      minBedrooms: 2,
      maxBedrooms: 3,
      minBathrooms: 2,
      isActive: true,
      frequency: "instant",
      matchCount: 12,
      createdDate: "2024-01-10",
      lastMatch: "2024-01-18",
    },
    {
      id: "2",
      name: "Family Homes Suburbs",
      location: "Maple Heights",
      minPrice: 500000,
      maxPrice: 800000,
      propertyType: "House",
      minBedrooms: 3,
      maxBedrooms: 5,
      minBathrooms: 2,
      isActive: true,
      frequency: "daily",
      matchCount: 8,
      createdDate: "2024-01-05",
      lastMatch: "2024-01-17",
    },
    {
      id: "3",
      name: "Investment Properties",
      location: "Any",
      minPrice: 200000,
      maxPrice: 400000,
      propertyType: "Any",
      minBedrooms: 1,
      maxBedrooms: 3,
      minBathrooms: 1,
      isActive: false,
      frequency: "weekly",
      matchCount: 25,
      createdDate: "2023-12-20",
      lastMatch: "2024-01-15",
    },
  ])

  const [showCreateForm, setShowCreateForm] = React.useState(false)
  const [newAlert, setNewAlert] = React.useState({
    name: "",
    location: "",
    minPrice: "",
    maxPrice: "",
    propertyType: "Any",
    minBedrooms: "1",
    maxBedrooms: "5",
    minBathrooms: "1",
    frequency: "daily",
  })

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(price)
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    })
  }

  const toggleAlert = (alertId: string) => {
    setAlerts(alerts.map((alert) => (alert.id === alertId ? { ...alert, isActive: !alert.isActive } : alert)))
  }

  const deleteAlert = (alertId: string) => {
    setAlerts(alerts.filter((alert) => alert.id !== alertId))
  }

  const handleCreateAlert = () => {
    const alert: PropertyAlert = {
      id: Date.now().toString(),
      name: newAlert.name,
      location: newAlert.location,
      minPrice: Number.parseInt(newAlert.minPrice),
      maxPrice: Number.parseInt(newAlert.maxPrice),
      propertyType: newAlert.propertyType,
      minBedrooms: Number.parseInt(newAlert.minBedrooms),
      maxBedrooms: Number.parseInt(newAlert.maxBedrooms),
      minBathrooms: Number.parseInt(newAlert.minBathrooms),
      isActive: true,
      frequency: newAlert.frequency as "instant" | "daily" | "weekly",
      matchCount: 0,
      createdDate: new Date().toISOString().split("T")[0],
    }

    setAlerts([...alerts, alert])
    setShowCreateForm(false)
    setNewAlert({
      name: "",
      location: "",
      minPrice: "",
      maxPrice: "",
      propertyType: "Any",
      minBedrooms: "1",
      maxBedrooms: "5",
      minBathrooms: "1",
      frequency: "daily",
    })
  }

  return (
    <div className="w-full max-w-7xl mx-auto p-6">
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Property Alerts</h2>
            <p className="text-gray-600">Get notified when properties matching your criteria become available</p>
          </div>
          <Button onClick={() => setShowCreateForm(true)} className="bg-cyan-600 hover:bg-cyan-700">
            <Plus className="h-4 w-4 mr-2" />
            Create Alert
          </Button>
        </div>
      </div>

      {showCreateForm && (
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Create New Property Alert</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="alertName">Alert Name</Label>
                <Input
                  id="alertName"
                  placeholder="e.g., Downtown Condos"
                  value={newAlert.name}
                  onChange={(e) => setNewAlert({ ...newAlert, name: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  placeholder="e.g., Downtown District"
                  value={newAlert.location}
                  onChange={(e) => setNewAlert({ ...newAlert, location: e.target.value })}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="minPrice">Min Price</Label>
                <Input
                  id="minPrice"
                  type="number"
                  placeholder="400000"
                  value={newAlert.minPrice}
                  onChange={(e) => setNewAlert({ ...newAlert, minPrice: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="maxPrice">Max Price</Label>
                <Input
                  id="maxPrice"
                  type="number"
                  placeholder="600000"
                  value={newAlert.maxPrice}
                  onChange={(e) => setNewAlert({ ...newAlert, maxPrice: e.target.value })}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <Label htmlFor="propertyType">Property Type</Label>
                <Select
                  value={newAlert.propertyType}
                  onValueChange={(value) => setNewAlert({ ...newAlert, propertyType: value })}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Any">Any</SelectItem>
                    <SelectItem value="House">House</SelectItem>
                    <SelectItem value="Condo">Condo</SelectItem>
                    <SelectItem value="Apartment">Apartment</SelectItem>
                    <SelectItem value="Townhouse">Townhouse</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="minBedrooms">Min Bedrooms</Label>
                <Select
                  value={newAlert.minBedrooms}
                  onValueChange={(value) => setNewAlert({ ...newAlert, minBedrooms: value })}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1+</SelectItem>
                    <SelectItem value="2">2+</SelectItem>
                    <SelectItem value="3">3+</SelectItem>
                    <SelectItem value="4">4+</SelectItem>
                    <SelectItem value="5">5+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="maxBedrooms">Max Bedrooms</Label>
                <Select
                  value={newAlert.maxBedrooms}
                  onValueChange={(value) => setNewAlert({ ...newAlert, maxBedrooms: value })}
                >
                  <SelectTrigger>
                    <SelectValue />
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
              <div>
                <Label htmlFor="frequency">Frequency</Label>
                <Select
                  value={newAlert.frequency}
                  onValueChange={(value) => setNewAlert({ ...newAlert, frequency: value })}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="instant">Instant</SelectItem>
                    <SelectItem value="daily">Daily</SelectItem>
                    <SelectItem value="weekly">Weekly</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex gap-2 pt-4">
              <Button onClick={handleCreateAlert} className="bg-cyan-600 hover:bg-cyan-700">
                Create Alert
              </Button>
              <Button variant="outline" onClick={() => setShowCreateForm(false)}>
                Cancel
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {alerts.map((alert) => (
          <Card key={alert.id} className={`${alert.isActive ? "border-cyan-200" : "border-gray-200"}`}>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${alert.isActive ? "bg-cyan-100" : "bg-gray-100"}`}>
                    <Bell className={`h-5 w-5 ${alert.isActive ? "text-cyan-600" : "text-gray-400"}`} />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{alert.name}</CardTitle>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge
                        variant={alert.isActive ? "default" : "secondary"}
                        className={alert.isActive ? "bg-green-100 text-green-800" : ""}
                      >
                        {alert.isActive ? "Active" : "Paused"}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {alert.frequency}
                      </Badge>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Switch checked={alert.isActive} onCheckedChange={() => toggleAlert(alert.id)} />
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 w-8 p-0 text-red-600 hover:text-red-700"
                    onClick={() => deleteAlert(alert.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center text-sm text-gray-600">
                  <MapPin className="h-4 w-4 mr-2" />
                  {alert.location}
                </div>

                <div className="flex items-center text-sm text-gray-600">
                  <DollarSign className="h-4 w-4 mr-2" />
                  {formatPrice(alert.minPrice)} - {formatPrice(alert.maxPrice)}
                </div>

                <div className="flex items-center text-sm text-gray-600">
                  <Home className="h-4 w-4 mr-2" />
                  {alert.propertyType}
                </div>

                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Bed className="h-4 w-4 mr-1" />
                    {alert.minBedrooms}-{alert.maxBedrooms} bed
                  </div>
                  <div className="flex items-center">
                    <Bath className="h-4 w-4 mr-1" />
                    {alert.minBathrooms}+ bath
                  </div>
                </div>

                <div className="pt-3 border-t border-gray-100">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">{alert.matchCount} matches found</span>
                    <span className="text-gray-500">Created {formatDate(alert.createdDate)}</span>
                  </div>
                  {alert.lastMatch && (
                    <div className="text-xs text-gray-500 mt-1">Last match: {formatDate(alert.lastMatch)}</div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {alerts.length === 0 && (
        <div className="text-center py-12">
          <Bell className="h-16 w-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">No alerts set up yet</h3>
          <p className="text-gray-600 mb-6">Create your first property alert to get notified about new listings</p>
          <Button onClick={() => setShowCreateForm(true)} className="bg-cyan-600 hover:bg-cyan-700">
            <Plus className="h-4 w-4 mr-2" />
            Create Your First Alert
          </Button>
        </div>
      )}
    </div>
  )
}

export { PropertyAlertComponent as PropertyAlert }
export default PropertyAlertComponent
