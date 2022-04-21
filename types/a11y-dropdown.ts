export interface IA11yButtonProps
  extends Pick<
    React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    | "onKeyDown"
    | "onClick"
    | "tabIndex"
    | "role"
    | "aria-haspopup"
    | "aria-expanded"
  > {
  ref: React.RefObject<HTMLButtonElement>;
}

export interface IA11yItemProps {
  onKeyDown: (e: React.KeyboardEvent<HTMLAnchorElement>) => void;
  tabIndex: number;
  ref: React.RefObject<HTMLAnchorElement>;
  role: string;
}
