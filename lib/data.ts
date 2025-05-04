export const experiences = [
  {
    date: "March 2024 - Present",
    title: "Software Developer",
    company: "HelloYes Marketing",
    description:
      "Developed websites, web interfaces, and applications based on client specifications. Engineered solutions to complex problems, maintaining and building optimized software and enhancing existing software systems.",
  },
  {
    date: "July 2023 - February 2023",
    title: "Web Developer",
    company: "Uniflex Projects",
    description:
      "Designed and developed web platforms using Next.js, Go, and JavaScript at Uniflex Projects. Translated business requirements into functional solutions to drive productivity, efficiency and online visibility.",
  },
];

export const projects = [
  {
    id: 1,
    title: "Bookit",
    slug: "bookit",
    description:
      "A modern event ticketing and booking platform built with Next.js, Go, and PostgreSQL. Features include secure payment processing, QR code tickets, and interactive seating maps.",
    imageUrl: "/images/projects/bookit.png",
    tags: ["Next.js", "Go", "PostgreSQL", "AWS S3"],
    demoUrl: "https://bookit.co.za",
    repoUrl: "https://github.com/BT-Matshazi/bookit-main",
    content: `
# Bookit - Event Ticketing Platform

A modern event ticketing and booking platform built with Next.js, Go, and PostgreSQL. Bookit provides event organizers and attendees with a seamless experience for creating, managing, and booking events.

## Features

- User-friendly event creation and management
- Secure payment processing
- Interactive seating maps
- QR code ticket generation and validation
- Attendee management dashboard
- Analytics for event organizers
- Mobile-responsive design

## Technical Implementation

The platform uses a hybrid architecture with Next.js for the frontend and some backend functions, while a Go application handles all transaction-related operations. PostgreSQL serves as the primary database for storing user data, event information, and transaction records.

The Next.js application is hosted on Vercel, while the Go services are containerized with Docker and deployed on a Virtual Private Server. AWS S3 is used for secure storage of images, tickets, and other media assets.

## Challenges and Solutions

One significant challenge was ensuring data consistency across the hybrid architecture. This was solved by implementing transaction boundaries and a message queue system to ensure operations complete successfully across both services.

Handling peak loads during popular event releases was addressed by implementing rate limiting and a virtual waiting room in the Go service.

## Results

The platform successfully processes thousands of ticket transactions with an average response time under 200ms, even during high-traffic periods. The hybrid architecture provides both the developer experience benefits of Next.js and the performance advantages of Go for critical operations.
  `,
  },
];
