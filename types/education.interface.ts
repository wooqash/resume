export interface ISchool {
  id: string | number;
  name: string;
  period: string;
  direction: string;
  thesisTitle: string;
}

export interface IEducation {
  title: string;
  schools: ISchool[];
}
