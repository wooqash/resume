import NextLink from "next/link";
import { KeyboardEvent, MouseEvent, forwardRef, ReactChild } from "react";
import { ILink, ILinkWithIcon } from "@/types/link.interface";
import LinkWithTooltip from "./LinkWithTooltip";
import LinkChild from "./LinkChild";

import style from "./links.module.scss";

type CustomLinkProps = {
  link: ILink | ILinkWithIcon;
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
  const { url, "aria-tooltip": labelledby } = link;

  const isInternalLink = url.startsWith("/");
  // const classes = className ? { className } : {};

  // For internal links, use the Next.js Link component
  if (isInternalLink) {
    return (
      <>
        {labelledby ? (
          <LinkWithTooltip link={link}>
            <NextLink href={url} locale={locale} passHref>
              <LinkChild link={link}>{children}</LinkChild>
            </NextLink>
          </LinkWithTooltip>
        ) : (
          <NextLink href={url} locale={locale} passHref>
            <LinkChild link={link}>{children}</LinkChild>
          </NextLink>
        )}
      </>
    );
  }

  return (
    <>
      {labelledby ? (
        <LinkWithTooltip link={link}>
          <LinkChild link={link}>{children}</LinkChild>
        </LinkWithTooltip>
      ) : (
        <LinkChild link={link}>{children}</LinkChild>
      )}
    </>
  );
};
CustomLink.displayName = "CustomLink";

export default CustomLink;
