import { IMenuLink } from "@/types/menu-link";

export const isIMenuLinkArr = (list: any): list is IMenuLink[] => {
  return (
    list.length > 0 &&
    typeof list[0].label === "string" &&
    typeof list[0].url === "string" &&
    typeof list[0].newTab === "boolean"
  );
};
