import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, PawPrint } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/blog", label: "Blog" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
      scrolled ? "glass-strong shadow-lg shadow-background/50" : "bg-transparent"
    )}>
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2 group">
          <PawPrint className="h-7 w-7 text-primary group-hover:scale-110 transition-transform" />
          <span className="font-serif text-xl font-bold tracking-tight">
            Dr. <span className="text-gradient">MANIRAGUHA</span>
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={cn(
                "relative rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-primary",
                pathname === l.to ? "text-primary" : "text-muted-foreground"
              )}
            >
              {l.label}
              {pathname === l.to && (
                <motion.div
                  layoutId="nav-indicator"
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full bg-primary"
                />
              )}
            </Link>
          ))}
          <Link to="/appointments">
            <Button size="sm" className="ml-4 gradient-primary font-semibold glow">
              Book Appointment
            </Button>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button className="lg:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden glass-strong lg:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-primary",
                    pathname === l.to ? "text-primary" : "text-muted-foreground"
                  )}
                >
                  {l.label}
                </Link>
              ))}
              <Link to="/appointments" onClick={() => setOpen(false)}>
                <Button size="sm" className="mt-2 w-full gradient-primary font-semibold">
                  Book Appointment
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
