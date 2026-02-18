import { motion } from "framer-motion";
import { CalendarDays, Clock, PawPrint } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function AppointmentsPage() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl mb-16">
          <span className="text-sm font-medium text-primary tracking-widest uppercase">Appointments</span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mt-4 mb-6">
            Book an <span className="text-gradient">Appointment</span>
          </h1>
          <p className="text-muted-foreground text-lg">
            Schedule a visit for your animal. Fill out the form and we'll confirm your appointment.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="max-w-xl">
          <form className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-4">
              <Input placeholder="Your Name" className="bg-card border-border" />
              <Input type="email" placeholder="Your Email" className="bg-card border-border" />
            </div>
            <Input type="tel" placeholder="Phone Number" className="bg-card border-border" />

            <Select>
              <SelectTrigger className="bg-card border-border">
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
              <SelectTrigger className="bg-card border-border">
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

            <div className="grid sm:grid-cols-2 gap-4">
              <Input type="date" className="bg-card border-border" />
              <Input type="time" className="bg-card border-border" />
            </div>

            <Textarea placeholder="Additional notes about your animal's condition" rows={4} className="bg-card border-border" />

            <Button className="gradient-primary font-semibold px-8 w-full sm:w-auto">
              <CalendarDays className="h-4 w-4 mr-2" /> Request Appointment
            </Button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
