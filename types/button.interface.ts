export enum ButtonType {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

export interface IButton {
  id: number | string;
  label: string;
  "aria-description"?: string;
  type: ButtonType;
}
