export type Languages = "EN" | "JA" | "TW";

export type LanguagesList = {
  [key in Languages]: string | string[];
};
