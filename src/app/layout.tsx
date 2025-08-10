import type { Metadata } from 'next';
import './globals.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://citizenx.life';

export const metadata: Metadata = {
  title: 'Citizen X News — Understand today. Act tomorrow.',
  description: 'What happened. What it means. What to do.',
  openGraph: {
    title: 'Citizen X News — Understand today. Act tomorrow.',
    description: 'What happened. What it means. What to do.',
    type: 'website',
    url: siteUrl,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Citizen X News — Understand today. Act tomorrow.',
    description: 'What happened. What it means. What to do.',
  },
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}

