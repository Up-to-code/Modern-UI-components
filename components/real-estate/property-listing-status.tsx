"use client"

import { useState } from "react"
import { Calendar, Clock, Eye, Heart, Share2, Phone, Mail, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ListingStatus {
  status: "active" | "pending" | "sold" | "withdrawn"
  listedDate: string
  daysOnMarket: number
  views: number
  saves: number
  inquiries: number
  lastUpdated: string
  priceHistory: {
    date: string
    price: number
    change?: number
  }[]
}

interface PropertyListingStatusProps {
  status: ListingStatus
  propertyTitle?: string
}

export function PropertyListingStatus({ status, propertyTitle = "Property" }: PropertyListingStatusProps) {
  const [isSaved, setIsSaved] = useState(false)

  const getStatusColor = (statusType: string) => {
    switch (statusType) {
      case "active":
        return "bg-green-100 text-green-800 border-green-200"
      case "pending":
        return "bg-amber-100 text-amber-800 border-amber-200"
      case "sold":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "withdrawn":
        return "bg-red-100 text-red-800 border-red-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getStatusLabel = (statusType: string) => {
    switch (statusType) {
      case "active":
        return "Active"
      case "pending":
        return "Pending Sale"
      case "sold":
        return "Sold"
      case "withdrawn":
        return "Withdrawn"
      default:
        return "Unknown"
    }
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: propertyTitle,
        text: `Check out this property: ${propertyTitle}`,
        url: window.location.href,
      })
    } else {
      navigator.clipboard.writeText(window.location.href)
    }
  }

  const handleSave = () => {
    setIsSaved(!isSaved)
  }

  const handleContact = (method: string) => {
    console.log(`Contact via ${method}`)
  }

  return (
    <div className="bg-white rounded-lg border p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(status.status)}`}>
            {getStatusLabel(status.status)}
          </span>
          <div className="text-sm text-gray-600">Listed {status.listedDate}</div>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={handleSave}
            className={isSaved ? "text-red-600 border-red-200" : ""}
          >
            <Heart className={`h-4 w-4 mr-2 ${isSaved ? "fill-current" : ""}`} />
            {isSaved ? "Saved" : "Save"}
          </Button>
          <Button variant="outline" size="sm" onClick={handleShare}>
            <Share2 className="h-4 w-4 mr-2" />
            Share
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-gray-50 rounded-lg p-3">
          <div className="flex items-center gap-2 mb-1">
            <Clock className="h-4 w-4 text-gray-500" />
            <span className="text-sm font-medium text-gray-700">Days on Market</span>
          </div>
          <div className="text-2xl font-bold text-gray-900">{status.daysOnMarket}</div>
        </div>

        <div className="bg-gray-50 rounded-lg p-3">
          <div className="flex items-center gap-2 mb-1">
            <Eye className="h-4 w-4 text-gray-500" />
            <span className="text-sm font-medium text-gray-700">Views</span>
          </div>
          <div className="text-2xl font-bold text-gray-900">{status.views?.toLocaleString() || "0"}</div>
        </div>

        <div className="bg-gray-50 rounded-lg p-3">
          <div className="flex items-center gap-2 mb-1">
            <Heart className="h-4 w-4 text-gray-500" />
            <span className="text-sm font-medium text-gray-700">Saves</span>
          </div>
          <div className="text-2xl font-bold text-gray-900">{status.saves}</div>
        </div>

        <div className="bg-gray-50 rounded-lg p-3">
          <div className="flex items-center gap-2 mb-1">
            <MessageSquare className="h-4 w-4 text-gray-500" />
            <span className="text-sm font-medium text-gray-700">Inquiries</span>
          </div>
          <div className="text-2xl font-bold text-gray-900">{status.inquiries}</div>
        </div>
      </div>

      {/* Price History */}
      {status.priceHistory && status.priceHistory.length > 0 && (
        <div className="mb-6">
          <h4 className="font-medium text-gray-900 mb-3">Recent Price Changes</h4>
          <div className="space-y-2">
            {status.priceHistory.slice(0, 3).map((entry, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-gray-400" />
                  <span className="text-sm text-gray-600">{entry.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-medium text-gray-900">${entry.price?.toLocaleString() || "0"}</span>
                  {entry.change && (
                    <span className={`text-sm ${entry.change > 0 ? "text-green-600" : "text-red-600"}`}>
                      ({entry.change > 0 ? "+" : ""}${entry.change?.toLocaleString() || "0"})
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Contact Actions */}
      {status.status === "active" && (
        <div className="pt-6 border-t">
          <h4 className="font-medium text-gray-900 mb-3">Interested in this property?</h4>
          <div className="flex flex-wrap gap-3">
            <Button onClick={() => handleContact("phone")} className="flex-1 sm:flex-none">
              <Phone className="h-4 w-4 mr-2" />
              Call Agent
            </Button>
            <Button variant="outline" onClick={() => handleContact("email")} className="flex-1 sm:flex-none">
              <Mail className="h-4 w-4 mr-2" />
              Email
            </Button>
            <Button variant="outline" onClick={() => handleContact("message")} className="flex-1 sm:flex-none">
              <MessageSquare className="h-4 w-4 mr-2" />
              Message
            </Button>
          </div>
        </div>
      )}

      {/* Status-specific Messages */}
      {status.status === "pending" && (
        <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
          <div className="text-sm font-medium text-amber-800 mb-1">Sale Pending</div>
          <div className="text-sm text-amber-700">
            This property is under contract but the sale has not yet closed. Contact the agent for backup offer
            opportunities.
          </div>
        </div>
      )}

      {status.status === "sold" && (
        <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <div className="text-sm font-medium text-blue-800 mb-1">Recently Sold</div>
          <div className="text-sm text-blue-700">
            This property has been sold. Contact the agent for similar properties in the area.
          </div>
        </div>
      )}

      <div className="mt-4 text-xs text-gray-500">Last updated: {status.lastUpdated}</div>
    </div>
  )
}
