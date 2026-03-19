const mockDiseases = [
  { id: 1, name: "Type 2 Diabetes", category: "Endocrine", affected: "462M globally", severity: "Chronic" },
  { id: 2, name: "Hypertension", category: "Cardiovascular", affected: "1.28B globally", severity: "Chronic" },
  { id: 3, name: "Asthma", category: "Respiratory", affected: "262M globally", severity: "Chronic" },
  { id: 4, name: "Influenza", category: "Infectious", affected: "Seasonal", severity: "Acute" },
  { id: 5, name: "Alzheimer's Disease", category: "Neurological", affected: "55M globally", severity: "Chronic" },
  { id: 6, name: "Malaria", category: "Infectious", affected: "247M globally", severity: "Acute" },
];

export default function DiseasesPage() {
  return (
    <div className="p-6 lg:p-8 animate-fade-in">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-accent-foreground">Diseases</h1>
        <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-secondary transition-colors">
          + Add Disease
        </button>
      </div>

      <div className="space-y-4">
        {mockDiseases.map((d) => (
          <div key={d.id} className="bg-card border border-border rounded-lg p-5 border-l-4 border-l-secondary">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-accent-foreground">{d.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">Affected: {d.affected}</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">{d.category}</span>
                <span className="text-xs text-muted-foreground">{d.severity}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
