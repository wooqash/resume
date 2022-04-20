import { ILink } from "@/types/link";

export const isILinkArr = (list: any): list is ILink[] => {
  return (
    list.length > 0 &&
    typeof list[0].label === "string" &&
    typeof list[0].url === "string" &&
    typeof list[0].newTab === "boolean"
  );
};
