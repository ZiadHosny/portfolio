export type Job = {
  role: string;
  company: string;
  via?: string;
  start: string;
  end: string;
  employment: "Full-time" | "Part-time";
  workplace: "Remote" | "On-site" | "Hybrid";
  points: string[];
};

export const jobs: Job[] = [
  {
    role: "Backend Developer",
    company: "AZM Squad",
    via: "Algoriza",
    start: "10/2025",
    end: "Present",
    employment: "Full-time",
    workplace: "Remote",
    points: [
      "Build and maintain enterprise backend services with Node.js, NestJS and Strapi.",
      "Design PostgreSQL schemas, indexes and complex queries, and tune database performance.",
      "Develop secure, scalable RESTful APIs for user flows, service requests and admin workflows.",
      "Integrate with external enterprise systems, identity providers and third-party services.",
    ],
  },
  {
    role: "Apex & Full-Stack Developer",
    company: "eSmart",
    start: "12/2024",
    end: "11/2025",
    employment: "Full-time",
    workplace: "Hybrid",
    points: [
      "Worked on a large-scale hospital management system with Oracle APEX, Node.js and React.",
      "Built the clinic module for doctors' appointment scheduling, rescheduling and calendars.",
      "Delivered full-stack features for pharmacy, billing and laboratory departments.",
      "Integrated hospital modules so data flows reliably across departments.",
    ],
  },
  {
    role: "Full-Stack Developer",
    company: "Easy Way Web",
    start: "09/2024",
    end: "08/2025",
    employment: "Part-time",
    workplace: "Remote",
    points: [
      "Built and maintained several e-commerce websites with React and Node.js.",
      "Used Firebase for real-time data, authentication and hosting.",
      "Customized WordPress sites for e-commerce clients.",
      "Shipped new features, improved performance and fixed bugs across platforms.",
    ],
  },
  {
    role: "Full-Stack Developer",
    company: "Shoaa",
    start: "10/2023",
    end: "12/2024",
    employment: "Full-time",
    workplace: "On-site",
    points: [
      "Built an internal employee management system for a company in the electricity sector.",
      "Developed RESTful APIs for the employee system and a meter-reading mobile app.",
      "Developed frontend features with React and backend services with Node.js.",
      "Improved performance and kept the codebase clean and testable.",
    ],
  },
  {
    role: "Full-Stack Developer",
    company: "LOGEX.SA",
    start: "10/2023",
    end: "12/2024",
    employment: "Part-time",
    workplace: "Remote",
    points: [
      "Built an e-commerce website for flower sales in Saudi Arabia with React and Node.js.",
      "Implemented the product catalog, shopping cart and order management.",
      "Turned wireframes into features and improved the shopping experience.",
    ],
  },
  {
    role: "Front-end Developer",
    company: "eSmart",
    start: "12/2022",
    end: "02/2023",
    employment: "Part-time",
    workplace: "Remote",
    points: [
      "Built a calendar system for a clinic to schedule and reschedule doctors' appointments.",
      "Focused on a smooth user experience and accurate date handling.",
    ],
  },
  {
    role: "Full-Stack Developer",
    company: "Bitspire",
    start: "06/2022",
    end: "08/2023",
    employment: "Full-time",
    workplace: "Remote",
    points: [
      "Started as a React developer, then moved to full-stack with Node.js.",
      "Contributed to a developer onboarding tool that automates project setup, database creation and VS Code configuration.",
      "Built CI/CD pipelines to streamline development and deployments.",
      "Worked closely with design, backend and DevOps teams.",
    ],
  },
];

export const education = [
  {
    title: "BSc in Computer Science",
    place: "Faculty of Computers and Information, Mansoura University",
    date: "2016 – 2020",
  },
  {
    title: "Front-End & Cross-Platform Intensive Code Camp",
    place: "Information Technology Institute (ITI)",
    date: "04/2022 – 08/2022",
  },
];
