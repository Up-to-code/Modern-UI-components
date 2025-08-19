"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, Calendar, Heart, Share2, Calculator, MapPin, Clock } from "lucide-react"

interface PropertyCTAProps {
  propertyId?: string
  price?: number
  status?: "available" | "pending" | "sold" | "off-market"
  agentName?: string
  agentPhone?: string
  agentEmail?: string
  isLiked?: boolean
  className?: string
  onScheduleTour?: () => void
  onContact?: () => void
  onLike?: () => void
  onShare?: () => void
  onCalculate?: () => void
}

function PropertyCTA({
  propertyId = "prop-123",
  price = 850000,
  status = "available",
  agentName = "Sarah Johnson",
  agentPhone = "(555) 123-4567",
  agentEmail = "sarah@realestate.com",
  isLiked = false,
  className = "",
  onScheduleTour = () => console.log("Schedule tour clicked"),
  onContact = () => console.log("Contact agent clicked"),
  onLike = () => console.log("Like clicked"),
  onShare = () => console.log("Share clicked"),
  onCalculate = () => console.log("Calculate clicked"),
}: PropertyCTAProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "available":
        return "bg-green-100 text-green-800 border-green-200"
      case "pending":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "sold":
        return "bg-red-100 text-red-800 border-red-200"
      case "off-market":
        return "bg-gray-100 text-gray-800 border-gray-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const isAvailable = status === "available"

  return (
    <Card className={`w-full sticky top-4 ${className}`}>
      <CardContent className="p-6">
        {/* Price and Status */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-2xl font-bold text-gray-900">{formatPrice(price)}</h3>
            <p className="text-sm text-gray-600">Listed Price</p>
          </div>
          <Badge variant="outline" className={getStatusColor(status)}>
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </Badge>
        </div>

        {/* Primary Actions */}
        <div className="space-y-3 mb-6">
          <Button onClick={onScheduleTour} className="w-full bg-cyan-600 hover:bg-cyan-700" disabled={!isAvailable}>
            <Calendar className="h-4 w-4 mr-2" />
            Schedule a Tour
          </Button>

          <Button
            onClick={onContact}
            variant="outline"
            className="w-full border-cyan-600 text-cyan-600 hover:bg-cyan-50 bg-transparent"
            disabled={!isAvailable}
          >
            <Phone className="h-4 w-4 mr-2" />
            Contact Agent
          </Button>
        </div>

        {/* Secondary Actions */}
        <div className="grid grid-cols-3 gap-2 mb-6">
          <Button
            onClick={onLike}
            variant="outline"
            size="sm"
            className={`${isLiked ? "bg-red-50 border-red-200 text-red-600" : ""}`}
          >
            <Heart className={`h-4 w-4 ${isLiked ? "fill-current" : ""}`} />
          </Button>

          <Button onClick={onShare} variant="outline" size="sm">
            <Share2 className="h-4 w-4" />
          </Button>

          <Button onClick={onCalculate} variant="outline" size="sm">
            <Calculator className="h-4 w-4" />
          </Button>
        </div>

        {/* Agent Information */}
        <div className="border-t pt-4">
          <h4 className="font-semibold text-gray-900 mb-2">Listing Agent</h4>
          <div className="space-y-2">
            <p className="text-sm font-medium text-gray-900">{agentName}</p>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Phone className="h-3 w-3" />
              <a href={`tel:${agentPhone}`} className="hover:text-cyan-600">
                {agentPhone}
              </a>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Mail className="h-3 w-3" />
              <a href={`mailto:${agentEmail}`} className="hover:text-cyan-600">
                {agentEmail}
              </a>
            </div>
          </div>
        </div>

        {/* Quick Info */}
        <div className="border-t pt-4 mt-4">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="flex items-center gap-2 text-gray-600">
              <MapPin className="h-3 w-3" />
              <span>Virtual Tour Available</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Clock className="h-3 w-3" />
              <span>Quick Response</span>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        {!isAvailable && (
          <div className="mt-4 p-3 bg-gray-50 rounded-lg">
            <p className="text-xs text-gray-600 text-center">
              This property is currently {status}. Contact the agent for more information.
            </p>
          </div>
        )}

        {/* Mortgage Calculator Link */}
        <div className="mt-4">
          <Button variant="ghost" className="w-full text-sm text-gray-600 hover:text-cyan-600">
            <Calculator className="h-4 w-4 mr-2" />
            Calculate Monthly Payment
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export { PropertyCTA }
export default PropertyCTA
