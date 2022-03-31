export interface Paragraph {
  fields: {
    text: string;
  };
}
export interface AboutSection {
  title: string;
  description: Paragraph[];
  cta: string;
  slug: string;
}

export interface Image {
  fields: {
    title: string;
    description: string;
    file: {
      url: string;
    };
  };
}
export interface Project {
  fields: {
    title: string;
    image: Image;
    repository: string;
    site: string;
    techs: string[];
  };
}

export interface ProjectsSection {
  title: string;
  projects: Project[];
  slug: string;
}

export interface Tech {
  fields: {
    title: string;
    iconPath: string;
  };
}
export interface Specialization {
  fields: {
    title: string;
    skills: Tech[];
  };
}

export interface SkillsSection {
  title: string;
  specializations: Specialization[];
  slug: string;
}

export interface ContentfulResponse {
  fields: any;
  sys: any;
}

export interface Data {
  about: AboutSection;
  projects: ProjectsSection;
  skills: SkillsSection;
}
