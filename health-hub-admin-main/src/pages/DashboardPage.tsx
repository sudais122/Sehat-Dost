import { Stethoscope, Building2, FlaskConical, Pill, CalendarCheck, CreditCard, Users, Droplets } from "lucide-react";

const stats = [
  { label: "Total Doctors", value: 128, icon: Stethoscope },
  { label: "Hospitals", value: 45, icon: Building2 },
  { label: "Lab Tests", value: 312, icon: FlaskConical },
  { label: "Medicines", value: 1024, icon: Pill },
  { label: "Appointments", value: 89, icon: CalendarCheck },
  { label: "Payments", value: 256, icon: CreditCard },
  { label: "Patients", value: 3420, icon: Users },
  { label: "Blood Donors", value: 187, icon: Droplets },
];

const recentActivities = [
  { text: "Dr. Sarah Johnson approved", time: "2 min ago" },
  { text: "New blood request from City Hospital", time: "15 min ago" },
  { text: "Lab test report uploaded", time: "1 hour ago" },
  { text: "Payment received - $450", time: "2 hours ago" },
  { text: "New hospital registered", time: "3 hours ago" },
];

export default function DashboardPage() {
  return (
    <div className="p-6 lg:p-8 animate-fade-in">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-accent-foreground">Dashboard Overview</h1>
        <p className="text-muted-foreground mt-1">Welcome back, Admin</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        {stats.map((stat) => (
          <div key={stat.label} className="stat-card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-primary font-medium">{stat.label}</p>
                <p className="text-3xl font-bold text-accent-foreground mt-1">{stat.value.toLocaleString()}</p>
              </div>
              <div className="w-12 h-12 rounded-lg bg-secondary/30 flex items-center justify-center">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-card rounded-lg border border-border p-6">
        <h2 className="text-lg font-semibold text-accent-foreground mb-4">Recent Activity</h2>
        <div className="space-y-4">
          {recentActivities.map((activity, i) => (
            <div key={i} className="flex items-center justify-between py-2 border-b border-border last:border-0">
              <span className="text-sm text-foreground">{activity.text}</span>
              <span className="text-xs text-muted-foreground">{activity.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
