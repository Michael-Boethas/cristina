// Types definition

export interface ExpertiseContent {
    icon: string;
    label: string;
    text: string;
}

export type ExpertiseItem = Record<string, ExpertiseContent>;


export interface IndustryContent {
    image: string;
    label: string;
    text: string;
}

export type IndustryItem = Record<string, IndustryContent>;