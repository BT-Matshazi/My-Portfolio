import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/section-heading";
import { Timeline } from "@/components/timeline";
import { ProjectCard } from "@/components/project-card";
import { Badge } from "@/components/ui/badge";
import ScrollAnimation from "@/components/scroll-animation";
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  Twitter,
} from "lucide-react";
import { experiences, projects} from "@/lib/data";

export default function Home() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 md:py-40 overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5 z-0" />
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center opacity-[0.03] dark:opacity-[0.02]" />

        {/* Gradient orbs for visual interest */}
        <div className="absolute top-20 -left-20 w-72 h-72 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" />
        <div className="absolute top-40 -right-20 w-72 h-72 bg-accent/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-20 left-1/2 w-72 h-72 bg-secondary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <ScrollAnimation direction="up">
              <Badge variant="outline" className="mb-6 text-sm py-1.5 px-4 backdrop-blur-sm bg-background/50">
                Full-Stack Developer
              </Badge>
            </ScrollAnimation>

            <ScrollAnimation direction="up" delay={0.1}>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
                Hi, I'm Bekithemba Matshazi
              </h1>
            </ScrollAnimation>

            <ScrollAnimation direction="up" delay={0.2}>
              <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-10 leading-relaxed">
                I build exceptional and accessible digital experiences for the
                web. Specializing in{" "}
                <span className="text-foreground font-semibold relative inline-block group">
                  TypeScript
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </span>
                ,{" "}
                <span className="text-foreground font-semibold relative inline-block group">
                  React
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </span>
                ,{" "}
                <span className="text-foreground font-semibold relative inline-block group">
                  Next.js
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </span>
                ,{" "}
                <span className="text-foreground font-semibold relative inline-block group">
                  Go
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </span>{" "}
                and{" "}
                <span className="text-foreground font-semibold relative inline-block group">
                  Express.js
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </span>
                .
              </p>
            </ScrollAnimation>

            <ScrollAnimation direction="up" delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Button asChild size="lg" className="text-base py-6 px-8 shadow-lg hover:shadow-xl transition-all duration-300">
                  <Link href="/projects">
                    View My Work
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-base py-6 px-8 backdrop-blur-sm bg-background/50 hover:bg-background/80 transition-all duration-300">
                  <Link href="/cv/cv.pdf">
                    <Download className="mr-2 h-5 w-5" />
                    Download Resume
                  </Link>
                </Button>
              </div>
            </ScrollAnimation>

            <ScrollAnimation direction="up" delay={0.4}>
              <div className="flex gap-3">
                <Button variant="ghost" size="icon" className="h-12 w-12 rounded-full hover:scale-110 transition-transform duration-300" asChild>
                  <Link
                    href="https://github.com/BT-Matshazi"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                  >
                    <Github className="h-6 w-6" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" className="h-12 w-12 rounded-full hover:scale-110 transition-transform duration-300" asChild>
                  <Link
                    href="https://www.linkedin.com/in/bekithemba-matshazi-419386153/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin className="h-6 w-6" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" className="h-12 w-12 rounded-full hover:scale-110 transition-transform duration-300" asChild>
                  <Link href="mailto:bekithembamatshazi@gamil.com" aria-label="Email Contact">
                    <Mail className="h-6 w-6" />
                    <span className="sr-only">Email</span>
                  </Link>
                </Button>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeading
            title="Featured Projects"
            subtitle="Here are some of my recent projects. Each one was carefully crafted to solve specific problems."
            className="mb-20"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
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

          <div className="flex justify-center mt-12">
            <ScrollAnimation direction="up">
              <Button asChild>
                <Link href="/projects">
                  View All Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-24 md:py-32 relative overflow-hidden bg-muted/30">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeading
            title="Experience"
            subtitle="I've had the opportunity to work on diverse projects across various domains."
            className="mb-20"
          />

          <div className="max-w-3xl mx-auto">
            <Timeline items={experiences} />
          </div>
        </div>
      </section>
    </div>
  );
}
