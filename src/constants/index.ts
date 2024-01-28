import { LanguagesList, NestedLanguagesList } from "../types";

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

export const MENU_TITLE: LanguagesList = {
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
    EN: "I'm Aubrey",
    JA: "リンと申します",
    TW: "我是林怡萱",
  },
  third: {
    EN: "A FrontEnd Engineer",
    JA: "フロントエンドエンジニア",
    TW: "前端工程師",
  },
};

export const INTRODUCE_MESSAGE: NestedLanguagesList = {
  title: {
    EN: "Hello! I'm Aubrey",
    JA: "こんにちは、リンです",
    TW: "您好，我是林怡萱",
  },
  content: {
    EN: `Born in Taiwan. After leading the former company's new official website design team, my interest in web design grew, leading me to embark on self-study in web development in 2021.\n\nIn 2022, I joined Aiful as a Front-end Engineer, specializing in React, TypeScript, and Next.js. I am actively involved in the development of an in-house customer management system, taking charge of screen construction, implementing unit tests, and participating in team code reviews.`,
    JA: "台湾生まれ。前職で公式サイトリニューアルチームを担当させていただいた後、ウェブの開発に興味を持ち、2021年からWeb開発を学び始めました。\n2022年にフロントエンドエンジニアとしてアイフルに入社しました。React、TypeScript、Next.jsで社内顧客管理システムの開発に携わり、画面構築や単体テストの実施、チームのコードレビューなどを担当しています。",
    TW: "台灣屏東人。在帶領前公司的官網設計團隊後，開始對網頁設計產生興趣，並在2021年開始自學網頁開發。\n2022年，我加入Aiful擔任前端工程師，主要利用React, TypeScript和Next.js等技術開發。負責內部客戶管理系統的開發、實施單元測試並參與Code review。",
  },
};

export const INTRODUCE_TABLE: NestedLanguagesList = {
  age: {
    EN: "Age",
    JA: "年齢",
    TW: "年齡",
  },
  tel: {
    EN: "Phone",
    JA: "電話番号",
    TW: "聯絡電話",
  },
  address: {
    EN: "Address",
    JA: "住所",
    TW: "居住地",
  },
  addressContent: {
    EN: "Osaka, Japan",
    JA: "大阪",
    TW: "大阪",
  },
  certification: {
    EN: "Certification",
    JA: "資格",
    TW: "證書",
  },
};

export const SKILL_SUBTITLE = {
  EN: "I am a quick learner and specialize in a multitude of skills required for web application development.",
  JA: "勉強熱心で、Web開発に必要なスキルを持っています",
  TW: "我熱衷於學習新技術，並擁有網頁開發所需的技能",
};
