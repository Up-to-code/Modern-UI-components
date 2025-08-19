"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Share2, Copy, Facebook, Twitter, Mail, MessageSquare, Check } from "lucide-react"

interface PropertyShareProps {
  propertyTitle: string
  propertyUrl: string
}

export function PropertyShare({ propertyTitle, propertyUrl }: PropertyShareProps) {
  const [copied, setCopied] = useState(false)

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(propertyUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy link:", err)
    }
  }

  const shareOptions = [
    {
      name: "Facebook",
      icon: Facebook,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(propertyUrl)}`,
      color: "text-blue-600 hover:text-blue-700",
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(`Check out this property: ${propertyTitle}`)}&url=${encodeURIComponent(propertyUrl)}`,
      color: "text-sky-500 hover:text-sky-600",
    },
    {
      name: "Email",
      icon: Mail,
      url: `mailto:?subject=${encodeURIComponent(`Property: ${propertyTitle}`)}&body=${encodeURIComponent(`I found this property that might interest you: ${propertyUrl}`)}`,
      color: "text-gray-600 hover:text-gray-700",
    },
    {
      name: "WhatsApp",
      icon: MessageSquare,
      url: `https://wa.me/?text=${encodeURIComponent(`Check out this property: ${propertyTitle} ${propertyUrl}`)}`,
      color: "text-green-600 hover:text-green-700",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Share2 className="h-5 w-5 text-cyan-600" />
          Share This Property
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex gap-2">
          <Input value={propertyUrl} readOnly className="flex-1" />
          <Button onClick={handleCopyLink} variant="outline" className="shrink-0 bg-transparent">
            {copied ? (
              <>
                <Check className="h-4 w-4 mr-2" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="h-4 w-4 mr-2" />
                Copy
              </>
            )}
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {shareOptions.map((option) => (
            <Button
              key={option.name}
              variant="outline"
              className="flex flex-col items-center gap-2 h-auto py-3 bg-transparent"
              onClick={() => window.open(option.url, "_blank")}
            >
              <option.icon className={`h-5 w-5 ${option.color}`} />
              <span className="text-sm">{option.name}</span>
            </Button>
          ))}
        </div>

        <div className="text-center text-sm text-muted-foreground">Share this property with friends and family</div>
      </CardContent>
    </Card>
  )
}
