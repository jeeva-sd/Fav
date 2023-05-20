import { StaticImageData } from 'next/image';

export interface Posts {
    title: string;
    description: string;
    image: null | StaticImageData;
    path: string;
    category: string;
    rewards: string;
    createdAt: string;
    type: string;
    author: string;
    authorImage: StaticImageData | null;
}