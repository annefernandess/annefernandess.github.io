import { pt } from "./pt";
import { en } from "./en";

export const homePath = { pt: "/", en: "/en/" } as const;
type Lang = keyof typeof homePath;

const dicts = { pt, en };

export const langOf = (locale: string | undefined): Lang =>
  locale === "en" ? "en" : "pt";
export const useT = (locale: string | undefined) => dicts[langOf(locale)];
