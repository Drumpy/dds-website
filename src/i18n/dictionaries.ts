import type { Locale } from "./locale";

const en = {
  meta: {
    title: "Diego Do Santos | Full-stack Developer",
    description:
      "I build web products from Uruguay: BodaSimple.uy, a wedding organizer for couples, and Drumpy World, a 3D plaza for Twitch chats.",
  },
  hero: {
    location: "Working from Uruguay",
    subtitle: "Full-stack developer with an eye for design",
    featuredLabel: "Featured projects",
    scrollToProjects: "Go to projects",
    languageLabel: "Language",
  },
  socials: {
    github: "GitHub",
    linkedin: "LinkedIn",
    email: "Email",
  },
  featured: {
    bodasimple: "A wedding organizer for couples",
    drumpy: "A 3D plaza for Twitch chats",
  },
  projects: {
    heading: "Things I’ve made",
    screenshotAlt: "{name} — project screenshot",
    bodasimple: {
      tag: "Wedding organizer",
      description: [
        "Weddings, minus the spreadsheet. Digital invitations, guests, confirmations and messages live in one place.",
        "It covers the part where weddings lose track of people, from the invitation to the final headcount, and tells you who hasn't answered yet.",
      ],
    },
    drumpy: {
      tag: "3D social world",
      description: [
        "A 3D plaza for a Twitch channel. You walk in with Twitch (or as a guest), and the chat is in the room with you.",
        "The stream plays on a big screen, there's a cinema, and the games open as portals you step into.",
      ],
    },
    hlEstudio: {
      tag: "Architecture studio site",
      description: [
        "The site for an architecture studio. Their work comes first, and getting in touch doesn't mean hunting for an email.",
      ],
    },
    coCami: {
      tag: "Wedding invitation",
      description: [
        "A digital wedding invitation that looks like an invitation, with a guest list that actually works underneath.",
        "The couple shares the details, hands out one code per guest, and watches the RSVPs come in. The code is what opens it.",
      ],
    },
    efectoDialogo: {
      tag: "Communication thesis",
      description: [
        "A site that gathers the thesis projects of Communication students at the University of Montevideo.",
        "Each story is told as you scroll through it. The hard part was the motion: all GSAP, tuned by hand so the stories land.",
      ],
    },
    clinicaFlorida: {
      tag: "Physiotherapy clinic",
      description: [
        "An app for a physiotherapy clinic. Every patient sits on a calendar, which is really all a one-desk clinic needs.",
      ],
    },
  },
};

export type Dictionary = typeof en;

const es: Dictionary = {
  meta: {
    title: "Diego Do Santos | Desarrollador full-stack",
    description:
      "Hago productos web desde Uruguay: BodaSimple.uy, un organizador de bodas para parejas, y Drumpy World, una plaza 3D para chats de Twitch.",
  },
  hero: {
    location: "Trabajando desde Uruguay",
    subtitle: "Desarrollador full-stack con ojo para el diseño",
    featuredLabel: "Proyectos destacados",
    scrollToProjects: "Ir a los proyectos",
    languageLabel: "Idioma",
  },
  socials: {
    github: "GitHub",
    linkedin: "LinkedIn",
    email: "Email",
  },
  featured: {
    bodasimple: "Un organizador de bodas para parejas",
    drumpy: "Una plaza 3D para chats de Twitch",
  },
  projects: {
    heading: "Cosas que hice",
    screenshotAlt: "{name} — captura del proyecto",
    bodasimple: {
      tag: "Organizador de bodas",
      description: [
        "Una boda sin planilla. Invitaciones digitales, invitados, confirmaciones y mensajes en un solo lugar.",
        "Cubre la parte donde las bodas pierden el rastro de la gente, de la invitación al número final, y te avisa quién todavía no contestó.",
      ],
    },
    drumpy: {
      tag: "Mundo social 3D",
      description: [
        "Una plaza 3D para un canal de Twitch. Entrás con Twitch (o como invitado) y el chat está en la sala con vos.",
        "El stream se ve en pantalla grande, hay un cine, y los juegos se abren como portales por los que entrás caminando.",
      ],
    },
    hlEstudio: {
      tag: "Sitio de arquitectura",
      description: [
        "El sitio de un estudio de arquitectura. Los proyectos van adelante, y escribirles no obliga a buscar un mail perdido.",
      ],
    },
    coCami: {
      tag: "Invitación de boda",
      description: [
        "Una invitación de boda digital que parece una invitación, con una lista de invitados que funciona de verdad abajo.",
        "La pareja comparte los detalles, entrega un código por invitado y ve llegar las confirmaciones. El código es lo que la abre.",
      ],
    },
    efectoDialogo: {
      tag: "Tesis de Comunicación",
      description: [
        "Un sitio que reúne los proyectos de tesis de estudiantes de Comunicación de la Universidad de Montevideo.",
        "Cada historia se cuenta mientras scrolleás. Lo difícil fue el movimiento: todo GSAP, ajustado a mano para que las historias caigan bien.",
      ],
    },
    clinicaFlorida: {
      tag: "Clínica de fisioterapia",
      description: [
        "Una app para una clínica de fisioterapia. Cada paciente vive en un calendario, que es todo lo que necesita un mostrador con una sola persona.",
      ],
    },
  },
};

const dictionaries: Record<Locale, Dictionary> = { en, es };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
