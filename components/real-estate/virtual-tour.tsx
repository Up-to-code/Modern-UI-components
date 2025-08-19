"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, Camera, VolumeX, Volume2, Maximize, RotateCcw } from "lucide-react"
import { useState } from "react"

export function VirtualTour() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Virtual Tour</CardTitle>
          <Badge variant="secondary">360° View</Badge>
        </div>
      </CardHeader>

      <CardContent className="p-0">
        <div className="relative aspect-video bg-muted/20">
          {/* Virtual Tour Placeholder */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/placeholder.svg?height=400&width=800')",
            }}
          />

          {/* Overlay Controls */}
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
            <Button
              size="lg"
              className="bg-white/90 hover:bg-white text-black"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              <Play className="mr-2 h-6 w-6" />
              {isPlaying ? "Pause Tour" : "Start Virtual Tour"}
            </Button>
          </div>

          {/* Control Bar */}
          <div className="absolute bottom-4 left-4 right-4">
            <div className="bg-black/80 backdrop-blur-sm rounded-lg p-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Button size="sm" variant="ghost" className="text-white hover:bg-white/20">
                    <Camera className="h-4 w-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="text-white hover:bg-white/20"
                    onClick={() => setIsMuted(!isMuted)}
                  >
                    {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                  </Button>
                  <Button size="sm" variant="ghost" className="text-white hover:bg-white/20">
                    <RotateCcw className="h-4 w-4" />
                  </Button>
                </div>

                <div className="text-white text-sm">Living Room • 1 of 12 rooms</div>

                <Button size="sm" variant="ghost" className="text-white hover:bg-white/20">
                  <Maximize className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Room Navigation */}
          <div className="absolute top-4 right-4">
            <div className="bg-black/80 backdrop-blur-sm rounded-lg p-2">
              <div className="grid grid-cols-3 gap-1">
                {["Living", "Kitchen", "Master", "Bath", "Bedroom", "Office"].map((room, index) => (
                  <Button
                    key={room}
                    size="sm"
                    variant={index === 0 ? "secondary" : "ghost"}
                    className={index === 0 ? "" : "text-white hover:bg-white/20"}
                  >
                    {room}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Tour Information */}
        <div className="p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Modern Luxury Villa - Virtual Walkthrough</h3>
            <Badge>HD Quality</Badge>
          </div>

          <p className="text-muted-foreground">
            Take a complete 360° virtual tour of this stunning property. Navigate through all 12 rooms and experience
            the space as if you were there in person.
          </p>

          <div className="flex flex-wrap gap-2">
            <Button variant="outline" size="sm">
              <Camera className="mr-2 h-4 w-4" />
              Photo Gallery
            </Button>
            <Button variant="outline" size="sm">
              Floor Plans
            </Button>
            <Button variant="outline" size="sm">
              Schedule Visit
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
