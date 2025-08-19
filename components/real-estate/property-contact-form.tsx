"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, MessageSquare } from "lucide-react"

interface PropertyContactFormProps {
  propertyTitle?: string
  agentName?: string
  agentPhone?: string
  agentEmail?: string
}

export function PropertyContactForm({
  propertyTitle = "Property",
  agentName = "Real Estate Agent",
  agentPhone = "(555) 123-4567",
  agentEmail = "agent@realestate.com",
}: PropertyContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Contact form submitted:", formData)
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="bg-white rounded-lg border p-6">
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Contact Agent</h3>
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-gray-600">
            <Mail className="h-4 w-4" />
            <span className="text-sm">{agentEmail}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Phone className="h-4 w-4" />
            <span className="text-sm">{agentPhone}</span>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              placeholder="Your full name"
              required
            />
          </div>

          <div>
            <Label htmlFor="email">Email</Label>
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
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              placeholder="(555) 123-4567"
            />
          </div>

          <div>
            <Label htmlFor="inquiry-type">Inquiry Type</Label>
            <Select value={formData.inquiryType} onValueChange={(value) => handleChange("inquiryType", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select inquiry type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="viewing">Schedule Viewing</SelectItem>
                <SelectItem value="info">Request Information</SelectItem>
                <SelectItem value="offer">Make an Offer</SelectItem>
                <SelectItem value="financing">Financing Options</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div>
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            value={formData.message}
            onChange={(e) => handleChange("message", e.target.value)}
            placeholder={`I'm interested in ${propertyTitle}. Please contact me with more information.`}
            rows={4}
          />
        </div>

        <div className="flex gap-3">
          <Button type="submit" className="flex-1">
            <MessageSquare className="h-4 w-4 mr-2" />
            Send Message
          </Button>
          <Button type="button" variant="outline">
            <Phone className="h-4 w-4 mr-2" />
            Call Now
          </Button>
        </div>
      </form>
    </div>
  )
}
