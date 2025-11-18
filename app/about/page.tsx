import Image from "next/image";
import { MapPin, Calendar, Code2, Briefcase, Heart, Coffee } from "lucide-react";
import ScrollAnimation from "@/components/scroll-animation";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export const metadata = {
  title: "About | Bekithemba Matshazi",
  description: "Learn more about me, my skills, interests, and what drives me as a developer.",
};

const skills = {
  "Frontend": ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
  "Backend": ["Go", "Node.js", "PostgreSQL", "REST APIs", "GraphQL"],
  "Tools & Cloud": ["AWS S3", "Docker", "Git", "Vercel", "Linux"],
  "Currently Learning": ["Rust", "Three.js", "Web3", "System Design"],
};

const interests = [
  { icon: Code2, title: "Open Source", description: "Contributing to and learning from the community" },
  { icon: Coffee, title: "Problem Solving", description: "Tackling complex challenges with elegant solutions" },
  { icon: Heart, title: "UI/UX Design", description: "Creating beautiful and intuitive user experiences" },
  { icon: Briefcase, title: "Side Projects", description: "Building tools that solve real-world problems" },
];

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <ScrollAnimation direction="up">
        <SectionHeading
          title="About Me"
          subtitle="Full-Stack Developer passionate about building impactful web applications"
          className="mb-12"
        />
      </ScrollAnimation>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          <ScrollAnimation direction="up" delay={0.1}>
            <div className="prose dark:prose-invert max-w-none">
              <h2>Hey there! 👋</h2>
              <p>
                I'm Bekithemba Matshazi (you can call me Bongani), a Full-Stack Developer based in Johannesburg, South Africa.
                I specialize in building modern web applications with a focus on performance, scalability, and exceptional user experience.
              </p>
              <p>
                My journey into software development started with a curiosity about how things work on the web.
                That curiosity evolved into a passion for creating digital solutions that make a difference.
                I love working across the entire stack - from crafting pixel-perfect interfaces to architecting robust backend systems.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to open source,
                or sharing what I've learned with the developer community. I believe in continuous learning
                and always staying curious about emerging trends in tech.
              </p>
            </div>
          </ScrollAnimation>

          <Separator />

          <ScrollAnimation direction="up" delay={0.2}>
            <div>
              <h3 className="text-2xl font-bold mb-6">What Drives Me</h3>
              <p className="text-muted-foreground mb-6">
                I'm passionate about building products that solve real problems and create value for users.
                My approach combines technical excellence with a deep understanding of user needs.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {interests.map((interest, index) => {
                  const Icon = interest.icon;
                  return (
                    <div
                      key={index}
                      className="flex gap-4 p-4 bg-card border rounded-lg hover:border-foreground/20 transition-colors"
                    >
                      <Icon className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold mb-1">{interest.title}</h4>
                        <p className="text-sm text-muted-foreground">
                          {interest.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </ScrollAnimation>

          <Separator />

          <ScrollAnimation direction="up" delay={0.3}>
            <div>
              <h3 className="text-2xl font-bold mb-6">Skills & Technologies</h3>
              <div className="space-y-6">
                {Object.entries(skills).map(([category, items]) => (
                  <div key={category}>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-3">
                      {category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {items.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-sm">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollAnimation>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <ScrollAnimation direction="up" delay={0.2}>
            <div className="bg-card border rounded-lg p-6 space-y-4">
              <h3 className="text-lg font-bold">Quick Facts</h3>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">Location</p>
                    <p className="text-sm text-muted-foreground">
                      Johannesburg, South Africa (GMT+2)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Calendar className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">Experience</p>
                    <p className="text-sm text-muted-foreground">
                      2+ years in web development
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Briefcase className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">Availability</p>
                    <p className="text-sm text-muted-foreground">
                      Open to freelance projects
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation direction="up" delay={0.3}>
            <div className="bg-card border rounded-lg p-6">
              <h3 className="text-lg font-bold mb-4">Beyond Code</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Learning new programming languages</li>
                <li>• Exploring design patterns & architecture</li>
                <li>• Reading tech blogs & documentation</li>
                <li>• Mentoring aspiring developers</li>
                <li>• Building side projects for fun</li>
              </ul>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
}
