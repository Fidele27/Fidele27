import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

const categories = ["All", "Surgery", "Treatment", "Prevention", "Animals"];

const galleryItems = [
  { id: 1, category: "Surgery", title: "Surgical Procedure", color: "from-primary/20 to-primary/5" },
  { id: 2, category: "Animals", title: "Domestic Animals Care", color: "from-primary/15 to-primary/5" },
  { id: 3, category: "Treatment", title: "Treatment Process", color: "from-primary/20 to-primary/10" },
  { id: 4, category: "Prevention", title: "Vaccination Program", color: "from-primary/10 to-primary/5" },
  { id: 5, category: "Surgery", title: "Orthopedic Surgery", color: "from-primary/15 to-primary/5" },
  { id: 6, category: "Animals", title: "Animal Recovery", color: "from-primary/20 to-primary/10" },
  { id: 7, category: "Treatment", title: "Medicine & Equipment", color: "from-primary/10 to-primary/5" },
  { id: 8, category: "Prevention", title: "Health Screening", color: "from-primary/15 to-primary/5" },
];

export default function GalleryPage() {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = filter === "All" ? galleryItems : galleryItems.filter((g) => g.category === filter);

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl mb-12">
          <span className="text-sm font-medium text-primary tracking-widest uppercase">Portfolio</span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mt-4 mb-6">
            Gallery & <span className="text-gradient">Portfolio</span>
          </h1>
          <p className="text-muted-foreground text-lg">
            A showcase of our work in surgery, treatment, prevention, and animal care.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-all",
                filter === c ? "gradient-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:text-foreground"
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
                  "cursor-pointer rounded-xl aspect-square bg-gradient-to-br flex items-end p-4 border border-border hover:border-primary/40 transition-all",
                  item.color
                )}
              >
                <div>
                  <span className="text-xs text-primary font-medium">{item.category}</span>
                  <h3 className="font-serif font-semibold">{item.title}</h3>
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
              className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 backdrop-blur-md"
              onClick={() => setLightbox(null)}
            >
              <button className="absolute top-6 right-6 text-foreground"><X className="h-6 w-6" /></button>
              <div className="w-full max-w-2xl aspect-video rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-border flex items-center justify-center">
                <p className="text-muted-foreground">Image placeholder</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
