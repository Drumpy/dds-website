"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { EmailIcon, GithubIcon, LinkedinIcon } from "./Icons";

function Socials() {
  return (
    <div className="flex justify-center gap-10 sm:gap-20 pb-40">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <a
              href="https://github.com/Drumpy"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex justify-center items-center text-[#6f6f7b] hover:text-[#E3E2F9] group w-[70px] sm:w-24 aspect-square rounded-full bg-linear-to-t from-[#242428] via-transparent to-[#242428] p-[2px] transition-all z-0 before:content-[''] before:absolute before:inset-0 before:rounded-full before:bg-linear-to-t before:from-[#0e37ac] before:via-transparent before:to-[#0e37ac] before:opacity-0 before:z-10 after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:right-0.5 after:bottom-0.5 after:rounded-full after:bg-[#101012] after:z-10 after:p-px hover:before:opacity-100 before:transition-all before:duration-200"
              aria-label="My GitHub profile"
            >
              <GithubIcon className="z-20 w-10 h-10" />
            </a>
          </TooltipTrigger>
          <TooltipContent>
            <p>My GitHub profile</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <a
              href="https://www.linkedin.com/in/ddosantos"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex justify-center items-center text-[#6f6f7b] hover:text-[#E3E2F9] group w-[70px] sm:w-24 aspect-square rounded-full bg-linear-to-t from-[#242428] via-transparent to-[#242428] p-[2px] transition-all z-0 before:content-[''] before:absolute before:inset-0 before:rounded-full before:bg-linear-to-t before:from-[#0e37ac] before:via-transparent before:to-[#0e37ac] before:opacity-0 before:z-10 after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:right-0.5 after:bottom-0.5 after:rounded-full after:bg-[#101012] after:z-10 after:p-px hover:before:opacity-100 before:transition-all before:duration-200"
              aria-label="My Linkedin profile"
            >
              <LinkedinIcon className="z-20 w-10 h-10" />
            </a>
          </TooltipTrigger>
          <TooltipContent>
            <p>My Linkedin profile</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <a
              href="mailto:ddosantos@hotmail.com"
              className="relative inline-flex justify-center items-center text-[#6f6f7b] hover:text-[#E3E2F9] group w-[70px] sm:w-24 aspect-square rounded-full bg-linear-to-t from-[#242428] via-transparent to-[#242428] p-[2px] transition-all z-0 before:content-[''] before:absolute before:inset-0 before:rounded-full before:bg-linear-to-t before:from-[#0e37ac] before:via-transparent before:to-[#0e37ac] before:opacity-0 before:z-10 after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:right-0.5 after:bottom-0.5 after:rounded-full after:bg-[#101012] after:z-10 after:p-px hover:before:opacity-100 before:transition-all before:duration-200"
              aria-label="My personal email"
            >
              <EmailIcon className="z-20 w-10 h-10" />
            </a>
          </TooltipTrigger>
          <TooltipContent>
            <p>My email</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}

export default Socials;
