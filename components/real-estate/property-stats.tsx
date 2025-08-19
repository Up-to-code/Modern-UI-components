import { Card, CardContent } from "@/components/ui/card"
import { Home, Users, Award, TrendingUp } from "lucide-react"

const stats = [
  {
    icon: Home,
    value: "10,000+",
    label: "Properties Listed",
    description: "Active listings across all categories",
  },
  {
    icon: Users,
    value: "50,000+",
    label: "Happy Clients",
    description: "Satisfied customers nationwide",
  },
  {
    icon: Award,
    value: "15+",
    label: "Years Experience",
    description: "Trusted real estate expertise",
  },
  {
    icon: TrendingUp,
    value: "98%",
    label: "Success Rate",
    description: "Successful property transactions",
  },
]

export function PropertyStats() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Trusted by Thousands</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our track record speaks for itself. Join the thousands who have found their perfect home with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-foreground mb-1">{stat.label}</div>
                <p className="text-sm text-muted-foreground">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
