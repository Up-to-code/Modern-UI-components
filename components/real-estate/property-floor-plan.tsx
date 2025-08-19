"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Maximize2, Download, Home, Bed, Bath } from "lucide-react"
import { Dialog, DialogContent } from "@/components/ui/dialog"

interface FloorPlan {
  id: string
  name: string
  level: string
  bedrooms: number
  bathrooms: number
  sqft: number
  imageUrl: string
}

interface PropertyFloorPlanProps {
  floorPlans: FloorPlan[]
  propertyTitle?: string
}

export function PropertyFloorPlan({ floorPlans, propertyTitle = "Property" }: PropertyFloorPlanProps) {
  const [selectedPlan, setSelectedPlan] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)

  const handleDownload = (plan: FloorPlan) => {
    console.log("Downloading floor plan:", plan.name)
  }

  if (floorPlans.length === 0) {
    return (
      <div className="bg-white rounded-lg border p-6">
        <h3 className="text-lg font-semibold mb-4">Floor Plans</h3>
        <div className="text-center py-8 text-gray-500">
          <Home className="h-12 w-12 mx-auto mb-3 text-gray-300" />
          <p>No floor plans available for this property</p>
        </div>
      </div>
    )
  }

  const currentPlan = floorPlans[selectedPlan]

  return (
    <>
      <div className="bg-white rounded-lg border p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold">Floor Plans</h3>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={() => setIsFullscreen(true)}>
              <Maximize2 className="h-4 w-4 mr-2" />
              View Full Size
            </Button>
            <Button variant="outline" size="sm" onClick={() => handleDownload(currentPlan)}>
              <Download className="h-4 w-4 mr-2" />
              Download
            </Button>
          </div>
        </div>

        {/* Floor Plan Tabs */}
        {floorPlans.length > 1 && (
          <div className="flex gap-2 mb-6 overflow-x-auto">
            {floorPlans.map((plan, index) => (
              <button
                key={plan.id}
                onClick={() => setSelectedPlan(index)}
                className={`flex-shrink-0 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  index === selectedPlan ? "bg-cyan-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {plan.name}
              </button>
            ))}
          </div>
        )}

        {/* Floor Plan Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden">
              <img
                src={
                  currentPlan.imageUrl ||
                  `/placeholder.svg?height=400&width=600&query=${propertyTitle || "/placeholder.svg"} ${currentPlan.name} floor plan`
                }
                alt={`${currentPlan.name} floor plan`}
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">{currentPlan.name}</h4>
              <p className="text-sm text-gray-600">{currentPlan.level}</p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <Bed className="h-5 w-5 text-gray-600" />
                <div>
                  <div className="font-medium text-gray-900">{currentPlan.bedrooms}</div>
                  <div className="text-sm text-gray-600">Bedrooms</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <Bath className="h-5 w-5 text-gray-600" />
                <div>
                  <div className="font-medium text-gray-900">{currentPlan.bathrooms}</div>
                  <div className="text-sm text-gray-600">Bathrooms</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <Home className="h-5 w-5 text-gray-600" />
                <div>
                  <div className="font-medium text-gray-900">{currentPlan.sqft?.toLocaleString() || "0"}</div>
                  <div className="text-sm text-gray-600">Square Feet</div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t">
              <h5 className="font-medium text-gray-900 mb-2">Plan Features</h5>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Open concept living area</li>
                <li>• Master suite with walk-in closet</li>
                <li>• Modern kitchen with island</li>
                <li>• Private balcony/patio</li>
                <li>• In-unit laundry</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Modal */}
      <Dialog open={isFullscreen} onOpenChange={setIsFullscreen}>
        <DialogContent className="max-w-7xl w-full h-full max-h-screen p-4">
          <div className="relative w-full h-full">
            <div className="mb-4 flex items-center justify-between">
              <h4 className="text-lg font-semibold">
                {currentPlan.name} - {currentPlan.level}
              </h4>
              <Button variant="outline" size="sm" onClick={() => handleDownload(currentPlan)}>
                <Download className="h-4 w-4 mr-2" />
                Download
              </Button>
            </div>

            <div className="w-full h-[calc(100%-4rem)] bg-gray-100 rounded-lg overflow-hidden">
              <img
                src={
                  currentPlan.imageUrl ||
                  `/placeholder.svg?height=800&width=1200&query=${propertyTitle || "/placeholder.svg"} ${currentPlan.name} detailed floor plan`
                }
                alt={`${currentPlan.name} floor plan`}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
