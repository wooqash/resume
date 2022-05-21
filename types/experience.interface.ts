export interface ICompany {
  id: string | number;
  name: string;
  period: string;
  position: string;
  description: string;
}

export interface IExperience {
  title: string;
  companies: ICompany[];
}
