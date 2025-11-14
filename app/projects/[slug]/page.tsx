import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Github, Globe, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/lib/data";
import { ProjectCard } from "@/components/project-card";
import ScrollAnimation from "@/components/scroll-animation";
import { Separator } from "@/components/ui/separator";
import { MarkdownToJSX } from "@/components/markdown-to-jsx";
import { TableOfContents } from "@/components/table-of-contents";
import { ShareButtons } from "@/components/share-buttons";
import { calculateReadingTime, extractTableOfContents } from "@/lib/utils";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.title,
    description: project.description,
    keywords: [...project.tags, "web development", "portfolio", "project"],
    openGraph: {
      title: `${project.title} | Bekithemba Matshazi`,
      description: project.description,
      type: "article",
      url: `https://bekithembamatshazi.com/projects/${project.slug}`,
      images: [
        {
          url: project.imageUrl,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Bekithemba Matshazi`,
      description: project.description,
      images: [project.imageUrl],
    },
    alternates: {
      canonical: `https://bekithembamatshazi.com/projects/${project.slug}`,
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  // Calculate reading time and extract TOC
  const readingTime = calculateReadingTime(project.content);
  const tableOfContents = extractTableOfContents(project.content);

  // Find related projects (excluding the current one)
  const relatedProjects = projects
    .filter(
      (p) =>
        p.id !== project.id && p.tags.some((tag) => project.tags.includes(tag))
    )
    .slice(0, 3);

  return (
    <div className="container mx-auto px-4 py-12">
      <Link
        href="/projects"
        className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Projects
      </Link>

      <ScrollAnimation direction="up">
        <div className="relative aspect-video w-full overflow-hidden rounded-lg mb-8">
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>
      </ScrollAnimation>

      <ScrollAnimation direction="up" delay={0.1}>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>

        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>

        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{readingTime} min read</span>
          </div>
          <ShareButtons
            title={project.title}
            description={project.description}
          />
        </div>

        <p className="text-xl text-muted-foreground mb-8">
          {project.description}
        </p>

        <div className="flex gap-4 mb-12">
          {project.demoUrl && (
            <Button asChild>
              <Link
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Globe className="mr-2 h-4 w-4" />
                Live Demo
              </Link>
            </Button>
          )}

          {project.repoUrl && (
            <Button variant="outline" asChild>
              <Link
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-4 w-4" />
                View Code
              </Link>
            </Button>
          )}
        </div>
      </ScrollAnimation>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_250px] gap-8">
        <ScrollAnimation direction="up" delay={0.2}>
          <div className="prose dark:prose-invert max-w-none mb-16">
            <MarkdownToJSX content={project.content} />
          </div>
        </ScrollAnimation>

        {tableOfContents.length > 0 && (
          <ScrollAnimation direction="up" delay={0.3}>
            <aside className="hidden lg:block">
              <TableOfContents items={tableOfContents} />
            </aside>
          </ScrollAnimation>
        )}
      </div>

      {relatedProjects.length > 0 && (
        <>
          <Separator className="my-16" />

          <SectionHeading
            title="Related Projects"
            subtitle="You might also be interested in these similar projects"
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProjects.map((relatedProject, index) => (
              <ProjectCard
                key={relatedProject.id}
                index={index}
                title={relatedProject.title}
                description={relatedProject.description}
                imageUrl={relatedProject.imageUrl}
                tags={relatedProject.tags}
                demoUrl={relatedProject.demoUrl}
                repoUrl={relatedProject.repoUrl}
                slug={relatedProject.slug}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
