import { getServicesData } from "@/app/lib/data";
import ServiceCard from "@/app/components/molecules/ServiceCard";

export default async function Services() {
  const services = await getServicesData();
  
  return (
    <section id="services" className="py-16 bg-theme-primary">
      <div className="container-custom mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-theme-primary-color mb-12">
          Our Services
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
