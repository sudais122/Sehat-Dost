const mockQuestions = [
  { id: 1, question: "What are the early symptoms of diabetes?", disease: "Diabetes", answers: 5, date: "2026-02-08" },
  { id: 2, question: "How is hypertension diagnosed?", disease: "Hypertension", answers: 3, date: "2026-02-07" },
  { id: 3, question: "Is asthma hereditary?", disease: "Asthma", answers: 8, date: "2026-02-06" },
  { id: 4, question: "What vaccines are available for influenza?", disease: "Influenza", answers: 4, date: "2026-02-05" },
  { id: 5, question: "Can Alzheimer's be prevented?", disease: "Alzheimer's", answers: 6, date: "2026-02-04" },
];

export default function QuestionsPage() {
  return (
    <div className="p-6 lg:p-8 animate-fade-in">
      <h1 className="text-2xl font-bold text-accent-foreground mb-6">Questions & Answers</h1>

      <div className="space-y-4">
        {mockQuestions.map((q) => (
          <div key={q.id} className="bg-card border border-border rounded-lg p-5 border-l-4 border-l-primary">
            <h3 className="font-semibold text-accent-foreground">{q.question}</h3>
            <div className="flex items-center gap-4 mt-2">
              <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-secondary/30 text-accent-foreground">{q.disease}</span>
              <span className="text-xs text-muted-foreground">{q.answers} answers</span>
              <span className="text-xs text-muted-foreground">{q.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
