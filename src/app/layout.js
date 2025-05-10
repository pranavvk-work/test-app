import { Poppins } from "next/font/google";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext";
import { UIProvider } from "./context/UIContext";
import { DataProvider } from "./context/DataContext";

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
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <UIProvider>
            <DataProvider>
              {children}
            </DataProvider>
          </UIProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
