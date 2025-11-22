import { Button } from "@/components/ui/button";
import { FiGithub } from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";
import { ImFileText2 } from "react-icons/im";

export const HeroView = () => {
  const terminalContent = [
    { label: "name", value: "John Soto" },
    { label: "email", value: "soto.ja415@gmail.com" },
    { label: "role", value: "Full-Stack Developer" },
    { label: "location", value: "NYC" },
    { label: "education", value: "CS @ Lehman College" },
    { label: "passion", value: "Building innovative web applications" },
  ];

  return (
    <div className="space-y-6">
      {/* Terminal Window */}
      <div className="bg-card border border-border rounded-lg overflow-hidden shadow-lg">
        {/* Terminal Header */}
        <div className="flex items-center justify-between bg-muted/50 px-4 py-3 border-b border-border">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>

            <span className="text-sm text-muted-foreground font-mono ml-2">
              john-soto.dev
            </span>
          </div>

          <img
            src="/images/john-soto-img.png"
            alt="John Soto"
            className="h-15 w-15 shadow-md"
          />
        </div>

        {/* Terminal Content */}
        <div className="p-6 md:p-8 font-mono text-sm md:text-base space-y-6">
          <div className="space-y-1">
            <div>
              <span className="text-primary">const</span>{" "}
              <span className="text-foreground">developer</span>{" "}
              <span className="text-muted-foreground">=</span>{" "}
              <span className="text-muted-foreground">{"{"}</span>
            </div>

            {terminalContent.map((val) => (
              <div key={val.label} className="pl-4 md:pl-6">
                <span className="text-accent">{val.label}</span>
                <span className="text-muted-foreground">:</span>{" "}
                <span className="text-secondary">"{val.value}"</span>
                <span className="text-muted-foreground">,</span>
              </div>
            ))}

            <div>
              <span className="text-muted-foreground">{"}"}</span>
              <span className="text-primary animate-pulse">;</span>
            </div>
          </div>

          <div className="font-mono text-xs md:text-sm text-muted-foreground">
            <div className="opacity-70">
              <div>
                <span className="text-primary">/*</span>
              </div>
              <p className="pl-6">
                Creating end-to-end software solutions that are both robust and
                intuitive. With a CS background and full-stack experience, I
                care about clean code, strong fundamentals, and meaningful user
                experiences.
              </p>
              <div>
                <span className="text-primary"> */</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4 flex-wrap justify-center md:justify-start">
        <Button size="lg" variant="outline" asChild>
          <a href="/api/resume" target="_blank">
            <ImFileText2 className="mr-2 h-4 w-4" />
            Resume
          </a>
        </Button>
        <Button size="icon" variant="outline" asChild>
          <a
            href="https://github.com/Soto-J"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiGithub className="h-5 w-5" />
          </a>
        </Button>
        <Button size="icon" variant="outline" asChild>
          <a
            href="https://www.linkedin.com/in/john-soto90/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SlSocialLinkedin className="h-5 w-5" />
          </a>
        </Button>
      </div>
    </div>
  );
};
