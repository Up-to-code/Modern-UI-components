import { PropertyHero } from "@/components/real-estate/property-hero"
import { PropertySearch } from "@/components/real-estate/property-search"
import { FeaturedProperties } from "@/components/real-estate/featured-properties"
import { PropertyStats } from "@/components/real-estate/property-stats"
import { AgentShowcase } from "@/components/real-estate/agent-showcase"
import { PropertyCategories } from "@/components/real-estate/property-categories"
import { TestimonialSection } from "@/components/real-estate/testimonial-section"
import { PropertyMap } from "@/components/real-estate/property-map"
import { NewsletterSignup } from "@/components/real-estate/newsletter-signup"
import { PropertyFooter } from "@/components/real-estate/property-footer"
import { PropertyGallery } from "@/components/real-estate/property-gallery"
import { PropertyTimeline } from "@/components/real-estate/property-timeline"
import { PropertyAmenities } from "@/components/real-estate/property-amenities"
import { PropertyContactForm } from "@/components/real-estate/property-contact-form"
import { PropertyFinancing } from "@/components/real-estate/property-financing"
import { PropertyNeighborhood } from "@/components/real-estate/property-neighborhood"
import { PropertyDocuments } from "@/components/real-estate/property-documents"
import { PropertyPriceHistory } from "@/components/real-estate/property-price-history"
import { PropertyEnergyRating } from "@/components/real-estate/property-energy-rating"
import { PropertyFloorPlan } from "@/components/real-estate/property-floor-plan"
import { PropertySchools } from "@/components/real-estate/property-schools"
import { PropertyInvestmentAnalysis } from "@/components/real-estate/property-investment-analysis"
import { PropertyInspectionReport } from "@/components/real-estate/property-inspection-report"
import { PropertyMarketComparison } from "@/components/real-estate/property-market-comparison"
import { PropertyListingStatus } from "@/components/real-estate/property-listing-status"
import { PropertyVirtualStaging } from "@/components/real-estate/property-virtual-staging"
import { PropertyWalkthroughScheduler } from "@/components/real-estate/property-walkthrough-scheduler"
import { PropertyCard } from "@/components/real-estate/property-card"
import { PropertyComparison } from "@/components/real-estate/property-comparison"
import { PropertyDetails } from "@/components/real-estate/property-details"
import { AgentCard } from "@/components/real-estate/agent-card"
import { AgentProfile } from "@/components/real-estate/agent-profile"
import { MortgageCalculator } from "@/components/real-estate/mortgage-calculator"
import { PropertyTour } from "@/components/real-estate/property-tour"
import { PropertyReviews } from "@/components/real-estate/property-reviews"
import { PropertySimilar } from "@/components/real-estate/property-similar"
import { PropertySaved } from "@/components/real-estate/property-saved"
import { PropertyAlert } from "@/components/real-estate/property-alert"
import { PropertyHistory } from "@/components/real-estate/property-history"
import { PropertyValuation } from "@/components/real-estate/property-valuation"
import { PropertyTrends } from "@/components/real-estate/property-trends"
import { PropertyCTA } from "@/components/real-estate/property-cta"
import { PropertyBreadcrumb } from "@/components/real-estate/property-breadcrumb"
import { PropertyShare } from "@/components/real-estate/property-share"
import { SearchFilters } from "@/components/real-estate/search-filters"

