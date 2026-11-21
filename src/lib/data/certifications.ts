const cloudinary = "https://res.cloudinary.com/ziadhosny/image/upload";

export type Certification = {
  title: string;
  issuer: string;
  date: string;
  /** Public verification page if available, otherwise the certificate image. */
  href: string;
};

const img = (path: string) => `${cloudinary}/${path}`;

// Newest first
export const certifications: Certification[] = [
  {
    title: "Rest API (Intermediate)",
    issuer: "HackerRank",
    date: "11/2023",
    href: "https://www.hackerrank.com/certificates/dcb8d7a7a57a",
  },
  {
    title: "Frontend Developer (React)",
    issuer: "HackerRank",
    date: "11/2023",
    href: "https://www.hackerrank.com/certificates/7310148f9e45",
  },
  {
    title: "Software Engineer Intern",
    issuer: "HackerRank",
    date: "11/2023",
    href: "https://www.hackerrank.com/certificates/141db3418060",
  },
  {
    title: "Node.js (Intermediate)",
    issuer: "HackerRank",
    date: "09/2023",
    href: "https://www.hackerrank.com/certificates/e87ef0597dd9",
  },
  {
    title: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    date: "10/2022",
    href: "https://www.freecodecamp.org/certification/ziadhosny/javascript-algorithms-and-data-structures",
  },
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    date: "10/2022",
    href: "https://www.freecodecamp.org/certification/ziadhosny/responsive-web-design",
  },
  {
    title: "JavaScript (Intermediate)",
    issuer: "HackerRank",
    date: "09/2022",
    href: "https://www.hackerrank.com/certificates/a8db3bcdddae",
  },
  {
    title: "Problem Solving (Basic)",
    issuer: "HackerRank",
    date: "08/2022",
    href: "https://www.hackerrank.com/certificates/a3fb40835128",
  },
  {
    title: "React (Basic)",
    issuer: "HackerRank",
    date: "08/2022",
    href: "https://www.hackerrank.com/certificates/240ca2891d46",
  },
  {
    title: "JavaScript (Basic)",
    issuer: "HackerRank",
    date: "08/2022",
    href: "https://www.hackerrank.com/certificates/150b23da9a18",
  },
  {
    title: "Front-End & Cross-Platform Intensive Code Camp",
    issuer: "ITI",
    date: "04/2022 – 08/2022",
    href: img("v1695465692/Certifications/ITI_zq9prq.jpg"),
  },
  {
    title: "TypeScript",
    issuer: "Mahara-Tech (ITI)",
    date: "06/2022 – 07/2022",
    href: img("v1695462278/Certifications/MaharaTech/Mahara_Tech_-_Typescript_uw11g6.png"),
  },
  {
    title: "JavaScript",
    issuer: "Mahara-Tech (ITI)",
    date: "05/2022 – 06/2022",
    href: img("v1695462271/Certifications/MaharaTech/Mahara_Tech_-_Javascript_jxbvaw.png"),
  },
  {
    title: "Database",
    issuer: "Mahara-Tech (ITI)",
    date: "05/2022 – 06/2022",
    href: img("v1695462273/Certifications/MaharaTech/Mahara_Tech_-_Database_dww26y.png"),
  },
  {
    title: "HTML & CSS",
    issuer: "Mahara-Tech (ITI)",
    date: "05/2022 – 06/2022",
    href: img("v1695462263/Certifications/MaharaTech/Mahara_Tech_-_HTML_CSS_f4rchc.png"),
  },
  {
    title: "Flutter Internship",
    issuer: "Mega Trust",
    date: "02/2022 – 03/2022",
    href: img("v1695465693/Certifications/MegaTrust-Flutter_xevlcw.jpg"),
  },
  {
    title: "Android Training (CCIC)",
    issuer: "Mansoura University",
    date: "07/2019 – 10/2019",
    href: img(
      "v1695465690/Certifications/Consulting_of_Computers_and_Information_Center_-_Java_Android_sfcwa1.png",
    ),
  },
];
