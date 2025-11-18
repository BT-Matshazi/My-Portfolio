import { Mail, MapPin, Phone, Github, Linkedin } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { NewsletterSignup } from "@/components/newsletter-signup";
import ScrollAnimation from "@/components/scroll-animation";
import { SectionHeading } from "@/components/section-heading";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export const metadata = {
  title: "Contact | Bekithemba Matshazi",
  description: "Get in touch for project inquiries, collaborations, or just to say hello.",
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <ScrollAnimation direction="up">
        <SectionHeading
          title="Get in Touch"
          subtitle="Have a project in mind? Let's work together to bring your ideas to life."
          className="mb-12"
        />
      </ScrollAnimation>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Contact Form */}
        <ScrollAnimation direction="up" delay={0.1} className="lg:col-span-2">
          <div className="bg-card border rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
            <ContactForm />
          </div>
        </ScrollAnimation>

        {/* Contact Info & Newsletter */}
        <div className="space-y-8">
          <ScrollAnimation direction="up" delay={0.2}>
            <div className="bg-card border rounded-lg p-6 space-y-6">
              <h3 className="text-xl font-bold">Contact Information</h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">Email</p>
                    <a
                      href="mailto:bonganithembamatshazi@gmail.com"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      bonganithembamatshazi@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">Location</p>
                    <p className="text-sm text-muted-foreground">
                      Johannesburg, South Africa
                    </p>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-3">
                <h4 className="text-sm font-medium">Connect on Social</h4>
                <div className="flex gap-3">
                  <Link
                    href="https://github.com/BT-Matshazi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Github className="h-4 w-4" />
                    GitHub
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/bongani-matshazi-8ba97a2a4/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </Link>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation direction="up" delay={0.3}>
            <div className="bg-card border rounded-lg p-6">
              <NewsletterSignup />
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
}
