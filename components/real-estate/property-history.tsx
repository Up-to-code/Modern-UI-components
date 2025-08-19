import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, TrendingUp, TrendingDown, Home, FileText, Eye } from "lucide-react"

interface HistoryEvent {
  id: string
  date: string
  type: "sale" | "listing" | "price_change" | "renovation" | "inspection"
  title: string
  description: string
  price?: number
  previousPrice?: number
  agent?: string
  details?: string
}

interface PropertyHistoryProps {
  propertyId?: string
  events?: HistoryEvent[]
  className?: string
}

const mockEvents: HistoryEvent[] = [
  {
    id: "1",
    date: "2024-01-15",
    type: "sale",
    title: "Property Sold",
    description: "Successfully sold to new owners",
    price: 850000,
    agent: "Sarah Johnson",
  },
  {
    id: "2",
    date: "2023-12-01",
    type: "price_change",
    title: "Price Reduced",
    description: "Price reduced to attract more buyers",
    price: 850000,
    previousPrice: 895000,
    agent: "Sarah Johnson",
  },
  {
    id: "3",
    date: "2023-10-15",
    type: "listing",
    title: "Listed for Sale",
    description: "Property listed on the market",
    price: 895000,
    agent: "Sarah Johnson",
  },
  {
    id: "4",
    date: "2023-08-20",
    type: "renovation",
    title: "Kitchen Renovation",
    description: "Complete kitchen remodel with modern appliances",
    details: "New cabinets, granite countertops, stainless steel appliances",
  },
  {
    id: "5",
    date: "2020-03-10",
    type: "sale",
    title: "Previous Sale",
    description: "Sold to previous owners",
    price: 720000,
    agent: "Mike Davis",
  },
]

function PropertyHistory({ propertyId = "prop-123", events = mockEvents, className = "" }: PropertyHistoryProps) {
  const getEventIcon = (type: string) => {
    switch (type) {
      case "sale":
        return <Home className="h-4 w-4" />
      case "listing":
        return <FileText className="h-4 w-4" />
      case "price_change":
        return <TrendingDown className="h-4 w-4" />
      case "renovation":
        return <TrendingUp className="h-4 w-4" />
      case "inspection":
        return <Eye className="h-4 w-4" />
      default:
        return <Calendar className="h-4 w-4" />
    }
  }

  const getEventColor = (type: string) => {
    switch (type) {
      case "sale":
        return "bg-green-100 text-green-800 border-green-200"
      case "listing":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "price_change":
        return "bg-orange-100 text-orange-800 border-orange-200"
      case "renovation":
        return "bg-purple-100 text-purple-800 border-purple-200"
      case "inspection":
        return "bg-gray-100 text-gray-800 border-gray-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price)
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <Card className={`w-full ${className}`}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calendar className="h-5 w-5 text-cyan-600" />
          Property History
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {events.map((event, index) => (
            <div key={event.id} className="relative">
              {/* Timeline line */}
              {index < events.length - 1 && <div className="absolute left-6 top-12 w-0.5 h-16 bg-gray-200" />}

              <div className="flex gap-4">
                {/* Icon */}
                <div
                  className={`flex-shrink-0 w-12 h-12 rounded-full border-2 flex items-center justify-center ${getEventColor(event.type)}`}
                >
                  {getEventIcon(event.type)}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-gray-900">{event.title}</h3>
                      <p className="text-sm text-gray-600 mt-1">{event.description}</p>
                      {event.details && <p className="text-sm text-gray-500 mt-1">{event.details}</p>}
                      {event.agent && <p className="text-sm text-gray-500 mt-1">Agent: {event.agent}</p>}
                    </div>

                    <div className="text-right flex-shrink-0 ml-4">
                      <p className="text-sm text-gray-500">{formatDate(event.date)}</p>
                      {event.price && (
                        <div className="mt-1">
                          <p className="font-semibold text-gray-900">{formatPrice(event.price)}</p>
                          {event.previousPrice && (
                            <p className="text-sm text-red-600 line-through">{formatPrice(event.previousPrice)}</p>
                          )}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Price change indicator */}
                  {event.type === "price_change" && event.price && event.previousPrice && (
                    <div className="mt-2">
                      <Badge variant="outline" className="text-red-600 border-red-200">
                        <TrendingDown className="h-3 w-3 mr-1" />-{formatPrice(event.previousPrice - event.price)}{" "}
                        reduction
                      </Badge>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View more button */}
        <div className="mt-6 pt-4 border-t">
          <Button variant="outline" className="w-full bg-transparent">
            <FileText className="h-4 w-4 mr-2" />
            View Complete Property Report
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export { PropertyHistory }
export default PropertyHistory
