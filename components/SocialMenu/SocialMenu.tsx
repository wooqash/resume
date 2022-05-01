import { IconType } from "@/types/icon.enum";
import { ILinkWithIcon } from "@/types/link.interface";
import {
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { useLanguageContext } from "contexts/language";
import { isIMenu } from "helpers/type-guards.helpers";
import { GLOBAL_LABELS } from "translations.constants";
import Icons from "../Icons";

type SocialMenuProps = {};

const SocialMenu: React.FC<SocialMenuProps> = () => {
  const { lang } = useLanguageContext();
  const sList = GLOBAL_LABELS[lang].socialLinks;
  const menuList = isIMenu(sList) ? sList : null;

  return (
    <Menu placement="left" direction="rtl">
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<Icons type={IconType.SOCIAL} />}
        variant="ghost"
      />
      <MenuList
        display="flex"
        w="auto"
        border="0"
        shadow="0"
        justifyContent="space-around"
      >
        {menuList &&
          menuList.items.map((link: ILinkWithIcon) => {
            return (
              <MenuItem w="auto" key={link.id}>
                <Link href={link.href} isExternal>
                  <Icons type={link.icon} />
                </Link>
              </MenuItem>
            );
          })}
      </MenuList>
    </Menu>
  );
};

export default SocialMenu;
