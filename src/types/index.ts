export type Languages = "EN" | "JA" | "TW";

export type Size = "small" | "normal" | "medium" | "large";

export type LanguagesList = {
  [key in Languages]: string;
};

export type NestedLanguagesList = {
  [key: string]: { [key in Languages]: string };
};

export type SizeList = { [key in Size]: String };

export type ContactFormValue = {
  name: string;
  email: string;
  title: string;
  content: string;
};
