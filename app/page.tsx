"use client";

import React from "react";
import { Spotlight } from "./components/ui/Spotlight";
import dynamic from "next/dynamic";

const Button = dynamic(() => import("./components/ui/Button"), {
  ssr: false, // Disable server-side rendering for this component
});
const buttons = [
  {
    name: "Github",
    onClick: () => {
      window.open("https://github.com/Sovai", "_blank");
    },
  },
  {
    name: "X",
    onClick: () => {
      window.open("https://x.com/sovai_dev", "_blank");
    },
  },
  {
    name: "LinkedIn",
    onClick: () => {
      window.open(
        "https://www.linkedin.com/in/sovai-kean-b388a1110/",
        "_blank"
      );
    },
  },
  {
    name: "NeathNook",
    onClick: () => {
      window.open("https://neathnook.com", "_blank");
    },
  },
];

export default function SpotlightPreview() {
  return (
    <div className="h-screen w-full rounded-md flex items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="pb-2 text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          New Look <br /> is coming soon.
        </h1>
        <p className="mt-5 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
          Discover a blend of blogs, projects, and tools that showcase my
          journey in tech. This portfolio isn&apos;t just my work; it&apos;s a
          peek into the future of creativity. Stay tuned for what&apos;s next.
        </p>

        <div className="flex flex-wrap justify-center mt-10 gap-3">
          {buttons.map((button) => (
            <Button key={button.name} onClick={() => button.onClick()}>
              {button.name}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
