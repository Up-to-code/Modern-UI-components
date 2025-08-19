import { Button } from "@/components/ui/button"
import { Home, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

const footerLinks = {
  Buy: ["Homes for Sale", "Open Houses", "New Listings", "Recently Sold"],
  Sell: ["Sell Your Home", "Home Valuation", "Seller Resources", "Market Analysis"],
  Rent: ["Rental Listings", "Rental Tools", "Tenant Resources", "Property Management"],
  Company: ["About Us", "Our Team", "Careers", "Press"],
}

export function PropertyFooter() {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Home className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold text-foreground">EstateHub</span>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Your trusted partner in real estate. We help you find, buy, sell, and rent properties with confidence and
              ease.
            </p>

            <div className="space-y-3">
              <div className="flex items-center text-muted-foreground">
                <Phone className="h-4 w-4 mr-3" />
                <span>(555) 123-ESTATE</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <Mail className="h-4 w-4 mr-3" />
                <span>info@estatehub.com</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <MapPin className="h-4 w-4 mr-3" />
                <span>123 Real Estate Ave, City, ST 12345</span>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-foreground mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-muted-foreground text-sm">
              © 2024 EstateHub. All rights reserved. | Privacy Policy | Terms of Service
            </div>

            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">Follow us:</span>
              <div className="flex gap-2">
                <Button size="icon" variant="ghost" className="h-8 w-8">
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="ghost" className="h-8 w-8">
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="ghost" className="h-8 w-8">
                  <Instagram className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="ghost" className="h-8 w-8">
                  <Linkedin className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
