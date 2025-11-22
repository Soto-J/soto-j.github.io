import React from "react";

interface WindowDisplayProps {
  children: React.ReactNode;
  title: string;
  imgSrc?: string;
}

const WindowDisplay = ({ children, title, imgSrc }: WindowDisplayProps) => {
  return (
    <div>
      {/* Terminal Header */}
      <div className="flex items-center justify-between bg-muted/50 px-4 py-3 border-b border-border">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
          </div>

          <span className="text-xs md:text-sm text-muted-foreground font-mono ml-2">
            {title}
          </span>
        </div>

        {imgSrc && <img src={imgSrc} alt="John Soto" className="h-15 w-15" />}
      </div>

      {children}
    </div>
  );
};

export default WindowDisplay;
