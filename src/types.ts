export interface IHomePageStructure {
  readonly introduction: string;
  readonly expertise: IExpertiseSection;
  readonly industries: IIndustriesSection;
}

export interface IExpertiseSection {
  readonly title: string;
  readonly expertiseList: Record<string, IExpertiseItem>;
}

export interface IExpertiseItem {
  readonly icon: string;
  readonly label: string;
  readonly text: string;
}

export interface IIndustriesSection {
  readonly title: string;
  readonly tagline: string;
  readonly industriesList: Record<string, IIndustryItem>;
}

export interface IIndustryItem {
  readonly image: string;
  readonly label: string;
  readonly companies: ICompanyItem[];
}

export interface ICompanyItem {
  readonly name: string;
  readonly url: string;
  readonly text: string;
}

export interface IExperienceItem {
  readonly dates: string;
  readonly company: string;
  readonly url: string;
  readonly position: string;
}
