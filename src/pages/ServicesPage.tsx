import { motion } from "framer-motion";
import { Stethoscope, Shield, Syringe, HeartPulse, Microscope, Pill, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const services = [
  { icon: Stethoscope, title: "General Checkup", desc: "Comprehensive health examination for all animals to detect early signs of illness.", color: "from-primary/10 to-transparent" },
  { icon: Shield, title: "Disease Prevention", desc: "Vaccination programs and preventive care to keep your animals healthy and protected.", color: "from-primary/8 to-transparent" },
  { icon: Syringe, title: "Surgery", desc: "Advanced surgical procedures including soft tissue, orthopedic, and emergency surgery.", color: "from-primary/12 to-transparent" },
  { icon: HeartPulse, title: "Emergency Care", desc: "24/7 emergency veterinary services for critical and life-threatening situations.", color: "from-primary/10 to-transparent" },
  { icon: Microscope, title: "Laboratory & Diagnosis", desc: "In-house laboratory testing for accurate and quick diagnosis of conditions.", color: "from-primary/8 to-transparent" },
  { icon: Pill, title: "Treatment & Recovery", desc: "Post-operative care, medication management, and rehabilitation programs.", color: "from-primary/12 to-transparent" },
];

export default function ServicesPage() {
  return (
    <div className="py-16 noise">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-primary/60" />
            <span className="text-sm font-medium text-primary tracking-[0.2em] uppercase">Our Services</span>
          </div>
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 leading-[0.95]">
            Veterinary <span className="text-gradient">Services</span>
          </h1>
          <p className="text-muted-foreground text-lg font-light leading-relaxed">
            Providing comprehensive veterinary care with expertise in surgery, disease prevention, and animal wellness.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative rounded-2xl border border-border/50 bg-card/50 p-8 hover:border-primary/30 transition-all duration-500 overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${s.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="relative z-10">
                <div className="mb-6 inline-flex rounded-xl bg-primary/10 p-4 group-hover:bg-primary/15 transition-colors">
                  <s.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-3">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-light">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <Link to="/appointments">
            <Button size="lg" className="gradient-primary font-semibold px-10 glow group">
              Book a Consultation <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
