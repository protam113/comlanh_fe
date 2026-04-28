import {
  metadata as siteMetadata,
  viewport as siteViewport,
} from '../constants/appInfos';
import './globals.css';
import Script from 'next/script';

export const metadata = siteMetadata;
export const viewport = siteViewport;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="mdl-js">
      <body className="antialiased">{children}</body>
      <Script id="add-mdl-class" strategy="afterInteractive">
        {`document.documentElement.classList.add('mdl-js');`}
      </Script>
    </html>
  );
}
