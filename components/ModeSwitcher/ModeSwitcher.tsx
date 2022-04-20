import { useThemeContext } from "context/theme.context";
import { KeyboardEvent, MouseEvent } from "react";
import Button from "../Button";

type ModeSwitcherProps = {
  onModeChange: (
    e: KeyboardEvent<HTMLButtonElement> | MouseEvent<HTMLButtonElement>
  ) => void;
};

const ModeSwitcher: React.FC<ModeSwitcherProps> = ({ onModeChange }) => {
  const { theme } = useThemeContext();
  return (
    <Button handleClick={onModeChange}>
      <>
        {theme === "dark" && <span>Light</span>}
        {theme === "light" && <span>Dark</span>}
      </>
    </Button>
  );
};

export default ModeSwitcher;
