import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { DESCRIPTION_SUFFIX, TITLE_SUFFIX } from "./_metadata-constants";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: '查看我的 IP 地址 | 查询本机 IP 地址及归属地 | Sukka | ip.skk.moe',
  metadataBase: 'https://ip.skk.moe',
  icons: {
    // <link href="https://cdn.skk.moe/favicon/apple-touch-icon.png" rel="apple-touch-icon" sizes="180x180" />
    apple: {
      url: 'https://cdn.skk.moe/favicon/apple-touch-icon.png',
      sizes: '180x180',
      type: 'image/png'
    },
    icon: [
      // <link href="https://cdn.skk.moe/favicon/android-chrome-192x192.png" rel="icon" type="image/png" sizes="192x192" />
      {
        url: 'https://cdn.skk.moe/favicon/android-chrome-192x192.png',
        type: 'image/png',
        sizes: '192x192'
      },
      // <link href="https://cdn.skk.moe/favicon/favicon-32x32.png" rel="icon" type="image/png" sizes="32x32" />
      {
        url: 'https://cdn.skk.moe/favicon/favicon-32x32.png',
        type: 'image/png',
        sizes: '32x32'
      },
      // <link href="https://cdn.skk.moe/favicon/favicon-16x16.png" rel="icon" type="image/png" sizes="16x16" />
      {
        url: 'https://cdn.skk.moe/favicon/favicon-16x16.png',
        type: 'image/png',
        sizes: '16x16'
      },
      {
        url: 'https://cdn.skk.moe/favicon.ico',
        type: 'image/ico'
      }
      // <link href="https://cdn.skk.moe/favicon/safari-pinned-tab.svg" rel="mask-icon" color="#fcfcfc" />
      // No longer supported
    ]
  },
  description: 'Root Layout fallback Description' + DESCRIPTION_SUFFIX,
  other: {
    'fediverse:creator': '@sukka@acg.mn'
  },
  // TODO: after finish impl, us imgsrc to create an opengraph image for this
  openGraph: {
    title: 'Root layout fallback Title' + TITLE_SUFFIX,
    siteName: 'Example Site Name',
    url: 'https://example.com/',
    description: 'Some Description' + DESCRIPTION_SUFFIX,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment -- ts error dead lock
    // @ts-ignore -- website is a valid open graph type
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    site: '@isukkaw',
    creator: '@isukkaw'
  },
  formatDetection: {
    // <meta content="telephone=no" name="format-detection" />
    telephone: false
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
