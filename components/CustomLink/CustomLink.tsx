import Link from "next/link";
import { KeyboardEvent, MouseEvent, forwardRef } from "react";
import { ILink } from "types/link";
import VisuallyHidden from "@/components/VisuallyHidden";

import style from "./links.module.scss";

type CustomLinkProps = {
  link: ILink;
  // className?: string;
  locale?: string;
  children?: React.ReactChild;
  role?: string;
  tabIndex?: number;
  handleClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
  handleKeyDown?: (e: KeyboardEvent<HTMLAnchorElement>) => void;
};

const CustomLink = forwardRef<HTMLAnchorElement, CustomLinkProps>(
  (props, ref) => {
    const {
      link,
      locale,
      children,
      // className,
      role,
      tabIndex,
      handleClick,
    } = props;

    const isInternalLink = link.url.startsWith("/");
    // const classes = className ? { className } : {};
    const target = link.newTab ? { target: "_blank" } : { target: "_self" };
    const rel =
      !isInternalLink && link.newTab ? { rel: "noopener noreferrer" } : {};
    const roleAttr = role ? { role } : {};

    // For internal links, use the Next.js Link component
    if (isInternalLink) {
      const idAttr = link.id ? { id: `Internal${link.id?.toString()}` } : {};
      return (
        <Link href={link.url} as={link.url} locale={locale} passHref>
          <a
            {...idAttr}
            // { ...classes }
            {...roleAttr}
            tabIndex={tabIndex}
            ref={ref}
            onClick={handleClick}
          >
            {children}
          </a>
        </Link>
      );
    }

    return (
      <a
        id={link.id?.toString()}
        href={link.url}
        {...target}
        {...rel}
        // { ...classes }
        {...roleAttr}
        tabIndex={tabIndex}
        ref={ref}
        onClick={handleClick}
      >
        {children}
        {link.newTab && link.ariaNewTabLabel && (
          <VisuallyHidden label={link.ariaNewTabLabel} />
        )}
      </a>
    );
  }
);

export default CustomLink;

CustomLink.displayName = "CustomLink";
