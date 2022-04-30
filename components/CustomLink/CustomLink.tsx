import { KeyboardEvent, MouseEvent, ReactChild } from "react";
import { ILink } from "@/types/link.interface";
import TooltipLinkWrapper from "./TooltipLinkWrapper";
import Link from "./Link";

import style from "./links.module.scss";

type CustomLinkProps = {
  link: ILink;
  // className?: string;
  locale?: string;
  children?: ReactChild;
  handleClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
  handleKeyDown?: (e: KeyboardEvent<HTMLAnchorElement>) => void;
};

const CustomLink: React.FC<CustomLinkProps> = (props) => {
  const {
    link,
    locale,
    children,
    // className,
    handleClick,
  } = props;
  const { "aria-labelledby": labelledby } = link;

  // const classes = className ? { className } : {};

  // For internal links, use the Next.js Link component
  if (labelledby) {
    return (
      <TooltipLinkWrapper link={link}>
        <Link locale={locale} {...link} onClick={handleClick}>
          {children}
        </Link>
      </TooltipLinkWrapper>
    );
  }

  return (
    <Link locale={locale} {...link} onClick={handleClick}>
      {children}
    </Link>
  );
};
CustomLink.displayName = "CustomLink";

export default CustomLink;
