"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import {
  Home,
  FolderKanban,
  Mail,
  User,
  Calendar,
  Sun,
  Moon,
  Laptop,
  Github,
  Linkedin,
} from "lucide-react";
import { projects } from "@/lib/data";

export function CommandPalette() {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();
  const { setTheme } = useTheme();

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = React.useCallback((command: () => void) => {
    setOpen(false);
    command();
  }, []);

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>

        <CommandGroup heading="Navigation">
          <CommandItem
            onSelect={() => runCommand(() => router.push("/"))}
          >
            <Home className="mr-2 h-4 w-4" />
            Home
          </CommandItem>
          <CommandItem
            onSelect={() => runCommand(() => router.push("/projects"))}
          >
            <FolderKanban className="mr-2 h-4 w-4" />
            Projects
          </CommandItem>
          <CommandItem
            onSelect={() => runCommand(() => router.push("/about"))}
          >
            <User className="mr-2 h-4 w-4" />
            About
          </CommandItem>
          <CommandItem
            onSelect={() => runCommand(() => router.push("/now"))}
          >
            <Calendar className="mr-2 h-4 w-4" />
            Now
          </CommandItem>
          <CommandItem
            onSelect={() => runCommand(() => router.push("/contact"))}
          >
            <Mail className="mr-2 h-4 w-4" />
            Contact
          </CommandItem>
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="Projects">
          {projects.map((project) => (
            <CommandItem
              key={project.slug}
              onSelect={() =>
                runCommand(() => router.push(`/projects/${project.slug}`))
              }
            >
              <FolderKanban className="mr-2 h-4 w-4" />
              {project.title}
            </CommandItem>
          ))}
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="Theme">
          <CommandItem onSelect={() => runCommand(() => setTheme("light"))}>
            <Sun className="mr-2 h-4 w-4" />
            Light
          </CommandItem>
          <CommandItem onSelect={() => runCommand(() => setTheme("dark"))}>
            <Moon className="mr-2 h-4 w-4" />
            Dark
          </CommandItem>
          <CommandItem onSelect={() => runCommand(() => setTheme("system"))}>
            <Laptop className="mr-2 h-4 w-4" />
            System
          </CommandItem>
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="Social">
          <CommandItem
            onSelect={() =>
              runCommand(() =>
                window.open("https://github.com/BT-Matshazi", "_blank")
              )
            }
          >
            <Github className="mr-2 h-4 w-4" />
            GitHub
          </CommandItem>
          <CommandItem
            onSelect={() =>
              runCommand(() =>
                window.open(
                  "https://www.linkedin.com/in/bongani-matshazi-8ba97a2a4/",
                  "_blank"
                )
              )
            }
          >
            <Linkedin className="mr-2 h-4 w-4" />
            LinkedIn
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
