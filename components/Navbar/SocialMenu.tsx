import { IconType } from "@/types/icon";
import { DEFAULT_LABELS } from "../../constants";
import { useLangContext } from "context/lang.context";
import useDropdownMenu from "react-accessible-dropdown-menu-hook";
import A11yDropdownButton from "../A11yDropdownButton";
import A11yDropdownMenu from "../A11yDropdownMenu";
import Icon from "../Icon";
import { isIButton, isIMenuLinkArr } from "helpers/type-guards.helpers";

type SocialMenuProps = {};

const SocialMenu: React.FC<SocialMenuProps> = () => {
  const { lang } = useLangContext();
  const sButton = DEFAULT_LABELS[lang].socialButton;
  const socialLinks = DEFAULT_LABELS[lang].socialLinks;
  const socialLinksList = isIMenuLinkArr(socialLinks) ? socialLinks : null;
  const socialButton = isIButton(sButton) ? sButton : null;
  const { buttonProps, itemProps, isOpen } = useDropdownMenu(
    socialLinksList?.length || 0
  );
  return (
    <>
      {buttonProps && socialButton && (
        <A11yDropdownButton
          isOpen={isOpen}
          buttonProps={buttonProps}
          content={socialButton}
        >
          <Icon type={IconType.SOCIAL} />
        </A11yDropdownButton>
      )}
      {socialLinksList && (
        <A11yDropdownMenu
          isOpen={isOpen}
          items={socialLinksList}
          itemProps={itemProps}
        />
      )}
    </>
  );
};

export default SocialMenu;
