import { Poppins } from "next/font/google";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext";
import { UIProvider } from "./context/UIContext";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SkySecure UAE | Cybersecurity Solutions",
  description: "Empowering Dubai with World-Class Cybersecurity Solutions and Trusted Expertise",
  keywords: "cybersecurity, Dubai, UAE, security solutions, IT security, managed services",
  openGraph: {
    title: "SkySecure UAE | Cybersecurity Solutions",
    description: "Empowering Dubai with World-Class Cybersecurity Solutions and Trusted Expertise",
    url: "https://skysecure-uae.com",
    siteName: "SkySecure UAE",
    images: [
      {
        url: "https://skysecure-uae.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SkySecure UAE",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SkySecure UAE | Cybersecurity Solutions",
    description: "Empowering Dubai with World-Class Cybersecurity Solutions and Trusted Expertise",
    images: ["https://skysecure-uae.com/twitter-image.jpg"],
  },
  alternates: {
    canonical: "https://skysecure-uae.com",
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
    google: "google-site-verification-code", // Replace with actual verification code
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <UIProvider>
            {children}
          </UIProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
