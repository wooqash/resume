export interface ISkillsGroup {
  id: string | number;
  name: string;
  skills: string[];
}

export interface ISkillsTypes {
  id: string | number;
  name: string;
  skillsGroups: string | ISkillsGroup[];
}

export interface ISkills {
  title: string;
  types: ISkillsTypes[];
}
