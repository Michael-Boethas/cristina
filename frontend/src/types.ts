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
