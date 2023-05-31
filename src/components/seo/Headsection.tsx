import React, { memo, useMemo } from 'react';
import Head from 'next/head';
import { HeadSectionProps } from './types';

const HeadSection: React.FC<HeadSectionProps> = ({ seoParams }) => {
  const { title, description, keywords, pageUrl } = seoParams;
  const fullUrl = `${process.env.SITE_URL || 'https://www.favinsta.com'}${pageUrl}`;

  const formattedLD = useMemo(() => {
    const { richData }: any = seoParams;
    if (!richData) return null;

    const structuredData = {
      __html: `
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": ${fullUrl}
        },
        "headline": "${richData.headline}",
        "description": "${richData.description}",
        "image": {
          "@type": "ImageObject",
          "url": "${richData.image}",
          "width": 1200,
          "height": 800
        },
        "datePublished": "${richData.datePublished}",
        "dateModified": "${richData.datePublished}",
        "author": {
          "@type": "Person",
          "name": "Black Ninja"
        },
        "publisher": {
          "@type": "Organization",
          "name": "${process.env.SITE_SHORT_URL}",
          "logo": {
            "@type": "ImageObject",
            "url": "https://favinsta.com/favIcons/android-chrome-192x192.png",
            "width": 192,
            "height": 192
          }
        }
      }
  `,
    };

    console.log(structuredData, 'structuredData');

    return structuredData;
  }, [seoParams, fullUrl]);

  return (
    <Head>
      <meta charSet='utf-8' />
      <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
      <meta httpEquiv='Content-Language' content='en_US' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />

      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />

      <meta name='application-name' content='FavInsta.com' />
      <meta name='robots' content='index,follow' />
      <meta name='Rating' content='General' />
      <meta name='audience' content='all' />
      <meta name='mobile-web-app-capable' content='yes' />
      <meta name='apple-mobile-web-app-capable' content='yes' />
      <meta name='apple-mobile-web-app-status-bar-style' content='default' />
      <meta name='apple-mobile-web-app-title' content='Fav Insta' />
      <meta itemProp='isFamilyFriendly' content='true' />
      <meta name='theme-color' content='#4f46e5' />

      <meta property='og:url' content={fullUrl} />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:site_name' content='FavInsta.com' />
      <meta property='og:image' content='https://www.favinsta.com/favIcons/android-chrome-192x192.png' />
      <meta property='og:type' content='website' />

      <meta name='twitter:url' content={fullUrl} />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:image' content='https://www.favinsta.com/favIcons/android-chrome-192x192.png' />

      <link rel="canonical" href={fullUrl} />
      <link rel='manifest' href='/manifest.json' />
      <link rel='shortcut icon' href='/favIcons/favicon-16x16.png' />
      <link rel='icon' type='image/png' sizes='32x32' href='/favIcons/favicon-32x32.png' />
      <link rel='icon' type='image/png' sizes='16x16' href='/favIcons/favicon-16x16.png' />
      <link rel='icon' type='image/png' sizes='192x192' href='/favIcons/favicon-192x192.png' />
      <link rel='icon' type='image/png' sizes='512x512' href='/favIcons/favicon-512x512.png' />
      <link rel='apple-touch-icon' sizes='180x180' href='/favIcons/apple-touch-icon.png' />
      <link rel='mask-icon' href='/pwa/maskable_icon_x512.png' color='#4f46e5' />

      {formattedLD && <script
        type="application/ld+json"
        dangerouslySetInnerHTML={formattedLD}
        key="jsonLD"
      />}
    </Head>
  );
};

export default memo(HeadSection);