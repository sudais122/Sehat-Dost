const mockPayments = [
  { id: 1, patient: "John Smith", amount: 450, method: "Credit Card", date: "2026-02-10", status: "Completed" as const },
  { id: 2, patient: "Maria Garcia", amount: 120, method: "Insurance", date: "2026-02-09", status: "Pending" as const },
  { id: 3, patient: "Ali Khan", amount: 300, method: "Cash", date: "2026-02-08", status: "Completed" as const },
  { id: 4, patient: "Lisa Chen", amount: 85, method: "Debit Card", date: "2026-02-07", status: "Cancelled" as const },
  { id: 5, patient: "David Brown", amount: 560, method: "Insurance", date: "2026-02-06", status: "Completed" as const },
];

const statusStyle = {
  Completed: "status-approved",
  Pending: "status-pending",
  Cancelled: "bg-muted text-muted-foreground",
};

export default function PaymentsPage() {
  return (
    <div className="p-6 lg:p-8 animate-fade-in">
      <h1 className="text-2xl font-bold text-accent-foreground mb-6">Payments</h1>

      <div className="bg-card rounded-lg border border-border overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="table-header">
              <th className="text-left p-3 text-sm font-medium">Patient</th>
              <th className="text-left p-3 text-sm font-medium">Amount</th>
              <th className="text-left p-3 text-sm font-medium">Method</th>
              <th className="text-left p-3 text-sm font-medium">Date</th>
              <th className="text-left p-3 text-sm font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {mockPayments.map((pay) => (
              <tr key={pay.id} className="border-t border-border hover:bg-muted/50 transition-colors">
                <td className="p-3 text-sm font-medium text-foreground">{pay.patient}</td>
                <td className="p-3 text-sm font-bold text-accent-foreground">${pay.amount.toFixed(2)}</td>
                <td className="p-3 text-sm text-muted-foreground">{pay.method}</td>
                <td className="p-3 text-sm text-muted-foreground">{pay.date}</td>
                <td className="p-3">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${statusStyle[pay.status]}`}>{pay.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
