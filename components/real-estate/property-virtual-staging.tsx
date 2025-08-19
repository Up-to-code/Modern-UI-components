"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Palette, RotateCcw, Download, Eye, EyeOff } from "lucide-react"

interface StagingOption {
  id: string
  name: string
  style: string
  imageUrl: string
  description: string
}

interface PropertyVirtualStagingProps {
  originalImage: string
  stagingOptions: StagingOption[]
  propertyTitle?: string
}

export function PropertyVirtualStaging({
  originalImage,
  stagingOptions,
  propertyTitle = "Property",
}: PropertyVirtualStagingProps) {
  const [selectedStaging, setSelectedStaging] = useState<string | null>(null)
  const [showComparison, setShowComparison] = useState(false)

  const currentImage = selectedStaging
    ? stagingOptions.find((option) => option.id === selectedStaging)?.imageUrl || originalImage
    : originalImage

  const handleDownload = () => {
    const link = document.createElement("a")
    link.href = currentImage
    link.download = `${propertyTitle}-${selectedStaging ? "staged" : "original"}.jpg`
    link.click()
  }

  return (
    <div className="bg-white rounded-lg border p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Palette className="h-5 w-5 text-cyan-600" />
          <h3 className="text-lg font-semibold">Virtual Staging</h3>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={() => setShowComparison(!showComparison)}>
            {showComparison ? <EyeOff className="h-4 w-4 mr-2" /> : <Eye className="h-4 w-4 mr-2" />}
            {showComparison ? "Hide" : "Show"} Comparison
          </Button>
          <Button variant="outline" size="sm" onClick={handleDownload}>
            <Download className="h-4 w-4 mr-2" />
            Download
          </Button>
        </div>
      </div>

      {/* Image Display */}
      <div className="mb-6">
        {showComparison && selectedStaging ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <div className="aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden mb-2">
                <img
                  src={
                    originalImage || `/placeholder.svg?height=300&width=400&query=${propertyTitle} empty room original`
                  }
                  alt="Original room"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center text-sm font-medium text-gray-700">Original</div>
            </div>

            <div>
              <div className="aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden mb-2">
                <img
                  src={
                    currentImage || `/placeholder.svg?height=300&width=400&query=${propertyTitle} staged room furniture`
                  }
                  alt="Staged room"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center text-sm font-medium text-gray-700">
                {selectedStaging ? stagingOptions.find((opt) => opt.id === selectedStaging)?.name : "Staged"}
              </div>
            </div>
          </div>
        ) : (
          <div className="aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden">
            <img
              src={
                currentImage ||
                `/placeholder.svg?height=400&width=600&query=${propertyTitle} ${selectedStaging ? "staged furnished" : "empty"} room`
              }
              alt={selectedStaging ? "Staged room" : "Original room"}
              className="w-full h-full object-cover"
            />
          </div>
        )}
      </div>

      {/* Staging Options */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h4 className="font-medium text-gray-900">Staging Options</h4>
          <Button variant="outline" size="sm" onClick={() => setSelectedStaging(null)} disabled={!selectedStaging}>
            <RotateCcw className="h-4 w-4 mr-2" />
            Reset to Original
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {stagingOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => setSelectedStaging(option.id)}
              className={`group relative overflow-hidden rounded-lg border-2 transition-all ${
                selectedStaging === option.id
                  ? "border-cyan-600 ring-2 ring-cyan-100"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <div className="aspect-[4/3] bg-gray-100">
                <img
                  src={
                    option.imageUrl ||
                    `/placeholder.svg?height=120&width=160&query=${propertyTitle} ${option.style} staging preview`
                  }
                  alt={option.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-2">
                <div className="text-white text-sm font-medium">{option.name}</div>
                <div className="text-white/80 text-xs">{option.style}</div>
              </div>

              {selectedStaging === option.id && (
                <div className="absolute top-2 right-2 w-6 h-6 bg-cyan-600 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Selected Option Details */}
      {selectedStaging && (
        <div className="mt-6 p-4 bg-cyan-50 border border-cyan-200 rounded-lg">
          {(() => {
            const option = stagingOptions.find((opt) => opt.id === selectedStaging)
            return option ? (
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Palette className="h-4 w-4 text-cyan-600" />
                  <span className="font-medium text-cyan-900">{option.name}</span>
                  <span className="text-sm text-cyan-700">({option.style})</span>
                </div>
                <p className="text-sm text-cyan-800">{option.description}</p>
              </div>
            ) : null
          })()}
        </div>
      )}

      {/* Benefits */}
      <div className="mt-6 pt-6 border-t">
        <h4 className="font-medium text-gray-900 mb-3">Benefits of Virtual Staging</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-green-50 border border-green-200 rounded-lg p-3">
            <div className="text-sm font-medium text-green-800 mb-1">Increased Interest</div>
            <div className="text-xs text-green-700">Staged homes receive 40% more online views</div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
            <div className="text-sm font-medium text-blue-800 mb-1">Faster Sales</div>
            <div className="text-xs text-blue-700">Staged properties sell 73% faster on average</div>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-3">
            <div className="text-sm font-medium text-purple-800 mb-1">Higher Offers</div>
            <div className="text-xs text-purple-700">Staged homes can sell for 6-10% more</div>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
            <div className="text-sm font-medium text-amber-800 mb-1">Cost Effective</div>
            <div className="text-xs text-amber-700">90% less expensive than traditional staging</div>
          </div>
        </div>
      </div>
    </div>
  )
}
