import { GLOBAL_LABELS } from "../../translations.constants";
import { useLanguageContext } from "contexts/language";
import { isIMenu } from "helpers/type-guards.helpers";
import { ILinkWithIcon } from "@/types/link.interface";
import Icons from "../Icons";
import CustomLink from "../CustomLink";

type MainMenuProps = {};

const MainMenu: React.FC<MainMenuProps> = () => {
  const { lang } = useLanguageContext();
  const mList = GLOBAL_LABELS[lang].mainMenu;
  const menuList = isIMenu(mList) ? mList : null;

  return (
    <>
      {menuList && (
        <ul>
          {menuList.items.map((link: ILinkWithIcon) => {
            return (
              <li key={`${link.label}_${link.id}`}>
                <CustomLink link={link} locale={lang}>
                  <>
                    {link.label && <span>{link.label}</span>}
                    {link.icon && <Icons type={link.icon} />}
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
