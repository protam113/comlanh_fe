import type { Metadata, Viewport } from 'next';

export const appInfo = {
  logo: process.env.NEXT_PUBLIC_SITE_LOGO || '/icons/light_c.svg',
  title: process.env.NEXT_PUBLIC_SITE_TITLE || 'Cơm Lành',
  description:
    process.env.NEXT_PUBLIC_SITE_DESCRIPTION ||
    'Cơm Lành đồng hành cùng chủ quán tìm ra loại Trà phù hợp nhất cho nội cơm kinh doanh thông qua chương trình thử mẫu nhỏ - nấu mẫu lớn.',
  domain: process.env.NEXT_PUBLIC_SITE_DOMAIN || 'https://gaolanh.com',
  ogImage: process.env.NEXT_PUBLIC_OG_IMAGE || '/imgs/vsv.webp',
  themeColor: process.env.NEXT_PUBLIC_THEME_COLOR || '#ffffff',
  keywords: process.env.NEXT_PUBLIC_SITE_KEYWORDS?.split(',').map((k) =>
    k.trim()
  ) || ['keywords'],
  twitterCreator: process.env.NEXT_PUBLIC_TWITTER_CREATOR || '@gao_lanh',
  category: process.env.NEXT_PUBLIC_SITE_CATEGORY || 'Local Business',
  publisher: process.env.NEXT_PUBLIC_SITE_PUBLISHER || 'Cơm Lành',
};

export const metadata: Metadata = {
  metadataBase: new URL(appInfo.domain),
  title: appInfo.title,
  description: appInfo.description,
  keywords: appInfo.keywords,
  applicationName: appInfo.title,
  generator: 'Next.js',

  icons: {
    icon: appInfo.logo,
    apple: appInfo.logo,
    shortcut: appInfo.logo,
  },

  openGraph: {
    type: 'website',
    title: appInfo.title,
    description: appInfo.description,
    siteName: appInfo.title,
    url: appInfo.domain,
    images: [
      {
        url: `${appInfo.domain}${appInfo.ogImage}`,
        width: 1200,
        height: 630,
        alt: appInfo.title,
      },
    ],
    locale: 'vi_VN',
  },

  twitter: {
    card: 'summary_large_image',
    title: appInfo.title,
    description: appInfo.description,
    images: [`${appInfo.domain}${appInfo.ogImage}`],
    creator: appInfo.twitterCreator,
    site: appInfo.twitterCreator,
  },

  alternates: {
    canonical: appInfo.domain,
    languages: {
      'en-US': `${appInfo.domain}/en`,
      'vi-VN': `${appInfo.domain}`,
    },
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  verification: {
    google: 'verification_token',
    yandex: 'verification_token',
  },

  category: appInfo.category,
  creator: appInfo.twitterCreator,
  publisher: appInfo.publisher,
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: appInfo.themeColor,
};

// Function to generate metadata for child pages
export function PageMetadata(
  pageTitle: string,
  pageDescription?: string
): Metadata {
  return {
    ...metadata,
    title: `${pageTitle} | ${appInfo.title}`,
    description: pageDescription || metadata.description,
    openGraph: {
      ...metadata.openGraph,
      title: `${pageTitle} | ${appInfo.title}`,
      description: pageDescription || (metadata.description as string),
    },
    twitter: {
      ...metadata.twitter,
      title: `${pageTitle} | ${appInfo.title}`,
      description: pageDescription || (metadata.description as string),
    },
  };
}

export function generatePageMetadata({
  title,
  description,
  ogImage,
  path,
  keywords,
  type = 'website',
}: {
  title: string;
  description?: string;
  ogImage?: string;
  path: string;
  keywords?: string[];
  type?: 'website' | 'article';
}): Metadata {
  const url = `${appInfo.domain}${path}`;
  const image = ogImage ?? appInfo.ogImage;
  const fullTitle = `${title} | ${appInfo.title}`;
  const desc = description ?? appInfo.description;

  return {
    metadataBase: new URL(appInfo.domain),
    title: fullTitle,
    description: desc,
    keywords: keywords ?? appInfo.keywords,
    openGraph: {
      type,
      title: fullTitle,
      description: desc,
      url,
      siteName: appInfo.title,
      images: [
        {
          url: `${appInfo.domain}${image}`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'vi_VN',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: desc,
      images: [`${appInfo.domain}${image}`],
      creator: appInfo.twitterCreator,
    },
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}
