import React, { memo } from 'react';
import Head from 'next/head';
import { HeadSectionProps } from './types';

const HeadSection: React.FC<HeadSectionProps> = ({seoParams}) => {
  const {title, description, keywords, pageUrl, canonical = false} = seoParams;
  const fullUrl = `${process.env.SITE_URL}${pageUrl}`;

  return (
    <Head>
      <meta charSet='utf-8'/>
      <meta httpEquiv='X-UA-Compatible' content='IE=edge'/>
      <meta httpEquiv='Content-Language' content='en_US'/>
      <meta name='viewport' content='width=device-width, initial-scale=1.0'/>

      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />
      {canonical && <meta name='canonical' content={fullUrl} />}

      <meta name='application-name' content={process.env.APP_NAME}/>
      <meta name='robots' content='index,follow'/>
      <meta name='Rating' content='General'/>
      <meta name='audience' content='all'/>
      <meta name='mobile-web-app-capable' content='yes'/>
      <meta name='apple-mobile-web-app-capable' content='yes' />
      <meta name='apple-mobile-web-app-status-bar-style' content='default' />
      <meta name='apple-mobile-web-app-title' content='Fav Insta' />
      <meta itemProp='isFamilyFriendly' content='true'/>
      <meta name='theme-color' content='#4f46e5'/>

      <meta property='og:url' content={fullUrl}/>
      <meta property='og:title' content={title}/>
      <meta property='og:description' content={description}/>
      <meta property='og:site_name' content={process.env.SITE_SHORT_URL}/>
      <meta property='og:image' content={`${process.env.SITE_URL}/favIcons/android-chrome-192x192.png`}/>
      <meta property='og:type' content='website' />

      <meta name='twitter:url' content={fullUrl}/>
      <meta name='twitter:title' content={title}/>
      <meta name='twitter:description' content={description}/>
      <meta name='twitter:card' content='summary_large_image'/>
      <meta name='twitter:image' content={`${process.env.SITE_URL}/favIcons/android-chrome-192x192.png`}/>

      <link rel='manifest' href='/manifest.json'/>
      <link rel='shortcut icon' href='/favIcons/favicon-16x16.png'/>
      <link rel='icon' type='image/png' sizes='32x32' href='/favIcons/favicon-32x32.png'/>
      <link rel='icon' type='image/png' sizes='16x16' href='/favIcons/favicon-16x16.png'/>
      <link rel='icon' type='image/png' sizes='192x192' href='/favIcons/favicon-192x192.png'/>
      <link rel='icon' type='image/png' sizes='512x512' href='/favIcons/favicon-512x512.png'/>
      <link rel='apple-touch-icon' sizes='180x180' href='/favIcons/apple-touch-icon.png'/>
      <link rel='mask-icon' href='/pwa/maskable_icon_x512.png' color='#4f46e5'/>
    </Head>
  );
};

export default memo(HeadSection);