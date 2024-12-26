import { atom } from "recoil";

export const brandName = atom({
  key: "brand",
  default: {
    name: "Instagram",
    title: "Happening now"
  },
});
