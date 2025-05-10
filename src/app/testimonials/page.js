import MainLayout from "@/app/components/templates/MainLayout";
import Testimonials from "@/app/components/organisms/Testimonials";
import { Metadata } from "next";

export const metadata = {
  title: "Testimonials | SkySecure UAE",
  description: "Read what our clients say about our cybersecurity services in Dubai and the UAE.",
};

export default function TestimonialsPage() {
  return (
    <MainLayout>
      <div className="pt-20 pb-10">
        <div className="container-custom mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-primary mb-6">
            Client Testimonials
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 text-center max-w-3xl mx-auto mb-16">
            Hear from our satisfied clients about their experience working with SkySecure UAE
          </p>
        </div>
      </div>
      
      <Testimonials />
    </MainLayout>
  );
}
