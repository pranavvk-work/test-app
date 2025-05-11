import Sidebar from '../components/layout/Sidebar';
import TopNav from '../components/layout/TopNav';

export default function DashboardLayout({ children }) {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <TopNav />
        {children}
      </div>
    </div>
  );
} 