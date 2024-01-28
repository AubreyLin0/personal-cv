import ContactArea from "./components/ContactArea";
import Footer from "./components/Footer";
import Introduce from "./components/Introduce";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import TopArea from "./components/TopArea";
import { useChangeLanguage } from "./hooks/useChangeLanguage";
import ContentLanguage from "./store";

function App() {
  const { language, updateLanguage } = useChangeLanguage();
  return (
    <ContentLanguage.Provider value={{ language, updateLanguage }}>
      <main className="font-ubuntu h-full">
        <Navbar />
        <TopArea />
        <Introduce />
        <Skills />
        <Portfolio />
        <ContactArea />
      </main>
      <Footer />
    </ContentLanguage.Provider>
  );
}

export default App;
