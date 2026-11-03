import "./Profile.css";
import About from "../About/About";
import Skills from "../Skills/Skills";
import ContactForm from "../Contact/Contact";
import Experience from "../Experience/Experience";
import type { Language } from "../../Data/Translations";

type ProfileProps = {
  language: Language;
};

function Profile({ language }: ProfileProps) {
  return (
    <section className="profile-section">
      <div className="profile-grid">
        <div className="profile-left">
          <About language={language} />
          <Skills language={language} />
        </div>
        <div className="profile-right">
          <Experience language={language} />
          <ContactForm language={language} />
        </div>
      </div>
    </section>
  );
}

export default Profile;