export default function HomePage() {
  const sampleImages = [
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
  ]

  const sampleTimeline = [
    {
      date: "2024-01-15",
      title: "Property Listed",
      description: "Property officially listed on the market",
      type: "listing" as const,
    },
    {
      date: "2024-01-20",
      title: "First Viewing",
      description: "Initial property viewing scheduled",
      type: "viewing" as const,
    },
    {
      date: "2024-01-25",
      title: "Offer Received",
      description: "First offer received from potential buyer",
      type: "offer" as const,
    },
  ]

  const sampleAmenities = [
    { name: "High-Speed WiFi", icon: "wifi", category: "building" as const },
    { name: "Parking Garage", icon: "parking", category: "building" as const },
    { name: "Fitness Center", icon: "gym", category: "building" as const },
    { name: "Swimming Pool", icon: "pool", category: "outdoor" as const },
    { name: "Garden Area", icon: "garden", category: "outdoor" as const },
    { name: "24/7 Security", icon: "security", category: "security" as const },
    { name: "Modern Kitchen", icon: "kitchen", category: "unit" as const },
    { name: "In-Unit Laundry", icon: "laundry", category: "unit" as const },
  ]

  const sampleProperty = {
    id: "1",
    title: "Luxury Downtown Condo",
    price: 750000,
    location: "Downtown District",
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1200,
    type: "Condo",
    status: "For Sale",
    images: sampleImages,
    description: "Beautiful luxury condo in the heart of downtown with stunning city views.",
    agent: {
      name: "Sarah Johnson",
      phone: "(555) 123-4567",
      email: "sarah@realestate.com",
      image: "/placeholder.svg?height=100&width=100",
    },
  }

  const sampleNeighborhood = {
    name: "Downtown District",
    walkScore: 95,
    transitScore: 88,
    bikeScore: 82,
    crimeRate: "Low",
    schools: ["Lincoln Elementary", "Central High School"],
    amenities: ["Shopping Mall", "Parks", "Restaurants", "Hospitals"],
    demographics: {
      averageAge: 32,
      medianIncome: 75000,
      population: 25000,
    },
  }

  const sampleDocuments = [
    { name: "Property Deed", type: "Legal", size: "2.4 MB", date: "2024-01-15" },
    { name: "Inspection Report", type: "Inspection", size: "1.8 MB", date: "2024-01-10" },
    { name: "Floor Plans", type: "Plans", size: "3.2 MB", date: "2024-01-05" },
  ]

  const samplePriceHistory = [
    { date: "2024-01", price: 720000 },
    { date: "2024-02", price: 735000 },
    { date: "2024-03", price: 750000 },
  ]

  const sampleSchools = [
    { name: "Lincoln Elementary", rating: 9, distance: "0.3 miles", type: "Elementary" },
    { name: "Central High School", rating: 8, distance: "0.8 miles", type: "High School" },
  ]

  const sampleComparableProperties = [
    { ...sampleProperty, id: "2", price: 720000, title: "Modern City Apartment" },
    { ...sampleProperty, id: "3", price: 780000, title: "Penthouse Suite" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <PropertyHero />
      <PropertySearch />
      <PropertyStats />
      <FeaturedProperties />

      <div className="container mx-auto px-4 py-12 space-y-12">
        <PropertyBreadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Properties", href: "/properties" },
            { label: "Downtown District", href: "/properties/downtown" },
            { label: "Luxury Downtown Condo" },
          ]}
        />

        <PropertyListingStatus status="Active" daysOnMarket={15} views={234} saves={18} lastUpdated="2024-01-20" />

        <PropertyGallery images={sampleImages} propertyTitle="Luxury Downtown Condo" />

        <PropertyShare propertyTitle="Luxury Downtown Condo" propertyUrl="https://example.com/property/1" />

        <PropertyCard property={sampleProperty} />

        <PropertyDetails property={sampleProperty} />

        <PropertyTimeline events={sampleTimeline} />

        <PropertyAmenities amenities={sampleAmenities} />

        <PropertyFloorPlan
          floorPlans={[
            { name: "Ground Floor", image: "/placeholder.svg?height=400&width=600" },
            { name: "Second Floor", image: "/placeholder.svg?height=400&width=600" },
          ]}
        />

        <PropertyEnergyRating rating="A+" score={92} annualCost={1200} co2Emissions={2.1} />

        <PropertyNeighborhood neighborhood={sampleNeighborhood} />

        <PropertySchools schools={sampleSchools} />

        <PropertyFinancing propertyPrice={750000} />

        <MortgageCalculator />

        <PropertyInvestmentAnalysis propertyPrice={750000} monthlyRent={3500} expenses={800} appreciation={3.5} />

        <PropertyPriceHistory history={samplePriceHistory} />

        <PropertyTrends
          area="Downtown District"
          averagePrice={725000}
          priceChange={2.5}
          inventory={45}
          daysOnMarket={28}
        />

        <PropertyValuation
          estimatedValue={750000}
          confidence="High"
          priceRange={{ min: 720000, max: 780000 }}
          lastUpdated="2024-01-20"
        />

        <PropertyMarketComparison comparables={sampleComparableProperties} />

        <PropertyComparison properties={sampleComparableProperties} />

        <PropertySimilar properties={sampleComparableProperties} />

        <PropertyInspectionReport
          inspectionDate="2024-01-10"
          inspector="ABC Home Inspections"
          overallCondition="Excellent"
          issues={[
            { category: "Electrical", severity: "Minor", description: "Outlet cover loose in kitchen" },
            { category: "Plumbing", severity: "None", description: "All systems functioning properly" },
          ]}
        />

        <PropertyDocuments documents={sampleDocuments} />

        <PropertyVirtualStaging
          beforeImage="/placeholder.svg?height=400&width=600"
          afterImage="/placeholder.svg?height=400&width=600"
        />

        <PropertyTour tourType="3D Virtual Tour" duration="15 minutes" tourUrl="#" />

        <PropertyReviews
          reviews={[
            { author: "John D.", rating: 5, comment: "Amazing property with great views!", date: "2024-01-15" },
            { author: "Sarah M.", rating: 4, comment: "Love the location and amenities.", date: "2024-01-10" },
          ]}
        />

        <PropertyHistory
          events={[
            { date: "2024-01-15", event: "Listed for sale", price: 750000 },
            { date: "2023-12-01", event: "Renovations completed", price: null },
            { date: "2020-03-15", event: "Previous sale", price: 650000 },
          ]}
        />

        <PropertySaved isSaved={false} onToggleSave={() => {}} propertyId="1" />

        <PropertyAlert propertyId="1" isActive={false} onToggleAlert={() => {}} />

        <SearchFilters
          onFilterChange={() => {}}
          filters={{
            priceRange: [0, 1000000],
            bedrooms: 0,
            bathrooms: 0,
            propertyType: "all",
            location: "",
          }}
        />

        <PropertyWalkthroughScheduler
          propertyId="1"
          agentName="Sarah Johnson"
          availableSlots={["2024-01-25 10:00 AM", "2024-01-25 2:00 PM", "2024-01-26 11:00 AM"]}
        />

        <PropertyContactForm
          propertyTitle="Luxury Downtown Condo"
          agentName="Sarah Johnson"
          agentPhone="(555) 123-4567"
          agentEmail="sarah@realestate.com"
        />

        <PropertyCTA
          title="Ready to Make an Offer?"
          description="Contact our agent today to schedule a viewing or submit an offer."
          primaryAction="Schedule Viewing"
          secondaryAction="Make Offer"
        />
      </div>

      <PropertyCategories />

      <AgentCard
        agent={{
          name: "Sarah Johnson",
          title: "Senior Real Estate Agent",
          phone: "(555) 123-4567",
          email: "sarah@realestate.com",
          image: "/placeholder.svg?height=100&width=100",
          rating: 4.9,
          reviews: 127,
          specialties: ["Luxury Homes", "Condos", "Investment Properties"],
        }}
      />

      <AgentProfile
        agent={{
          name: "Sarah Johnson",
          title: "Senior Real Estate Agent",
          phone: "(555) 123-4567",
          email: "sarah@realestate.com",
          image: "/placeholder.svg?height=200&width=200",
          bio: "With over 10 years of experience in luxury real estate, Sarah has helped hundreds of clients find their dream homes.",
          specialties: ["Luxury Homes", "Condos", "Investment Properties"],
          certifications: ["CRS", "ABR", "SRS"],
          languages: ["English", "Spanish"],
          socialMedia: {
            linkedin: "#",
            facebook: "#",
            instagram: "#",
          },
        }}
      />

      <AgentShowcase />
      <PropertyMap />
      <TestimonialSection />
      <NewsletterSignup />
      <PropertyFooter />
    </div>
  )
}
