import { useColorMode } from "@chakra-ui/react";
import { useLanguageContext } from "contexts/language";
import { isIMenu } from "helpers/type-guards.helpers";
import { ILinkWithIcon } from "@/types/link.interface";
import { GLOBAL_LABELS } from "../../translations.constants";

import Icons from "../Icons";
import CustomLink from "../CustomLink";

import styles from "./MainMenu.module.scss";

type MainMenuProps = {};

const MainMenu: React.FC<MainMenuProps> = () => {
  const { lang } = useLanguageContext();
  const mList = GLOBAL_LABELS[lang].mainMenu;
  const menuList = isIMenu(mList) ? mList : null;
  const { colorMode } = useColorMode();

  return (
    <>
      {menuList && (
        <ul
          className={`${styles.list} ${
            colorMode == "dark" && styles["list--dark"]
          }`}
        >
          {menuList.items.map((link: ILinkWithIcon) => {
            return (
              <li
                key={`${link.label}_${link.id}`}
                className={styles.list__item}
              >
                <CustomLink link={link} locale={lang}>
                  <>
                    {link.label && (
                      <span className={styles.item__label}>{link.label}</span>
                    )}
                    {link.icon && (
                      <span className={styles.item__icon}>
                        <Icons type={link.icon} />
                      </span>
                    )}
                  </>
                </CustomLink>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default MainMenu;
