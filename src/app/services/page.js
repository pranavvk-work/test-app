import MainLayout from "@/app/components/templates/MainLayout";
import Services from "@/app/components/organisms/Services";
import { Metadata } from "next";

export const metadata = {
  title: "Services | SkySecure UAE",
  description: "Explore our comprehensive cybersecurity services designed to protect your business in Dubai and the UAE.",
};

export default function ServicesPage() {
  return (
    <MainLayout>
      <div className="pt-20 pb-10">
        <div className="container-custom mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-primary mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 text-center max-w-3xl mx-auto mb-16">
            Comprehensive cybersecurity solutions tailored to protect your business and digital assets
          </p>
        </div>
      </div>
      
      <Services />
    </MainLayout>
  );
}
