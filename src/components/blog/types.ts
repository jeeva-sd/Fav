import { StaticImageData } from 'next/image';

export interface Posts {
    title: string;
    description: string;
    image: string | StaticImageData;
    path: string;
    category: string;
    rewards: string;
    createdAt: string;
    type: string;
    author: string;
    authorImage: string | null;
}