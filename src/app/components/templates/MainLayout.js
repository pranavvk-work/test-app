"use client";

import Header from "@/app/components/organisms/Header";
import Footer from "@/app/components/organisms/Footer";

export default function MainLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}
