import { IA11yButtonProps } from "@/types/a11y-dropdown";
import { IButton } from "@/types/button";
import { ReactChild } from "react";

type A11yDropdownButtonProps = {
  children: ReactChild;
  isOpen: boolean;
  buttonProps: IA11yButtonProps;
  content: IButton;
};

const A11yDropdownButton: React.FC<A11yDropdownButtonProps> = ({
  children,
  isOpen,
  buttonProps,
  content,
}) => {
  return (
    <div
      className="button-and-tooltip"
      aria-describedby={content.id.toString()}
    >
      <button {...buttonProps} className={isOpen ? "open" : ""}>
        {children}
        {content["aria-description"] && (
          <span className="visually-hidden">{content.label}</span>
        )}
      </button>
      {content["aria-description"] ? (
        <div role="tooltip" id={content.id.toString()}>
          {content["aria-description"]}
        </div>
      ) : (
        <div role="tooltip" id={content.id.toString()}>
          {content.label}
        </div>
      )}
    </div>
  );
};

export default A11yDropdownButton;
