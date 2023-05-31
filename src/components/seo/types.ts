export interface SeoParams {
    title: string;
    description: string;
    keywords: string;
    pageUrl: string;
    canonical?: boolean;
    richData?: {};
}

export interface HeadSectionProps {
    seoParams: SeoParams;
}