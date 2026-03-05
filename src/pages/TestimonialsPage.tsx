import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  { name: "Jean Pierre", rating: 5, text: "Dr. MANIRAGUHA saved my dog's life with emergency surgery. Incredible skill and compassion." },
  { name: "Marie Claire", rating: 5, text: "The best veterinarian in Kigali. My cat receives excellent preventive care here." },
  { name: "Emmanuel", rating: 5, text: "Professional, caring, and highly skilled. I trust Dr. Daniel with all my livestock." },
  { name: "Diane", rating: 4, text: "Great experience with vaccination services. The clinic is clean and well-equipped." },
  { name: "Patrick", rating: 5, text: "Dr. Daniel's expertise in animal surgery is unmatched. Highly recommended!" },
  { name: "Aline", rating: 5, text: "Wonderful care for my pets. Always takes the time to explain everything clearly." },
];

export default function TestimonialsPage() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-primary/60" />
            <span className="text-sm font-medium text-primary tracking-[0.2em] uppercase">Testimonials</span>
          </div>
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 leading-[0.95]">
            What Clients <span className="text-gradient">Say</span>
          </h1>
          <p className="text-muted-foreground text-lg font-light">
            Hear from our satisfied clients about their experience with Dr. MANIRAGUHA Daniel.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group rounded-2xl border border-border/50 bg-card/30 glass p-7 hover:border-primary/30 transition-all duration-500"
            >
              <Quote className="h-8 w-8 text-primary/20 mb-5" />
              <p className="text-muted-foreground leading-relaxed mb-6 font-light">"{t.text}"</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-semibold text-sm">{t.name[0]}</span>
                  </div>
                  <span className="font-semibold text-sm">{t.name}</span>
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, si) => (
                    <Star key={si} className={`h-3.5 w-3.5 ${si < t.rating ? "text-primary fill-primary" : "text-muted"}`} />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
