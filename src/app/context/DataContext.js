"use client";

import { createContext, useContext } from "react";

// Dummy data based on Figma design
const servicesData = [
  {
    id: "cybersecurity-consulting",
    title: "Cybersecurity Consulting",
    description: "Expert advisory services to improve your security posture and protect your digital assets.",
    icon: "consulting"
  },
  {
    id: "implementation-managed-services",
    title: "Implementation & Managed Services",
    description: "End-to-end deployment and management of security solutions tailored to your needs.",
    icon: "managed"
  },
  {
    id: "cyber-risk-compliance",
    title: "Cyber Risk & Compliance",
    description: "Comprehensive assessments and auditing to ensure regulatory compliance.",
    icon: "compliance"
  },
  {
    id: "automation",
    title: "Automation",
    description: "Advanced security automation and orchestration solutions for enhanced efficiency.",
    icon: "automation"
  },
  {
    id: "marketplace",
    title: "Marketplace",
    description: "One-stop shop for all your IT software procurement needs.",
    icon: "marketplace"
  }
];

const testimonialsData = [
  {
    id: "testimonial-1",
    quote: "One of the most remarkable aspects of our partnership with Skysecure has been their unwavering support. They provided comprehensive training to our staff, ensuring a smooth transition to the new systems. Their customer service is unparalleled; they were always available to answer our queries, address any issues promptly, and provide insightful advice to help us leverage technology to our advantage.",
    author: "Saptesh Parish",
    position: "Director, Enterprise IT"
  },
  {
    id: "testimonial-2",
    quote: "With Skysecure's expertise, we secured our FMCG operations using Microsoft Security solutions—achieving 100% MFA adoption and significantly reducing phishing risks. Their seamless implementation gave us confidence and control over our security landscape.",
    author: "Ajith Kumar",
    position: "IT Head"
  }
];

const companyData = {
  name: "SkySecure UAE",
  description: "SkySecure Cyber Security LLC is the UAE arm of SkySecure Technologies Pvt. Ltd. (headquartered in Bangalore, India). We bring SkySecure's global expertise in cybersecurity to businesses in the Middle East.",
  location: "Our Dubai office, located in the Sunshine Building, Al Garhoud, allows us to serve local clients with on-the-ground support and regional insights.",
  contact: {
    person: "Mohammed Zaheer, CEO",
    phone: "+971 50 559 3124",
    address: "Sunshine Building, Office No. 110, Sheikh Rashid Rd - Al Garhoud Deira - Dubai - UAE"
  }
};

const DataContext = createContext(undefined);

export function DataProvider({ children }) {
  const data = {
    services: servicesData,
    testimonials: testimonialsData,
    company: companyData
  };
  
  return (
    <DataContext.Provider value={data}>
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  const context = useContext(DataContext);
  
  if (context === undefined) {
    throw new Error("useData must be used within a DataProvider");
  }
  
  return context;
}
