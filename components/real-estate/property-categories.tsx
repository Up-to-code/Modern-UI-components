import { Card, CardContent } from "@/components/ui/card"
import { Home, Building, TreePine, Factory, Store, Warehouse } from "lucide-react"

const categories = [
  {
    icon: Home,
    title: "Residential",
    description: "Houses, condos, and apartments",
    count: "5,240",
    color: "bg-blue-500",
  },
  {
    icon: Building,
    title: "Commercial",
    description: "Office buildings and retail spaces",
    count: "1,180",
    color: "bg-green-500",
  },
  {
    icon: TreePine,
    title: "Land",
    description: "Vacant lots and development land",
    count: "890",
    color: "bg-emerald-500",
  },
  {
    icon: Factory,
    title: "Industrial",
    description: "Warehouses and manufacturing",
    count: "420",
    color: "bg-orange-500",
  },
  {
    icon: Store,
    title: "Retail",
    description: "Shopping centers and stores",
    count: "650",
    color: "bg-purple-500",
  },
  {
    icon: Warehouse,
    title: "Investment",
    description: "Income-generating properties",
    count: "320",
    color: "bg-red-500",
  },
]

export function PropertyCategories() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Property Categories</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore different types of properties to find exactly what you're looking for.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
            >
              <CardContent className="p-6 text-center">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 ${category.color} rounded-full mb-4 group-hover:scale-110 transition-transform`}
                >
                  <category.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{category.title}</h3>
                <p className="text-muted-foreground mb-3">{category.description}</p>
                <div className="text-2xl font-bold text-primary">{category.count}</div>
                <div className="text-sm text-muted-foreground">Available Properties</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
