export interface ParagraphModel {
  fields: {
    text: string;
  };
}
export interface AboutSectionModel {
  title: string;
  description: ParagraphModel[];
  cta: string;
  slug: string;
}

export interface ImageModel {
  fields: {
    title: string;
    description: string;
    file: {
      url: string;
    };
  };
}
export interface ProjectModel {
  fields: {
    title: string;
    image: ImageModel;
    repository: string;
    site: string;
    techs: string[];
  };
}

export interface ProjectsSectionModel {
  title: string;
  projects: ProjectModel[];
  slug: string;
}

export interface TechModel {
  fields: {
    title: string;
    iconPath: string;
  };
}
export interface SpecializationModel {
  fields: {
    title: string;
    skills: TechModel[];
  };
}

export interface SkillsSectionModel {
  title: string;
  specializations: SpecializationModel[];
  slug: string;
}

export interface socialMediaModel {
  fields: {
    title: string;
    site: string;
  };
}
export interface FooterModel {
  title: string;
  slug: string;
  socialMedia: socialMediaModel[];
}

export interface ContentfulResponse {
  fields: any;
  sys: any;
}

export interface DataModel {
  about: AboutSectionModel;
  projects: ProjectsSectionModel;
  skills: SkillsSectionModel;
  footer: FooterModel;
}
