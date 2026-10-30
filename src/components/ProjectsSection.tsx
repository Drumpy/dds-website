"use client";

import type { ComponentType } from "react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import {
  AstroIcon,
  CloudflareIcon,
  DigitalOceanIcon,
  DockerIcon,
  ExpressIcon,
  ExternalIcon,
  MdxIcon,
  MongoDBIcon,
  NestjsIcon,
  NextIcon,
  PartyKitIcon,
  ReactIcon,
  ReduxIcon,
  RenderIcon,
  SupabaseIcon,
  TailwindIcon,
  ThreejsIcon,
  TinaIcon,
  VercelIcon,
  ViteIcon,
} from "@/components/Icons";

import { useI18n } from "@/i18n/I18nProvider";
import type { Dictionary } from "@/i18n/dictionaries";

type ProjectKey = keyof Dictionary["projects"] extends infer K
  ? K extends "heading" | "screenshotAlt"
    ? never
    : K
  : never;

type Tech = {
  name: string;
  href: string;
  Icon?: ComponentType<{ className?: string }>;
  iconClassName?: string;
};

type Project = {
  key: ProjectKey;
  title: string;
  href: string;
  tagClassName: string;
  image: string;
  imageClassName?: string;
  reverse?: boolean;
  tech: Tech[];
};

const projects: Project[] = [
  {
    key: "bodasimple",
    title: "BodaSimple.uy",
    href: "https://bodasimple.uy/",
    tagClassName: "bg-teal-800",
    image: "/images/bodasimple-2.webp",
    tech: [
      { name: "Next.js", href: "https://nextjs.org/", Icon: NextIcon },
      { name: "React", href: "https://react.dev/", Icon: ReactIcon },
      {
        name: "NestJS",
        href: "https://nestjs.com/",
        Icon: NestjsIcon,
      },
      {
        name: "Tailwind CSS",
        href: "https://tailwindcss.com/",
        Icon: TailwindIcon,
      },
      { name: "Supabase", href: "https://supabase.com/", Icon: SupabaseIcon },
      { name: "AWS", href: "https://aws.amazon.com/" },
      { name: "Render", href: "https://render.com/", Icon: RenderIcon },
    ],
  },
  {
    key: "drumpy",
    title: "Drumpy World",
    href: "https://world.dds.uy/",
    tagClassName: "bg-indigo-900",
    image: "/images/drumpyworld-3.webp",
    imageClassName: "bg-linear-to-b from-indigo-900/70 to-transparent",
    reverse: true,
    tech: [
      { name: "React", href: "https://react.dev/", Icon: ReactIcon },
      {
        name: "Three.js",
        href: "https://threejs.org/",
        Icon: ThreejsIcon,
      },
      { name: "Vite", href: "https://vite.dev/", Icon: ViteIcon },
      {
        name: "Cloudflare",
        href: "https://workers.cloudflare.com/",
        Icon: CloudflareIcon,
      },
      {
        name: "PartyKit",
        href: "https://github.com/partykit/partykit",
        Icon: PartyKitIcon,
      },
      { name: "Vercel", href: "https://vercel.com/", Icon: VercelIcon },
      { name: "Docker", href: "https://www.docker.com/", Icon: DockerIcon },
    ],
  },
  {
    key: "hlEstudio",
    title: "HL Estudio",
    href: "https://www.hlestudio.com/",
    tagClassName: "bg-teal-800",
    image: "/images/hlestudio.webp",
    tech: [
      { name: "Astro", href: "https://astro.build/", Icon: AstroIcon },
      { name: "React", href: "https://react.dev/", Icon: ReactIcon },
      {
        name: "Tailwind CSS",
        href: "https://tailwindcss.com/",
        Icon: TailwindIcon,
      },
      { name: "Tina CMS", href: "https://tina.io/", Icon: TinaIcon },
    ],
  },
  {
    key: "coCami",
    title: "Co & Cami",
    href: "https://co-cami.vercel.app/",
    tagClassName: "bg-stone-800",
    image: "/images/wedding.webp",
    imageClassName: "bg-linear-to-b from-stone-700 to-transparent",
    reverse: true,
    tech: [
      { name: "Astro", href: "https://astro.build/", Icon: AstroIcon },
      { name: "React", href: "https://react.dev/", Icon: ReactIcon },
      {
        name: "Tailwind CSS",
        href: "https://tailwindcss.com/",
        Icon: TailwindIcon,
      },
      { name: "Supabase", href: "https://supabase.com/", Icon: SupabaseIcon },
    ],
  },
  {
    key: "efectoDialogo",
    title: "Efecto Diálogo",
    href: "https://www.efectodialogo.uy/",
    tagClassName: "bg-slate-800",
    image: "/images/efectodialogo.webp",
    imageClassName: "bg-linear-to-b from-slate-700 to-transparent",
    tech: [
      { name: "Astro", href: "https://astro.build/", Icon: AstroIcon },
      {
        name: "Tailwind CSS",
        href: "https://tailwindcss.com/",
        Icon: TailwindIcon,
      },
      {
        name: "MDX",
        href: "https://mdxjs.com/",
        Icon: MdxIcon,
        iconClassName: "w-8 h-8",
      },
      { name: "GSAP", href: "https://greensock.com/gsap/" },
    ],
  },
  {
    key: "clinicaFlorida",
    title: "Clínica Florida",
    href: "https://clinica-florida.vercel.app/",
    tagClassName: "bg-teal-800",
    image: "/images/clinicaflorida.webp",
    imageClassName: "bg-linear-to-b from-teal-700 to-transparent",
    reverse: true,
    tech: [
      { name: "React", href: "https://react.dev/", Icon: ReactIcon },
      { name: "Redux", href: "https://redux.js.org/", Icon: ReduxIcon },
      {
        name: "Tailwind CSS",
        href: "https://tailwindcss.com/",
        Icon: TailwindIcon,
      },
      { name: "Express", href: "https://expressjs.com/", Icon: ExpressIcon },
      { name: "MongoDB", href: "https://www.mongodb.com/", Icon: MongoDBIcon },
      {
        name: "DigitalOcean",
        href: "https://www.digitalocean.com/",
        Icon: DigitalOceanIcon,
      },
    ],
  },
];

