import MainLayout from "@/app/components/templates/MainLayout";
import Contact from "@/app/components/organisms/Contact";
import { Metadata } from "next";

export const metadata = {
  title: "Contact Us | SkySecure UAE",
  description: "Get in touch with our cybersecurity experts in Dubai. We're here to help protect your business.",
};

export default function ContactPage() {
  return (
    <MainLayout>
      <div className="pt-20 pb-10">
        <div className="container-custom mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-primary mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 text-center max-w-3xl mx-auto mb-16">
            Have questions or ready to enhance your cybersecurity? Reach out to our team today.
          </p>
        </div>
      </div>
      
      <Contact />
    </MainLayout>
  );
}
