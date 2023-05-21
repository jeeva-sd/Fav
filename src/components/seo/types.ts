export interface SeoParams {
    title: string;
    description: string;
    keywords: string;
    pageUrl: string;
    canonical?: boolean;
}

export interface HeadSectionProps {
    seoParams: SeoParams;
}