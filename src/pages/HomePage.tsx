import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Stethoscope, Shield, Heart, Clock, Award, PawPrint, ArrowRight, Sparkles } from "lucide-react";
import { useRef } from "react";

const stats = [
  { icon: Award, value: "10+", label: "Years Experience" },
  { icon: Stethoscope, value: "5000+", label: "Animals Treated" },
  { icon: Shield, value: "15+", label: "Specialties" },
  { icon: Heart, value: "100%", label: "Dedication" },
];

const highlights = [
  { icon: Stethoscope, title: "Surgery", desc: "Advanced surgical procedures for all animals with cutting-edge techniques" },
  { icon: Shield, title: "Prevention", desc: "Vaccination and disease prevention programs tailored for your pets" },
  { icon: Heart, title: "Treatment", desc: "Comprehensive treatment plans with compassionate recovery care" },
  { icon: Clock, title: "Emergency", desc: "Round-the-clock emergency veterinary services when you need them" },
];

const testimonialPreview = [
  { name: "Jean Pierre", text: "Dr. MANIRAGUHA saved my dog's life with emergency surgery." },
  { name: "Marie Claire", text: "The best veterinarian in Kigali. Excellent preventive care." },
  { name: "Emmanuel", text: "Professional, caring, and highly skilled. Highly recommended!" },
];

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <>
      {/* Hero */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden noise">
        {/* Animated bg elements */}
        <div className="absolute inset-0 gradient-dark" />
        <div className="absolute top-20 right-[-10%] w-[700px] h-[700px] rounded-full bg-primary/5 blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-20 left-[-5%] w-[400px] h-[400px] rounded-full bg-primary/3 blur-[100px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(hsl(166, 72%, 40%, 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(166, 72%, 40%, 0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />

        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-3 mb-8"
              >
                <div className="h-px w-12 bg-primary/60" />
                <span className="text-sm font-medium text-primary tracking-[0.2em] uppercase font-sans">
                  Veterinary Excellence
                </span>
              </motion.div>

              <h1 className="font-serif text-5xl sm:text-6xl md:text-8xl font-bold leading-[0.9] mb-8 tracking-tight">
                Dr. MANIRAGUHA
                <br />
                <span className="text-gradient glow-text">Daniel</span>
              </h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed font-light"
              >
                Passionate veterinarian dedicated to the health and well-being of your animals.
                Expert in surgery, disease prevention, and compassionate treatment.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="flex flex-wrap gap-4"
              >
                <Link to="/appointments">
                  <Button size="lg" className="gradient-primary font-semibold text-base px-8 glow group">
                    Book Appointment
                    <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/services">
                  <Button size="lg" variant="outline" className="font-semibold text-base px-8 border-primary/20 hover:bg-primary/5 hover:border-primary/40">
                    View Services
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Floating decorative element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2"
          >
            <div className="relative">
              <div className="w-72 h-72 rounded-full border border-primary/10 animate-float flex items-center justify-center">
                <div className="w-56 h-56 rounded-full border border-primary/15 animate-float-delayed flex items-center justify-center">
                  <div className="w-40 h-40 rounded-full bg-primary/5 flex items-center justify-center glow">
                    <PawPrint className="h-16 w-16 text-primary/40" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-muted-foreground tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-px h-8 bg-gradient-to-b from-primary/60 to-transparent"
          />
        </motion.div>
      </section>

      {/* Stats */}
      <section className="relative border-y border-border/50 glass-strong">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="inline-flex rounded-2xl bg-primary/5 p-4 mb-4 group-hover:bg-primary/10 transition-colors">
                  <s.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="font-serif text-4xl md:text-5xl font-bold text-gradient mb-1">{s.value}</div>
                <div className="text-sm text-muted-foreground font-medium">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-32 relative noise">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/3 blur-[150px]" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-12 bg-primary/40" />
              <Sparkles className="h-4 w-4 text-primary" />
              <div className="h-px w-12 bg-primary/40" />
            </div>
            <h2 className="font-serif text-4xl md:text-6xl font-bold mb-5">
              What I <span className="text-gradient">Do</span>
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto text-lg font-light">
              Comprehensive veterinary care for your beloved animals
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {highlights.map((h, i) => (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group relative rounded-2xl border border-border/50 bg-card/50 p-7 hover:border-primary/30 transition-all duration-500 hover:bg-card/80 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="mb-5 inline-flex rounded-xl bg-primary/10 p-4 group-hover:bg-primary/15 transition-colors">
                    <h.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold mb-3">{h.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{h.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-24 border-t border-border/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-start md:items-end justify-between mb-14 gap-6"
          >
            <div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-3">
                Client <span className="text-gradient">Stories</span>
              </h2>
              <p className="text-muted-foreground text-lg font-light">What people say about our care</p>
            </div>
            <Link to="/testimonials">
              <Button variant="outline" className="border-primary/20 hover:bg-primary/5 group">
                View All <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-5">
            {testimonialPreview.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-border/50 bg-card/30 p-7 glass"
              >
                <p className="text-muted-foreground leading-relaxed mb-5 font-light">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-semibold text-sm">{t.name[0]}</span>
                  </div>
                  <span className="font-semibold text-sm">{t.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden noise">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-4xl md:text-6xl font-bold mb-6">
              Ready to give your pet the <span className="text-gradient">best care</span>?
            </h2>
            <p className="text-muted-foreground text-lg max-w-md mx-auto mb-10 font-light">
              Schedule an appointment today and experience exceptional veterinary care.
            </p>
            <Link to="/appointments">
              <Button size="lg" className="gradient-primary font-semibold text-base px-10 py-6 glow group">
                Get Started
                <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
