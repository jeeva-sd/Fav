import hacksImage from '../../assets/images/ten_hacks.jpg';
import tips from '../../assets/images/instagram_tips.jpg';
import stroyImage from '../../assets/images/story_ideas.jpg';
import { Posts } from './types';
// import { GiNinjaHead } from 'react-icons/gi';

// export const image = <GiNinjaHead />;

export const blogRoutes: Posts[] = [{
  title: '10 Instagram hacks, You should know',
  description: 'These nifty hacks are sure to elevate your Instagram game, whether you&apos;re a casual user or a social media savant. From mastering the art of Instagram stories to leveraging the power of hashtags, we&apos;ve got you covered. So, buckle up and get ready to embark on a journey of discovery that will transform the way you use Instagram forever.',
  path: '/blog/2023/ten-hacks',
  image: hacksImage,
  category: 'InstaPlus',
  rewards: 'recent',
  createdAt: '01 April 2023',
  type: 'Article',
  author: 'blackninja',
  authorImage: null,
},
{
  title: 'Instagram Tips and Tricks - 2023',
  description: 'Here are some complex and dazzling tips and tricks to create gripping and compelling content on Instagram Reels that will leave your audience in awe.',
  path: '/blog/2023/instagram-reel-tips',
  image: tips,
  category: 'InstaPlus',
  rewards: 'recent',
  createdAt: '10 April 2023',
  type: 'Article',
  author: 'blackninja',
  authorImage: null,
},
{
  title: 'Creative Ways to Use Instagram Stories',
  description: 'By using Instagram Stories creatively, you can increase engagement and reach on the platform, build stronger connections with your followers, and ultimately grow your brand.',
  path: '/blog/2023/story-ideas',
  image: stroyImage,
  category: 'InstaPlus',
  rewards: 'recent',
  createdAt: '20 April 2023',
  type: 'Article',
  author: 'blackninja',
  authorImage: null,
},
{
  title: 'How to Approach Instagram Influencer',
  description: 'Good Influencer can help you reach a large and engaged audience, improve your brand awareness and credibility, and drive sales and conversions.',
  path: '/blog/2023/approach-influencer',
  image: null,
  category: 'InstaPlus',
  rewards: 'recent',
  createdAt: '30 April 2023',
  type: 'Article',
  author: 'blackninja',
  authorImage: null,
},
{
  title: 'How to get more views and followers in Instagram ?',
  description: ' Whether you&apos;re a commercial enterprise owner or a casual user, it"s helpful to know some key notes about Instagram. This will help you get the maximum out of the platform.',
  path: '/blog/2023/get-more-views-on-instagram',
  image: null,
  category: 'InstaPlus',
  rewards: 'recent',
  createdAt: '30 April 2023',
  type: 'Article',
  author: 'blackninja',
  authorImage: null,
},
];