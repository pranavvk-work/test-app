"use client";

import { useState, useEffect } from "react";
import { getCompanyData } from "@/app/lib/data";
import { IconPerson, IconPhone, IconLocation } from "@/app/components/atoms/Icons";

export default function Contact() {
  const [company, setCompany] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const companyData = await getCompanyData();
      setCompany(companyData);
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: "",
        email: "",
        message: ""
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  if (!company) {
    return <div>Loading...</div>;
  }

  return (
    <section id="contact" className="py-16 bg-theme-primary">
      <div className="container-custom mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-theme-primary-color mb-12">
          Get in Touch
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="bg-theme-icon w-10 h-10 rounded-lg flex items-center justify-center mr-4">
                <IconPerson className="w-5 h-5 text-theme-primary-color" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-theme-primary mb-1">
                  Contact Person
                </h3>
                <p className="text-theme-secondary">
                  {company.contact.person}
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-theme-icon w-10 h-10 rounded-lg flex items-center justify-center mr-4">
                <IconPhone className="w-5 h-5 text-theme-primary-color" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-theme-primary mb-1">
                  Phone
                </h3>
                <a
                  href={`tel:${company.contact.phone.replace(/\s/g, '')}`}
                  className="text-theme-secondary hover:text-theme-primary-color transition-colors"
                >
                  {company.contact.phone}
                </a>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-theme-icon w-10 h-10 rounded-lg flex items-center justify-center mr-4">
                <IconLocation className="w-5 h-5 text-theme-primary-color" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-theme-primary mb-1">
                  Address
                </h3>
                <p className="text-theme-secondary">
                  {company.contact.address}
                </p>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="bg-theme-card rounded-lg h-64 overflow-hidden card-shadow">
              <div className="w-full h-full flex items-center justify-center text-theme-tertiary">
                Map will be displayed here
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-theme-card rounded-xl p-6 card-shadow">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-theme-primary mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-theme-border rounded-lg focus:outline-none focus:ring-2 focus:ring-theme-primary-color bg-theme-input text-theme-primary"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-theme-primary mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-theme-border rounded-lg focus:outline-none focus:ring-2 focus:ring-theme-primary-color bg-theme-input text-theme-primary"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-theme-primary mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-2 border border-theme-border rounded-lg focus:outline-none focus:ring-2 focus:ring-theme-primary-color bg-theme-input text-theme-primary"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-theme-primary-color hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors disabled:opacity-70"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              {submitSuccess && (
                <div className="mt-4 p-3 bg-theme-success-bg text-theme-success rounded-lg">
                  Thank you for your message! We'll get back to you soon.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
