export interface ExpertiseContent {
    readonly icon: string;
    readonly label: string;
    readonly text: string;
}

export interface CompanyDetail {
    readonly name: string;
    readonly url: string;
    readonly text: string;
}

export interface IndustryContent {
    readonly image: string;
    readonly label: string;
    readonly textContent: CompanyDetail[];
}

export interface ExperienceContent {
    readonly dates: string;
    readonly company: string;
    readonly url: string;
}
