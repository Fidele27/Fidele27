import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl mb-16">
          <span className="text-sm font-medium text-primary tracking-widest uppercase">Contact</span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mt-4 mb-6">
            Get In <span className="text-gradient">Touch</span>
          </h1>
          <p className="text-muted-foreground text-lg">
            Have questions or need to schedule a visit? Reach out to us.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <Input placeholder="Your Name" className="bg-card border-border" />
                <Input type="email" placeholder="Your Email" className="bg-card border-border" />
              </div>
              <Input placeholder="Subject" className="bg-card border-border" />
              <Textarea placeholder="Your Message" rows={5} className="bg-card border-border" />
              <Button className="gradient-primary font-semibold px-8">
                <Send className="h-4 w-4 mr-2" /> Send Message
              </Button>
            </form>
          </motion.div>

          {/* Info */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="space-y-8">
            {[
              { icon: Phone, label: "Phone", value: "+250 XXX XXX XXX" },
              { icon: Mail, label: "Email", value: "contact@drmaniraguha.com" },
              { icon: MapPin, label: "Location", value: "Kigali, Rwanda" },
            ].map((c) => (
              <div key={c.label} className="flex items-start gap-4">
                <div className="rounded-lg bg-primary/10 p-3">
                  <c.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{c.label}</h3>
                  <p className="text-sm text-muted-foreground">{c.value}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
