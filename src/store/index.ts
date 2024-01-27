import { createContext } from "react";
import { Languages } from "../types";

type LanguagesContextValue = {
  updateLanguage: (targetLanguage: Languages) => void;
  language: Languages;
};

const ContentLanguage = createContext<LanguagesContextValue>({
  updateLanguage: () => {},
  language: "EN",
});

export default ContentLanguage;
