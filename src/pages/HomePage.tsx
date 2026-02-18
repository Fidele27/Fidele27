import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Stethoscope, Shield, Heart, Clock, Award, PawPrint } from "lucide-react";

const stats = [
  { icon: Award, value: "10+", label: "Years Experience" },
  { icon: Stethoscope, value: "5000+", label: "Animals Treated" },
  { icon: Shield, value: "15+", label: "Specialties" },
  { icon: Heart, value: "100%", label: "Dedication" },
];

const highlights = [
  { icon: Stethoscope, title: "Surgery", desc: "Advanced surgical procedures for all animals" },
  { icon: Shield, title: "Prevention", desc: "Vaccination and disease prevention programs" },
  { icon: Heart, title: "Treatment", desc: "Comprehensive treatment and recovery care" },
  { icon: Clock, title: "Emergency", desc: "24/7 emergency veterinary services" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 gradient-dark" />
        <div className="absolute top-20 right-0 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex items-center gap-2 mb-6">
                <PawPrint className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium text-primary tracking-widest uppercase">
                  Veterinary Excellence
                </span>
              </div>
              <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight mb-6">
                Dr. MANIRAGUHA{" "}
                <span className="text-gradient">Daniel</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8 leading-relaxed">
                Passionate veterinarian dedicated to the health and well-being of your animals. 
                Expert in surgery, disease prevention, and compassionate treatment.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/appointments">
                  <Button size="lg" className="gradient-primary font-semibold text-base px-8">
                    Book Appointment
                  </Button>
                </Link>
                <Link to="/services">
                  <Button size="lg" variant="outline" className="font-semibold text-base px-8 border-primary/30 hover:bg-primary/10">
                    View Services
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border bg-card/50">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <s.icon className="h-6 w-6 text-primary mx-auto mb-2" />
                <div className="font-serif text-3xl font-bold text-gradient">{s.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl font-bold mb-4">
              What I <span className="text-gradient">Do</span>
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              Comprehensive veterinary care for your beloved animals
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((h, i) => (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group rounded-xl border border-border bg-card p-6 hover:border-primary/50 transition-all duration-300"
              >
                <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                  <h.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-serif text-lg font-semibold mb-2">{h.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{h.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
