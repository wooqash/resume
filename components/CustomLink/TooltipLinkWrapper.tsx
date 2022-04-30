import { ILink, ILinkWithIcon } from "@/types/link.interface";
import { ReactChild } from "react";

type TooltipLinkWrapperProps = {
  children: ReactChild;
  link: ILink | ILinkWithIcon;
};

const TooltipLinkWrapper: React.FC<TooltipLinkWrapperProps> = (props) => {
  const { link, children } = props;
  const {
    id,
    "aria-labelledby": labelledby,
    "aria-describedby": describedby,
  } = link;
  const ariaLabelledbyIdAttr = id && labelledby ? `AriaLabelledBy_${id}` : "";
  const ariaDescribedbyIdAttr =
    id && describedby ? `AriaDescribedBy_${id}` : "";
  const idAttr =
    describedby && labelledby
      ? { id: ariaDescribedbyIdAttr }
      : labelledby
      ? { id: ariaLabelledbyIdAttr }
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

export default TooltipLinkWrapper;
