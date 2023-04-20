"use client";

import { Gradient } from "../lib/gradient";

function Hero() {
  if (typeof document !== "undefined") {
    const gradient = new Gradient();
    gradient.initGradient("#gradient-canvas");
  }
  return (
    <section className="relative grid place-content-center place-items-center min-h-[85vh] sm:min-h-[80vh] bg-blue-700 z-0 text-center">
      <h1 className="text-5xl sm:text-7xl font-bold font-wide leading-snug drop-shadow-md bg-clip-text text-transparent bg-gradient-to-b from-white/90 from-5% to-blue-100/60 mb-8">
        Diego <span className="block sm:inline-block">Do Santos</span>
      </h1>
      <p className="text-lg sm:text-2xl font-bold tracking-[6px] text-blue-100/80 drop-shadow uppercase max-w-[200px] sm:max-w-none">
        Creative Developer
      </p>
      <div className="absolute w-full top-0 bottom-0 -z-10 bg-gradient-to-t from-[#101012] to-transparent"></div>
      <canvas
        className="absolute inset-0 -z-20"
        id="gradient-canvas"
        data-transition-in
      />
    </section>
  );
}

export default Hero;
