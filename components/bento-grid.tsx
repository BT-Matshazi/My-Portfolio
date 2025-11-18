"use client";

import { motion } from "framer-motion";
import { Calendar, Code2, MapPin, TrendingUp, Zap } from "lucide-react";
import { GitHubStats } from "@/components/github-stats";
import { NewsletterSignup } from "@/components/newsletter-signup";
import Link from "next/link";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export function BentoGrid() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[minmax(150px,auto)]"
    >
      {/* Tech Stack */}
      <motion.div
        variants={itemVariants}
        className="md:col-span-1 lg:col-span-2 bg-gradient-to-br from-primary/10 to-primary/5 border rounded-lg p-6 hover:border-primary/50 transition-colors"
      >
        <div className="flex items-center gap-2 mb-4">
          <Code2 className="h-5 w-5 text-primary" />
          <h3 className="font-semibold">Tech Stack</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {["Next.js", "React", "TypeScript", "Go", "PostgreSQL", "AWS", "Tailwind CSS"].map(
            (tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-background/80 border text-sm rounded-full"
              >
                {tech}
              </span>
            )
          )}
        </div>
      </motion.div>

      {/* Quick Facts */}
      <motion.div
        variants={itemVariants}
        className="bg-card border rounded-lg p-6 hover:border-foreground/20 transition-colors"
      >
        <div className="flex items-center gap-2 mb-4">
          <Zap className="h-5 w-5 text-primary" />
          <h3 className="font-semibold">Quick Facts</h3>
        </div>
        <div className="space-y-3 text-sm">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-muted-foreground" />
            <span className="text-muted-foreground">Johannesburg, SA</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <span className="text-muted-foreground">2+ years experience</span>
          </div>
          <div className="flex items-center gap-2">
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
            <span className="text-muted-foreground">Open to freelance</span>
          </div>
        </div>
      </motion.div>

      {/* Current Status */}
      <motion.div
        variants={itemVariants}
        className="bg-card border rounded-lg p-6 hover:border-foreground/20 transition-colors"
      >
        <div className="flex items-center gap-2 mb-4">
          <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse" />
          <h3 className="font-semibold">Status</h3>
        </div>
        <p className="text-sm text-muted-foreground mb-3">
          Available for new projects
        </p>
        <Link
          href="/contact"
          className="text-sm text-primary hover:underline inline-flex items-center gap-1"
        >
          Get in touch →
        </Link>
      </motion.div>

      {/* GitHub Stats */}
      <motion.div
        variants={itemVariants}
        className="md:col-span-2 lg:col-span-2 lg:row-span-2"
      >
        <GitHubStats />
      </motion.div>

      {/* What I'm Learning */}
      <motion.div
        variants={itemVariants}
        className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border rounded-lg p-6 hover:border-purple-500/30 transition-colors"
      >
        <h3 className="font-semibold mb-3">Currently Learning</h3>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>• Rust Programming</li>
          <li>• System Design</li>
          <li>• Three.js & WebGL</li>
        </ul>
        <Link
          href="/now"
          className="text-sm text-primary hover:underline inline-flex items-center gap-1 mt-3"
        >
          See what I'm up to →
        </Link>
      </motion.div>

      {/* Newsletter */}
      <motion.div
        variants={itemVariants}
        className="bg-card border rounded-lg p-6 hover:border-foreground/20 transition-colors"
      >
        <h3 className="font-semibold mb-3">Stay Updated</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Get notified about new projects and articles.
        </p>
        <NewsletterSignup variant="compact" />
      </motion.div>
    </motion.div>
  );
}
