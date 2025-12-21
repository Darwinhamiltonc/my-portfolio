import "./App.css";
import NavBar from "./components/Navbar/NavBar.tsx";
import SectionHero from "./components/SectionHero/SectionHero.tsx";
function App() {
  return (
    <>
      <header className="p-header">
        <NavBar />
      </header>
      <main>
        <SectionHero />
      </main>
      <footer></footer>
    </>
  );
}

export default App;
