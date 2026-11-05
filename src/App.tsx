import "./App.css";
import { useState, useEffect } from "react";
import type { Language } from "./Data/Translations";
import NavBar from "./components/Navbar/NavBar";
import SectionHero from "./components/SectionHero/SectionHero";
import Projects from "./components/Projects/Projects";
import Profile from "./components/Profile/Profile";
import Footer from "./components/Footer/Footer";
import Reveal from "./components/Reveal/Reveal";
function App() {
  const [language, SetLanguage] = useState<Language>("en");

  const toggleLanguage = () => {
    SetLanguage((prev) => (prev === "en" ? "es" : "en"));
  };


   useEffect(() => {
    alert(
      "This web is still in progress, but don't worry everything will be done soon😼",
    );
  }, []); 
  return (
    <>
      <header className="p-header">
        <NavBar onToggleLanguage={toggleLanguage} language={language} />
      </header>
      <main>
        <SectionHero language={language} />
          <Reveal>
          <Projects language={language} />
          </Reveal>
          <Profile language={language} />

      </main>

      <footer>
        <Footer language={language} />
      </footer>
    </>
  );
}

export default App;
