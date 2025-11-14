import { cn } from "@/lib/utils"
import ScrollAnimation from "./scroll-animation"

interface SectionHeadingProps {
  title: string
  subtitle?: string
  className?: string
}

export function SectionHeading({ title, subtitle, className }: SectionHeadingProps) {
  return (
    <div className={cn("space-y-4 text-center", className)}>
      <ScrollAnimation direction="up">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
          {title}
        </h2>
      </ScrollAnimation>
      {subtitle && (
        <ScrollAnimation direction="up" delay={0.1}>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </ScrollAnimation>
      )}
    </div>
  )
}