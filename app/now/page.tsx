import { BookOpen, Code2, Lightbulb, Rocket, Target } from "lucide-react";
import ScrollAnimation from "@/components/scroll-animation";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export const metadata = {
  title: "Now | Bekithemba Matshazi",
  description: "What I'm currently working on, learning, and focused on right now.",
};

export default function NowPage() {
  const lastUpdated = "January 2025";

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <ScrollAnimation direction="up">
        <SectionHeading
          title="What I'm Doing Now"
          subtitle={`Last updated: ${lastUpdated}`}
          className="mb-12"
        />
      </ScrollAnimation>

      <div className="prose dark:prose-invert max-w-none space-y-8">
        <ScrollAnimation direction="up" delay={0.1}>
          <div className="bg-card border rounded-lg p-8">
            <div className="flex items-center gap-3 mb-4">
              <Rocket className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold m-0">Current Projects</h2>
            </div>
            <div className="space-y-4 mt-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Portfolio Enhancement
                </h3>
                <p className="text-muted-foreground">
                  Continuously improving this portfolio with new features like command palette,
                  advanced animations, and better project showcases. The goal is to create
                  a truly standout developer portfolio.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  <Link href="/projects/bookit" className="hover:text-primary transition-colors">
                    Bookit Platform
                  </Link>
                </h3>
                <p className="text-muted-foreground">
                  Enhancing the booking platform with new features including real-time
                  availability updates, advanced search filters, and improved mobile experience.
                </p>
              </div>
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation direction="up" delay={0.2}>
          <div className="bg-card border rounded-lg p-8">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold m-0">Currently Learning</h2>
            </div>
            <div className="space-y-4 mt-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-lg font-semibold">Rust Programming</h3>
                  <Badge>In Progress</Badge>
                </div>
                <p className="text-muted-foreground">
                  Diving deep into Rust to build high-performance systems and understand
                  low-level programming concepts. Working through "The Rust Programming Language"
                  book and building CLI tools.
                </p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-lg font-semibold">System Design</h3>
                  <Badge>In Progress</Badge>
                </div>
                <p className="text-muted-foreground">
                  Studying distributed systems, scalability patterns, and architectural decisions
                  for building large-scale applications. Currently exploring microservices and event-driven
                  architecture.
                </p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-lg font-semibold">Three.js & WebGL</h3>
                  <Badge variant="secondary">Next Up</Badge>
                </div>
                <p className="text-muted-foreground">
                  Planning to explore 3D graphics on the web to create more interactive
                  and visually engaging user experiences.
                </p>
              </div>
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation direction="up" delay={0.3}>
          <div className="bg-card border rounded-lg p-8">
            <div className="flex items-center gap-3 mb-4">
              <Target className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold m-0">Current Focus</h2>
            </div>
            <ul className="space-y-3 mt-4">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">→</span>
                <span className="text-muted-foreground">
                  Building more full-stack projects to showcase diverse technical skills
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">→</span>
                <span className="text-muted-foreground">
                  Contributing to open-source projects and learning from the community
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">→</span>
                <span className="text-muted-foreground">
                  Improving my technical writing by documenting what I learn
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">→</span>
                <span className="text-muted-foreground">
                  Exploring freelance opportunities and client projects
                </span>
              </li>
            </ul>
          </div>
        </ScrollAnimation>

        <ScrollAnimation direction="up" delay={0.4}>
          <div className="bg-card border rounded-lg p-8">
            <div className="flex items-center gap-3 mb-4">
              <Lightbulb className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold m-0">Reading & Resources</h2>
            </div>
            <ul className="space-y-2 mt-4 text-muted-foreground">
              <li>• "Designing Data-Intensive Applications" by Martin Kleppmann</li>
              <li>• "The Rust Programming Language" (The Book)</li>
              <li>• Josh W. Comeau's blog on advanced React patterns</li>
              <li>• Kent C. Dodds' testing courses and articles</li>
              <li>• Various tech blogs and documentation</li>
            </ul>
          </div>
        </ScrollAnimation>

        <ScrollAnimation direction="up" delay={0.5}>
          <div className="text-center py-8 text-sm text-muted-foreground border-t">
            <p>
              This is a{" "}
              <a
                href="https://nownownow.com/about"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors"
              >
                now page
              </a>
              , inspired by Derek Sivers.
            </p>
            <p className="mt-2">
              It's a snapshot of what I'm focused on at this point in my life.
            </p>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
}
