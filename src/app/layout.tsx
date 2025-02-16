import type { Metadata } from 'next';
import { Poppins, Inter } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--poppins-font',
  weight: ['200', '300', '400', '600', '700', '800', '900'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--inter-font',
  weight: ['200', '300', '400', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Angola Open-Source Fest',
  description: 'This is the offical Angola Open-Source Fest 2024 website',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} ${inter.className}`}>
        {children}
      </body>
    </html>
  );
}
