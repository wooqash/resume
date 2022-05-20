export interface ICompany {
  companyName: string;
  period: string;
  position: string;
  description: string;
}

export interface IExperience {
  title: string;
  companies: ICompany[];
}
