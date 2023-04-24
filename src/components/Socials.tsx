"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { GithubIcon, LinkedinIcon } from "./Icons";

function Socials() {
  return (
    <div className="flex justify-center gap-10 sm:gap-20">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <a
              href="https://github.com/Drumpy"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex justify-center items-center text-[#6f6f7b] hover:text-[#E3E2F9] group w-[70px] sm:w-24 aspect-square rounded-full bg-gradient-to-t from-[#242428] via-transparent to-[#242428] p-[2px] transition-all z-0 before:content-[''] before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-t before:from-[#0e37ac] before:via-transparent before:to-[#0e37ac] before:opacity-0 before:z-10 after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:right-0.5 after:bottom-0.5 after:rounded-full after:bg-[#101012] after:z-10 after:p-[1px] hover:before:opacity-100 before:transition-all before:duration-200"
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
              className="relative inline-flex justify-center items-center text-[#6f6f7b] hover:text-[#E3E2F9] group w-[70px] sm:w-24 aspect-square rounded-full bg-gradient-to-t from-[#242428] via-transparent to-[#242428] p-[2px] transition-all z-0 before:content-[''] before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-t before:from-[#0e37ac] before:via-transparent before:to-[#0e37ac] before:opacity-0 before:z-10 after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:right-0.5 after:bottom-0.5 after:rounded-full after:bg-[#101012] after:z-10 after:p-[1px] hover:before:opacity-100 before:transition-all before:duration-200"
              aria-label="My Linkedin profile"
            >
              <LinkedinIcon className="z-20 w-8 h-8" />
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
              className="relative inline-flex justify-center items-center text-[#6f6f7b] hover:text-[#E3E2F9] group w-[70px] sm:w-24 aspect-square rounded-full bg-gradient-to-t from-[#242428] via-transparent to-[#242428] p-[2px] transition-all z-0 before:content-[''] before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-t before:from-[#0e37ac] before:via-transparent before:to-[#0e37ac] before:opacity-0 before:z-10 after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:right-0.5 after:bottom-0.5 after:rounded-full after:bg-[#101012] after:z-10 after:p-[1px] hover:before:opacity-100 before:transition-all before:duration-200"
              aria-label="My personal email"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="40"
                viewBox="0 96 960 960"
                width="40"
                fill="currentColor"
                className="z-20"
              >
                <path d="M480 976q-83 0-156-31.5T197 859q-54-54-85.5-127T80 576q0-83 31.5-156T197 293q54-54 127-85.5T480 176q83 0 156 31.5T763 293q54 54 85.5 127T880 576v53q0 56-39.5 94.5T744 762q-36 0-68-17.5T627 695q-26 34-65 50.5T480 762q-78 0-132.5-54T293 576q0-78 54.5-133T480 388q78 0 132.5 55T667 576v53q0 31 22.5 52t54.5 21q31 0 53.5-21t22.5-52v-53q0-142-99-241t-241-99q-142 0-241 99t-99 241q0 142 99 241t241 99h214v60H480Zm0-274q53 0 90-36.5t37-89.5q0-54-37-91t-90-37q-53 0-90 37t-37 91q0 53 37 89.5t90 36.5Z" />
              </svg>
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
