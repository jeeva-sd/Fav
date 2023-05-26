import { ReactElement } from 'react';

export interface ExploreContents {
    title: string;
    icon: ReactElement<any, any>;
    description: string;
    isLive: boolean;
    path: string;
    isNew?: boolean;
}