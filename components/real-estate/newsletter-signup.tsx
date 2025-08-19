import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Bell, TrendingUp } from "lucide-react"

export function NewsletterSignup() {
  return (
    <section className="py-16 bg-primary/5">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto overflow-hidden">
          <CardContent className="p-0">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 lg:p-12">
                <div className="flex items-center gap-2 mb-4">
                  <Mail className="h-6 w-6 text-primary" />
                  <span className="text-sm font-semibold text-primary uppercase tracking-wide">Newsletter</span>
                </div>

                <h3 className="text-3xl font-bold text-foreground mb-4">Stay Updated on Market Trends</h3>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Get the latest property listings, market insights, and exclusive deals delivered straight to your
                  inbox. Join over 25,000 subscribers who trust our weekly updates.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 mb-6">
                  <Input type="email" placeholder="Enter your email address" className="flex-1" />
                  <Button className="sm:w-auto">
                    <Bell className="mr-2 h-4 w-4" />
                    Subscribe
                  </Button>
                </div>

                <div className="flex items-center text-sm text-muted-foreground">
                  <TrendingUp className="h-4 w-4 mr-2" />
                  <span>Weekly market reports • New listings • Price alerts</span>
                </div>
              </div>

              <div className="relative bg-gradient-to-br from-primary/10 to-accent/10 p-8 lg:p-12 flex items-center justify-center">
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-20"
                  style={{
                    backgroundImage: "url('/placeholder.svg?height=400&width=400')",
                  }}
                />
                <div className="relative z-10 text-center">
                  <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="h-12 w-12 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-foreground mb-2">25,000+</div>
                  <div className="text-muted-foreground">Active Subscribers</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
