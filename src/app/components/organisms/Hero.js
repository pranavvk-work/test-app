import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center py-20 overflow-hidden">
      {/* Background overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 opacity-10 dark:opacity-5"
        style={{ 
          backgroundColor: "var(--color-primary)",
          filter: "blur(8px)"
        }}
      ></div>
      
      <div className="container-custom mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-theme-primary mb-6">
            Empowering Dubai with World‑Class Cybersecurity
          </h1>
          
          <p className="text-xl md:text-2xl text-theme-secondary mb-10 max-w-3xl mx-auto">
            Protecting businesses with cutting-edge security solutions and trusted expertise
          </p>
          
          <Link 
            href="/#contact"
            className="bg-theme-primary-color hover:bg-blue-700 text-white font-semibold py-3 sm:px-4 rounded-lg transition-colors inline-block text-lg"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
}
