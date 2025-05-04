import { cn } from "@/lib/utils"
import ScrollAnimation from "./scroll-animation"

interface SectionHeadingProps {
  title: string
  subtitle?: string
  className?: string
}

export function SectionHeading({ title, subtitle, className }: SectionHeadingProps) {
  return (
    <div className={cn("space-y-2 text-center", className)}>
      <ScrollAnimation direction="up">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      </ScrollAnimation>
      {subtitle && (
        <ScrollAnimation direction="up" delay={0.1}>
          <p className="text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
        </ScrollAnimation>
      )}
    </div>
  )
}