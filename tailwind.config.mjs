/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/app/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563EB", // Blue from the design
        secondary: "#1E293B", // Dark text color
        accent: "#D1FAE5", // Light green for accents
        "light-blue": "#EFF6FF", // Light blue background
        "dark-text": "#1E293B", // Dark text color 
        "light-text": "#4B5563", // Light text color
        "muted-text": "#64748B", // Muted text color
        success: "#059669", // Green success color
        warning: "#D97706", // Orange warning color  
        error: "#DC2626", // Red error color
        background: "#F9FAFB", // Light gray background
        "card-bg": "#FFFFFF", // Card background
        "light-gray": "#F9FAFB", // Light gray background
        "border-color": "#E5E7EB", // Border color
        "red-50": "#FEF2F2", // Light red background
        "orange-50": "#FFF7ED", // Light orange background
        "green-50": "#ECFDF5", // Light green background
        "blue-50": "#EFF6FF", // Light blue background
        "gray-50": "#F9FAFB", // Light gray background
        "gray-100": "#F3F4F6", // Slightly darker gray
        "gray-200": "#E5E7EB", // Border color
      },
      fontFamily: {
        inter: ['var(--font-inter)'],
        roboto: ['var(--font-roboto)'],
      },
      boxShadow: {
        card: "0px 1px 2px 0px rgba(0, 0, 0, 0.05)",
        dialog: "0px 20px 25px 0px rgba(0, 0, 0, 0.1), 0px 8px 10px 0px rgba(0, 0, 0, 0.1)",
        button: "0px 10px 15px 0px rgba(0, 0, 0, 0.1), 0px 4px 6px 0px rgba(0, 0, 0, 0.1)",
        sm: "0px 1px 2px 0px rgba(0, 0, 0, 0.05)",
        md: "0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)"
      },
      borderRadius: {
        card: "12px",
        button: "8px",
        pill: "9999px",
      },
    },
  },
  plugins: [],
}; 