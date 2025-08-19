import { Calendar, Key, FileText, Home } from "lucide-react"

interface TimelineEvent {
  date: string
  title: string
  description: string
  type: "listing" | "viewing" | "offer" | "closing"
}

interface PropertyTimelineProps {
  events: TimelineEvent[]
}

const getIcon = (type: string) => {
  switch (type) {
    case "listing":
      return <Home className="h-4 w-4" />
    case "viewing":
      return <Calendar className="h-4 w-4" />
    case "offer":
      return <FileText className="h-4 w-4" />
    case "closing":
      return <Key className="h-4 w-4" />
    default:
      return <Calendar className="h-4 w-4" />
  }
}

const getColor = (type: string) => {
  switch (type) {
    case "listing":
      return "bg-blue-100 text-blue-600 border-blue-200"
    case "viewing":
      return "bg-amber-100 text-amber-600 border-amber-200"
    case "offer":
      return "bg-green-100 text-green-600 border-green-200"
    case "closing":
      return "bg-purple-100 text-purple-600 border-purple-200"
    default:
      return "bg-gray-100 text-gray-600 border-gray-200"
  }
}

export function PropertyTimeline({ events }: PropertyTimelineProps) {
  return (
    <div className="bg-white rounded-lg border p-6">
      <h3 className="text-lg font-semibold mb-6">Property Timeline</h3>

      <div className="relative">
        <div className="absolute left-6 top-0 bottom-0 w-px bg-gray-200"></div>

        <div className="space-y-6">
          {events.map((event, index) => (
            <div key={index} className="relative flex items-start gap-4">
              <div
                className={`flex items-center justify-center w-12 h-12 rounded-full border-2 ${getColor(event.type)}`}
              >
                {getIcon(event.type)}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-medium text-gray-900">{event.title}</h4>
                  <span className="text-sm text-gray-500">{event.date}</span>
                </div>
                <p className="text-gray-600 text-sm">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
