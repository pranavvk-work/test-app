import MainLayout from "@/app/components/templates/MainLayout";
import Hero from "@/app/components/organisms/Hero";
import About from "@/app/components/organisms/About";
import Services from "@/app/components/organisms/Services";
import Testimonials from "@/app/components/organisms/Testimonials";
import Contact from "@/app/components/organisms/Contact";

export default function Home() {
  return (
    <MainLayout>
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Contact />
    </MainLayout>
  );
}
