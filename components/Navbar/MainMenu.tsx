import { DEFAULT_LABELS } from "../../constants";
import { useLangContext } from "context/lang.context";
import Link from "next/link";
import { ILink } from "@/types/link";
import { isIMenuLinkArr } from "helpers/type-guards.helpers";
import { IMenuLink } from "@/types/menu-link";
import Icon from "../Icon";

type MainMenuProps = {};

const MainMenu: React.FC<MainMenuProps> = () => {
  const { lang } = useLangContext();
  const mList = DEFAULT_LABELS[lang].mainMenu;
  const menuList = isIMenuLinkArr(mList) ? mList : null;

  return (
    <>
      {menuList && (
        <ul>
          {menuList.map((link: IMenuLink) => {
            return (
              <li key={`${link.label}_${link.id}`}>
                <Link href={link.url} locale={lang}>
                  <a aria-labelledby={`MenuLabel_${link.id}`}>
                    {link.icon && <Icon type={link.icon} />}
                    <span role="tooltip" id={`MenuLabel_${link.id}`}>
                      {link.label}
                    </span>
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default MainMenu;
