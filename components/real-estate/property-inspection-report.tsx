import { CheckCircle, AlertTriangle, XCircle, FileText, Calendar, User } from "lucide-react"

interface InspectionItem {
  category: string
  item: string
  status: "good" | "minor" | "major"
  description: string
  recommendation?: string
  estimatedCost?: number
}

interface InspectionReport {
  date: string
  inspector: string
  license: string
  overallRating: "excellent" | "good" | "fair" | "poor"
  items: InspectionItem[]
  summary: {
    totalIssues: number
    minorIssues: number
    majorIssues: number
    estimatedRepairCost: number
  }
}

interface PropertyInspectionReportProps {
  report: InspectionReport
}

export function PropertyInspectionReport({ report }: PropertyInspectionReportProps) {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "good":
        return <CheckCircle className="h-4 w-4 text-green-600" />
      case "minor":
        return <AlertTriangle className="h-4 w-4 text-amber-600" />
      case "major":
        return <XCircle className="h-4 w-4 text-red-600" />
      default:
        return <CheckCircle className="h-4 w-4 text-gray-600" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "good":
        return "bg-green-50 border-green-200"
      case "minor":
        return "bg-amber-50 border-amber-200"
      case "major":
        return "bg-red-50 border-red-200"
      default:
        return "bg-gray-50 border-gray-200"
    }
  }

  const getOverallRatingColor = (rating: string) => {
    switch (rating) {
      case "excellent":
        return "bg-green-100 text-green-800"
      case "good":
        return "bg-lime-100 text-lime-800"
      case "fair":
        return "bg-amber-100 text-amber-800"
      case "poor":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const groupedItems = report.items.reduce(
    (acc, item) => {
      if (!acc[item.category]) {
        acc[item.category] = []
      }
      acc[item.category].push(item)
      return acc
    },
    {} as Record<string, InspectionItem[]>,
  )

  return (
    <div className="bg-white rounded-lg border p-6">
      <div className="flex items-center gap-2 mb-6">
        <FileText className="h-5 w-5 text-cyan-600" />
        <h3 className="text-lg font-semibold">Property Inspection Report</h3>
      </div>

      {/* Report Header */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-gray-500" />
            <span className="text-sm text-gray-600">Inspection Date: {report.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <User className="h-4 w-4 text-gray-500" />
            <span className="text-sm text-gray-600">Inspector: {report.inspector}</span>
          </div>
          <div className="text-sm text-gray-600">License: {report.license}</div>
        </div>

        <div className="space-y-3">
          <div>
            <span className="text-sm text-gray-600">Overall Rating:</span>
            <span
              className={`ml-2 px-3 py-1 rounded-full text-sm font-medium capitalize ${getOverallRatingColor(report.overallRating)}`}
            >
              {report.overallRating}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 rounded-lg p-3">
              <div className="text-lg font-bold text-gray-900">{report.summary.totalIssues}</div>
              <div className="text-sm text-gray-600">Total Issues</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-3">
              <div className="text-lg font-bold text-gray-900">
                ${report.summary.estimatedRepairCost.toLocaleString()}
              </div>
              <div className="text-sm text-gray-600">Est. Repairs</div>
            </div>
          </div>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <CheckCircle className="h-5 w-5 text-green-600" />
            <span className="font-medium text-green-800">Good Condition</span>
          </div>
          <div className="text-2xl font-bold text-green-900">
            {report.items.filter((item) => item.status === "good").length}
          </div>
          <div className="text-sm text-green-700">Items in good condition</div>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <AlertTriangle className="h-5 w-5 text-amber-600" />
            <span className="font-medium text-amber-800">Minor Issues</span>
          </div>
          <div className="text-2xl font-bold text-amber-900">{report.summary.minorIssues}</div>
          <div className="text-sm text-amber-700">Require attention</div>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <XCircle className="h-5 w-5 text-red-600" />
            <span className="font-medium text-red-800">Major Issues</span>
          </div>
          <div className="text-2xl font-bold text-red-900">{report.summary.majorIssues}</div>
          <div className="text-sm text-red-700">Need immediate attention</div>
        </div>
      </div>

      {/* Detailed Inspection Items */}
      <div className="space-y-6">
        {Object.entries(groupedItems).map(([category, items]) => (
          <div key={category}>
            <h4 className="font-medium text-gray-900 mb-3 capitalize">{category.replace("_", " ")}</h4>

            <div className="space-y-3">
              {items.map((item, index) => (
                <div key={index} className={`border rounded-lg p-4 ${getStatusColor(item.status)}`}>
                  <div className="flex items-start gap-3">
                    {getStatusIcon(item.status)}
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h5 className="font-medium text-gray-900">{item.item}</h5>
                        {item.estimatedCost && (
                          <span className="text-sm font-medium text-gray-700">
                            Est. ${item.estimatedCost.toLocaleString()}
                          </span>
                        )}
                      </div>

                      <p className="text-sm text-gray-700 mb-2">{item.description}</p>

                      {item.recommendation && (
                        <div className="bg-white/50 rounded p-2">
                          <div className="text-xs font-medium text-gray-800 mb-1">Recommendation:</div>
                          <div className="text-xs text-gray-700">{item.recommendation}</div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Report Footer */}
      <div className="mt-6 pt-6 border-t">
        <div className="bg-gray-50 rounded-lg p-4">
          <h5 className="font-medium text-gray-900 mb-2">Important Notes</h5>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>• This inspection is visual only and does not include destructive testing</li>
            <li>• Some issues may not be visible during the inspection</li>
            <li>• Estimated repair costs are approximate and may vary</li>
            <li>• Consult with qualified professionals for detailed assessments</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
