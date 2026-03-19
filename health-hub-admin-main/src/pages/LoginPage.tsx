import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { Lock, Mail } from "lucide-react";

const LoginPage = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!login(email, password)) {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="w-full max-w-md animate-fade-in">
        <div className="bg-card border border-border rounded-xl shadow-lg p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lock className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-2xl font-bold text-accent-foreground">Admin Panel Login</h1>
            <p className="text-muted-foreground mt-1">Sign in to manage your medical platform</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-accent-foreground mb-1.5">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-colors"
                  placeholder="admin@gmail.com"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-accent-foreground mb-1.5">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-colors"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            {error && (
              <p className="text-destructive text-sm text-center">{error}</p>
            )}

            <button
              type="submit"
              className="w-full py-2.5 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-secondary transition-colors"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
