import Image from "next/image";

import { DownloadIcon } from "lucide-react";

import { TypeWriter } from "@/components/type-writer";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  const typeWriterTitle = ">_ Hello, welcome to my terminal.";

  return (
    <div className="flex min-h-svh flex-col items-center justify-center font-mono">
      <div className="w-full max-w-6xl rounded-xl border border-zinc-700 bg-zinc-900 p-6 shadow-lg">
        <div className="mb-6">
          <TypeWriter
            title={typeWriterTitle}
            className="text-sm text-green-400"
          />
          <h1 className="mt-2 text-3xl font-bold text-white">johnsoto.dev</h1>
        </div>

        <div className="flex flex-col items-center gap-6 md:flex-row">
          <div className="flex-1 space-y-3 text-sm text-zinc-300 md:text-base">
            <p>
              I'm <span className="font-semibold text-white">John Soto</span>, I
              code things that help people, from full-stack apps to tools that
              solve real problems. Born and raised in NYC, I turned a Computer
              Science degree into a lifelong curiosity for building, shipping,
              and learning.
            </p>
            <p>
              I love building innovative applications that make an impact.
              Currently, I'm focused on building real-time web apps with Next.js
              and sharpening my system design skills. This site showcases my
              journey, experiences, and work.
            </p>
          </div>

          <div className="relative flex h-32 w-32 items-center justify-center overflow-hidden rounded-md border-2 border-green-400">
            <Image src="/hero-img-1.png" alt="Hero Image" fill />
          </div>
        </div>

        <div className="mx-auto mt-6 w-fit md:mr-auto md:ml-0">
          <Button
            size="lg"
            className="inline-flex cursor-pointer items-center gap-x-2 rounded-md bg-green-500 px-4 py-2 text-base font-semibold tracking-wider text-black transition-colors hover:bg-green-400"
          >
            <span>Resume</span>
            <DownloadIcon className="size-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};
