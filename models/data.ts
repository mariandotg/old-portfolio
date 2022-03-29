export interface AboutSection {
  title: string;
  description: {
    paragraphs: string[];
  };
  cta: string;
  slug: string;
}

export interface Project {
  title: string;
  image: string;
  repository: string;
  site: string;
  techs: string[];
}

export interface ProjectsSection {
  title: string;
  projects: Project[];
  slug: string;
}

export interface TechInfo {
  name: string;
  iconPath: string;
}
export interface Specialization {
  title: string;
  techs: TechInfo[];
}

export interface SkillsSection {
  title: string;
  specializations: Specialization[];
}

export interface ContentfulResponse {
  fields: object;
  metadata: any;
  sys: any;
}

export interface Data {
  about: AboutSection;
  projects: ProjectsSection;
  skills: SkillsSection;
}
