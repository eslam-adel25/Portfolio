import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Code2,
  Pencil,
  Smartphone,
  Gauge,
  Puzzle,
  Layers,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";

interface SkillItem {
  col1: string;
  col2: string;
}

interface ExpertiseCard {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  glowRgb: string;
  skills: SkillItem[];
}

const expertiseData: ExpertiseCard[] = [
  {
    number: "01",
    title: "Frontend Engineering",
    description:
      "Creating fast, accessible, and maintainable user interfaces with modern frontend technologies.",
    icon: Code2,
    color: "#00d4ff",
    glowRgb: "0, 212, 255",
    skills: [
      { col1: "React", col2: "Tailwind CSS" },
      { col1: "Next.js", col2: "HTML5 / CSS3" },
      { col1: "TypeScript", col2: "JavaScript (ES6+)" },
    ],
  },
  {
    number: "02",
    title: "UI/UX Engineering",
    description:
      "Turning design into beautiful, intuitive and user-friendly interfaces with pixel-perfect implementation.",
    icon: Pencil,
    color: "#a855f7",
    glowRgb: "168, 85, 247",
    skills: [
      { col1: "Figma to Code", col2: "Micro Interactions" },
      { col1: "Component Design", col2: "Framer Motion" },
      { col1: "Design Systems", col2: "Accessibility (a11y)" },
    ],
  },
  {
    number: "03",
    title: "Responsive Design",
    description:
      "Creating seamless experiences across all devices with modern, mobile-first approaches.",
    icon: Smartphone,
    color: "#06b6d4",
    glowRgb: "6, 182, 212",
    skills: [
      { col1: "Mobile First", col2: "Flexbox / Grid" },
      { col1: "Breakpoints", col2: "Accessibility" },
      { col1: "Cross Browser", col2: "PWA Support" },
    ],
  },
  {
    number: "04",
    title: "Performance Optimization",
    description:
      "Optimizing applications for speed, SEO and the best performance practices.",
    icon: Gauge,
    color: "#eab308",
    glowRgb: "234, 179, 8",
    skills: [
      { col1: "Code Splitting", col2: "Lighthouse Score" },
      { col1: "Lazy Loading", col2: "SEO Optimization" },
      { col1: "Caching Strategies", col2: "Core Web Vitals" },
    ],
  },
  {
    number: "05",
    title: "API Integration",
    description:
      "Integrating RESTful APIs and third-party services to build powerful functionalities.",
    icon: Puzzle,
    color: "#22c55e",
    glowRgb: "34, 197, 94",
    skills: [
      { col1: "RESTful APIs", col2: "Axios / Fetch" },
      { col1: "Authentication", col2: "WebSockets" },
      { col1: "Authentication", col2: "Real-time Data" },
    ],
  },
  {
    number: "06",
    title: "Developer Tooling",
    description:
      "Working with the latest tools and technologies to deliver future-ready solutions.",
    icon: Layers,
    color: "#ec4899",
    glowRgb: "236, 72, 153",
    skills: [
      { col1: "Git & GitHub", col2: "CI / CD" },
      { col1: "Vite / Webpack", col2: "Docker Basics" },
      { col1: "ESLint / Prettier", col2: "GitHub Actions" },
    ],
  },
  {
    number: "07",
    title: "Frontend Architecture",
    description:
      "Architecting modern frontend applications with reusable components, organized codebases, and scalable design patterns.",
    icon: Puzzle,
    color: "#22c55e",
    glowRgb: "34, 197, 94",
    skills: [
      { col1: "Component Architecture", col2: "State Management" },
      { col1: "Reusable Components", col2: "Folder Structure" },
      { col1: "Code Organization", col2: "Performance Patterns" },
    ],
  },
];

