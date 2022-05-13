export type PersonalInfoType =
  | "name"
  | "surname"
  | "dateofbirth"
  | "nationality"
  | "phoneno"
  | "email"
  | "address"
  | "langs";

export interface IPersonalInfoItem {
  id: string | number;
  type: PersonalInfoType;
  label: string;
  text: string;
}

export interface IPersonalInfo {
  title: string;
  info: IPersonalInfoItem[];
}

export default IPersonalInfo;
