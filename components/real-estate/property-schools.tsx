import { GraduationCap, Star, MapPin, Users, TrendingUp } from "lucide-react"

interface School {
  name: string
  type: "elementary" | "middle" | "high" | "private"
  rating: number
  distance: number
  enrollment: number
  studentTeacherRatio: number
  testScores?: number
  address: string
}

interface PropertySchoolsProps {
  schools: School[]
}

export function PropertySchools({ schools }: PropertySchoolsProps) {
  const getSchoolTypeColor = (type: string) => {
    switch (type) {
      case "elementary":
        return "bg-green-100 text-green-800"
      case "middle":
        return "bg-blue-100 text-blue-800"
      case "high":
        return "bg-purple-100 text-purple-800"
      case "private":
        return "bg-amber-100 text-amber-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getRatingColor = (rating: number) => {
    if (rating >= 8) return "text-green-600"
    if (rating >= 6) return "text-amber-600"
    return "text-red-600"
  }

  const getSchoolTypeLabel = (type: string) => {
    switch (type) {
      case "elementary":
        return "Elementary"
      case "middle":
        return "Middle School"
      case "high":
        return "High School"
      case "private":
        return "Private School"
      default:
        return "School"
    }
  }

  const sortedSchools = schools ? [...schools].sort((a, b) => a.distance - b.distance) : []

  return (
    <div className="bg-white rounded-lg border p-6">
      <div className="flex items-center gap-2 mb-6">
        <GraduationCap className="h-5 w-5 text-cyan-600" />
        <h3 className="text-lg font-semibold">Nearby Schools</h3>
      </div>

      {sortedSchools.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          <GraduationCap className="h-12 w-12 mx-auto mb-3 text-gray-300" />
          <p>No school information available for this area</p>
        </div>
      ) : (
        <div className="space-y-4">
          {sortedSchools.map((school, index) => (
            <div key={index} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-semibold text-gray-900">{school?.name || "Unknown School"}</h4>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${getSchoolTypeColor(school?.type || "")}`}
                    >
                      {getSchoolTypeLabel(school?.type || "")}
                    </span>
                  </div>

                  <div className="flex items-center gap-1 mb-2">
                    <MapPin className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{school?.address || "Address not available"}</span>
                  </div>
                </div>

                <div className="text-right">
                  <div className="flex items-center gap-1 mb-1">
                    <Star className={`h-4 w-4 ${getRatingColor(school?.rating || 0)}`} />
                    <span className={`font-semibold ${getRatingColor(school?.rating || 0)}`}>
                      {school?.rating || 0}/10
                    </span>
                  </div>
                  <div className="text-sm text-gray-500">{school?.distance || 0} miles</div>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-gray-400" />
                  <div>
                    <div className="text-sm font-medium text-gray-900">
                      {school?.enrollment?.toLocaleString() || "0"}
                    </div>
                    <div className="text-xs text-gray-500">Students</div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <GraduationCap className="h-4 w-4 text-gray-400" />
                  <div>
                    <div className="text-sm font-medium text-gray-900">{school?.studentTeacherRatio || 0}:1</div>
                    <div className="text-xs text-gray-500">Student/Teacher</div>
                  </div>
                </div>

                {school?.testScores && (
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-gray-400" />
                    <div>
                      <div className="text-sm font-medium text-gray-900">{school.testScores}%</div>
                      <div className="text-xs text-gray-500">Test Scores</div>
                    </div>
                  </div>
                )}

                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-gray-400" />
                  <div>
                    <div className="text-sm font-medium text-gray-900">{school?.distance || 0} mi</div>
                    <div className="text-xs text-gray-500">Distance</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* School District Summary */}
      {sortedSchools.length > 0 && (
        <div className="mt-6 pt-6 border-t">
          <h4 className="font-medium text-gray-900 mb-3">School District Summary</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-50 rounded-lg p-3">
              <div className="text-lg font-bold text-gray-900">
                {sortedSchools.length > 0
                  ? (
                      sortedSchools.reduce((sum, school) => sum + (school?.rating || 0), 0) / sortedSchools.length
                    ).toFixed(1)
                  : "0"}
                /10
              </div>
              <div className="text-sm text-gray-600">Average Rating</div>
            </div>

            <div className="bg-gray-50 rounded-lg p-3">
              <div className="text-lg font-bold text-gray-900">{sortedSchools.length}</div>
              <div className="text-sm text-gray-600">Schools Nearby</div>
            </div>

            <div className="bg-gray-50 rounded-lg p-3">
              <div className="text-lg font-bold text-gray-900">
                {sortedSchools.length > 0 ? Math.min(...sortedSchools.map((s) => s?.distance || 0)).toFixed(1) : "0"} mi
              </div>
              <div className="text-sm text-gray-600">Closest School</div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
