import { DEFAULT_LABELS } from "../../constants";
import { useLangContext } from "context/lang.context";
import Link from "next/link";
import { ILink } from "@/types/link";

type MainMenuProps = {};

const MainMenu: React.FC<MainMenuProps> = () => {
  const { lang } = useLangContext();
  const mList = DEFAULT_LABELS[lang].mainMenu;

  const isILinkArr = (list: any): list is ILink[] => {
    return (
      list.length > 0 &&
      typeof list[0].label === "string" &&
      typeof list[0].url === "string" &&
      typeof list[0].newTab === "boolean"
    );
  };

  const menuList = isILinkArr(mList) ? mList : null;

  return (
    <>
      {menuList && (
        <ul>
          {menuList.map((link: ILink) => {
            return (
              <li key={`${link.label}_${link.id}`}>
                <Link href={link.url} locale={lang}>
                  <a>{link.label}</a>
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
