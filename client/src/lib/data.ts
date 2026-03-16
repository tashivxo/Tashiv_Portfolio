import { BookOpen, Briefcase, Code, Mail, Award, Cpu, Layers, Terminal } from "lucide-react";

// Import assets
// Note: For PDFs in attached_assets, we can reference them directly if we copy them to public or use a route.
// In this environment, `attached_assets` is usually served.
const pdfPrefix = "/attached_assets/";

export const personalInfo = {
  name: "Tashiv Govender",
  title: "Full Stack Software Developer",
  subtitle: "Gen AI, Cyber Security & Cloud Enthusiast",
  email: "tashivxo@gmail.com",
  linkedin: "https://www.linkedin.com/in/tashiv-govender-a412b921b/",
  github: "https://github.com", // Placeholder as per request
  bio: `I am a passionate and results-driven software developer who enjoys staying active through sports and fitness, playing chess, gaming, watching movies, and listening to music—interests that keep me creative, balanced, and energized in my work. 

I have hands-on experience across full stack development, backend engineering, cloud technologies, and emerging AI solutions. My journey began with comprehensive training at WeThinkCode_, where I built a strong foundation in web and mobile development.

I further strengthened my technical expertise as an Intern Backend Software Engineer at Techzarlory, working with Java, Spring, and microservices to deliver real-world, production-level solutions. This experience sharpened my ability to design scalable systems, solve complex engineering problems, and collaborate in fast-paced technical environments.

Currently, I am a Digital Associate at Project Y, where I work across Generative AI, data engineering, and cloud engineering initiatives. This role has expanded my skill set in modern AI tooling, cloud-first architectures, and data-driven solutions—allowing me to build impactful, innovative systems that push the boundaries of what technology can do.`,
};

export const skills = [
  { name: "Java", icon: Code },
  { name: "JavaScript", icon: Terminal },
  { name: "TypeScript", icon: Code },
  { name: "Python", icon: Code },
  { name: "React", icon: Code },
  { name: "Flutter", icon: Code },
  { name: "SQL", icon: Layers },
  { name: "HTML/CSS", icon: Layers },
  { name: "Spring Boot", icon: Cpu },
  { name: "Git", icon: Code },
  { name: "GenAI", icon: Cpu },
  { name: "AWS", icon: Cpu },
  { name: "Azure", icon: Cpu },
  { name: "Power Platforms", icon: Cpu },
  { name: "Linux", icon: Terminal },
  { name: "Docker", icon: Layers },
  { name: "Kubernetes", icon: Layers },
  { name: "Firebase", icon: Cpu },
  { name: "Office 365", icon: Cpu },
  { name: "Jira", icon: Code },
  { name: "Postman", icon: Code },
  { name: "Canva", icon: Code },
];

export const education = [
  {
    institution: "WeThinkCode_",
    degree: "Software Development Training",
    period: "Sept 2023 - Dec 2024",
    description: "Built a strong foundation in web and mobile development, algorithms, and data structures.",
  },
];

export const experience = [
  {
    company: "Project Y",
    role: "Digital Associate",
    period: "Current",
    type: "Full-time",
    description: "Working across Generative AI, data engineering, and cloud engineering initiatives. Building impactful, innovative systems using modern AI tooling and cloud-first architectures.",
  },
  {
    company: "Techzarlory",
    role: "Intern Backend Software Engineer",
    period: "March 2025 - July 2025",
    type: "Internship",
    description: "Worked with Java, Spring, and microservices to deliver real-world, production-level solutions. Designed scalable systems and solved complex engineering problems.",
    skills: ["Java", "Spring Boot", "Microservices", "Git", "Problem Solving"],
  },
];

