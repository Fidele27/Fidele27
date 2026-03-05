import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-primary/60" />
            <span className="text-sm font-medium text-primary tracking-[0.2em] uppercase">Contact</span>
          </div>
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 leading-[0.95]">
            Get In <span className="text-gradient">Touch</span>
          </h1>
          <p className="text-muted-foreground text-lg font-light">
            Have questions or need to schedule a visit? Reach out to us.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Form */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <Input placeholder="Your Name" className="bg-card/50 border-border/50 focus:border-primary/40 rounded-xl h-12" />
                <Input type="email" placeholder="Your Email" className="bg-card/50 border-border/50 focus:border-primary/40 rounded-xl h-12" />
              </div>
              <Input placeholder="Subject" className="bg-card/50 border-border/50 focus:border-primary/40 rounded-xl h-12" />
              <Textarea placeholder="Your Message" rows={6} className="bg-card/50 border-border/50 focus:border-primary/40 rounded-xl" />
              <Button className="gradient-primary font-semibold px-8 h-12 rounded-xl glow group">
                <Send className="h-4 w-4 mr-2" /> Send Message
              </Button>
            </form>
          </motion.div>

          {/* Info */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="space-y-8">
            {[
              { icon: Phone, label: "Phone", value: "+250 XXX XXX XXX" },
              { icon: Mail, label: "Email", value: "contact@drmaniraguha.com" },
              { icon: MapPin, label: "Location", value: "Kigali, Rwanda" },
            ].map((c) => (
              <div key={c.label} className="flex items-start gap-5 group">
                <div className="rounded-xl bg-primary/10 p-4 group-hover:bg-primary/15 transition-colors">
                  <c.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{c.label}</h3>
                  <p className="text-sm text-muted-foreground font-light">{c.value}</p>
                </div>
              </div>
            ))}

            {/* Map placeholder */}
            <div className="rounded-2xl border border-border/50 bg-card/30 h-48 flex items-center justify-center glass mt-8">
              <p className="text-muted-foreground text-sm">Map • Kigali, Rwanda</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
