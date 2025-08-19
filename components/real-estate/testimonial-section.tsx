import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Jennifer Martinez",
    role: "First-time Homebuyer",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "EstateHub made buying my first home incredibly easy. Sarah was patient, knowledgeable, and helped me find the perfect place within my budget.",
    location: "Austin, TX",
  },
  {
    id: 2,
    name: "David Thompson",
    role: "Property Investor",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "I've worked with many real estate platforms, but EstateHub stands out. Their market insights and professional service helped me build my portfolio.",
    location: "Denver, CO",
  },
  {
    id: 3,
    name: "Lisa Wang",
    role: "Family Relocating",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "Moving across the country was stressful, but Emily made the process seamless. We found our dream home before we even arrived in the city!",
    location: "Seattle, WA",
  },
]

export function TestimonialSection() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What Our Clients Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about their experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Quote className="h-8 w-8 text-primary/20 mr-2" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">"{testimonial.text}"</p>

                <div className="flex items-center">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
