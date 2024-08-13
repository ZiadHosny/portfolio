import { HackerRank, ITI, Internship, MaharaTech, Mansoura, Online, cloudinary, freeCodeCamp } from "../constants";
import { CertificationType, createCertification } from "../utils/Certification";

export const certifications: CertificationType[] = [
    createCertification({
        title: "Android",
        courseType: "Android Training (CCIC)",
        place: Mansoura,
        date: "07/2019 - 10/2019",
        certificateImage: "v1695465690/Certifications/Consulting_of_Computers_and_Information_Center_-_Java_Android_sfcwa1.png",
    }),
    createCertification({
        title: "Flutter",
        courseType: Internship,
        place: "Mega Trust Company",
        date: "02/2022 - 03/2022",
        certificateImage: "v1695465693/Certifications/MegaTrust-Flutter_xevlcw.jpg",
    }),
    createCertification({
        title: "HTML & CSS",
        courseType: MaharaTech,
        place: ITI,
        date: "05/2022 - 06/2022",
        certificateImage: "v1695462263/Certifications/MaharaTech/Mahara_Tech_-_HTML_CSS_f4rchc.png",
        certificateLink: "https://maharatech.gov.eg/mod/customcert/view.php?id=1404&downloadown=1"
    }),
    createCertification({
        title: "Database",
        courseType: MaharaTech,
        place: ITI,
        date: "05/2022 - 06/2022",
        certificateImage: "v1695462273/Certifications/MaharaTech/Mahara_Tech_-_Database_dww26y.png",
        certificateLink: "https://maharatech.gov.eg/mod/customcert/view.php?id=7655&downloadown=1"
    }),
    createCertification({
        title: "JavaScript",
        courseType: MaharaTech,
        place: ITI,
        date: "05/2022 - 06/2022",
        certificateImage: "v1695462271/Certifications/MaharaTech/Mahara_Tech_-_Javascript_jxbvaw.png",
        certificateLink: "https://maharatech.gov.eg/mod/customcert/view.php?id=7660&downloadown=1"
    }),
    createCertification({
        title: "TypeScript",
        courseType: MaharaTech,
        place: ITI,
        date: "06/2022 - 07/2022",
        certificateImage: "v1695462278/Certifications/MaharaTech/Mahara_Tech_-_Typescript_uw11g6.png",
        certificateLink: "https://maharatech.gov.eg/mod/customcert/view.php?id=8663&downloadown=1"
    }),
    createCertification({
        title: "Front-End & Cross-Platform Intensive Code Camp",
        courseType: "ITI scholarship",
        place: "Information Technology Institute",
        date: "04/2022 - 08/2022",
        certificateImage: `v1695465692/Certifications/ITI_zq9prq.jpg`,
    }),
    createCertification({
        title: "JavaScript (Basic)",
        courseType: HackerRank,
        date: "08/2022",
        certificateImage: `v1695462880/Certifications/HackerRank/javascript_basic_certificate_qpffng.png`,
        certificateLink: "https://www.hackerrank.com/certificates/150b23da9a18"
    }),
    createCertification({
        title: "React (Basic)",
        courseType: HackerRank,
        date: "08/2022",
        certificateImage: `v1695462963/Certifications/HackerRank/react_basic_certificate_akykwl.png`,
        certificateLink: "https://www.hackerrank.com/certificates/240ca2891d46"
    }),
    createCertification({
        title: "Problem Solving (Basic)",
        courseType: HackerRank,
        date: "08/2022",
        certificateImage: `v1695462873/Certifications/HackerRank/problem_solving_basic_certificate_nggpyh.png`,
        certificateLink: "https://www.hackerrank.com/certificates/a3fb40835128"
    }),
    createCertification({
        title: "JavaScript (Intermediate)",
        courseType: HackerRank,
        date: "09/2022",
        certificateImage: `v1695462867/Certifications/HackerRank/javascript_intermediate_certificate_hyduus.png`,
        certificateLink: "https://www.hackerrank.com/certificates/a8db3bcdddae"
    }),
    createCertification({
        title: "Responsive Web Design",
        courseType: freeCodeCamp,
        date: "10/2022",
        certificateImage: `v1695466627/Certifications/FreeCodeCamp/responsive-web-design_yaew80.png`,
        certificateLink: "https://www.freecodecamp.org/certification/ziadhosny/responsive-web-design"
    }),
    createCertification({
        title: "JavaScript Algorithms And Data Structures",
        courseType: freeCodeCamp,
        date: "10/2022",
        certificateImage: `v1695466627/Certifications/FreeCodeCamp/javascript-algorithms-and-data-structures_k17kon.png`,
        certificateLink: "https://www.freecodecamp.org/certification/ziadhosny/javascript-algorithms-and-data-structures"
    }),
    createCertification({
        title: "NodeJs (Intermediate)",
        courseType: HackerRank,
        date: "09/2023",
        certificateImage: `v1695462878/Certifications/HackerRank/nodejs_intermediate_certificate_qypwwn.png`,
        certificateLink: "https://www.hackerrank.com/certificates/e87ef0597dd9"
    }),
    createCertification({
        title: "Software Engineer Intern",
        courseType: HackerRank,
        date: "11/2023",
        certificateImage: `v1700034727/Certifications/HackerRank/software_engineer_intern_certificate_n3mi9v.png`,
        certificateLink: "https://www.hackerrank.com/certificates/141db3418060"
    }),
    createCertification({
        title: "Frontend Developer (React)",
        courseType: HackerRank,
        date: "11/2023",
        certificateImage: `v1702976791/Certifications/HackerRank/frontend_react_certificate_ne5aa6.png`,
        certificateLink: "https://www.hackerrank.com/certificates/7310148f9e45"
    }),
    createCertification({
        title: "Rest API (Intermediate)",
        courseType: HackerRank,
        date: "11/2023",
        certificateImage: `v1700034725/Certifications/HackerRank/rest_api_intermediate_certificate_pkj0qr.png`,
        certificateLink: "https://www.hackerrank.com/certificates/dcb8d7a7a57a"
    }),
].reverse().map((e) => ({ ...e, certificateImage: `${cloudinary}/${e.certificateImage}` }));
