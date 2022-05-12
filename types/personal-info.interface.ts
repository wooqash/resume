export interface IPersonalInfoItem {
  label: string;
  text: string;
}

export interface IPersonalInfo {
  title: string;
  info: IPersonalInfoItem[];
}

export default IPersonalInfo;
