export type ProjectStatus = "Completed Project" | "Academic Project" | "Concept / In Development";

export type Project = {
  id: string;
  title: string;
  category: string;
  status: ProjectStatus;
  featured?: boolean;
  description: string;
  featuresLabel: string;
  features: string[];
  tech: string[];
  extra?: { label: string; items: string[] };
  objective?: string;
  github?: string | null;
  demo?: string | null;
};

export const projects: Project[] = [
  {
    id: "ai-financial-advisor",
    title: "AI-Based Financial Advisor for Students",
    category: "MERN Stack / FinTech / Student Application",
    status: "Completed Project",
    featured: true,
    description:
      "A student-focused financial management application designed to help students manage income, expenses and personal finances.",
    featuresLabel: "Features",
    features: [
      "User registration",
      "Login",
      "JWT authentication",
      "Personal dashboard",
      "Income management",
      "Expense tracking",
      "Expense categorization",
      "Spending analysis",
      "Charts and visualizations",
      "Financial insights",
      "Excel export",
      "Responsive UI",
    ],
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "JavaScript", "JWT", "REST APIs"],
    github: null,
    demo: null,
  },
  {
    id: "student-finance-tracker",
    title: "Student Finance Tracker",
    category: "MERN Stack",
    status: "Completed Project",
    description:
      "A practical web application for tracking student income, expenses and financial records.",
    featuresLabel: "Features",
    features: [
      "User authentication",
      "Login/signup",
      "Income management",
      "Expense management",
      "Dashboard",
      "Financial records",
      "Database connectivity",
      "Responsive interface",
    ],
    tech: ["React", "Node.js", "Express", "MongoDB", "JavaScript", "JWT"],
    github: null,
    demo: null,
  },
  {
    id: "pharma-management",
    title: "Pharma Management System",
    category: "Web Development / Database",
    status: "Academic Project",
    description:
      "A web-based pharmacy management application designed to manage medicine-related records and inventory.",
    featuresLabel: "Features",
    features: [
      "Medicine management",
      "Inventory management",
      "Pharmacy records",
      "Database storage",
      "CRUD operations",
      "Search functionality",
      "Web interface",
    ],
    tech: ["PHP", "HTML", "CSS", "JavaScript", "SQL"],
    github: null,
    demo: null,
  },
  {
    id: "student-result-system",
    title: "Student Result Management System",
    category: "Kotlin / Collections",
    status: "Academic Project",
    description:
      "A student result management application developed to practice Kotlin Collections and structured data management.",
    featuresLabel: "Concepts",
    features: [
      "List",
      "MutableList",
      "Set",
      "Map",
      "Student records",
      "Roll numbers",
      "Student names",
      "Marks",
      "Add/remove operations",
    ],
    tech: ["Kotlin"],
    github: null,
    demo: null,
  },
  {
    id: "cloud-code-storage",
    title: "Student Cloud Code Storage System",
    category: "Cloud / Web Development / GitHub",
    status: "Concept / In Development",
    description:
      "A proposed platform for students to securely store and organize programming laboratory assignments and source code.",
    featuresLabel: "Planned features",
    features: [
      "Student login",
      "Subject-wise organization",
      "Code upload",
      "Lab assignment storage",
      "Code retrieval",
      "GitHub integration",
      "Cloud storage",
      "Student dashboard",
    ],
    tech: ["Cloud Storage", "GitHub", "Web Development"],
    objective:
      "Provide students with a centralized platform for storing programming lab work and accessing their code from different devices.",
    github: null,
    demo: null,
  },
  {
    id: "hybrid-wind-solar",
    title: "Hybrid Wind & Solar Energy System",
    category: "Design Thinking & Innovation",
    status: "Academic Project",
    description:
      "A renewable-energy concept combining vertical-axis wind turbines and solar panels to generate electricity along highways.",
    featuresLabel: "Concepts",
    features: [
      "Vertical-axis wind turbine",
      "Savonius turbine",
      "Solar panels",
      "Renewable energy generation",
      "Inverter",
      "Energy storage",
      "Microgrid",
      "Highway-based renewable energy",
    ],
    tech: ["Design Thinking", "System Design", "Research"],
    extra: {
      label: "Skills demonstrated",
      items: [
        "Design Thinking",
        "Problem Solving",
        "System Design",
        "Renewable Energy Concepts",
        "Research",
        "Teamwork",
        "Presentation",
      ],
    },
    github: null,
    demo: null,
  },
];

export const otherConcepts = [
  {
    title: "Facial Recognition Attendance System",
    description: "Automated attendance concept using facial recognition.",
    items: [
      "Student identification",
      "Face recognition",
      "Automated attendance",
      "Attendance records",
      "Reduced manual work",
    ],
  },
  {
    title: "Employee & Teacher Management Application",
    description: "Management platform concept for institutions and teams.",
    items: [
      "Employee/teacher profiles",
      "Chat",
      "Punch-in/punch-out",
      "Video conferencing",
      "Task notifications",
      "Lecture reminders",
      "Attendance management",
    ],
  },
  {
    title: "Smart Canteen Application",
    description: "Digital college canteen concept for ordering and payments.",
    items: [
      "Digital menu",
      "Food prices",
      "Ingredients",
      "Waiting-time information",
      "Mobile ordering",
      "Online payment",
      "Cash payment",
      "Digital receipts",
      "Reduced paper usage",
    ],
  },
];
