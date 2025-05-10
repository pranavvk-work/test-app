"use client";

import { useData } from "@/app/context/DataContext";
import TestimonialCard from "@/app/components/molecules/TestimonialCard";

export default function Testimonials() {
  const { testimonials } = useData();
  
  return (
    <section id="testimonials" className="py-16 bg-theme-secondary">
      <div className="container-custom mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-theme-primary-color mb-12">
          What Our Clients Say
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