export const ExpertiseSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  // Floating Glass Orbs configuration with Apple/Vercel smooth continuous floating
  const floatingOrbs = [
    // Existing Orbs
    {
      size: "w-36 h-36 lg:w-48 lg:h-48",
      top: "-2%",
      left: "1%",
      gradient:
        "radial-gradient(circle at 30% 30%, rgba(168, 85, 247, 0.45), rgba(10, 15, 30, 0.95))",
      shadow:
        "0 0 35px rgba(168, 85, 247, 0.25), inset 2px 2px 10px rgba(255, 255, 255, 0.35)",
      animate: {
        y: [-10, 15, -10],
        x: [-5, 10, -5],
        rotate: [0, 10, 0],
        scale: [1, 1.05, 1],
      },
      duration: 14,
    },
    {
      size: "w-16 h-16 lg:w-20 lg:h-20",
      top: "7%",
      left: "9%",
      gradient:
        "radial-gradient(circle at 35% 35%, rgba(0, 212, 255, 0.65), rgba(5, 12, 28, 0.95))",
      shadow:
        "0 0 25px rgba(0, 212, 255, 0.4), inset 2px 2px 8px rgba(255, 255, 255, 0.5)",
      animate: {
        y: [12, -12, 12],
        x: [8, -8, 8],
        rotate: [0, -15, 0],
        scale: [1, 1.08, 1],
      },
      duration: 11,
    },
    {
      size: "w-20 h-20 lg:w-28 lg:h-28",
      top: "4%",
      right: "20%",
      gradient:
        "radial-gradient(circle at 30% 30%, rgba(6, 182, 212, 0.5), rgba(8, 12, 26, 0.9))",
      shadow:
        "0 0 30px rgba(6, 182, 212, 0.3), inset 2px 2px 8px rgba(255, 255, 255, 0.4)",
      animate: { y: [-15, 10, -15], x: [10, -5, 10], scale: [1, 1.04, 1] },
      duration: 15,
    },
    {
      size: "w-40 h-40 lg:w-56 lg:h-56",
      top: "-4%",
      right: "-3%",
      gradient:
        "radial-gradient(circle at 35% 35%, rgba(0, 120, 255, 0.4), rgba(7, 9, 20, 0.95))",
      shadow:
        "0 0 45px rgba(0, 212, 255, 0.2), inset 3px 3px 12px rgba(255, 255, 255, 0.3)",
      animate: {
        y: [10, -18, 10],
        x: [-8, 8, -8],
        rotate: [0, 8, 0],
        scale: [1, 1.03, 1],
      },
      duration: 17,
    },
    {
      size: "w-14 h-14 lg:w-18 lg:h-18",
      top: "48%",
      right: "2%",
      gradient:
        "radial-gradient(circle at 35% 35%, rgba(0, 212, 255, 0.55), rgba(10, 14, 32, 0.9))",
      shadow:
        "0 0 22px rgba(0, 212, 255, 0.35), inset 2px 2px 6px rgba(255, 255, 255, 0.45)",
      animate: { y: [-12, 14, -12], x: [-6, 6, -6], scale: [1, 1.07, 1] },
      duration: 12,
    },
    {
      size: "w-24 h-24 lg:w-36 lg:h-36",
      bottom: "10%",
      right: "0%",
      gradient:
        "radial-gradient(circle at 30% 30%, rgba(139, 92, 246, 0.45), rgba(9, 11, 24, 0.95))",
      shadow:
        "0 0 35px rgba(139, 92, 246, 0.25), inset 2px 2px 10px rgba(255, 255, 255, 0.35)",
      animate: {
        y: [14, -14, 14],
        x: [8, -8, 8],
        rotate: [0, -12, 0],
        scale: [1, 1.05, 1],
      },
      duration: 14.5,
    },
    {
      size: "w-16 h-16 lg:w-24 lg:h-24",
      bottom: "18%",
      left: "1%",
      gradient:
        "radial-gradient(circle at 35% 35%, rgba(56, 189, 248, 0.45), rgba(8, 10, 22, 0.9))",
      shadow:
        "0 0 25px rgba(56, 189, 248, 0.3), inset 2px 2px 8px rgba(255, 255, 255, 0.4)",
      animate: { y: [-10, 12, -10], x: [-10, 5, -10], scale: [1, 1.06, 1] },
      duration: 11.5,
    },

    // Additional Glass Spheres for richer depth & space ambience
    {
      size: "w-10 h-10 lg:w-14 lg:h-14",
      top: "15%",
      left: "32%",
      gradient:
        "radial-gradient(circle at 30% 30%, rgba(236, 72, 153, 0.5), rgba(12, 10, 26, 0.92))",
      shadow:
        "0 0 20px rgba(236, 72, 153, 0.35), inset 1.5px 1.5px 6px rgba(255, 255, 255, 0.5)",
      animate: { y: [-8, 12, -8], x: [6, -6, 6], scale: [1, 1.09, 1] },
      duration: 10,
    },
    {
      size: "w-24 h-24 lg:w-32 lg:h-32",
      top: "22%",
      right: "12%",
      gradient:
        "radial-gradient(circle at 35% 35%, rgba(147, 51, 234, 0.4), rgba(6, 8, 20, 0.95))",
      shadow:
        "0 0 30px rgba(147, 51, 234, 0.25), inset 2px 2px 8px rgba(255, 255, 255, 0.35)",
      animate: {
        y: [15, -15, 15],
        x: [-10, 10, -10],
        rotate: [0, 15, 0],
        scale: [1, 1.04, 1],
      },
      duration: 16,
    },
    {
      size: "w-8 h-8 lg:w-12 lg:h-12",
      top: "38%",
      left: "3%",
      gradient:
        "radial-gradient(circle at 35% 35%, rgba(0, 212, 255, 0.6), rgba(8, 12, 28, 0.9))",
      shadow:
        "0 0 18px rgba(0, 212, 255, 0.4), inset 1px 1px 5px rgba(255, 255, 255, 0.5)",
      animate: { y: [-12, 10, -12], x: [8, -8, 8], scale: [1, 1.1, 1] },
      duration: 9.5,
    },
    {
      size: "w-14 h-14 lg:w-20 lg:h-20",
      top: "42%",
      left: "38%",
      gradient:
        "radial-gradient(circle at 30% 30%, rgba(34, 197, 94, 0.45), rgba(7, 14, 20, 0.95))",
      shadow:
        "0 0 22px rgba(34, 197, 94, 0.3), inset 2px 2px 6px rgba(255, 255, 255, 0.4)",
      animate: { y: [10, -14, 10], x: [-7, 7, -7], scale: [1, 1.05, 1] },
      duration: 13,
    },
    {
      size: "w-12 h-12 lg:w-16 lg:h-16",
      top: "55%",
      right: "28%",
      gradient:
        "radial-gradient(circle at 35% 35%, rgba(234, 179, 8, 0.5), rgba(15, 12, 8, 0.92))",
      shadow:
        "0 0 20px rgba(234, 179, 8, 0.3), inset 1.5px 1.5px 6px rgba(255, 255, 255, 0.45)",
      animate: { y: [-10, 10, -10], x: [9, -9, 9], scale: [1, 1.07, 1] },
      duration: 11,
    },
    {
      size: "w-28 h-28 lg:w-40 lg:h-40",
      top: "60%",
      left: "-4%",
      gradient:
        "radial-gradient(circle at 30% 30%, rgba(59, 130, 246, 0.35), rgba(8, 10, 24, 0.95))",
      shadow:
        "0 0 35px rgba(59, 130, 246, 0.2), inset 2px 2px 10px rgba(255, 255, 255, 0.3)",
      animate: {
        y: [12, -16, 12],
        x: [10, -6, 10],
        rotate: [0, -10, 0],
        scale: [1, 1.03, 1],
      },
      duration: 18,
    },
    {
      size: "w-10 h-10 lg:w-14 lg:h-14",
      bottom: "30%",
      right: "6%",
      gradient:
        "radial-gradient(circle at 35% 35%, rgba(168, 85, 247, 0.55), rgba(10, 8, 22, 0.9))",
      shadow:
        "0 0 20px rgba(168, 85, 247, 0.35), inset 1.5px 1.5px 5px rgba(255, 255, 255, 0.45)",
      animate: { y: [-11, 13, -11], x: [-8, 8, -8], scale: [1, 1.08, 1] },
      duration: 10.5,
    },
    {
      size: "w-20 h-20 lg:w-28 lg:h-28",
      bottom: "12%",
      left: "26%",
      gradient:
        "radial-gradient(circle at 30% 30%, rgba(6, 182, 212, 0.4), rgba(6, 12, 24, 0.92))",
      shadow:
        "0 0 28px rgba(6, 182, 212, 0.25), inset 2px 2px 8px rgba(255, 255, 255, 0.35)",
      animate: { y: [14, -10, 14], x: [-6, 10, -6], scale: [1, 1.05, 1] },
      duration: 15,
    },
    {
      size: "w-8 h-8 lg:w-12 lg:h-12",
      bottom: "4%",
      left: "48%",
      gradient:
        "radial-gradient(circle at 35% 35%, rgba(0, 212, 255, 0.65), rgba(6, 10, 24, 0.9))",
      shadow:
        "0 0 16px rgba(0, 212, 255, 0.4), inset 1px 1px 4px rgba(255, 255, 255, 0.5)",
      animate: { y: [-9, 9, -9], x: [7, -7, 7], scale: [1, 1.1, 1] },
      duration: 8.5,
    },
    {
      size: "w-32 h-32 lg:w-44 lg:h-44",
      bottom: "-3%",
      right: "25%",
      gradient:
        "radial-gradient(circle at 35% 35%, rgba(236, 72, 153, 0.35), rgba(12, 8, 22, 0.95))",
      shadow:
        "0 0 40px rgba(236, 72, 153, 0.2), inset 3px 3px 10px rgba(255, 255, 255, 0.3)",
      animate: {
        y: [-15, 12, -15],
        x: [-8, 8, -8],
        rotate: [0, 8, 0],
        scale: [1, 1.04, 1],
      },
      duration: 17.5,
    },

    // Expanded sphere set (bringing total to ~37 spheres for 2x-3x rich space environment)
    {
      size: "w-6 h-6 lg:w-10 lg:h-10",
      top: "2%",
      left: "22%",
      gradient:
        "radial-gradient(circle at 30% 30%, rgba(0, 212, 255, 0.7), rgba(5, 10, 22, 0.9))",
      shadow:
        "0 0 14px rgba(0, 212, 255, 0.5), inset 1px 1px 4px rgba(255, 255, 255, 0.6)",
      animate: { y: [-6, 8, -6], x: [4, -4, 4], scale: [1, 1.12, 1] },
      duration: 7.5,
    },
    {
      size: "w-14 h-14 lg:w-20 lg:h-20",
      top: "10%",
      left: "60%",
      gradient:
        "radial-gradient(circle at 35% 35%, rgba(168, 85, 247, 0.5), rgba(10, 10, 28, 0.92))",
      shadow:
        "0 0 24px rgba(168, 85, 247, 0.3), inset 2px 2px 7px rgba(255, 255, 255, 0.4)",
      animate: {
        y: [12, -12, 12],
        x: [-8, 8, -8],
        rotate: [0, -10, 0],
        scale: [1, 1.06, 1],
      },
      duration: 12.5,
    },
    {
      size: "w-18 h-18 lg:w-24 lg:h-24",
      top: "18%",
      right: "38%",
      gradient:
        "radial-gradient(circle at 30% 30%, rgba(6, 182, 212, 0.45), rgba(8, 14, 28, 0.9))",
      shadow:
        "0 0 26px rgba(6, 182, 212, 0.3), inset 2px 2px 8px rgba(255, 255, 255, 0.4)",
      animate: { y: [-14, 10, -14], x: [10, -10, 10], scale: [1, 1.05, 1] },
      duration: 14,
    },
    {
      size: "w-8 h-8 lg:w-12 lg:h-12",
      top: "28%",
      left: "18%",
      gradient:
        "radial-gradient(circle at 35% 35%, rgba(236, 72, 153, 0.6), rgba(14, 8, 22, 0.9))",
      shadow:
        "0 0 16px rgba(236, 72, 153, 0.4), inset 1px 1px 5px rgba(255, 255, 255, 0.5)",
      animate: { y: [8, -10, 8], x: [-6, 6, -6], scale: [1, 1.1, 1] },
      duration: 9,
    },
    {
      size: "w-22 h-22 lg:w-32 lg:h-32",
      top: "32%",
      right: "2%",
      gradient:
        "radial-gradient(circle at 30% 30%, rgba(59, 130, 246, 0.4), rgba(6, 10, 26, 0.95))",
      shadow:
        "0 0 32px rgba(59, 130, 246, 0.25), inset 2px 2px 9px rgba(255, 255, 255, 0.35)",
      animate: {
        y: [-16, 14, -16],
        x: [9, -9, 9],
        rotate: [0, 12, 0],
        scale: [1, 1.04, 1],
      },
      duration: 16.5,
    },
    {
      size: "w-10 h-10 lg:w-14 lg:h-14",
      top: "36%",
      right: "48%",
      gradient:
        "radial-gradient(circle at 35% 35%, rgba(0, 212, 255, 0.55), rgba(8, 12, 24, 0.92))",
      shadow:
        "0 0 22px rgba(0, 212, 255, 0.35), inset 1.5px 1.5px 6px rgba(255, 255, 255, 0.45)",
      animate: { y: [10, -12, 10], x: [8, -8, 8], scale: [1, 1.07, 1] },
      duration: 11,
    },
    {
      size: "w-12 h-12 lg:w-16 lg:h-16",
      top: "48%",
      left: "20%",
      gradient:
        "radial-gradient(circle at 30% 30%, rgba(168, 85, 247, 0.5), rgba(12, 10, 28, 0.92))",
      shadow:
        "0 0 20px rgba(168, 85, 247, 0.3), inset 1.5px 1.5px 6px rgba(255, 255, 255, 0.45)",
      animate: { y: [-12, 12, -12], x: [-6, 6, -6], scale: [1, 1.08, 1] },
      duration: 11.5,
    },
    {
      size: "w-24 h-24 lg:w-36 lg:h-36",
      top: "52%",
      right: "16%",
      gradient:
        "radial-gradient(circle at 35% 35%, rgba(139, 92, 246, 0.38), rgba(8, 8, 22, 0.95))",
      shadow:
        "0 0 35px rgba(139, 92, 246, 0.22), inset 2px 2px 9px rgba(255, 255, 255, 0.35)",
      animate: {
        y: [14, -16, 14],
        x: [-10, 10, -10],
        rotate: [0, -14, 0],
        scale: [1, 1.05, 1],
      },
      duration: 17,
    },
    {
      size: "w-7 h-7 lg:w-10 lg:h-10",
      top: "62%",
      right: "42%",
      gradient:
        "radial-gradient(circle at 30% 30%, rgba(34, 197, 94, 0.6), rgba(6, 14, 18, 0.9))",
      shadow:
        "0 0 16px rgba(34, 197, 94, 0.4), inset 1px 1px 4px rgba(255, 255, 255, 0.5)",
      animate: { y: [-8, 8, -8], x: [6, -6, 6], scale: [1, 1.12, 1] },
      duration: 8,
    },
    {
      size: "w-16 h-16 lg:w-22 lg:h-22",
      top: "68%",
      left: "12%",
      gradient:
        "radial-gradient(circle at 35% 35%, rgba(0, 212, 255, 0.48), rgba(8, 12, 26, 0.92))",
      shadow:
        "0 0 24px rgba(0, 212, 255, 0.32), inset 2px 2px 7px rgba(255, 255, 255, 0.4)",
      animate: { y: [12, -12, 12], x: [8, -8, 8], scale: [1, 1.06, 1] },
      duration: 13,
    },
    {
      size: "w-14 h-14 lg:w-18 lg:h-18",
      bottom: "36%",
      left: "42%",
      gradient:
        "radial-gradient(circle at 30% 30%, rgba(234, 179, 8, 0.45), rgba(16, 12, 6, 0.92))",
      shadow:
        "0 0 22px rgba(234, 179, 8, 0.3), inset 1.5px 1.5px 6px rgba(255, 255, 255, 0.45)",
      animate: { y: [-10, 14, -10], x: [-8, 8, -8], scale: [1, 1.07, 1] },
      duration: 12.5,
    },
    {
      size: "w-20 h-20 lg:w-28 lg:h-28",
      bottom: "25%",
      right: "-2%",
      gradient:
        "radial-gradient(circle at 35% 35%, rgba(236, 72, 153, 0.4), rgba(12, 6, 20, 0.94))",
      shadow:
        "0 0 30px rgba(236, 72, 153, 0.25), inset 2px 2px 8px rgba(255, 255, 255, 0.35)",
      animate: {
        y: [15, -12, 15],
        x: [9, -9, 9],
        rotate: [0, 10, 0],
        scale: [1, 1.05, 1],
      },
      duration: 15.5,
    },
    {
      size: "w-8 h-8 lg:w-12 lg:h-12",
      bottom: "22%",
      left: "18%",
      gradient:
        "radial-gradient(circle at 30% 30%, rgba(56, 189, 248, 0.6), rgba(6, 12, 26, 0.9))",
      shadow:
        "0 0 18px rgba(56, 189, 248, 0.4), inset 1px 1px 5px rgba(255, 255, 255, 0.5)",
      animate: { y: [-9, 9, -9], x: [-5, 5, -5], scale: [1, 1.1, 1] },
      duration: 8.8,
    },
    {
      size: "w-10 h-10 lg:w-14 lg:h-14",
      bottom: "16%",
      right: "40%",
      gradient:
        "radial-gradient(circle at 35% 35%, rgba(168, 85, 247, 0.5), rgba(10, 8, 24, 0.92))",
      shadow:
        "0 0 20px rgba(168, 85, 247, 0.3), inset 1.5px 1.5px 5px rgba(255, 255, 255, 0.45)",
      animate: { y: [10, -10, 10], x: [7, -7, 7], scale: [1, 1.08, 1] },
      duration: 10.2,
    },
    {
      size: "w-28 h-28 lg:w-32 lg:h-32",
      bottom: "2%",
      left: "-2%",
      gradient:
        "radial-gradient(circle at 30% 30%, rgba(0, 212, 255, 0.38), rgba(6, 12, 28, 0.95))",
      shadow:
        "0 0 38px rgba(0, 212, 255, 0.22), inset 2.5px 2.5px 10px rgba(255, 255, 255, 0.35)",
      animate: {
        y: [-14, 16, -14],
        x: [10, -10, 10],
        rotate: [0, -12, 0],
        scale: [1, 1.04, 1],
      },
      duration: 18.5,
    },
    {
      size: "w-12 h-12 lg:w-16 lg:h-16",
      bottom: "1%",
      left: "72%",
      gradient:
        "radial-gradient(circle at 35% 35%, rgba(34, 197, 94, 0.5), rgba(8, 16, 20, 0.92))",
      shadow:
        "0 0 22px rgba(34, 197, 94, 0.32), inset 1.5px 1.5px 6px rgba(255, 255, 255, 0.45)",
      animate: { y: [11, -11, 11], x: [-8, 8, -8], scale: [1, 1.07, 1] },
      duration: 11.8,
    },
    {
      size: "w-9 h-9 lg:w-13 lg:h-13",
      bottom: "-2%",
      right: "8%",
      gradient:
        "radial-gradient(circle at 30% 30%, rgba(234, 179, 8, 0.55), rgba(14, 10, 6, 0.92))",
      shadow:
        "0 0 18px rgba(234, 179, 8, 0.35), inset 1px 1px 5px rgba(255, 255, 255, 0.5)",
      animate: { y: [-8, 10, -8], x: [6, -6, 6], scale: [1, 1.09, 1] },
      duration: 9.6,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section
      id="expertise"
      ref={sectionRef}
      className="relative min-h-screen py-24 px-4 sm:px-6 lg:px-8 bg-[#07080e] text-white overflow-hidden select-none font-sans"
    >
      {/* Background Star Particles / Dots */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1.5px 1.5px, rgba(255, 255, 255, 0.25) 1px, transparent 0)`,
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      {/* Twinkling Ambient Stars */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[
          { top: "12%", left: "18%", size: 2, delay: 0 },
          { top: "22%", left: "82%", size: 3, delay: 1.2 },
          { top: "38%", left: "42%", size: 2, delay: 2.1 },
          { top: "65%", left: "15%", size: 3, delay: 0.8 },
          { top: "78%", left: "88%", size: 2, delay: 1.7 },
          { top: "88%", left: "52%", size: 2, delay: 2.5 },
          { top: "30%", left: "92%", size: 3, delay: 0.4 },
          { top: "5%", left: "48%", size: 2, delay: 1.9 },
        ].map((star, idx) => (
          <motion.div
            key={idx}
            className="absolute rounded-full bg-white shadow-[0_0_8px_#ffffff]"
            style={{
              top: star.top,
              left: star.left,
              width: `${star.size}px`,
              height: `${star.size}px`,
            }}
            animate={{ opacity: [0.2, 0.9, 0.2], scale: [0.8, 1.2, 0.8] }}
            transition={{
              duration: 3 + (idx % 3),
              repeat: Infinity,
              delay: star.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Ambient Radial Soft Light Blurs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-purple-600/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-10 right-0 w-96 h-96 bg-cyan-500/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-96 h-96 bg-fuchsia-600/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Floating Glass Spheres */}
      {floatingOrbs.map((orb, index) => (
        <motion.div
          key={index}
          className={`absolute rounded-full pointer-events-none z-10 ${orb.size}`}
          style={{
            top: orb.top,
            left: orb.left,
            right: orb.right,
            bottom: orb.bottom,
            background: orb.gradient,
            boxShadow: orb.shadow,
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
          }}
          animate={orb.animate}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto relative z-20">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 md:mb-20"
        >
          {/* Badge */}
          <div className="inline-flex items-center justify-center mb-6">
            <div className="relative px-5 py-1.5 rounded-full bg-[#0c0d1a]/80 backdrop-blur-md border border-purple-500/30 shadow-[0_0_20px_rgba(168,85,247,0.15)]">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                MY EXPERTISE
              </span>
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-4">
            Areas of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] via-[#38bdf8] to-[#a855f7]">
              Expertise
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-slate-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto font-normal leading-relaxed">
            Delivering scalable, high-performance web applications with modern
            frontend technologies, clean architecture, and exceptional user
            experiences.
          </p>
        </motion.div>

        {/* 6 Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {expertiseData.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.01 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="group relative rounded-2xl p-6 sm:p-7 flex flex-col justify-between overflow-hidden cursor-pointer transition-all duration-300"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.015) 100%)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  border: `1px solid rgba(${card.glowRgb}, 0.25)`,
                  boxShadow: `0 12px 32px -8px rgba(0, 0, 0, 0.7), 0 0 20px -5px rgba(${card.glowRgb}, 0.15)`,
                }}
              >
                {/* Hover Border & Glow Highlight Overlay */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    border: `1px solid rgba(${card.glowRgb}, 0.7)`,
                    boxShadow: `0 0 30px rgba(${card.glowRgb}, 0.25), inset 0 0 15px rgba(${card.glowRgb}, 0.1)`,
                    background: `linear-gradient(135deg, rgba(${card.glowRgb}, 0.06), transparent 70%)`,
                  }}
                />

                {/* Top Subtle Specular Light Line */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

                <div>
                  {/* Top Header Row: Icon Left & Ghost Number Right */}
                  <div className="flex items-center justify-between mb-6">
                    {/* Icon Box */}
                    <motion.div
                      className="w-14 h-14 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                      style={{
                        background: `linear-gradient(135deg, rgba(${card.glowRgb}, 0.2), rgba(${card.glowRgb}, 0.05))`,
                        border: `1px solid rgba(${card.glowRgb}, 0.4)`,
                        boxShadow: `inset 0 0 12px rgba(${card.glowRgb}, 0.2)`,
                      }}
                    >
                      <Icon size={26} style={{ color: card.color }} />
                    </motion.div>

                    {/* Faint Ghost Number */}
                    <span
                      className="text-5xl font-black transition-opacity duration-300 opacity-20 group-hover:opacity-35 select-none"
                      style={{ color: card.color }}
                    >
                      {card.number}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-2.5 tracking-tight group-hover:text-white transition-colors">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-400 text-sm leading-relaxed mb-5 font-normal">
                    {card.description}
                  </p>

                  {/* Accent Line */}
                  <div
                    className="w-full h-[1px] mb-5"
                    style={{
                      background: `linear-gradient(90deg, ${card.color} 0%, rgba(${card.glowRgb}, 0.2) 50%, transparent 100%)`,
                    }}
                  />
                </div>

                {/* Skill List: 2 Columns */}
                <div className="grid grid-cols-2 gap-x-3 gap-y-2.5 pt-1">
                  {card.skills.map((skill, sIdx) => (
                    <React.Fragment key={sIdx}>
                      {/* Column 1 Skill */}
                      <div className="flex items-center gap-2 text-xs font-medium text-slate-300">
                        <span
                          className="w-1.5 h-1.5 rounded-full shrink-0"
                          style={{
                            backgroundColor: card.color,
                            boxShadow: `0 0 6px ${card.color}`,
                          }}
                        />
                        <span className="truncate">{skill.col1}</span>
                      </div>

                      {/* Column 2 Skill */}
                      <div className="flex items-center gap-2 text-xs font-medium text-slate-300">
                        <span
                          className="w-1.5 h-1.5 rounded-full shrink-0"
                          style={{
                            backgroundColor: card.color,
                            boxShadow: `0 0 6px ${card.color}`,
                          }}
                        />
                        <span className="truncate">{skill.col2}</span>
                      </div>
                    </React.Fragment>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Call-To-Action (CTA) Area */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mt-20 md:mt-24 pt-2 relative z-30 flex flex-col items-center"
        >
          {/* Sentence */}
          <p className="text-slate-300 text-base sm:text-lg md:text-xl font-medium mb-6 tracking-wide max-w-xl mx-auto">
            Let's bring your ideas to life.
          </p>

          {/* Premium Pill CTA Button */}
          <motion.a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              const contactEl = document.getElementById("contact");
              if (contactEl) {
                contactEl.scrollIntoView({ behavior: "smooth" });
              } else {
                window.location.hash = "#contact";
              }
            }}
            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-semibold text-white text-sm sm:text-base tracking-wide overflow-hidden cursor-pointer shadow-[0_0_25px_rgba(0,212,255,0.35)] hover:shadow-[0_0_35px_rgba(168,85,247,0.5)] transition-all duration-300 select-none"
            style={{
              background:
                "linear-gradient(135deg, #00d4ff 0%, #38bdf8 45%, #a855f7 100%)",
              border: "1px solid rgba(255, 255, 255, 0.35)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
            }}
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            {/* Brighter Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

            {/* Top Light Highlight */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/60 to-transparent pointer-events-none" />

            {/* Button Content */}
            <span className="relative z-10 text-white font-semibold">
              Get In Touch
            </span>
            <ArrowRight
              size={18}
              className="relative z-10 text-white transition-transform duration-300 group-hover:translate-x-1.5"
            />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
