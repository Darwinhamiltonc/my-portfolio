export const translations = {
  en: {
    navBar: {
      contact: "Contact",
    },
  },
  es: {
    navBar: {
      contact: "Contacto",
    },
  },
};

export type Language = keyof typeof translations;
export type Translations = typeof translations;
