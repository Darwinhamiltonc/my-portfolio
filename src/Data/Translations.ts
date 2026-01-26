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
    aboutMeSection: {
      aboutTitle: "About Me",
      aboutDescription:
        "Hi, I’m Darwin Hamilton, a front-end web developer with a solid foundation in HTML, CSS, and JavaScript, focused on building modern and accessible web experiences. I’m characterized by fast learning, consistency, and continuous improvement through practice. I’m looking to keep growing, take on new challenges, and add value through clean, well-structured code.",
    },
  },
  es: {
    navBar: {
      contact: "Contacto",
    },
    heroSection: {
      heroRol: "Frontend Developer",
      heroStack: "React · CSS · TypeScript",
      heroDescription:
        "Me especializo en desarrollo frontend, construyendo interfaces de usuario modernas, accesibles y receptivas utilizando React, TypeScript y CSS limpio.",
      heroSocialTitle: "Social",
    },
    aboutMeSection: {
      aboutTitle: "Sobre Mí",
      aboutDescription:
        "Hola, soy Darwin Hamilton, un desarrollador web front-end con una sólida base en HTML, CSS y JavaScript, enfocado en construir experiencias web modernas y accesibles. Me caracterizo por aprender rápido, ser constante y mejorar continuamente a través de la práctica. Busco seguir creciendo, enfrentar nuevos desafíos y aportar valor mediante código limpio y bien estructurado.",
    },
  },
};

export type Language = keyof typeof translations;
export type Translations = typeof translations;
