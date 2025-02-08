export interface ExpertiseContent {
    readonly icon: string;
    readonly label: string;
    readonly text: string;
}

export interface IndustryContent {
    readonly image: string;
    readonly label: string;
    readonly url: string;
    readonly text: string[];  // Make sure it's an array
}

export interface ExperienceContent {
    readonly dates: string;
    readonly company: string;
    readonly url: string;
}