import { createContext, useContext } from "react";
import { MdOutlineMailOutline, MdLocationOn } from "react-icons/md";
import { FaSkype, FaGithub, FaHtml5 } from "react-icons/fa6";
import {
  FaLinkedin,
  FaCss3,
  FaReact,
  FaNode,
  FaJava,
  FaPhp,
} from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks, SiCodingninjas } from "react-icons/si";
import { DiMysql } from "react-icons/di";
import { TbBrandVscode } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io5";
import imageSrc from "../assets/novoinvent_logo.png";
import projectImageSrc1 from "../assets/project1.png";

const data = {
  name: "BHUPINDER PAL",
  designation: "Software Engineer",
  copyRightYear: new Date().getFullYear(),
  location: [
    { id: "1", logo: MdLocationOn, value: "Dera Bassi, Punjab, India" },
  ],
  languagesKnown: ["English", "Hindi", "Punjabi"],
  phone: "+91 9877278413",
  education: [
    {
      id: "1",
      category: "Graduation",
      name: "B.E (Computer Science)",
      institution: "Chitkara University, Punjab",
      years: "2017 - 2021",
      score: "9.5 CGPA",
    },
    {
      id: "2",
      category: "12th Grade",
      name: "XII",
      institution: "GMSSS-16, Chandigarh",
      years: "2016 - 2017",
      score: "93%",
    },
    {
      id: "3",
      category: "10th Grade",
      name: "X",
      institution: "SSIS, Punjab",
      years: "2014 - 2015",
      score: "9.6 CGPA",
    },
  ],

  work: [
    {
      id: "1",
      logo: imageSrc,
      companyName: "Novoinvent Software Pvt Ltd",
      location: "Noida, India",
      designation: "Software Engineer",
      startDate: "June, 2021",
      endDate: null,
      description: `Lead the development of web applications and collaborated with
          cross-functional teams to deliver high-quality software. As a key
          contributor to the Electronic Health Records (EHR) development team,
          I focused on expanding functionality by creating new screens. I
          Collaborated directly with clients to implement innovative features,
          translating their needs into actionable plans. Additionally, I
          played a crucial role in bug fixing, ensuring a seamless and
          glitch-free user experience. This experience reflects my commitment
          to enhancing healthcare technology for optimal efficiency and user
          satisfaction.`,
      achievements: [
        `Spearheaded the design and implementation of cutting-edge screens,
          transforming the prescription process for heightened efficiency
          and user satisfaction.`,
        `Successfully uploaded the entire database from the client's
          previous platform into our system, ensuring a smooth transition
          and preserving valuable historical data.`,
        `Provided unwavering support to the client, offering solutions
          promptly and maintaining a responsive communication channel for
          their seamless integration into the new platform.`,
        `Optimized database queries, resulting in a 40% reduction in page
          load times.`,
        `Collaborated with the team to troubleshoot and resolve bugs.`,
      ],
      technologyUsed: ["React", "Javascript", "CSS", "PHP", "MySQL"],
    },
    {
      id: "2",
      logo: imageSrc,
      companyName: "Novoinvent Software Pvt Ltd",
      location: "Noida, India",
      designation: "Software Engineer Intern",
      startDate: "April, 2020",
      endDate: "May, 2021",
      description: `As a Software Engineer Intern at Novoinvent Software, I contributed to diverse projects, focusing on new screen design and implementation and providing dedicated client support.This experience exposed me to frontend technologies like React.js, JS, HTML, CSS, and backend database management using MySQL.It was a dynamic learning opportunity that honed my skills in software development and collaborative problem-solving.`,
      achievements: [
        `Designed and implemented user-friendly forms for hospital staff, streamlining data entry processes and enhancing overall efficiency.`,
        `Successfully identified and fixed glitches in the existing platform, contributing to a more robust and efficient system for seamless day-to-day operations.`,
        `Spearheaded the creation of new screens for inventory and prescription management, focusing on user-friendliness to improve accessibility and workflow efficiency.`,
        `Provided dedicated support to clients and actively engaged with them to gather new requirements. Implemented innovative solutions based on client feedback, ensuring a tailored and evolving platform to meet their needs.`,
        `Implemented new and impactful features on the company website, enriching user experience and enhancing overall functionality.`,
      ],
      technologyUsed: [
        "React",
        "Javascript",
        "Node",
        "Jquery",
        "CSS",
        "PHP",
        "MySQL",
      ],
    },
  ],
  contactDetail: [
    {
      id: "1",
      type: "mail",
      logo: MdOutlineMailOutline,
      value: "bhupinderpal414@gmail.com",
      link: `mailto:bhupinderpal414@gmail.com`,
      target: "_self",
    },
    {
      id: "2",
      type: "skype",
      logo: FaSkype,
      value: "bhupinderpal414@gmail.com",
      link: "skype://bhupinderpal414@gmail.com",
      target: "_self",
    },
    {
      id: "3",
      type: "linkedIn",
      logo: FaLinkedin,
      value: "linkedin.com/in/bhupinder-pal-3a798b197",
      link: "https://www.linkedin.com/in/bhupinder-pal-3a798b197/",
      target: "_blank",
    },
    {
      id: "4",
      type: "github",
      logo: FaGithub,
      value: "github.com/bhupinder414",
      link: "https://github.com/bhupinder414",
      target: "_blank",
    },
  ],

  codingData: [
    {
      id: "1",
      logo: SiLeetcode,
      value: "leetcode.com/bhupinderpal414",
      link: "https://leetcode.com/bhupinderpal414/",
      target: "_blank",
    },
    {
      id: "2",
      logo: SiGeeksforgeeks,
      value: "auth.geeksforgeeks.org/user/bhupinderpal414",
      link: "https://auth.geeksforgeeks.org/user/bhupinderpal414",
      target: "_blank",
    },
    {
      id: "3",
      logo: SiCodingninjas,
      value:
        "codingninjas.com/studio/profile/f00efa64-8cb0-4adb-9633-80740dc03227",
      link: "https://www.codingninjas.com/studio/profile/f00efa64-8cb0-4adb-9633-80740dc03227",
      target: "_blank",
    },
  ],
  projects: [
    {
      id: "1",
      imgageSrc: projectImageSrc1,
      name: "Project 1",
      description: [
        ` desccccccccccccc xhuhf sdjisjdij sdij sdijs djisjd siisd sdji sdjis djif
  jd fsjifjsi`,
      ],
      codeLink: "",
      target: "_blank",
      websiteLink: "https://next-js-demo-taupe.vercel.app/",
    },
  ],
  skills: [
    { id: "1", category: "web-development", Icon: FaHtml5, name: "HTML" },
    { id: "2", category: "web-development", Icon: FaCss3, name: "CSS" },
    {
      id: "3",
      category: "web-development",
      Icon: IoLogoJavascript,
      name: "Javascript",
    },

    { id: "4", category: "web-development", Icon: FaReact, name: "React JS" },
    { id: "5", category: "backend-development", Icon: FaJava, name: "Java" },
    { id: "6", category: "backend-development", Icon: FaNode, name: "Node JS" },
    { id: "7", category: "backend-development", Icon: FaPhp, name: "PHP" },
    { id: "8", category: "backend-development", Icon: DiMysql, name: "MYSQL" },
    { id: "9", category: "other", Icon: FaGithub, name: "Github" },
    { id: "10", category: "other", Icon: TbBrandVscode, name: "VS Code" },
  ],
  about: [
    `Hello! I'm Bhupinder, a passionate software engineer based in
    India. With a fervor for crafting elegant solutions and a commitment to
    continuous learning, my journey in the world of technology has been
    nothing short of exhilarating.`,
    `I earned my degree in Computer Science from Chitkara University and have
    since embarked on a dynamic career. My professional adventure has led me
    to work on a diverse range of projects, from developing robust web
    applications to optimizing database performance. Over the years,
    I've honed my skills in full-stack development, mastering
    technologies such as React, Node.js, and more.`,
    `I specialize in creating efficient and scalable solutions, bringing a
    holistic approach to every project. Whether it's architecting
    frontend experiences or optimizing backend functionalities, I'm
    dedicated to delivering excellence in every line of code. My keen
    interest in exploring new technologies and frameworks keeps me at the
    forefront of innovation.`,
    `Mindfulness and meditation are essential tools in my non-digital
    toolkit. They offer a sanctuary for clarity, focus, and rejuvenation,
    ensuring a balanced and centered approach to both life and coding.`,
    `I believe in the power of collaboration and am always open to new
    challenges and opportunities. Whether it's discussing potential
    projects, sharing insights, or simply connecting over a shared passion
    for coding, I'm eager to hear from you.Let's start the
    conversation — <StyledLink to="/contact">Contact Me</StyledLink>`,
    `Thank you for visiting my corner of the web. Let's embark on a
    coding journey together!`,
  ],
};

const DataProviderContext = createContext(data);

function DataProvider({ children }) {
  return (
    <DataProviderContext.Provider value={data}>
      {children}
    </DataProviderContext.Provider>
  );
}

function useData() {
  const context = useContext(DataProviderContext);
  if (!context) {
    throw new Error(
      "dark mode context cannot be used outside dark mode provider"
    );
  }
  return context;
}

export { useData, DataProvider };
