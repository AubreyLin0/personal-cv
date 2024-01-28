import Introduce from "./componets/Introduce";
import Navbar from "./componets/Navbar";
import Portfolio from "./componets/Portfolio";
import Skills from "./componets/Skills";
import TopArea from "./componets/TopArea";
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
      </main>
    </ContentLanguage.Provider>
  );
}

export default App;
