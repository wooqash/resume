import { useLangContext } from "context/lang.context";
import Link from "next/link";

type MainMenuProps = {};

const MainMenu: React.FC<MainMenuProps> = () => {
  const { lang } = useLangContext();
  return (
    <>
      {lang === "pl" ? (
        <ul>
          <li>
            <Link href="/" locale="pl">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/o-mnie" locale="pl">
              <a>O mnie</a>
            </Link>
          </li>
          <li>
            <Link href="/kontakt" locale="pl">
              <a>Kontakt</a>
            </Link>
          </li>
        </ul>
      ) : (
        <ul>
          <li>
            <Link href="/en" locale="en">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about" locale="en">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/contact" locale="en">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      )}
    </>
  );
};

export default MainMenu;
