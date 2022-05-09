import NextLink from "next/link";
import { KeyboardEvent, MouseEvent } from "react";
import { Button } from "@chakra-ui/react";
import { useLanguageContext } from "contexts/language";
import { isILink } from "helpers/type-guards.helpers";
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
    e: KeyboardEvent<HTMLElement> | MouseEvent<HTMLElement>
  ) => {
    lang === "pl" ? changeLang("en") : changeLang("pl");
  };

  return (
    <>
      {switchLink && switchLink.href && (
        <NextLink href={switchLink.href} locale={nextLocale} passHref>
          <Button as="a" width="40px" height="40px" onClick={handleLangChange}>
            {switchLink.label}
          </Button>
        </NextLink>
      )}
    </>
  );
};

export default LangSwitcher;
