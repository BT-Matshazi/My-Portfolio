// components/markdown-to-jsx.tsx
"use client";

import React, { JSX } from "react";
import Image from "next/image";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

interface MarkdownToJSXProps {
  content: string;
}

export const MarkdownToJSX: React.FC<MarkdownToJSXProps> = ({ content }) => {
  const lines = content.trim().split("\n");
  const elements: JSX.Element[] = [];

  let currentListItems: (string | JSX.Element)[] = [];
  let inList = false;
  let currentCodeBlock = "";
  let codeLanguage = "";
  let inCodeBlock = false;
  let currentBlockquote: string[] = [];
  let inBlockquote = false;
  let currentTable: string[][] = [];
  let tableAlignment: string[] = [];
  let inTable = false;

  const processInlineFormatting = (text: string): JSX.Element | string => {
    // Handle inline code first (before other formatting)
    const inlineCodeRegex = /`([^`]+)`/g;
    const parts: (string | JSX.Element)[] = [];
    let lastIndex = 0;
    let match;

    while ((match = inlineCodeRegex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push(text.substring(lastIndex, match.index));
      }
      parts.push(
        <code
          key={`code-${match.index}`}
          className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono"
        >
          {match[1]}
        </code>
      );
      lastIndex = match.index + match[0].length;
    }

    if (lastIndex < text.length) {
      parts.push(text.substring(lastIndex));
    }

    if (parts.length === 0) {
      parts.push(text);
    }

    // Process other inline formatting on non-code parts
    const processedParts = parts.map((part, idx) => {
      if (typeof part !== "string") return part;

      let processed = part;

      // Bold text **text**
      processed = processed.replace(
        /\*\*(.+?)\*\*/g,
        '<strong class="font-bold">$1</strong>'
      );

      // Italic text *text* or _text_
      processed = processed.replace(
        /\*(.+?)\*/g,
        '<em class="italic">$1</em>'
      );
      processed = processed.replace(
        /_(.+?)_/g,
        '<em class="italic">$1</em>'
      );

      // Links [text](url)
      processed = processed.replace(
        /\[([^\]]+)\]\(([^)]+)\)/g,
        '<a href="$2" class="text-primary hover:underline" target="_blank" rel="noopener noreferrer">$1</a>'
      );

      return (
        <span
          key={`inline-${idx}`}
          dangerouslySetInnerHTML={{ __html: processed }}
        />
      );
    });

    return <>{processedParts}</>;
  };

  const flushTable = (index: number) => {
    if (currentTable.length > 0) {
      const headers = currentTable[0];
      const rows = currentTable.slice(2); // Skip header and separator

      elements.push(
        <div key={`table-${index}`} className="overflow-x-auto mb-6">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="border-b border-border">
                {headers.map((header, i) => (
                  <th
                    key={i}
                    className="px-4 py-2 text-left font-semibold bg-muted"
                  >
                    {processInlineFormatting(header.trim())}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i} className="border-b border-border">
                  {row.map((cell, j) => (
                    <td key={j} className="px-4 py-2">
                      {processInlineFormatting(cell.trim())}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      currentTable = [];
      inTable = false;
    }
  };

  const flushBlockquote = (index: number) => {
    if (currentBlockquote.length > 0) {
      elements.push(
        <blockquote
          key={`blockquote-${index}`}
          className="border-l-4 border-primary pl-4 py-2 my-4 italic text-muted-foreground bg-muted/30"
        >
          {currentBlockquote.map((line, i) => (
            <p key={i}>{processInlineFormatting(line)}</p>
          ))}
        </blockquote>
      );
      currentBlockquote = [];
      inBlockquote = false;
    }
  };

  lines.forEach((line, index) => {
    // Handle code blocks
    if (line.trim().startsWith("```")) {
      if (!inCodeBlock) {
        inCodeBlock = true;
        codeLanguage = line.trim().substring(3).trim() || "text";
        return;
      } else {
        inCodeBlock = false;
        elements.push(
          <div key={`code-${index}`} className="my-4 rounded-lg overflow-hidden">
            <SyntaxHighlighter
              language={codeLanguage}
              style={vscDarkPlus}
              customStyle={{
                margin: 0,
                borderRadius: "0.5rem",
                fontSize: "0.875rem",
              }}
            >
              {currentCodeBlock}
            </SyntaxHighlighter>
          </div>
        );
        currentCodeBlock = "";
        codeLanguage = "";
        return;
      }
    }

    if (inCodeBlock) {
      currentCodeBlock += line + "\n";
      return;
    }

    // Handle blockquotes
    if (line.trim().startsWith("> ")) {
      if (!inBlockquote) {
        flushTable(index);
        inBlockquote = true;
      }
      currentBlockquote.push(line.trim().substring(2));
      return;
    } else if (inBlockquote) {
      flushBlockquote(index);
    }

    // Handle tables
    if (line.trim().startsWith("|") && line.trim().endsWith("|")) {
      if (!inTable) {
        flushBlockquote(index);
        inTable = true;
      }
      const cells = line
        .split("|")
        .slice(1, -1)
        .map((cell) => cell.trim());
      currentTable.push(cells);
      return;
    } else if (inTable) {
      flushTable(index);
    }

    // Handle images
    if (line.trim().startsWith("![")) {
      const match = line.match(/!\[([^\]]*)\]\(([^)]+)\)/);
      if (match) {
        elements.push(
          <div key={index} className="my-6">
            <div className="relative w-full h-64 md:h-96">
              <Image
                src={match[2]}
                alt={match[1] || "Image"}
                fill
                className="object-contain rounded-lg"
              />
            </div>
            {match[1] && (
              <p className="text-center text-sm text-muted-foreground mt-2">
                {match[1]}
              </p>
            )}
          </div>
        );
        return;
      }
    }

    // Handle headings
    if (line.startsWith("# ")) {
      const text = line.substring(2);
      const id = text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "");
      elements.push(
        <h1 key={index} id={id} className="text-3xl font-bold text-foreground mb-4 mt-8 scroll-mt-20">
          {processInlineFormatting(text)}
        </h1>
      );
    } else if (line.startsWith("## ")) {
      const text = line.substring(3);
      const id = text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "");
      elements.push(
        <h2
          key={index}
          id={id}
          className="text-2xl font-semibold text-foreground mt-8 mb-4 scroll-mt-20"
        >
          {processInlineFormatting(text)}
        </h2>
      );
    } else if (line.startsWith("### ")) {
      const text = line.substring(4);
      const id = text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "");
      elements.push(
        <h3
          key={index}
          id={id}
          className="text-xl font-semibold text-foreground mt-6 mb-3 scroll-mt-20"
        >
          {processInlineFormatting(text)}
        </h3>
      );
    } else if (line.startsWith("#### ")) {
      const text = line.substring(5);
      const id = text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "");
      elements.push(
        <h4
          key={index}
          id={id}
          className="text-lg font-semibold text-foreground mt-4 mb-2 scroll-mt-20"
        >
          {processInlineFormatting(text)}
        </h4>
      );
    }
    // Handle list items
    else if (line.startsWith("- ")) {
      if (!inList) {
        inList = true;
        currentListItems = [];
      }
      currentListItems.push(processInlineFormatting(line.substring(2)));

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
        <p key={index} className="mb-4 leading-7">
          {processInlineFormatting(line)}
        </p>
      );
    }
  });

  // Flush any remaining content
  if (inBlockquote) {
    flushBlockquote(lines.length);
  }
  if (inTable) {
    flushTable(lines.length);
  }

  return <div className="space-y-2">{elements}</div>;
};
