import {
  AstroIcon,
  ExpressIcon,
  ExternalIcon,
  MdxIcon,
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
                <NextIcon className="w-6 h-6" />
                <TailwindIcon className="w-6 h-6" />
                <RadixIcon className="w-6 h-6" />
                <NestjsIcon className="w-6 h-6 text-white" />
                <VercelIcon className="w-6 h-6 text-white" />
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
                <AstroIcon className="w-6 h-6" />
                <TailwindIcon className="w-6 h-6" />
                <MdxIcon className="w-8 h-8" />
                <span>GSAP</span>
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
                <ReactIcon className="w-6 h-6" />
                <ReduxIcon className="w-6 h-6" />
                <TailwindIcon className="w-6 h-6" />
                <ExpressIcon className="w-6 h-6" />
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
