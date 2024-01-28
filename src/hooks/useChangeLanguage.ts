import { useState } from "react";
import { Languages } from "../types";

export const useChangeLanguage = () => {
  const [language, setLanguage] = useState<Languages>("JA");

  const updateLanguage = (targetLanguage: Languages) => {
    setLanguage(targetLanguage);
  };

  return { language, updateLanguage };
};
