import { Internship, Mansoura, cloudinary } from "../constants";
import { ExperienceType, createExperience } from "../utils/Experience";

export const experiences: ExperienceType[] = [
  createExperience({
    title: "Android Developer",
    courseType: "Android Training (CCIC)",
    place: Mansoura,
    date: "07/2019 - 10/2019",
    description: `Learned Java programming, object-oriented programming (OOP), design patterns, SOLID principles, 
and how to build Android applications using Java.`,
    certificateImage: `${cloudinary}/v1695465690/Certifications/Consulting_of_Computers_and_Information_Center_-_Java_Android_sfcwa1.png`,
  }),

  createExperience({
    title: "BSc in Computers and Information",
    courseType: "Bachelor of Computer Science",
    place: Mansoura,
    date: "08/2016 - 09/2020",
    description: `Graduated from the Computer Science department. Gained strong foundations in programming, 
especially in C++ and problem-solving. Developed multiple projects in JavaScript and explored AI topics 
including Natural Language Processing (NLP), computer vision, and neural networks.
Graduation Project: Developed a mobile learning app with a chatbot using Android, Java, Python, and NLP.`,
  }),

  createExperience({
    title: "Flutter Developer",
    courseType: Internship,
    place: "Mega Trust",
    date: "02/2022 - 03/2022",
    description: `Completed Flutter training to become a proficient Flutter developer. Learned to write clean code 
and implement best practices using modern state management techniques and the MVVM architecture.`,
    certificateImage: `${cloudinary}/v1695465693/Certifications/MegaTrust-Flutter_xevlcw.jpg`,
  }),

  createExperience({
    title: "Front-End & Cross-Platform Intensive Code Camp",
    courseType: "ITI Scholarship",
    place: "Information Technology Institute",
    date: "04/2022 - 08/2022",
    description: `Completed intensive ITI training focusing on front-end and cross-platform development including React JS, 
React Native, Angular, Node.js, and Flutter. Developed strong soft skills such as communication, teamwork, leadership, 
and presentation. Led the team in designing and implementing the final project, selecting optimal solutions for best results.`,
    certificateImage: `${cloudinary}/v1695465692/Certifications/ITI_zq9prq.jpg`,
  }),

  createExperience({
    title: "Front-end Developer",
    courseType: "Part Time (Remote)",
    place: "eSmart",
    date: "12/2022 - 02/2023",
    description: `Developed and maintained a calendar system for the clinic, allowing efficient scheduling 
and rescheduling of doctors' appointments. Ensured smooth user experience and accurate date management.`,
  }),

  createExperience({
    title: "Full-Stack Developer",
    courseType: "Full Time (Remote)",
    place: "Bitspire",
    date: "06/2022 - 08/2023",
    description: `Started as a Frontend Developer using React, later transitioned to Full-Stack development with Node.js, and gained experience in DevOps and CI/CD pipelines.

- Developed and maintained frontend applications using React and backend services with Node.js.
- Contributed to a developer onboarding system that automates project setup, database creation, and VS Code configuration for new team members.
- Designed and implemented pipelines to streamline development workflows and project deployments.
- Built scalable, maintainable, and testable code for internal developer tools and production systems.
- Collaborated closely with designers, backend, and DevOps teams to ensure smooth integration and high performance across all modules.
- Helped optimize developer experience, reducing setup time and improving productivity for new hires joining projects.`,
  }),

  createExperience({
    title: "Full-Stack Developer",
    courseType: "Part Time (Remote)",
    place: "LOGEX.SA",
    date: "10/2023 - 12/2024",
    description: `Worked as a Full-Stack Developer on an e-commerce website for flower sales in Saudi Arabia.

- Developed and maintained frontend interfaces using React and backend services using Node.js.
- Implemented new features and optimized user experience based on wireframes.
- Built scalable and maintainable code, fixed bugs, and ensured high performance.
- Collaborated closely with designers and backend developers to deliver a smooth shopping experience.
- Integrated e-commerce functionalities including product catalog, shopping cart, and order management.`,
  }),

  createExperience({
    title: "Full-Stack Developer",
    courseType: "Full Time (On-Site)",
    place: "Shoaa",
    date: "10/2023 - 12/2024",
    description: `Worked as a Full-Stack Developer on an internal employee management system for Shoaa, a subsidiary of the electricity sector.

- Developed and maintained frontend features using React and backend services using Node.js.
- Built and managed RESTful APIs to support the employee system and the mobile application used for reading electricity meters.
- Ensured smooth data flow between the backend and frontend applications.
- Optimized performance, debugged issues, and maintained clean, readable, and testable code.
- Collaborated with design and backend teams to deliver a reliable and scalable system for company employees and field operations.`,
  }),

  createExperience({
    title: "Full-Stack Developer",
    courseType: "Part Time (Remote)",
    place: "Easy Way Web",
    date: "09/2024 - 08/2025",
    description: `Worked as a Full-Stack Developer on multiple e-commerce websites.

- Developed and maintained frontend applications using React and backend services using Node.js.
- Integrated Firebase for real-time data management, authentication, and hosting.
- Customized and developed WordPress sites for e-commerce functionality.
- Implemented new features, optimized performance, and fixed bugs across all platforms.
- Collaborated with designers and backend developers to ensure seamless and high-quality user experience.
- Built scalable and maintainable code for web applications serving commercial clients.`,
  }),

  createExperience({
    title: "Apex & Full Stack Developer",
    courseType: "Full Time (Hybrid)",
    place: "eSmart",
    date: "12/2024 - 11/2025",
    description: `Worked as an Apex Developer and Full Stack Developer (Node.js & React) on a large-scale hospital management system.

- Developed and maintained the Apex-based clinic system for appointment scheduling, rescheduling, and calendar management for doctors.
- Built full-stack features using Node.js and React for hospital departments including pharmacy, billing, and laboratory systems.
- Managed and integrated multiple hospital modules to ensure seamless workflow across all departments.
- Ensured data accuracy, smooth user experience, and reliable system performance.
- Implemented secure and maintainable code for complex business logic, reports, and healthcare workflows.`,
  }),

  createExperience({
    title: "Backend Developer",
    courseType: "Full Time (Remote)",
    place: "Algoriza",
    date: "10/2025 - Present",
    description: `Assigned as an Offshore Backend Developer from Algoriza to AZM Squad.

- Working on enterprise-level backend systems using Strapi, Node.js, and NestJS.
- Managing PostgreSQL databases including schema design, optimization, and performance tuning.
- Integrating with external systems and third-party services.
- Implementing secure authentication workflows including Nafath integration.
- Contributing to scalable, production-ready backend architecture.`,
  }),

  createExperience({
    title: "Backend Developer",
    courseType: "Full Time (Remote)",
    place: "AZM Squad",
    date: "10/2025 - Present",
    description: `Backend Developer working on the backend of the Sekaya digital platform, supporting a non-profit foundation that enables community participation in water supply and service programs across remote and underserved areas.

- Built and maintained backend services using Strapi, Node.js, and NestJS.
- Designed and managed relational database architecture using PostgreSQL, including schema design, indexing, and complex queries.
- Developed secure, scalable RESTful APIs for user flows, service requests, and administrative workflows.
- Integrated with external enterprise systems and third-party services.
- Implemented and maintained Nafath authentication integration.
- Ensured database integrity, performance optimization, and backend scalability.`,
  }),
].reverse();
