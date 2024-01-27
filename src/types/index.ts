export type Languages = "EN" | "JA" | "TW";

export type LanguagesList = {
  [key in Languages]: string;
};

export type NestedLanguagesList = {
  [key: string]: { [key in Languages]: string };
};
