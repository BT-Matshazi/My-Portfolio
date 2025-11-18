"use client";

import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";
import type { ProjectMetrics as Metrics } from "@/lib/data";

interface ProjectMetricsProps {
  metrics: Metrics[];
}

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

export function ProjectMetrics({ metrics }: ProjectMetricsProps) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8"
    >
      {metrics.map((metric, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          className="bg-card border rounded-lg p-6 text-center hover:border-primary/50 transition-colors"
        >
          <div className="flex items-center justify-center gap-1 mb-2">
            <TrendingUp className="h-4 w-4 text-primary" />
          </div>
          <p className="text-3xl font-bold mb-1">{metric.value}</p>
          <p className="text-sm font-medium text-foreground mb-1">
            {metric.label}
          </p>
          {metric.description && (
            <p className="text-xs text-muted-foreground">{metric.description}</p>
          )}
        </motion.div>
      ))}
    </motion.div>
  );
}
