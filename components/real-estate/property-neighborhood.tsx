import { MapPin, Star, TrendingUp, Users, Car, GraduationCap, ShoppingBag, Coffee } from "lucide-react"

interface NeighborhoodData {
  name: string
  walkScore: number
  transitScore: number
  bikeScore: number
  demographics: {
    averageAge: number
    medianIncome: number
    population: number
  }
  amenities: {
    schools: number
    restaurants: number
    shopping: number
    parks: number
  }
  marketTrends: {
    averagePrice: number
    priceChange: number
    daysOnMarket: number
  }
}

interface PropertyNeighborhoodProps {
  neighborhood: NeighborhoodData
}

export function PropertyNeighborhood({ neighborhood }: PropertyNeighborhoodProps) {
  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-600 bg-green-100"
    if (score >= 60) return "text-amber-600 bg-amber-100"
    return "text-red-600 bg-red-100"
  }

  return (
    <div className="bg-white rounded-lg border p-6">
      <div className="flex items-center gap-2 mb-6">
        <MapPin className="h-5 w-5 text-cyan-600" />
        <h3 className="text-lg font-semibold">Neighborhood: {neighborhood?.name || "Unknown"}</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Walkability Scores */}
        <div className="space-y-4">
          <h4 className="font-medium text-gray-900">Walkability & Transit</h4>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Walk Score</span>
              <div className={`px-2 py-1 rounded text-sm font-medium ${getScoreColor(neighborhood?.walkScore || 0)}`}>
                {neighborhood?.walkScore || 0}/100
              </div>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Transit Score</span>
              <div
                className={`px-2 py-1 rounded text-sm font-medium ${getScoreColor(neighborhood?.transitScore || 0)}`}
              >
                {neighborhood?.transitScore || 0}/100
              </div>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Bike Score</span>
              <div className={`px-2 py-1 rounded text-sm font-medium ${getScoreColor(neighborhood?.bikeScore || 0)}`}>
                {neighborhood?.bikeScore || 0}/100
              </div>
            </div>
          </div>
        </div>

        {/* Demographics */}
        <div className="space-y-4">
          <h4 className="font-medium text-gray-900">Demographics</h4>

          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Users className="h-4 w-4 text-gray-400" />
              <div>
                <div className="text-sm font-medium">
                  {neighborhood?.demographics?.population?.toLocaleString() || "0"}
                </div>
                <div className="text-xs text-gray-500">Population</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Star className="h-4 w-4 text-gray-400" />
              <div>
                <div className="text-sm font-medium">{neighborhood?.demographics?.averageAge || 0} years</div>
                <div className="text-xs text-gray-500">Average Age</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <TrendingUp className="h-4 w-4 text-gray-400" />
              <div>
                <div className="text-sm font-medium">
                  ${neighborhood?.demographics?.medianIncome?.toLocaleString() || "0"}
                </div>
                <div className="text-xs text-gray-500">Median Income</div>
              </div>
            </div>
          </div>
        </div>

        {/* Amenities */}
        <div className="space-y-4">
          <h4 className="font-medium text-gray-900">Nearby Amenities</h4>

          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <GraduationCap className="h-4 w-4 text-gray-400" />
              <div>
                <div className="text-sm font-medium">{neighborhood?.amenities?.schools || 0}</div>
                <div className="text-xs text-gray-500">Schools</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Coffee className="h-4 w-4 text-gray-400" />
              <div>
                <div className="text-sm font-medium">{neighborhood?.amenities?.restaurants || 0}</div>
                <div className="text-xs text-gray-500">Restaurants</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <ShoppingBag className="h-4 w-4 text-gray-400" />
              <div>
                <div className="text-sm font-medium">{neighborhood?.amenities?.shopping || 0}</div>
                <div className="text-xs text-gray-500">Shopping Centers</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Car className="h-4 w-4 text-gray-400" />
              <div>
                <div className="text-sm font-medium">{neighborhood?.amenities?.parks || 0}</div>
                <div className="text-xs text-gray-500">Parks</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Market Trends */}
      <div className="mt-6 pt-6 border-t">
        <h4 className="font-medium text-gray-900 mb-4">Market Trends</h4>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="text-2xl font-bold text-gray-900">
              ${neighborhood?.marketTrends?.averagePrice?.toLocaleString() || "0"}
            </div>
            <div className="text-sm text-gray-600">Average Home Price</div>
          </div>

          <div className="bg-gray-50 rounded-lg p-4">
            <div
              className={`text-2xl font-bold ${(neighborhood?.marketTrends?.priceChange || 0) >= 0 ? "text-green-600" : "text-red-600"}`}
            >
              {(neighborhood?.marketTrends?.priceChange || 0) >= 0 ? "+" : ""}
              {neighborhood?.marketTrends?.priceChange || 0}%
            </div>
            <div className="text-sm text-gray-600">Price Change (YoY)</div>
          </div>

          <div className="bg-gray-50 rounded-lg p-4">
            <div className="text-2xl font-bold text-gray-900">{neighborhood?.marketTrends?.daysOnMarket || 0}</div>
            <div className="text-sm text-gray-600">Avg. Days on Market</div>
          </div>
        </div>
      </div>
    </div>
  )
}
