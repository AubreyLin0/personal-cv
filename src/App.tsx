import Navbar from "./componets/Navbar";
import { useChangeLanguage } from "./hooks/useChangeLanguage";
import ContentLanguage from "./store";

function App() {
  const { language, updateLanguage } = useChangeLanguage();
  return (
    <ContentLanguage.Provider value={{ language, updateLanguage }}>
      <main className="font-ubuntu bg-base-white h-full">
        <Navbar />
      </main>
    </ContentLanguage.Provider>
  );
}

export default App;
