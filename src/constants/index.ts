import { LanguagesList, NestedLanguagesList } from "../types";

export const LINKS: NestedLanguagesList = {
  about: {
    EN: "About",
    JA: "自己紹介",
    TW: "關於我",
  },
  skills: {
    EN: "Skills",
    JA: "スキル",
    TW: "技能",
  },
  portfolio: {
    EN: "Portfolio",
    JA: "ポートフォリオ",
    TW: "作品集",
  },
  contact: {
    EN: "Contact",
    JA: "連絡先",
    TW: "聯絡我",
  },
};

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

export const FORM_LABELS: NestedLanguagesList = {
  name: {
    EN: "Name",
    JA: "お名前",
    TW: "姓名",
  },
  email: {
    EN: "Email",
    JA: "メールアドレス",
    TW: "Email",
  },
  title: {
    EN: "Title",
    JA: "件名",
    TW: "標題",
  },
  content: {
    EN: "Message",
    JA: "本文",
    TW: "內文",
  },
};

export const ERROR_MESSAGES: NestedLanguagesList = {
  required: {
    EN: "Please fill out this field",
    JA: "必須項目です",
    TW: "必須欄位",
  },
  email: {
    EN: "Please provide the correct email address.",
    JA: "正しいメールアドレスを入力してください",
    TW: "請輸入正確的電子郵箱地址",
  },
};

export const CONTACT_TEXT: NestedLanguagesList = {
  title: {
    EN: "Let's have a talk!",
    JA: "お気軽にお問い合わせください",
    TW: "讓我們聊聊吧！",
  },
  content: {
    EN: "If you enjoy my work or have any other questions, please feel free to reach out to me using the contact form. \nI'll respond as promptly as possible. \n\nLooking forward to hearing from you!",
    JA: "作品に興味を持っていただけたり、その他質問があれば、お気軽にお問い合わせフォームからご連絡ください。\nありがとうございます。",
    TW: `如果對我的作品有興趣，或者有其他疑問的話，歡迎寄信給我。\n收到信後我會盡快回覆您，謝謝。`,
  },
};

export const ALERT_MESSAGES: NestedLanguagesList = {
  success: {
    EN: "Send successfully",
    JA: "送信完了しました",
    TW: "送信成功",
  },
  error: {
    EN: "Delivery failed. Please contact me by other method.",
    JA: "送信失敗しました。申し訳ございませんが、他の連絡方法でご連絡ください。",
    TW: "送信失敗。麻煩請用其他聯絡方式聯絡我。",
  },
};

export const FORM_DEFAULT_VALUE = {
  name: "",
  email: "",
  title: "",
  content: "",
};
