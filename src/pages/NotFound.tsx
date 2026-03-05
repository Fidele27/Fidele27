import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, PawPrint } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center noise">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <div className="inline-flex rounded-full bg-primary/5 p-6 mb-8 glow">
          <PawPrint className="h-12 w-12 text-primary/40" />
        </div>
        <h1 className="font-serif text-8xl font-bold text-gradient mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-8 font-light">This page wandered off</p>
        <Link to="/">
          <Button variant="outline" className="border-primary/20 hover:bg-primary/5 group">
            <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" /> Back Home
          </Button>
        </Link>
      </motion.div>
    </div>
  );
}
