"use client";

import { useData } from "@/app/context/DataContext";
import Image from "next/image";

export default function About() {
  const { company } = useData();
  
  return (
    <section id="about" className="py-16 bg-theme-secondary">
      <div className="container-custom mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-theme-primary-color mb-6">
              About SkySecure UAE
            </h2>
            
            <div className="space-y-4">
              <p className="text-theme-primary text-lg">
                {company.description}
              </p>
              
              <p className="text-theme-primary text-lg">
                {company.location}
              </p>
            </div>
          </div>
          
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl bg-theme-icon flex items-center justify-center">
            <p className="text-theme-primary-color text-lg font-medium">Dubai Office Image Placeholder</p>
          </div>
        </div>
      </div>
    </section>
  );
}
