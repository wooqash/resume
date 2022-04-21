import { IA11yItemProps } from "@/types/a11y-dropdown";
import { IMenuLink } from "@/types/menu-link";
import Icon from "../Icon";

type A11yDropdownMenuProps = {
  isOpen: boolean;
  items: IMenuLink[];
  itemProps: IA11yItemProps[];
};

const A11yDropdownMenu: React.FC<A11yDropdownMenuProps> = ({
  isOpen,
  items,
  itemProps,
}) => {
  return (
    <div className={isOpen ? "open" : ""} role="menu">
      {items.map((link) => {
        const target = link.newTab ? { target: "_blank" } : { target: "_self" };
        const rel = link.newTab ? { rel: "noopener noreferrer" } : {};
        return (
          <a {...itemProps} href={link.url} {...target} {...rel} key={link.id}>
            {link.icon && <Icon type={link.icon} />}
          </a>
        );
      })}
    </div>
  );
};

export default A11yDropdownMenu;
