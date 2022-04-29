import { KeyboardEvent, MouseEvent } from "react";
import { useLanguageContext } from "contexts/language";
import { isILink } from "helpers/type-guards.helpers";
import CustomLink from "../CustomLink";
import { GLOBAL_LABELS } from "translations.constants";

type LangSwitcherProps = {};

const LangSwitcher: React.FC<LangSwitcherProps> = () => {
  const { lang, changeLang } = useLanguageContext();
  const gAriaNewTabLabel = typeof GLOBAL_LABELS[lang].ariaNewTabLabel;
  const gLangSwitcher = GLOBAL_LABELS[lang].langSwitcher;
  const switchLink = isILink(gLangSwitcher) ? gLangSwitcher : null;
  const ariaNewTabLabel =
    typeof gAriaNewTabLabel === "string" ? gAriaNewTabLabel : "";

  const nextLocale = switchLink?.label
    ? switchLink?.label.toLocaleLowerCase()
    : "";

  const handleLangChange = (
    e: KeyboardEvent<HTMLAnchorElement> | MouseEvent<HTMLAnchorElement>
  ) => {
    lang === "pl" ? changeLang("en") : changeLang("pl");
  };

  console.log(switchLink);

  return (
    <>
      {switchLink && (
        <CustomLink
          link={switchLink}
          locale={nextLocale}
          handleClick={handleLangChange}
        >
          {switchLink.label && <span>{switchLink.label}</span>}
        </CustomLink>
      )}
    </>
  );
};

export default LangSwitcher;
