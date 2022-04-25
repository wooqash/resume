import { Link, VisuallyHidden } from "@chakra-ui/react";
import NextLink from "next/link";
import { KeyboardEvent, MouseEvent } from "react";
import { useLanguageContext } from "contexts/language";
import { GLOBAL_LABELS } from "translations.constants";
import { isILink } from "helpers/type-guards.helpers";

type LangSwitcherProps = {
  onLangChange: (
    e: KeyboardEvent<HTMLAnchorElement> | MouseEvent<HTMLAnchorElement>
  ) => void;
};

const LangSwitcher: React.FC<LangSwitcherProps> = ({ onLangChange }) => {
  const { lang } = useLanguageContext();
  const gAriaNewTabLabel = typeof GLOBAL_LABELS[lang].ariaNewTabLabel;
  const gLangSwitcher = GLOBAL_LABELS[lang].langSwitcher;
  const switchLink = isILink(gLangSwitcher) ? gLangSwitcher : null;
  const ariaNewTabLabel =
    typeof gAriaNewTabLabel === "string" ? gAriaNewTabLabel : "";
  const nextLocale = switchLink?.label
    ? switchLink?.label.toLocaleLowerCase()
    : "";

  console.log(nextLocale, lang);

  return (
    <>
      {switchLink && (
        <NextLink href={switchLink.url} passHref locale={nextLocale}>
          <Link>
            <>
              {switchLink.label}
              {ariaNewTabLabel && (
                <VisuallyHidden>{ariaNewTabLabel}</VisuallyHidden>
              )}
            </>
          </Link>
        </NextLink>
      )}
    </>
  );
};

export default LangSwitcher;
