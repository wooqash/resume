export interface ILink {
  id?: string | number;
  label: string;
  url: string;
  newTab: boolean;
  ariaNewTabLabel?: string;
}
