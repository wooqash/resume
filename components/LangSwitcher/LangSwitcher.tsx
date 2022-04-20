import { useLangContext } from "context/lang.context";
import { KeyboardEvent, MouseEvent } from "react";

import { ILink } from "types/link";
import CustomLink from "../CustomLink";
import { DEFAULT_LABELS } from "../../constants";

type LangSwitcherProps = {
  onLangChange: (
    e: KeyboardEvent<HTMLAnchorElement> | MouseEvent<HTMLAnchorElement>
  ) => void;
};

const LangSwitcher: React.FC<LangSwitcherProps> = ({ onLangChange }) => {
  const { lang } = useLangContext();
  const defaultAriaNewTabLabel = DEFAULT_LABELS[lang].ariaNewTabLabel;
  const switchLink: ILink = {
    id: "LanguageSwitcher",
    label: lang === "pl" ? "EN" : "PL",
    url: "/",
    newTab: false,
    ariaNewTabLabel:
      typeof defaultAriaNewTabLabel === "string" ? defaultAriaNewTabLabel : "",
  };

  return (
    <CustomLink
      link={switchLink}
      locale={switchLink.label.toLocaleLowerCase()}
      handleClick={onLangChange}
    >
      <span>{switchLink.label}</span>
    </CustomLink>
  );
};

export default LangSwitcher;
