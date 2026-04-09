export interface Project {
  id: number;
  title: string;
  summary: string;
  description: string;
  tags: string[];
  category: "Web" | "IoT" | "Mobile" | "Security" | "Systems";
  featured?: boolean;
  icon: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Linux Website Hosting & Database Integration",
    summary:
      "Hosted and deployed secure PHP/MySQL apps on Ubuntu with HTTPS, security headers, and Zabbix monitoring.",
    description:
      "Hosted and deployed secure PHP/MySQL web applications on Ubuntu Server running Apache. Configured HTTPS with Let's Encrypt, implemented security headers, user access controls, input validation, IP tables firewall rules, and integrated Zabbix for real-time system and application monitoring. Demonstrated full-stack server management including DNS configuration, virtual hosting, and database user privilege management.",
    tags: ["Linux", "Ubuntu", "Apache", "PHP", "MySQL", "HTTPS", "Zabbix", "IP Tables"],
    category: "Systems",
    icon: "🖥️",
  },
  {
    id: 2,
    title: "Analogue-to-Digital Converter Website",
    summary:
      "A Python Flask web app simulating analogue-to-digital conversion with user input forms and backend logic.",
    description:
      "Built a Python Flask application that simulates the analogue-to-digital conversion process. Users input analogue signal values through a web form, and the backend processes the conversion using various ADC techniques (successive approximation, flash, etc.), displaying step-by-step conversion logic and results. Features a clean responsive UI and educational visualizations of the conversion process.",
    tags: ["Python", "Flask", "HTML", "CSS", "JavaScript", "ADC"],
    category: "Web",
    icon: "⚡",
  },
  {
    id: 3,
    title: "IoT Smart Home with Biometric & RFID Security",
    summary:
      "A home automation system with fingerprint and RFID access control for secure door entry, lighting, and appliance control.",
    description:
      "Designed and built a home automation system using microcontrollers (ESP32/Arduino) integrating fingerprint sensor and RFID reader for secure access control. The system enables authenticated door entry, remote lighting control, and appliance switching. Features real-time status monitoring, access logs, and fail-safe mechanisms. Demonstrates convergence of physical security and IoT automation.",
    tags: ["IoT", "ESP32", "Arduino", "RFID", "Biometrics", "C++", "Home Automation"],
    category: "IoT",
    icon: "🏠",
  },
  {
    id: 4,
    title: "IoT Emergency Vehicle Priority System",
    summary:
      "A traffic control system using GPS to detect emergency vehicles and automatically switch traffic lights in real time.",
    description:
      "Designed an intelligent traffic management system that uses GPS modules on emergency vehicles to detect their approach to intersections. Microcontrollers at traffic lights communicate wirelessly (MQTT/RF) to automatically grant green light priority, reducing response times. The system includes a web dashboard for monitoring active priorities and logging events, demonstrating real-time IoT coordination for public safety.",
    tags: ["IoT", "GPS", "MQTT", "ESP32", "Traffic Systems", "Real-time"],
    category: "IoT",
    icon: "🚨",
  },
  {
    id: 5,
    title: "Smart Weather Dashboard",
    summary:
      "A real-time weather monitoring dashboard with sensor data visualization and historical trend analysis.",
    description:
      "Built a responsive web dashboard for real-time weather monitoring using modern web technologies. The system pulls data from weather APIs and IoT sensors to display current conditions, forecasts, and historical trends through interactive charts and graphs. Features include location-based weather tracking, customizable alert thresholds, and data export capabilities for analysis.",
    tags: ["React", "Node.js", "REST API", "Chart.js", "Tailwind CSS", "WebSocket"],
    category: "Web",
    icon: "🌤️",
  },
  {
    id: 6,
    title: "Network Security Audit Tool",
    summary:
      "A Python-based network scanner and vulnerability assessment tool for identifying security weaknesses.",
    description:
      "Developed a comprehensive network security auditing tool using Python. The tool performs automated network discovery, port scanning, service enumeration, and vulnerability assessment. Features include report generation with risk scoring, remediation recommendations, and scheduled scan capabilities. Integrates with common vulnerability databases for accurate threat classification and supports multiple output formats for compliance reporting.",
    tags: ["Python", "Nmap", "Scapy", "Network Security", "Vulnerability Assessment", "CLI"],
    category: "Security",
    featured: true,
    icon: "🛡️",
  },
];
