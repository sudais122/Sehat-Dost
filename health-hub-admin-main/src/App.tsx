import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "@/contexts/AuthContext";
import AdminLayout from "@/components/AdminLayout";

import LoginPage from "@/pages/LoginPage";
import DashboardPage from "@/pages/DashboardPage";
import DoctorsPage from "@/pages/DoctorsPage";
import DoctorDetailPage from "@/pages/DoctorDetailPage"; // New detail page
import HospitalsPage from "@/pages/HospitalsPage";
import LabTestsPage from "@/pages/LabTestsPage";
import MedicinesPage from "@/pages/MedicinesPage";
import DiseasesPage from "@/pages/DiseasesPage";
import BloodBankPage from "@/pages/BloodBankPage";
import QuestionsPage from "@/pages/QuestionsPage";
import AppointmentsPage from "@/pages/AppointmentsPage";
import PaymentsPage from "@/pages/PaymentsPage";
import SettingsPage from "@/pages/SettingsPage";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

function ProtectedRoutes() {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) return <Navigate to="/login" replace />;

  return (
    <AdminLayout>
      <Routes>
        <Route path="/" element={<DashboardPage />} />

        {/* Doctors routes */}
        <Route path="/doctors" element={<DoctorsPage />} />
        <Route path="/doctors/:id" element={<DoctorDetailPage />} />

        <Route path="/hospitals" element={<HospitalsPage />} />
        <Route path="/lab-tests" element={<LabTestsPage />} />
        <Route path="/medicines" element={<MedicinesPage />} />
        <Route path="/diseases" element={<DiseasesPage />} />
        <Route path="/blood-bank" element={<BloodBankPage />} />
        <Route path="/questions" element={<QuestionsPage />} />
        <Route path="/appointments" element={<AppointmentsPage />} />
        <Route path="/payments" element={<PaymentsPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AdminLayout>
  );
}

function AppRoutes() {
  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      <Route
        path="/login"
        element={isAuthenticated ? <Navigate to="/" replace /> : <LoginPage />}
      />
      <Route path="/*" element={<ProtectedRoutes />} />
    </Routes>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AuthProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;