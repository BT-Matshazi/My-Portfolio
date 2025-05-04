import { cn } from "@/lib/utils"
import ScrollAnimation from "@/components/scroll-animation";

interface TimelineItemProps {
  date: string
  title: string
  company: string
  description: string
  index: number
  className?: string
}

export function TimelineItem({
  date,
  title,
  company,
  description,
  index,
  className,
}: TimelineItemProps) {
  return (
    <ScrollAnimation
      direction="up"
      delay={0.1 * index}
      className={cn("relative pl-8 pb-12 border-l last:border-l-0", className)}
    >
      <span className="absolute top-0 left-0 flex items-center justify-center w-6 h-6 -translate-x-1/2 rounded-full bg-primary text-primary-foreground text-xs">
        {index + 1}
      </span>
      <div className="space-y-2">
        <span className="text-sm font-medium text-muted-foreground">{date}</span>
        <h3 className="text-xl font-bold">{title}</h3>
        <h4 className="text-base font-semibold text-muted-foreground">{company}</h4>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </ScrollAnimation>
  )
}

interface TimelineProps {
  items: Array<{
    date: string
    title: string
    company: string
    description: string
  }>
  className?: string
}

export function Timeline({ items, className }: TimelineProps) {
  return (
    <div className={cn("space-y-6", className)}>
      {items.map((item, index) => (
        <TimelineItem
          key={index}
          index={index}
          date={item.date}
          title={item.title}
          company={item.company}
          description={item.description}
        />
      ))}
    </div>
  )
}