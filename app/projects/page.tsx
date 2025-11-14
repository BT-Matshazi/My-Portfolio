import { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading"
import { ProjectCard } from "@/components/project-card"
import { projects } from "@/lib/data"

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore my portfolio of web development projects showcasing expertise in TypeScript, React, Next.js, Go, and modern web technologies. Each project represents unique challenges and innovative solutions.",
  openGraph: {
    title: "Projects | Bekithemba Matshazi",
    description:
      "Explore my portfolio of web development projects showcasing expertise in TypeScript, React, Next.js, Go, and modern web technologies.",
    type: "website",
    url: "https://bekithembamatshazi.com/projects",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Bekithemba Matshazi",
    description:
      "Explore my portfolio of web development projects showcasing expertise in TypeScript, React, Next.js, Go, and modern web technologies.",
  },
  alternates: {
    canonical: "https://bekithembamatshazi.com/projects",
  },
};

export default function ProjectsPage() {
  return (
    <div className="container  mx-auto px-4  py-12">
      <SectionHeading
        title="My Projects"
        subtitle="A collection of my recent work. Each project represents a unique challenge and solution."
        className="mb-16"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            index={index}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            tags={project.tags}
            demoUrl={project.demoUrl}
            repoUrl={project.repoUrl}
            slug={project.slug}
          />
        ))}
      </div>
    </div>
  );
}