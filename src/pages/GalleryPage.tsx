import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

const categories = ["All", "Surgery", "Treatment", "Prevention", "Animals"];

const galleryItems = [
  { id: 1, category: "Surgery", title: "Surgical Procedure", color: "from-primary/20 via-primary/5 to-card" },
  { id: 2, category: "Animals", title: "Domestic Animals Care", color: "from-primary/15 via-primary/3 to-card" },
  { id: 3, category: "Treatment", title: "Treatment Process", color: "from-primary/20 via-primary/8 to-card" },
  { id: 4, category: "Prevention", title: "Vaccination Program", color: "from-primary/10 via-primary/3 to-card" },
  { id: 5, category: "Surgery", title: "Orthopedic Surgery", color: "from-primary/15 via-primary/5 to-card" },
  { id: 6, category: "Animals", title: "Animal Recovery", color: "from-primary/20 via-primary/8 to-card" },
  { id: 7, category: "Treatment", title: "Medicine & Equipment", color: "from-primary/10 via-primary/3 to-card" },
  { id: 8, category: "Prevention", title: "Health Screening", color: "from-primary/15 via-primary/5 to-card" },
];

export default function GalleryPage() {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = filter === "All" ? galleryItems : galleryItems.filter((g) => g.category === filter);

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl mb-14">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-primary/60" />
            <span className="text-sm font-medium text-primary tracking-[0.2em] uppercase">Portfolio</span>
          </div>
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 leading-[0.95]">
            Gallery & <span className="text-gradient">Portfolio</span>
          </h1>
          <p className="text-muted-foreground text-lg font-light">
            A showcase of our work in surgery, treatment, prevention, and animal care.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={cn(
                "rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300",
                filter === c ? "gradient-primary text-primary-foreground glow" : "bg-muted/50 text-muted-foreground hover:text-foreground hover:bg-muted"
              )}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <AnimatePresence>
            {filtered.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                onClick={() => setLightbox(item.id)}
                className={cn(
                  "cursor-pointer rounded-2xl aspect-square bg-gradient-to-br flex items-end p-5 border border-border/50 hover:border-primary/30 transition-all duration-500 group overflow-hidden relative",
                  item.color
                )}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <span className="text-xs text-primary font-medium tracking-wider uppercase">{item.category}</span>
                  <h3 className="font-serif font-semibold text-lg">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {lightbox && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-xl"
              onClick={() => setLightbox(null)}
            >
              <button className="absolute top-6 right-6 text-foreground hover:text-primary transition-colors"><X className="h-6 w-6" /></button>
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="w-full max-w-2xl aspect-video rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-border/50 flex items-center justify-center"
              >
                <p className="text-muted-foreground">Image placeholder</p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
