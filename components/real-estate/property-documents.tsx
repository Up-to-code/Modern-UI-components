"use client"

import { FileText, Download, Eye, Calendar, User } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Document {
  id: string
  name: string
  type: "pdf" | "doc" | "image"
  size: string
  uploadDate: string
  uploadedBy: string
  category: "listing" | "legal" | "inspection" | "financial"
}

interface PropertyDocumentsProps {
  documents: Document[]
}

const getDocumentIcon = (type: string) => {
  return <FileText className="h-4 w-4" />
}

const getCategoryColor = (category: string) => {
  switch (category) {
    case "listing":
      return "bg-blue-100 text-blue-800"
    case "legal":
      return "bg-red-100 text-red-800"
    case "inspection":
      return "bg-green-100 text-green-800"
    case "financial":
      return "bg-amber-100 text-amber-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

export function PropertyDocuments({ documents }: PropertyDocumentsProps) {
  const categories = {
    listing: documents.filter((d) => d.category === "listing"),
    legal: documents.filter((d) => d.category === "legal"),
    inspection: documents.filter((d) => d.category === "inspection"),
    financial: documents.filter((d) => d.category === "financial"),
  }

  const handleDownload = (document: Document) => {
    console.log("Downloading document:", document.name)
  }

  const handlePreview = (document: Document) => {
    console.log("Previewing document:", document.name)
  }

  return (
    <div className="bg-white rounded-lg border p-6">
      <h3 className="text-lg font-semibold mb-6">Property Documents</h3>

      <div className="space-y-6">
        {Object.entries(categories).map(
          ([category, docs]) =>
            docs.length > 0 && (
              <div key={category}>
                <h4 className="font-medium text-gray-900 mb-3 capitalize flex items-center gap-2">
                  {category} Documents
                  <span className={`px-2 py-1 rounded-full text-xs ${getCategoryColor(category)}`}>{docs.length}</span>
                </h4>

                <div className="space-y-2">
                  {docs.map((document) => (
                    <div
                      key={document.id}
                      className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50"
                    >
                      <div className="flex items-center gap-3">
                        {getDocumentIcon(document.type)}
                        <div>
                          <div className="font-medium text-gray-900">{document.name}</div>
                          <div className="flex items-center gap-4 text-sm text-gray-500">
                            <span>{document.size}</span>
                            <div className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              <span>{document.uploadDate}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <User className="h-3 w-3" />
                              <span>{document.uploadedBy}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm" onClick={() => handlePreview(document)}>
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm" onClick={() => handleDownload(document)}>
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ),
        )}
      </div>

      {documents.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          <FileText className="h-12 w-12 mx-auto mb-3 text-gray-300" />
          <p>No documents available for this property</p>
        </div>
      )}
    </div>
  )
}
