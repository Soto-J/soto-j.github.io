import Image from "next/image";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  SearchIcon,
  XIcon,
  SquareIcon,
  MinusIcon,
} from "lucide-react";

export const SkillsSection = () => {
  const skills = [{}];

  const languages = [
    { title: "React.js" },
    { title: "Next.js" },
    { title: "Typescript" },
    { title: "CSS/Tailwind" },
    { title: "PowerShell" },
    { title: "Github" },
    { title: "MySQL" },
  ];

  return (
    <div className="flex min-h-svh items-center justify-center text-zinc-300">
      <div className="w-2xl border border-zinc-900">
        {/* Nav */}
        <div className="flex h-6 items-center justify-between bg-zinc-800 px-3 py-4">
          <Image src="/vscode.svg" alt="vscode logo" width={14} height={14} />

          <div className="flex items-center gap-x-3">
            <ArrowLeftIcon className="size-3.5 text-zinc-200" />
            <ArrowRightIcon className="size-3.5 text-zinc-600" />

            <div className="flex items-center gap-x-1 rounded border border-zinc-500 bg-zinc-700 px-24 py-0.5">
              <SearchIcon className="size-3" />
              <span className="text-xs">Skills</span>
            </div>
          </div>

          <div className="flex items-center gap-x-4">
            <MinusIcon className="size-4" strokeWidth={1} />
            <SquareIcon className="size-3.5" strokeWidth={1} />
            <XIcon className="size-4" strokeWidth={1} />
          </div>
        </div>

        <div>SkillsSection</div>
      </div>
    </div>
  );
};
