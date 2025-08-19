"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Star, ThumbsUp, MessageSquare, Filter, Plus } from "lucide-react"
import { useState } from "react"

interface Review {
  author: string
  rating: number
  comment: string
  date: string
  helpful?: number
  verified?: boolean
  avatar?: string
}

interface PropertyReviewsProps {
  reviews: Review[]
}

export function PropertyReviews({ reviews }: PropertyReviewsProps) {
  const [sortBy, setSortBy] = useState("newest")
  const [filterRating, setFilterRating] = useState("all")

  // Calculate average rating
  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length
  const totalReviews = reviews.length

  // Rating distribution
  const ratingDistribution = [5, 4, 3, 2, 1].map((rating) => ({
    rating,
    count: reviews.filter((review) => review.rating === rating).length,
    percentage: (reviews.filter((review) => review.rating === rating).length / totalReviews) * 100,
  }))

  const renderStars = (rating: number, size: "sm" | "md" | "lg" = "sm") => {
    const sizeClass = size === "sm" ? "h-4 w-4" : size === "md" ? "h-5 w-5" : "h-6 w-6"
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`${sizeClass} ${star <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
          />
        ))}
      </div>
    )
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5 text-primary" />
            Property Reviews
          </CardTitle>
          <Button variant="outline" size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Write Review
          </Button>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Rating Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Average Rating */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-4 mb-4">
              <div className="text-4xl font-bold text-primary">{averageRating.toFixed(1)}</div>
              <div>
                {renderStars(Math.round(averageRating), "lg")}
                <div className="text-sm text-muted-foreground mt-1">Based on {totalReviews} reviews</div>
              </div>
            </div>
          </div>

          {/* Rating Distribution */}
          <div className="space-y-2">
            {ratingDistribution.map(({ rating, count, percentage }) => (
              <div key={rating} className="flex items-center gap-3 text-sm">
                <div className="flex items-center gap-1 w-12">
                  <span>{rating}</span>
                  <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                </div>
                <div className="flex-1 bg-muted rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full transition-all" style={{ width: `${percentage}%` }} />
                </div>
                <span className="text-muted-foreground w-8">{count}</span>
              </div>
            ))}
          </div>
        </div>

        <Separator />

        {/* Filters and Sort */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm font-medium">Sort by:</span>
          </div>
          <div className="flex gap-2">
            {["newest", "oldest", "highest", "lowest"].map((sort) => (
              <Button
                key={sort}
                variant={sortBy === sort ? "default" : "outline"}
                size="sm"
                onClick={() => setSortBy(sort)}
              >
                {sort.charAt(0).toUpperCase() + sort.slice(1)}
              </Button>
            ))}
          </div>
        </div>

        {/* Reviews List */}
        <div className="space-y-4">
          {reviews.map((review, index) => (
            <div key={index} className="border rounded-lg p-4 space-y-3">
              {/* Review Header */}
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium text-primary">{review.author.charAt(0).toUpperCase()}</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{review.author}</span>
                      {review.verified && (
                        <Badge variant="secondary" className="text-xs">
                          Verified
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      {renderStars(review.rating)}
                      <span className="text-sm text-muted-foreground">{review.date}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Review Content */}
              <p className="text-muted-foreground leading-relaxed">{review.comment}</p>

              {/* Review Actions */}
              <div className="flex items-center gap-4 pt-2">
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                  <ThumbsUp className="h-4 w-4 mr-1" />
                  Helpful {review.helpful && `(${review.helpful})`}
                </Button>
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                  <MessageSquare className="h-4 w-4 mr-1" />
                  Reply
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center">
          <Button variant="outline">Load More Reviews</Button>
        </div>

        {/* Review Summary */}
        <div className="bg-muted/30 p-4 rounded-lg">
          <h4 className="font-semibold mb-3">Review Summary</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">{averageRating.toFixed(1)}</div>
              <div className="text-muted-foreground">Overall Rating</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">{totalReviews}</div>
              <div className="text-muted-foreground">Total Reviews</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">
                {Math.round(ratingDistribution.find((r) => r.rating === 5)?.percentage || 0)}%
              </div>
              <div className="text-muted-foreground">5-Star Reviews</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">95%</div>
              <div className="text-muted-foreground">Recommend</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
