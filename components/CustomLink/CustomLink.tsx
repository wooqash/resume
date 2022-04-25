import Link from "next/link";
import { KeyboardEvent, MouseEvent, forwardRef, ReactChild } from "react";
import { ILink } from "@/types/link.interface";
import { VisuallyHidden } from "@chakra-ui/react";

import style from "./links.module.scss";

type CustomLinkProps = {
  id?: string | number;
  url: string;
  newTab?: boolean;

  // link: ILink;
  // className?: string;
  locale?: string;
  children?: ReactChild;
  role?: string;
  tabIndex?: number;
  handleClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
  handleKeyDown?: (e: KeyboardEvent<HTMLAnchorElement>) => void;
};

const CustomLink = forwardRef<HTMLAnchorElement, CustomLinkProps>(
  (props, ref) => {
    const {
      id,
      url,
      newTab,
      locale,
      children,
      // className,
      role,
      tabIndex,
      handleClick,
    } = props;

    const isInternalLink = url.startsWith("/");
    // const classes = className ? { className } : {};
    const target = newTab ? { target: "_blank" } : { target: "_self" };
    const rel = !isInternalLink && newTab ? { rel: "noopener noreferrer" } : {};
    const roleAttr = role ? { role } : {};

    // For internal links, use the Next.js Link component
    if (isInternalLink) {
      const idAttr = id ? { id: `Internal_${id?.toString()}` } : {};
      return (
        <Link href={url} locale={locale} passHref>
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
        id={id?.toString()}
        href={url}
        {...target}
        {...rel}
        // { ...classes }
        {...roleAttr}
        tabIndex={tabIndex}
        ref={ref}
        onClick={handleClick}
      >
        {children}
      </a>
    );
  }
);

export default CustomLink;

CustomLink.displayName = "CustomLink";
