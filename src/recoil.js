import { atom } from "recoil";

export const blogListAtom = atom({
  key: "blogList",
  default: {},
});

export const isDarkAtom = atom({
  key: "isDark",
  default: false,
});
