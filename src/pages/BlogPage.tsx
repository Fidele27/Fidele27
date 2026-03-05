import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";

const posts = [
  { id: 1, title: "Essential Vaccinations for Your Pets", excerpt: "Learn about the critical vaccines every pet owner should know about.", category: "Prevention", date: "Feb 10, 2026" },
  { id: 2, title: "Signs Your Animal Needs Emergency Care", excerpt: "Recognizing warning signs that require immediate veterinary attention.", category: "Emergency", date: "Feb 5, 2026" },
  { id: 3, title: "Post-Surgery Care for Animals", excerpt: "A comprehensive guide to helping your animal recover after surgery.", category: "Surgery", date: "Jan 28, 2026" },
  { id: 4, title: "Nutrition Tips for Healthy Animals", excerpt: "Proper nutrition is the foundation of animal health and longevity.", category: "Wellness", date: "Jan 20, 2026" },
  { id: 5, title: "Common Diseases in Domestic Animals", excerpt: "Understanding and preventing the most common ailments in pets and livestock.", category: "Treatment", date: "Jan 15, 2026" },
  { id: 6, title: "The Importance of Regular Checkups", excerpt: "Why routine veterinary visits are essential for your animal's health.", category: "Prevention", date: "Jan 10, 2026" },
];

export default function BlogPage() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-primary/60" />
            <span className="text-sm font-medium text-primary tracking-[0.2em] uppercase">Blog</span>
          </div>
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 leading-[0.95]">
            Articles & <span className="text-gradient">Tips</span>
          </h1>
          <p className="text-muted-foreground text-lg font-light">
            Veterinary insights, tips, and news to help you care for your animals.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative rounded-2xl border border-border/50 bg-card/50 p-7 hover:border-primary/30 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-5 text-xs text-muted-foreground">
                  <Calendar className="h-3 w-3" />
                  <span>{post.date}</span>
                  <span className="ml-auto rounded-full bg-primary/10 px-3 py-1 text-primary font-medium">
                    {post.category}
                  </span>
                </div>
                <h3 className="font-serif text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-5 leading-relaxed font-light">{post.excerpt}</p>
                <span className="inline-flex items-center gap-1 text-sm text-primary font-medium group-hover:gap-2 transition-all">
                  Read More <ArrowRight className="h-3 w-3" />
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
