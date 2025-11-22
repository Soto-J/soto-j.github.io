import { Button } from "@/components/ui/button";
import { FiGithub, FiExternalLink } from "react-icons/fi";

// Project data structure
const projects = [
  {
    id: 1,
    name: "E-Commerce Platform",
    fileName: "ecommerce-app.tsx",
    description: "Full-stack shopping experience with cart and payments",
    tech: ["React", "TypeScript", "Node.js", "Stripe"],
    features: [
      "Secure payment processing",
      "Real-time inventory",
      "User authentication",
    ],
    links: {
      demo: "https://demo-link.com",
      github: "https://github.com/yourusername/project",
    },
  },
  {
    id: 2,
    name: "Task Management App",
    fileName: "task-manager.tsx",
    description: "Collaborative task tracking with real-time updates",
    tech: ["Next.js", "PostgreSQL", "Prisma", "WebSockets"],
    features: ["Team collaboration", "Real-time sync", "Project analytics"],
    links: {
      demo: "https://demo-link.com",
      github: "https://github.com/yourusername/project",
    },
  },
  {
    id: 3,
    name: "Weather Dashboard",
    fileName: "weather-app.tsx",
    description: "Real-time weather visualization and forecasting",
    tech: ["React", "OpenWeather API", "Chart.js"],
    features: ["7-day forecast", "Interactive charts", "Location search"],
    links: {
      demo: "https://demo-link.com",
      github: "https://github.com/yourusername/project",
    },
  },
];

export default function ProjectssView() {
  return (
    <div className="space-y-8">
      {/* Section Header */}

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-card border border-border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
          >
            {/* Terminal Header */}
            <div className="flex items-center justify-between bg-muted/50 px-4 py-3 border-b border-border">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <span className="text-xs md:text-sm text-muted-foreground font-mono ml-2">
                  {project.fileName}
                </span>
              </div>
            </div>

            {/* Project Content */}
            <div className="p-6 font-mono text-xs md:text-sm space-y-4">
              {/* Project Object */}
              <div className="space-y-1">
                <div>
                  <span className="text-primary">const</span>{" "}
                  <span className="text-foreground">project</span>{" "}
                  <span className="text-muted-foreground">=</span>{" "}
                  <span className="text-muted-foreground">{"{"}</span>
                </div>

                {/* Name */}
                <div className="pl-4">
                  <span className="text-accent">name</span>
                  <span className="text-muted-foreground">:</span>{" "}
                  <span className="text-secondary">"{project.name}"</span>
                  <span className="text-muted-foreground">,</span>
                </div>

                {/* Description */}
                <div className="pl-4">
                  <span className="text-accent">description</span>
                  <span className="text-muted-foreground">:</span>{" "}
                  <span className="text-secondary">
                    "{project.description}"
                  </span>
                  <span className="text-muted-foreground">,</span>
                </div>

                {/* Tech Stack */}
                <div className="pl-4">
                  <span className="text-accent">tech</span>
                  <span className="text-muted-foreground">: [</span>
                </div>
                <div className="pl-8 flex flex-wrap gap-1">
                  {project.tech.map((tech, index) => (
                    <span key={tech}>
                      <span className="text-secondary">"{tech}"</span>
                      {index < project.tech.length - 1 && (
                        <span className="text-muted-foreground">,</span>
                      )}
                    </span>
                  ))}
                </div>
                <div className="pl-4">
                  <span className="text-muted-foreground">],</span>
                </div>

                {/* Features */}
                <div className="pl-4">
                  <span className="text-accent">features</span>
                  <span className="text-muted-foreground">: [</span>
                </div>
                {project.features.map((feature, index) => (
                  <div key={feature} className="pl-8">
                    <span className="text-secondary">"{feature}"</span>
                    {index < project.features.length - 1 && (
                      <span className="text-muted-foreground">,</span>
                    )}
                  </div>
                ))}
                <div className="pl-4">
                  <span className="text-muted-foreground">]</span>
                </div>

                <div>
                  <span className="text-muted-foreground">{"}"}</span>
                  <span className="text-muted-foreground">;</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-2 border-t border-border/50">
                <Button size="sm" variant="outline" asChild>
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiExternalLink className="mr-2 h-3 w-3" />
                    Demo
                  </a>
                </Button>
                <Button size="sm" variant="outline" asChild>
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiGithub className="mr-2 h-3 w-3" />
                    Code
                  </a>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
