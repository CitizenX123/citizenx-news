import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Citizen X News — From policy to paycheck',
  description: 'Plain-language news, alerts, and history context for everyday people. What power does, what it means for you.',
  openGraph: {
    title: 'Citizen X News',
    description: 'From policy to paycheck',
    type: 'website',
    url: 'https://citizenx.life',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Citizen X News — From policy to paycheck',
    description: 'Plain-language news, alerts, and history context for everyday people.',
  },
  metadataBase: new URL('https://citizenx.life'),
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

