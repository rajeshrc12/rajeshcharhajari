import {
  Code,
  Globe,
  ExternalLink,
  Briefcase,
  Calendar,
  MapPin,
  Sparkles,
  Mail,
  File,
} from "lucide-react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiFastapi,
  SiExpress,
  SiDocker,
  SiKubernetes,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiRedis,
  SiGooglecloud,
  SiLangchain,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6"; // using react-icons for colors
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import GitHubCalendar from "react-github-calendar";

const techs = [
  { name: "HTML", icon: <SiHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <SiCss3 className="text-blue-500" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-sky-500" /> },
  { name: "Python", icon: <SiPython className="text-blue-400" /> },
  { name: "ReactJS / NextJS", icon: <SiReact className="text-cyan-400" /> },
  { name: "TailwindCSS", icon: <SiTailwindcss className="text-teal-400" /> },
  { name: "NodeJS", icon: <SiNodedotjs className="text-green-500" /> },
  { name: "FastAPI", icon: <SiFastapi className="text-emerald-400" /> },
  { name: "Express", icon: <SiExpress className="text-gray-300" /> },
  { name: "SQL", icon: <SiMysql className="text-orange-400" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-sky-500" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
  { name: "Redis", icon: <SiRedis className="text-red-500" /> },
  { name: "LangChain", icon: <SiLangchain className="text-purple-400" /> },
  {
    name: "LangGraph",
    icon: <SiLangchain className="text-fuchsia-400" />,
  },
  { name: "Docker", icon: <SiDocker className="text-blue-400" /> },
  { name: "Kubernetes", icon: <SiKubernetes className="text-sky-400" /> },
  { name: "AWS", icon: <FaAws className="text-yellow-500" /> },
  { name: "GCP", icon: <SiGooglecloud className="text-blue-500" /> },
];

const experiences = [
  {
    id: 1,
    date: "Jul 2024 - Nov 2024",
    title: "Software Engineer",
    company: "Hashedin by Deloitte",
    location: "Pune",
    description: [
      "Built an internal employee marketplace using ReactJS, NodeJS, and PostgreSQL to enable secure item listing, buying, and selling within the organization.",
      "Developed and optimized REST APIs with ExpressJS and Prisma, featuring advanced filtering and JWT-based authentication for secure access control.",
      "Implemented user dashboards to manage transactions, approvals, and history, ensuring reliability through Zod validation and Jest testing.",
    ],
  },
  {
    id: 2,
    date: "Nov 2022 - Mar 2024",
    title: "Software Analyst",
    company: "Rethink Ledgers",
    location: "Pune",
    description: [
      "Developed secure authentication systems using JWT, OAuth2, and PassportJS with middleware for validation, rate limiting, and logging to enhance security and performance.",
      "Integrated real-time communication with WebSocket and managed file handling via AWS S3 for seamless user interaction and data delivery.",
      "Automated data workflows using Node-Cron and implemented online payments with Razorpay APIs for real-time transaction tracking and notifications.",
    ],
  },
  {
    id: 3,
    date: "Feb 2022 - Jul 2022",
    title: "Trainee Software Engineer",
    company: "Allianz Technology",
    location: "Pune",
    description: [
      "Created dynamic logic scripts for document automation workflows based on business rules.",
      "Designed and executed complex SQL queries for data extraction, transformation, and presentation to meet client needs.",
      "Collaborated with teams to ensure data accuracy and streamlined processing in enterprise reporting tools.",
    ],
  },
];

const links = [
  {
    name: "Email",
    href: "mailto:rajesh.charhajari@gmail.com",
    color: "text-red-500",
    icon: <Mail className="w-4 h-4" />,
  },
  {
    name: "GitHub",
    href: "https://github.com/rajeshrc12",
    color: "text-gray-900 dark:text-gray-100",
    icon: <FaGithub className="w-4 h-4" />,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/rajeshcharhajari",
    color: "text-blue-600",
    icon: <FaLinkedin className="w-4 h-4" />,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/rajescharhajari",
    color: "text-sky-500",
    icon: <FaXTwitter className="w-4 h-4" />,
  },
  {
    name: "Resume",
    href: "/resume",
    color: "text-emerald-500",
    icon: <File className="w-4 h-4" />,
  },
];
const Index = () => {
  return (
    <main className="min-h-screen bg-background py-12 px-6 md:py-20">
      <div className="max-w-2xl mx-auto space-y-16">
        {/* Header */}
        <header className="space-y-6">
          {/* Top Section */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
            {/* Avatar */}
            <Avatar className="w-24 h-24 border shadow-md">
              <AvatarImage src="rajesh.jpg" alt="Rajesh Charhajari" />
              <AvatarFallback>RC</AvatarFallback>
            </Avatar>

            {/* Intro */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight">
                Hi, I am <span className="text-primary">Rajesh Charhajari</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground">
                Full Stack GenAI Developer
              </p>
            </div>
          </div>

          {/* Contact Links */}
          <div className="flex flex-wrap justify-center sm:justify-start gap-3">
            {links.map(({ name, href, color, icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 bg-card border border-border rounded-lg hover:border-primary transition-colors text-sm font-medium"
              >
                <span className={`${color}`}>{icon}</span>
                <span>{name}</span>
              </a>
            ))}
          </div>
        </header>

        {/* About */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-primary" />
            About
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Full-stack software engineer with experience building scalable web
            applications. Passionate about creating efficient, user-friendly
            solutions and exploring new technologies. Currently focused on
            AI-powered data analytics and modern web development.
          </p>
        </section>

        {/* Tech Stack */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-foreground flex items-center gap-2">
            <Code className="w-6 h-6 text-primary" />
            Tech Stack
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {techs.map((tech) => (
              <div
                key={tech.name}
                className="flex items-center justify-center sm:justify-start gap-2 px-3 py-2 bg-card border border-border rounded-lg hover:border-primary hover:shadow-md hover:shadow-primary/10 transition-all cursor-pointer text-center"
              >
                <div className="text-lg sm:text-xl">{tech.icon}</div>
                <span className="text-sm font-medium text-card-foreground truncate">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </section>
        <section className="space-y-8">
          {/* Section Header */}
          <h2 className="text-2xl font-semibold text-foreground flex items-center gap-2">
            <Briefcase className="w-6 h-6 text-primary" />
            Experience
          </h2>

          {/* Timeline Container */}
          <div className="relative border-l border-border pl-6 ml-3 space-y-8">
            {experiences.map((exp) => (
              <div key={exp.id} className="relative">
                {/* Content */}
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                  {/* Left Side - Title & Company */}
                  <div>
                    <h3 className="text-lg font-semibold text-card-foreground">
                      {exp.title}
                    </h3>
                    <p className="font-medium text-primary">{exp.company}</p>
                  </div>

                  {/* Right Side - Date & Location */}
                  <div className="flex flex-col sm:items-end text-sm text-muted-foreground">
                    <p className="flex items-center gap-1">
                      <Calendar size={15} />
                      {exp.date}
                    </p>
                    <p className="flex items-center gap-1">
                      <MapPin size={15} />
                      {exp.location}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  {exp.description.map((point, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-primary mt-[3px]">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">
            GitHub Contributions
          </h2>
          <div className="p-4 bg-card border border-border rounded-lg overflow-x-auto">
            <GitHubCalendar
              username="rajeshrc12"
              blockSize={12}
              blockMargin={5}
              fontSize={14}
              colorScheme="light"
            />
          </div>
        </section>
        {/* Projects */}
        <section>
          <h2 className="text-2xl font-semibold text-foreground flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-primary" />
            Projects
          </h2>

          {/* Zepr Project Card */}
          <div className="py-6">
            <div>
              {/* Project Title and Description */}
              <div>
                <h3 className="text-xl font-semibold text-card-foreground mb-2">
                  Zepr - AI Data Analyst
                </h3>
              </div>

              {/* Project Description */}
              <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                {[
                  "Built an AI-powered data analyst platform designed to simplify data exploration for non-technical users.",
                  "Developed features to import CSV datasets and auto-generate SQL queries and interactive charts.",
                  "Integrated AI-driven summarization to provide actionable insights, aiding users in faster business decisions.",
                  "Optimized for scalability with a modern stack, ensuring smooth handling of large datasets and real-time query execution.",
                ].map((desc, idx) => (
                  <li key={idx}>
                    <span className="text-primary mx-[3px]">•</span>
                    {desc}
                  </li>
                ))}
              </ul>

              {/* Project Links */}
              <div className="flex items-center gap-2">
                <a
                  href="https://zepr.live"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-primary hover:underline transition-colors"
                >
                  <Globe className="w-4 h-4" />
                  Live: zepr.live
                  <ExternalLink className="w-3 h-3" />
                </a>
                <span className="text-sm text-muted-foreground">|</span>
                <a
                  href="https://github.com/rajeshrc12/zepr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-primary hover:underline transition-colors"
                >
                  <Globe className="w-4 h-4" />
                  Code
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Index;
