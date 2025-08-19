import { TrendingUp, TrendingDown, Home, MapPin, Calendar, DollarSign } from "lucide-react"

interface ComparableProperty {
  id: string
  address: string
  price: number
  sqft: number
  bedrooms: number
  bathrooms: number
  soldDate: string
  daysOnMarket: number
  pricePerSqft: number
  distance: number
  imageUrl?: string
}

interface PropertyMarketComparisonProps {
  subjectProperty: {
    address: string
    price: number
    sqft: number
    bedrooms: number
    bathrooms: number
  }
  comparables: ComparableProperty[]
}

export function PropertyMarketComparison({ subjectProperty, comparables }: PropertyMarketComparisonProps) {
  const safeComparables = comparables || []
  const safeSubjectProperty = subjectProperty || {
    address: "Unknown Address",
    price: 0,
    sqft: 1,
    bedrooms: 0,
    bathrooms: 0,
  }

  const averagePrice =
    safeComparables.length > 0
      ? safeComparables.reduce((sum, comp) => sum + (comp?.price || 0), 0) / safeComparables.length
      : 0
  const averagePricePerSqft =
    safeComparables.length > 0
      ? safeComparables.reduce((sum, comp) => sum + (comp?.pricePerSqft || 0), 0) / safeComparables.length
      : 0
  const averageDaysOnMarket =
    safeComparables.length > 0
      ? safeComparables.reduce((sum, comp) => sum + (comp?.daysOnMarket || 0), 0) / safeComparables.length
      : 0

  const subjectPricePerSqft = safeSubjectProperty.sqft > 0 ? safeSubjectProperty.price / safeSubjectProperty.sqft : 0
  const priceVariance = averagePrice > 0 ? ((safeSubjectProperty.price - averagePrice) / averagePrice) * 100 : 0
  const pricePerSqftVariance =
    averagePricePerSqft > 0 ? ((subjectPricePerSqft - averagePricePerSqft) / averagePricePerSqft) * 100 : 0

  const getVarianceColor = (variance: number) => {
    if (Math.abs(variance) <= 5) return "text-green-600"
    if (Math.abs(variance) <= 15) return "text-amber-600"
    return "text-red-600"
  }

  const getVarianceIcon = (variance: number) => {
    if (variance > 0) return <TrendingUp className="h-4 w-4" />
    if (variance < 0) return <TrendingDown className="h-4 w-4" />
    return null
  }

  return (
    <div className="bg-white rounded-lg border p-6">
      <h3 className="text-lg font-semibold mb-6">Market Comparison Analysis</h3>

      {/* Subject Property */}
      <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-4 mb-6">
        <div className="flex items-center gap-2 mb-3">
          <Home className="h-5 w-5 text-cyan-600" />
          <h4 className="font-medium text-cyan-900">Subject Property</h4>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <div className="text-sm text-cyan-700">Price</div>
            <div className="text-lg font-bold text-cyan-900">${safeSubjectProperty.price.toLocaleString()}</div>
          </div>
          <div>
            <div className="text-sm text-cyan-700">Price/Sqft</div>
            <div className="text-lg font-bold text-cyan-900">${subjectPricePerSqft.toFixed(0)}</div>
          </div>
          <div>
            <div className="text-sm text-cyan-700">Bedrooms</div>
            <div className="text-lg font-bold text-cyan-900">{safeSubjectProperty.bedrooms}</div>
          </div>
          <div>
            <div className="text-sm text-cyan-700">Bathrooms</div>
            <div className="text-lg font-bold text-cyan-900">{safeSubjectProperty.bathrooms}</div>
          </div>
        </div>
      </div>

      {/* Market Analysis Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">vs. Market Average</span>
            <div className={`flex items-center gap-1 ${getVarianceColor(priceVariance)}`}>
              {getVarianceIcon(priceVariance)}
              <span className="text-sm font-medium">
                {priceVariance > 0 ? "+" : ""}
                {priceVariance.toFixed(1)}%
              </span>
            </div>
          </div>
          <div className="text-2xl font-bold text-gray-900">${averagePrice.toLocaleString()}</div>
          <div className="text-sm text-gray-600">Average Price</div>
        </div>

        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">Price per Sqft</span>
            <div className={`flex items-center gap-1 ${getVarianceColor(pricePerSqftVariance)}`}>
              {getVarianceIcon(pricePerSqftVariance)}
              <span className="text-sm font-medium">
                {pricePerSqftVariance > 0 ? "+" : ""}
                {pricePerSqftVariance.toFixed(1)}%
              </span>
            </div>
          </div>
          <div className="text-2xl font-bold text-gray-900">${averagePricePerSqft.toFixed(0)}</div>
          <div className="text-sm text-gray-600">Average $/Sqft</div>
        </div>

        <div className="bg-gray-50 rounded-lg p-4">
          <div className="text-2xl font-bold text-gray-900">{Math.round(averageDaysOnMarket)}</div>
          <div className="text-sm text-gray-600">Avg. Days on Market</div>
        </div>
      </div>

      {/* Comparable Properties */}
      <div className="space-y-4">
        <h4 className="font-medium text-gray-900">Recent Comparable Sales</h4>

        <div className="space-y-3">
          {safeComparables.map((comp) => (
            <div key={comp?.id || Math.random()} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-16 h-12 bg-gray-200 rounded overflow-hidden flex-shrink-0">
                  <img
                    src={
                      comp?.imageUrl ||
                      `/placeholder.svg?height=48&width=64&query=house exterior ${comp?.address || "property"}`
                    }
                    alt={comp?.address || "Property"}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <MapPin className="h-4 w-4 text-gray-400" />
                        <span className="font-medium text-gray-900">{comp?.address || "Unknown Address"}</span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span>{comp?.bedrooms || 0} bed</span>
                        <span>{comp?.bathrooms || 0} bath</span>
                        <span>{(comp?.sqft || 0).toLocaleString()} sqft</span>
                        <span>{comp?.distance || 0} miles</span>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="text-lg font-bold text-gray-900">${(comp?.price || 0).toLocaleString()}</div>
                      <div className="text-sm text-gray-600">${comp?.pricePerSqft || 0}/sqft</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>Sold {comp?.soldDate || "Unknown"}</span>
                    </div>
                    <span>{comp?.daysOnMarket || 0} days on market</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Market Insights */}
      <div className="mt-6 pt-6 border-t">
        <h4 className="font-medium text-gray-900 mb-3">Market Insights</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Math.abs(priceVariance) <= 10 ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-3">
              <div className="flex items-start gap-2">
                <TrendingUp className="h-4 w-4 text-green-600 mt-0.5" />
                <div>
                  <div className="text-sm font-medium text-green-800">Competitively Priced</div>
                  <div className="text-xs text-green-700">Price is within 10% of market average</div>
                </div>
              </div>
            </div>
          ) : priceVariance > 10 ? (
            <div className="bg-red-50 border border-red-200 rounded-lg p-3">
              <div className="flex items-start gap-2">
                <TrendingUp className="h-4 w-4 text-red-600 mt-0.5" />
                <div>
                  <div className="text-sm font-medium text-red-800">Above Market Price</div>
                  <div className="text-xs text-red-700">Consider negotiating or waiting for price reduction</div>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
              <div className="flex items-start gap-2">
                <DollarSign className="h-4 w-4 text-blue-600 mt-0.5" />
                <div>
                  <div className="text-sm font-medium text-blue-800">Below Market Price</div>
                  <div className="text-xs text-blue-700">Potentially good value opportunity</div>
                </div>
              </div>
            </div>
          )}

          {averageDaysOnMarket <= 30 ? (
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
              <div className="flex items-start gap-2">
                <Calendar className="h-4 w-4 text-amber-600 mt-0.5" />
                <div>
                  <div className="text-sm font-medium text-amber-800">Fast-Moving Market</div>
                  <div className="text-xs text-amber-700">Properties sell quickly in this area</div>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
              <div className="flex items-start gap-2">
                <Calendar className="h-4 w-4 text-gray-600 mt-0.5" />
                <div>
                  <div className="text-sm font-medium text-gray-800">Stable Market</div>
                  <div className="text-xs text-gray-700">Normal selling timeframe for this area</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
