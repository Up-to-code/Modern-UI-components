"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Clock, User, Phone, Mail, MapPin, Video } from "lucide-react"

interface TimeSlot {
  time: string
  available: boolean
}

interface PropertyWalkthroughSchedulerProps {
  propertyAddress: string
  agentName?: string
  agentPhone?: string
  availableDates: string[]
  timeSlots: TimeSlot[]
}

export function PropertyWalkthroughScheduler({
  propertyAddress,
  agentName = "Real Estate Agent",
  agentPhone = "(555) 123-4567",
  availableDates,
  timeSlots,
}: PropertyWalkthroughSchedulerProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    type: "",
    message: "",
    partySize: "1",
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Walkthrough scheduled:", formData)
    setIsSubmitted(true)
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-lg border p-6">
        <div className="text-center py-8">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Calendar className="h-8 w-8 text-green-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Walkthrough Scheduled!</h3>
          <p className="text-gray-600 mb-4">
            Your {formData.type} walkthrough has been scheduled for {formData.date} at {formData.time}.
          </p>
          <div className="bg-gray-50 rounded-lg p-4 mb-4">
            <div className="text-sm text-gray-600 space-y-1">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>{propertyAddress}</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{agentName}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>{agentPhone}</span>
              </div>
            </div>
          </div>
          <p className="text-sm text-gray-500 mb-6">
            You will receive a confirmation email shortly with additional details and directions.
          </p>
          <Button onClick={() => setIsSubmitted(false)} variant="outline">
            Schedule Another Walkthrough
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg border p-6">
      <div className="flex items-center gap-2 mb-6">
        <Calendar className="h-5 w-5 text-cyan-600" />
        <h3 className="text-lg font-semibold">Schedule a Walkthrough</h3>
      </div>

      <div className="mb-6 p-4 bg-gray-50 rounded-lg">
        <div className="flex items-start gap-3">
          <MapPin className="h-5 w-5 text-gray-500 mt-0.5" />
          <div>
            <div className="font-medium text-gray-900">{propertyAddress}</div>
            <div className="text-sm text-gray-600 mt-1">
              Agent: {agentName} • {agentPhone}
            </div>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Personal Information */}
        <div className="space-y-4">
          <h4 className="font-medium text-gray-900">Your Information</h4>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                placeholder="Your full name"
                required
              />
            </div>

            <div>
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                placeholder="your.email@example.com"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                placeholder="(555) 123-4567"
                required
              />
            </div>

            <div>
              <Label htmlFor="party-size">Party Size</Label>
              <Select value={formData.partySize} onValueChange={(value) => handleChange("partySize", value)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">Just me</SelectItem>
                  <SelectItem value="2">2 people</SelectItem>
                  <SelectItem value="3">3 people</SelectItem>
                  <SelectItem value="4">4 people</SelectItem>
                  <SelectItem value="5+">5+ people</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Walkthrough Details */}
        <div className="space-y-4">
          <h4 className="font-medium text-gray-900">Walkthrough Details</h4>

          <div>
            <Label htmlFor="walkthrough-type">Walkthrough Type *</Label>
            <Select value={formData.type} onValueChange={(value) => handleChange("type", value)} required>
              <SelectTrigger>
                <SelectValue placeholder="Select walkthrough type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="in-person">In-Person Walkthrough</SelectItem>
                <SelectItem value="virtual">Virtual Tour (Video Call)</SelectItem>
                <SelectItem value="self-guided">Self-Guided Tour</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="date">Preferred Date *</Label>
              <Select value={formData.date} onValueChange={(value) => handleChange("date", value)} required>
                <SelectTrigger>
                  <SelectValue placeholder="Select date" />
                </SelectTrigger>
                <SelectContent>
                  {availableDates.map((date) => (
                    <SelectItem key={date} value={date}>
                      {date}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="time">Preferred Time *</Label>
              <Select value={formData.time} onValueChange={(value) => handleChange("time", value)} required>
                <SelectTrigger>
                  <SelectValue placeholder="Select time" />
                </SelectTrigger>
                <SelectContent>
                  {timeSlots.map((slot) => (
                    <SelectItem key={slot.time} value={slot.time} disabled={!slot.available}>
                      {slot.time} {!slot.available && "(Unavailable)"}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div>
          <Label htmlFor="message">Additional Notes</Label>
          <Textarea
            id="message"
            value={formData.message}
            onChange={(e) => handleChange("message", e.target.value)}
            placeholder="Any specific areas you'd like to focus on, questions, or special requirements..."
            rows={3}
          />
        </div>

        {/* Walkthrough Type Info */}
        {formData.type && (
          <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <div className="flex items-start gap-2">
              {formData.type === "virtual" ? (
                <Video className="h-4 w-4 text-blue-600 mt-0.5" />
              ) : formData.type === "self-guided" ? (
                <Clock className="h-4 w-4 text-blue-600 mt-0.5" />
              ) : (
                <User className="h-4 w-4 text-blue-600 mt-0.5" />
              )}
              <div>
                <div className="text-sm font-medium text-blue-800">
                  {formData.type === "virtual" && "Virtual Tour Information"}
                  {formData.type === "self-guided" && "Self-Guided Tour Information"}
                  {formData.type === "in-person" && "In-Person Walkthrough Information"}
                </div>
                <div className="text-xs text-blue-700 mt-1">
                  {formData.type === "virtual" &&
                    "You will receive a video call link via email. Ensure you have a stable internet connection."}
                  {formData.type === "self-guided" &&
                    "You will receive access codes and instructions via email. Tours are available during business hours."}
                  {formData.type === "in-person" &&
                    "The agent will meet you at the property. Please arrive on time and bring valid ID."}
                </div>
              </div>
            </div>
          </div>
        )}

        <Button type="submit" className="w-full">
          <Calendar className="h-4 w-4 mr-2" />
          Schedule Walkthrough
        </Button>
      </form>

      {/* Contact Information */}
      <div className="mt-6 pt-6 border-t">
        <div className="text-sm text-gray-600">
          <p className="mb-2">Questions about scheduling? Contact us directly:</p>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Phone className="h-3 w-3" />
              <span>{agentPhone}</span>
            </div>
            <div className="flex items-center gap-1">
              <Mail className="h-3 w-3" />
              <span>agent@realestate.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
