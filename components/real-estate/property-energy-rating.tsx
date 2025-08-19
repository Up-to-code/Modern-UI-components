import { Zap, Leaf, ThermometerSun, Droplets, Wind, Sun } from "lucide-react"

interface EnergyRating {
  overall: "A+" | "A" | "B" | "C" | "D" | "E" | "F"
  heating: number
  cooling: number
  waterHeating: number
  lighting: number
  appliances: number
  annualCost: number
  co2Emissions: number
}

interface PropertyEnergyRatingProps {
  energyRating: EnergyRating
}

export function PropertyEnergyRating({ energyRating }: PropertyEnergyRatingProps) {
  const getRatingColor = (rating: string) => {
    switch (rating) {
      case "A+":
        return "bg-green-600 text-white"
      case "A":
        return "bg-green-500 text-white"
      case "B":
        return "bg-lime-500 text-white"
      case "C":
        return "bg-yellow-500 text-white"
      case "D":
        return "bg-orange-500 text-white"
      case "E":
        return "bg-red-500 text-white"
      case "F":
        return "bg-red-600 text-white"
      default:
        return "bg-gray-500 text-white"
    }
  }

  const getEfficiencyColor = (percentage: number) => {
    if (percentage >= 80) return "bg-green-500"
    if (percentage >= 60) return "bg-lime-500"
    if (percentage >= 40) return "bg-yellow-500"
    if (percentage >= 20) return "bg-orange-500"
    return "bg-red-500"
  }

  const categories = [
    { name: "Heating", value: energyRating?.heating || 0, icon: ThermometerSun },
    { name: "Cooling", value: energyRating?.cooling || 0, icon: Wind },
    { name: "Water Heating", value: energyRating?.waterHeating || 0, icon: Droplets },
    { name: "Lighting", value: energyRating?.lighting || 0, icon: Sun },
    { name: "Appliances", value: energyRating?.appliances || 0, icon: Zap },
  ]

  return (
    <div className="bg-white rounded-lg border p-6">
      <div className="flex items-center gap-2 mb-6">
        <Leaf className="h-5 w-5 text-green-600" />
        <h3 className="text-lg font-semibold">Energy Efficiency Rating</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Overall Rating */}
        <div className="space-y-4">
          <div className="text-center">
            <div
              className={`inline-flex items-center justify-center w-20 h-20 rounded-full text-3xl font-bold ${getRatingColor(energyRating?.overall || "F")}`}
            >
              {energyRating?.overall || "F"}
            </div>
            <div className="mt-2 text-sm text-gray-600">Overall Energy Rating</div>
          </div>

          <div className="space-y-3">
            <div className="bg-green-50 border border-green-200 rounded-lg p-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-green-800">Annual Energy Cost</span>
                <span className="text-lg font-bold text-green-900">
                  ${energyRating?.annualCost?.toLocaleString() || "0"}
                </span>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-blue-800">CO₂ Emissions</span>
                <span className="text-lg font-bold text-blue-900">
                  {energyRating?.co2Emissions?.toLocaleString() || "0"} kg/year
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Category Breakdown */}
        <div className="space-y-4">
          <h4 className="font-medium text-gray-900">Energy Usage Breakdown</h4>

          <div className="space-y-3">
            {categories.map((category, index) => {
              const IconComponent = category.icon
              return (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <IconComponent className="h-4 w-4 text-gray-500" />
                      <span className="text-sm font-medium text-gray-700">{category.name}</span>
                    </div>
                    <span className="text-sm font-medium text-gray-900">{category.value}%</span>
                  </div>

                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${getEfficiencyColor(100 - category.value)}`}
                      style={{ width: `${100 - category.value}%` }}
                    ></div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Energy Saving Tips */}
      <div className="mt-6 pt-6 border-t">
        <h4 className="font-medium text-gray-900 mb-3">Energy Saving Recommendations</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
            <div className="flex items-start gap-2">
              <ThermometerSun className="h-4 w-4 text-amber-600 mt-0.5" />
              <div>
                <div className="text-sm font-medium text-amber-800">Heating Optimization</div>
                <div className="text-xs text-amber-700">Install programmable thermostat</div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
            <div className="flex items-start gap-2">
              <Droplets className="h-4 w-4 text-blue-600 mt-0.5" />
              <div>
                <div className="text-sm font-medium text-blue-800">Water Heating</div>
                <div className="text-xs text-blue-700">Consider solar water heating</div>
              </div>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-3">
            <div className="flex items-start gap-2">
              <Sun className="h-4 w-4 text-green-600 mt-0.5" />
              <div>
                <div className="text-sm font-medium text-green-800">Lighting</div>
                <div className="text-xs text-green-700">Switch to LED bulbs</div>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-3">
            <div className="flex items-start gap-2">
              <Zap className="h-4 w-4 text-purple-600 mt-0.5" />
              <div>
                <div className="text-sm font-medium text-purple-800">Appliances</div>
                <div className="text-xs text-purple-700">Upgrade to Energy Star rated</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
