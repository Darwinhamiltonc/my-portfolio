import "./Profile.css";
import About from "../About/About";
import Skills from "../Skills/Skills";
import ContactForm from "../Contact/Contact";
import Experience from "../Experience/Experience";
import Reveal from "../Reveal/Reveal";
import type { Language } from "../../Data/Translations";

type ProfileProps = {
  language: Language;
};

function Profile({ language }: ProfileProps) {
  return (
    <section className="profile-section">
      <div className="profile-grid">
        <div className="profile-left">
          <Reveal>
          <About language={language} />
          </Reveal>
          <Reveal>
          <Skills language={language} />
          </Reveal>
        </div>
        <div className="profile-right">
          <Reveal>
          <Experience language={language} />
          </Reveal>
          <Reveal>
          <ContactForm language={language} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default Profile;
