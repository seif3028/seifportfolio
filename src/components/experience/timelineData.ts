export interface TimelineEntry {
  id: number;
  type: "work" | "education";
  role: string;
  company: string;
  period: string;
  current?: boolean;
  bullets: string[];
  tags?: string[];
}

export const workExperience: TimelineEntry[] = [
  {
    id: 1,
    type: "work",
    role: "System & Database Administrator (Traineeship)",
    company: "OceanDBA Ltd",
    period: "MAR 2026 – PRESENT",
    current: true,
    bullets: [
      "Undertaken an Advanced Database Administrator Training Program.",
      "Assisted in managing and maintaining databases, including data organization, updates, and basic performance monitoring.",
      "Supported database backup, recovery, and troubleshooting tasks to help ensure data availability and reliability.",
      "Worked with technical teams to write queries, generate reports, and maintain data accuracy and integrity.",
    ],
    tags: ["MySQL", "MariaDB", "PostgreSQL", "Linux", "Zabbix"],
  },
  {
    id: 2,
    type: "work",
    role: "System Administrator (Internship)",
    company: "OceanDBA Ltd",
    period: "JAN 2026 – MAR 2026",
    bullets: [
      "Undertaken an Advanced System Administrator Training Program.",
      "Provided first-line technical support by monitoring systems, assisting clients with technical issues, and helping resolve incidents on time.",
      "Created and tracked support tickets in Redmine, escalating issues to Level 2/3 teams when necessary and ensuring proper follow-up.",
      "Assisted with Linux system administration tasks, configuration, and collaboration with service and technical teams to improve support processes.",
    ],
    tags: ["Linux", "Redmine", "Nginx", "Apache", "Caddy"],
  },
  {
    id: 3,
    type: "work",
    role: "Full Stack Developer (Internship)",
    company: "OceanDBA Ltd",
    period: "SEPT 2025 – DEC 2025",
    bullets: [
      "Assisted in developing and maintaining web applications using Laravel and Vue.js.",
      "Supported REST API development, debugging, deployments, and automation to improve system performance and reliability.",
      "Collaborated with technical teams to troubleshoot issues, enhance features, and follow clean development practices.",
    ],
    tags: ["Laravel", "Vue.js", "PHP", "REST API", "Docker"],
  },
  {
    id: 4,
    type: "work",
    role: "Stock Manager & Pricing",
    company: "Fast Click LTD",
    period: "MAY 2024 – JAN 2025",
    bullets: [
      "Managed sales operations, processed payments, handled customer queries, and updated website pricing to keep product information accurate.",
      "Assisted with stock management by monitoring inventory levels, supporting timely reordering, and working with the team to optimize stock availability.",
    ],
    tags: ["E-commerce", "Inventory", "Customer Service"],
  },
];

export const education: TimelineEntry[] = [
  {
    id: 5,
    type: "education",
    role: "Cybersecurity Expert Master's Program",
    company: "SimpliLearn",
    period: "2025 – PRESENT",
    current: true,
    bullets: [
      "Comprehensive cybersecurity curriculum covering ethical hacking, penetration testing, network security, and digital forensics.",
      "Hands-on labs and real-world projects aligned with industry certifications.",
    ],
    tags: ["Cybersecurity", "Penetration Testing", "Network Security"],
  },
  {
    id: 6,
    type: "education",
    role: "Diploma in IT (Cybersecurity)",
    company: "Polytechnics Mauritius LTD",
    period: "2023 – PRESENT",
    current: true,
    bullets: [
      "Studying cybersecurity fundamentals, web application security, risk management, and secure software development.",
      "Building practical skills through projects including IoT systems, web apps, and database administration.",
    ],
    tags: ["IT", "Cybersecurity", "Web Development", "IoT"],
  },
  {
    id: 7,
    type: "education",
    role: "School Certificate",
    company: "Secondary School",
    period: "2022",
    bullets: [
      "Computer Science A, French A, Mathematics B, Physics B, Chemistry C, English C.",
    ],
    tags: ["Computer Science", "Mathematics", "Physics"],
  },
];
