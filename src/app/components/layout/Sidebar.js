import Image from 'next/image';
import Link from 'next/link';

export default function Sidebar() {
  const navItems = [
    { icon: '/images/health_icon.svg', label: 'Health', active: false },
    { icon: '/images/policy_icon.svg', label: 'Policies', active: false },
    { icon: '/images/issues_icon.svg', label: 'Issues', active: true },
    { icon: '/images/document_icon.svg', label: 'Documents', active: false },
    { icon: '/images/assessment_icon.svg', label: 'Assessments', active: false },
    { icon: '/images/compliance_icon.svg', label: 'Compliance', active: false },
  ];

  return (
    <div className="w-64 bg-white border-r border-border-color flex flex-col h-full shadow-sm">
      <div className="px-6 pt-6 pb-4">
        <Image 
          src="/images/logo.svg" 
          alt="Skysecure Logo" 
          width={160} 
          height={40} 
          priority
          className="mb-2"
        />
      </div>
      
      <nav className="flex-1 p-4 space-y-1">
        {navItems.map((item) => (
          <Link 
            key={item.label} 
            href="#"
            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
              item.active 
                ? 'bg-light-blue text-primary font-medium' 
                : 'text-dark-text hover:bg-gray-50'
            }`}
          >
            <div className={`w-5 h-5 flex items-center justify-center ${item.active ? 'text-primary' : 'text-muted-text'}`}>
              <Image 
                src={item.icon} 
                alt={`${item.label} icon`} 
                width={20} 
                height={20} 
              />
            </div>
            <span className="text-sm">{item.label}</span>
          </Link>
        ))}
      </nav>

      <div className="p-5 border-t border-border-color mt-auto">
        <div className="flex items-center space-x-3">
          <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 font-medium text-sm">
            PS
          </div>
          <div>
            <p className="text-sm font-medium text-dark-text">Pranav Skysecure</p>
            <p className="text-xs text-muted-text">Admin</p>
          </div>
        </div>
      </div>
    </div>
  );
} 