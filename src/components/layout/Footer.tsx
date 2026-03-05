import { Link } from "react-router-dom";
import { PawPrint, Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border/50 bg-card/30 noise">
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-5">
              <PawPrint className="h-6 w-6 text-primary" />
              <span className="font-serif text-lg font-bold">Dr. MANIRAGUHA</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed font-light">
              Dedicated veterinarian providing compassionate care for all animals. Surgery, prevention, and treatment excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-semibold mb-5 text-sm tracking-widest uppercase text-primary">Quick Links</h4>
            <div className="flex flex-col gap-3">
              {[
                { to: "/about", label: "About Me" },
                { to: "/services", label: "Services" },
                { to: "/gallery", label: "Gallery" },
                { to: "/blog", label: "Blog" },
                { to: "/appointments", label: "Book Appointment" },
              ].map((l) => (
                <Link key={l.to} to={l.to} className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 group font-light">
                  {l.label}
                  <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif font-semibold mb-5 text-sm tracking-widest uppercase text-primary">Services</h4>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground font-light">
              <span>Surgery</span>
              <span>Disease Prevention</span>
              <span>Treatment & Recovery</span>
              <span>Vaccination</span>
              <span>Emergency Care</span>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif font-semibold mb-5 text-sm tracking-widest uppercase text-primary">Contact</h4>
            <div className="flex flex-col gap-4 text-sm text-muted-foreground font-light">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <span>+250 XXX XXX XXX</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <span>contact@drmaniraguha.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                <span>Kigali, Rwanda</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-border/50 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground font-light">
          <span>© {new Date().getFullYear()} Dr. MANIRAGUHA Daniel. All rights reserved.</span>
          <span className="text-xs text-muted-foreground/50">Kigali, Rwanda</span>
        </div>
      </div>
    </footer>
  );
}
