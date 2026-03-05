import { motion } from "framer-motion";
import { CalendarDays, Clock, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const features = [
  { icon: CalendarDays, title: "Flexible Scheduling", desc: "Choose a date and time that works for you" },
  { icon: Clock, title: "Quick Response", desc: "We confirm appointments within 24 hours" },
  { icon: Shield, title: "Expert Care", desc: "10+ years of veterinary experience" },
];

export default function AppointmentsPage() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-primary/60" />
            <span className="text-sm font-medium text-primary tracking-[0.2em] uppercase">Appointments</span>
          </div>
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 leading-[0.95]">
            Book an <span className="text-gradient">Appointment</span>
          </h1>
          <p className="text-muted-foreground text-lg font-light">
            Schedule a visit for your animal. Fill out the form and we'll confirm your appointment.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-16">
          {/* Form */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="lg:col-span-3">
            <form className="space-y-5 rounded-2xl border border-border/50 bg-card/30 glass p-8">
              <div className="grid sm:grid-cols-2 gap-4">
                <Input placeholder="Your Name" className="bg-muted/30 border-border/50 focus:border-primary/40 rounded-xl h-12" />
                <Input type="email" placeholder="Your Email" className="bg-muted/30 border-border/50 focus:border-primary/40 rounded-xl h-12" />
              </div>
              <Input type="tel" placeholder="Phone Number" className="bg-muted/30 border-border/50 focus:border-primary/40 rounded-xl h-12" />

              <div className="grid sm:grid-cols-2 gap-4">
                <Select>
                  <SelectTrigger className="bg-muted/30 border-border/50 rounded-xl h-12">
                    <SelectValue placeholder="Animal Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="dog">Dog</SelectItem>
                    <SelectItem value="cat">Cat</SelectItem>
                    <SelectItem value="cow">Cow</SelectItem>
                    <SelectItem value="goat">Goat</SelectItem>
                    <SelectItem value="chicken">Chicken</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger className="bg-muted/30 border-border/50 rounded-xl h-12">
                    <SelectValue placeholder="Reason for Visit" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="checkup">General Checkup</SelectItem>
                    <SelectItem value="vaccination">Vaccination</SelectItem>
                    <SelectItem value="surgery">Surgery Consultation</SelectItem>
                    <SelectItem value="emergency">Emergency</SelectItem>
                    <SelectItem value="treatment">Treatment / Follow-up</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <Input type="date" className="bg-muted/30 border-border/50 rounded-xl h-12" />
                <Input type="time" className="bg-muted/30 border-border/50 rounded-xl h-12" />
              </div>

              <Textarea placeholder="Additional notes about your animal's condition" rows={4} className="bg-muted/30 border-border/50 focus:border-primary/40 rounded-xl" />

              <Button className="gradient-primary font-semibold px-8 h-12 rounded-xl w-full sm:w-auto glow">
                <CalendarDays className="h-4 w-4 mr-2" /> Request Appointment
              </Button>
            </form>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-2 space-y-6"
          >
            {features.map((f, i) => (
              <div key={f.title} className="flex items-start gap-4 group">
                <div className="rounded-xl bg-primary/10 p-3.5 group-hover:bg-primary/15 transition-colors flex-shrink-0">
                  <f.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{f.title}</h3>
                  <p className="text-sm text-muted-foreground font-light">{f.desc}</p>
                </div>
              </div>
            ))}

            <div className="rounded-2xl border border-border/50 bg-card/30 glass p-6 mt-8">
              <h4 className="font-serif font-semibold text-lg mb-3">Working Hours</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between"><span className="text-muted-foreground">Mon – Fri</span><span>8:00 AM – 6:00 PM</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Saturday</span><span>9:00 AM – 2:00 PM</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Sunday</span><span className="text-primary">Emergency Only</span></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
