import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Phone, Mail, MessageCircle } from "lucide-react"

const agents = [
  {
    id: 1,
    name: "Sarah Johnson",
    title: "Senior Real Estate Agent",
    image: "/placeholder.svg?height=200&width=200",
    rating: 4.9,
    reviews: 127,
    sales: 85,
    specialties: ["Luxury Homes", "First-Time Buyers"],
    phone: "(555) 123-4567",
    email: "sarah@estatehub.com",
  },
  {
    id: 2,
    name: "Michael Chen",
    title: "Commercial Property Specialist",
    image: "/placeholder.svg?height=200&width=200",
    rating: 4.8,
    reviews: 94,
    sales: 62,
    specialties: ["Commercial", "Investment Properties"],
    phone: "(555) 234-5678",
    email: "michael@estatehub.com",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    title: "Residential Sales Expert",
    image: "/placeholder.svg?height=200&width=200",
    rating: 4.9,
    reviews: 156,
    sales: 98,
    specialties: ["Family Homes", "Relocation"],
    phone: "(555) 345-6789",
    email: "emily@estatehub.com",
  },
]

export function AgentShowcase() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Meet Our Expert Agents</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our experienced team of real estate professionals is here to guide you through every step of your property
            journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {agents.map((agent) => (
            <Card key={agent.id} className="overflow-hidden hover:shadow-xl transition-shadow">
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
                <h3 className="text-xl font-semibold text-foreground mb-1">{agent.name}</h3>
                <p className="text-muted-foreground mb-4">{agent.title}</p>

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
          ))}
        </div>

        <div className="text-center mt-8">
          <Button variant="outline" size="lg">
            View All Agents
          </Button>
        </div>
      </div>
    </section>
  )
}
