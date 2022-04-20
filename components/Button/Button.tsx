import { KeyboardEvent, MouseEvent, ReactChild } from "react";

import style from "./links.module.scss";

type ButtonProps = {
  children: ReactChild;
  type?: "button" | "submit" | "reset" | undefined;
  handleClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  handleKeyDown?: (e: KeyboardEvent<HTMLButtonElement>) => void;
};

const Button: React.FC<ButtonProps> = (props) => {
  const { children, type = "button", handleClick } = props;

  return (
    <button onClick={handleClick} type={type}>
      {children}
    </button>
  );
};

export default Button;
