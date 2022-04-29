import { KeyboardEvent, MouseEvent, forwardRef, ReactChild } from "react";
import { ILink, ILinkWithIcon } from "@/types/link.interface";
import { VisuallyHidden } from "@chakra-ui/react";

type LinkChildProps = {
  link: ILink | ILinkWithIcon;
  href?: string;
  children?: ReactChild;
  handleClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
  handleKeyDown?: (e: KeyboardEvent<HTMLAnchorElement>) => void;
};

const LinkChild = forwardRef<HTMLAnchorElement, LinkChildProps>(
  (props, ref) => {
    const { link, href, children, handleClick } = props;
    const {
      id,
      url,
      newTab,
      "aria-tooltip": labelledby,
      "aria-description": describedby,
      role,
      tabIndex,
    } = link;

    const isInternalLink = url.startsWith("/");
    const idAttr =
      isInternalLink && id
        ? { id: `Internal_${id?.toString()}` }
        : { id: id.toString() };
    const hrefAttr = href ? { href: href } : { href: url };
    const target = newTab ? { target: "_blank" } : { target: "_self" };
    const rel = !isInternalLink && newTab ? { rel: "noopener noreferrer" } : {};
    const roleAttr = role ? { role } : {};

    const ariaLabelledbyIdAttr = id && labelledby ? `AriaLabelledBy_${id}` : "";
    const ariaLabelledbyAttr = ariaLabelledbyIdAttr
      ? { "aria-labelledby": ariaLabelledbyIdAttr }
      : null;
    const ariaDescribedbyIdAttr =
      id && describedby ? `AriaDescribedBy_${id}` : "";
    const ariaDescribedbyAttr = ariaDescribedbyIdAttr
      ? { "aria-describedby": ariaDescribedbyIdAttr }
      : null;
    const ariaIdAttr =
      ariaDescribedbyAttr && ariaLabelledbyAttr
        ? ariaDescribedbyAttr
        : ariaLabelledbyAttr || {};

    const tabIndexAttr = tabIndex || {};
    const refAttr = ref ? { ref: ref } : {};

    return (
      <a
        {...idAttr}
        // { ...classes }
        {...hrefAttr}
        {...target}
        {...rel}
        {...roleAttr}
        {...ariaIdAttr}
        {...tabIndexAttr}
        {...refAttr}
        onClick={handleClick}
      >
        {children}
        {describedby && labelledby && (
          <VisuallyHidden>{labelledby}</VisuallyHidden>
        )}
      </a>
    );
  }
);

LinkChild.displayName = "LinkChild";

export default LinkChild;
