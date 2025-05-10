import { IconQuote } from "@/app/components/atoms/Icons";

export default function TestimonialCard({ testimonial }) {
  return (
    <div className="bg-theme-card rounded-xl p-6 card-shadow">
      <div className="flex items-start mb-4">
        <div className="bg-theme-icon w-8 h-8 rounded-lg flex items-center justify-center mr-3">
          <IconQuote className="w-5 h-5 text-theme-primary-color" />
        </div>
      </div>
      
      <blockquote className="text-theme-secondary mb-6 italic">
        {testimonial.quote}
      </blockquote>
      
      <div className="mt-auto">
        <p className="font-bold text-theme-primary">
          {testimonial.author}
        </p>
        <p className="text-theme-tertiary text-sm">
          {testimonial.position}
        </p>
      </div>
    </div>
  );
}
