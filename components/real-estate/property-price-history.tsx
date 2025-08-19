"use client"

import { TrendingUp, TrendingDown, Calendar } from "lucide-react"

interface PriceEvent {
  date: string
  price: number
  event: "listed" | "price_change" | "sold" | "withdrawn"
  description?: string
}

interface PropertyPriceHistoryProps {
  priceHistory?: PriceEvent[] // Made priceHistory optional
  currentPrice: number
}

export function PropertyPriceHistory({ priceHistory = [], currentPrice }: PropertyPriceHistoryProps) {
  const safeHistory = Array.isArray(priceHistory) ? priceHistory : []

  const getEventIcon = (event: string) => {
    switch (event) {
      case "listed":
        return <Calendar className="h-4 w-4 text-blue-600" />
      case "price_change":
        return <TrendingUp className="h-4 w-4 text-amber-600" />
      case "sold":
        return <TrendingUp className="h-4 w-4 text-green-600" />
      case "withdrawn":
        return <TrendingDown className="h-4 w-4 text-red-600" />
      default:
        return <Calendar className="h-4 w-4 text-gray-600" />
    }
  }

  const getEventColor = (event: string) => {
    switch (event) {
      case "listed":
        return "bg-blue-50 border-blue-200"
      case "price_change":
        return "bg-amber-50 border-amber-200"
      case "sold":
        return "bg-green-50 border-green-200"
      case "withdrawn":
        return "bg-red-50 border-red-200"
      default:
        return "bg-gray-50 border-gray-200"
    }
  }

  const getEventLabel = (event: string) => {
    switch (event) {
      case "listed":
        return "Listed"
      case "price_change":
        return "Price Change"
      case "sold":
        return "Sold"
      case "withdrawn":
        return "Withdrawn"
      default:
        return "Event"
    }
  }

  const calculatePriceChange = (currentPrice: number, previousPrice: number) => {
    const change = currentPrice - previousPrice
    const percentage = (change / previousPrice) * 100
    return { change, percentage }
  }

  const sortedHistory = [...safeHistory].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return (
    <div className="bg-white rounded-lg border p-6">
      <h3 className="text-lg font-semibold mb-6">Price History</h3>

      <div className="space-y-4">
        {/* Current Price */}
        <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-cyan-700 font-medium">Current Price</div>
              <div className="text-2xl font-bold text-cyan-900">${currentPrice?.toLocaleString() || "0"}</div>
            </div>
            {sortedHistory.length > 0 && (
              <div className="text-right">
                {(() => {
                  const { change, percentage } = calculatePriceChange(currentPrice, sortedHistory[0].price)
                  return (
                    <div className={`flex items-center gap-1 ${change >= 0 ? "text-green-600" : "text-red-600"}`}>
                      {change >= 0 ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
                      <span className="text-sm font-medium">
                        {change >= 0 ? "+" : ""}${Math.abs(change).toLocaleString()} ({percentage.toFixed(1)}%)
                      </span>
                    </div>
                  )
                })()}
                <div className="text-xs text-gray-500">vs. last event</div>
              </div>
            )}
          </div>
        </div>

        {/* Price History Timeline */}
        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gray-200"></div>

          <div className="space-y-4">
            {sortedHistory.map((event, index) => (
              <div
                key={index}
                className={`relative flex items-start gap-4 p-4 rounded-lg border ${getEventColor(event.event)}`}
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white border-2 border-current">
                  {getEventIcon(event.event)}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-gray-900">{getEventLabel(event.event)}</span>
                      <span className="text-sm text-gray-500">{event.date}</span>
                    </div>
                    <div className="text-lg font-bold text-gray-900">${event.price.toLocaleString()}</div>
                  </div>

                  {event.description && <p className="text-sm text-gray-600">{event.description}</p>}

                  {index < sortedHistory.length - 1 && (
                    <div className="mt-2">
                      {(() => {
                        const { change, percentage } = calculatePriceChange(event.price, sortedHistory[index + 1].price)
                        return (
                          <div
                            className={`inline-flex items-center gap-1 text-xs ${change >= 0 ? "text-green-600" : "text-red-600"}`}
                          >
                            {change >= 0 ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                            <span>
                              {change >= 0 ? "+" : ""}${Math.abs(change).toLocaleString()} ({percentage.toFixed(1)}%)
                              from previous
                            </span>
                          </div>
                        )
                      })()}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {safeHistory.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          <TrendingUp className="h-12 w-12 mx-auto mb-3 text-gray-300" />
          <p>No price history available for this property</p>
        </div>
      )}
    </div>
  )
}

export { PropertyPriceHistory as default }
