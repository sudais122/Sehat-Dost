import { useState } from "react";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

const mockDoctors = [
  { id: 1, name: "Dr. Sarah Johnson", specialty: "Cardiology", hospital: "City Hospital", status: "Approved" as const },
  { id: 2, name: "Dr. Michael Chen", specialty: "Neurology", hospital: "Metro Medical", status: "Pending" as const },
  { id: 3, name: "Dr. Emily Davis", specialty: "Pediatrics", hospital: "Children's Care", status: "Approved" as const },
  { id: 4, name: "Dr. James Wilson", specialty: "Orthopedics", hospital: "Bone & Joint Center", status: "Rejected" as const },
  { id: 5, name: "Dr. Priya Patel", specialty: "Dermatology", hospital: "Skin Care Clinic", status: "Pending" as const },
  { id: 6, name: "Dr. Robert Lee", specialty: "Oncology", hospital: "Cancer Institute", status: "Approved" as const },
];

const statusClass = {
  Approved: "status-approved",
  Pending: "status-pending",
  Rejected: "status-rejected",
};

export default function DoctorsPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<"All" | "Approved" | "Pending" | "Rejected">("All");
  const navigate = useNavigate();

  const filtered = mockDoctors.filter((d) => {
    const matchesSearch = d.name.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === "All" || d.status === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="p-6 lg:p-8 animate-fade-in">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
        <h1 className="text-2xl font-bold text-accent-foreground">Doctors</h1>

        {/* Filter Buttons */}
        <div className="flex gap-2">
          {["All", "Approved", "Pending", "Rejected"].map((status) => (
            <button
              key={status}
              onClick={() => setFilter(status as any)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                filter === status
                  ? "bg-primary text-primary-foreground"
                  : "bg-card border border-border text-foreground hover:bg-primary/10"
              }`}
            >
              {status}
            </button>
          ))}
        </div>
      </div>

      <div className="relative mb-4 max-w-sm">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search doctors..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-2 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm"
        />
      </div>

      <div className="bg-card rounded-lg border border-border overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="table-header">
              <th className="text-left p-3 text-sm font-medium">Name</th>
              <th className="text-left p-3 text-sm font-medium">Specialty</th>
              <th className="text-left p-3 text-sm font-medium">Hospital</th>
              <th className="text-left p-3 text-sm font-medium">Status</th>
              <th className="text-left p-3 text-sm font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((doc) => (
              <tr key={doc.id} className="border-t border-border hover:bg-muted/50 transition-colors">
                <td className="p-3 text-sm font-medium text-foreground">{doc.name}</td>
                <td className="p-3 text-sm text-muted-foreground">{doc.specialty}</td>
                <td className="p-3 text-sm text-muted-foreground">{doc.hospital}</td>
                <td className="p-3">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${statusClass[doc.status]}`}>
                    {doc.status}
                  </span>
                </td>
                <td className="p-3">
                  <button
                    onClick={() => navigate(`/doctors/${doc.id}`)}
                    className="px-3 py-1 rounded text-xs font-medium bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                  >
                    View More
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}