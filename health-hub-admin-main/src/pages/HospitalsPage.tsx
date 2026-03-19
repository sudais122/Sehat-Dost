import { Plus, MapPin, Phone } from "lucide-react";

const mockHospitals = [
  { id: 1, name: "City General Hospital", location: "Downtown", beds: 500, phone: "+1-555-0101", departments: 12 },
  { id: 2, name: "Metro Medical Center", location: "Midtown", beds: 350, phone: "+1-555-0102", departments: 8 },
  { id: 3, name: "Children's Care Hospital", location: "East Side", beds: 200, phone: "+1-555-0103", departments: 6 },
  { id: 4, name: "Sunrise Health Clinic", location: "West End", beds: 150, phone: "+1-555-0104", departments: 5 },
  { id: 5, name: "Cancer Research Institute", location: "North District", beds: 280, phone: "+1-555-0105", departments: 4 },
  { id: 6, name: "Heart & Vascular Center", location: "South Park", beds: 120, phone: "+1-555-0106", departments: 3 },
];

export default function HospitalsPage() {
  return (
    <div className="p-6 lg:p-8 animate-fade-in">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-accent-foreground">Hospitals</h1>
        <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-secondary transition-colors">
          <Plus className="w-4 h-4" /> Add Hospital
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {mockHospitals.map((h) => (
          <div key={h.id} className="bg-card border border-border rounded-lg p-5 hover:border-primary transition-colors">
            <h3 className="text-lg font-semibold text-accent-foreground mb-3">{h.name}</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" />{h.location}</div>
              <div className="flex items-center gap-2"><Phone className="w-4 h-4 text-primary" />{h.phone}</div>
              <div className="flex gap-4 mt-3">
                <span className="text-accent-foreground font-medium">{h.beds} Beds</span>
                <span className="text-accent-foreground font-medium">{h.departments} Depts</span>
              </div>
            </div>
            <div className="flex gap-2 mt-4">
              <button className="px-3 py-1.5 rounded text-xs font-medium bg-secondary/30 text-accent-foreground hover:bg-secondary/50 transition-colors">Edit</button>
              <button className="px-3 py-1.5 rounded text-xs font-medium bg-destructive/10 text-destructive hover:bg-destructive/20 transition-colors">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
