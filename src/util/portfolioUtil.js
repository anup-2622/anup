
import { Menu, X, Github, Linkedin, Mail, ExternalLink, ArrowRight, Code2, Palette, Layers, Sparkles, MousePointer2, Database, Phone, MapPin, Calendar, Users, TrendingUp, Shield, Zap, Award, Target } from 'lucide-react';

export const projects = [
    {
      title: "SAKKSH Web Application",
      category: "Full Stack Development",
      company: "Schoofi Software Solution Pvt Ltd",
      period: "Aug 2023 - Present",
      description: "Enterprise-grade feedback and audit management system serving 2000+ users with real-time analytics and geofencing capabilities.",
      tags: ["React", "JavaScript", "Node.js", "MySQL"],
      achievements: [
        "QR-based feedback system handling 2000+ users",
        "Work permit feature built from scratch",
        "Resolved 55+ production bugs",
        "Real-time trend analysis dashboard",
        "Geofencing-based audit system"
      ],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "SAKKSH Mobile Application",
      category: "Mobile Backend Development",
      company: "Schoofi Software Solution Pvt Ltd",
      period: "2024",
      description: "Rebuilt mobile backend using NestJS, implementing scalable architecture with authentication, authorization, and real-time tracking.",
      tags: ["NestJS", "React Native", "Firebase", "REST API"],
      achievements: [
        "Migrated legacy API to NestJS",
        "Scaled to handle 1000+ concurrent users",
        "User tracking with geofencing",
        "Complete auth system from scratch",
        "Push notification system"
      ],
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=500&fit=crop",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Laser Vibgyor Management System",
      category: "Freelance Full Stack Project",
      company: "Freelance",
      period: "2023",
      description: "Complete business management solution with inventory, employee, and event management capabilities, currently in production use.",
      tags: ["React", "Postgres", "REST API", "Vercel"],
      achievements: [
        "Inventory management system",
        "Employee management module",
        "Event management from scratch",
        "Successfully deployed and handed over",
        "Currently in active production use"
      ],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop",
      gradient: "from-indigo-500 to-blue-500"
    }
  ];


 export   const skills = {
    frontend: [
      { name: "React.js", level: 90 },
      { name: "React Native", level: 85 },
      { name: "JavaScript (ES6+)", level: 92 },
      { name: "HTML/CSS", level: 88 },
      { name: "Tailwind CSS", level: 85 }
    ],
    backend: [
      { name: "Node.js", level: 85 },
      { name: "NestJS", level: 80 },
      { name: "PHP", level: 75 },
      { name: "REST APIs", level: 88 },
      { name: "MySQL", level: 82 }
    ],
    tools: [
      { name: "Git/GitHub", level: 85 },
      { name: "VS Code", level: 90 },
      { name: "Postman", level: 85 },
      { name: "Firebase", level: 80 },
      { name: "Vercel", level: 82 }
    ]
  };

 export const stats = [
    // { icon: Users, value: "2000+", label: "Active Users Served" },
    // { icon: Code2, value: "55+", label: "Bugs Resolved" },
    // { icon: Zap, value: "3", label: "Major Projects" },
    { icon: Award, value: "2.2", label: "Years Experience" }
  ];

 export const technicalSkills = [
    { category: "Frontend", skills: ["React", "React Native", "JavaScript", "HTML/CSS", "Tailwind CSS"], icon: Code2 },
    { category: "Backend", skills: ["Node.js", "NestJS", "PHP", "REST APIs"], icon: Database },
    { category: "Database", skills: ["MySQL", "Postgres", "Firebase"], icon: Layers },
    { category: "Tools", skills: ["VS Code", "Git/GitHub", "Postman", "Bitbucket", "Cursor AI"], icon: Target },
    { category: "Concepts", skills: ["OOP", "Async Programming", "Higher Order Functions", "Design Patterns"], icon: Sparkles }
  ];

 export const experience = [
    {
      role: "Software Developer",
      company: "Schoofi Software Solution Pvt Ltd",
      location: "Delhi, India",
      period: "Aug 2023 - Present",
      description: "Leading development of mission-critical business solutions with focus on scalability and performance. Working on both web and mobile platforms serving thousands of users.",
      highlights: [
        "Developed QR-based feedback system for 2000+ users",
        "Built work permit feature and trend analysis dashboard",
        "Migrated mobile API to NestJS with improved scalability",
        "Implemented geofencing and real-time tracking features",
        "Resolved 55+ production bugs and optimized performance"
      ]
    }
  ];

 export const education = {
    degree: "Bachelor of Technology in Computer Science",
    institution: "ACET - Punjab Technical University",
    period: "2019 - 2023",
    coursework: [
      "Object Oriented Programming",
      "Data Structures and Algorithms",
      "Database Management Systems",
      "Operating Systems",
      "Computer Networks",
      "Web Development",
      "Machine Learning",
      "Information Security"
    ]
  };