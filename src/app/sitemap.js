import { getServicesData } from "@/app/lib/data";

export default async function sitemap() {
  // Get your services data
  const services = await getServicesData();
  
  // Base URL - replace with actual domain in production
  const baseUrl = "https://skysecure-uae.com";
  
  // Main pages
  const routes = [
    "",
    "/about",
    "/services",
    "/testimonials",
    "/contact",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly',
    priority: route === "" ? 1 : 0.8,
  }));
  
  // Service pages
  const serviceRoutes = services.map((service) => ({
    url: `${baseUrl}/services/${service.id}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));
  
  return [...routes, ...serviceRoutes];
}
