import "./Footer.css";
import { translations } from "../../Data/Translations";
import type { Language } from "../../Data/Translations";

type FooterProps = {
  language: Language;
};

function Footer({ language }: FooterProps) {
  return (
    <p className="footer-text">{translations[language].footer.copyright}</p>
  );
}

export default Footer;