function TechLink({ tech }: { tech: Tech }) {
  const { Icon, name, href, iconClassName } = tech;

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={name}
          className="inline-flex items-center text-sm text-gray-400 transition-colors duration-150 ease-out-strong can-hover:hover:text-gray-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/70"
        >
          {Icon ? (
            <Icon className={`w-6 h-6 ${iconClassName ?? ""}`} />
          ) : (
            name
          )}
        </a>
      </TooltipTrigger>
      <TooltipContent>
        <p>{name}</p>
      </TooltipContent>
    </Tooltip>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const t = useI18n();
  const { title, href, tagClassName, image, imageClassName, reverse, tech } =
    project;
  const copy = t.projects[project.key];

  return (
    <article className="bg-linear-to-r from-[#242428] via-transparent to-[#242428] py-px">
      <div
        className={`min-h-72 bg-[#101012] flex flex-col-reverse ${
          reverse ? "lg:flex-row-reverse" : "lg:flex-row"
        }`}
      >
        <div className="flex-1">
          <div className="flex flex-col h-full p-12">
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 justify-between sm:gap-2 mb-4 lg:mb-8">
              <a
                className="inline-flex items-center gap-2 transition-colors duration-150 ease-out-strong can-hover:hover:text-gray-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/70"
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={title}
              >
                <h3 className="text-2xl font-normal">{title}</h3>
                <ExternalIcon className="w-4 h-4 text-gray-500" />
              </a>
              <span className={`rounded-full ${tagClassName} px-2 py-1 text-xs`}>
                {copy.tag}
              </span>
            </div>
            {copy.description.map((paragraph) => (
              <p key={paragraph} className="mb-2 last:mb-0 text-gray-400">
                {paragraph}
              </p>
            ))}
            <div className="flex flex-wrap items-center gap-4 pt-6 mt-auto">
              {tech.map((techItem) => (
                <TechLink key={techItem.name} tech={techItem} />
              ))}
            </div>
          </div>
        </div>

        <div
          className={`flex items-center flex-1 overflow-hidden ${
            imageClassName ?? ""
          }`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image}
            className="object-contain w-full transition-transform duration-200 ease-out-strong motion-reduce:transition-none can-hover:hover:scale-[1.03]"
            alt={t.projects.screenshotAlt.replace("{name}", title)}
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </article>
  );
}

function ProjectsSection() {
  const t = useI18n();

  return (
    <section
      id="projects"
      className="bg-linear-to-r from-[#242428] via-transparent to-[#242428] pt-px text-white"
    >
      <div className="h-72 bg-[#101012] px-12 flex items-center">
        <h2 className="text-4xl sm:text-5xl font-medium font-wide bg-clip-text text-transparent bg-linear-to-b from-white/90 from-5% to-blue-100/60">
          {t.projects.heading}
        </h2>
      </div>

      <TooltipProvider>
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </TooltipProvider>
    </section>
  );
}

export default ProjectsSection;
