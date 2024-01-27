export type Languages = "EN" | "JA" | "TW";

export type LanguagesList = {
  [key in Languages]: string;
};

export type NestedLanguagesList = {
  [key in Languages]: { [key in Languages]: string };
};
