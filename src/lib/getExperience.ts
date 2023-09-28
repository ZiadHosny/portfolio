import { cloudinary } from "./getImages";

export const experienceData = [
    {
        title: "Android Developer",
        courseType: "Android Training (CCIC)",
        place: "Mansoura University",
        date: "07/2019 - 10/2019",
        description:
            `I learned Java Programming Language, OOP,
             design patterns, solid principals, 
             and how to build Android apps using JAVA`,
        certificateAvailable: true,
        certificateImage: `${cloudinary}/v1695465690/Certifications/Consulting_of_Computers_and_Information_Center_-_Java_Android_sfcwa1.png`,
    },
    {
        title: "BSC in Computers and Information",
        courseType: "Bachelor of Computer Science",
        place: "Mansoura University",
        date: "08/2016 - 09/2020",
        description:
            `Graduated from the Computer Science department where I took my first step into programming,
            I Enjoyed working with C++ and Practicing problem solving, Also, I have made many projects in javascript,
            and I have learned about AI Like NLP, computer vision, and Neural network .
            Graduation Project: Building a mobile learning app with a chatbot by Android, Java,
            Python, and NLP.`,
        certificateAvailable: false,
    },
    {
        title: "Flutter Developer",
        courseType: "Internship",
        place: "Mega Trust Company",
        date: "02/2022 - 03/2022",
        description:
            `Flutter Training to know how to be experienced flutter developer and write clean code
             by using the best features and packages for state management and MVVM Architecture`,
        certificateAvailable: true,
        certificateImage: `${cloudinary}/v1695465693/Certifications/MegaTrust-Flutter_xevlcw.jpg`,
    },
    {
        title: "Front-End & Cross-Platform Intensive Code Camp",
        courseType: "ITI scholarship",
        place: "Information Technology Institute",
        date: "04/2022 - 08/2022",
        description:
            `I have learned lots of skills in ITI Intensive Training,
        especially in Front-end and cross-platform like React JS,
        React native, Angular, Node js, and Flutter,
        also soft skills like communication skills,
        Teamwork, leadership, and presentation skills,
        with tons of projects and hard work to make the best use of the training
        I was the team leader who designed and choose the best suitable solutions for the final project`,
        certificateAvailable: true,
        certificateImage: `${cloudinary}/v1695465692/Certifications/ITI_zq9prq.jpg`,
    },
    {
        title: "Front-end Developer",
        courseType: "Part Time (Hybrid)",
        description:
            `Responsible for Creating And Developing a calendar for the clinic system by picking and rescheduling suitable dates for doctors' appointments.`,
        place: "e-Smart Company",
        date: "12/2022 - 03/2023",
        certificateAvailable: false,
    },
    {
        title: "Full stack Developer",
        courseType: "Full Time (Remote)",
        description:
            `Developing frontend and backend websites using React,
            Node and I am responsible for developing new features and user interfaces from wireframe models,
            ensuring the best performance and user experience of the software,
            fixing bugs and performance problems, writing clean, readable, and testable code, 
            cooperating with back-end developers, designers.`,
        place: "Bitspire Company",
        date: "06/2022 - 08/2023",
        certificateAvailable: false,
    },
].reverse();
