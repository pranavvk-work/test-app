import { IconConsulting, IconManaged, IconCompliance, IconAutomation, IconMarketplace } from "@/app/components/atoms/Icons";

export default function ServiceCard({ service }) {
  // Map service icon to the appropriate component
  const getIcon = (iconName) => {
    switch (iconName) {
      case "consulting":
        return <IconConsulting className="w-9 h-9 text-theme-primary-color" />;
      case "managed":
        return <IconManaged className="w-9 h-9 text-theme-primary-color" />;
      case "compliance":
        return <IconCompliance className="w-9 h-9 text-theme-primary-color" />;
      case "automation":
        return <IconAutomation className="w-9 h-9 text-theme-primary-color" />;
      case "marketplace":
        return <IconMarketplace className="w-9 h-9 text-theme-primary-color" />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-theme-card rounded-xl p-6 card-shadow transition-all hover:translate-y-[-5px]">
      <div className="bg-theme-icon w-12 h-12 rounded-lg flex items-center justify-center mb-4">
        {getIcon(service.icon)}
      </div>
      
      <h3 className="text-xl font-bold text-theme-primary mb-3">
        {service.title}
      </h3>
      
      <p className="text-theme-secondary">
        {service.description}
      </p>
    </div>
  );
}
