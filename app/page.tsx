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
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-background to-transparent z-0" />
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center opacity-10 dark:opacity-5" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <ScrollAnimation direction="up">
              <Badge variant="outline" className="mb-4">
                Full-Stack Developer
              </Badge>
            </ScrollAnimation>

            <ScrollAnimation direction="up" delay={0.1}>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                Hi, I'm Bekithemba Matshazi
              </h1>
            </ScrollAnimation>

            <ScrollAnimation direction="up" delay={0.2}>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                I build exceptional and accessible digital experiences for the
                web. Specializing in{" "}
                <span className="text-foreground font-medium">TypeScript</span>,{" "}
                <span className="text-foreground font-medium">React</span>,{" "}
                <span className="text-foreground font-medium">Next.js</span>,{" "}
                <span className="text-foreground font-medium">Go</span> and{" "}
                <span className="text-foreground font-medium">Express.js</span>.
              </p>
            </ScrollAnimation>

            <ScrollAnimation direction="up" delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <Link href="/projects">
                    View My Work
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Link
                  href="/cv/cv.pdf"
                  className="h-10  px-6 has-[>svg]:px-4 border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive
"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Link>
              </div>
            </ScrollAnimation>

            <ScrollAnimation direction="up" delay={0.4}>
              <div className="flex gap-4 mt-8">
                <Button variant="ghost" size="icon" asChild>
                  <Link
                    href="https://github.com/BT-Matshazi"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <Link
                    href="https://www.linkedin.com/in/bekithemba-matshazi-419386153/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <Link href="mailto:bekithembamatshazi@gamil.com">
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Email</span>
                  </Link>
                </Button>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 ">
          <SectionHeading
            title="Featured Projects"
            subtitle="Here are some of my recent projects. Each one was carefully crafted to solve specific problems."
            className="mb-16"
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
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 ">
          <SectionHeading
            title="Experience"
            subtitle="I've had the opportunity to work on diverse projects across various domains."
            className="mb-16"
          />

          <div className="max-w-3xl mx-auto">
            <Timeline items={experiences} />
          </div>
        </div>
      </section>
    </div>
  );
}
