import { Languages, LanguagesList, NestedLanguagesList } from "../types";

export const LINKS: LanguagesList[] = [
  {
    EN: "About",
    JA: "自己紹介",
    TW: "關於我",
  },
  {
    EN: "Skills",
    JA: "スキル",
    TW: "技能",
  },
  {
    EN: "Portfolio",
    JA: "ポートフォリオ",
    TW: "作品集",
  },
  {
    EN: "Contact",
    JA: "連絡先",
    TW: "聯絡我",
  },
];

export const MENU_TITLE = {
  EN: "Language",
  JA: "言語",
  TW: "語言",
};

export const LANGUAGES_LIST: NestedLanguagesList = {
  EN: {
    EN: "EN",
    JA: "JA",
    TW: "TW",
  },
  JA: {
    EN: "英語",
    JA: "日本語",
    TW: "繁体字",
  },
  TW: {
    EN: "英文",
    JA: "日文",
    TW: "中文",
  },
};

export const TOP_MESSAGE: NestedLanguagesList = {
  first: {
    EN: "Hi!",
    JA: "初めまして",
    TW: "Hi!",
  },
  second: {
    EN: "I'm Aubrey Lin",
    JA: "リンと申します",
    TW: "我是林怡萱",
  },
  third: {
    EN: "FrontEnd Engineer",
    JA: "フロントエンドエンジニア",
    TW: " 前端工程師",
  },
};
