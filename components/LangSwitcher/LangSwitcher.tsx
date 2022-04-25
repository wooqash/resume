import { VisuallyHidden } from "@chakra-ui/react";
import { KeyboardEvent, MouseEvent } from "react";
import { useLanguageContext } from "contexts/language";
import { GLOBAL_LABELS } from "translations.constants";
import { isILink } from "helpers/type-guards.helpers";
import CustomLink from "../CustomLink";

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

  return (
    <>
      {switchLink && (
        <CustomLink
          url={switchLink.url}
          locale={nextLocale}
          handleClick={handleLangChange}
        >
          <>
            {switchLink.label && <span>{switchLink.label}</span>}
            {ariaNewTabLabel && switchLink.newTab && (
              <VisuallyHidden>{ariaNewTabLabel}</VisuallyHidden>
            )}
          </>
        </CustomLink>
      )}
    </>
  );
};

export default LangSwitcher;
