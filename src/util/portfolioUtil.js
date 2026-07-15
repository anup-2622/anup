
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
    gradient: "from-gold-500 to-amber-600"
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
    gradient: "from-gold-600 to-amber-500"
  },
  {
    title: "Airbnb Data Engineering Pipeline",
    category: "Data Engineering",
    company: "Personal Project",
    period: "2025",
    description: "End-to-end ELT data pipeline using dbt and Snowflake, implementing a medallion architecture (Bronze → Silver → Gold) to transform raw Airbnb data into analytics-ready dimension and fact tables with SCD Type 2 snapshots.",
    tags: ["dbt", "Snowflake", "Python", "SQL", "Jinja", "ELT"],
    achievements: [
      "Built metadata-driven pipeline for scalable joins across Silver tables",
      "Implemented incremental models for efficient Bronze and Silver layers",
      "Created SCD Type 2 snapshots for dimension tracking (listings, hosts, bookings)",
      "Designed reusable Jinja macros (tag, multiply, trimmer) for DRY transformations",
      "Built Gold layer with OBT, fact tables, and ephemeral CTE models"
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    gradient: "from-emerald-500 to-teal-500"
  }
];


export const skills = {
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
  dataEngineering: [
    { name: "Python", level: 85 },
    { name: "SQL", level: 90 },
    { name: "dbt", level: 82 },
    { name: "Snowflake", level: 80 },
    { name: "Databricks", level: 78 },
    { name: "Apache Spark", level: 75 },
    { name: "AWS", level: 80 },
    { name: "ETL Pipelines", level: 82 }
  ],
  tools: [
    { name: "Git/GitHub", level: 85 },
    { name: "VS Code", level: 90 },
    { name: "Postman", level: 85 },
    { name: "Firebase", level: 80 },
    { name: "Vercel", level: 82 },
    { name: "uv", level: 78 }
  ]
};

export const stats = [
  // { icon: Users, value: "2000+", label: "Active Users Served" },
  // { icon: Code2, value: "55+", label: "Bugs Resolved" },
  // { icon: Zap, value: "3", label: "Major Projects" },
  { icon: Award, value: "2.2", label: "Years Experience", dynamic: true }
];

export const technicalSkills = [
  { category: "Frontend", skills: ["React", "React Native", "JavaScript", "HTML/CSS", "Tailwind CSS"], icon: Code2 },
  { category: "Backend", skills: ["Node.js", "NestJS", "PHP", "REST APIs"], icon: Database },
  { category: "Data Engineering", skills: ["Python", "SQL", "dbt", "Snowflake", "Databricks", "Apache Spark", "Airflow", "Kafka", "AWS Redshift"], icon: Database },
  { category: "Database", skills: ["MySQL", "Postgres", "Firebase"], icon: Layers },
  { category: "Tools", skills: ["VS Code", "Git/GitHub", "Postman", "Bitbucket", "Cursor AI", "uv", "sqlfmt"], icon: Target },
  { category: "Concepts", skills: ["OOP", "Async Programming", "Higher Order Functions", "Design Patterns", "ETL", "ELT", "Data Warehousing", "Medallion Architecture", "SCD Type 2", "Metadata-Driven Pipelines"], icon: Sparkles }
];

export const experience = [
  {
    role: "Data Engineer",
    company: "Schoofi Software Solutions Pvt. Ltd.",
    location: "Delhi, India",
    period: "January 2024 – Present",
    highlights: [
      "Designed ETL pipelines to consolidate multi-outlet audit data into a centralized MySQL data warehouse, powering BI reporting.",
      "Automated data ingestion workflows via Python and Shell scripting, cutting manual effort by 60% and boosting pipeline reliability.",
      "Authored complex SQL analytical queries for KPI tracking, trend analysis, and compliance metrics consumed by business stakeholders."
    ]
  },
  {
    role: "Software Engineer",
    company: "Schoofi Software Solutions Pvt. Ltd.",
    location: "Delhi, India",
    period: "August 2023 – January 2024",
    highlights: [
      "Built a scalable Auditing platform with JavaScript, NestJS, jQuery, and MySQL, supporting real-time compliance tracking across multiple retail outlets.",
      "Engineered data visualization dashboards and optimized SQL queries, cutting page load times and delivering actionable real-time analytics.",
      "Shipped cross-platform mobile features in React Native and drove CI/CD improvements within an Agile team."
    ]
  }
];

export const blogPosts = [
  {
    id: 1,
    title: "Building Scalable Data Pipelines with dbt and Snowflake",
    excerpt: "A deep dive into implementing a medallion architecture using dbt, Snowflake, and Jinja macros for production-grade ELT workflows.",
    date: "2025-06-15",
    readTime: "8 min read",
    tags: ["dbt", "Snowflake", "Data Engineering", "ELT"],
    category: "Data Engineering",
    slug: "scalable-data-pipelines-dbt-snowflake",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    url: "#",
  },
  {
    id: 2,
    title: "SCD Type 2 Implementation: Tracking History in Your Data Warehouse",
    excerpt: "Understanding Slowly Changing Dimensions and how to implement SCD Type 2 snapshots for dimension tracking in modern data stacks.",
    date: "2025-05-20",
    readTime: "6 min read",
    tags: ["Data Warehousing", "dbt", "SQL", "SCD Type 2"],
    category: "Data Engineering",
    slug: "scd-type-2-data-warehouse",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&h=400&fit=crop",
    url: "#",
  },
  {
    id: 3,
    title: "NestJS Migration: Scaling Node.js APIs for Production",
    excerpt: "How we migrated a legacy Express API to NestJS, handling 1000+ concurrent users with improved architecture and type safety.",
    date: "2025-04-10",
    readTime: "7 min read",
    tags: ["NestJS", "Node.js", "TypeScript", "API"],
    category: "Backend",
    slug: "nestjs-migration-scaling-apis",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop",
    url: "#",
  },
  {
    id: 4,
    title: "Metadata-Driven Pipelines: Building Flexible Data Transformations",
    excerpt: "Designing metadata-driven pipelines that adapt to schema changes automatically using Jinja macros and dynamic configurations.",
    date: "2025-03-05",
    readTime: "5 min read",
    tags: ["Python", "dbt", "Jinja", "Data Engineering"],
    category: "Data Engineering",
    slug: "metadata-driven-pipelines",
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600&h=400&fit=crop",
    url: "#",
  },
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