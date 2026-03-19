import { NavLink, useLocation } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import {
  LayoutDashboard,
  Stethoscope,
  Building2,
  FlaskConical,
  Pill,
  Bug,
  Droplets,
  HelpCircle,
  CalendarCheck,
  CreditCard,
  Settings,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

const menuItems = [
  { title: "Dashboard", path: "/", icon: LayoutDashboard },
  { title: "Doctors", path: "/doctors", icon: Stethoscope },
  { title: "Hospitals", path: "/hospitals", icon: Building2 },
  { title: "Lab Tests", path: "/lab-tests", icon: FlaskConical },
  { title: "Medicines", path: "/medicines", icon: Pill },
  { title: "Diseases", path: "/diseases", icon: Bug },
  { title: "Blood Bank", path: "/blood-bank", icon: Droplets },
  { title: "Questions", path: "/questions", icon: HelpCircle },
  { title: "Appointments", path: "/appointments", icon: CalendarCheck },
  { title: "Payments", path: "/payments", icon: CreditCard },
  { title: "Settings", path: "/settings", icon: Settings },
];

export default function AdminSidebar() {
  const { logout } = useAuth();
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={`${
        collapsed ? "w-16" : "w-64"
      } min-h-screen bg-sidebar text-sidebar-foreground flex flex-col transition-all duration-300 shrink-0`}
    >
      <div className="p-4 flex items-center justify-between border-b border-sidebar-border">
        {!collapsed && <h2 className="text-lg font-bold tracking-tight">MedAdmin</h2>}
        <button onClick={() => setCollapsed(!collapsed)} className="p-1.5 rounded-md hover:bg-sidebar-accent transition-colors">
          {collapsed ? <Menu className="w-5 h-5" /> : <X className="w-5 h-5" />}
        </button>
      </div>

      <nav className="flex-1 py-4 space-y-1 px-2 overflow-y-auto">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                isActive
                  ? "bg-sidebar-primary text-sidebar-primary-foreground"
                  : "text-sidebar-foreground/80 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              }`}
            >
              <item.icon className="w-5 h-5 shrink-0" />
              {!collapsed && <span>{item.title}</span>}
            </NavLink>
          );
        })}
      </nav>

      <div className="p-2 border-t border-sidebar-border">
        <button
          onClick={logout}
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium w-full text-sidebar-foreground/80 hover:bg-destructive/20 hover:text-destructive transition-colors"
        >
          <LogOut className="w-5 h-5 shrink-0" />
          {!collapsed && <span>Logout</span>}
        </button>
      </div>
    </aside>
  );
}
