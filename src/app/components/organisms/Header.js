"use client";

import Link from "next/link";
import { useUI } from "@/app/context/UIContext";
import ThemeSwitcher from "@/app/components/atoms/ThemeSwitcher";
import { useState, useEffect } from "react";

export default function Header() {
  const { isMobileMenuOpen, toggleMobileMenu, closeMobileMenu } = useUI();
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Handle scroll event to add shadow to header when scrolled
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "header-shadow" : ""
      }`}
      style={{ 
        backgroundColor: "var(--color-header-bg)",
        backdropFilter: "blur(8px)"
      }}
    >
      <div className="container-custom mx-auto py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-theme-primary" onClick={closeMobileMenu}>
            SkySecure
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/#about" 
              className="text-theme-primary hover:text-theme-primary-color transition-colors"
              onClick={closeMobileMenu}
            >
              About
            </Link>
            <Link 
              href="/#services" 
              className="text-theme-primary hover:text-theme-primary-color transition-colors"
              onClick={closeMobileMenu}
            >
              Services
            </Link>
            <Link 
              href="/#testimonials" 
              className="text-theme-primary hover:text-theme-primary-color transition-colors"
              onClick={closeMobileMenu}
            >
              Testimonials
            </Link>
            <Link 
              href="/#contact" 
              className="bg-theme-primary-color text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              onClick={closeMobileMenu}
            >
              Contact Us
            </Link>
            <ThemeSwitcher />
          </div>
          
          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <ThemeSwitcher />
            <button 
              className="ml-4 text-theme-primary p-2"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                // X icon
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // Menu icon
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </nav>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-theme-primary py-4 mt-2 rounded-lg shadow-lg">
            <div className="flex flex-col space-y-4 px-4">
              <Link 
                href="/#about" 
                className="text-theme-primary hover:text-theme-primary-color transition-colors"
                onClick={closeMobileMenu}
              >
                About
              </Link>
              <Link 
                href="/#services" 
                className="text-theme-primary hover:text-theme-primary-color transition-colors"
                onClick={closeMobileMenu}
              >
                Services
              </Link>
              <Link 
                href="/#testimonials" 
                className="text-theme-primary hover:text-theme-primary-color transition-colors"
                onClick={closeMobileMenu}
              >
                Testimonials
              </Link>
              <Link 
                href="/#contact" 
                className="bg-theme-primary-color text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors inline-block text-center"
                onClick={closeMobileMenu}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
