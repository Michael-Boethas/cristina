export interface ExpertiseContent {
    readonly icon: string;
    readonly label: string;
    readonly text: string;
}

export interface IndustryContent {
    readonly image: string;
    readonly label: string;
    readonly url: string;    // Optional in case there's no link
    readonly text: string[];  // Make sure it's always an array
}

export interface ExperienceContent {
    readonly dates: string;
    readonly company: string;
    readonly url: string;  // Optional in case there's no link
}
