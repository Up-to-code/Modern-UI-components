import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Phone, Mail, MessageCircle, Award } from "lucide-react"

interface AgentCardProps {
  agent: {
    id: number
    name: string
    title: string
    image: string
    rating: number
    reviews: number
    sales: number
    specialties: string[]
    phone: string
    email: string
    yearsExperience?: number
  }
}

export function AgentCard({ agent }: AgentCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-xl transition-shadow">
      <div className="relative">
        <img src={agent.image || "/placeholder.svg"} alt={agent.name} className="w-full h-64 object-cover" />
        <div className="absolute bottom-4 left-4 right-4">
          <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="font-semibold">{agent.rating}</span>
                <span className="text-sm text-muted-foreground">({agent.reviews})</span>
              </div>
              <Badge variant="secondary">{agent.sales} Sales</Badge>
            </div>
          </div>
        </div>
      </div>

      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className="text-xl font-semibold text-foreground">{agent.name}</h3>
            <p className="text-muted-foreground">{agent.title}</p>
          </div>
          {agent.yearsExperience && (
            <div className="text-right">
              <div className="flex items-center text-sm text-muted-foreground">
                <Award className="h-4 w-4 mr-1" />
                {agent.yearsExperience}+ years
              </div>
            </div>
          )}
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {agent.specialties.map((specialty, index) => (
            <Badge key={index} variant="outline">
              {specialty}
            </Badge>
          ))}
        </div>

        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-muted-foreground">
            <Phone className="h-4 w-4 mr-2" />
            {agent.phone}
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Mail className="h-4 w-4 mr-2" />
            {agent.email}
          </div>
        </div>

        <Button className="w-full">
          <MessageCircle className="mr-2 h-4 w-4" />
          Contact Agent
        </Button>
      </CardContent>
    </Card>
  )
}