export const certifications = [
  // AWS Certifications
  { 
    name: "Building Data Lakes on AWS", 
    issuer: "Amazon Web Services", 
    date: "Mar 9, 2026",
    pdfUrl: pdfPrefix + "Coursera_AWS_Data_Lakes_1773306355438.pdf"
  },
  { 
    name: "Architecting Solutions on AWS", 
    issuer: "Amazon Web Services", 
    date: "Feb 24, 2026",
    pdfUrl: pdfPrefix + "Coursera_AWS_architecture_soloutions_1773306355439.pdf"
  },
  { 
    name: "AWS Cloud Technical Essentials", 
    issuer: "Amazon Web Services", 
    date: "Feb 3, 2026",
    pdfUrl: pdfPrefix + "Coursera_AWS_cloud_technical_essentials_1773306355439.pdf"
  },
  { 
    name: "Foundations of Cybersecurity", 
    issuer: "Google", 
    date: "Mar 11, 2026",
    pdfUrl: pdfPrefix + "Coursera_Foundations_of_Cyber_Security_1773306355441.pdf"
  },
  // Original Certifications
  { 
    name: "Generative AI with Large Language Models", 
    issuer: "DeepLearning.AI & AWS", 
    date: "Nov 2025",
    pdfUrl: pdfPrefix + "Coursera_LLM_1764939247584.pdf"
  },
  { 
    name: "Developing Interpersonal Skills", 
    issuer: "IBM", 
    date: "Oct 2025",
    pdfUrl: pdfPrefix + "Coursera_interpersonal_skills_1764939247583.pdf"
  },
  { 
    name: "Active Listening: Enhancing Communication Skills", 
    issuer: "Coursera", 
    date: "Oct 2025",
    pdfUrl: pdfPrefix + "Coursera_active_listening_1764939247582.pdf"
  },
  { 
    name: "Introduction to Generative AI", 
    issuer: "Google Cloud", 
    date: "Oct 2025",
    pdfUrl: pdfPrefix + "Coursera_Gen_AI_1764939247583.pdf"
  },
  { 
    name: "Verbal Communications and Presentation Skills", 
    issuer: "Starweaver", 
    date: "Oct 2025",
    pdfUrl: pdfPrefix + "Coursera_communication_1764939247582.pdf"
  },
  { 
    name: "Agile with Atlassian Jira", 
    issuer: "Atlassian", 
    date: "Oct 2025",
    pdfUrl: pdfPrefix + "Coursera_jira_1764939247584.pdf"
  },
  { 
    name: "Version Control with Git", 
    issuer: "Atlassian", 
    date: "Oct 2025",
    pdfUrl: pdfPrefix + "Coursera_Git_1764939247583.pdf"
  },
  { 
    name: "Write Professional Emails in English", 
    issuer: "Georgia Tech", 
    date: "Oct 2025",
    pdfUrl: pdfPrefix + "Coursera_email_1764939247583.pdf"
  },
  // Additional Soft Skills Certifications
  { 
    name: "Cloud Architecture Design Patterns", 
    issuer: "Coursera", 
    date: "Jan 12, 2026",
    pdfUrl: pdfPrefix + "Coursera_cloud_architecture_1773306355440.pdf"
  },
  { 
    name: "Finding Your Professional Voice: Confidence & Impact", 
    issuer: "University of London", 
    date: "Jan 8, 2026",
    pdfUrl: pdfPrefix + "Coursera_confidence_1773306355440.pdf"
  },
  { 
    name: "Emotional Intelligence", 
    issuer: "Arizona State University", 
    date: "Jan 8, 2026",
    pdfUrl: pdfPrefix + "Coursera_emotional_intelligence_1773306355440.pdf"
  },
  { 
    name: "Work Smarter, Not Harder: Time Management for Personal & Professional Productivity", 
    issuer: "University of California, Irvine", 
    date: "Dec 8, 2025",
    pdfUrl: pdfPrefix + "Coursera_Time_management_1773306355441.pdf"
  },
];

export const projects = [
  {
    title: "Fortune Cookie Website",
    description: "An interactive web application that generates random fortune cookie messages with a delightful user experience.",
    tags: ["HTML", "CSS", "JavaScript", "Interactive"],
    link: "https://github.com/tashivxo/fortuneCookie",
  },
  {
    title: "MilkTartDay",
    description: "An engaging interactive website showcasing the celebration and culture of Milk Tart Day with dynamic content.",
    tags: ["Web Development", "Interactive", "Frontend"],
    link: "https://github.com/tashivxo/milktartday",
  },
  {
    title: "Internal Management Website",
    description: "A comprehensive AWS monolithic application designed for internal management operations and workflow automation.",
    tags: ["AWS", "Backend", "Management System"],
    link: "https://github.com/tashivxo/AWSMonolith2",
  },
  {
    title: "EduCreate",
    description: "A study buddy platform designed to facilitate collaborative learning and educational resource sharing among students.",
    tags: ["React", "Education", "Collaboration"],
    link: "https://github.com/tashivxo/studyBuddies",
  },
  {
    title: "History of the Olympics Data Lake",
    description: "A comprehensive data lake on AWS analyzing historical Olympic Games data with advanced analytics and visualization.",
    tags: ["AWS", "Data Lakes", "Analytics", "Python"],
    link: "https://github.com/tashivxo/AWSDataLake",
  },
];
