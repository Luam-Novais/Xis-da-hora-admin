import type { Metadata } from 'next';
import { Inter, Lato, Poppins } from 'next/font/google';
import AuthProvider from '../providers/AuthProvider';
import './globals.css';

export const latoSans = Lato({
  variable: '--font-lato',
  weight: ['400', '700'],
  subsets: ['latin'],
});
export const interSans = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});
export const poppins = Poppins({
  variable: '--font-poppins',
  weight: ['400', '700'],
  subsets: ['latin'],
});
export const metadata: Metadata = {
  title: 'Xis da Hora | ADMIN',
  description: 'Sistema para admin do e-commerce Xis-da-Hora',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ot-br">
      <body className={`${interSans.variable} ${latoSans.variable} ${poppins.variable} antialiased`}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
