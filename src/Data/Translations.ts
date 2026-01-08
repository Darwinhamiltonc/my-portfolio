export const translations = {
  en: {
    navBar: {
      contact: "Contact",
    },
    heroSection: {
      heroRol: "Frontend Developer",
      heroStack: "React · CSS · TypeScript",
      heroDescription:
        "I specialize in frontend development, building modern, accessible, and responsive user interfaces using React, TypeScript, and clean CSS.",
      heroSocialTitle: "Social",
    },
  },
  es: {
    navBar: {
      contact: "Contacto",
    },
    heroSection: {
      heroRol: "Desarrollador Frontend",
      heroStack: "React · CSS · TypeScript",
      heroDescription:
        "Me especializo en desarrollo frontend, construyendo interfaces de usuario modernas, accesibles y receptivas utilizando React, TypeScript y CSS limpio.",
      heroSocialTitle: "Social",
    },
  },
};

export type Language = keyof typeof translations;
export type Translations = typeof translations;
