export interface AboutSection {
  title: string;
  description: string;
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

export interface Tech {
  title: string;
  techs: string[];
}

export interface SkillsSection {
  title: string;
  techs: Tech[];
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
