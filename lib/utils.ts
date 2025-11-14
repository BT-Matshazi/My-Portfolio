import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Calculate reading time for markdown content
 * Assumes average reading speed of 200 words per minute
 */
export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const readingTime = Math.ceil(words / wordsPerMinute);
  return readingTime;
}

export interface TocItem {
  id: string;
  text: string;
  level: number;
}

/**
 * Extract table of contents from markdown content
 * Returns headings with their text, level, and generated IDs
 */
export function extractTableOfContents(content: string): TocItem[] {
  const lines = content.split('\n');
  const toc: TocItem[] = [];

  lines.forEach((line) => {
    const trimmedLine = line.trim();

    // Match headings (##, ###, ####)
    if (trimmedLine.startsWith('##')) {
      let level = 0;
      let text = trimmedLine;

      if (trimmedLine.startsWith('#### ')) {
        level = 4;
        text = trimmedLine.substring(5);
      } else if (trimmedLine.startsWith('### ')) {
        level = 3;
        text = trimmedLine.substring(4);
      } else if (trimmedLine.startsWith('## ')) {
        level = 2;
        text = trimmedLine.substring(3);
      }

      if (level > 0) {
        // Generate an ID from the heading text
        const id = text
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/^-|-$/g, '');

        toc.push({ id, text, level });
      }
    }
  });

  return toc;
}
