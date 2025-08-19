"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Phone, Mail, Star, Award, Globe, MessageCircle } from "lucide-react"

interface AgentProfileProps {
  agent: {
    name: string
    title: string
    phone: string
    email: string
    image: string
    bio: string
    specialties: string[]
    certifications: string[]
    languages: string[]
    socialMedia: {
      linkedin?: string
      facebook?: string
      instagram?: string
    }
  }
}

export function AgentProfile({ agent }: AgentProfileProps) {
  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <div className="flex flex-col md:flex-row gap-6">
          {/* Agent Photo */}
          <div className="flex-shrink-0">
            <img
              src={agent.image || "/placeholder.svg"}
              alt={agent.name}
              className="w-32 h-32 rounded-full object-cover border-4 border-primary/20"
            />
          </div>

          {/* Agent Info */}
          <div className="flex-1 space-y-4">
            <div>
              <CardTitle className="text-2xl font-bold">{agent.name}</CardTitle>
              <p className="text-lg text-muted-foreground">{agent.title}</p>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4 text-primary" />
                <span>{agent.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4 text-primary" />
                <span>{agent.email}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3">
              <Button>
                <MessageCircle className="h-4 w-4 mr-2" />
                Contact Agent
              </Button>
              <Button variant="outline">
                <Phone className="h-4 w-4 mr-2" />
                Call Now
              </Button>
              <Button variant="outline">
                <Mail className="h-4 w-4 mr-2" />
                Send Email
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="flex md:flex-col gap-4 md:gap-2 text-center">
            <div className="bg-muted/50 p-3 rounded-lg">
              <div className="text-2xl font-bold text-primary">4.9</div>
              <div className="text-sm text-muted-foreground flex items-center justify-center gap-1">
                <Star className="h-3 w-3 fill-current" />
                Rating
              </div>
            </div>
            <div className="bg-muted/50 p-3 rounded-lg">
              <div className="text-2xl font-bold text-primary">127</div>
              <div className="text-sm text-muted-foreground">Reviews</div>
            </div>
            <div className="bg-muted/50 p-3 rounded-lg">
              <div className="text-2xl font-bold text-primary">10+</div>
              <div className="text-sm text-muted-foreground">Years</div>
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Bio */}
        <div>
          <h3 className="font-semibold mb-3 flex items-center gap-2">
            <Award className="h-5 w-5 text-primary" />
            About {agent.name.split(" ")[0]}
          </h3>
          <p className="text-muted-foreground leading-relaxed">{agent.bio}</p>
        </div>

        <Separator />

        {/* Specialties */}
        <div>
          <h3 className="font-semibold mb-3">Specialties</h3>
          <div className="flex flex-wrap gap-2">
            {agent.specialties.map((specialty, index) => (
              <Badge key={index} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                {specialty}
              </Badge>
            ))}
          </div>
        </div>

        <Separator />

        {/* Certifications */}
        <div>
          <h3 className="font-semibold mb-3 flex items-center gap-2">
            <Award className="h-5 w-5 text-primary" />
            Certifications & Credentials
          </h3>
          <div className="flex flex-wrap gap-2">
            {agent.certifications.map((cert, index) => (
              <Badge key={index} variant="outline" className="border-primary/30">
                {cert}
              </Badge>
            ))}
          </div>
        </div>

        <Separator />

        {/* Languages */}
        <div>
          <h3 className="font-semibold mb-3 flex items-center gap-2">
            <Globe className="h-5 w-5 text-primary" />
            Languages
          </h3>
          <div className="flex flex-wrap gap-2">
            {agent.languages.map((language, index) => (
              <Badge key={index} variant="secondary">
                {language}
              </Badge>
            ))}
          </div>
        </div>

        <Separator />

        {/* Social Media */}
        <div>
          <h3 className="font-semibold mb-3">Connect on Social Media</h3>
          <div className="flex gap-3">
            {agent.socialMedia.linkedin && (
              <Button variant="outline" size="sm" asChild>
                <a href={agent.socialMedia.linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </Button>
            )}
            {agent.socialMedia.facebook && (
              <Button variant="outline" size="sm" asChild>
                <a href={agent.socialMedia.facebook} target="_blank" rel="noopener noreferrer">
                  Facebook
                </a>
              </Button>
            )}
            {agent.socialMedia.instagram && (
              <Button variant="outline" size="sm" asChild>
                <a href={agent.socialMedia.instagram} target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
              </Button>
            )}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-muted/30 p-4 rounded-lg">
          <h4 className="font-semibold mb-3">Recent Activity</h4>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Properties Sold (Last 12 months):</span>
              <span className="font-medium">24</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Average Days on Market:</span>
              <span className="font-medium">18 days</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Average Sale Price:</span>
              <span className="font-medium">$685,000</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Client Satisfaction:</span>
              <span className="font-medium flex items-center gap-1">
                98%
                <Star className="h-3 w-3 fill-current text-yellow-500" />
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
