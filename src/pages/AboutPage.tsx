import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Clock, Award, Heart, Star } from "lucide-react";

const skills = [
  { name: "Surgery", level: 95 },
  { name: "Disease Prevention", level: 90 },
  { name: "Diagnosis", level: 92 },
  { name: "Animal Care", level: 98 },
  { name: "Emergency Medicine", level: 88 },
  { name: "Pharmacology", level: 85 },
];

const timeline = [
  { year: "2014", title: "Doctor of Veterinary Medicine", desc: "Graduated with honors", icon: GraduationCap },
  { year: "2015", title: "Residency in Animal Surgery", desc: "Specialized surgical training", icon: Briefcase },
  { year: "2017", title: "Veterinary Clinic Practice", desc: "Joined leading clinic in Kigali", icon: Heart },
  { year: "2020", title: "Senior Veterinarian", desc: "Advanced practice & mentorship", icon: Award },
];

const hours = [
  { day: "Monday – Friday", time: "8:00 AM – 6:00 PM" },
  { day: "Saturday", time: "9:00 AM – 2:00 PM" },
  { day: "Sunday", time: "Emergency Only" },
];

export default function AboutPage() {
  return (
    <div className="py-16">
      {/* Header */}
      <section className="container mx-auto px-4 mb-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
          <span className="text-sm font-medium text-primary tracking-widest uppercase">About Me</span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mt-4 mb-6">
            Dr. MANIRAGUHA <span className="text-gradient">Daniel</span>
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            A dedicated veterinarian with over 10 years of experience in animal surgery, disease prevention, and comprehensive treatment. Passionate about improving animal health and welfare in Rwanda and beyond.
          </p>
        </motion.div>
      </section>

      {/* Timeline */}
      <section className="container mx-auto px-4 mb-20">
        <h2 className="font-serif text-3xl font-bold mb-10">
          Professional <span className="text-gradient">Journey</span>
        </h2>
        <div className="space-y-8">
          {timeline.map((t, i) => (
            <motion.div
              key={t.year}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex gap-6 items-start"
            >
              <div className="flex-shrink-0 flex flex-col items-center">
                <div className="rounded-full bg-primary/10 p-3"><t.icon className="h-5 w-5 text-primary" /></div>
                {i < timeline.length - 1 && <div className="w-px h-12 bg-border mt-2" />}
              </div>
              <div>
                <span className="text-xs text-primary font-semibold">{t.year}</span>
                <h3 className="font-serif text-lg font-semibold">{t.title}</h3>
                <p className="text-sm text-muted-foreground">{t.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="container mx-auto px-4 mb-20">
        <h2 className="font-serif text-3xl font-bold mb-10">
          Skills & <span className="text-gradient">Expertise</span>
        </h2>
        <div className="grid sm:grid-cols-2 gap-6 max-w-2xl">
          {skills.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-between text-sm mb-1">
                <span className="font-medium">{s.name}</span>
                <span className="text-primary">{s.level}%</span>
              </div>
              <div className="h-2 rounded-full bg-muted overflow-hidden">
                <motion.div
                  className="h-full rounded-full gradient-primary"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${s.level}%` }}
                  transition={{ duration: 1, delay: i * 0.1 }}
                  viewport={{ once: true }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Working Hours */}
      <section className="container mx-auto px-4 mb-20">
        <h2 className="font-serif text-3xl font-bold mb-10">
          Working <span className="text-gradient">Hours</span>
        </h2>
        <div className="max-w-md space-y-4">
          {hours.map((h) => (
            <div key={h.day} className="flex justify-between items-center border-b border-border pb-3">
              <span className="font-medium flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" /> {h.day}
              </span>
              <span className="text-muted-foreground text-sm">{h.time}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
