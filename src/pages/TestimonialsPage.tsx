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
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl mb-16">
          <span className="text-sm font-medium text-primary tracking-widest uppercase">Testimonials</span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mt-4 mb-6">
            What Clients <span className="text-gradient">Say</span>
          </h1>
          <p className="text-muted-foreground text-lg">
            Hear from our satisfied clients about their experience with Dr. MANIRAGUHA Daniel.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="rounded-xl border border-border bg-card p-6"
            >
              <Quote className="h-6 w-6 text-primary/30 mb-4" />
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">"{t.text}"</p>
              <div className="flex items-center justify-between">
                <span className="font-semibold text-sm">{t.name}</span>
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, si) => (
                    <Star key={si} className={`h-3 w-3 ${si < t.rating ? "text-primary fill-primary" : "text-muted"}`} />
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
