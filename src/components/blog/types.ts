import { StaticImageData } from 'next/image';

export interface Posts {
    id: number,
    title: string;
    description: string;
    image: StaticImageData;
    path: string;
    category: string;
    rewards: string;
    createdAt: string;
    type: string;
    author: string;
    authorImage: StaticImageData | null;
}