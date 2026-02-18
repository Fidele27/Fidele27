import { motion } from "framer-motion";
import { Stethoscope, Shield, Syringe, HeartPulse, Microscope, Pill } from "lucide-react";

const services = [
  { icon: Stethoscope, title: "General Checkup", desc: "Comprehensive health examination for all animals to detect early signs of illness." },
  { icon: Shield, title: "Disease Prevention", desc: "Vaccination programs and preventive care to keep your animals healthy and protected." },
  { icon: Syringe, title: "Surgery", desc: "Advanced surgical procedures including soft tissue, orthopedic, and emergency surgery." },
  { icon: HeartPulse, title: "Emergency Care", desc: "24/7 emergency veterinary services for critical and life-threatening situations." },
  { icon: Microscope, title: "Laboratory & Diagnosis", desc: "In-house laboratory testing for accurate and quick diagnosis of conditions." },
  { icon: Pill, title: "Treatment & Recovery", desc: "Post-operative care, medication management, and rehabilitation programs." },
];

export default function ServicesPage() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl mb-16">
          <span className="text-sm font-medium text-primary tracking-widest uppercase">Our Services</span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mt-4 mb-6">
            Veterinary <span className="text-gradient">Services</span>
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Providing comprehensive veterinary care with expertise in surgery, disease prevention, and animal wellness.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group rounded-xl border border-border bg-card p-8 hover:border-primary/50 transition-all duration-300"
            >
              <div className="mb-5 inline-flex rounded-lg bg-primary/10 p-4">
                <s.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
