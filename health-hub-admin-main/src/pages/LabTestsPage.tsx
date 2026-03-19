import { Plus } from "lucide-react";

const mockTests = [
  { id: 1, name: "Complete Blood Count (CBC)", category: "Hematology", price: 25, turnaround: "4 hours" },
  { id: 2, name: "Lipid Panel", category: "Biochemistry", price: 45, turnaround: "6 hours" },
  { id: 3, name: "Thyroid Function", category: "Endocrinology", price: 60, turnaround: "24 hours" },
  { id: 4, name: "Liver Function Test", category: "Biochemistry", price: 35, turnaround: "8 hours" },
  { id: 5, name: "Urinalysis", category: "Clinical Pathology", price: 15, turnaround: "2 hours" },
  { id: 6, name: "HbA1c", category: "Endocrinology", price: 40, turnaround: "12 hours" },
];

export default function LabTestsPage() {
  return (
    <div className="p-6 lg:p-8 animate-fade-in">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-accent-foreground">Lab Tests</h1>
        <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-secondary transition-colors">
          <Plus className="w-4 h-4" /> Add Test
        </button>
      </div>

      <div className="bg-card rounded-lg border border-border overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="table-header">
              <th className="text-left p-3 text-sm font-medium">Test Name</th>
              <th className="text-left p-3 text-sm font-medium">Category</th>
              <th className="text-left p-3 text-sm font-medium">Price</th>
              <th className="text-left p-3 text-sm font-medium">Turnaround</th>
              <th className="text-left p-3 text-sm font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {mockTests.map((test) => (
              <tr key={test.id} className="border-t border-border hover:bg-muted/50 transition-colors">
                <td className="p-3 text-sm font-medium text-foreground">{test.name}</td>
                <td className="p-3 text-sm text-muted-foreground">{test.category}</td>
                <td className="p-3 text-sm font-bold text-accent-foreground">${test.price}</td>
                <td className="p-3 text-sm text-muted-foreground">{test.turnaround}</td>
                <td className="p-3 flex gap-2">
                  <button className="px-3 py-1 rounded text-xs font-medium bg-primary/10 text-primary hover:bg-primary/20 transition-colors">Edit</button>
                  <button className="px-3 py-1 rounded text-xs font-medium bg-destructive/10 text-destructive hover:bg-destructive/20 transition-colors">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
