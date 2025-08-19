import {
  Wifi,
  Car,
  Dumbbell,
  Waves,
  TreePine,
  Shield,
  Coffee,
  Utensils,
  WashingMachineIcon as Washing,
  AirVent,
  Zap,
  Droplets,
  type LucideIcon,
} from "lucide-react"

interface Amenity {
  name: string
  icon: string
  category: "building" | "unit" | "outdoor" | "security"
}

interface PropertyAmenitiesProps {
  amenities: Amenity[]
}

const getIcon = (iconName: string) => {
  const icons: Record<string, LucideIcon> = {
    wifi: Wifi,
    parking: Car,
    gym: Dumbbell,
    pool: Waves,
    garden: TreePine,
    security: Shield,
    coffee: Coffee,
    kitchen: Utensils,
    laundry: Washing,
    ac: AirVent,
    electricity: Zap,
    water: Droplets,
  }

  const IconComponent = icons[iconName] || Coffee
  return <IconComponent className="h-5 w-5" />
}

const getCategoryColor = (category: string) => {
  switch (category) {
    case "building":
      return "bg-blue-50 text-blue-700 border-blue-200"
    case "unit":
      return "bg-green-50 text-green-700 border-green-200"
    case "outdoor":
      return "bg-amber-50 text-amber-700 border-amber-200"
    case "security":
      return "bg-purple-50 text-purple-700 border-purple-200"
    default:
      return "bg-gray-50 text-gray-700 border-gray-200"
  }
}

export function PropertyAmenities({ amenities }: PropertyAmenitiesProps) {
  const categories = {
    building: amenities.filter((a) => a.category === "building"),
    unit: amenities.filter((a) => a.category === "unit"),
    outdoor: amenities.filter((a) => a.category === "outdoor"),
    security: amenities.filter((a) => a.category === "security"),
  }

  return (
    <div className="bg-white rounded-lg border p-6">
      <h3 className="text-lg font-semibold mb-6">Amenities & Features</h3>

      <div className="space-y-6">
        {Object.entries(categories).map(
          ([category, items]) =>
            items.length > 0 && (
              <div key={category}>
                <h4 className="font-medium text-gray-900 mb-3 capitalize">
                  {category === "unit" ? "In-Unit Features" : `${category} Amenities`}
                </h4>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {items.map((amenity, index) => (
                    <div
                      key={index}
                      className={`flex items-center gap-3 p-3 rounded-lg border ${getCategoryColor(category)}`}
                    >
                      {getIcon(amenity.icon)}
                      <span className="text-sm font-medium">{amenity.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ),
        )}
      </div>
    </div>
  )
}
