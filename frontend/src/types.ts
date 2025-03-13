/////// Global styles ///////////////////////

export interface IGlobalStylesData {
  readonly background_1: string;
  readonly background_1_transparent: string;
  readonly background_2: string;
  readonly background_2_transparent: string;
  readonly background_3: string;
  readonly background_3_transparent: string;
  readonly background_4: string;
  readonly background_4_transparent: string;
  readonly background_5: string;
  readonly background_5_transparent: string;
  readonly text_dark: string;
  readonly text_light: string;
  readonly intro_background: string;
  readonly industries_background: string;
}

/////// Header //////////////////////////////

export interface IHeaderData {
  readonly title: string;
  readonly tagline: string;
  readonly location: string;
}

/////// Home ////////////////////////////////

export interface IHomePageData {
  readonly introduction: string;
  readonly CTA_1: string;
  readonly CTA_2: string;
  readonly contact_message: string;
}

export interface IExpertiseSectionData {
  readonly title: string;
  readonly expertise: IExpertiseItem[];
}

export interface IExpertiseItem {
  readonly icon: string;
  readonly label: string;
  readonly text: string;
}

export interface IIndustriesSectionData {
  readonly title: string;
  readonly tagline: string;
  readonly industries: IIndustryItem[];
}

export interface IIndustryItem {
  readonly image: string;
  readonly label: string;
  readonly companies: ICompanyItem[];
}

export interface ICompanyItem {
  readonly name: string;
  readonly url?: string;
  readonly text: string;
}


/////// About /////////////////////////////////

export interface IAboutPageData {
  readonly title: string;
  readonly intro: string;
  readonly paragraphs: { paragraph: string }[];
}

/////// Portfolio ////////////////////////////////

export interface IPortfolioPageData {
  readonly title: string;
  readonly tagline: string;
  readonly projects: IPortfolioItem[];
}

export interface IPortfolioItem {
  readonly layout: number;
  readonly slug: string;
  readonly label: string;
  readonly thumbnail_url: string;
}

export interface IProjectData {
  readonly label: string;
  readonly description: string[];
  readonly content: IProjectContent[]
  readonly results?: IProjectResult[]
}

export interface IProjectContent {
  type: string;
  url: string;
}
export interface IProjectResult {
  figure: string;
  text: string
}

/////// Resume ////////////////////////////////


export interface IResumePageData {
  readonly title: string;
  readonly pdf_url: string;
  readonly CTA: string;
}
export interface ICareerTimelineData {
  readonly experiences: ITimelineItem[];
}
export interface ITimelineItem {
  readonly dates: string;
  readonly company: string;
  readonly url?: string;
  readonly position: string;
}
