import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import ar from "./locales/ar.json";
import en from "./locales/en.json";

const Dlng = localStorage.getItem("lng") || "en";
document.body.dir = Dlng === "en" ? "ltr" : "rtl";

const resources = {
  en: { common: en },
  ar: { common: ar },
};

i18next.use(initReactI18next).init({
  resources,
  lng: Dlng,
  fallbackLng: "en",
  ns: ["common"],
  defaultNS: "common",
  interpolation: { escapeValue: false },
});

i18next.on("languageChanged", (lng) => {
  document.body.dir = lng === "en" ? "ltr" : "rtl";
  localStorage.setItem("lng", lng);
});

export default i18next;
