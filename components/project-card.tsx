import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, Github, Globe, Calendar } from "lucide-react";
import ScrollAnimation from "@/components/scroll-animation";

interface ProjectCardProps {
  index: number;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  demoUrl?: string;
  repoUrl?: string;
  slug: string;
  date?: string; // Optional date field for showing when the project was created
}

export function ProjectCard({
  index,
  title,
  description,
  imageUrl,
  tags,
  demoUrl,
  repoUrl,
  slug,
  date,
}: ProjectCardProps) {
  return (
    <ScrollAnimation direction="up" delay={0.05 * index}>
      <Card className="overflow-hidden transition-all py-0 duration-300 gap-2 hover:shadow-xl group border-0 bg-card/60 backdrop-blur-sm hover:bg-card">
        <CardHeader className="p-0 relative">
          <div className="aspect-video relative overflow-hidden rounded-t-lg">
            <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/60 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <div className="absolute top-3 left-3 z-20 flex flex-wrap gap-1.5">
            {tags.slice(0, 3).map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="bg-black/70 text-white backdrop-blur-md hover:bg-black/80 transition-colors"
              >
                {tag}
              </Badge>
            ))}
            {tags.length > 3 && (
              <Badge
                variant="secondary"
                className="bg-black/70 text-white backdrop-blur-md"
              >
                +{tags.length - 3}
              </Badge>
            )}
          </div>
          {date && (
            <div className="absolute bottom-3 right-3 z-20">
              <Badge
                variant="outline"
                className="bg-black/70 text-white backdrop-blur-md border-none"
              >
                <Calendar className="h-3 w-3 mr-1" />
                {date}
              </Badge>
            </div>
          )}
        </CardHeader>
        <CardContent className="p-6">
          <CardTitle className="mb-3 text-xl font-bold group-hover:text-primary transition-colors">
            {title}
          </CardTitle>
          <p className="text-muted-foreground line-clamp-3 text-sm">
            {description}
          </p>
        </CardContent>
        <CardFooter className="flex items-center justify-between p-6 pt-0 border-t border-border/40">
          <Button
            variant="default"
            size="sm"
            className="rounded-full shadow-sm transition-all duration-300 group-hover:shadow-md"
            asChild
          >
            <Link href={`/projects/${slug}`} className="gap-1">
              View Details
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
          <div className="flex gap-2">
            {repoUrl && (
              <Button
                size="icon"
                variant="secondary"
                className="rounded-full h-9 w-9 transition-transform hover:scale-110"
                asChild
              >
                <Link href={repoUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                  <span className="sr-only">GitHub Repository</span>
                </Link>
              </Button>
            )}
            {demoUrl && (
              <Button
                size="icon"
                variant="secondary"
                className="rounded-full h-9 w-9 transition-transform hover:scale-110"
                asChild
              >
                <Link href={demoUrl} target="_blank" rel="noopener noreferrer">
                  <Globe className="h-4 w-4" />
                  <span className="sr-only">Live Demo</span>
                </Link>
              </Button>
            )}
          </div>
        </CardFooter>
      </Card>
    </ScrollAnimation>
  );
}
