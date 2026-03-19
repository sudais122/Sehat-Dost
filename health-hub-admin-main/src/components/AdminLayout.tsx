import { ReactNode } from "react";
import AdminSidebar from "@/components/AdminSidebar";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen w-full">
      <AdminSidebar />
      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </div>
  );
}
