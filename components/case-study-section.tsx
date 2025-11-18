import { AlertCircle, CheckCircle, Lightbulb } from "lucide-react";
import { cn } from "@/lib/utils";

interface CaseStudySectionProps {
  type: "problem" | "solution" | "results";
  content: string;
  className?: string;
}

const sectionConfig = {
  problem: {
    icon: AlertCircle,
    title: "The Problem",
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/20",
  },
  solution: {
    icon: Lightbulb,
    title: "The Solution",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
  },
  results: {
    icon: CheckCircle,
    title: "The Results",
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/20",
  },
};

export function CaseStudySection({
  type,
  content,
  className,
}: CaseStudySectionProps) {
  const config = sectionConfig[type];
  const Icon = config.icon;

  return (
    <div
      className={cn(
        "rounded-lg border p-6 my-6",
        config.bgColor,
        config.borderColor,
        className
      )}
    >
      <div className="flex items-center gap-2 mb-4">
        <Icon className={cn("h-5 w-5", config.color)} />
        <h3 className={cn("text-xl font-bold", config.color)}>{config.title}</h3>
      </div>
      <p className="text-foreground leading-relaxed">{content}</p>
    </div>
  );
}
