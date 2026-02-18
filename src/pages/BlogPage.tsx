import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

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
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl mb-16">
          <span className="text-sm font-medium text-primary tracking-widest uppercase">Blog</span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mt-4 mb-6">
            Articles & <span className="text-gradient">Tips</span>
          </h1>
          <p className="text-muted-foreground text-lg">
            Veterinary insights, tips, and news to help you care for your animals.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group rounded-xl border border-border bg-card p-6 hover:border-primary/50 transition-all"
            >
              <div className="flex items-center gap-2 mb-4 text-xs text-muted-foreground">
                <Calendar className="h-3 w-3" />
                <span>{post.date}</span>
                <span className="ml-auto rounded-full bg-primary/10 px-2 py-0.5 text-primary font-medium">
                  {post.category}
                </span>
              </div>
              <h3 className="font-serif text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{post.excerpt}</p>
              <span className="inline-flex items-center gap-1 text-sm text-primary font-medium">
                Read More <ArrowRight className="h-3 w-3" />
              </span>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
