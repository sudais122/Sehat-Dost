import { Droplets } from "lucide-react";

const bloodRequests = [
  { id: 1, patient: "John Smith", group: "A+", hospital: "City Hospital", urgency: "Critical" as const, units: 3 },
  { id: 2, patient: "Maria Garcia", group: "O-", hospital: "Metro Medical", urgency: "Immediate" as const, units: 2 },
  { id: 3, patient: "Ali Khan", group: "B+", hospital: "Sunrise Clinic", urgency: "Normal" as const, units: 1 },
  { id: 4, patient: "Lisa Chen", group: "AB+", hospital: "Cancer Institute", urgency: "Critical" as const, units: 4 },
  { id: 5, patient: "David Brown", group: "O+", hospital: "Heart Center", urgency: "Normal" as const, units: 2 },
];

const urgencyClass = {
  Critical: "urgency-critical",
  Immediate: "urgency-immediate",
  Normal: "urgency-normal",
};

export default function BloodBankPage() {
  return (
    <div className="p-6 lg:p-8 animate-fade-in">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-accent-foreground">Blood Bank</h1>
        <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-secondary transition-colors">
          + New Request
        </button>
      </div>

      <div className="space-y-4">
        {bloodRequests.map((req) => (
          <div key={req.id} className="bg-card border border-border rounded-lg p-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold text-sm">{req.group}</span>
                </div>
                <div>
                  <h3 className="font-semibold text-accent-foreground">{req.patient}</h3>
                  <p className="text-sm text-muted-foreground">{req.hospital} · {req.units} units</p>
                </div>
              </div>
              <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${urgencyClass[req.urgency]}`}>
                {req.urgency}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
