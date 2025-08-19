"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, Clock, Eye, Camera, Video, VolumeX, Volume2, Maximize, RotateCcw } from "lucide-react"
import { useState } from "react"

interface PropertyTourProps {
  tourType: string
  duration: string
  tourUrl: string
}

export function PropertyTour({ tourType, duration, tourUrl }: PropertyTourProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [currentRoom, setCurrentRoom] = useState("Living Room")

  const rooms = [
    "Living Room",
    "Kitchen",
    "Master Bedroom",
    "Master Bathroom",
    "Guest Bedroom",
    "Guest Bathroom",
    "Balcony",
  ]

  const tourFeatures = [
    { icon: Video, label: "4K Quality", description: "Ultra-high definition video" },
    { icon: Camera, label: "360° Views", description: "Complete room coverage" },
    { icon: Eye, label: "Interactive", description: "Click to explore details" },
    { icon: RotateCcw, label: "Virtual Reality", description: "VR headset compatible" },
  ]

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <Video className="h-5 w-5 text-primary" />
              {tourType}
            </CardTitle>
            <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{duration}</span>
              </div>
              <Badge variant="secondary">HD Quality</Badge>
              <Badge variant="outline">Interactive</Badge>
            </div>
          </div>
          <Button variant="outline" size="sm">
            <Maximize className="h-4 w-4 mr-2" />
            Fullscreen
          </Button>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Virtual Tour Player */}
        <div className="relative bg-black rounded-lg overflow-hidden aspect-video">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
            <div className="text-center text-white space-y-4">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto backdrop-blur-sm">
                <Play className="h-8 w-8 ml-1" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Virtual Property Tour</h3>
                <p className="text-white/80">Experience this property in immersive 3D</p>
              </div>
            </div>
          </div>

          {/* Tour Controls */}
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Button size="sm" variant={isPlaying ? "secondary" : "default"} onClick={() => setIsPlaying(!isPlaying)}>
                <Play className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="secondary" onClick={() => setIsMuted(!isMuted)}>
                {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
              </Button>
            </div>

            <div className="text-white text-sm bg-black/50 px-2 py-1 rounded">{currentRoom}</div>
          </div>
        </div>

        {/* Room Navigation */}
        <div>
          <h3 className="font-semibold mb-3">Explore Rooms</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {rooms.map((room) => (
              <Button
                key={room}
                variant={currentRoom === room ? "default" : "outline"}
                size="sm"
                onClick={() => setCurrentRoom(room)}
                className="justify-start"
              >
                {room}
              </Button>
            ))}
          </div>
        </div>

        {/* Tour Features */}
        <div>
          <h3 className="font-semibold mb-3">Tour Features</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {tourFeatures.map((feature, index) => (
              <div key={index} className="text-center p-3 bg-muted/50 rounded-lg">
                <feature.icon className="h-6 w-6 text-primary mx-auto mb-2" />
                <div className="font-medium text-sm">{feature.label}</div>
                <div className="text-xs text-muted-foreground">{feature.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Tour Actions */}
        <div className="flex flex-wrap gap-3">
          <Button className="flex-1 min-w-[120px]">
            <Play className="h-4 w-4 mr-2" />
            Start Virtual Tour
          </Button>
          <Button variant="outline" className="flex-1 min-w-[120px] bg-transparent">
            <Camera className="h-4 w-4 mr-2" />
            View Photos
          </Button>
          <Button variant="outline" className="flex-1 min-w-[120px] bg-transparent">
            <Video className="h-4 w-4 mr-2" />
            Schedule Live Tour
          </Button>
        </div>

        {/* Tour Info */}
        <div className="bg-muted/30 p-4 rounded-lg">
          <h4 className="font-semibold mb-2">About This Tour</h4>
          <p className="text-sm text-muted-foreground mb-3">
            Take an immersive 3D virtual tour of this property. Navigate through each room, zoom in on details, and get
            a true sense of the space from the comfort of your home.
          </p>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Tour Type:</span>
              <span className="font-medium">{tourType}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Duration:</span>
              <span className="font-medium">{duration}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Quality:</span>
              <span className="font-medium">4K Ultra HD</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Rooms:</span>
              <span className="font-medium">{rooms.length} rooms</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
