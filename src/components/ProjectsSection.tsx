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
  NestjsIcon,
  NextIcon,
  RadixIcon,
  ReactIcon,
  ReduxIcon,
  TailwindIcon,
  VercelIcon,
} from "@/components/Icons";

function ProjectsSection() {
  return (
    <section className="bg-gradient-to-r from-[#242428] via-transparent to-[#242428] pt-[1px] text-white">
      <div className="h-72 bg-[#101012] px-12 flex items-center">
        <h2 className="text-5xl font-medium font-wide bg-clip-text text-transparent bg-gradient-to-b from-white/90 from-5% to-blue-100/60">
          Projects
        </h2>
      </div>

      <article className="bg-gradient-to-r from-[#242428] via-transparent to-[#242428] py-[1px]">
        <div className="min-h-72 bg-[#101012] flex">
          <div className="flex-1">
            <div className="flex flex-col h-full p-12">
              <div className="inline-flex items-center gap-2 mb-4">
                <h3 className="text-2xl font-normal">StockNow</h3>
                <a href="#">
                  <ExternalIcon className="w-4 h-4 text-gray-300" />
                </a>
              </div>
              <p className="text-gray-300">
                Solución completa para controlar el inventario y las ventas,
                permitiendo crear productos y categorías, gestionar ventas,
                clientes y vendedores en una interfaz intuitiva e interactiva.
              </p>
              <p className="text-gray-300">
                Ofrece un control total del inventario en tiempo real para
                asegurar que siempre sepa cuánto tiene disponible para la venta,
                ayudando a simplificar el proceso de seguimiento y optimizar la
                eficiencia del flujo de trabajo.
              </p>
              <div className="flex items-center gap-4 mt-auto">
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
          <div className="flex-1 overflow-hidden transition-all duration-200 bg-blue-900 group opacity-80 hover:opacity-100">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="./images/stocknow.png"
              className="object-contain w-full transition-all duration-200 group-hover:scale-110 drop-shadow-2xl"
              alt="StockNow Project Screenshot"
            />
          </div>
        </div>
      </article>

      <article className="bg-gradient-to-r from-[#242428] via-transparent to-[#242428] py-[1px]">
        <div className="min-h-72 bg-[#101012] flex flex-row-reverse">
          <div className="flex-1">
            <div className="flex flex-col h-full p-12 ">
              <div className="inline-flex items-center gap-2 mb-4">
                <h3 className="text-2xl font-normal">Efecto Diálogo</h3>
              </div>
              <p className="text-gray-300">
                Proyecto web que exhibe el trabajo de tesis realizado por
                estudiantes de la Licenciatura en Comunicación, pertenecientes a
                la Universidad de Montevideo. Nos enfocamos en contar y
                transmitir cada historia a medida que el usuario consume el
                contenido. El reto fue implementar las animaciones deseadas
                utilizando la librería GSAP, lo que añadió una capa adicional de
                interactividad al sitio.
              </p>
              <div className="flex items-center gap-4 mt-auto">
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
          <div className="flex-1 overflow-hidden transition-all duration-200 bg-zinc-900 group opacity-80 hover:opacity-100">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="./images/efectodialogo.png"
              className="object-contain w-full transition-all duration-200 group-hover:scale-110"
              alt="StockNow Project Screenshot"
            />
          </div>
        </div>
      </article>

      <article className="bg-gradient-to-r from-[#242428] via-transparent to-[#242428] py-[1px]">
        <div className="min-h-72 bg-[#101012] flex">
          <div className="flex-1">
            <div className="flex flex-col h-full p-12 ">
              <div className="inline-flex items-center gap-2 mb-4">
                <h3 className="text-2xl font-normal">Agenda de Pacientes</h3>
              </div>
              <p className="text-gray-300">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Corporis amet dignissimos aut aspernatur tempora ratione a
                nostrum minus qui eaque asperiores blanditiis ad maxime labore,
                molestias atque velit dolorem expedita?
              </p>
              <div className="flex items-center gap-4 mt-auto">
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
          <div className="flex-1 overflow-hidden transition-all duration-200 bg-emerald-900 group opacity-80 hover:opacity-100">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="./images/agenda-clinica.png"
              className="object-contain w-full transition-all duration-200 group-hover:scale-110"
              alt="StockNow Project Screenshot"
            />
          </div>
        </div>
      </article>
    </section>
  );
}

export default ProjectsSection;
