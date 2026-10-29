"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useI18n } from "@/i18n/I18nProvider";
import { EmailIcon, GithubIcon, LinkedinIcon } from "./Icons";

const socialLinkClassName =
  "relative inline-flex justify-center items-center w-12 sm:w-14 aspect-square rounded-full border border-white/10 bg-white/5 backdrop-blur-md z-0 text-white/50 transition-[color,background-color,border-color,transform] duration-150 ease-out-strong can-hover:hover:border-white/20 can-hover:hover:bg-white/10 can-hover:hover:text-white active:scale-[0.97] motion-reduce:active:scale-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/70";

const socials = [
  {
    href: "https://github.com/Drumpy",
    labelKey: "github",
    Icon: GithubIcon,
  },
  {
    href: "https://www.linkedin.com/in/ddosantos",
    labelKey: "linkedin",
    Icon: LinkedinIcon,
  },
  {
    href: "mailto:ddosantos@hotmail.com",
    labelKey: "email",
    Icon: EmailIcon,
  },
] as const;

function Socials() {
  const t = useI18n();

  return (
    <div className="flex justify-center gap-4 sm:gap-6">
      <TooltipProvider>
        {socials.map(({ href, labelKey, Icon }) => {
          const label = t.socials[labelKey];

          return (
            <Tooltip key={href}>
              <TooltipTrigger asChild>
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    href.startsWith("http") ? "noopener noreferrer" : undefined
                  }
                  aria-label={label}
                  className={socialLinkClassName}
                >
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>{label}</p>
              </TooltipContent>
            </Tooltip>
          );
        })}
      </TooltipProvider>
    </div>
  );
}

export default Socials;
