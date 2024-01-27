import Introduce from "./componets/Introduce";
import Navbar from "./componets/Navbar";
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
      </main>
    </ContentLanguage.Provider>
  );
}

export default App;
