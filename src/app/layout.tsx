import React from 'react';
import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans, DM_Serif_Display } from 'next/font/google';
import '../styles/tailwind.css';
import WhatsAppButton from '../components/WhatsAppButton';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
});

const dmSerifDisplay = DM_Serif_Display({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: 'AkwaPillars — Empowering Akwa Ibom Communities',
  description:
    'AKWA IBOM PILLARS EMPOWERMENT COOPERATIVE ASSOCIATION unites communities across Akwa Ibom State through cooperative savings, skills development, and sustainable livelihoods.',
  icons: {
    icon: [{ url: '/favicon.ico', type: 'image/x-icon' }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${dmSerifDisplay.variable}`}>
      <body className={plusJakartaSans.className}>
        {children}
        <WhatsAppButton />
</body>
    </html>
  );
}