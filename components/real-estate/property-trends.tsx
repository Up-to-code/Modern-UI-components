import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { TrendingUp, TrendingDown, BarChart3, Calendar, MapPin, DollarSign } from "lucide-react"

interface TrendData {
  period: string
  averagePrice: number
  priceChange: number
  salesVolume: number
  daysOnMarket: number
}

interface PropertyTrendsProps {
  location?: string
  propertyType?: string
  trends?: TrendData[]
  className?: string
}

const mockTrends: TrendData[] = [
  {
    period: "2024 Q1",
    averagePrice: 875000,
    priceChange: 5.2,
    salesVolume: 142,
    daysOnMarket: 28,
  },
  {
    period: "2023 Q4",
    averagePrice: 831000,
    priceChange: 2.8,
    salesVolume: 156,
    daysOnMarket: 32,
  },
  {
    period: "2023 Q3",
    averagePrice: 808000,
    priceChange: -1.5,
    salesVolume: 189,
    daysOnMarket: 45,
  },
  {
    period: "2023 Q2",
    averagePrice: 820000,
    priceChange: 3.1,
    salesVolume: 203,
    daysOnMarket: 38,
  },
]

function PropertyTrends({
  location = "Downtown Area",
  propertyType = "Single Family Homes",
  trends = mockTrends,
  className = "",
}: PropertyTrendsProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price)
  }

  const formatPercentage = (value: number) => {
    const sign = value >= 0 ? "+" : ""
    return `${sign}${value.toFixed(1)}%`
  }

  const currentTrend = trends[0]
  const previousTrend = trends[1]

  return (
    <Card className={`w-full ${className}`}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BarChart3 className="h-5 w-5 text-cyan-600" />
          Market Trends
        </CardTitle>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <MapPin className="h-4 w-4" />
          {location} • {propertyType}
        </div>
      </CardHeader>
      <CardContent>
        {/* Current Market Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Average Price</p>
                <p className="text-2xl font-bold text-gray-900">{formatPrice(currentTrend.averagePrice)}</p>
              </div>
              <DollarSign className="h-8 w-8 text-cyan-600" />
            </div>
            <div className="flex items-center mt-2">
              {currentTrend.priceChange >= 0 ? (
                <TrendingUp className="h-4 w-4 text-green-600 mr-1" />
              ) : (
                <TrendingDown className="h-4 w-4 text-red-600 mr-1" />
              )}
              <span
                className={`text-sm font-medium ${currentTrend.priceChange >= 0 ? "text-green-600" : "text-red-600"}`}
              >
                {formatPercentage(currentTrend.priceChange)} vs last quarter
              </span>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Sales Volume</p>
                <p className="text-2xl font-bold text-gray-900">{currentTrend.salesVolume}</p>
              </div>
              <BarChart3 className="h-8 w-8 text-cyan-600" />
            </div>
            <div className="flex items-center mt-2">
              {currentTrend.salesVolume >= previousTrend.salesVolume ? (
                <TrendingUp className="h-4 w-4 text-green-600 mr-1" />
              ) : (
                <TrendingDown className="h-4 w-4 text-red-600 mr-1" />
              )}
              <span
                className={`text-sm font-medium ${
                  currentTrend.salesVolume >= previousTrend.salesVolume ? "text-green-600" : "text-red-600"
                }`}
              >
                {currentTrend.salesVolume - previousTrend.salesVolume > 0 ? "+" : ""}
                {currentTrend.salesVolume - previousTrend.salesVolume} properties
              </span>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Days on Market</p>
                <p className="text-2xl font-bold text-gray-900">{currentTrend.daysOnMarket}</p>
              </div>
              <Calendar className="h-8 w-8 text-cyan-600" />
            </div>
            <div className="flex items-center mt-2">
              {currentTrend.daysOnMarket <= previousTrend.daysOnMarket ? (
                <TrendingDown className="h-4 w-4 text-green-600 mr-1" />
              ) : (
                <TrendingUp className="h-4 w-4 text-red-600 mr-1" />
              )}
              <span
                className={`text-sm font-medium ${
                  currentTrend.daysOnMarket <= previousTrend.daysOnMarket ? "text-green-600" : "text-red-600"
                }`}
              >
                {currentTrend.daysOnMarket - previousTrend.daysOnMarket > 0 ? "+" : ""}
                {currentTrend.daysOnMarket - previousTrend.daysOnMarket} days vs last quarter
              </span>
            </div>
          </div>
        </div>

        {/* Historical Trends */}
        <div className="space-y-4">
          <h3 className="font-semibold text-gray-900">Historical Data</h3>
          <div className="space-y-3">
            {trends.map((trend, index) => (
              <div key={trend.period} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="text-sm font-medium text-gray-900 w-20">{trend.period}</div>
                  <div className="text-sm text-gray-600">Avg: {formatPrice(trend.averagePrice)}</div>
                  <Badge
                    variant="outline"
                    className={`${
                      trend.priceChange >= 0 ? "text-green-600 border-green-200" : "text-red-600 border-red-200"
                    }`}
                  >
                    {formatPercentage(trend.priceChange)}
                  </Badge>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <span>{trend.salesVolume} sales</span>
                  <span>{trend.daysOnMarket} days</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Market Insights */}
        <div className="mt-6 p-4 bg-cyan-50 rounded-lg border border-cyan-200">
          <h4 className="font-semibold text-cyan-900 mb-2">Market Insights</h4>
          <ul className="text-sm text-cyan-800 space-y-1">
            <li>• Prices have increased {formatPercentage(currentTrend.priceChange)} this quarter</li>
            <li>
              • Properties are selling {currentTrend.daysOnMarket <= previousTrend.daysOnMarket ? "faster" : "slower"}{" "}
              than last quarter
            </li>
            <li>
              • {currentTrend.salesVolume >= previousTrend.salesVolume ? "Higher" : "Lower"} sales volume indicates{" "}
              {currentTrend.salesVolume >= previousTrend.salesVolume ? "strong" : "cooling"} market activity
            </li>
          </ul>
        </div>

        {/* Action Button */}
        <div className="mt-6">
          <Button className="w-full bg-cyan-600 hover:bg-cyan-700">
            <BarChart3 className="h-4 w-4 mr-2" />
            View Detailed Market Report
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export { PropertyTrends }
