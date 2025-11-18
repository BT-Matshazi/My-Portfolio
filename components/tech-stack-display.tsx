import { Badge } from "@/components/ui/badge";
import { Code2, Database, Layers, Server } from "lucide-react";

interface TechStack {
  frontend?: string[];
  backend?: string[];
  database?: string[];
  infrastructure?: string[];
}

interface TechStackDisplayProps {
  techStack: TechStack;
}

export function TechStackDisplay({ techStack }: TechStackDisplayProps) {
  const sections = [
    {
      title: "Frontend",
      items: techStack.frontend,
      icon: Code2,
      color: "text-blue-500",
    },
    {
      title: "Backend",
      items: techStack.backend,
      icon: Server,
      color: "text-green-500",
    },
    {
      title: "Database",
      items: techStack.database,
      icon: Database,
      color: "text-purple-500",
    },
    {
      title: "Infrastructure",
      items: techStack.infrastructure,
      icon: Layers,
      color: "text-orange-500",
    },
  ].filter((section) => section.items && section.items.length > 0);

  if (sections.length === 0) return null;

  return (
    <div className="my-8 bg-card border rounded-lg p-6">
      <h3 className="text-xl font-bold mb-6">Tech Stack</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sections.map((section) => {
          const Icon = section.icon;
          return (
            <div key={section.title}>
              <div className="flex items-center gap-2 mb-3">
                <Icon className={`h-4 w-4 ${section.color}`} />
                <h4 className="font-semibold text-sm">{section.title}</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {section.items?.map((item) => (
                  <Badge key={item} variant="secondary">
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
