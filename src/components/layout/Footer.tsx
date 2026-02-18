import { Link } from "react-router-dom";
import { PawPrint, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <PawPrint className="h-6 w-6 text-primary" />
              <span className="font-serif text-lg font-bold">Dr. MANIRAGUHA Daniel</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Dedicated veterinarian providing compassionate care for all animals. Surgery, prevention, and treatment excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-semibold mb-4 text-primary">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {[
                { to: "/about", label: "About Me" },
                { to: "/services", label: "Services" },
                { to: "/gallery", label: "Gallery" },
                { to: "/blog", label: "Blog" },
                { to: "/appointments", label: "Book Appointment" },
              ].map((l) => (
                <Link key={l.to} to={l.to} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif font-semibold mb-4 text-primary">Services</h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <span>Surgery</span>
              <span>Disease Prevention</span>
              <span>Treatment & Recovery</span>
              <span>Vaccination</span>
              <span>Emergency Care</span>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif font-semibold mb-4 text-primary">Contact</h4>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>+250 XXX XXX XXX</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <span>contact@drmaniraguha.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Kigali, Rwanda</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Dr. MANIRAGUHA Daniel. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
