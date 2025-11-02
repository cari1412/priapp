import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin', 'cyrillic'] });

export const metadata: Metadata = {
  title: {
    default: 'SaaS App - Modern Pricing Plans',
    template: '%s | SaaS App',
  },
  description: 'Choose the perfect plan for your team. Flexible pricing for teams of all sizes.',
  keywords: ['SaaS', 'pricing', 'plans', 'subscription', 'business'],
  authors: [{ name: 'Your Company' }],
  creator: 'Your Company',
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: 'https://yourdomain.com',
    title: 'SaaS App - Modern Pricing Plans',
    description: 'Choose the perfect plan for your team',
    siteName: 'SaaS App',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SaaS App - Modern Pricing Plans',
    description: 'Choose the perfect plan for your team',
    creator: '@yourhandle',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="dark">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}