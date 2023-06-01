export interface SeoParams {
    title: string;
    description: string;
    keywords: string;
    pageUrl: string;
    canonical?: boolean;
    richData?: {};
    structuredData?: any;
}

export interface HeadSectionProps {
    seoParams: SeoParams;
}