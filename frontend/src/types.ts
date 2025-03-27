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
  readonly text: string;
}

/////// Portfolio ////////////////////////////////

export interface IPortfolioPageData {
  readonly title: string;
  readonly tagline: string;
  readonly projects: IPortfolioItem[];
}

export interface IPortfolioItem {
  readonly label: string;
  readonly slug: string;
  readonly project_content: IProjectContent;
}

export interface IProjectContent {
  readonly layout: number;
  readonly thumbnail_url: string;
  readonly description: string;
  readonly website_url?: string;
  readonly video_url?: string;
  readonly cover_image?: string;
  readonly social_media_section?: ISocialMediaSection;
  readonly carousel?: string[];
  readonly articles?: IArticleItem[]
  readonly results?: IProjectResult[]
}

export interface ISocialMediaSection {
  readonly label: string;
  readonly links: ISocialMediaLink[]
  readonly embed: { url: string }[]
}

export interface ISocialMediaLink {
  readonly url: string;
  readonly thumbnail_url: string;
}

export interface IArticleItem {
  readonly title: string;
  readonly thumbnail_url: string;
  readonly preview_text: string;
  readonly link: string;
}
export interface IProjectResult {
  readonly figure: string;
  readonly text: string
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
