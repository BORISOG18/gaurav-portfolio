export type SkillLevel = "Learning" | "Familiar" | "Hands-on" | "Academic" | "Project Experience";

export type Skill = {
  name: string;
  level: SkillLevel;
};

export type SkillCategory = {
  id: string;
  label: string;
  skills: Skill[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: "programming",
    label: "Programming",
    skills: [
      { name: "C", level: "Academic" },
      { name: "C++", level: "Academic" },
      { name: "Java", level: "Academic" },
      { name: "Python", level: "Hands-on" },
      { name: "Kotlin", level: "Project Experience" },
      { name: "JavaScript", level: "Project Experience" },
      { name: "PHP", level: "Project Experience" },
      { name: "SQL", level: "Hands-on" },
    ],
  },
  {
    id: "frontend",
    label: "Frontend",
    skills: [
      { name: "HTML", level: "Hands-on" },
      { name: "CSS", level: "Hands-on" },
      { name: "JavaScript", level: "Project Experience" },
      { name: "React.js", level: "Project Experience" },
      { name: "Responsive Web Development", level: "Hands-on" },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    skills: [
      { name: "Node.js", level: "Project Experience" },
      { name: "Express.js", level: "Project Experience" },
      { name: "PHP", level: "Project Experience" },
      { name: "REST APIs", level: "Hands-on" },
      { name: "JWT Authentication", level: "Hands-on" },
    ],
  },
  {
    id: "databases",
    label: "Databases",
    skills: [
      { name: "MongoDB", level: "Project Experience" },
      { name: "MySQL", level: "Hands-on" },
      { name: "SQL", level: "Hands-on" },
      { name: "CRUD", level: "Hands-on" },
      { name: "Database Management", level: "Academic" },
    ],
  },
  {
    id: "data-ai",
    label: "Data Science / AI",
    skills: [
      { name: "Python for Data Science", level: "Learning" },
      { name: "Data Analysis", level: "Learning" },
      { name: "Probability", level: "Academic" },
      { name: "Statistics", level: "Academic" },
      { name: "Linear Algebra", level: "Academic" },
      { name: "Machine Learning Fundamentals", level: "Learning" },
      { name: "Artificial Intelligence Fundamentals", level: "Learning" },
      { name: "Data Visualization", level: "Learning" },
      { name: "Numerical Methods", level: "Academic" },
    ],
  },
  {
    id: "tools",
    label: "Tools",
    skills: [
      { name: "Git", level: "Hands-on" },
      { name: "GitHub", level: "Hands-on" },
      { name: "VS Code", level: "Hands-on" },
      { name: "Vite", level: "Familiar" },
    ],
  },
];
