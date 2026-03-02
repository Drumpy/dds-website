"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import {
  AstroIcon,
  DigitalOceanIcon,
  ExpressIcon,
  ExternalIcon,
  MdxIcon,
  MongoDBIcon,
  ReactIcon,
  ReduxIcon,
  SupabaseIcon,
  TailwindIcon,
  TinaIcon,
} from "@/components/Icons";

function ProjectsSection() {
  return (
    <section className="bg-linear-to-r from-[#242428] via-transparent to-[#242428] pt-px text-white">
      <div className="h-72 bg-[#101012] px-12 flex items-center">
        <h2 className="text-4xl sm:text-5xl font-medium font-wide bg-clip-text text-transparent bg-linear-to-b from-white/90 from-5% to-blue-100/60">
          Projects
        </h2>
      </div>

      <article className="bg-linear-to-r from-[#242428] via-transparent to-[#242428] py-px">
        <div className="min-h-72 bg-[#101012] flex flex-col-reverse lg:flex-row">
          <div className="flex-1">
            <div className="flex flex-col h-full p-12">
              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 justify-between sm:gap-2 mb-4 lg:mb-8">
                <a
                  className="inline-flex items-center gap-2 hover:text-gray-400 transition-colors duration-200"
                  href="https://www.hlestudio.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="HL Estudio website"
                >
                  <h3 className="text-2xl font-normal">HL Estudio</h3>
                  <ExternalIcon className="w-4 h-4 text-gray-500" />
                </a>
                <span className="rounded-full bg-teal-800 px-2 py-1 text-xs">
                  Architecture Studio Website
                </span>
              </div>
              <p className="mb-2 text-gray-400">
                A modern website for an architectural studio aimed at presenting
                their work, strengthening their brand presence, and enabling
                potential clients to easily get in touch for new projects.
              </p>
              <div className="flex items-center gap-4 pt-6 mt-auto">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a
                        href="https://astro.build/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Astro link"
                      >
                        <AstroIcon className="w-6 h-6" />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Astro</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a
                        href="https://react.dev/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="React link"
                      >
                        <ReactIcon className="w-6 h-6" />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>React</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a
                        href="https://tailwindcss.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Tailwind CSS link"
                      >
                        <TailwindIcon className="w-6 h-6" />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Tailwind CSS</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a
                        href="https://tina.io/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Tina CMS link"
                      >
                        <TinaIcon className="w-6 h-6" />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Tina CMS</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
          </div>
          <div className="flex items-center flex-1 overflow-hidden transition-all duration-200 group opacity-80 hover:opacity-100">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="./images/hlestudio.webp"
              className="object-contain w-full transition-all duration-200 group-hover:scale-110 drop-shadow-2xl"
              alt="HL Estudio Project Screenshot"
            />
          </div>
        </div>
      </article>

      <article className="bg-linear-to-r from-[#242428] via-transparent to-[#242428] py-px">
        <div className="min-h-72 bg-[#101012] flex flex-col-reverse lg:flex-row-reverse">
          <div className="flex-1">
            <div className="flex flex-col h-full p-12">
              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 justify-between sm:gap-2 mb-4 lg:mb-8">
                <a
                  className="inline-flex items-center gap-2 hover:text-gray-400 transition-colors duration-200"
                  href="https://co-cami.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Co & Cami - Wedding Website"
                >
                  <h3 className="text-2xl font-normal">Co & Cami</h3>
                  <ExternalIcon className="w-4 h-4 text-gray-500" />
                </a>
                <span className="rounded-full bg-stone-800 px-2 py-1 text-xs">
                  Wedding Invitation App
                </span>
              </div>
              <p className="mb-2 text-gray-400">
                A modern digital wedding invitation that combines an elegant
                presentation with a powerful guest management system.
              </p>
              <p className="text-gray-400">
                The platform allows couples to share event details, generate
                unique invitation codes, manage RSVPs, and control guest access
                in a seamless way.
              </p>
              <div className="flex items-center gap-4 pt-6 mt-auto">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a
                        href="https://astro.build/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Astro link"
                      >
                        <AstroIcon className="w-6 h-6" />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Astro</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a
                        href="https://react.dev/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="React link"
                      >
                        <ReactIcon className="w-6 h-6" />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>React</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a
                        href="https://tailwindcss.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Tailwind CSS link"
                      >
                        <TailwindIcon className="w-6 h-6" />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Tailwind CSS</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a
                        href="https://supabase.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Supabase link"
                      >
                        <SupabaseIcon className="w-6 h-6" />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Supabase</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
          </div>
          <div className="flex items-center flex-1 overflow-hidden transition-all duration-200 bg-linear-to-b from-stone-700 to-transparent group opacity-60 hover:opacity-80">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="./images/wedding.webp"
              className="object-contain w-full transition-all duration-200 group-hover:scale-110 drop-shadow-2xl"
              alt="Co & Cami - Wedding Website Screenshot"
            />
          </div>
        </div>
      </article>

      {/* <article className="bg-linear-to-r from-[#242428] via-transparent to-[#242428] py-px">
        <div className="min-h-72 bg-[#101012] flex flex-col-reverse lg:flex-row">
          <div className="flex-1">
            <div className="flex flex-col h-full p-12">
              <div className="inline-flex items-center gap-2 mb-4">
                <h3 className="text-2xl font-normal">StockNow</h3>
                <a href="#" aria-label="StockNow website">
                  <ExternalIcon className="w-4 h-4 text-gray-300" />
                </a>
              </div>
              <p className="mb-2 text-gray-300">
                Complete solution to control inventory and sales, allowing you
                to create products and categories, manage sales, customers and
                vendors in an intuitive and interactive interface.
              </p>
              <p className="text-gray-300">
                It offers full real-time inventory control to ensure that you
                always know how much is available for sale, helping to simplify
                the tracking process and optimize workflow efficiency.
              </p>
              <div className="flex items-center gap-4 pt-6 mt-auto">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a
                        href="https://nextjs.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Next.js 13 link"
                      >
                        <NextIcon className="w-6 h-6" />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Next.js 13</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a
                        href="https://tailwindcss.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Tailwind CSS link"
                      >
                        <TailwindIcon className="w-6 h-6" />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Tailwind CSS</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a
                        href="https://www.radix-ui.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Radiux UI link"
                      >
                        <RadixIcon className="w-6 h-6" />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Radix UI</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a
                        href="https://nestjs.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="NestJS link"
                      >
                        <NestjsIcon className="w-6 h-6 text-white" />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>NestJS</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a
                        href="https://www.mongodb.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="MongoDB link"
                      >
                        <MongoDBIcon className="w-6 h-6" />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>MongoDB</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a
                        href="https://vercel.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Vercel link"
                      >
                        <VercelIcon className="w-6 h-6 text-white" />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Vercel</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
          </div>
          <div className="flex items-center flex-1 overflow-hidden transition-all duration-200 bg-linear-to-b from-blue-900 to-transparent group opacity-80 hover:opacity-100">
            <img
              src="./images/stocknow.webp"
              className="object-contain w-full transition-all duration-200 group-hover:scale-110 drop-shadow-2xl"
              alt="StockNow Project Screenshot"
            />
          </div>
        </div>
      </article> */}

      <article className="bg-linear-to-r from-[#242428] via-transparent to-[#242428] py-px">
        <div className="min-h-72 bg-[#101012] flex flex-col-reverse lg:flex-row">
          <div className="flex-1">
            <div className="flex flex-col h-full p-12">
              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 justify-between sm:gap-2 mb-4 lg:mb-8">
                <a
                  className="inline-flex items-center gap-2 hover:text-gray-400 transition-colors duration-200"
                  href="https://www.efectodialogo.uy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Efecto Diálogo website"
                >
                  <h3 className="text-2xl font-normal">Efecto Diálogo</h3>
                  <ExternalIcon className="w-4 h-4 text-gray-500" />
                </a>
                <span className="rounded-full bg-slate-800 px-2 py-1 text-xs">
                  Communication Degree Thesis Project
                </span>
              </div>
              <p className="mb-2 text-gray-400">
                Web project that showcases the thesis work carried out by
                Communication degree students from the University of Montevideo.
              </p>
              <p className="text-gray-400">
                We focus on telling and conveying each story as the user
                consumes the content. The challenge was to implement desired
                animations using the GSAP library, which added an additional
                layer of interactivity to the site.
              </p>
              <div className="flex items-center gap-4 pt-6 mt-auto">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a
                        href="https://astro.build/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Astro link"
                      >
                        <AstroIcon className="w-6 h-6" />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Astro</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a
                        href="https://tailwindcss.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Tailwind CSS link"
                      >
                        <TailwindIcon className="w-6 h-6" />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Tailwind CSS</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a
                        href="https://mdxjs.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="MDX link"
                      >
                        <MdxIcon className="w-8 h-8" />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>MDX</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a
                        href="https://greensock.com/gsap/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GreenSock GSAP link"
                      >
                        GSAP
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>GreenSock GSAP</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
          </div>
          <div className="flex items-center flex-1 overflow-hidden transition-all duration-200 bg-linear-to-b from-slate-700 to-transparent group opacity-80 hover:opacity-100">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="./images/efectodialogo.webp"
              className="object-contain w-full transition-all duration-200 group-hover:scale-110"
              alt="Efecto Diálogo Project Screenshot"
            />
          </div>
        </div>
      </article>

      <article className="bg-linear-to-r from-[#242428] via-transparent to-[#242428] py-px">
        <div className="min-h-72 bg-[#101012] flex flex-col-reverse lg:flex-row-reverse">
          <div className="flex-1">
            <div className="flex flex-col h-full p-12">
              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 justify-between sm:gap-2 mb-4 lg:mb-8">
                <a
                  className="inline-flex items-center gap-2 hover:text-gray-400 transition-colors duration-200"
                  href="https://clinica-florida.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Clínica Florida website"
                >
                  <h3 className="text-2xl font-normal">Clínica Florida</h3>
                  <ExternalIcon className="w-4 h-4 text-gray-500" />
                </a>
                <span className="rounded-full bg-teal-800 px-2 py-1 text-xs">
                  Physiotherapy Clinic App
                </span>
              </div>
              <p className="text-gray-400">
                Application designed for a physiotherapy clinic, providing a
                simple and intuitive way to manage patients through a
                calendar-based system.
              </p>
              <div className="flex items-center gap-4 pt-6 mt-auto">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a
                        href="https://react.dev/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="React link"
                      >
                        <ReactIcon className="w-6 h-6" />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>React</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a
                        href="https://redux.js.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Redux link"
                      >
                        <ReduxIcon className="w-6 h-6" />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Redux</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a
                        href="https://tailwindcss.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Tailwind CSS link"
                      >
                        <TailwindIcon className="w-6 h-6" />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Tailwind CSS</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a
                        href="https://expressjs.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Express link"
                      >
                        <ExpressIcon className="w-6 h-6" />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Express</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a
                        href="https://www.mongodb.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="MongoDB link"
                      >
                        <MongoDBIcon className="w-6 h-6" />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>MongoDB</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a
                        href="https://www.digitalocean.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="DigitalOcean link"
                      >
                        <DigitalOceanIcon className="w-6 h-6" />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>DigitalOcean</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
          </div>
          <div className="flex items-center flex-1 overflow-hidden transition-all duration-200 bg-linear-to-b from-teal-700 to-transparent group opacity-80 hover:opacity-100">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="./images/clinicaflorida.webp"
              className="object-contain w-full transition-all duration-200 group-hover:scale-110"
              alt="Clínica Florida Project Screenshot"
            />
          </div>
        </div>
      </article>
    </section>
  );
}

export default ProjectsSection;
