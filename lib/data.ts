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

export interface ProjectMetrics {
  label: string;
  value: string;
  description?: string;
}

export interface CodeSnippet {
  language: string;
  code: string;
  title?: string;
  description?: string;
}

export interface Project {
  id: number;
  title: string;
  slug: string;
  description: string;
  imageUrl: string;
  tags: string[];
  demoUrl?: string;
  repoUrl?: string;
  content: string;
  // Case study enhancements
  problem?: string;
  solution?: string;
  results?: string;
  metrics?: ProjectMetrics[];
  codeSnippets?: CodeSnippet[];
  stackBlitzUrl?: string;
  techStack?: {
    frontend?: string[];
    backend?: string[];
    database?: string[];
    infrastructure?: string[];
  };
}

export const projects: Project[] = [
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
    problem: "Event organizers needed a reliable, scalable platform to manage ticket sales with real-time inventory tracking, secure payments, and fraud prevention. Existing solutions were either too expensive or lacked customization options for South African events.",
    solution: "Built a hybrid architecture combining Next.js for the frontend and Go microservices for transaction processing. Implemented real-time seat selection, QR code validation, and integrated with local payment gateways. Used PostgreSQL with optimistic locking to prevent overselling during high-demand events.",
    results: "Successfully launched with 10+ events, processing thousands of tickets with 99.9% uptime. Reduced ticket booking time by 60% compared to previous manual processes. Zero payment failures during peak traffic periods.",
    metrics: [
      {
        label: "Response Time",
        value: "<200ms",
        description: "Average API response time"
      },
      {
        label: "Uptime",
        value: "99.9%",
        description: "Platform availability"
      },
      {
        label: "Tickets Processed",
        value: "5,000+",
        description: "Total tickets sold"
      },
      {
        label: "Events Hosted",
        value: "10+",
        description: "Successful events"
      }
    ],
    techStack: {
      frontend: ["Next.js 14", "React 18", "TypeScript", "Tailwind CSS"],
      backend: ["Go", "REST APIs", "JWT Authentication"],
      database: ["PostgreSQL", "Redis"],
      infrastructure: ["Vercel", "Docker", "AWS S3", "VPS"]
    },
    codeSnippets: [
      {
        language: "go",
        title: "Optimistic Locking for Seat Reservation",
        description: "Prevents double-booking using PostgreSQL's row versioning",
        code: `func (s *SeatService) ReserveSeat(ctx context.Context, seatID int64, userID int64) error {
    tx, err := s.db.BeginTx(ctx, nil)
    if err != nil {
        return err
    }
    defer tx.Rollback()

    var seat Seat
    err = tx.QueryRowContext(ctx,
        \`SELECT id, version, status FROM seats
         WHERE id = $1 FOR UPDATE\`,
        seatID,
    ).Scan(&seat.ID, &seat.Version, &seat.Status)

    if err != nil {
        return err
    }

    if seat.Status != "available" {
        return ErrSeatNotAvailable
    }

    // Update with version check (optimistic locking)
    result, err := tx.ExecContext(ctx,
        \`UPDATE seats
         SET status = 'reserved', user_id = $1, version = version + 1
         WHERE id = $2 AND version = $3\`,
        userID, seatID, seat.Version,
    )

    if rowsAffected, _ := result.RowsAffected(); rowsAffected == 0 {
        return ErrConcurrentModification
    }

    return tx.Commit()
}`
      },
      {
        language: "typescript",
        title: "Real-time Seat Selection with Optimistic UI",
        description: "Interactive seat map with immediate visual feedback",
        code: `export function SeatMap({ eventId }: { eventId: string }) {
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
  const { data: seats, mutate } = useSWR(\`/api/events/\${eventId}/seats\`);

  const handleSeatClick = async (seatId: string) => {
    // Optimistic update
    const newSelection = selectedSeats.includes(seatId)
      ? selectedSeats.filter(id => id !== seatId)
      : [...selectedSeats, seatId];

    setSelectedSeats(newSelection);

    try {
      await fetch(\`/api/seats/\${seatId}/reserve\`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });

      mutate(); // Revalidate seat status
    } catch (error) {
      // Rollback on error
      setSelectedSeats(selectedSeats);
      toast.error('Failed to reserve seat');
    }
  };

  return (
    <div className="grid grid-cols-10 gap-2">
      {seats?.map((seat) => (
        <SeatButton
          key={seat.id}
          seat={seat}
          selected={selectedSeats.includes(seat.id)}
          onClick={() => handleSeatClick(seat.id)}
        />
      ))}
    </div>
  );
}`
      }
    ],
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
