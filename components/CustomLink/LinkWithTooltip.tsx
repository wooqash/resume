import { ILink, ILinkWithIcon } from "@/types/link.interface";
import { ReactChild } from "react";

type LinkWithTooltipProps = {
  children: ReactChild;
  link: ILink | ILinkWithIcon;
};

const LinkWithTooltip: React.FC<LinkWithTooltipProps> = (props) => {
  const { link, children } = props;
  const {
    id,
    "aria-tooltip": labelledby,
    "aria-description": describedby,
  } = link;
  const ariaLabelledbyIdAttr = id && labelledby ? `AriaLabelledBy_${id}` : "";
  const ariaDescribedbyIdAttr =
    id && describedby ? `AriaDescribedBy_${id}` : "";
  const idAttr =
    describedby && labelledby
      ? ariaDescribedbyIdAttr
      : labelledby
      ? ariaLabelledbyIdAttr
      : {};

  return (
    <span className="tooltip-container">
      {children}
      {(describedby || labelledby) && (
        <span role="tooltip" {...idAttr}>
          {describedby ? describedby : labelledby}
        </span>
      )}
    </span>
  );
};

export default LinkWithTooltip;
