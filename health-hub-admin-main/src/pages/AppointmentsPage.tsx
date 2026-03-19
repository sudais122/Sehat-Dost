const mockAppointments = [
  { id: 1, patient: "John Smith", doctor: "Dr. Sarah Johnson", date: "2026-02-12", time: "10:00 AM", status: "Completed" as const },
  { id: 2, patient: "Maria Garcia", doctor: "Dr. Michael Chen", date: "2026-02-13", time: "2:30 PM", status: "Pending" as const },
  { id: 3, patient: "Ali Khan", doctor: "Dr. Emily Davis", date: "2026-02-14", time: "9:00 AM", status: "Pending" as const },
  { id: 4, patient: "Lisa Chen", doctor: "Dr. James Wilson", date: "2026-02-10", time: "11:30 AM", status: "Cancelled" as const },
  { id: 5, patient: "David Brown", doctor: "Dr. Priya Patel", date: "2026-02-11", time: "4:00 PM", status: "Completed" as const },
];

const statusStyle = {
  Completed: "status-approved",
  Pending: "status-pending",
  Cancelled: "bg-muted text-muted-foreground",
};

export default function AppointmentsPage() {
  return (
    <div className="p-6 lg:p-8 animate-fade-in">
      <h1 className="text-2xl font-bold text-accent-foreground mb-6">Appointments</h1>

      <div className="bg-card rounded-lg border border-border overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="table-header">
              <th className="text-left p-3 text-sm font-medium">Patient</th>
              <th className="text-left p-3 text-sm font-medium">Doctor</th>
              <th className="text-left p-3 text-sm font-medium">Date</th>
              <th className="text-left p-3 text-sm font-medium">Time</th>
              <th className="text-left p-3 text-sm font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {mockAppointments.map((apt) => (
              <tr key={apt.id} className="border-t border-border hover:bg-muted/50 transition-colors">
                <td className="p-3 text-sm font-medium text-foreground">{apt.patient}</td>
                <td className="p-3 text-sm text-muted-foreground">{apt.doctor}</td>
                <td className="p-3 text-sm text-muted-foreground">{apt.date}</td>
                <td className="p-3 text-sm text-muted-foreground">{apt.time}</td>
                <td className="p-3">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${statusStyle[apt.status]}`}>{apt.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
