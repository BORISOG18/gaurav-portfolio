export type Certification = {
  id: string;
  title: string;
  organization: string;
  cohort: string;
  grade: string;
  status: string;
  includes?: string[];
  /** Replace the placeholder file in public/certificates/ with the real PDF or image. */
  file: string;
  fileType: "pdf" | "image";
};

export const certifications: Certification[] = [
  {
    id: "google-android-developer",
    title: "Google Android Developer",
    organization: "Google for Developers",
    cohort: "Cohort 12",
    grade: "A",
    status: "Completed",
    file: "/certificates/google-android-developer.pdf",
    fileType: "pdf",
  },
  {
    id: "google-ai-ml",
    title: "Google AI-ML",
    organization: "Google for Developers",
    cohort: "Cohort 14",
    grade: "O",
    status: "Completed",
    file: "/certificates/google-ai-ml.pdf",
    fileType: "pdf",
  },
  {
    id: "siemens-data-science-master",
    title: "Siemens Data Science Master",
    organization: "Siemens",
    cohort: "Cohort 15",
    grade: "O",
    status: "Completed",
    file: "/certificates/siemens-data-science-master.pdf",
    fileType: "pdf",
  },
  {
    id: "python-full-stack",
    title: "Python Full Stack Development + Project",
    organization: "EduSkills Academy",
    cohort: "Cohort 16",
    grade: "O",
    status: "Completed",
    includes: ["Offer Letter", "Project Report", "Course Certificate"],
    file: "/certificates/python-full-stack.pdf",
    fileType: "pdf",
  },
];
