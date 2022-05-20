export interface ISchool {
  schoolName: string;
  period: string;
  direction: string;
  thesisTitle: string;
}

export interface IEducation {
  title: string;
  schools: ISchool[];
}
