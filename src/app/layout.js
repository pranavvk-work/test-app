import './globals.css';
import AppProviders from './context/AppProviders';
import { Inter, Roboto } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

export const metadata = {
  title: 'Skysecure Research & Leadership',
  description: 'Leadership and research dashboard',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${roboto.variable}`}>
      <body className="bg-gray-50 min-h-screen antialiased font-roboto text-gray-900">
        <AppProviders>
          {children}
        </AppProviders>
      </body>
    </html>
  )
}
