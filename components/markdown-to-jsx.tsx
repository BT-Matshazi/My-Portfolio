// components/markdown-to-jsx.tsx
import React, { JSX } from "react";

interface MarkdownToJSXProps {
  content: string;
}

export const MarkdownToJSX: React.FC<MarkdownToJSXProps> = ({ content }) => {
  // Split content by lines and process
  const lines = content.trim().split("\n");
  const elements: JSX.Element[] = [];

  let currentListItems: string[] = [];
  let inList = false;

  lines.forEach((line, index) => {
    // Handle headings
    if (line.startsWith("# ")) {
      elements.push(
        <h1 key={index} className="text-3xl font-bold text-foreground mb-4">
          {line.substring(2)}
        </h1>
      );
    } else if (line.startsWith("## ")) {
      elements.push(
        <h2
          key={index}
          className="text-2xl font-semibold text-foreground mt-8 mb-4"
        >
          {line.substring(3)}
        </h2>
      );
    }
    // Handle list items
    else if (line.startsWith("- ")) {
      if (!inList) {
        inList = true;
        currentListItems = [];
      }
      currentListItems.push(line.substring(2));

      // If next line doesn't start with '- ' or this is the last line, render the list
      if (index === lines.length - 1 || !lines[index + 1].startsWith("- ")) {
        elements.push(
          <ul key={`list-${index}`} className="list-disc pl-6 space-y-2 mb-4">
            {currentListItems.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        );
        inList = false;
      }
    }
    // Handle paragraphs (non-empty lines that aren't headings or list items)
    else if (line.trim() !== "") {
      elements.push(
        <p key={index} className="mb-4">
          {line}
        </p>
      );
    }
  });

  return <div className="space-y-2">{elements}</div>;
};
