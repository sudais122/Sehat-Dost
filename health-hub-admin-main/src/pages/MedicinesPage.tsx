const mockMedicines = [
  { id: 1, name: "Amoxicillin", category: "Antibiotic", dosage: "500mg", manufacturer: "PharmaCo", price: 12.50 },
  { id: 2, name: "Metformin", category: "Antidiabetic", dosage: "850mg", manufacturer: "MedLife", price: 8.00 },
  { id: 3, name: "Atorvastatin", category: "Statin", dosage: "20mg", manufacturer: "CardioPharma", price: 15.00 },
  { id: 4, name: "Omeprazole", category: "PPI", dosage: "40mg", manufacturer: "GastroMed", price: 10.00 },
  { id: 5, name: "Lisinopril", category: "ACE Inhibitor", dosage: "10mg", manufacturer: "HeartCare", price: 9.50 },
  { id: 6, name: "Cetirizine", category: "Antihistamine", dosage: "10mg", manufacturer: "AllergyFree", price: 6.00 },
];

export default function MedicinesPage() {
  return (
    <div className="p-6 lg:p-8 animate-fade-in">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-accent-foreground">Medicines</h1>
        <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-secondary transition-colors">
          + Add Medicine
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {mockMedicines.map((med) => (
          <div key={med.id} className="bg-card border border-border rounded-lg p-5 hover:border-primary transition-colors">
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-lg font-semibold text-accent-foreground">{med.name}</h3>
              <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">{med.category}</span>
            </div>
            <p className="text-sm text-muted-foreground mb-1">Dosage: {med.dosage}</p>
            <p className="text-sm text-muted-foreground mb-3">By {med.manufacturer}</p>
            <p className="text-xl font-bold text-accent-foreground">${med.price.toFixed(2)}</p>
            <button className="mt-3 px-4 py-1.5 rounded text-xs font-medium bg-secondary/30 text-accent-foreground hover:bg-secondary/50 transition-colors">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
