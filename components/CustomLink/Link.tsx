import { MouseEvent, forwardRef, ReactChild } from "react";
import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { ILink } from "@/types/link.interface";
import { VisuallyHidden } from "@chakra-ui/react";

type LinkProps = Omit<NextLinkProps, "href" | "as" | "passHref" | "children"> &
  ILink & {
    to?: string;
    className?: string;
    children?: ReactChild;
    onClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
  };

const Link = forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => {
  const {
    prefetch,
    replace,
    scroll,
    shallow,
    locale,
    children,
    className,
    to,
    onClick,
    ...link
  } = props;
  const {
    id,
    href,
    newTab,
    role,
    "aria-labelledby": labelledby,
    "aria-describedby": describedby,
    tabIndex,
  } = link;

  const url = to || href || "";
  const isInternalLink = url && url.startsWith("/");
  const target = newTab ? { target: "_blank" } : {};
  const rel = newTab ? { rel: "noopener noreferrer" } : {};
  const roleAttr = role ? { role } : {};
  const tabIndexAttr = tabIndex || {};

  const ariaLabelledbyIdAttr = id && labelledby ? `AriaLabelledBy_${id}` : "";
  const ariaDescribedbyIdAttr =
    id && describedby ? `AriaDescribedBy_${id}` : "";
  const ariaIdAttr =
    ariaLabelledbyIdAttr && ariaDescribedbyIdAttr
      ? { "aria-describedby": ariaDescribedbyIdAttr }
      : { "aria-labelledby": ariaLabelledbyIdAttr } || {};

  const classes = className ? { className: className } : {};

  if (isInternalLink && url) {
    return (
      <NextLink
        href={url}
        replace={replace}
        scroll={scroll}
        shallow={shallow}
        locale={locale}
        prefetch={prefetch || false}
        passHref
      >
        <a
          {...target}
          {...rel}
          {...roleAttr}
          {...ariaIdAttr}
          {...tabIndexAttr}
          {...classes}
          ref={ref}
          onClick={onClick}
        >
          {children}
          {describedby && <VisuallyHidden>{labelledby}</VisuallyHidden>}
        </a>
      </NextLink>
    );
  }
  return (
    <a
      href={url}
      {...target}
      {...rel}
      {...roleAttr}
      {...ariaIdAttr}
      {...tabIndexAttr}
      {...classes}
      ref={ref}
      onClick={onClick}
    >
      {children}
      {describedby && <VisuallyHidden>{labelledby}</VisuallyHidden>}
    </a>
  );
});
Link.displayName = "Link";

export default Link;
